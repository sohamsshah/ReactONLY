import axios from "axios";
import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  async function clickhandler() {
    try {
      setLoading(true);
      const response = await axios.get("/api/users");
      setData(response.data.users);
      setLoading(false);
    } catch (error) {
      console.error("error occured", error);
    }
  }
  return (
    <div className="App">
      <h1>
        {" "}
        Data <span>{loading ? "Loading..." : ""}</span>
      </h1>
      <button onClick={clickhandler}> Click to load data from server </button>
      <ul>
        {data.map((item) => (
          <li>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
