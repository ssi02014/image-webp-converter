import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { getConfigFileOptions } from "./config.js";

const DESCRIPTIONS = {
  path: "Images directory path",
  destination: "Destination directory path",
  quality: "Webp quality (1-100)",
  lossless: "Encode images losslessly",
  size: "Size of the image",
  resize: "Resize the image (format: { width: number, height: number })",
  crop: "Crop the image (format: { width: number, height: number, x: number, y: number })",
};

const DEFAULT_OPTIONS = {
  path: "images",
  destination: "images/webp",
  quality: 75,
  lossless: false,
  size: null,
  resize: null,
  crop: null,
};

export const getArgv = async () => {
  const configFileOptions = await getConfigFileOptions();

  return yargs(hideBin(process.argv))
    .option("path", {
      alias: "p",
      description: DESCRIPTIONS.path,
      default: configFileOptions.path || DEFAULT_OPTIONS.path,
      type: "string",
    })
    .option("destination", {
      alias: "d",
      description: DESCRIPTIONS.destination,
      default: configFileOptions.destination || DEFAULT_OPTIONS.destination,
      type: "string",
    })
    .option("quality", {
      alias: "q",
      description: DESCRIPTIONS.quality,
      default: configFileOptions.quality || DEFAULT_OPTIONS.quality,
      type: "number",
      coerce: (value) => {
        if (value < 1 || value > 100) {
          throw new Error("Quality must be between 1 and 100");
        }
        return value;
      },
    })
    .option("lossless", {
      alias: "l",
      description: DESCRIPTIONS.lossless,
      default: configFileOptions.lossless || DEFAULT_OPTIONS.lossless,
      type: "boolean",
    })
    .option("size", {
      alias: "s",
      description: DESCRIPTIONS.size,
      default: configFileOptions.size || DEFAULT_OPTIONS.size,
      type: "number",
      coerce: (value) => {
        if (value == null) return null;
        return value;
      },
    })
    .option("resize", {
      alias: "r",
      description: DESCRIPTIONS.resize,
      default: configFileOptions.resize || DEFAULT_OPTIONS.resize,
      type: "object",
      coerce: (value) => {
        if (value == null) return null;
        if (!value.width || !value.height) {
          throw new Error("Resize requires both width and height");
        }
        return value;
      },
    })
    .option("crop", {
      alias: "c",
      description: DESCRIPTIONS.crop,
      default: configFileOptions.crop || DEFAULT_OPTIONS.crop,
      type: "object",
      coerce: (value) => {
        if (value == null) return null;
        if (!value.width || !value.height || !value.x || !value.y) {
          throw new Error("Crop requires width, height, x, and y coordinates");
        }
        return value;
      },
    })
    .help().argv;
};
