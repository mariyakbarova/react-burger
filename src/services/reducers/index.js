import { combineReducers } from "redux";

import { ingredientDetailsReducer } from "./ingredient-details";
import { constructorListReducer } from "./ingredients-constructor";
import { ingredientListReducer } from "./ingredients-list";
import { orderDetailsReducer } from "./order-details";

export const rootReducer = combineReducers({
    ingredientDetails: ingredientDetailsReducer,
    constructorList: constructorListReducer,
    ingredientList: ingredientListReducer,
    orderDetails: orderDetailsReducer
})