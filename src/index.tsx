import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import GlobalStyle from "./styles/global";
import Providers from "./contexts";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Providers>
        <App />
        <GlobalStyle />
      </Providers>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
