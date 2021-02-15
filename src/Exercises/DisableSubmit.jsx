import React from "react";
import { useState } from "react";

export default function DisableSubmit() {
  function setSubmitButton() {}
  const [isMatch, setisMatch] = useState(false);

  function PasswordMatcher(x) {
    console.log(document.querySelector(".password").value);
    console.log(x.target.value);

    setisMatch(document.querySelector(".password").value === x.target.value);
    console.log(isMatch);
  }
  return (
    <div className="App">
      <div>
        <input className="password"></input>
      </div>
      <div>
        <input onChange={PasswordMatcher} className="confirm"></input>
      </div>
      <button disabled={!isMatch} className="submit">
        Submit
      </button>
      <div>{isMatch ? "True" : "False"}</div>
    </div>
  );
}
