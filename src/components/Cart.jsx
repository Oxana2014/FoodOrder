import { useState, useContext, useRef } from "react";

import CartItem from "./CartItem";
import Button from "../util/Button";
import MealItem from "./MealItem";
import DUMMY_MEALS from "../util/dummyMeals";
import Modal from "../util/Modal";
import { CartContext } from "../store/cart-context";

export default function Cart({ closeCart, submitCart }) {
  const { items, increment, decrement } = useContext(CartContext);

  const cartTotal = items.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0
  );
  console.log("items in cart :", items);

  return (
    <Modal
      declineBtn="Close"
      submitBtn="Go to Checkout"
      closeFn={closeCart}
      submitFn={submitCart}
      visible={cartTotal !== 0}
    >
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
      </div>
    </Modal>
  );
}
