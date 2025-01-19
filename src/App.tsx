import * as Sentry from "@sentry/react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Router";
import QueryProvider from "./provider/QueryProvider";
import AuthInitializer from "./components/auth/AuthInitializer";

Sentry.init({
  dsn: import.meta.env.VITE_SENTRY_DSN,
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration({
      maskAllText: true,
      blockAllMedia: true,
    }),
  ],
  tracesSampleRate: 1.0,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});

const App = () => {
  return (
    <Sentry.ErrorBoundary
      fallback={({ error }) => (
        <div>
          <h1>죄송합니다. 오류가 발생했습니다.</h1>
          <p>{error instanceof Error ? error.message : "알 수 없는 오류"}</p>
        </div>
      )}
    >
      <QueryProvider>
        <AuthInitializer>
          <RouterProvider router={router} />
        </AuthInitializer>
      </QueryProvider>
    </Sentry.ErrorBoundary>
  );
};

export default App;
