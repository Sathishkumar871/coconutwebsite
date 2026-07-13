import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

import "@fortawesome/fontawesome-free/css/all.min.css"; // <-- Add this line

import "./styles/global.css";
import "./styles/variables.css";
import "./styles/responsive.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);