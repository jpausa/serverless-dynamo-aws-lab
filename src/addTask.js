const { v4 } = require("uuid");
const AWS = require("aws-sdk");

module.exports.addTask = async (event) => {
  const dynamoDB = new AWS.DynamoDB.DocumentClient();

  const { title, description } = JSON.parse(event.body);
  const createdAt = new Date().toUTCString();
  const id = v4();
  const newTask = {
    id,
    title,
    description,
    createdAt,
  };

  console.log(newTask);

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
