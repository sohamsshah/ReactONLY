import React from "react";
import { useState } from "react";

export default function ToDo() {
  const [items, setItems] = useState(["Item1", "Item2", "Item3"]);
  function updateToDo(item, op) {
    if (op === "-") {
      items.splice(item, 1);
      setItems([...items]);
    } else if (op === "+") {
      items.append();
    }
  }
  return (
    <div className="App">
      <h1> To Do List</h1>
      <div>
        <div>
          <input type="text" />
          <button onClick={() => updateToDo(items.length - 1, "-")}>Add</button>
        </div>
        <div>
          <ul>
            {items.map((item, ind) => (
              <li>
                <div>
                  <input type="checkbox" />
                  {item} <button onClick={() => updateToDo(ind, "-")}>X</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
