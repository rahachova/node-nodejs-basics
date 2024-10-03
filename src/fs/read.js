import { readFile } from "node:fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const read = async () => {
  try {
    const data = await readFile(`${__dirname}/files/fileToRead.txt`, "utf8");
    console.log(data);
  } catch (_) {
    throw new Error("FS operation failed");
  }
};

await read();
