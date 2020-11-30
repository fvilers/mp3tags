import chalk from "chalk";
import NodeID3 from "node-id3";
import { capitalize, fileExists, isString } from "./helpers";

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

  const tags = NodeID3.read(filename) as Record<string, any>;
  const keys = Reflect.ownKeys(tags).filter(isString);
  const length = Math.max(...keys.map((key) => key.length));

  for (const key of keys) {
    const value = tags[key];

    if (isString(value)) {
      console.log(capitalize(key).padEnd(length, " "), chalk.green(tags[key]));
    }
  }
}
