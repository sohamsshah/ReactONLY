import { useEffect, useState } from "react";
import uuid from "react-uuid";
import "./styles.css";

function WishList() {
  const [wishText, setWishText] = useState("");
  const [wishList, setWishList] = useState(
    JSON.parse(localStorage.getItem("wishList"))
  );

  const handleWishAdd = () => {
    setWishList((list) => list.concat({ id: uuid(), wish: wishText }));
    setWishText("");
  };

  const handleWishInput = (event) => setWishText(event.target.value);

  useEffect(() => {
    localStorage.setItem("wishList", JSON.stringify(wishList));
  }, [wishList]);
  return (
    <div>
      <input
        onChange={handleWishInput}
        value={wishText}
        placeholder={"I wish..."}
      />
      <button onClick={handleWishAdd}>Add </button>
      <ul>
        {wishList.map(({ id, wish }) => (
          <li key={id}> {wish} </li>
        ))}
      </ul>
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <h1 className="app-header">wishing well</h1>
      <div className="app-body">
        <WishList />
      </div>
    </div>
  );
}
