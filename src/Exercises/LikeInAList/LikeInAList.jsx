import React from "react";
import { useState } from "react";

export default function LikeInAList() {
  let reactions = ["👍", "👏", "🤝", "💖", "🤔", "💡"];
  let films = [
    "Dhamaal",
    "DDLJ",
    "Inception",
    "Hera Pheri",
    "Harry Potter Series"
  ];
  const [reaction, setReaction] = useState([
    reactions[0],
    reactions[0],
    reactions[0],
    reactions[0],
    reactions[0]
  ]);
  const [isShown, setIsShown] = useState([false, false, false, false, false]);
  function handleIsShown(ind, situation) {
    if (situation === "enter") {
      isShown[ind] = true;
    } else {
      isShown[ind] = false;
    }
    setIsShown([...isShown]);
  }

  function handleReactions(list_index, reaction_index) {
    reaction[list_index] = reactions[reaction_index];
    setReaction([...reaction]);
  }

  return (
    <div className="App">
      <h1> React to your favourite Movies! </h1>
      <div style={{ padding: " 1rem 6rem" }}>
        <ul
          style={{
            listStyleType: "none",
            textAlign: "left"
          }}
        >
          {films.map((item, list_index) => (
            <li style={{ display: "flex", justifyContent: "space-between" }}>
              <div>{item}</div>
              <div
                onMouseEnter={() => handleIsShown(list_index, "enter")}
                onMouseLeave={() => handleIsShown(list_index, "leave")}
                style={{ cursor: "pointer", textAlign: "right" }}
              >
                {reaction[list_index]}
                {isShown[list_index] ? (
                  <div>
                    {reactions.map((item, reaction_index) => (
                      <div
                        onClick={() =>
                          handleReactions(list_index, reaction_index)
                        }
                        style={{ cursor: "pointer", display: "inline" }}
                      >
                        {" "}
                        {item}{" "}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
