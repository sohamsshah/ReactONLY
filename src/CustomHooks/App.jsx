import { useEffect, useState } from "react";
import uuid from "react-uuid";
import "./styles.css";

function useLocalStorage(wishList) {
  const [wishSaved, setWishSaved] = useState(-1);
  useEffect(() => {
    localStorage.setItem("wishes", JSON.stringify(wishList));
    setWishSaved((savedWishes) => savedWishes + 1);
  }, [wishList]);
  return wishSaved;
}

function WishList() {
  const [wishText, setWishText] = useState("");
  const [wishList, setWishList] = useState([]);

  const handleWishAdd = () => {
    setWishList((list) => list.concat({ id: uuid(), wish: wishText }));
    setWishText("");
  };

  const handleWishInput = (event) => setWishText(event.target.value);

  /**
   * This would be more handy if this was
   * an async network call.
   * Then you would be showing loader
   * and changing the state later.
   */
  const wishSaved = useLocalStorage(wishList);
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

      <span> wishes saved {wishSaved} </span>
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
