export function toUpperCase(str: string): string {
  return str.toUpperCase();
}

export type StringInfo = {
  lowerCase: string;
  upperCase: string;
  characters: string[];
  length: number;
  extraInfo?: Object;
};

export function getStringInfo(arg: string): StringInfo {
  const upperCase = arg.toUpperCase();
  const lowerCase = arg.toLowerCase();
  const characters = arg.split("");
  const length = arg.length;
  const extraInfo = {};
  return {
    upperCase,
    lowerCase,
    characters,
    length,
    extraInfo,
  };
}

export class StringUtils {
  public toUpperCase(str: string): string {
    if (!str) throw new Error("Invalid argument!");
    return str.toUpperCase();
  }
}
