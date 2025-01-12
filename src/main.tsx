import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "@radix-ui/themes/styles.css";
import { App } from "./App";
import { Theme } from "@radix-ui/themes";

// biome-ignore lint/style/noNonNullAssertion: <explanation>
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Theme>
      <App />
    </Theme>
  </StrictMode>
);
