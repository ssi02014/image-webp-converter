import imagemin from "imagemin";
import imageminWebp from "imagemin-webp";
import { argv } from "./utils.js";

(async function () {
  console.log(
    `Processing images from: ${argv.path} with quality: ${argv.quality}`
  );

  await imagemin([`${argv.path}/*.{jpg,jpeg,png}`], {
    destination: argv.destination,
    plugins: [imageminWebp({ quality: argv.quality })],
  });

  console.log("Image optimization completed!");
})();
