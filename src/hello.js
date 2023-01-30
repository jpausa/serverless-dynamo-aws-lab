"use strict";

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Hello world! This seems to work properly",
        input: event,
      },
      null,
      2
    ),
  };
};
