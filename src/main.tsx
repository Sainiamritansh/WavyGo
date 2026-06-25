import { createRoot } from "react-dom/client";
import App from "./app/App";
import { ThemeProvider } from "./context/ThemeContext";
import "./styles/index.css";

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found");
}

createRoot(rootElement).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);