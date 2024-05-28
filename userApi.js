"use strict";

const axios = require("axios");

async function getUser() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );

  return response.data;
}

module.exports = { getUser };
