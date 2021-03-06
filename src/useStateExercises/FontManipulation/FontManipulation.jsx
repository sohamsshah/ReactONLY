import React from "react";
import { useState } from "react";
import "../../styles.css";

const fontDictionary = {
  "Bree Serif": "Bree Serif, serif",
  Roboto: "Roboto, sans-serif",
  Poppins: "Poppins, sans-serif",
  Anton: "Anton, sans-serif"
};

export default function FontManipulation() {
  const [size, setSize] = useState(8);
  const [font, setFont] = useState("Bree Serif");

  function incrementSize() {
    if (size + 8 < 100) {
      setSize(size + 8);
    }
  }
  function decrementSize() {
    if (size - 8 > 8) {
      setSize(size - 8);
    }
  }

  function alterFont(x) {
    setFont(x.target.value);
  }

  return (
    <div className="App">
      <button onClick={incrementSize} className="increment">
        +
      </button>{" "}
      <button onClick={decrementSize} className="decrement">
        -
      </button>{" "}
      <select onChange={alterFont} name="fonts" id="fonts">
        <option value="Bree Serif">Bree Serif</option>
        <option value="Roboto">Roboto</option>
        <option value="Anton">Anton</option>
        <option value="Poppins">Poppins</option>
      </select>
      <h1
        style={{
          fontSize: `${size}px`,
          fontFamily: fontDictionary[font],
          transition: "0.2s"
        }}
        className="text"
      >
        {" "}
        Soham
      </h1>
    </div>
  );
}
