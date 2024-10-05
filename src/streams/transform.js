import { stdin, stdout } from "node:process";
import { Transform } from "node:stream";

const reverseTransform = new Transform({
  transform(chunk, encoding, callback) {
    this.push(`${chunk.toString().split("").reverse().join("")}\n`);
    callback();
  },
});

const transform = async () => {
  stdin.pipe(reverseTransform).pipe(stdout);
};

await transform();
