# 🌄 Image WebP Converter <a href="https://www.npmjs.com/package/image-webp-converter" target="_blank"><img align="center" src="https://img.shields.io/npm/v/image-webp-converter.svg" /></a>

<br />

> 🚀 A powerful yet simple CLI tool that converts your images to WebP format - the modern image format that provides superior compression for images on the web!

## Why Image Webp Converter?

This tool simplifies the process of converting your `JPG`, `JPEG`, and `PNG` images to `WebP` format, helping you optimize your web assets with minimal effort. Here's what you can do:

- Convert multiple images at once
- Maintain image quality while reducing file size
- Customize output settings like quality and lossless
- Resize images during conversion
- Crop images to specific dimensions
- Process images in nested subdirectories
- Limit output file size to specific byte size

<br />

💡 **Benefits of WebP**:

- Smaller file sizes compared to JPG/JPEG/PNG
- Faster website loading times
- Supported by all modern browsers
- Perfect for web optimization

<br />

## 📦 Installation

Since this is a CLI tool, install the package as a `devDependency` using one of the following commands:

```bash
yarn add -D image-webp-converter
```

```bash
pnpm add -D image-webp-converter
```

```bash
npm install --save-dev image-webp-converter
```

<br />

## 📝 Usage

After installing the package, add the following script to your `package.json` file.

```json
// package.json
{
  // ...
  "scripts": {
    "webpc": "webpc"
    // ...
  }
}
```

<br />

Place your images in your desired directory (default: `./images`):

```
your-project/
├── images/         # Directory for original images to convert(default: ./images)
│   ├── image1.jpg
│   ├── image2.png
│   ├── image3.jpeg
│   └── nested/
│       └── image4.jpg
│       └── image5.png
│       └── image6.jpeg
├── src/
├── package.json
└── ...
```

<br />

**💡 Notes**

> By default, it converts all images (including those in nested subdirectories) in the `./images` directory of the current directory. Therefore, if the `./images` directory does not exist, you need to create it and add images.

> By default, converted images are saved in the `./images/webp` directory. This directory will be automatically created if it doesn't exist.

> Supported image formats are: `JPG`, `JPEG`, and `PNG`. These formats will be converted to WebP format during the conversion process.

<br />

Run the following command to convert the images to `WebP` format.

```bash
yarn webpc
```

```bash
pnpm run webpc
```

```bash
npm run webpc
```

<br />

### Result

```
your-project/
├── images/
│   ├── image1.jpg
│   ├── image2.png
│   ├── image3.jpeg
│   ├── nested/
│   │    ├── image4.jpg
│   │    ├── image5.png
│   │    └── image6.jpeg
│   └── webp/         # Directory for converted images(default: ./images/webp)
│       ├── image1.webp
│       ├── image2.webp
│       ├── image3.webp
│       ├── image4.webp
│       ├── image5.webp
│       └── image6.webp
├── src/
├── package.json
└── ...
```

<br />

When the conversion is performed, you can check the conversion information as shown below.

<img width="758" alt="Image" src="https://github.com/user-attachments/assets/d426bb59-041a-474c-b36a-b1a95eef368c" />

<br />
<br />

## 🔧 Options

The following options are available: `path`, `destination`, `quality`, `lossless`, `resize`, and `crop`. These options allow you to customize the conversion process according to your needs.

```bash
yarn webpc --path ./my-images --destination ./my-images/webp --quality 90 ...
```

```bash
pnpm run webpc --path ./my-images --destination ./my-images/webp --quality 90 ...
```

```bash
npm run webpc --path ./my-images --destination ./my-images/webp --quality 90 ...
```

<br />

### 1. Path

**`--p` or `--path`: The path to the images to convert.**

- default: `./images`

```bash
yarn webpc --p ./images
yarn webpc --path ./images
```

```bash
pnpm run webpc --p ./images
pnpm run webpc --path ./images
```

```bash
npm run webpc --p ./images
npm run webpc --path ./images
```

<br />

