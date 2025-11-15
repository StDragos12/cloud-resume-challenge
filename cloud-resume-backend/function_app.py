import logging
import json
import os

import azure.functions as func
from azure.cosmos import CosmosClient, exceptions

app = func.FunctionApp(http_auth_level=func.AuthLevel.ANONYMOUS)

COSMOS_URL = os.getenv("COSMOS_URL")
COSMOS_KEY = os.getenv("COSMOS_KEY")
COSMOS_DB = os.getenv("COSMOS_DB", "portfolio")
COSMOS_CONTAINER = os.getenv("COSMOS_CONTAINER", "views")


def _get_container():
    client = CosmosClient(COSMOS_URL, credential=COSMOS_KEY)
    db = client.create_database_if_not_exists(id=COSMOS_DB)
    container = db.create_container_if_not_exists(
        id=COSMOS_CONTAINER,
        partition_key={"/partitionKey"},
        offer_throughput=400
    )
    return container

@app.function_name(name="Views")
@app.route(route="views", methods=["GET", "POST"])
def views_function(req: func.HttpRequest) -> func.HttpResponse:
    logging.info("Views function processed a request")

    try:
        container = _get_container()

        counter_id = "counter"

        try:
            item = container.read_item(item=counter_id, partition_key="counter")
            count = int(item.get("count", 0))
        except exceptions.CosmosResourceNotFoundError:
            item = {"id": counter_id, "partitionKey": "counter", "count": 0}
            container.create_item(body=item)
            count = 0

        
        if req.method == "POST":
            count += 1
            item["count"] = count
            container.upsert_item(body=item)

        body = json.dumps({"count": count})
        return func.HttpResponse(
            body,
            status_code=200,
            mimetype="application/json"
        )

    except Exception as e:
        logging.exception("Error in Views function")
        return func.HttpResponse(
            json.dumps({"error": str(e)}),
            status_code=500,
            mimetype="application/json"
        )
