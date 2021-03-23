import "./styles.css";
import { useCart } from "./cart-context";
import { useTheme } from "./theme-context";
import { products } from "./products";
import { useState, useEffect, useRef } from "react";

function Products() {
  const { itemsInCart, setItemsInCart } = useCart();
  const { theme } = useTheme();

  function handleItemsInCart(item) {
    setItemsInCart([...itemsInCart, item]);
  }
  return (
    <div>
      <h1> Items in cart </h1>
      <h4>Total Items: {itemsInCart.length}</h4>
      {products.map((item) => (
        <div
          style={{
            padding: "0.5rem",
            margin: "1rem",
            border: `solid 1px ${theme.color}`,
            width: "200px"
          }}
        >
          <div>Item: {item.name}</div>
          <div> Price: {item.price} </div>
          <button onClick={() => handleItemsInCart(item)}> Add to Cart </button>
        </div>
      ))}
    </div>
  );
}

function Cart() {
  const { itemsInCart, setItemsInCart } = useCart();
  return (
    <div>
      <h1>Cart</h1>
      {itemsInCart.map((item) => {
        return <div>{item.name}</div>;
      })}
    </div>
  );
}

function Checkout() {
  const InputRef = useRef(null);
  useEffect(() => InputRef.current.focus(), []);

  return (
    <div>
      <h1>Checkout</h1>
      <div>
        <input ref={InputRef} />
        <button> Verify </button>
      </div>
    </div>
  );
}

export default function App() {
  const [route, setRoute] = useState("products");
  const { theme, setTheme, userTheme } = useTheme();
  function handleTheme() {
    if (theme.color === "white") {
      setTheme(userTheme.light);
    } else {
      setTheme(userTheme.dark);
    }
  }

  return (
    <div
      className="App"
      style={{ color: theme.color, backgroundColor: theme.backgroundColor }}
    >
      <button onClick={handleTheme}> Toggle </button>
      <h1 className="app-header">eCommerce</h1>
      <div>
        <button onClick={() => setRoute("products")}> Products </button>
        <button onClick={() => setRoute("cart")}> Cart </button>
        <button onClick={() => setRoute("checkout")}> Checkout </button>
      </div>
      <div className="app-body">
        {
          {
            products: <Products />,
            cart: <Cart />,
            checkout: <Checkout />
          }[route]
        }
      </div>
    </div>
  );
}
