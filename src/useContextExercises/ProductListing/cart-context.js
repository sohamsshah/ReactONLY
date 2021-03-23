import { createContext } from "react";

export const CartContext = createContext();

const itemsInCart = [
  {
    id: 1,
    name: "kala chasma",
    price: 1000
  },
  {
    id: 1,
    name: "kala chasma",
    price: 1000
  },
  {
    id: 2,
    name: "laal chhadi",
    price: 500
  },
  {
    id: 3,
    name: "jalebi",
    price: 50
  },
  {
    id: 4,
    name: "japani joota",
    price: 10000
  }
];

export function CartProvider({ children }) {
  return (
    <CartContext.Provider value={{ itemsInCart }}>
      {children}
    </CartContext.Provider>
  );
}
