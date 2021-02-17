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
    setDesign((design + 1) % designs.length);
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
      />
      <button onClick={prevDesignHandler}>Prev</button>
      <button onClick={nextDesignHandler}> Next </button>
    </div>
  );
}
