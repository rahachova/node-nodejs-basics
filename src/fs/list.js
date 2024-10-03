import { readdir } from "node:fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const list = async () => {
  try {
    const result = await readdir(`${__dirname}/files`);
    console.log(result);
  } catch (_) {
    throw new Error("FS operation failed");
  }
};

await list();
