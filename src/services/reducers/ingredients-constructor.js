import { SET_BUN, ADD_INGREDIENT, DELETE_INGREDIENT, MOVE_INGREDIENT} from '../actions/ingredients-constructor';

export const ingredientsConstructorState = {
    constructorList: [], // список элементов конструктора
    bun: []
  }

export const constructorListReducer = (state = ingredientsConstructorState, action) => {
    switch (action.type) {
        case SET_BUN: {
            return {
                ...state,
                bun:  state.bun.find(item => item._id === action.payload._id) ? 
                [...state.bun] : [action.payload]
            }
        }
        case ADD_INGREDIENT: {
            return {
                ...state,
                constructorList: [...state.constructorList, action.payload]
            }
        }
        case DELETE_INGREDIENT: {
            return {
                ...state,
                constructorList: state.constructorList.filter((element) => element.id !== action.payload.id)
            }
        }

        case MOVE_INGREDIENT: {
            let res =[];

                  // res = [1, 2, 3, 5, 6, 6, 7]
                  // action.payload = {
                  //   start: 5,
                  //   end: 3
                  // }

            const { start, end } = action.payload;

            if (start ===end) {
                return state

            } else if (start > end) {

                res = [
                    ...state.ingredientsList.slice(0, end),
                    state.ingredientsList[start],
                    ...state.ingredientsList.slice(end, start),
                    ...state.ingredientsList.slice(start +1)
                ];
            } else { // start < end

                res = [
                    ...state.ingredientsList.slice(0, start),
                    ...state.ingredientsList.slice(start + 1, end),
                    state.ingredientsList[start],
                    ...state.ingredientsList.slice(end)
                ]
            }

            return {
                ...state,
                ingredientsList: res
            }
        }

        default: {
            return state;
        }
    }
}