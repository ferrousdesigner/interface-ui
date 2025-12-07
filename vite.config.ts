import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { resolve } from "path";

export default defineConfig({
  plugins: [react(), dts({ include: ["src"] })],
  optimizeDeps: {
    exclude: ["tweakpane"], // Exclude from pre-bundling
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "InterfaceUI",
      formats: ["es", "cjs"],
      fileName: (format) => `${format}/index.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom", "tweakpane"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
