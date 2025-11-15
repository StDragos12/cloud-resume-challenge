variable "subscription_id" {
  description = "Azure subscription ID to deploy into"
  type        = string
}

variable "project_prefix" {
  description = "Prefix used for naming resources"
  type        = string
  default     = "stdragoscr"
}

variable "location" {
  description = "Azure region"
  type        = string
  default     = "germanywestcentral"
}

variable "cosmos_db_name" {
  description = "Existing Cosmos DB SQL database name"
  type        = string
  default     = "portfolio"
}

variable "cosmos_container_name" {
  description = "Existing Cosmos DB SQL container name"
  type        = string
  default     = "views"
}
