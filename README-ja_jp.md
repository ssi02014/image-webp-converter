# 🌄 Image WebP Converter

[English](README.md) | [한국어](README-ko_kr.md) | [简体中文](README-zh_cn.md) | 日本語

<a href="https://www.npmjs.com/package/image-webp-converter" target="_blank">
  <img src="https://img.shields.io/npm/v/image-webp-converter.svg">
</a>

<a href="https://www.npmjs.com/package/image-webp-converter" target="_blank">
  <img src="https://img.shields.io/npm/dt/image-webp-converter.svg">
</a>

<br />
<br />

> 🚀 強力でありながらシンプルな CLI ツールで、画像を WebP 形式に変換します。WebP は、ウェブ上の画像に優れた圧縮を提供する現代的な画像形式です！

<br />

## Why Image Webp Converter?

このツールは、`JPG`、`JPEG`、および`PNG`画像を`WebP`形式に変換するプロセスを簡素化し、最小限の労力でウェブ資産を最適化するのに役立ちます。以下のことができます：

- 複数の画像を一度に変換
- ファイルサイズを削減しながら画像品質を維持
- 品質やロスレスなどの出力設定をカスタマイズ
- 変換中に画像のサイズを変更
- 特定の寸法に画像をトリミング
- ネストされたサブディレクトリ内の画像を処理
- 出力ファイルサイズを特定のバイトサイズに制限

<br />

💡 **WebP の利点**：

- `JPG`、`JPEG`、および`PNG`と比較してファイルサイズが小さい
- ウェブサイトの読み込み時間が速くなる
- すべての最新ブラウザでサポートされている
- ウェブ最適化に最適

<br />

## 📦 Installation

これは CLI ツールであるため、次のコマンドのいずれかを使用してパッケージを`devDependency`としてインストールします：

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

パッケージをインストールした後、次のスクリプトを`package.json`ファイルに追加します。

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

画像を希望のディレクトリに配置します（デフォルト：`./images`）：

```
your-project/
├── images/  # 変換する元の画像のディレクトリ（デフォルト：./images）
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

> デフォルトでは、現在のディレクトリの`./images`ディレクトリ内のすべての画像（ネストされたサブディレクトリ内の画像を含む）を変換します。したがって、`./images`ディレクトリが存在しない場合は、それを作成して画像を追加する必要があります。

> デフォルトでは、変換された画像は`./images/webp`ディレクトリに保存されます。このディレクトリは存在しない場合、自動的に作成されます。

> サポートされている画像形式は：`JPG`、`JPEG`、および`PNG`です。これらの形式は変換プロセス中に WebP 形式に変換されます。

<br />

次のコマンドを実行して、画像を`WebP`形式に変換します。

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
│   └── webp/ # 変換された画像のディレクトリ（デフォルト：./images/webp）
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

変換が実行されると、以下のように変換情報を確認できます。

<img width="758" alt="Image" src="https://github.com/user-attachments/assets/d426bb59-041a-474c-b36a-b1a95eef368c" />

<br />
<br />

## 🔧 Options

次のオプションが利用可能です：`path`、`destination`、`quality`、`lossless`、`resize`、および`crop`。これらのオプションを使用して、ニーズに応じて変換プロセスをカスタマイズできます。

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

**`--p` または `--path`：変換する画像のパス。**

- デフォルト：`./images`

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

**`--d` または `--destination`：変換された画像を保存するパス。**

- デフォルト：`./images/webp`

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

**`--q` または `--quality`：変換された画像の品質。**

- デフォルト：`75`

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

**`--l` または `--lossless`：ロスレス圧縮を使用。**

- デフォルト：`false`

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

**`--s` または `--size`：出力ファイルサイズを指定されたバイトサイズに制限。**

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

**`--r` または `--resize`：幅と高さを指定して画像のサイズを変更。**

- `width`：リサイズされた画像の幅（ピクセル） - `必須`
- `height`：リサイズされた画像の高さ（ピクセル） - `必須`

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

**`--c` または `--crop`：画像をトリミングするオプション。指定された座標（x,y）から始まり、設定された幅と高さで画像をトリミングします。**

- `x`：トリミング開始の x 座標（ピクセル） - `必須`
- `y`：トリミング開始の y 座標（ピクセル） - `必須`
- `width`：トリミング領域の幅（ピクセル） - `必須`
- `height`：トリミング領域の高さ（ピクセル） - `必須`

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

変換プロセスをカスタマイズするために、`configuration`ファイルを使用することもできます。

プロジェクトのルートに`webpc.config.mjs`ファイルを作成します。

- `cjs`構成ファイルはサポートされていません。

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
    width: 500, // 必須
    height: 500, // 必須
  },
  // ...
};
```

**💡 Notes**

> コマンドラインインターフェース（CLI）引数は、構成ファイルで定義されたオプションよりも優先されます。

<br />

## 🤝 Acknowledgements

このプロジェクトは、以下のプロジェクトを参考にして作成されました。これらのライブラリは、強力な画像最適化と WebP 変換機能を提供し、このツールの基盤を形成しています。

- [imagemin](https://github.com/imagemin/imagemin)
- [imagemin-webp](https://github.com/imagemin/imagemin-webp)

<br />

## 📝 License

MIT © ssi02014。詳細は[LICENSE](LICENSE)をご覧ください。

<br />
