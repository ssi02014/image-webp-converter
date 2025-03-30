import fs from "fs";
import path from "path";
import { argv } from "./yargs.js";

const IMAGE_EXTENSIONS = ["jpg", "jpeg", "png"];

const getFiles = (dirPath) => {
  const items = fs.readdirSync(dirPath);

  return items.filter((item) => {
    const itemPath = path.join(dirPath, item);
    return fs.statSync(itemPath).isFile();
  });
};

const getFileSize = (filePath) => {
  return fs.statSync(filePath).size;
};

export const isValidFileFormat = () => {
  const files = getFiles(argv.path);

  if (files.length === 0) {
    throw new Error("No files found in the directory");
  }

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const ext = path.extname(file).slice(1);
    if (!IMAGE_EXTENSIONS.includes(ext)) {
      throw new Error(
        `Invalid file format: ${file}. Supported formats: ${IMAGE_EXTENSIONS.join(
          "/"
        )}`
      );
    }
  }

  return true;
};

const getCompareSize = (sourceFile, destinationFile) => {
  const originalSize = getFileSize(path.join(argv.path, sourceFile));
  const newSize = getFileSize(path.join(argv.destination, destinationFile));

  const savings = (((originalSize - newSize) / originalSize) * 100).toFixed(2);

  return { originalSize, newSize, savings };
};

export const compareSize = async () => {
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

export const printOptionsInfo = () => {
  const options = [
    {
      label: "📁 Source/Destination",
      value: `"${argv.path}" ➡️ "${argv.destination}"`,
      show: true,
    },
    {
      label: "🔍 Quality",
      value: argv.quality,
      show: true,
    },
    {
      label: "🔒 Lossless",
      value: argv.lossless,
      show: true,
    },
    {
      label: "📐 Size",
      value: argv.size,
      show: !!argv.size,
    },
    {
      label: "📐 Resize",
      value:
        argv.resize &&
        `width: ${argv.resize.width}, height: ${argv.resize.height}`,
      show: !!argv.resize,
    },
    {
      label: "📐 Crop",
      value:
        argv.crop &&
        `x: ${argv.crop.x}, y: ${argv.crop.y}, width: ${argv.crop.width}, height: ${argv.crop.height}`,
      show: !!argv.crop,
    },
  ];

  console.log("\n📄 Options:");
  options
    .filter((opt) => opt.show)
    .forEach((opt, index) => {
      console.log(`${index + 1}. ${opt.label}: ${opt.value}`);
    });
};
