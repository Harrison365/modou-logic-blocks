const { mobileDisplayKeystrokes } = require("../mobileKeystrokes");

describe("mobileDisplayKeystrokes", () => {
  test("should return 0 for an empty string", () => {
    expect(mobileDisplayKeystrokes("")).toBe(0);
  });
  test("should return accurate keystroke count for special characters", () => {
    expect(mobileDisplayKeystrokes("*#")).toBe(2);
  });
  test("should return accurate keystroke count for numbers", () => {
    expect(mobileDisplayKeystrokes("123")).toBe(3);
  });
  test("should return accurate keystroke count for letters", () => {
    expect(mobileDisplayKeystrokes("abc")).toBe(9);
  });
  test.only("should return accurate keystroke count for longer words", () => {
    expect(mobileDisplayKeystrokes("northcoders")).toBe(38);
  });
  test.only("should return accurate keystroke count for a combination string", () => {
    expect(mobileDisplayKeystrokes("*#123northcoders")).toBe(43);
  });
});
