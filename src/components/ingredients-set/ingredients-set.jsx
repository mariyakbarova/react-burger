import styles from './ingredients-set.module.css';
import PropTypes from 'prop-types';
import { ingredientType } from '../../utils/components-prop-types.js';
import IngredientCard from '../ingredient-card/ingredient-card.jsx';
import { useSelector } from 'react-redux';

export default function IngredientsSet({ type, sectionRef, title }) {

  const ingredients = useSelector(state => state.ingredientList.ingredientList);

  return (
    <section className='pb-10' ref={sectionRef}>
      <h1 className='text text_type_main-medium mb-6'>{title}</h1>
      <ul className={styles.set}>
        {ingredients
          .filter((ingredient) => ingredient.type === type)
          .map((ingredient) => (
            <IngredientCard
              key={ingredient._id}
              ingredient={ingredient}
            />
          ))
          }
      </ul>
    </section>
  )
}

IngredientsSet.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}
