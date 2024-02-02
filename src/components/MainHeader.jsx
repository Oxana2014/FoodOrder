import logo from "../assets/logo.jpg";

export default function MainHeader() {
  return (
    <div id="main-header">
      <div id="title">
        <img src={logo} alt="Delicious meal" />
 </div>
        <h1>Food Order App</h1>
        
        <button>Cart</button>
    </div>
  );
}
