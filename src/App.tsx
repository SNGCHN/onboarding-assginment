import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Router";
import QueryProvider from "./provider/QueryProvder";

function App() {
  return (
    <QueryProvider>
      <RouterProvider router={router} />
    </QueryProvider>
  );
}

export default App;
