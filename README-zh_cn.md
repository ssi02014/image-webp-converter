# 🌄 Image WebP Converter

[English](README.md) | [한국어](README-ko_kr.md) | 简体中文 | [日本語](README-ja_jp.md)

<a href="https://www.npmjs.com/package/image-webp-converter" target="_blank">
  <img src="https://img.shields.io/npm/v/image-webp-converter.svg">
</a>

<a href="https://www.npmjs.com/package/image-webp-converter" target="_blank">
  <img src="https://img.shields.io/npm/dt/image-webp-converter.svg">
</a>

<br />
<br />

> 🚀 一个强大而简单的 CLI 工具，可以将您的图像转换为 WebP 格式 - 这种现代图像格式为网络图像提供了卓越的压缩效果！

<br />

## Why Image Webp Converter?

此工具简化了将 `JPG`、`JPEG` 和 `PNG` 图像转换为 `WebP` 格式的过程，帮助您以最小的努力优化您的网络资产。您可以执行以下操作：

- 一次转换多个图像
- 在减少文件大小的同时保持图像质量
- 自定义输出设置，如质量和无损
- 在转换过程中调整图像大小
- 将图像裁剪为特定尺寸
- 处理嵌套子目录中的图像
- 将输出文件大小限制为特定字节大小

<br />

💡 **WebP 的优点**：

- 与 `JPG`、`JPEG` 和 `PNG` 相比，文件大小更小
- 更快的网站加载时间
- 所有现代浏览器均支持
- 非常适合网络优化

<br />

## 📦 Installation

由于这是一个 CLI 工具，请使用以下命令之一将软件包安装为 `devDependency`：

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

安装软件包后，将以下脚本添加到您的 `package.json` 文件中。

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

将您的图像放置在您想要的目录中（默认：`./images`）：

```
your-project/
├── images/  # 原始图像目录（默认：./images）
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

> 默认情况下，它会转换当前目录的 `./images` 目录中的所有图像（包括嵌套子目录中的图像）。因此，如果 `./images` 目录不存在，您需要创建它并添加图像。

> 默认情况下，转换后的图像保存在 `./images/webp` 目录中。如果该目录不存在，将自动创建。

> 支持的图像格式有：`JPG`、`JPEG` 和 `PNG`。在转换过程中，这些格式将被转换为 WebP 格式。

<br />

运行以下命令将图像转换为 `WebP` 格式。

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
│   └── webp/  # 转换后的图像目录（默认：./images/webp）
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

转换完成后，您可以查看如下所示的转换信息。

<img width="758" alt="Image" src="https://github.com/user-attachments/assets/d426bb59-041a-474c-b36a-b1a95eef368c" />

<br />
<br />

## 🔧 Options

可用的选项有：`path`、`destination`、`quality`、`lossless`、`resize` 和 `crop`。这些选项允许您根据需要自定义转换过程。

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

**`--p` 或 `--path`：要转换的图像路径。**

- 默认：`./images`

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

**`--d` 或 `--destination`：保存转换后图像的路径。**

- 默认：`./images/webp`

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

**`--q` 或 `--quality`：转换后图像的质量。**

- 默认：`75`

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

**`--l` 或 `--lossless`：使用无损压缩。**

- 默认：`false`

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

**`--s` 或 `--size`：将输出文件大小限制为指定的字节大小。**

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

**`--r` 或 `--resize`：通过指定宽度和高度调整图像大小。**

- `width`：调整后图像的宽度（像素） - `必需`
- `height`：调整后图像的高度（像素） - `必需`

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

**`--c` 或 `--crop`：裁剪图像的选项。从指定的坐标（x,y）开始，裁剪指定宽度和高度的图像。**

- `x`：裁剪起始 x 坐标（像素） - `必需`
- `y`：裁剪起始 y 坐标（像素） - `必需`
- `width`：裁剪区域的宽度（像素） - `必需`
- `height`：裁剪区域的高度（像素） - `必需`

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

您还可以使用配置文件自定义转换过程。

在项目的根目录中创建一个 `webpc.config.mjs` 文件。

- 不支持 `cjs` 配置文件。

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
  destination: "images/webp",
  quality: 80,
  lossless: false,
  // object: resize, crop
  resize: {
    width: 500, // 必需
    height: 500, // 必需
  },
  // ...
};
```

**💡 Notes**

> 命令行界面（CLI）参数优先于配置文件中定义的选项。

<br />

## 🤝 Acknowledgements

本项目参考了以下项目创建。这些库提供了强大的图像优化和 WebP 转换功能，构成了该工具的基础。

- [imagemin](https://github.com/imagemin/imagemin)
- [imagemin-webp](https://github.com/imagemin/imagemin-webp)

<br />

## 📝 License

MIT © ssi02014。详情请参阅 [LICENSE](LICENSE)。

<br />
