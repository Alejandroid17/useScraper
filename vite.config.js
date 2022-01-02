import { defineConfig } from "vite"
import reactRefresh from "@vitejs/plugin-react-refresh"
import * as path from "path"
import pkg from "./package.json"
import camelCase from "camelcase"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
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
})
