import fs from "fs";
import path from "path";

const IMAGE_EXTENSIONS = ["jpg", "jpeg", "png", "webp"];

const getFiles = (dirPath) => {
  const items = fs.readdirSync(dirPath);
  let files = [];

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
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

export const isValidFileFormat = (argv) => {
  const files = getFiles(argv.path);

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

export const compareSize = async (argv) => {
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

    const sourceFileName = path.basename(sourceFile);
    const destinationFileName = path.basename(destinationFile);

    console.log(
      `${
        i + 1
      }. ${sourceFileName} (${originalSize}bytes) ➡️ ${destinationFileName} (${newSize}bytes): 💾 ${savings}% saved`
    );
  }
};

export const printOptionsInfo = (argv) => {
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
