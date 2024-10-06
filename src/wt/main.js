import { fileURLToPath } from "url";
import path from "path";
import { Worker } from "node:worker_threads";
import { cpus } from "os";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const createWorker = (number) => {
  return new Promise((resolve) => {
    const worker = new Worker(`${__dirname}/worker.js`, {
      workerData: number,
    });

    worker.once("message", (message) => {
      resolve({ status: "resolved", data: message });
    });
    worker.once("error", () => {
      resolve({ status: "error", data: null });
    });
  });
};

const performCalculations = async () => {
  const workerPromises = [];

  for (let index = 0; index < cpus().length; index++) {
    workerPromises.push(createWorker(10 + index));
  }

  const workerResult = await Promise.all(workerPromises);
  console.log(workerResult);
};

await performCalculations();
