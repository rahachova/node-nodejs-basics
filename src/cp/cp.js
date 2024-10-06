import { fork } from "child_process";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const spawnChildProcess = async (args) => {
  fork(`${__dirname}/files/script.js`, args);
};

spawnChildProcess(["someArgument1", "someArgument2"]);
