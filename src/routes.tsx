import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Login from "./login";
import Logout from "./logout";
import { App } from "./app";
import Client from "./client";
import { useAuth } from "./context/auth";
import Admins from "./admin";

export const Router = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoutes>
            <App />
          </ProtectedRoutes>
        }
      />
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/logout" element={<Logout />} />
      <Route
        path="/clients"
        element={
          <ProtectedRoutes>
            <Client />
          </ProtectedRoutes>
        }
      />
      <Route
        path="/admins"
        element={
          <ProtectedRoutes>
            <Admins />
          </ProtectedRoutes>
        }
      />
    </Routes>
  );
};

type ProtectedProps = {
  children: React.ReactNode;
};

export const ProtectedRoutes = ({ children }: ProtectedProps) => {
  const location = useLocation();
  const { isLoggedIn } = useAuth();
  return isLoggedIn() ? (
    <>{children}</>
  ) : (
    <Navigate to="/auth/login" state={{ from: location }} replace />
  );
};
