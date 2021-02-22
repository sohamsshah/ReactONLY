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
import DarkMode from "./Exercises/DarkMode/DarkMode";
import Dropdown from "./Exercises/Dropdown/Dropdown";
import SwitchTabs from "./Exercises/SwitchTabs/SwitchTabs";
import LikeInAList from "./Exercises/LikeInAList/LikeInAList";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <LikeInAList />
  </StrictMode>,
  rootElement
);
