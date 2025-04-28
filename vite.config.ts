import { defineConfig } from 'vitest/config';
import react from "@vitejs/plugin-react";
import * as path from "path";
import { fileURLToPath } from "url";

// recréer __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "ReactAuthProtect",
      fileName: (format) => `react-auth-protect.${format}.js`,
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      external: ["react", "react-dom", "react-router-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react-router-dom": "ReactRouterDOM",
        },
      },
    },
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./test/setupTests.ts", // fichier de configuration des tests
    include: ["test/**/*.test.tsx"], // inclusion des fichiers de test
  }
});
