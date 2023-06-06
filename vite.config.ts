import { defineConfig, splitVendorChunkPlugin } from "vite";
import react from "@vitejs/plugin-react";

import { resolve } from "path";
const projectRootDir = resolve(__dirname);
const PORT = 3001;

export default defineConfig({
  define:{
    'process.env': {}
  },
  server: {
    watch: {
      usePolling: true,
    },
    port: Number(PORT),
    host: "0.0.0.0",
    strictPort: true,
    hmr: {
      timeout: 5000,
    },
  },
  publicDir: "public",
  plugins: [splitVendorChunkPlugin(), react({})],
  resolve: {
    extensions: [".jsx", ".tsx", ".ts", ".js", ".json"],
    alias: [
      { find: "@", replacement: resolve(projectRootDir, "./src") },
      {
        find: "@components",
        replacement: resolve(projectRootDir, "./src/components"),
      },
      {
        find: "@layouts",
        replacement: resolve(projectRootDir, "./src/layouts"),
      },
      {
        find: "@types",
        replacement: resolve(projectRootDir, "./src/types"),
      },
      {
        find: "@interfaces",
        replacement: resolve(projectRootDir, "./src/interfaces"),
      },
      {
        find: "@enums",
        replacement: resolve(projectRootDir, "./src/enums"),
      },
      {
        find: "@http",
        replacement: resolve(projectRootDir, "./src/http"),
      },
    ],
  },
});
