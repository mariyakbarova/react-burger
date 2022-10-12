import React from "react"
import BurgerIngridientsTab from "../burger-ingridients-tab/burger-ingridients-tab"

function BurgerIngridients () {
    return (
        <section>
            <p className='text text_type_main-large mt-10 mb-5'>Соберите бургер</p>
            <BurgerIngridientsTab />
            <p className='text text_type_main-medium mt-10 mb-6'>Булки</p>
            <p className='text text_type_main-medium mt-10 mb-6'>Соусы</p>
            <p className='text text_type_main-medium mt-10 mb-6'>Начинки</p>
        </section>
    )
}

export default BurgerIngridients;