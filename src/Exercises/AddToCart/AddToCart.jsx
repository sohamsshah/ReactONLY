import React from "react";
import { useState } from "react";

const itemsArr = ["Milk", "Tea", "Coffee", "Green Tea"];
export default function AddToCart() {
  const [items, setItems] = useState({
    Milk: 0,
    Tea: 0,
    Coffee: 0,
    "Green Tea": 0
  });
  function totalCartItems(obj) {
    let total = 0;
    for (let item in obj) {
      total += obj[item];
    }
    return total;
  }
  function updateCart(item, op) {
    if (op === "+") {
      setItems({ ...items, [item]: items[[item]] + 1 });
    } else if (op === "-") {
      if (items[[item]] > 0) setItems({ ...items, [item]: items[[item]] - 1 });
    }
  }

  return (
    <div>
      <div style={{ textAlign: "right" }}>Cart:{totalCartItems(items)}</div>
      <div>
        <ul>
          {itemsArr.map((item) => (
            <div>
              {" "}
              <li>
                {" "}
                {item}{" "}
                <button onClick={() => updateCart(item, "+")}> + </button>
                <button onClick={() => updateCart(item, "-")}> - </button>
              </li>
            </div>
          ))}
        </ul>
        {console.log(items)}
      </div>
      <div>List of Items</div>
      <ul>
        {Object.keys(items).map((item) => {
          return (
            <li>
              {" "}
              {item}: {items[item]}{" "}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
