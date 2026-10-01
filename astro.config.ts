import { defineConfig } from "astro/config";
import expressiveCode from "astro-expressive-code";

export default defineConfig({
  site: "https://example.com",

  integrations: [
    expressiveCode({
      themes: ["github-dark", "github-light"],

      themeCssSelector: (theme) =>
        theme.name === "github-dark"
          ? '[data-theme="dark"]'
          : ':root:not([data-theme="dark"])',

      useDarkModeMediaQuery: false,

      frames: {
        showCopyToClipboardButton: true,
      },
    }),
  ],
});