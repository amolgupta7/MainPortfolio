import path from "node:path"
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  // Production is served from https://amolgupta7.github.io/MainPortfolio/ via
  // GitHub Pages, so the build needs the repo name as a base path — but the
  // dev server should stay at "/" (localhost:5173/), not localhost:5173/MainPortfolio/.
  base: command === "build" ? "/MainPortfolio/" : "/",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "./src"),
    },
  },
}))
