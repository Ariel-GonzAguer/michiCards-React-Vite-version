import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: [
        "/icons/shieldCatSolidFontAwsome.svg"
      ],
      manifest: {
        name: "Michi Cards",
        short_name: "MichiCards",
        description: "Create Your Own MichiCards Collection!",
        theme_color: "pink",
        icons: [
          {
            src: "/icons/shieldCatSolidFontAwsome.svg",
            sizes: "192x192",
            type: "image/svg+xml",
          },
          {
            src: "/icons/shieldCatSolidFontAwsome.svg",
            sizes: "512x512",
            type: "image/svg+xml",
          },
          {
            src: "/icons/shieldCatSolidFontAwsome.svg",
            sizes: "512x512",
            type: "image/svg+xml",
            purpose: "any maskable",
          },
        ],
      },
    }),
  ],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./setupTests.js",
  },
});
