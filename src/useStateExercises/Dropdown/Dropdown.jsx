import "./../../styles.css";
import React from "react";
import { useState } from "react";

export default function App() {
  const items = ["tomato", "lemon", "cucumber"];
  const [isToggle, setIsToggle] = useState(false);
  function handleToggle() {
    setIsToggle(!isToggle);
  }
  return (
    <div className="App">
      Dropdown
      <button onClick={handleToggle}>V</button>
      {isToggle ? (
        <div className="list" style={{ display: "inline" }}>
          {items.map((item) => (
            <div> {item}</div>
          ))}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
