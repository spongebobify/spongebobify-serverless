"use strict";

const spongebobify = require("spongebobify");

module.exports.endpoint = (event, context, callback) => {
  let startLower =
    event.queryStringParameters.startLower === "false" ? false : true;
  try {
    const response = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*", // Required for CORS support to work
        "content-type": "text/plain"
      },
      body: spongebobify(event.queryStringParameters.text, startLower)
    };
    callback(null, response);
  } catch (err) {
    console.log(err);
    const response = {
      statusCode: 403,
      headers: {
        "Access-Control-Allow-Origin": "*", // Required for CORS support to work
        "content-type": "text/plain"
      },
      body: "Malformed request."
    };
    callback(null, response);
  }
};
