import styles from './ingredients-set.module.css';
import PropTypes from 'prop-types';
import { ingredientType } from '../../utils/components-prop-types.js';
import IngredientCard from '../ingredient-card/ingredient-card.jsx';

export default function IngredientsSet({ ingredients, type, onClick, sectionRef }) {
  return (
    <section className='pb-10' ref={sectionRef}>
      <ul className={styles.set}>
        {ingredients
          .filter((ingredient) => ingredient.type === type)
          .map((ingredient) => (
            <IngredientCard
              key={ingredient._id}
              ingredient={ingredient}
              onClick={onClick}
            />
          ))}
      </ul>
    </section>
  )
}

IngredientsSet.propTypes = {
    ingredients: PropTypes.arrayOf(ingredientType).isRequired,
  }
