import { createReadStream } from "node:fs";
import { stdout } from "node:process";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
  const stream = createReadStream(`${__dirname}/files/fileToRead.txt`, {
    encoding: "utf-8",
  });
  stream.on("data", (chunk) => {
    stdout.write(chunk + "\n");
  });
};

await read();
