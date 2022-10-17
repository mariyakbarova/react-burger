import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import React, { useEffect, useState } from "react";
import { apiBurger } from "../api/api";
import AppHeader from "../app-header/app-header";
import styles from "./app.module.css";
import BurgerIngredients from "../burger-ingedients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import IngredientDetails from "../ingredient-details/ingredient-details";

export default function App() {
  const [ingredients, setIngredients] = useState([]);
  const [element, setElement] = useState();
  const [openIngredientsModal, setOpenIngredientsModal] = useState();
  const [openOrderModal, setOpenOrderModal] = useState(false);

  useEffect(() => {
    apiBurger
      .getIngredients()
      .then(({ sucсess, data }) => {
        if (sucсess === true) {
          setIngredients(data);
        }
        console.dir(data);
      })
      .catch(console.log);
  }, []);


  const handleIngredientsModal = (event, element) => {
    setOpenIngredientsModal(!openIngredientsModal);
    setElement(element);
  };

  return (
    <>
      <AppHeader />
      <main className={styles.main}>
        <BurgerIngredients
          ingredients={ingredients}
          onClick={handleIngredientsModal}
        />
        <BurgerConstructor onClick={setOpenOrderModal} />
      </main>

      {!!openIngredientsModal && (
        <Modal onClose={() => setOpenIngredientsModal(false)} title='Детали ингредиента'>
          <IngredientDetails ingredient={element}/>
        </Modal>
      )}

      {!!openOrderModal && (
        <Modal onClose={() => setOpenOrderModal(false)}>
          <OrderDetails />
        </Modal>
      )}
    </>
  );
}
