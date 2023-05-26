//* Local imports
import { PasswordChecker } from "../../../src/app/pass_checker/PasswordChecker";
import type { PasswordCheckerErrorMessages } from "../../../src/app/pass_checker/PasswordChecker";

describe("Password checker suite", () => {
  describe("Test checkPassword", () => {
    let passwordChecker: PasswordChecker;

    beforeEach(() => {
      passwordChecker = new PasswordChecker();
    });

    it("Password without lowercase should be false", () => {
      const actual = passwordChecker.checkPassword("ABCDEFGH");
      const expected: PasswordCheckerErrorMessages =
        "Password must have at least one lowercase letter";
      expect(actual).toContain(expected);
    });

    it("Password without uppercase should be false", () => {
      const actual = passwordChecker.checkPassword("a@1cdefgh");
      const expected: PasswordCheckerErrorMessages =
        "Password must have at least one uppercase letter";
      expect(actual).toContain(expected);
    });

    it("Password without number should be false", () => {
      const actual = passwordChecker.checkPassword("A@cdefgh");
      const expected: PasswordCheckerErrorMessages =
        "Password must have at least one number";
      expect(actual).toContain(expected);
    });

    it("Password without special character should be false", () => {
      const actual = passwordChecker.checkPassword("A1bcdefgh");
      const expected: PasswordCheckerErrorMessages =
        "Password must have at least one special character";
      expect(actual).toContain(expected);
    });

    it("Password with less than 8 characters should be false", () => {
      const actual = passwordChecker.checkPassword("123zZ@");
      const expected: PasswordCheckerErrorMessages =
        "Password must have at least 8 characters";
      expect(actual).toContain(expected);
    });

    it("Password with 8 more than characters and less than 255, should be true", () => {
      const actual = passwordChecker.checkPassword("123zxcZXC@");
      //the array should be empty
      expect(actual).toEqual([]);
    });

    it("Password with more than 255 characters should be false", () => {
      const actual = passwordChecker.checkPassword(
        "1234567890QWERTYUIOPasdfghjklz!@#$%¨&*()" +
          "ZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890QWERTYUIOPasdfghjklz!@#$%¨&*()" +
          "ZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890QWERTYUIOPasdfghjklz!@#$%¨&*()" +
          "ZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890QWERTYUIOPasdfghjklz!@#$%¨&*()"
      );
      const expected: PasswordCheckerErrorMessages =
        "Password must have less than 255 characters";
      expect(actual).toContain(expected);
    });

    it("Password with all requirements should be true", () => {
      const actual = passwordChecker.checkPassword("123zxcZXC@");
      expect(actual).toEqual([]);
    });
  });
});
