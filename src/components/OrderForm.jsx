import { useContext, useState, useRef } from "react";

import Modal from "../util/Modal";
import { CartContext } from "../store/cart-context";

export default function OrderForm({
  closeOrder,
  onErrorAfterSubmit,
  submitOrder,
}) {
  const { items: mealsInOrder } = useContext(CartContext);
  // const [data, setData] = useState({
  //   name: "",
  //   email: "",
  //   street: "",
  //   ["postal-code"]: "",
  //   city: "",
  // });
  const fullName = useRef();
  const email = useRef();
  const street = useRef();
  const postalCode = useRef();
  const city = useRef();

  const totalPrice = mealsInOrder.reduce(
    (acc, meal) => acc + meal.price * meal.quantity,
    0
  );

  function onSubmit() {
    if (
      fullName.current.value.trim().length === 0 ||
      email.current.value.trim().length === 0 ||
      street.current.value.trim().length === 0 ||
      postalCode.current.value.trim().length === 0 ||
      city.current.value.trim().length === 0 ||
      !email.current.value.includes("@")
    ) {
      return;
    }
    
    const order = {};
    order.items = mealsInOrder;

    const data = {};
    data.name = fullName.current.value
    data.email = email.current.value
    data.street = street.current.value
    data['postal-code'] = postalCode.current.value
    data.city = city.current.value

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
    >
      <form>
        <h3>Checkout</h3>
        <p>TotalAmount ${totalPrice}</p>
        <div className="control">
          <label htmlFor="name">Full Name</label>
          <input
            ref={fullName}
            type="text"
            id="name"
            name="name"
            required
          />
        </div>
        <div className="control">
          <label htmlFor="email">E_Mail Address</label>
          <input
            ref={email}
            type="email"
            id="email"
            name="email"
            required
          />
        </div>
        <div className="control">
          <label htmlFor="street">Street</label>
          <input       
            ref={street}
            type="text"
            id="street"
            name="street"
            required
          />
        </div>
        <div className="control-row">
          <div className="control">
            <label htmlFor="postal-code">Postal Code</label>
            <input
             ref={postalCode}
              type="text"
              id="postal-code"
              name="postal-code"
              required
            />
          </div>
          <div className="control">
            <label htmlFor="city">City</label>
            <input
              ref={city}
              type="text"
              id="city"
              name="city"
              required
            />
          </div>
        </div>
      </form>
    </Modal>
  );
}
