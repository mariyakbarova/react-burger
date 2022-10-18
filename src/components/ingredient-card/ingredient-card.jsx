import styles from './ingredient-card.module.css';
import { ingredientType } from '../../utils/components-prop-types.js';
import { CurrencyIcon, Counter } from "@ya.praktikum/react-developer-burger-ui-components";

export default function IngredientCard({ ingredient, onClick }) {
  return (
    <button className={styles.item} onClick={() => onClick(ingredient)}>
        <Counter count={0} size="default" />
        <img className="ml-4 mr-4" src={ingredient.image} alt={ingredient.name} />
        <div className={`${styles.price} mt-2 mb-2`}>
            <p className="text text_type_digits-default">{ingredient.price}</p>
            <CurrencyIcon type="primary" />
        </div>
        <p className={`${styles.subtitle} text text_type_main-default`}>{ingredient.name}</p>
    </button>
  )
  }

IngredientCard.propTypes = {
  ingredient: ingredientType.isRequired,
}




