export type PasswordCheckerErrorMessages =
  | "Password must have at least 8 characters"
  | "Password must have less than 255 characters"
  | "Password must have at least one number"
  | "Password must have at least one lowercase letter"
  | "Password must have at least one uppercase letter"
  | "Password must have at least one special character";

export class PasswordChecker {
  /**
   * Check if password has at least 8 characters.
   */
  private checkMinimumLength(password: string): boolean {
    if (password.length <= 8) return false;
    return true;
  }

  /**
   * Check if password has less than 255 characters.
   */

  private checkMaximumLength(password: string): boolean {
    if (password.length > 255) return false;
    return true;
  }

  /**
   * Check if password has at least one number.
   */

  private checkNumber(password: string): boolean {
    return /[0-9]/.test(password);
  }

  /**
   * Check if password has at least one lowercase letter.
   */

  private checkLowercase(password: string): boolean {
    return /[a-z]/.test(password);
  }

  /**
   * Check if password has at least one uppercase letter.
   */

  private checkUppercase(password: string): boolean {
    return /[A-Z]/.test(password);
  }

  /**
   * Check if password has at least one special character.
   */

  private checkSpecialCharacter(password: string): boolean {
    return /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);
  }

  /**
   * Check if password has at least one number, one lowercase letter, one uppercase letter and one special character.
   * Also check if password has more than 8 characters and less than 255.
   */

  /* istanbul ignore next */
  public checkPassword(password: string): PasswordCheckerErrorMessages[] {
    const errors: PasswordCheckerErrorMessages[] = [];
    if (!this.checkMinimumLength(password))
      errors.push("Password must have at least 8 characters");
    if (!this.checkMaximumLength(password))
      errors.push("Password must have less than 255 characters");
    if (!this.checkNumber(password))
      errors.push("Password must have at least one number");
    if (!this.checkLowercase(password))
      errors.push("Password must have at least one lowercase letter");
    if (!this.checkUppercase(password))
      errors.push("Password must have at least one uppercase letter");
    if (!this.checkSpecialCharacter(password))
      errors.push("Password must have at least one special character");
    return errors;
  }
}
