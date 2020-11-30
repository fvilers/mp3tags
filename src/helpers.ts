import fs from "fs";
import util from "util";

export const fileExists = util.promisify(fs.exists);
