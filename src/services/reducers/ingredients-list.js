import { GET_INGREDIENT_REQUEST, GET_INGREDIENT_SUCCESS, GET_INGREDIENT_ERROR} from '../actions/ingredients-list';

export const ingredientsListState = {
    ingredientsList: [],
    ingredientsRequest: false,
    ingredientsError: false,
    current: "bun"
}

export const ingredientsListReducer = (state = ingredientsListState, action) => {
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
                ingredientsList: [...action.data],
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
