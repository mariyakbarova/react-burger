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

export default function BurgerConstructor({ onClick }) {
  const dispatch = useDispatch();
  const ingredients = useSelector((state) => state.constructorList.constructorList);
  const buns = useSelector((state) => state.constructorList.bun); //каким образом делать map по разным массивам, если используется только один компонент для отрисовки?

  const [, dropIngredient] = useDrop(() => ({
    accept: "card",
    drop: (element) => insertIngredient(element.ingredient),
  }));

  const insertIngredient = (element) => {
    element = { ...element, id: nanoid() };

    if (element.type === "bun") {
      dispatch(setBun(element));
    }

    if (element.type !== "bun") {
      dispatch(addIngredient(element));
    }
  };

  const orderSum = useMemo(() => (
    ingredients.reduce((acc, { price }) => acc + price, 0) +  // acc -аккумулятор, работа редьюса для подсчёта, формула из интернета
    (buns.reduce((acc, { price }) => acc + price, 0) * 2)
), [ingredients, buns]);

  return (
    <section ref={dropIngredient} className={`${styles.generate} mt-25  pr-2`}>
      <ul className={styles.generateList}>
        {ingredients.map((ingredient) => (
          <li key={ingredient.id} className="mr-4">
            {ingredient.type !== "bun" && <DragIcon type="primary" />}
            <ConstructorElement
              type={ingredient.type} // у булок есть тип 'top' и 'button' - от этого зависит положение булок и текст
              isLocked={ingredient.type === "bun"}
              text={ingredient.name}
              price={ingredient.price}
              thumbnail={ingredient.image}
            />
          </li>
        ))}

        {/* <li className="mr-4">
          <ConstructorElement
            type="top"
            isLocked={true}
            text="Краторная булка N-200i (верх)"
            price={20}
            thumbnail={"https://code.s3.yandex.net/react/code/bun-02.png"}
          />
        </li>

        <div className={`${styles.generateScroll} pr-4`}>
          <li className={styles.listContent}>
            <DragIcon type="primary" />
            <ConstructorElement
              text="Соус традиционный галактический"
              price={30}
              thumbnail={"https://code.s3.yandex.net/react/code/sauce-03.png"}
            />
          </li>

          <li className={styles.listContent}>
            <DragIcon type="primary" />
            <ConstructorElement
              text="Мясо бессмертных моллюсков Protostomia"
              price={300}
              thumbnail={"https://code.s3.yandex.net/react/code/meat-02.png"}
            />
          </li>

          <li className={styles.listContent}>
            <DragIcon type="primary" />
            <ConstructorElement
              text="Плоды Фалленианского дерева"
              price={80}
              thumbnail={"https://code.s3.yandex.net/react/code/sp_1.png"}
            />
          </li>

          <li className={styles.listContent}>
            <DragIcon type="primary" />
            <ConstructorElement
              text="Хрустящие минеральные кольца"
              price={80}
              thumbnail={
                "https://code.s3.yandex.net/react/code/mineral_rings.png"
              }
            />
          </li>

          <li className={styles.listContent}>
            <DragIcon type="primary" />
            <ConstructorElement
              text="Хрустящие минеральные кольца"
              price={80}
              thumbnail={
                "https://code.s3.yandex.net/react/code/mineral_rings.png"
              }
            />
          </li>
          <li className={styles.listContent}>
            <DragIcon type="primary" />
            <ConstructorElement
              text="Хрустящие минеральные кольца"
              price={80}
              thumbnail={
                "https://code.s3.yandex.net/react/code/mineral_rings.png"
              }
            />
          </li>
          <li className={styles.listContent}>
            <DragIcon type="primary" />
            <ConstructorElement
              text="Хрустящие минеральные кольца"
              price={80}
              thumbnail={
                "https://code.s3.yandex.net/react/code/mineral_rings.png"
              }
            />
          </li>
        </div> */}

        {/* <li className="mr-4">
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text="Краторная булка N-200i (низ))"
            price={20}
            thumbnail={"https://code.s3.yandex.net/react/code/bun-02.png"}
          />
        </li> */}
      </ul>

      { buns.length > 0 ? 
      <div className={`${styles.placeOrder} pt-10 `}>
        <div className={styles.priceBox}>
          <p className="text text_type_digits-medium mr-2">{orderSum}</p>
          <CurrencyIcon type="primary" />
        </div>
        <Button type="primary" size="large" htmlType="button" onClick={onClick}>
          Оформить заказ
        </Button>
      </div>
      : null }
    </section>
  );
}

// {ConstructorElement.ingredient.type = 'top'? ConstructorElement.ingredient.text = {`${ingredient.name} +'верх'`}
// :
//            ConstructorElement.ingredient.text = {`${ingredient.name} +'низ'`}}
