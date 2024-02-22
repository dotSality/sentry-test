import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "@/assets/main.pcss";
import * as Sentry from "@sentry/vue";

const app = createApp(App);

Sentry.init({
  app,
  dsn: "https://df699d79aeff6f234d671c8315521a52@o4506179055190016.ingest.sentry.io/4506179056828416",
  logErrors: true,
  integrations: [
    Sentry.browserTracingIntegration({ router }),
    Sentry.replayIntegration(),
  ],
  tracePropagationTargets: ["localhost", "my-site-url.com", /^\//],
  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

app.use(router).mount("#app");
