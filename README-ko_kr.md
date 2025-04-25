# 🌄 Image WebP Converter

[English](README.md) | 한국어 | [简体中文](README-zh_cn.md) | [日本語](README-ja_jp.md)

<a href="https://www.npmjs.com/package/image-webp-converter" target="_blank">
  <img src="https://img.shields.io/npm/v/image-webp-converter.svg">
</a>

<a href="https://www.npmjs.com/package/image-webp-converter" target="_blank">
  <img src="https://img.shields.io/npm/dt/image-webp-converter.svg">
</a>

<br />
<br />

> 🚀 강력하면서도 간단한 CLI 도구로, 이미지를 웹에서의 우수한 압축을 제공하는 최신 이미지 포맷인 WebP 포맷으로 변환합니다!

<br />

## Why Image Webp Converter?

이 도구는 `JPG`, `JPEG`, `PNG` 이미지를 `WebP` 포맷으로 변환하는 과정을 단순화하여, 최소한의 노력으로 웹 자산을 최적화할 수 있도록 도와줍니다. 다음과 같은 작업을 수행할 수 있습니다:

- 여러 이미지를 한 번에 변환
- 이미지 품질을 유지하면서 파일 크기 감소
- 품질 및 무손실과 같은 출력 설정 사용자 정의
- 변환 중 이미지 크기 조정
- 특정 크기로 이미지 자르기
- 중첩된 하위 디렉토리의 이미지 처리
- 특정 바이트 크기로 출력 파일 크기 제한

<br />

💡 **WebP의 장점**:

- `JPG`, `JPEG`, `PNG`에 비해 더 작은 파일 크기
- 더 빠른 웹사이트 로딩 시간
- 모든 최신 브라우저에서 지원
- 웹 최적화에 적합

<br />

## 📦 Installation

이것은 CLI 도구이므로, 다음 명령어 중 하나를 사용하여 패키지를 `devDependency`로 설치하세요:

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

패키지를 설치한 후, 다음 스크립트를 `package.json` 파일에 추가하세요.

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

원하는 디렉토리에 이미지를 배치하세요 (기본값: `./images`):

```
your-project/
├── images/         # 변환할 원본 이미지 디렉토리(기본값: ./images)
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

> 기본적으로, 현재 디렉토리의 `./images` 디렉토리 내의 모든 이미지(중첩된 하위 디렉토리 포함)를 변환합니다. 따라서 `./images` 디렉토리가 존재하지 않으면, 이를 생성하고 이미지를 추가해야 합니다.

> 기본적으로, 변환된 이미지는 `./images/webp` 디렉토리에 저장됩니다. 이 디렉토리는 존재하지 않으면 자동으로 생성됩니다.

> 지원되는 이미지 포맷은: `JPG`, `JPEG`, `PNG`입니다. 변환 과정에서 이러한 포맷이 WebP 포맷으로 변환됩니다.

<br />

다음 명령어를 실행하여 이미지를 `WebP` 포맷으로 변환하세요.

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
│   └── webp/  # 변환된 이미지 디렉토리(기본값: ./images/webp)
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

변환이 수행되면, 아래와 같이 변환 정보를 확인할 수 있습니다.

<img width="758" alt="Image" src="https://github.com/user-attachments/assets/d426bb59-041a-474c-b36a-b1a95eef368c" />

<br />
<br />

## 🔧 Options

다음 옵션을 사용할 수 있습니다: `path`, `destination`, `quality`, `lossless`, `resize`, `crop`. 이러한 옵션을 통해 필요에 따라 변환 프로세스를 사용자 정의할 수 있습니다.

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

**`--p` 또는 `--path`: 변환할 이미지의 경로.**

- 기본값: `./images`

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

**`--d` 또는 `--destination`: 변환된 이미지를 저장할 경로.**

- 기본값: `./images/webp`

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

**`--q` 또는 `--quality`: 변환된 이미지의 품질.**

- 기본값: `75`

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

**`--l` 또는 `--lossless`: 무손실 압축 사용.**

- 기본값: `false`

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

**`--s` 또는 `--size`: 출력 파일 크기를 지정된 바이트 크기로 제한.**

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

**`--r` 또는 `--resize`: 너비(width)와 높이(height)를 지정하여 이미지 크기 조정.**

- `width`: 조정된 이미지의 너비 (픽셀) - `필수`
- `height`: 조정된 이미지의 높이 (픽셀) - `필수`

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

**`--c` 또는 `--crop`: 이미지를 자르기 위한 옵션. 지정된 좌표(x,y)에서 시작하여 설정한 너비(width)와 높이(height)만큼 이미지를 잘라냅니다.**

- `x`: 자르기 시작 x좌표 (픽셀) - `필수`
- `y`: 자르기 시작 y좌표 (픽셀) - `필수`
- `width`: 자르기 영역의 너비 (픽셀) - `필수`
- `height`: 자르기 영역의 높이 (픽셀) - `필수`

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

변환 프로세스를 사용자 정의하기 위해 `configuration` 파일을 사용할 수도 있습니다.

프로젝트의 루트에 `webpc.config.mjs` 파일을 생성하세요.

- `cjs` config 파일은 지원되지 않습니다.

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
    width: 500, // 필수
    height: 500, // 필수
  },
  // ...
};
```

**💡 참고사항**

> 명령줄 인터페이스(CLI) 인수는 구성 파일에 정의된 옵션보다 우선합니다.

<br />

## 🤝 Acknowledgements

이 프로젝트는 다음 프로젝트를 참조하여 생성되었습니다. 이러한 라이브러리는 이 도구의 기반을 형성하는 강력한 이미지 최적화 및 WebP 변환 기능을 제공합니다.

- [imagemin](https://github.com/imagemin/imagemin)
- [imagemin-webp](https://github.com/imagemin/imagemin-webp)

<br />

## 📝 License

MIT © ssi02014. 자세한 내용은 [LICENSE](LICENSE)를 참조하세요.

<br />
