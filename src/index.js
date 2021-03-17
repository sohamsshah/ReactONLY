import { StrictMode } from "react";
import ReactDOM from "react-dom";

import IncrementCounter from "./useEffectExercises/IncrementCounter/IncrementCounter";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <IncrementCounter />
  </StrictMode>,
  rootElement
);
