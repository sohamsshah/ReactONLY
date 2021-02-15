import { StrictMode } from "react";
import ReactDOM from "react-dom";

import Counter from "./Exercises/Counter";
import CharacterCounter from "./Exercises/CharacterCount";
import PasswordMatch from "./Exercises/PasswordMatch";
import AlphaNumericPassword from "./Exercises/AlphaNumericPassword";
import ShowPassword from "./Exercises/ShowPassword";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <ShowPassword />
  </StrictMode>,
  rootElement
);
