const AWS = require("aws-sdk");

module.exports.getTasks = async (event) => {
  const dynamoDB = new AWS.DynamoDB.DocumentClient();

  const results = await dynamoDB
    .scan({
      TableName: "taskTable",
    })
    .promise();

  return {
    status: 200,
    body: { tasks: results.Items },
  };
};
