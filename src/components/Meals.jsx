import mealPhoto from '../assets/beef-tacos.jpg'

import MealItem from "./MealItem"

export default function Meals({meals}) {




return <ul id="meals">
    {meals.map(meal => <MealItem key={meal.id} id={meal.id} image={mealPhoto} title={meal.title} description={meal.description} price={meal.price} />)}
</ul> 
}