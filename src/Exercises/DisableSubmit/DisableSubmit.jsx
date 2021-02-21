import React from "react";
import { useState } from "react";

export default function DisableSubmit() {
  function setSubmitButton() {}
  const [isMatch, setIsMatch] = useState(false);
  const [password, setPassword] = useState("");

  function PasswordMatcher(x) {}
  return (
    <div className="App">
      <div>
        <input
          className="password"
          onChange={(x) => setPassword(x.target.value)}
        ></input>
      </div>
      <div>
        <input
          className="confirm"
          onChange={(y) => {
            y.target.value === password ? setIsMatch(true) : setIsMatch(false);
          }}
        ></input>
      </div>
      <button disabled={!isMatch} className="submit">
        Submit
      </button>
      <div>{isMatch ? "True" : "False"}</div>
    </div>
  );
}
