import { createBrowserRouter } from "react-router-dom";
import Login from "./login";

export const router = createBrowserRouter([
  {
    path: "/auth/login",
    element: <Login />,
  },
]);
