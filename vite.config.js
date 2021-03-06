import { defineConfig } from "vite"
import * as path from "path"
import pkg from "./package.json"
import camelCase from "camelcase"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  esbuild: {
    jsxInject: "import * as React from 'react';",
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.js"),
      name: camelCase(path.basename(pkg.name)),
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        exports: "named",
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
  test: {
    environment: "jsdom",
    exclude: [
      "**/node_modules/**",
      "**/dist/**",
      "**/cypress/**",
      "**/.{idea,git,cache,output,temp}/**",
      "**/src/!(tests)/**",
    ],
  },
})
