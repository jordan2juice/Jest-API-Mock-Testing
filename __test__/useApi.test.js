"use strict";

jest.mock("axios");

const axios = require("axios");
const { getUser } = require("../userApi");

describe("getUser", () => {
  it("should return an array of users", async () => {
    const user = "John";
    axios.get.mockResolvedValue({
      data: user,
    });
    expect(await getUser()).toBe(user);
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(
      "https://jsonplaceholder.typicode.com/users"
    );
  });
});
