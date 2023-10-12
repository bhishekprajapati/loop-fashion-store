import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: true,
    host: true,
  },
  build: {
    outDir: "../dist",
  },
  root: "./src",
});
