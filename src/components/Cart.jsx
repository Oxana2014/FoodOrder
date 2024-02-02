import CartItem from "./CartItem";
import Button from "../util/Button";

export default function Cart() {
  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <CartItem />
      <CartItem />
      <CartItem />
      <p className="cart-total">$73.56</p>
      <div className="modal-actions">
        <button className="text-button">Close</button>
        <Button>Go to Checkout</Button>
      </div>
    </div>
  );
}
