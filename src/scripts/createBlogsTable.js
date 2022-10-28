var AWS = require("aws-sdk");

AWS.config.update({
  region: "us-east-1"
});

var dynamodb = new AWS.DynamoDB();

var params = {
  TableName: "Blogs",
  KeySchema: [
    // Partition Key
    { AttributeName: "title", KeyType: "HASH" },
    // Sort Keys
    { AttributeName: "action", KeyType: "RANGE"}  
  ],
  AttributeDefinitions: [
    { AttributeName: "title", AttributeType: "S" },
    { AttributeName: "tag", AttributeType: "S" },
    { AttributeName: "author", AttributeType: "S" },
    { AttributeName: "action", AttributeType: "S" },
    { AttributeName: "text", AttributeType: "S" }
  ],
  LocalSecondaryIndexes: [
    {
      IndexName: "TextIndex",
      KeySchema: [
        { AttributeName: "title", KeyType: "HASH" },
        { AttributeName: "text", KeyType: "RANGE" }
      ],
      Projection: {
        ProjectionType: "KEYS_ONLY"
      }
    },
    {
      IndexName: "AuthorIndex",
      KeySchema: [
        { AttributeName: "title", KeyType: "HASH" },
        { AttributeName: "author", KeyType: "RANGE" }
      ],
      Projection: {
        ProjectionType: "KEYS_ONLY"
      }
    },{
      IndexName: "TagIndex",
      KeySchema: [
        { AttributeName: "title", KeyType: "HASH" },
        { AttributeName: "tag", KeyType: "RANGE" }
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