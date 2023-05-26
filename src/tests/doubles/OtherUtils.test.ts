import {
  calculateComplexity,
  toUpperCaseWithCallBack,
} from "../../app/doubles/OtherUtils";
import type { StringInfo } from "../../app/Utils";

describe("OtherUtils test suite", () => {
  describe("Tracking callbacks with jest mock", () => {
    const callback = jest.fn();

    afterEach(() => {
      jest.clearAllMocks();
    });

    it("To uppercase should call callback for inválid argument", () => {
      toUpperCaseWithCallBack("", callback);
      expect(callback).toBeCalledWith("Inválid argument");
      expect(callback).toBeCalledTimes(1);
    });

    it("To uppercase should return uppercase string", () => {
      const actual = toUpperCaseWithCallBack("banana", callback);
      expect(callback).toBeCalledWith("Valid argument");
      expect(callback).toBeCalledTimes(1);
    });
  });

  describe("Tracking callbacks", () => {
    const cbArgs: string[] = [];
    let timesCalled = 0;

    const callback = (message: string) => {
      cbArgs.push(message);
      timesCalled++;
    };

    beforeEach(() => {
      cbArgs.length = 0;
      timesCalled = 0;
    });

    it("To uppercase should call callback for inválid argument", () => {
      toUpperCaseWithCallBack("", callback);
      expect(timesCalled).toBe(1);
      expect(cbArgs).toEqual(["Inválid argument"]);
    });

    it("To uppercase should return uppercase string", () => {
      const actual = toUpperCaseWithCallBack("banana", callback);
      expect(timesCalled).toBe(1);
      expect(cbArgs).toEqual(["Valid argument"]);
      expect(actual).toBe("BANANA");
    });
  });

  it("To uppercase should call callback for inválid argument", () => {
    const actual = toUpperCaseWithCallBack("", (message) => {});
    expect(actual).toBeUndefined();
  });

  it("To uppercase should return uppercase string", () => {
    const actual = toUpperCaseWithCallBack("banana", (message) => {});
    expect(actual).toBe("BANANA");
  });

  it("Calculates complexity", () => {
    const someInfo: StringInfo = {
      lowerCase: "banana",
      upperCase: "BANANA",
      characters: ["b", "a", "n", "a", "n", "a"],
      length: 6,
      extraInfo: {
        field1: "someInfo",
        field2: "someOtherInfo",
      },
    };

    const actual = calculateComplexity(someInfo);

    expect(actual).toBe(12);
  });
});
