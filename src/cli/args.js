import { argv } from "process";

const parseArgs = () => {
  const [execPath, execFile, ...args] = argv;
  args.forEach((value, index) => {
    if (index % 2 === 0) {
      console.log(`${value} is ${args[index + 1]}`);
    }
  });
};

parseArgs();
