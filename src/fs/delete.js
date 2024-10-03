import { unlink } from "node:fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const remove = async () => {
  try {
    await unlink(`${__dirname}/files/fileToRemove.txt`);
  } catch (_) {
    throw new Error("FS operation failed");
  }
};

await remove();
