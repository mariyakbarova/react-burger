import React, { useCallback }from "react";
import { apiBurger } from "../api/api";
import AppHeader from "../app-header/app-header";
import styles from "./app.module.css";
import { BurgerIngredients } from "../burger-ingedients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import IngredientDetails from "../ingredient-details/ingredient-details";
import { getIngredientSuccess} from '../../services/actions/ingredients-list'; 
import { deleteIngredientDetails } from '../../services/actions/ingredient-details';
import { getOrderSuccess } from '../../services/actions/order-details';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderNumber } from '../../services/actions/order-details';
import { clearConstructor } from "../../services/actions/ingredients-constructor";



export default function App () {

  const [openOrderModal, setOrderOpenModal] = React.useState();
  const openIngredientsModal = useSelector(state => !!state.ingredientDetails.ingredientDetails);
  const dispatch = useDispatch();
  const ingredients = useSelector(state => {
    return state.ingredientList.ingredientList
  });
  const idList = (ingredients.map(element => element._id))

  const constructorIngredientsList = useSelector(state => state.constructorList.ingredientsList);
  

  React.useEffect(() => {
    apiBurger.getIngredients()
      .then(({ data }) => {
        dispatch(getIngredientSuccess(data))
      })
      .catch((error) => {
        console.log(error)
      })
  }, [dispatch])
  console.dir(ingredients)

  // const handleOrderOpenModal = (() => {
  //   setOrderOpenModal(true)
  //   apiBurger.requestOrderDetails(idList)
  //     .then(({ order: {number} }) => {
  //       dispatch(getOrderSuccess(number));
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //     })
  // })

  const handleOrderOpenModal = (() => {
    setOrderOpenModal(true)
    dispatch(getOrderNumber(idList))
  })

  const closeIngredientsModal = useCallback(() => {
    dispatch(deleteIngredientDetails())
  }, [dispatch])

  const closeOrderModal = useCallback(() => {
    setOrderOpenModal(false)
    dispatch(clearConstructor())
  }, [])


  return (
    <>
      <AppHeader />
      <main className={styles.main}>
        <BurgerIngredients/>
        <BurgerConstructor onClick={handleOrderOpenModal} ingredients={constructorIngredientsList}/>
      </main>

       {!!openIngredientsModal && (
        <Modal onClose={closeIngredientsModal} title='Детали ингредиента'>
          <IngredientDetails/>
        </Modal>
      )} 

      {!!openOrderModal && (
        <Modal onClose={closeOrderModal}>
          <OrderDetails />
        </Modal>
      )}
    </>
  )
}

