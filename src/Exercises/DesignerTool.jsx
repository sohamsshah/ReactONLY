import React from "react";
import { useState } from "react";

export default function DesignerTool() {
  const [size, setSize] = useState(10);

  function alterSize(size) {
    document.querySelector(".text").style.fontSize = `${size}px`;
  }
  function incrementSize() {
    console.log(size);
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

    console.log(size);
  }

  return (
    <div className="App">
      <button onClick={incrementSize} className="increment">
        +
      </button>
      <h1 className="text"> Soham</h1>
      <button onClick={decrementSize} className="decrement">
        -
      </button>
    </div>
  );
}
