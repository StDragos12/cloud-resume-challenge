output "resource_group_name" {
  value       = azurerm_resource_group.this.name
  description = "Resource group used for all resources."
}

output "function_app_name" {
  value       = azurerm_linux_function_app.func.name
  description = "Name of the Function App."
}

output "function_default_hostname" {
  value       = azurerm_linux_function_app.func.default_hostname
  description = "Default hostname of the Function App."
}

output "cosmos_account_name" {
  value       = azurerm_cosmosdb_account.cosmos.name
  description = "Cosmos DB account name."
}

output "cosmos_db_name" {
  value       = azurerm_cosmosdb_sql_database.db.name
  description = "Cosmos DB SQL database name."
}

output "cosmos_container_name" {
  value       = azurerm_cosmosdb_sql_container.views.name
  description = "Cosmos DB container name."
}

output "static_website_url" {
  value       = azurerm_storage_account.web.primary_web_endpoint
  description = "Static website endpoint on the Storage Account."
}

output "frontdoor_url" {
  value       = "https://${azurerm_cdn_frontdoor_endpoint.web.host_name}"
  description = "Azure Front Door global endpoint for the frontend."
}
