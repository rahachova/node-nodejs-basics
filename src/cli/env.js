import { env } from "process";

const parseEnv = () => {
  Object.entries(env).forEach((element) => {
    if (element[0].startsWith("RSS_")) {
      console.log(element.join("="));
    }
  });
};

parseEnv();
