import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  base: "/",

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@test": path.resolve(__dirname, "./tests"),
    },
  },

  build: {
    outDir: "dist",
    emptyOutDir: true,
  },

  plugins: [react(), tsconfigPaths()],

  server: {
    host: "::",
    port: 8080,
  },
});