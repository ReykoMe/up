import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import { Provider as StoreProvider } from "react-redux";
import { store } from "./store";
import "./angular-components";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // The cause of double request and extra re-render in dev mode on app init is React.StrictMode
  // https://legacy.reactjs.org/docs/strict-mode.html#detecting-unexpected-side-effects
  // https://legacy.reactjs.org/docs/strict-mode.html#detecting-unexpected-side-effects

  <React.StrictMode>
    <StoreProvider store={store}>
      <App />
    </StoreProvider>
  </React.StrictMode>
);
