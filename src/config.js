import fs from "fs";
import path from "path";

const configPath = [
  path.resolve(process.cwd(), "webpc.config.js"),
  path.resolve(process.cwd(), "webpc.config.mjs"),
  path.resolve(process.cwd(), "webpc.config.cjs"),
].find(fs.existsSync);

export const getConfigFileOptions = async () => {
  if (fs.existsSync(configPath)) {
    if (configPath.endsWith(".cjs")) {
      throw new Error("CJS config files are not supported");
    } else {
      const config = await import(configPath);
      return config.default;
    }
  }
  return {};
};
