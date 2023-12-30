import { ReactNode, StrictMode } from "react";
import { createRoot } from "react-dom/client";

export const render = (app: ReactNode) => {
  const container = document.getElementById("root");
  container
    ? createRoot(container).render(<StrictMode>{app}</StrictMode>)
    : (() => {
        throw new Error("root not found");
      })();
};
