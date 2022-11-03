import styles from "./burger-constructor.module.css";
import {
  ConstructorElement,
  DragIcon,
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

import { nanoid } from "nanoid";
import {
  setBun,
  addIngredient,
  deleteIngredient,
  moveIngredient,
} from "../../services/actions/ingredients-constructor";
import { useDispatch, useSelector } from "react-redux";
import { useDrop } from "react-dnd";
import { orderDetailsReducer } from "../../services/reducers/order-details";
import { useMemo } from "react";

import { BurgerIngredient } from "../burger-ingredient/burger-ingredient";

export default function BurgerConstructor({ onClick }) {
  const dispatch = useDispatch();

  const ingredients = useSelector((state) => state.constructorList.constructorList);
  const buns = useSelector((state) => state.constructorList.bun); 

  const [, dropIngredient] = useDrop(() => ({
    accept: "card",
    drop: (element) => insertIngredient(element.ingredient),
  }));

  const insertIngredient = (ingredient) => {
    ingredient = { ...ingredient, id: nanoid() };

    if (ingredient.type === "bun") {
      dispatch(setBun(ingredient));
    }

    if (ingredient.type !== "bun") {
      dispatch(addIngredient(ingredient));
    }
  };

  const orderSum = useMemo(
    () =>
      ingredients.reduce((acc, { price }) => acc + price, 0) + // acc -аккумулятор, работа редьюса для подсчёта, формула из интернета
      buns.reduce((acc, { price }) => acc + price, 0) * 2,
    [ingredients, buns]
  );

  const handleDelete = (ingredient) => {
    dispatch(deleteIngredient(ingredient))
  }

  return (
    <section className={`${styles.generate} mt-25  pr-2`} ref={dropIngredient}>
      <ul className={styles.generateList}>
        {buns.map((ingredient) => {
          if (ingredient.type === "bun")
            return (
              <li key={ingredient.id} className="mr-4">
                <ConstructorElement
                  type="top"
                  isLocked={true}
                  text={`${ingredient.name} (верх)`}
                  price={ingredient.price}
                  thumbnail={ingredient.image}
                />
              </li>
            );
        })}

        <div className={`${styles.generateScroll} pr-4`}>
 
          {ingredients.map((ingredient, index) => {
            if (ingredient.type !== "bun")
              return (
                  <BurgerIngredient
                    key={ingredient.id}
                    ingredient={ingredient}
                    id={ingredient.id}
                    index={index}
                    handleDelete={handleDelete}
                  />
              );
          })}
        </div>

        {buns.map((ingredient) => {
          if (ingredient.type === "bun")
            return (
              <li className="mr-4" key={ingredient.id}>
                <ConstructorElement
                  type="bottom"
                  isLocked={true}
                  text={`${ingredient.name} (низ)`}
                  price={ingredient.price}
                  thumbnail={ingredient.image}                  
                />
              </li>
            );
        })}
      </ul>

      {buns.length > 0 ? (
        <div className={`${styles.placeOrder} pt-10 `}>
          <div className={styles.priceBox}>
            <p className="text text_type_digits-medium mr-2">{orderSum}</p>
            <CurrencyIcon type="primary" />
          </div>
          <Button
            type="primary"
            size="large"
            htmlType="button"
            onClick={onClick}
          >
            Оформить заказ
          </Button>
        </div>
      ) : null}
    </section>
  );
}

// {ConstructorElement.ingredient.type = 'top'? ConstructorElement.ingredient.text = {`${ingredient.name} +'верх'`}
// :
//            ConstructorElement.ingredient.text = {`${ingredient.name} +'низ'`}}
