import React, { useRef }from "react";
import PropTypes from 'prop-types';
import { ingredientType } from '../../utils/components-prop-types.js';
import BurgerIngredientsTab from "../burger-ingredients-tab/burger-ingredients-tab"
import styles from './burger-ingredients.module.css'
import IngredientsSet from '../ingredients-set/ingredients-set.jsx';

export default function BurgerIngredients({ ingredients, onClick}) {

  const bunsRef = useRef();
  const sauseRef = useRef();
  const ingredientRef = useRef();

  const scrollToRef = (ref) => {
    if (ref === 'bun') {
      bunsRef.current.scrollIntoView()
    }

    if (ref === 'sause') {
      sauseRef.current.scrollIntoView()
    }

    if (ref === 'main') {
      ingredientRef.current.scrollIntoView()
    }
  }

  // let observer = new IntersectionObserver(scrollToRef);
  // observer.observe({});

    return (
      <section>
        <h3 className="text text_type_main-large mt-10 mb-5">
          Соберите бургер
        </h3>
        <BurgerIngredientsTab onClick={scrollToRef}/>
        <div className={styles.ingredientsScroll}>
          <IngredientsSet ingredients={ingredients} sectionRef={bunsRef} onClick={onClick} type='bun' title='Булки' />
          <IngredientsSet ingredients={ingredients} sectionRef={sauseRef} onClick={onClick} type='sauce' title='Соусы' />
          <IngredientsSet ingredients={ingredients} sectionRef={ingredientRef} onClick={onClick} type='main' title='Начинки' />
        </div>
      </section>
    )
  }
  
  BurgerIngredients.propTypes = {
    ingredients: PropTypes.arrayOf(ingredientType).isRequired,
  }
 
  