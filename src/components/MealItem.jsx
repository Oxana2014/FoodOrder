import Button from "../util/Button";

export default function MealItem({ id, image, name, description, price,onAdd }) {

  return (
    <li id={id} className="meal-item">
      <article>
        <img src={image} alt="Meal photo" />
        <h3>{name}</h3>
        <p className="meal-item-price">{price}</p>
        <p className="meal-item-description">{description}</p>
        <div className="meal-item-actions">
          <Button onClick={() => onAdd( {
      id: id,
      name: name,
      price: price,
      quantity: 1,
    })} >Add to Cart</Button>
        </div>
      </article>
    </li>
  );
}
