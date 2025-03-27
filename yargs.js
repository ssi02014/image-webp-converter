import yargs from "yargs";
import { hideBin } from "yargs/helpers";

// yargs를 사용한 명령줄 인수 처리
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
