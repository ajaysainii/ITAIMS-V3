import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://www.itaims.com",
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  output: "static",
});
