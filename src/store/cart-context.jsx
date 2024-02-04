import { useState, createContext } from "react";
import DUMMY_MEALS from "../util/dummyMeals";

export const CartContext = createContext({
  items: [
    {
      id: DUMMY_MEALS[1].id,
      name: DUMMY_MEALS[1].name,
      price: DUMMY_MEALS[1].price,
      quantity: 1,
    },
    {
      id: DUMMY_MEALS[2].id,
      name: DUMMY_MEALS[2].name,
      price: DUMMY_MEALS[2].price,
      quantity: 1,
    },
  ],
  addToCart: () => {},
  increment: () => {},
  decrement: () => {},
});

export default function CartContextProvider({ children }) {
  const [cartItems, setCartItems] = useState([
    {
      id: DUMMY_MEALS[1].id,
      name: DUMMY_MEALS[1].name,
      price: DUMMY_MEALS[1].price,
      quantity: 1,
    },
    {
      id: DUMMY_MEALS[2].id,
      name: DUMMY_MEALS[2].name,
      price: DUMMY_MEALS[2].price,
      quantity: 1,
    },
  ]);

  const ctxValue = {
    items: cartItems,
    addToCart: handleAddToCart,
    increment: handleIncrement,
    decrement: handleDecrement,
  };

  function handleAddToCart(meal) {
    console.log("meal: ", meal)
    console.log("cartItems: ", cartItems);
    setCartItems((prevCartItems) => {
      const updatedItems = [...prevCartItems];
      const index = updatedItems.findIndex((item) => meal.id === item.id);
      console.log("index: ", index);
      if (index !== -1) {
        updatedItems[index].quantity++;
        console.log("prevCartItems: ", updatedItems);
        return updatedItems;
      } else {
        return [...updatedItems, {...meal, key: meal.id}];
      }
    });
  }

  function handleIncrement(itemId) {
    setCartItems((prevCartItems) => {
      const updatedItems = [...prevCartItems];
      const index = updatedItems.findIndex((item) => item.id === itemId);
      console.log("index: ", index);

      updatedItems[index].quantity++;
      console.log("updatedItems: ", updatedItems);
      return updatedItems;
    });
  }

  function handleDecrement(itemId) {
    setCartItems((prevCartItems) => {
      const updatedItems = [...prevCartItems];
      const index = updatedItems.findIndex((item) => item.id === itemId);
      console.log("index: ", index);

      const updatedQuantity = updatedItems[index].quantity - 1;
      if (updatedQuantity < 1) {
        updatedItems.splice(index, 1);
      } else {
        updatedItems[index].quantity = updatedQuantity;
      }

      console.log("prevCartItems: ", updatedItems);
      return updatedItems;
    });
  }

  return (
    <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
  );
}
