#!/usr/bin/env node

import imagemin from "imagemin";
import imageminWebp from "imagemin-webp";

import { getArgv } from "./yargs.js";
import { isValidFileFormat, printOptionsInfo, compareSize } from "./utils.js";

const ImageWebpConverter = async () => {
  const argv = await getArgv();

  if (!isValidFileFormat(argv)) return;

  console.log("🚀 Starting Image WebP Conversion...");

  printOptionsInfo(argv);

  await imagemin([`${argv.path}/**/*.{jpg,jpeg,png}`], {
    destination: argv.destination,
    plugins: [
      imageminWebp({
        quality: argv.quality,
        lossless: argv.lossless,
        size: argv.size,
        resize: argv.resize,
        crop: argv.crop,
      }),
    ],
  });

  compareSize(argv);

  console.log("\n✅ Images have been successfully converted to Webp format!");
};

ImageWebpConverter();
