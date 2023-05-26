import {
  toUpperCase,
  getStringInfo,
  StringUtils,
  type StringInfo,
} from "../app/Utils";

//* Jest hooks
describe("Utils test suite", () => {
  describe("StringUtils", () => {
    let sut: StringUtils;

    beforeEach(() => {
      sut = new StringUtils();
    });

    it("Should convert string to upper case", () => {
      const expected = "HELLO";
      const actual = sut.toUpperCase("hello");
      expect(actual).toBe(expected);
    });

    it("Should throw error on invalid argument - function", () => {
      function expectError() {
        const actual = sut.toUpperCase("");
      }
      expect(expectError).toThrow();
      expect(expectError).toThrowError("Invalid argument!");
    });

    it("Should throw error on invalid argument - arrow function", () => {
      expect(() => {
        const actual = sut.toUpperCase("");
      }).toThrow();
      expect(() => {
        const actual = sut.toUpperCase("");
      }).toThrowError("Invalid argument!");
    });

    it("Should throw error on invalid argument - try catch block", (done) => {
      try {
        sut.toUpperCase("");
        done("Should have thrown error!");
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error).toHaveProperty("message", "Invalid argument!");
        done();
      }
    });
  });

  describe("toUpperCase", () => {
    it("Should convert string to upper case", () => {
      const sut = toUpperCase;
      const expected = "HELLO";
      const actual = sut("hello");
      expect(actual).toBe(expected);
    });
  });

  describe("getStringInfo", () => {
    it("Should return info for a valid string", () => {
      const sut = getStringInfo;
      const expected: StringInfo = {
        upperCase: "HELLO",
        lowerCase: "hello",
        characters: ["h", "e", "l", "l", "o"],
        length: 5,
        extraInfo: {},
      };
      const actual = sut("hello");
      expect(actual).toEqual(expected);
    });
  });
});
