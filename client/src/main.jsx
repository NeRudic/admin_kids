import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./CustomNormalize.css";
import "./index.css";
import App from "./App.jsx";
import Footer from "./components/footer/Footer.jsx";

const root = document.getElementById("root");

createRoot(root).render(
  <StrictMode>
    <App />
    <Footer />
  </StrictMode>,
);
