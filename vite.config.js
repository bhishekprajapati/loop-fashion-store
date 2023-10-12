import { defineConfig } from "vite";
import htmlPurge from "vite-plugin-purgecss";

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
  plugins: [htmlPurge([htmlPurge()])],
});
