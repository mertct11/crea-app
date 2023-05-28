import { defineConfig, splitVendorChunkPlugin } from "vite";
import react from "@vitejs/plugin-react";

import { resolve } from "path";
const projectRootDir = resolve(__dirname);
const PORT = 3001;

export default defineConfig({
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
    ],
  },
});
