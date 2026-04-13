import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/fonts.css";
import "./index.css";
import App from "./App.js";
import { ThemeProvider } from "./context/ThemeProvider";
import { NewClientModalProvider } from "./context/NewClientModalProvider";

const root = document.getElementById("root");

createRoot(root).render(
  <StrictMode>
    <ThemeProvider>
      <NewClientModalProvider>
        <App />
      </NewClientModalProvider>
    </ThemeProvider>
  </StrictMode>,
);
