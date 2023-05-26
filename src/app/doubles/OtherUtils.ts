import { StringInfo } from "../Utils";

type LoggerServiceCallBack = (message: string) => void;

export function calculateComplexity(stringInfo: StringInfo) {
  return Object.keys(stringInfo.extraInfo).length * stringInfo.length;
}

export function toUpperCaseWithCallBack(arg: string, callBack: LoggerServiceCallBack) {
  if (!arg) {
    callBack("Inválid argument");
    return;
  }

  callBack("Valid argument");
  return arg.toUpperCase();
}
