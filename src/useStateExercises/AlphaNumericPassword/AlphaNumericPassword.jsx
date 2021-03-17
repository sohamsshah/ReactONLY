import React from "react";
import { useState } from "react";
import "./../../styles.css";

export default function AlphaNumericPassword() {
  const [isAlphaNumeric, setisAlphaNumeric] = useState(false);

  function checkAlphaNumeric(x) {
    let Exp = /^[a-zA-Z0-9]+$/;
    setisAlphaNumeric(x.target.value.match(Exp) !== null ? true : false);
  }
  return (
    <div className="App">
      <h1> AlphaNumeric Password </h1>
      <div>
        <input
          type="password"
          className="password"
          placeholder="Enter Password"
          onChange={(x) => checkAlphaNumeric(x)}
        ></input>
      </div>
      <div>{isAlphaNumeric ? "Yes" : "No"}</div>
    </div>
  );
}
