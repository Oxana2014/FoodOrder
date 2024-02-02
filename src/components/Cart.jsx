import { useState } from "react";

import CartItem from "./CartItem";
import Button from "../util/Button";
import MealItem from "./MealItem";
import DUMMY_MEALS from "../util/dummyMeals";

const MEAL = {
  id: DUMMY_MEALS[0].id,
  name: DUMMY_MEALS[0].name,
  price: DUMMY_MEALS[0].price,
  quantity: 1
};
console.log("MEAL: ", MEAL)

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);

  function handleAddToCart(meal) {
    console.log("cartItems: ", cartItems);
    setCartItems((prevCartItems) => {
      const updatedItems = [...prevCartItems]
      const index = updatedItems.findIndex((item) => meal.id ===item.id);
      console.log("index: ", index)
      if (index !== -1) {
        updatedItems[index].quantity =  updatedItems[index].quantity +1;
        console.log("prevCartItems: ", updatedItems)
        return updatedItems;
      } else {
      return [...updatedItems, meal];
      }
    });
  }

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.map((cartItem) => (
        <CartItem
          key={cartItem.id}
          name={cartItem.name}
          price={cartItem.price}
          quantity={cartItem.quantity}
        />
      ))}
      <p className="cart-total">$73.56</p>
      <div className="modal-actions">
        <button className="text-button">Close</button>
        <Button onClick={() => handleAddToCart(MEAL)}>Go to Checkout</Button>
      </div>
    </div>
  );
}
