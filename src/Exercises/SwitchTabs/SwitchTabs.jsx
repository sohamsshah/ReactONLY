import React from "react";
import { useState } from "react";
import Home from "./Home";
import About from "./About";
import Features from "./Features";

export default function SwitchTabs() {
  const [currentTab, setCurrentTab] = useState(Home);
  return (
    <div className="App">
      <button style={{ margin: "0.5rem" }} onClick={() => setCurrentTab(Home)}>
        {" "}
        Home{" "}
      </button>
      <button style={{ margin: "0.5rem" }} onClick={() => setCurrentTab(About)}>
        {" "}
        About{" "}
      </button>
      <button
        style={{ margin: "0.5rem" }}
        onClick={() => setCurrentTab(Features)}
      >
        {" "}
        Features
      </button>
      <div>{currentTab}</div>
    </div>
  );
}
