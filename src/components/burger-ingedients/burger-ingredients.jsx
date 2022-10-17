import React from "react"
import BurgerIngredientsTab from "../burger-ingredients-tab/burger-ingredients-tab"
import styles from './burger-ingredients.module.css'
import IngredientsSet from '../ingredients-set/ingredients-set.jsx';
import BurgerIngredientsTab from "../burger-ingredients-tab/burger-ingredients-tab";
    
export default function BurgerIngredients({ ingredients, onClick }) {
    const [current, setCurrent] = useState('bun')
    return (
      <section>
        <h3 className="text text_type_main-large mt-10 mb-5">
          Соберите бургер
        </h3>
        <BurgerIngredientsTab />
        <div className={styles.ingredientsScroll}>
          <IngredientsSet ingredients={ingredients} onClick={onClick} type='bun' title='Булки' />
          <IngredientsSet ingredients={ingredients} onClick={onClick} type='sauce' title='Соусы' />
          <IngredientsSet ingredients={ingredients} onClick={onClick} type='main' title='Начинки' />
        </div>
      </section>
    )
  }
  
  BurgerIngredients.propTypes = {
    ingredients: PropTypes.arrayOf(ingredientType).isRequired,
  }
 
  