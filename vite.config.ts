import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import updateManifestPlugin from "./plugins/update-manifest";

// https://vite.dev/config/
export default defineConfig({
  base: "./", // 将根路径换成相对路径
  plugins: [react(), updateManifestPlugin()],
});
