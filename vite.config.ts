import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "::", // позволяет доступ с любого IPv6-адреса
    port: 8080, // можешь изменить на 3000, если хочешь
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // позволяет использовать "@/components/..." вместо длинных путей
    },
  },
  build: {
    outDir: "dist", // папка для финальной сборки
    emptyOutDir: true, // очищает папку перед новой сборкой
  },
});
