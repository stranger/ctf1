import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import vitePluginRequire from "vite-plugin-require";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), vitePluginRequire.default()],
  base: "/book-landing-page/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "/src"),
    },
  },
});
