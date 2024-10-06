import { createReadStream, createWriteStream } from "node:fs";
import { createGzip } from "node:zlib";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compress = async () => {
  const readableStream = createReadStream(
    `${__dirname}/files/fileToCompress.txt`
  );
  const writebleStream = createWriteStream(`${__dirname}/files/archive.gz`);
  const gzipStream = createGzip();

  readableStream.pipe(gzipStream).pipe(writebleStream);
};

await compress();
