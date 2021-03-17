import React from "react";
import { useState } from "react";
import "./../../styles.css";

function Card({ handleIsShown, type }) {
  const themes = {
    error: { backgroundColor: "red", text: "Danger!", color: "white" },
    success: { backgroundColor: "green", text: "Success!", color: "white" },
    warning: { backgroundColor: "yellow", text: "Warning!", color: "black" }
  };
  return (
    <div
      style={{
        backgroundColor: themes[type].backgroundColor,
        width: "300px",
        height: "50px",
        margin: "1rem auto",
        padding: "1.5rem 0rem",
        color: themes[type].color
      }}
    >
      <button onClick={() => handleIsShown("hide")}>Hide </button>
      <p>{themes[type].text}</p>
    </div>
  );
}

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
          <Card type="success" handleIsShown={handleIsShown} />
        ) : (
          <div> </div>
        )}
      </div>
    </div>
  );
}
