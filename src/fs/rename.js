import { rename as renameFile } from "node:fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const rename = async () => {
  try {
    await renameFile(
      `${__dirname}/files/wrongFilename.txt`,
      `${__dirname}/files/properFilename.md`
    );
  } catch (_) {
    throw new Error("FS operation failed");
  }
};

await rename();
