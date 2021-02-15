import { StrictMode } from "react";
import ReactDOM from "react-dom";

import Counter from "./Exercises/Counter";
import CharacterCounter from "./Exercises/CharacterCount";
import PasswordMatch from "./Exercises/PasswordMatch";
import AlphaNumericPassword from "./Exercises/AlphaNumericPassword";
import ShowPassword from "./Exercises/ShowPassword";
import DisableSubmit from "./Exercises/DisableSubmit";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <DisableSubmit />
  </StrictMode>,
  rootElement
);
