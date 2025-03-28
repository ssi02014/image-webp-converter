import imagemin from "imagemin";
import imageminWebp from "imagemin-webp";

import yargs from "yargs";
import { hideBin } from "yargs/helpers";

import fs from "fs";
import path from "path";

const IMAGE_EXTENSIONS = ["jpg", "jpeg", "png", "webp"];

const argv = yargs(hideBin(process.argv))
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

const getFiles = (dirPath) => {
  const items = fs.readdirSync(dirPath);

  return items.filter((item) => {
    const itemPath = path.join(dirPath, item);
    return fs.statSync(itemPath).isFile();
  });
};

const isValidFileFormat = () => {
  const files = getFiles(argv.path);

  if (files.length === 0) {
    throw new Error("No files found in the directory");
  }

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const ext = path.extname(file).slice(1);
    if (!IMAGE_EXTENSIONS.includes(ext)) {
      throw new Error(`Invalid file format: ${file}`);
    }
  }

  return true;
};

const getCompareSize = (sourceFile, destinationFile) => {
  const originalSize = fs.statSync(`${argv.path}/${sourceFile}`).size;
  const newSize = fs.statSync(`${argv.destination}/${destinationFile}`).size;
  const savings = (((originalSize - newSize) / originalSize) * 100).toFixed(2);

  return { originalSize, newSize, savings };
};

const compareSize = async () => {
  const sourceFiles = getFiles(argv.path).filter(
    (file) => path.extname(file).toLowerCase() !== ".webp"
  );

  const destinationFiles = getFiles(argv.destination).filter(
    (file) => path.extname(file).toLowerCase() === ".webp"
  );

  console.log(`\n🔍 Comparing size of ${sourceFiles.length} files:`);

  for (let i = 0; i < sourceFiles.length; i++) {
    const sourceFile = sourceFiles[i];
    const destinationFile = destinationFiles.find(
      (file) => path.parse(file).name === path.parse(sourceFile).name
    );

    const { originalSize, newSize, savings } = getCompareSize(
      sourceFile,
      destinationFile
    );

    console.log(
      `${
        i + 1
      }. ${sourceFile} (${originalSize}bytes) ➡️ ${destinationFile} (${newSize}bytes): 💾 ${savings}% saved`
    );
  }
};

const printOptionsInfo = () => {
  console.log(`\n📄 Options:`);
  console.log(
    `1. 📁 Source: "${argv.path}" ➡️ 📂 Destination: "${argv.destination}"`
  );

  console.log(`2. 🔍 Quality: ${argv.quality}`);
  console.log(`3. 🔒 Lossless: ${argv.lossless}`);

  if (argv.resize) {
    console.log(
      `4. 📐 Resize: width: ${argv.resize.width}, height: ${argv.resize.height}`
    );
  }

  if (argv.crop) {
    console.log(
      `5. 📐 Crop: x: ${argv.crop.x}, y: ${argv.crop.y}, width: ${argv.crop.width}, height: ${argv.crop.height}`
    );
  }
};

async function ImageWebpConverter() {
  if (!isValidFileFormat()) return;

  printOptionsInfo();

  await imagemin([`${argv.path}/*.{jpg,jpeg,png}`], {
    destination: argv.destination,
    plugins: [
      imageminWebp({
        quality: argv.quality,
        lossless: argv.lossless,
        resize: argv.resize,
        crop: argv.crop,
      }),
    ],
  });

  compareSize();

  console.log("\n✅ Images have been successfully converted to Webp format!");
}

ImageWebpConverter();
