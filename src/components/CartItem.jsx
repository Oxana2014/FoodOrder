export default function CartItem({ name, price, quantity }) {
  console.log("new cartItem: ", name, price, quantity);
  return (
    <ul>
      <li className="cart-item">
        <p>
          {name} - {quantity} X ${price}
        </p>
        <div className="cart-item-actions">
          <button>-</button>
          <p>{quantity}</p>
          <button>+</button>
        </div>
      </li>
    </ul>
  );
}
