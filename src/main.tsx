import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./routes";
import { AuthProvider } from "./context/auth";

// biome-ignore lint/style/noNonNullAssertion: <explanation>
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Theme>
          <Router />
        </Theme>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
