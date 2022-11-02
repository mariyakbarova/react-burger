import styles from "./ingredient-card.module.css";
import { ingredientType } from "../../utils/components-prop-types.js";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDrag } from "react-dnd";
import { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setIngredientsDetails } from "../../services/actions/ingredient-details";

export default function IngredientCard({ ingredient }) {

  // const elements = useSelector(
  //   (state) => state.constructorList.constructorList
  // );
  // const buns = useSelector((state) => state.constructorList.bun);

  // const count = useMemo(
  //   () =>
  //     elements.filter((element) => element._id === ingredient._id).length ||
  //     buns.filter((element) => element._id === ingredient._id).length * 2,
  //   [buns, elements, ingredient._id]
  // );

  const dispatch = useDispatch();
  const handleIngredientClick = () => {
    dispatch(setIngredientsDetails(ingredient));
  };

  const [, dragIngredient] = useDrag(
    () => ({
      type: 'card',
      item: {
        ingredient,
        id: ingredient._id,
        type: ingredient.type,
      },
    }),
    []
  );

  return (
    <button
      className={styles.item}
      onClick={handleIngredientClick}
      ref={dragIngredient}
    >
      {/* {count > 0 ? (
        <Counter id={ingredient._id} count={count} size="small" />
      ) : null} */}
      <img className="ml-4 mr-4" src={ingredient.image} alt={ingredient.name} />
      <div className={`${styles.price} mt-2 mb-2`}>
        <p className="text text_type_digits-default mr-2">{ingredient.price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <p className={`${styles.subtitle} text text_type_main-default`}>
        {ingredient.name}
      </p>
    </button>
  ); 
}

IngredientCard.propTypes = {
  ingredient: ingredientType.isRequired,
};
