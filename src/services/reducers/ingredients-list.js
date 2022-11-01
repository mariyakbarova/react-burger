import { GET_INGREDIENT_REQUEST, GET_INGREDIENT_SUCCESS, GET_INGREDIENT_ERROR} from '../actions/ingredients-list';

export const ingredientsListState = {
    ingredientList: [],
    ingredientsRequest: false,
    ingredientsError: false,
    current: "bun"
}

export const ingredientListReducer = (state = ingredientsListState, action) => {
    switch(action.type) {
        case GET_INGREDIENT_REQUEST: {
            return {
                ...state,
                ingredientsRequest: true
            }
        }

        case GET_INGREDIENT_SUCCESS: {
            return {
                ...state,
                ingredientList: [...action.data],
                ingredientsError: false
            }
        }

        case GET_INGREDIENT_ERROR: {
            return {
                ...state,
                ingredientsRequest: false,
                ingredientsError: true
            }
        }
        default: {
            return state;
        }
    }
}
