import chalk from "chalk";
import { fileExists } from "./helpers";

export async function main(): Promise<void> {
  const [, , ...args] = process.argv;
  const filename = args.slice(-1).pop();

  if (filename === undefined) {
    console.log(chalk.red("Usage: mp3tags <filename>"));
    return;
  }

  if (!(await fileExists(filename))) {
    console.error(chalk.red("File does not exists"));
    return;
  }
}
