import { useState } from "react";

import CartItem from "./CartItem";
import Button from "../util/Button";
import MealItem from "./MealItem";
import DUMMY_MEALS from "../util/dummyMeals";
import Modal from "../util/Modal";

const MEAL = {
  id: DUMMY_MEALS[0].id,
  name: DUMMY_MEALS[0].name,
  price: DUMMY_MEALS[0].price,
  quantity: 1,
};
console.log("MEAL: ", MEAL);

export default function Cart() {

  const [cartItems, setCartItems] = useState([{
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
  }]);

  const cartTotal = cartItems.reduce((acc, curr) => acc + curr.price * curr.quantity, 0)

  function handleAddToCart(meal) {
    console.log("cartItems: ", cartItems);
    setCartItems((prevCartItems) => {
      const updatedItems = [...prevCartItems];
      const index = updatedItems.findIndex((item) => meal.id === item.id);
      console.log("index: ", index);
      if (index !== -1) {
        updatedItems[index].quantity = updatedItems[index].quantity + 1;
        console.log("prevCartItems: ", updatedItems);
        return updatedItems;
      } else {
        return [...updatedItems, meal];
      }
    });
  }

  function handleIncrement(itemId) {
    setCartItems((prevCartItems) => {
      const updatedItems = [...prevCartItems];
      const index = updatedItems.findIndex((item) => item.id === itemId);
      console.log("index: ", index);

      updatedItems[index].quantity = updatedItems[index].quantity + 1;
      console.log("prevCartItems: ", updatedItems);
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
      }else {
        updatedItems[index].quantity  = updatedQuantity
      }

      console.log("prevCartItems: ", updatedItems);
      return updatedItems;
    });
  }

  return (
    <Modal declineBtn="Close" submitBtn="Go to Checkout" >
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.map((cartItem) => (
        <CartItem
          key={cartItem.id}
          id={cartItem.id}
          name={cartItem.name}
          price={cartItem.price}
          quantity={cartItem.quantity}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />
      ))}
      <p className="cart-total">${cartTotal}</p>
  
      {/* <div className="modal-actions">
        <button className="text-button">Close</button>
        <Button onClick={() => handleAddToCart(MEAL)}>Go to Checkout</Button>
      </div> */}
    </div>
    </Modal>
  );
}
