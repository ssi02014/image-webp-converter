import yargs from "yargs";
import { hideBin } from "yargs/helpers";

export const argv = yargs(hideBin(process.argv))
  .option("path", {
    alias: "p",
    description: "Images directory path",
    default: "images",
    type: "string",
  })
  .option("destination", {
    alias: "d",
    description: "Destination directory path",
    default: "images/webp",
    type: "string",
  })
  .option("quality", {
    alias: "q",
    description: "WebP quality (1-100)",
    default: 75,
    type: "number",
  })
  .option("lossless", {
    alias: "l",
    description: "Encode images losslessly",
    default: false,
    type: "boolean",
  })
  .option("resize", {
    alias: "r",
    description: "Resize the image",
    type: "object",
  })
  .option("crop", {
    alias: "c",
    description: "Crop the image",
    type: "object",
  })
  .help().argv;
