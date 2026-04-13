import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/fonts.css";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "./context/ThemeProvider.tsx";
import { NewClientModalProvider } from "./context/NewClientModalProvider.tsx";

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
