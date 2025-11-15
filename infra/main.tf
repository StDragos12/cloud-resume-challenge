terraform {
  required_version = ">= 1.6.0"

  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~> 4.0"
    }
    random = {
      source  = "hashicorp/random"
      version = "~> 3.6"
    }
  }
}

provider "azurerm" {
  features {}
  subscription_id = var.subscription_id
}

resource "random_string" "suffix" {
  length  = 6
  upper   = false
  lower   = true
  numeric = true
  special = false
}


locals {
  rg_name             = "${var.project_prefix}-rg"                                    
  func_storage_name   = "${var.project_prefix}sa${random_string.suffix.result}"     
  plan_name           = "${var.project_prefix}-plan-${random_string.suffix.result}"   
  law_name            = "${var.project_prefix}-law-${random_string.suffix.result}"   
  appi_name           = "${var.project_prefix}-appi-${random_string.suffix.result}"   
  cosmos_account_name = "${var.project_prefix}-cosmos-${random_string.suffix.result}" 
  func_app_name       = "${var.project_prefix}-func-${random_string.suffix.result}"   

  web_storage_name        = "${var.project_prefix}websa${random_string.suffix.result}"
  frontdoor_profile_name  = "${var.project_prefix}-afd-${random_string.suffix.result}"
  frontdoor_endpoint_name = "${var.project_prefix}-afd-endpoint-${random_string.suffix.result}"
  frontdoor_origin_group  = "${var.project_prefix}-afd-og"
  frontdoor_origin_name   = "${var.project_prefix}-afd-origin"
  frontdoor_route_name    = "${var.project_prefix}-afd-route"
}

resource "azurerm_resource_group" "this" {
  name     = local.rg_name
  location = var.location
}

resource "azurerm_storage_account" "func_storage" {
  name                = local.func_storage_name
  resource_group_name = azurerm_resource_group.this.name
  location            = azurerm_resource_group.this.location

  account_tier             = "Standard"
  account_replication_type = "LRS"
  account_kind             = "StorageV2"

  https_traffic_only_enabled    = true
  min_tls_version               = "TLS1_2"
  public_network_access_enabled = true

  allow_nested_items_to_be_public = false
}

resource "azurerm_service_plan" "func_plan" {
  name                = local.plan_name
  resource_group_name = azurerm_resource_group.this.name
  location            = azurerm_resource_group.this.location

  os_type  = "Linux"
  sku_name = "Y1" 
}

resource "azurerm_log_analytics_workspace" "law" {
  name                = local.law_name
  location            = azurerm_resource_group.this.location
  resource_group_name = azurerm_resource_group.this.name
  sku                 = "PerGB2018"
  retention_in_days   = 30
}

resource "azurerm_application_insights" "appi" {
  name                = local.appi_name
  location            = azurerm_resource_group.this.location
  resource_group_name = azurerm_resource_group.this.name
  application_type    = "web"
  workspace_id        = azurerm_log_analytics_workspace.law.id
}

resource "azurerm_cosmosdb_account" "cosmos" {
  name                = local.cosmos_account_name
  location            = azurerm_resource_group.this.location
  resource_group_name = azurerm_resource_group.this.name

  offer_type = "Standard"
  kind       = "GlobalDocumentDB"

  capabilities {
    name = "EnableServerless"
  }

  consistency_policy {
    consistency_level       = "Session"
    max_interval_in_seconds = 5
    max_staleness_prefix    = 100
  }

  geo_location {
    location          = azurerm_resource_group.this.location
    failover_priority = 0
  }
}

resource "azurerm_cosmosdb_sql_database" "db" {
  name                = var.cosmos_db_name # "portfolio"
  resource_group_name = azurerm_resource_group.this.name
  account_name        = azurerm_cosmosdb_account.cosmos.name
}

resource "azurerm_cosmosdb_sql_container" "views" {
  name                = var.cosmos_container_name # "views"
  resource_group_name = azurerm_resource_group.this.name
  account_name        = azurerm_cosmosdb_account.cosmos.name
  database_name       = azurerm_cosmosdb_sql_database.db.name

  partition_key_paths = ["/partitionKey"]

  indexing_policy {
    indexing_mode = "consistent"

    included_path {
      path = "/*"
    }
  }

  conflict_resolution_policy {
    mode                     = "LastWriterWins"
    conflict_resolution_path = "/_ts"
  }
}

