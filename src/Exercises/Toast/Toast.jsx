import React from "react";
import { useState } from "react";
import "./../../styles.css";

export default function Toast() {
  const [isShown, setIsShown] = useState(false);
  function handleIsShown(op) {
    if (op === "show") {
      setIsShown(true);
    } else if (op === "hide") {
      setIsShown(false);
    }
  }
  return (
    <div className="App">
      <h1> Toast </h1>
      <div>
        <button onClick={() => handleIsShown("show")}> Submit </button>
        {isShown ? (
          <div
            style={{
              backgroundColor: "#eee",
              width: "300px",
              height: "50px",
              margin: "1rem auto",
              padding: "1.5rem 0rem",
              transition: "0.6s"
            }}
          >
            <button onClick={() => handleIsShown("hide")}>Hide </button>
            <p>Message Sent!</p>
          </div>
        ) : (
          <div> </div>
        )}
      </div>
    </div>
  );
}
