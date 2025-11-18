import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import updateManifestPlugin from "./plugins/update-manifest";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), updateManifestPlugin()],
});
