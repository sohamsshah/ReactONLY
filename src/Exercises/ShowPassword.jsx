import React from "react";
import { useState } from "react";

export default function ShowPassword() {
  const [showPassword, setShowPassword] = useState("password");

  function alterVisibility(visibility) {
    document.querySelector(".password").type = visibility;
  }
  function showPasswordUtil() {
    showPassword === "password"
      ? setShowPassword("text")
      : setShowPassword("password");
    alterVisibility(showPassword);
  }
  return (
    <div className="App">
      <input
        type={showPassword}
        className="password"
        placeholder="Enter Password"
      ></input>
      <button onClick={showPasswordUtil}>-_-</button>
    </div>
  );
}
