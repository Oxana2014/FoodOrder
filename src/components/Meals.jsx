import { useContext } from "react";

import MealItem from "./MealItem";
import { CartContext } from "../store/cart-context";

export default function Meals({ meals }) {
  const { addToCart } = useContext(CartContext);

  return (
    <ul id="meals">
      {meals.map((meal) => (
        <MealItem
          key={meal.id}
          id={meal.id}
          image={`http://localhost:3000/${meal.image}`}
          name={meal.name}
          description={meal.description}
          price={meal.price}
          onAdd={addToCart}
        />
      ))}
    </ul>
  );
}
