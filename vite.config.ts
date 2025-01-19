import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as Sentry from "@sentry/vite-plugin";

export default defineConfig({
  plugins: [
    react(),
    Sentry.sentryVitePlugin({
      authToken: process.env.SENTRY_AUTH_TOKEN,
      org: "your-org-name",
      project: "your-project-name",
    }),
  ],
});
