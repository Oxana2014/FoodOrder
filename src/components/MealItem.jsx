import mealPhoto from '../assets/beef-tacos.jpg'

export default function MealItem () {
    return <li className="meal-item">
        <article>
            <img src={mealPhoto} alt="Meal photo" />
            <h3>Title</h3>
            <p className="meal-item-price">45 $</p>
            <p className="meal-item-description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis sequi ut placeat harum sapiente quia voluptatem fuga incidunt, corrupti, enim ipsa sint, necessitatibus id. Perferendis provident veniam fugiat recusandae ratione.
            </p>
<div className="meal-item-actions">
    <button>Add to Cart</button>
</div>
        </article>
    </li>
}