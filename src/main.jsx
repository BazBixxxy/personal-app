import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "./context/theme-provider.jsx";
import { AuthContextProvider } from "./context/auth-context.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </ThemeProvider>
  </StrictMode>
);
