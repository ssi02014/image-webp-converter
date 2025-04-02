#!/usr/bin/env node

import imagemin from "imagemin";
import imageminWebp from "imagemin-webp";
import { isValidFileFormat, printOptionsInfo, compareSize } from "./utils.js";
import { getConfigOptions } from "./config.js";

const ImageWebpConverter = async () => {
  const options = await getConfigOptions();

  if (!isValidFileFormat(options)) return;

  printOptionsInfo(options);

  await imagemin([`${options.path}/**/*.{jpg,jpeg,png}`], {
    destination: options.destination,
    plugins: [
      imageminWebp({
        quality: options.quality,
        lossless: options.lossless,
        size: options.size,
        resize: options.resize,
        crop: options.crop,
      }),
    ],
  });

  compareSize(options);

  console.log("\n✅ Images have been successfully converted to Webp format!");
};

ImageWebpConverter();
