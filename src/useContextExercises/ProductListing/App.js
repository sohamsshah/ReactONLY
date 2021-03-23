import "./styles.css";
import { CartContext } from "./cart-context";
import { useContext } from "react";

export function ProductListing() {
  const { itemsInCart } = useContext(CartContext);
  return (
    <div>
      {itemsInCart.map((item) => (
        <div
          style={{
            padding: "0.5rem",
            margin: "1rem",
            border: "solid 1px #000",
            width: "200px"
          }}
        >
          <div>Item: {item.name}</div>
          <div> Price: {item.price} </div>
        </div>
      ))}
    </div>
  );
}

export function Cart() {
  return <h1> Items in cart </h1>;
}

export default function App() {
  return (
    <div className="App">
      <h1 className="app-header">eCommerce</h1>
      <div className="app-body">
        <Cart />
        <ProductListing />
      </div>
    </div>
  );
}
