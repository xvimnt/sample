var AWS = require("aws-sdk");

AWS.config.update({
  region: "us-east-1"
});

var dynamodb = new AWS.DynamoDB();

var params = {
  TableName: "Products",
  KeySchema: [
    // Partition Key
    { AttributeName: "id", KeyType: "HASH" },
    // Sort Keys
    { AttributeName: "name", KeyType: "RANGE"}  
  ],
  AttributeDefinitions: [
    { AttributeName: "id", AttributeType: "S" },
    { AttributeName: "name", AttributeType: "S" },
    { AttributeName: "detail", AttributeType: "S" },
    { AttributeName: "price", AttributeType: "S" },
    { AttributeName: "imageUrl", AttributeType: "S" }
  ],
  LocalSecondaryIndexes: [
    {
      IndexName: "DetailIndex",
      KeySchema: [
        { AttributeName: "id", KeyType: "HASH" },
        { AttributeName: "detail", KeyType: "RANGE" }
      ],
      Projection: {
        ProjectionType: "KEYS_ONLY"
      }
    },
    {
      IndexName: "PriceIndex",
      KeySchema: [
        { AttributeName: "id", KeyType: "HASH" },
        { AttributeName: "price", KeyType: "RANGE" }
      ],
      Projection: {
        ProjectionType: "KEYS_ONLY"
      }
    },{
      IndexName: "ImageIndex",
      KeySchema: [
        { AttributeName: "id", KeyType: "HASH" },
        { AttributeName: "imageUrl", KeyType: "RANGE" }
      ],
      Projection: {
        ProjectionType: "KEYS_ONLY"
      }
    }
  ], 
  ProvisionedThroughput: {
    ReadCapacityUnits: 10,
    WriteCapacityUnits: 10
  }
};

dynamodb.createTable(params, function(err, data) {
  if (err)
    console.error("Unable to create table: ", JSON.stringify(err, null, 2))
  else
    console.log("Created table with description: ", JSON.stringify(data, null, 2))
});