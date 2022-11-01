export const GET_INGREDIENT_REQUEST = 'GET_INGREDIENT_REQUEST';
export const GET_INGREDIENT_SUCCESS = 'GET_INGREDIENT_SUCCESS';
export const GET_INGREDIENT_ERROR = 'GET_INGREDIENT_ERROR';

export const getIngredientSuccess = (data) => ({
    type: GET_INGREDIENT_SUCCESS,
    data
})