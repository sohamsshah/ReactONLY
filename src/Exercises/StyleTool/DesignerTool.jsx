import React from "react";
import { useState } from "react";
import PairCards from "./PairCards";
import designs from "./design.json";

export default function DesignerTool() {
  const [design, setDesign] = useState(0);

  function nextDesignHandler() {
    setDesign((design + 1) % designs.length);
  }

  function prevDesignHandler() {
    if (design - 1 === -1) {
      setDesign(designs.length - 1);
    } else {
      setDesign(design - 1);
    }
  }
  return (
    <div className="App">
      <div>
        {console.log(design)}
        <h1>Style Explorer</h1>
        <p>Swiftly choose best designs for your project </p>
      </div>
      <PairCards
        primaryColor={`${designs[design].primaryColor}`}
        secondaryColor={`${designs[design].secondaryColor}`}
        headingFont={`${designs[design].headingFont}`}
        paragraphFont={`${designs[design].paragraphFont}`}
        importURL={`${designs[design].importURL}`}
      />
      <button
        style={{
          backgroundColor: `${designs[design].primaryColor}`,
          color: `${designs[design].secondaryColor}`,
          padding: "0.5rem",
          fontSize: "1.2rem",
          borderRadius: "5%",
          marginRight: "1rem",
          border: "fade 1px",
          borderStyle: "none",
          boxShadow: "2px"
        }}
        onClick={prevDesignHandler}
      >
        Prev
      </button>
      <button
        style={{
          backgroundColor: `${designs[design].secondaryColor}`,
          color: `${designs[design].primaryColor}`,
          padding: "0.5rem",
          fontSize: "1.2rem",
          borderRadius: "5%",
          marginRight: "1rem",
          borderStyle: "none",
          boxShadow: "2px"
        }}
        onClick={nextDesignHandler}
      >
        {" "}
        Next{" "}
      </button>
    </div>
  );
}
