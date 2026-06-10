import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/styles/index.css";
import Router from "./router";
import { ThemeProvider } from "./context/ThemeContext";

import { Provider } from "react-redux";
import { store } from "./services/store";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <Router />
      </Provider>
    </ThemeProvider>
  </StrictMode>
);