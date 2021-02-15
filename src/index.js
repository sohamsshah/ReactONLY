import { StrictMode } from "react";
import ReactDOM from "react-dom";

import Counter from "./Exercises/Counter";
import CharacterCounter from "./Exercises/CharacterCount";
import PasswordMatch from "./Exercises/PasswordMatch";
import AlphaNumericPassword from "./Exercises/AlphaNumericPassword";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <AlphaNumericPassword />
  </StrictMode>,
  rootElement
);
