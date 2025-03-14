import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../pages/layout";
import Landing from "../pages/landing/landing";
import { QueryClient, QueryClientProvider } from "react-query";
import Course from "../pages/course/course";

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
        {
          path: "/course",
          element: <Course />,
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
