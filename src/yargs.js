import yargs from "yargs";
import { hideBin } from "yargs/helpers";

const DESCRIPTIONS = {
  path: "Images directory path",
  destination: "Destination directory path",
  quality: "WebP quality (1-100)",
  lossless: "Encode images losslessly",
  size: "Size of the image",
  resize: "Resize the image (format: { width: number, height: number })",
  crop: "Crop the image (format: { width: number, height: number, x: number, y: number })",
};

export const argv = yargs(hideBin(process.argv))
  .option("path", {
    alias: "p",
    description: DESCRIPTIONS.path,
    default: "images",
    type: "string",
  })
  .option("destination", {
    alias: "d",
    description: DESCRIPTIONS.destination,
    default: "images/webp",
    type: "string",
  })
  .option("quality", {
    alias: "q",
    description: DESCRIPTIONS.quality,
    default: 75,
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
    default: false,
    type: "boolean",
  })
  .option("size", {
    alias: "s",
    description: DESCRIPTIONS.size,
    default: "original",
    type: "string",
  })
  .option("resize", {
    alias: "r",
    description: DESCRIPTIONS.resize,
    type: "object",
    coerce: (value) => {
      if (!value.width || !value.height) {
        throw new Error("Resize requires both width and height");
      }
      return value;
    },
  })
  .option("crop", {
    alias: "c",
    description: DESCRIPTIONS.crop,
    type: "object",
    coerce: (value) => {
      if (!value.width || !value.height || !value.x || !value.y) {
        throw new Error("Crop requires width, height, x, and y coordinates");
      }
      return value;
    },
  })
  .help().argv;
