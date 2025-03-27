import esbuild from "rollup-plugin-esbuild";
import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { dts } from "rollup-plugin-dts";

import pkg from "./package.json" assert { type: "json" };

const extensions = [".js", ".ts"];

export default [
  {
    input: "./src/index.ts", // 진입 경로
    output: [
      {
        file: pkg.main,
        sourcemap: true,
        format: "cjs",
      },
      {
        file: pkg.module,
        sourcemap: true,
        format: "esm",
      },
    ],
    plugins: [
      nodeResolve({
        extensions,
      }),
      commonjs({ include: "node_modules/**" }),
      esbuild(),
    ],
  },
  {
    // d.ts 파일 직접 생성
    input: "./src/index.ts",
    output: {
      file: pkg.types,
      format: "esm",
    },
    plugins: [dts()],
  },
];
