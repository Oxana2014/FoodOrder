import logo from "../assets/logo.jpg";
import Button from "./Button";

export default function MainHeader() {
  return (
    <div id="main-header">
      <div id="title">
        <img src={logo} alt="Delicious meal" />
 </div>
        <h1>Food Order App</h1>
        
        <Button>Cart</Button>
    </div>
  );
}
