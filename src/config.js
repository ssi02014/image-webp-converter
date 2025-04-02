import fs from "fs";
import path from "path";
import { argv } from "./yargs.js";

const DEFAULT_OPTIONS = {
  path: "images",
  destination: "images/webp",
  quality: 75,
  lossless: false,
  size: null,
  resize: null,
  crop: null,
};

const configPath = [
  path.resolve(process.cwd(), "webpc.config.js"),
  path.resolve(process.cwd(), "webpc.config.mjs"),
].find(fs.existsSync);

const getConfigFileOptions = async () => {
  if (fs.existsSync(configPath)) {
    const config = await import(configPath);
    return config.default;
  }
  return {};
};

export const getConfigOptions = async () => {
  const config = await getConfigFileOptions();

  const getSpecificOption = (path) => {
    return argv[path] || config[path] || DEFAULT_OPTIONS[path];
  };

  const options = {
    path: getSpecificOption("path"),
    destination: getSpecificOption("destination"),
    quality: getSpecificOption("quality"),
    lossless: getSpecificOption("lossless"),
    size: getSpecificOption("size"),
    resize: getSpecificOption("resize"),
    crop: getSpecificOption("crop"),
  };

  return options;
};
