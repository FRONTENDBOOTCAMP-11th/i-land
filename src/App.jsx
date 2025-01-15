import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";

import router from "@/routes";
import Search from "@components/common/Search";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Search />
      <HelmetProvider>
        <RouterProvider router={router} future={{ v7_startTransition: true }} />
      </HelmetProvider>
    </QueryClientProvider>
  );
}

export default App;
