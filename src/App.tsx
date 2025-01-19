import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Router";
import QueryProvider from "./provider/QueryProvider";
import AuthInitializer from "./components/auth/AuthInitializer";

export default function App() {
  return (
    <QueryProvider>
      <AuthInitializer>
        <RouterProvider router={router} />
      </AuthInitializer>
    </QueryProvider>
  );
}
