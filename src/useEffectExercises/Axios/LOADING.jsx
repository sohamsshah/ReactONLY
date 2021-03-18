import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";

export default function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setLoading(true);
        const products = await axios.get("/api/products");
        setData(products.data.products);
        setLoading(false);
      } catch (error) {
        console.log(error, "error");
      }
    }
    getData();
  }, []);

  return (
    <div className="App">
      <h1> Showcase Products </h1>
      {loading ? "Products loading..." : ""}
      <div>
        {console.log(data)}
        {data.map((item) => (
          <li>{item.name}</li>
        ))}
      </div>
    </div>
  );
}
