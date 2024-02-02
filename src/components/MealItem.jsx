import Button from "../util/Button";

export default function MealItem({ id, image, title, description, price }) {
  return (
    <li id={id} className="meal-item">
      <article>
        <img src={image} alt="Meal photo" />
        <h3>{title}</h3>
        <p className="meal-item-price">{price}</p>
        <p className="meal-item-description">{description}</p>
        <div className="meal-item-actions">
          <Button>Add to Cart</Button>
        </div>
      </article>
    </li>
  );
}
