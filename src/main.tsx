import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./styles/global.css";
import "./styles/variables.css";
import "./styles/responsive.css";

// Disable Image Drag
document.addEventListener("dragstart", (e) => {
  e.preventDefault();
});

// Disable Right Click
document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
});

// Disable Text Selection
document.addEventListener("selectstart", (e) => {
  e.preventDefault();
});

// Disable Common Shortcuts
document.addEventListener("keydown", (e) => {
  if (
    e.ctrlKey &&
    (
      e.key.toLowerCase() === "s" ||
      e.key.toLowerCase() === "u" ||
      e.key.toLowerCase() === "c" ||
      e.key.toLowerCase() === "a"
    )
  ) {
    e.preventDefault();
  }
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);