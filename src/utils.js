import fs from "fs";
import path from "path";

const IMAGE_EXTENSIONS = ["jpg", "jpeg", "png", "webp"];

const getFiles = (dirPath) => {
  const items = fs.readdirSync(dirPath);
  let files = [];

  for (const item of items) {
    const itemPath = path.join(dirPath, item);
    const stat = fs.statSync(itemPath);

    if (stat.isFile()) {
      files.push(itemPath);
    } else if (stat.isDirectory()) {
      files = files.concat(getFiles(itemPath));
    }
  }

  return files;
};

const getFileSize = (filePath) => {
  return fs.statSync(filePath).size;
};

const getCompareSize = (sourceFile, destinationFile) => {
  const originalSize = getFileSize(sourceFile);
  const newSize = getFileSize(destinationFile);

  const savings = (((originalSize - newSize) / originalSize) * 100).toFixed(2);

  return { originalSize, newSize, savings };
};

export const isValidFileFormat = (options) => {
  const files = getFiles(options.path);

  if (files.length === 0) {
    throw new Error("No files found in the directory");
  }

  const invalidFile = files.find((file) => {
    const ext = path.extname(file).slice(1).toLowerCase();
    return !IMAGE_EXTENSIONS.includes(ext);
  });

  if (invalidFile) {
    throw new Error(
      `Invalid file format: ${invalidFile}. Supported formats: jpg/jpeg/png`
    );
  }

  return true;
};

export const compareSize = (options) => {
  const sourceFiles = getFiles(options.path).filter(
    (file) => path.extname(file).toLowerCase() !== ".webp"
  );

  const destinationFiles = getFiles(options.destination).filter(
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

    const sourceFileName = path.basename(sourceFile);
    const destinationFileName = path.basename(destinationFile);

    console.log(
      `${
        i + 1
      }. ${sourceFileName} (${originalSize}bytes) ➡️ ${destinationFileName} (${newSize}bytes): 💾 ${savings}% saved`
    );
  }
};

export const printOptionsInfo = (options) => {
  const optionsInfo = [
    {
      label: "📁 Source/Destination",
      value: `"${options.path}" ➡️ "${options.destination}"`,
      show: true,
    },
    {
      label: "🔍 Quality",
      value: options.quality,
      show: true,
    },
    {
      label: "🔒 Lossless",
      value: options.lossless,
      show: true,
    },
    {
      label: "📐 Size",
      value: options.size,
      show: !!options.size,
    },
    {
      label: "📐 Resize",
      value:
        options.resize &&
        `width: ${options.resize.width}, height: ${options.resize.height}`,
      show: !!options.resize,
    },
    {
      label: "📐 Crop",
      value:
        options.crop &&
        `x: ${options.crop.x}, y: ${options.crop.y}, width: ${options.crop.width}, height: ${options.crop.height}`,
      show: !!options.crop,
    },
  ];

  console.log("\n📄 Options:");
  optionsInfo
    .filter((opt) => opt.show)
    .forEach((opt, index) => {
      console.log(`${index + 1}. ${opt.label}: ${opt.value}`);
    });
};
