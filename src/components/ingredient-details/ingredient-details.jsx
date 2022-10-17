import React from "react";
import styles from './ingredient-details.module.css';
// import { ingredientType } from '../../utils/components-prop-types.js';

export default function IngredientDetails({ingredient}) {

  if (!ingredient) {
    return null
  }

    return (
        <>
          <h2 className="text text_type_main-large mt-10 ml-10">Детали ингредиента</h2>
          <img src={ingredient.image_large} alt={ingredient.name} />
          <h3 className="text text_type_main-medium">{ingredient.name}</h3>
          <ul className={styles.description}>
            <li className="info">
              <p className="text text_type_main-default text_color_inactive">Калории,ккал</p>
              <p className="text text_type_digits-default text_color_inactive">{ingredient.calories}</p>
            </li>
            <li className="info">
              <p className="text text_type_main-default text_color_inactive">Белки, г</p>
              <p className="text text_type_digits-default text_color_inactive">{ingredient.proteins}</p>
            </li>
            <li className="info">
              <p className="text text_type_main-default text_color_inactive">Жиры, г</p>
              <p className="text text_type_digits-default text_color_inactive">{ingredient.fat}</p>
            </li>
            <li className="info">
              <p className="text text_type_main-default text_color_inactive">Углеводы, г</p>
              <p className="text text_type_digits-default text_color_inactive">{ingredient.carbohydrates}</p>
            </li>
          </ul>
        </>
      )
    }

    // IngredientDetails.propTypes = {
    //   ingredient: ingredientType.isRequired,
    // }