### 2. Destination

**`--d` or `--destination`: The path to save the converted images.**

- default: `./images/webp`

```bash
yarn webpc --d ./images/webp
yarn webpc --destination ./images/webp
```

```bash
pnpm run webpc --d ./images/webp
pnpm run webpc --destination ./images/webp
```

```bash
npm run webpc --d ./images/webp
npm run webpc --destination ./images/webp
```

<br />

### 3. Quality

**`--q` or `--quality`: The quality of the converted images.**

- default: `75`

```bash
yarn webpc --q 90
yarn webpc --quality 90
```

```bash
pnpm run webpc --q 90
pnpm run webpc --quality 90
```

```bash
npm run webpc --q 90
npm run webpc --quality 90
```

<br />

### 4. Lossless

**`--l` or `--lossless`: Use lossless compression.**

- default: `false`

```bash
yarn webpc --l true
yarn webpc --lossless true
```

```bash
pnpm run webpc --l true
pnpm run webpc --lossless true
```

```bash
npm run webpc --l true
npm run webpc --lossless true
```

<br />

### 5. Size

**`--s` or `--size`: Limit the output file size to the specified byte size.**

```bash
yarn webpc --s 100000
yarn webpc --size 100000
```

```bash
pnpm run webpc --s 100000
pnpm run webpc --size 100000
```

```bash
npm run webpc --s 100000
npm run webpc --size 100000
```

<br />

### 6. Resize

**`--r` or `--resize`: Resize the images by specifying width and height.**

- `width`: Width of the resized image (pixels) - `required`
- `height`: Height of the resized image (pixels) - `required`

```bash
yarn webpc --r.width 100 --r.height 100
yarn webpc --resize.width 100 --resize.height 100
```

```bash
pnpm run webpc --r.width 100 --r.height 100
pnpm run webpc --resize.width 100 --resize.height 100
```

```bash
npm run webpc --r.width 100 --r.height 100
npm run webpc --resize.width 100 --resize.height 100
```

<br />

### 7. Crop

**`--c` or `--crop`: Whether to crop the images.**

- `x`: Starting x-coordinate for cropping (pixels) - `required`
- `y`: Starting y-coordinate for cropping (pixels) - `required`
- `width`: Width of the crop area (pixels) - `required`
- `height`: Height of the crop area (pixels) - `required`

```bash
yarn webpc --c.x 100 --c.y 100 --c.width 100 --c.height 100
yarn webpc --crop.x 100 --crop.y 100 --crop.width 100 --crop.height 100
```

```bash
pnpm run webpc --c.x 100 --c.y 100 --c.width 100 --c.height 100
pnpm run webpc --crop.x 100 --crop.y 100 --crop.width 100 --crop.height 100
```

```bash
npm run webpc --c.x 100 --c.y 100 --c.width 100 --c.height 100
npm run webpc --crop.x 100 --crop.y 100 --crop.width 100 --crop.height 100
```

<br />

## 📝 Configuration

You can also use a configuration file to customize the conversion process.

create a `webpc.config.mjs` file in the root of your project.

- `cjs` config file is not supported.

```
your-project/
├── images/
├── src/
├── package.json
├── webpc.config.mjs
└── ...
```

```ts
// webpc.config.mjs
export default {
  path: "images",
  destination: "images/webp2",
  quality: 80,
  lossless: false,
  // object: resize, crop
  resize: {
    width: 500, // required
    height: 500, // required
  },
  // ...
};
```

**💡 Notes**

> command-line interface (CLI) arguments take precedence over options defined in the configuration file.

<br />

## 🤝 Acknowledgements

This project was created with reference to the following projects. These libraries provide powerful image optimization and WebP conversion capabilities that form the foundation of this tool.

- [imagemin](https://github.com/imagemin/imagemin)
- [imagemin-webp](https://github.com/imagemin/imagemin-webp)

<br />

## 📝 License

MIT © ssi02014. See [LICENSE](LICENSE) for details.

<br />
