import { cp } from "node:fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const copy = async () => {
  try {
    await cp(`${__dirname}/files`, `${__dirname}/files_copy`, {
      recursive: true,
      errorOnExist: true,
      force: false,
    });
  } catch (_) {
    throw new Error("FS operation failed");
  }
};

await copy();
