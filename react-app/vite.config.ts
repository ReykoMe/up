/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import path from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = path.dirname(fileURLToPath(import.meta.url));
// https://vitejs.dev/config/
export default defineConfig({
  test: {
    globals: true,
    environment: "happy-dom",
    setupFiles: "./src/tests/config.ts",
  },
  resolve: {
    alias: {
      "@root": path.resolve(rootDir, "./src"),
      "@store": path.resolve(rootDir, "./src/store"),
      "@components": path.resolve(rootDir, "./src/components"),
      "@widgets": path.resolve(rootDir, "./src/widgets"),
      "@api": path.resolve(rootDir, "./src/api"),
      "@utils": path.resolve(rootDir, "./src/utils"),
    },
  },
  plugins: [svgr(), react()],
});
