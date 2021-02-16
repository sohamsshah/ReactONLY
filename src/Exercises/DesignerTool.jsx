import React from "react";
import { useState } from "react";
import "../styles.css";

const fontDictionary = {
  "Bree Serif": "Bree Serif, serif",
  Roboto: "Roboto, sans-serif",
  Poppins: "Poppins, sans-serif",
  Anton: "Anton, sans-serif"
};

export default function DesignerTool() {
  const [size, setSize] = useState(10);
  const [font, setFont] = useState("Bree Serif");

  function alterSize(size) {
    document.querySelector(".text").style.fontSize = `${size}px`;
  }

  function incrementSize() {
    if (size >= 10 && size < 100) {
      setSize(size + 2);
      alterSize(size);
    }
  }
  function decrementSize() {
    if (size > 10 && size <= 100) {
      setSize(size - 2);
      alterSize(size);
    }
  }

  function alterFont() {
    setFont(document.getElementById("fonts").value);
  }

  return (
    <div className="App">
      <button onClick={incrementSize} className="increment">
        +
      </button>{" "}
      <button onClick={decrementSize} className="decrement">
        -{console.log(size)}
      </button>{" "}
      <select onChange={alterFont} name="fonts" id="fonts">
        <option value="Bree Serif">Bree Serif</option>
        <option value="Roboto">Roboto</option>
        <option value="Anton">Anton</option>
        <option value="Poppins">Poppins</option>
      </select>
      <h1
        style={{ fontSize: `${size}px`, fontFamily: fontDictionary[font] }}
        className="text"
      >
        {" "}
        Soham
      </h1>
    </div>
  );
}
