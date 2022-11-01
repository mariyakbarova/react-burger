export const SET_INGREDIENT_DETAILS = 'SET_INGREDIENT_DETAILS';
export const DELETE_INGREDIENTS_DETAILS = 'DELETE_INGREDIENT_DETAILS';

export const setIngredientsDetails = (ingredient) => ({
    type: SET_INGREDIENT_DETAILS,
    ingredient
})

export const deleteIngredientDetails = () => ({
    type: DELETE_INGREDIENTS_DETAILS
})