import { RouterProvider } from "react-router-dom";
import { router } from "@/components/Router";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReduxProvider } from "@/context";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      useErrorBoundary: true,
      suspense: true,
      notifyOnChangeProps: "tracked"
    }
  }
});

const App = () => {
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <ReduxProvider>
        <RouterProvider router={router} />
      </ReduxProvider>
    </QueryClientProvider>
  );
};
export default App;
