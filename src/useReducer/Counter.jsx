import "./styles.css";
import React from "react";
import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};
export default function App() {
  const [state, dispatch] = useReducer(reducer, 0);
  return (
    <div className="App">
      <h1>Reducer Counter</h1>
      <h3> {state}</h3>

      <button onClick={() => dispatch({ type: "increment" })}> + </button>
      <button onClick={() => dispatch({ type: "decrement" })}> - </button>
    </div>
  );
}
