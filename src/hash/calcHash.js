import { createReadStream } from "node:fs";
import { createHash } from "node:crypto";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const calculateHash = async () => {
  const stream = createReadStream(
    `${__dirname}/files/fileToCalculateHashFor.txt`,
    {
      encoding: "utf-8",
    }
  );

  const hash = createHash("sha256");

  stream.on("data", (chunk) => {
    hash.update(chunk);
  });

  stream.on("end", () => {
    console.log("Hash for file fileToCalculateHashFor.txt is ready:\n");
    console.log(hash.digest("hex"));
  });
};

await calculateHash();
