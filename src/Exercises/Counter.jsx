import "./../styles.css";
import React from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);
  function increment() {
    setCounter(counter + 1);
  }
  function decrement() {
    setCounter(counter - 1);
  }
  return (
    <div className="App">
      <button onClick={increment}>+</button>
      <span>{counter}</span>
      <button onClick={decrement}>-</button>
    </div>
  );
}
