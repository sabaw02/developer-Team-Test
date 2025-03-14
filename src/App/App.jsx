import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../pages/layout";
import Landing from "../pages/landing/landing";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const client = new QueryClient()
  const router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Landing />,
        },
      ],
    },
  ]);
  return(
    <QueryClientProvider client={client}>
       <RouterProvider router={router} />
    </QueryClientProvider>
  )
}

export default App;
