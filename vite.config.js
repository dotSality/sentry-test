import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { sentryVitePlugin } from "@sentry/vite-plugin";

const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, ".env.local") });

// https://vitejs.dev/config/
export default defineConfig({
  base: '/sentry-test/',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [vue(), sentryVitePlugin({
    org: "test-lyz",
    project: "javascript-vue",
    release: {
      name: "0.0.0",
    },
    authToken: "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",
  })],
  build: {
    sourcemap: true,
  },
});
