const { formatDate } = require("./utils");

describe("formatDate", () => {
  it("when passed a string, returns a string", () => {
    const output = formatDate("2018-04-16T19:29:32.774Z");
    expect(typeof output).toBe("string");
  });
});
