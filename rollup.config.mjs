import commonjs from "@rollup/plugin-commonjs";
import esbuild from "rollup-plugin-esbuild";
import pkg from "./package.json" assert { type: "json" };

export default [
  {
    input: "./src/index.js",
    output: [
      {
        file: pkg.main,
        sourcemap: true,
        format: "esm",
      },
    ],
    plugins: [commonjs(), esbuild({ minify: true })],
  },
];
