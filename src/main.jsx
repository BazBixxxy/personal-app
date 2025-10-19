import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "./context/theme-provider.jsx";
import { AuthContextProvider } from "./context/auth-context.jsx";
import { EdgeStoreProvider } from "./context/edgestore-context.jsx";
import { baseURL } from "./services/baseURL.js";
import { Toaster } from "./components/ui/sonner.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <AuthContextProvider>
        <EdgeStoreProvider
          basePath={`${baseURL}/edgestore`}
          fetchOptions={{
            credentials: "include",
          }}
        >
          <App />
        </EdgeStoreProvider>
      </AuthContextProvider>
      <Toaster position="top-center" expand={false} richColors />
    </ThemeProvider>
  </StrictMode>
);
