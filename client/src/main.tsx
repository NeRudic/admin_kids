import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/fonts.css";
import "./index.css";
import App from "./App.js";
import { ThemeProvider } from "./context/ThemeProvider";
import { NewClientModalProvider } from "./context/NewClientModalProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <NewClientModalProvider>
        <App />
      </NewClientModalProvider>
    </ThemeProvider>
  </StrictMode>,
);
