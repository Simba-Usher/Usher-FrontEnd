import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 배포 이슈 해결
  build: {
    chunkSizeWarningLimit: 1600,
  },
});
