import { TanStackRouterVite } from "@tanstack/router-vite-plugin";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import styleXVitePlugin from "vite-plugin-stylex";

export default defineConfig({
  plugins: [react(), styleXVitePlugin(), TanStackRouterVite()],
});
