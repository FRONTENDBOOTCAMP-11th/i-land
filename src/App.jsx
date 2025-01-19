import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";

import router from "@/routes";
import Spinner from "@components/common/Spinner";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <Spinner />
        <RouterProvider router={router} future={{ v7_startTransition: true }} />
      </HelmetProvider>
    </QueryClientProvider>
  );
}

export default App;
