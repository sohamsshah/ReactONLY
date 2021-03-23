import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { CartProvider } from "./cart-context";
import { ThemeProvider } from "./theme-context";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <ThemeProvider
      userTheme={{
        dark: { color: "white", backgroundColor: "black" },
        light: { color: "black", backgroundColor: "white" }
      }}
    >
      <CartProvider>
        <App />
      </CartProvider>
    </ThemeProvider>
  </StrictMode>,
  rootElement
);
