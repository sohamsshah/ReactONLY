import "./../styles.css";
import React from "react";
import { useState } from "react";

export default function CharacterCounter() {
  const [remainingCount, setRemainingCount] = useState(280);
  function showOutput(x) {
    setRemainingCount(280 - x.target.value.length);
  }
  return (
    <div className="App">
      <textarea
        className="text"
        rows="5"
        cols="50"
        onChange={showOutput}
      ></textarea>
      <div className="output">
        {remainingCount <= 20 ? `${remainingCount} characters remaining` : ""}
      </div>
    </div>
  );
}
