import React, { useCallback } from "react";
import { apiBurger } from "../api/api";
import AppHeader from "../app-header/app-header";
import styles from "./app.module.css";
import { BurgerIngredients } from "../burger-ingedients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import Modal from "../modal/modal";
import {OrderDetails} from "../order-details/order-details";
import IngredientDetails from "../ingredient-details/ingredient-details";
import { getIngredientSuccess } from "../../services/actions/ingredients-list";
import { deleteIngredientDetails } from "../../services/actions/ingredient-details";
import { getOrderSuccess } from "../../services/actions/order-details";
import { useDispatch, useSelector } from "react-redux";
import { getOrderNumber } from "../../services/actions/order-details";
import { clearConstructor } from "../../services/actions/ingredients-constructor";
import { getIngredientsList } from "../../services/actions/ingredients-list";

import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

export default function App() {
  const [openOrderModal, setOrderOpenModal] = React.useState();

  const openIngredientsModal = useSelector(
    (state) => !!state.ingredientDetails.ingredientDetails
  );

  const dispatch = useDispatch();

  const ingredients = useSelector((state) => state.ingredientsList.ingredientsList );

  const idList = ingredients.map((element) => element._id);

  React.useEffect(() => { 
    dispatch(getIngredientsList())}, [dispatch]);
  console.dir(ingredients);

  const handleOrderOpenModal = () => {
    setOrderOpenModal(true);
    dispatch(getOrderNumber(idList));
  };


  const closeIngredientsModal = useCallback(() => {
    dispatch(deleteIngredientDetails());
  }, [dispatch]);

  const closeOrderModal = useCallback(() => {
    setOrderOpenModal(false);
    dispatch(clearConstructor());
  }, []);

  return (
    <DndProvider backend={HTML5Backend}>

      <AppHeader />
      <main className={styles.main}>
        <BurgerIngredients />
        <BurgerConstructor
          onClick={handleOrderOpenModal}
        />
      </main>

      {!!openIngredientsModal && (
        <Modal onClose={closeIngredientsModal} title="Детали ингредиента">
          <IngredientDetails />
        </Modal>
      )}

      {!!openOrderModal && (
        <Modal onClose={closeOrderModal}>
          <OrderDetails />
        </Modal>
      )}
    </DndProvider>
  );
}
