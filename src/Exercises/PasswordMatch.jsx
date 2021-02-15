import React from "react";
import "../styles.css";
import { useState } from "react";

export default function PasswordMatch() {
  const [isMatch, setIsMatch] = useState(false);

  function isPasswordMatch() {
    setIsMatch(
      document.querySelector(".password").value ===
        document.querySelector(".confirm").value
    );
  }
  return (
    <div className="App">
      <div>
        <input
          className="password"
          type="text"
          placeholder="Enter Password"
        ></input>
      </div>

      <div>
        <input
          className="confirm"
          type="text"
          placeholder="Confirm Password"
        ></input>
      </div>

      <button onClick={isPasswordMatch}>Verify</button>
      <div>{isMatch ? "Password Match" : "Password Didnt Match"}</div>
    </div>
  );
}
