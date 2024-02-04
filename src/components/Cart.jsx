import { useState, useContext } from "react";

import CartItem from "./CartItem";
import Button from "../util/Button";
import MealItem from "./MealItem";
import DUMMY_MEALS from "../util/dummyMeals";
import Modal from "../util/Modal";
import {CartContext}  from "../store/cart-context";


const MEAL = {
  id: DUMMY_MEALS[0].id,
  name: DUMMY_MEALS[0].name,
  price: DUMMY_MEALS[0].price,
  quantity: 1,
};
console.log("MEAL: ", MEAL);

export default function Cart() {

  const {items, increment, decrement} = useContext(CartContext)

  const cartTotal = items.reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
console.log("items in cart :", items)
  return (
    <Modal declineBtn="Close" submitBtn="Go to Checkout" >
    <div className="cart">
      <h2>Your Cart</h2>
      {items.map((cartItem) => (
        <CartItem
          key={cartItem.id}
          id={cartItem.id}
          name={cartItem.name}
          price={cartItem.price}
          quantity={cartItem.quantity}
          onIncrement={increment}
          onDecrement={decrement}
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
