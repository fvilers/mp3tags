import fs from "fs";
import util from "util";

export const fileExists = util.promisify(fs.exists);

export function isString(value: any): value is string {
  return typeof value === "string";
}

export function capitalize(value: string): string {
  return value.charAt(0).toUpperCase() + value.slice(1);
}
