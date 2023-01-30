const AWS = require("aws-sdk");

module.exports.getTasks = async (event) => {
  const dynamoDB = new AWS.DynamoDB.DocumentClient();

  await dynamoDB
    .put({
      TableName: "taskTable",
      Item: newTask,
    })
    .promise();

  return {
    statusCode: 200,
    body: JSON.stringify(newTask),
  };
};
