import { useContext } from "react";
import logo from "../assets/logo.jpg";
import Button from "../util/Button";
import { CartContext } from "../store/cart-context";

export default function MainHeader({openCart}) {
const {items: cartItems} = useContext(CartContext)
const totalQuantity = cartItems.reduce((acc, item) => acc+ item.quantity, 0)

     return (
    <div id="main-header">
      <div id="title">
        <img src={logo} alt="Delicious meal" />
 </div>
        <h1>Food Order App</h1>
        
        <Button onClick={openCart}>Cart ({totalQuantity})</Button>
    </div>
  );
}
