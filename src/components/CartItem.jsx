export default function CartItem({id, name, price, quantity, onIncrement, onDecrement }) {
  console.log("new cartItem: ", name, price, quantity);
  return (
    <ul>
      <li className="cart-item">
        <p>
          {name} - {quantity} X ${price}
        </p>
        <div className="cart-item-actions">
          <button onClick={() => onDecrement(id)}>-</button>
          <p>{quantity}</p>
          <button onClick={() => onIncrement(id)}>+</button>
        </div>
      </li>
    </ul>
  );
}
