import { StrictMode } from "react";
import ReactDOM from "react-dom";

import Counter from "./Exercises/Counter";
import CharacterCounter from "./Exercises/CharacterCount";
import PasswordMatch from "./Exercises/PasswordMatch";
import AlphaNumericPassword from "./Exercises/AlphaNumericPassword";
import ShowPassword from "./Exercises/ShowPassword";
import DisableSubmit from "./Exercises/DisableSubmit";
import FontManipulation from "./Exercises/FontManipulation";
import DesignerTool from "./Exercises/StyleTool/DesignerTool";
import AddToCart from "./Exercises/AddToCart/AddToCart";
import ToDo from "./Exercises/ToDoList/ToDo";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <ToDo />
  </StrictMode>,
  rootElement
);