resource "azurerm_linux_function_app" "func" {
  name                = local.func_app_name
  resource_group_name = azurerm_resource_group.this.name
  location            = azurerm_resource_group.this.location

  service_plan_id            = azurerm_service_plan.func_plan.id
  storage_account_name       = azurerm_storage_account.func_storage.name
  storage_account_access_key = azurerm_storage_account.func_storage.primary_access_key

  https_only = true

  site_config {
    application_stack {
      python_version = "3.11"
    }

    ftps_state = "Disabled"
  }

  app_settings = {
    "FUNCTIONS_WORKER_RUNTIME" = "python"
    "AzureWebJobsStorage"      = azurerm_storage_account.func_storage.primary_connection_string
    "WEBSITE_RUN_FROM_PACKAGE" = "1"

    "COSMOS_URL"       = azurerm_cosmosdb_account.cosmos.endpoint
    "COSMOS_DB"        = azurerm_cosmosdb_sql_database.db.name
    "COSMOS_CONTAINER" = azurerm_cosmosdb_sql_container.views.name
    "COSMOS_KEY"       = azurerm_cosmosdb_account.cosmos.primary_key

    "APPINSIGHTS_INSTRUMENTATIONKEY"        = azurerm_application_insights.appi.instrumentation_key
    "APPLICATIONINSIGHTS_CONNECTION_STRING" = azurerm_application_insights.appi.connection_string
  }
}

resource "azurerm_storage_account" "web" {
  name                = local.web_storage_name
  resource_group_name = azurerm_resource_group.this.name
  location            = azurerm_resource_group.this.location

  account_tier             = "Standard"
  account_replication_type = "LRS"
  account_kind             = "StorageV2"

  https_traffic_only_enabled    = true
  min_tls_version               = "TLS1_2"
  public_network_access_enabled = true

  tags = {
    app = "portfolio-frontend"
  }
}

resource "azurerm_storage_account_static_website" "web" {
  storage_account_id = azurerm_storage_account.web.id
  index_document     = "index.html"
  error_404_document = "index.html"
}

resource "azurerm_cdn_frontdoor_profile" "fd" {
  name                = local.frontdoor_profile_name
  resource_group_name = azurerm_resource_group.this.name
  sku_name            = "Standard_AzureFrontDoor"

  tags = {
    app = "portfolio-frontend"
  }
}

resource "azurerm_cdn_frontdoor_endpoint" "web" {
  name                     = local.frontdoor_endpoint_name
  cdn_frontdoor_profile_id = azurerm_cdn_frontdoor_profile.fd.id
}

resource "azurerm_cdn_frontdoor_origin_group" "web" {
  name                     = local.frontdoor_origin_group
  cdn_frontdoor_profile_id = azurerm_cdn_frontdoor_profile.fd.id

  session_affinity_enabled = true

  health_probe {
    protocol            = "Https"
    path                = "/"
    interval_in_seconds = 120
    request_type        = "HEAD"
  }

  load_balancing {
    sample_size                        = 4
    successful_samples_required        = 3
    additional_latency_in_milliseconds = 50
  }
}

resource "azurerm_cdn_frontdoor_origin" "web" {
  name                          = local.frontdoor_origin_name
  cdn_frontdoor_origin_group_id = azurerm_cdn_frontdoor_origin_group.web.id

  enabled = true

  host_name          = azurerm_storage_account.web.primary_web_host
  origin_host_header = azurerm_storage_account.web.primary_web_host
  http_port          = 80
  https_port         = 443
  priority           = 1
  weight             = 1000

  certificate_name_check_enabled = true
}

resource "azurerm_cdn_frontdoor_route" "web" {
  name                          = local.frontdoor_route_name
  cdn_frontdoor_endpoint_id     = azurerm_cdn_frontdoor_endpoint.web.id
  cdn_frontdoor_origin_group_id = azurerm_cdn_frontdoor_origin_group.web.id
  cdn_frontdoor_origin_ids      = [azurerm_cdn_frontdoor_origin.web.id]

  enabled                = true
  patterns_to_match      = ["/*"]
  forwarding_protocol    = "HttpsOnly"
  https_redirect_enabled = true

  supported_protocols    = ["Http", "Https"]
  link_to_default_domain = true
}
