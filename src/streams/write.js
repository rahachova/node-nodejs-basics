import { createWriteStream } from "node:fs";
import { stdin } from "node:process";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const write = async () => {
  const stream = createWriteStream(`${__dirname}/files/fileToWrite.txt`, {
    encoding: "utf-8",
  });
  stdin.pipe(stream);
};

await write();
