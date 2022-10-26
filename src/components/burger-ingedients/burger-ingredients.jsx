import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { ingredientType } from "../../utils/components-prop-types.js";
import BurgerIngredientsTab from "../burger-ingredients-tab/burger-ingredients-tab";
import styles from "./burger-ingredients.module.css";
import IngredientsSet from "../ingredients-set/ingredients-set.jsx";

export default function BurgerIngredients({ ingredients, onClick }) {

  const containerRef = useRef();
  const bunsRef = useRef();
  const sauceRef = useRef();
  const ingredientRef = useRef();

  const [currentTab, setCurrentTab] = useState("buns");

  const scrollToRef = (ref) => {
    if (ref === "bun") {
      bunsRef.current.scrollIntoView();
    }

    if (ref === "sauce") {
      sauceRef.current.scrollIntoView();
    }

    if (ref === "main") {
      ingredientRef.current.scrollIntoView();
    }
  };

  useEffect(() => {
    let observer = new IntersectionObserver(
      (entries) => {
        const activeIngredientsection = entries[0];

        if (!activeIngredientsection.isIntersecting) {
          return;
        }

        if (activeIngredientsection.target === bunsRef.current) {
          setCurrentTab("bun");
        } else if (activeIngredientsection.target === sauceRef.current) {
          setCurrentTab("sauce");
        } else if (activeIngredientsection.target === ingredientRef.current) {
          setCurrentTab("main");
        }
      },
      {
        root: containerRef.current,
        rootMargin: "0px",
        threshold: 0,
      }
    );
    observer.observe(bunsRef.current);
    observer.observe(sauceRef.current);
    observer.observe(ingredientRef.current);
  }, []);

  return (
    <section>
      <h3 className="text text_type_main-large mt-10 mb-5">Соберите бургер</h3>
      <BurgerIngredientsTab onClick={scrollToRef} activeTab={currentTab} />
      <div className={styles.ingredientsScroll}>
        <IngredientsSet
          ingredients={ingredients}
          sectionRef={bunsRef}
          onClick={onClick}
          type="bun"
          title="Булки"
        />
        <IngredientsSet
          ingredients={ingredients}
          sectionRef={sauceRef}
          onClick={onClick}
          type="sauce"
          title="Соусы"
        />
        <IngredientsSet
          ingredients={ingredients}
          sectionRef={ingredientRef}
          onClick={onClick}
          type="main"
          title="Начинки"
        />
      </div>
    </section>
  );
}

BurgerIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientType).isRequired,
};
