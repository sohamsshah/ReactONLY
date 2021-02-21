import React from "react";
import "../styles.css";
import { useState } from "react";

export default function PasswordMatch() {
  const [password, setPassword] = useState("");
  const [isMatch, setIsMatch] = useState(false);
  function matchPasswords(x) {
    setIsMatch(password === x.target.value);
  }
  return (
    <div className="App">
      <div>
        <input
          className="password"
          type="text"
          placeholder="Enter Password"
          onChange={(x) => setPassword(x.target.value)}
        ></input>
      </div>

      <div>
        <input
          className="confirm"
          type="text"
          placeholder="Confirm Password"
          onChange={(x) => matchPasswords(x)}
        ></input>
      </div>
      <div>{isMatch ? "Password Match" : "Password Didnt Match"}</div>
    </div>
  );
}
