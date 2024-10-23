import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";


export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['@google/model-viewer', 'three'], 
  },
  build: {
    outDir: "dist"
  },
  server: {
    host:"0.0.0.0",
    port:3000,
    strictPort: true,
    hmr: {
      clientPort: 443 // Run the websocket server on the SSL port
    }
  }
});
