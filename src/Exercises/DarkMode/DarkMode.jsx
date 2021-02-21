import React from "react";
import { useState } from "react";

export default function DarkMode() {
  const light = {
    color: "black",
    icon: "sunlight",
    backgroundColor: "white",
    modeName: "light"
  };
  const dark = {
    color: "white",
    icon: "sunlight",
    backgroundColor: "#212121",
    modeName: "dark"
  };
  const [mode, setMode] = useState(light);
  function handleMode() {
    if (mode.modeName === "light") {
      setMode(dark);
    } else {
      setMode(light);
    }
  }
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        color: mode.color,
        backgroundColor: mode.backgroundColor
      }}
    >
      <div className="App">
        <h1>Toggle Dark/Light Modes!</h1>
        {mode.modeName === "light" ? (
          <img
            src="https://img.icons8.com/wired/64/000000/partly-cloudy-night.png"
            onClick={handleMode}
          />
        ) : (
          <img
            src="https://img.icons8.com/wired/64/000000/sun.png"
            onClick={handleMode}
          />
        )}
      </div>
    </div>
  );
}
