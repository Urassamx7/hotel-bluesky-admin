import { api, LoginFunc } from "../../services/index";
import { useNavigate } from "react-router-dom";
import type { AdminLoginProps, UserProfile } from "../../types/schema";
import axios from "axios";
import type React from "react";
import { createContext, useContext, useEffect, useState } from "react";

type AuthContextType = {
  admin: UserProfile | null;
  token: string | null;
  loginUser: (email: string, password: string) => Promise<AdminLoginProps>;
  logout: () => void;
  isLoggedIn: () => boolean;
};

type Props = { children: React.ReactNode };

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({ children }: Props) => {
  const navigate = useNavigate();
  const [token, setToken] = useState<string | null>(null);
  const [admin, setAdmin] = useState<UserProfile | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const admin = localStorage.getItem("@hotelbluesky:admin");
    const token = localStorage.getItem("@hotelbluesky:token");
    if (admin && token) {
      try {
        setAdmin(JSON.parse(admin));
        setToken(token);
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
      } catch (error) {
        console.error("Error parsing admin data:", error);
        localStorage.removeItem("@hotelbluesky:admin");
        localStorage.removeItem("@hotelbluesky:token");
      }
    }
    setIsReady(true);
  }, []);
  async function loginUser(
    email: string,
    password: string
  ): Promise<AdminLoginProps> {
    const response = await LoginFunc(email, password);
    if (response) {
      api.defaults.headers.common.Authorization = `Bearer ${response.token}`;
      localStorage.setItem("@hotelbluesky:token", response.token);
      localStorage.setItem(
        "@hotelbluesky:admin",
        JSON.stringify(response.user)
      );
      setAdmin(response.user);
      navigate("/");
      return response;
    }
    throw new Error("Login failed");
  }

  const isLoggedIn = () => {
    return !!admin;
  };
  const logout = () => {
    localStorage.removeItem("@hotelbluesky:admin");
    localStorage.removeItem("@hotelbluesky:token");
    setAdmin(null);
    setToken(null);
    navigate("/auth/login");
  };

  return (
    <AuthContext.Provider
      value={{
        admin,
        token,
        loginUser,
        logout,
        isLoggedIn,
      }}
    >
      {isReady ? children : null}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};
