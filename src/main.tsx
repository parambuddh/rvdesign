import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// DIAGNOSTIC ALERT: This will prove whether the deployment has successfully reached the browser.
if (typeof window !== "undefined") {
  console.log("RelationshipVista: Core Interactivity Initialization Started.");
  // We use a small timeout to ensure the DOM is ready but it's hard to miss.
  setTimeout(() => {
    console.log("RelationshipVista: Interaction system is active.");
  }, 1000);
}

createRoot(document.getElementById("root")!).render(<App />);
