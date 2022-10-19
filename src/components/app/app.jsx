import React from "react";
import { apiBurger } from "../api/api";
import AppHeader from "../app-header/app-header";
import styles from "./app.module.css";
import BurgerIngredients from "../burger-ingedients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import IngredientDetails from "../ingredient-details/ingredient-details";


export default function App () {
  const [ingredients, setIngredients] = React.useState([]);
  const [element, setElement] = React.useState();
  const [openOrderModal, setOrderOpenModal] = React.useState();
  const [openIngredientsModal, setOpenIngredientModal] = React.useState();

  React.useEffect(() => {
    apiBurger.getIngredients()
      .then(({ success, data }) => {
        if (success) {
          setIngredients(data)
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])
  console.dir(ingredients)

  const handleElementModal = (event, element) => {
    setOpenIngredientModal(!openIngredientsModal);
    setElement(element);
  }

  return (
    <>
      <AppHeader />
      <main className={styles.main}>
        <BurgerIngredients ingredients={ingredients} onClick={handleElementModal} />
        <BurgerConstructor onClick={setOrderOpenModal} />
      </main>

      {!!openIngredientsModal && (
        <Modal onClose={() => setOpenIngredientModal(false)} title='Детали ингредиента'>
          <IngredientDetails ingredient={element} />
        </Modal>
      )}

      {!!openOrderModal && (
        <Modal onClose={() => setOrderOpenModal(false)}>
          <OrderDetails />
        </Modal>
      )}
    </>
  )
}

