const { formatDate } = require("./utils");

describe("formatDate", () => {
  it("when passed a string, returns a string", () => {
    const output = formatDate("2018-04-16T19:29:32.774Z");
    expect(typeof output).toEqual("string");
  });
  it("when passed a date string returns the date as a string containing the day of the week, the month, the day, the year and time in", () => {
    const output = formatDate("2018-04-16T19:29:32.774Z");
    expect(output).toBe("Mon Apr 16 2018 20:29:32 GMT");
  });
  it("does not mutate original string", () => {
    const input = "2018-04-16T19:29:32.774Z";
    formatDate(input);
    expect(input).toBe("2018-04-16T19:29:32.774Z");
  });
});
