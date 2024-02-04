import { useContext } from "react";
import Modal from "../util/Modal";
import { CartContext } from "../store/cart-context";
import { useState } from "react";

export default function OrderForm({
  closeOrder,
  onErrorAfterSubmit,
  submitOrder,
}) {
  const { items: mealsInOrder } = useContext(CartContext);
  const [data, setData] = useState({
    name: "",
    email: "",
    street: "",
    ["postal-code"]: "",
    city: "",
  });

  const dataIsReady =
    data.name && data.email && data.street && data["postal-code"] && data.city;
  const totalPrice = mealsInOrder.reduce(
    (acc, meal) => acc + meal.price * meal.quantity,
    0
  );

  function handleChange(input, value) {
    setData((prevData) => ({ ...prevData, [input]: value }));
  }

  function onSubmit() {
    const order = {};
    order.items = mealsInOrder;
    order.customer = data;

    async function sendOrder(order) {
      console.log("order: ", order)
      try {
        const response = await fetch("http://localhost:3000/orders", {
          method: "POST",
          body: JSON.stringify({order}),
          headers: {  'Content-Type': 'application/json' },
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
    sendOrder(order)
    console.log("Send http request");
    console.log("Receive response");
  }

  return (
    <Modal
      declineBtn="Close"
      submitBtn="Submit Order"
      closeFn={closeOrder}
      submitFn={onSubmit}
      submitDisabled={!dataIsReady}
    >
      <form>
        <h3>Checkout</h3>
        <p>TotalAmount ${totalPrice}</p>
        <div className="control">
          <label htmlFor="name">Full Name</label>
          <input
            onChange={(event) => handleChange("name", event.target.value)}
            value={data.name}
            type="text"
            id="name"
            name="name"
            required
          />
        </div>
        <div className="control">
          <label htmlFor="email">E_Mail Address</label>
          <input
            onChange={(event) => handleChange("email", event.target.value)}
            value={data.email}
            type="email"
            id="email"
            name="email"
            required
          />
        </div>
        <div className="control">
          <label htmlFor="street">Street</label>
          <input
            onChange={(event) => handleChange("street", event.target.value)}
            value={data.street}
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
              onChange={(event) =>
                handleChange("postal-code", event.target.value)
              }
              value={data["postal-code"]}
              type="text"
              id="postal-code"
              name="postal-code"
              required
            />
          </div>
          <div className="control">
            <label htmlFor="city">City</label>
            <input
              onChange={(event) => handleChange("city", event.target.value)}
              value={data.city}
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
