import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "sonner@2.0.3";
import App from "./App";
import "./styles/globals.css";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Root element not found");

const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <App />
    <Toaster position="top-center" richColors />
  </StrictMode>
);
