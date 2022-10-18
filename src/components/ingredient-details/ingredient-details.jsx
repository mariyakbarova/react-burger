import React from "react";
import styles from './ingredient-details.module.css';
import { ingredientType } from '../../utils/components-prop-types.js';

export default function IngredientDetails({ingredient}) {

  if (!ingredient) {
    return null
  }

    return (
        <div className={`${styles.ingredientDetails} pl-25 pr-25`}>
          <img className="ml-4 mr-4" src={ingredient.image_large} alt={ingredient.name} />
          <h3 className={`${styles.name} text text_type_main-medium mt-4 mb-4`}>{ingredient.name}</h3>
          <ul className={`${styles.description} mb-15`}>
            <li className={`${styles.about}`}>
              <p className="text text_type_main-default text_color_inactive">Калории,ккал</p>
              <p className="text text_type_digits-default text_color_inactive">{ingredient.calories}</p>
            </li>
            <li className={`${styles.about}`}>
              <p className="text text_type_main-default text_color_inactive">Белки, г</p>
              <p className="text text_type_digits-default text_color_inactive">{ingredient.proteins}</p>
            </li>
            <li className={`${styles.about}`}>
              <p className="text text_type_main-default text_color_inactive">Жиры, г</p>
              <p className="text text_type_digits-default text_color_inactive">{ingredient.fat}</p>
            </li>
            <li className={`${styles.about}`}>
              <p className="text text_type_main-default text_color_inactive">Углеводы, г</p>
              <p className="text text_type_digits-default text_color_inactive">{ingredient.carbohydrates}</p>
            </li>
          </ul>
        </div>
      )
    }

    IngredientDetails.propTypes = {
      ingredient: ingredientType.isRequired,
    }
