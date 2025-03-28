# 🌄 Image Webp Converter <a href="https://www.npmjs.com/package/image-webp-converter" target="_blank"><img align="center" src="https://img.shields.io/npm/v/image-webp-converter.svg" /></a>

This is a simple CLI tool that allows you to convert images to webp format. It provides an easy way to convert `JPG`, `JPEG`, and `PNG` images to the more efficient `Webp` format. With this tool, you can:

- Convert multiple images at once
- Maintain image quality while reducing file size
- Customize output settings like quality and lossless
- Resize images during conversion
- Crop images to specific dimensions

<br />

## 📦 Installation

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

```json title="package.json"
{
  "scripts": {
    "webpc": "webpc"
  }
}
```

<br />

Run the following command to convert the images to webp format.

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

### Notes

> By default, it converts all images in the `./images` directory of the current directory. Therefore, if the `./images` directory does not exist, you need to create it and add images.

> By default, converted images are saved in the `images/webp` directory. This directory will be automatically created if it doesn't exist.

> Supported image formats are: `JPG`, `JPEG`, and `PNG`. These formats will be converted to WebP format during the conversion process.

<br />

### AS-IS

```
images
├── image1.jpg
├── image2.png
└── image3.jpeg
```

### TO-BE

```
images/
├── webp/
│   ├── image1.webp
│   ├── image2.webp
│   └── image3.webp
├── image1.jpg
├── image2.png
└── image3.jpeg
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

### 5. Resize

**`--r` or `--resize`: Resize the images by specifying width and height.**

- `width`: Width of the resized image (pixels)
- `height`: Height of the resized image (pixels)

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

### 6. Crop

**`--c` or `--crop`: Whether to crop the images.**

- `x`: Starting x-coordinate for cropping (pixels)
- `y`: Starting y-coordinate for cropping (pixels)
- `width`: Width of the crop area (pixels)
- `height`: Height of the crop area (pixels)

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

## 🤝 Acknowledgements

This project was created with reference to the following projects. These libraries provide powerful image optimization and WebP conversion capabilities that form the foundation of this tool.

- [imagemin](https://github.com/imagemin/imagemin)
- [imagemin-webp](https://github.com/imagemin/imagemin-webp)

<br />

## 📝 License

MIT © ssi02014. See [LICENSE](LICENSE) for details.

<br />
