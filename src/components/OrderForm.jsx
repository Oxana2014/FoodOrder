import { useContext, useState, useRef, useReducer } from "react";

import Modal from "../util/Modal";
import { CartContext } from "../store/cart-context";
import Input from "./Input";

function orderReducer(prevCustomer, action) {
  const customer = { ...prevCustomer, [action.type]: action.value };
  return customer;
}

export default function OrderForm({
  closeOrder,
  onErrorAfterSubmit,
  submitOrder,
}) {
  const { items: mealsInOrder } = useContext(CartContext);

  const initCustomer = {
    name: "",
    email: "",
    street: "",
    ["postal-code"]: "",
    city: "",
  };

  const [customerState, dispatch] = useReducer(orderReducer, initCustomer);

  console.log("CustomerState: ", customerState)
  const formIsValid =
    customerState.name !== "" &&
    customerState.email !== "" &&
    customerState.email.includes("@") &&
    customerState.street !== "" &&
    customerState["postal-code"] !== "" &&
    customerState.city !== "";

  function inputChangeHandler(input, value) {
    dispatch({ type: input, value: value });
  }

  const totalPrice = mealsInOrder.reduce(
    (acc, meal) => acc + meal.price * meal.quantity,
    0
  );

  function onSubmit() {
     const order = {};
    order.items = mealsInOrder;

    const data = {};
    data.name = customerState.name;
    data.email = customerState.email;
    data.street = customerState.street
    data["postal-code"] = customerState["postal-code"]
    data.city = customerState.city

    order.customer = data;

    async function sendOrder(order) {
      console.log("order: ", order);
      try {
        const response = await fetch("http://localhost:3000/orders", {
          method: "POST",
          body: JSON.stringify({ order }),
          headers: { "Content-Type": "application/json" },
        });
        const responseData = await response.json();
        if (!response.ok) {
          throw new Error("Can not send the order");
        }
        console.log("Receive response: ", responseData);
        submitOrder();
      } catch (error) {
        onErrorAfterSubmit(`An error occured: ${error}`);
      }
    }
    sendOrder(order);
    console.log("Send http request");
    console.log("Receive response");
  }

  return (
    <Modal
      declineBtn="Close"
      submitBtn="Submit Order"
      closeFn={closeOrder}
      submitFn={onSubmit}
       visible={formIsValid}
    >
      <form>
        <h3>Checkout</h3>
        <p>TotalAmount ${totalPrice}</p>
        <Input
          label="Full Name"
          id="name"
          name="name"
          type="text"
          changeFn={inputChangeHandler}
        />
     <Input
          label="E_Mail Address"
          id="email"
          name="email"
          type="email"
          changeFn={inputChangeHandler}
        />
   
                <Input
          label="Street"
          id="street"
          name="street"
          type="text"
          changeFn={inputChangeHandler}
        />
        <div className="control-row">
        <Input
          label="Postal Code"
          id="postal-code"
          name="postal-code"
          type="text"
          changeFn={inputChangeHandler}
        />       
           <Input
          label="City"
          id="city"
          name="city"
          type="text"
          changeFn={inputChangeHandler}
        />    
        </div>
      </form>
    </Modal>
  );
}
