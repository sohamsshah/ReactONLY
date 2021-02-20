import React from "react";
import { useState } from "react";

export default function DarkMode() {
  const [mode, setMode] = useState("bright");
  function handleMode() {
    if (mode === "dark") {
      setMode("bright");
    } else {
      setMode("dark");
    }
  }
  return (
    <>
      {mode === "bright" ? (
        <div
          style={{
            width: "100vw",
            height: "100vh",
            margin: 0,
            padding: 0,
            backgroundColor: "#161616",
            color: "#FFF"
          }}
          className="App"
        >
          <h1>Dark Mode</h1>
          <button onClick={handleMode}>Make it Light</button>
        </div>
      ) : (
        <div className="App">
          <h1>Dark Mode</h1>
          <button onClick={handleMode}>Make it Dark</button>
        </div>
      )}
    </>
  );
}
