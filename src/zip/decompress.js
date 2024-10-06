import { createReadStream, createWriteStream } from "node:fs";
import { createUnzip } from "node:zlib";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const decompress = async () => {
  const readableStream = createReadStream(`${__dirname}/files/archive.gz`);
  const writebleStream = createWriteStream(
    `${__dirname}/files/fileToCompress.txt`
  );
  const unzipStream = createUnzip();

  readableStream.pipe(unzipStream).pipe(writebleStream);
};

await decompress();
