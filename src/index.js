import { StrictMode } from "react";
import ReactDOM from "react-dom";

import Counter from "./Exercises/SimpleCounter/Counter";
import CharacterCounter from "./Exercises/CharacterCount/CharacterCount";
import PasswordMatch from "./Exercises/PasswordMatch/PasswordMatch";
import AlphaNumericPassword from "./Exercises/AlphaNumericPassword/AlphaNumericPassword";
import PasswordVisibilty from "./Exercises/PasswordVisibility/PasswordVisibility";
import DisableSubmit from "./Exercises/DisableSubmit/DisableSubmit";
import FontManipulation from "./Exercises/FontManipulation/FontManipulation";
import DesignerTool from "./Exercises/StyleTool/DesignerTool";
import AddToCart from "./Exercises/AddToCart/AddToCart";
import ToDo from "./Exercises/ToDoList/ToDo";
import SwitchTabs from "./Exercises/SwitchTabs/SwitchTabs";
import DarkMode from "./Exercises/DarkMode/DarkMode";
import Dropdown from "./Exercises/Dropdown/Dropdown";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <PasswordMatch />
  </StrictMode>,
  rootElement
);
