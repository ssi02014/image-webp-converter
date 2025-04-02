import fs from "fs";
import path from "path";

const configPath = [
  path.resolve(process.cwd(), "webpc.config.js"),
  path.resolve(process.cwd(), "webpc.config.mjs"),
].find(fs.existsSync);

export const getConfigFileOptions = async () => {
  if (fs.existsSync(configPath)) {
    const config = await import(configPath);
    return config.default;
  }
  return {};
};
