import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import CreateUser from "../pages/CreateUser";
import UpdateUser from "../pages/UpdateUser";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/create-user",
    element: <CreateUser />,
  },
  {
    path: "/update-user/:userId",
    element: <UpdateUser />,
  },
]);

function AppRouter() {
  return <RouterProvider router={router} />;
}

export default AppRouter;
