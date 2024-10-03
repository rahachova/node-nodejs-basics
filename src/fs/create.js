import { writeFile } from "node:fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const create = async () => {
  try {
    const content = "I am fresh and young";
    await writeFile(`${__dirname}/files/fresh.txt`, content, { flag: "ax" });
  } catch (_) {
    throw new Error("FS operation failed");
  }
};

await create();
