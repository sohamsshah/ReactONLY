import React from "react";
import { useState } from "react";

export default function ToDo() {
  const [items, setItems] = useState({
    Item1: false,
    Item2: false,
    Item3: false
  });
  function updateToDo(op, item) {
    if (op === "+") {
      let newItem = document.querySelector(".input").value;
      setItems({ ...items, [newItem]: false });
    } else if (op === "-") {
      delete items[item];
      setItems({ ...items });
    }
  }

  function updateText(item) {
    setItems({ ...items, [item]: !items[item] });
  }
  return (
    <div className="App">
      <h1> To Do List</h1>
      <div stye={{ padding: "2rem 40%" }}>
        <div>
          <input className="input" type="text" />
          <button onClick={() => updateToDo("+")}>Add</button>
        </div>
        <div>
          <ul style={{ listStyleType: "none" }}>
            {Object.keys(items).map((item) => (
              <li>
                <div>
                  <input type="checkbox" onChange={() => updateText(item)} />
                  {items[item] ? (
                    <span
                      className="text"
                      style={{ textDecoration: "line-through" }}
                    >
                      {item}
                    </span>
                  ) : (
                    <span className="text">{item}</span>
                  )}
                  <button onClick={() => updateToDo("-", item)}>X</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
