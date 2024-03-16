import Layout from "./components/layout/Layout";
import HomePage from "./pages/homepage/HomePage";
import ListPage from "./pages/listPage/ListPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SinglePage from "./pages/singlePage/SinglePage";
import ProfilePage from "./pages/profilePage/ProfilePage";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/list",
        element: <ListPage />,
      },
      {
        path: "/:id",
        element: <SinglePage />,
      },
      {
        path: "/profile",
        element: <ProfilePage />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
