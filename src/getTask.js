const AWS = require("aws-sdk");

module.exports.getTask = async (event) => {
  const dynamoDB = new AWS.DynamoDB.DocumentClient();
  const { id } = event.pathParameters;
  const result = await dynamoDB
    .get({
      TableName: "taskTable",
      Key: { id },
    })
    .promise();

  return {
    status: 200,
    body: { task: result.Item },
  };
};
