import React from "react";
import { useState, useEffect } from "react";

export default function IncrementCounter() {
  const [counter, setCounter] = useState(0);
  function handleClick() {
    setCounter((counter) => {
      return counter + 1;
    });
    console.log("from click handler", counter);
  }

  useEffect(() => {
    console.log("from use Effect", counter);
  });
  return (
    <div>
      <h1>Counter</h1>
      <button onClick={() => handleClick()}>+</button>
      <h3>{counter}</h3>
    </div>
  );
}
