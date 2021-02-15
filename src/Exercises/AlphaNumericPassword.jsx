import React from "react";
import { useState } from "react";
import "../styles.css";

export default function AlphaNumericPassword() {
  const [isAlphaNumeric, setisAlphaNumeric] = useState(false);

  function checkAlphaNumeric() {
    let Exp = /^[a-zA-Z0-9]+$/;
    setisAlphaNumeric(
      document.querySelector(".password").value.match(Exp) !== null
        ? true
        : false
    );
  }
  return (
    <div className="App">
      <h1> Password Matcher </h1>
      <div>
        <input
          type="password"
          className="password"
          placeholder="Enter Password"
        ></input>
      </div>
      <button onClick={checkAlphaNumeric} className="check">
        Check
      </button>
      <div>{isAlphaNumeric ? "Yes" : "No"}</div>
    </div>
  );
}
