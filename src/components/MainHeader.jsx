import logo from "../assets/logo.jpg";
import Button from "../util/Button";

export default function MainHeader({openCart}) {

     return (
    <div id="main-header">
      <div id="title">
        <img src={logo} alt="Delicious meal" />
 </div>
        <h1>Food Order App</h1>
        
        <Button onClick={openCart}>Cart</Button>
    </div>
  );
}
