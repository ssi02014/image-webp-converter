import yargs from "yargs";
import { hideBin } from "yargs/helpers";

// yargs를 사용한 명령줄 인수 처리
export const argv = yargs(hideBin(process.argv))
  .option("path", {
    alias: "p",
    description: "Images directory path",
    default: "assets",
    type: "string",
  })
  .option("quality", {
    alias: "q",
    description: "WebP quality (1-100)",
    default: 75,
    type: "number",
  })
  .option("destination", {
    alias: "d",
    description: "Destination directory path",
    default: "webp-images",
    type: "string",
  })
  .help().argv;
