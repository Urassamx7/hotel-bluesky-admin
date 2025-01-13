import { Route, Routes } from "react-router-dom";
import Login from "./login";
import Logout from "./logout";
import { App } from "./app";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/logout" element={<Logout />} />
    </Routes>
  );
};
