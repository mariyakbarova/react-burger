import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { ingredientType } from "../../utils/components-prop-types.js";
import BurgerIngredientsTab from "../burger-ingredients-tab/burger-ingredients-tab";
import styles from "./burger-ingredients.module.css";
import IngredientsSet from "../ingredients-set/ingredients-set.jsx";

function BurgerIngredientsFunction() {

  const containerRef = useRef();
  const bunsRef = useRef();
  const sauceRef = useRef();
  const ingredientRef = useRef();

  const [currentTab, setCurrentTab] = useState("bun");

  const scrollToRef = (ref) => {
    if (ref === "bun") {
      setCurrentTab('bun');
      bunsRef.current.scrollIntoView({behavior: 'smooth'});
    }

    if (ref === "sauce") {
      setCurrentTab('sauce');
      sauceRef.current.scrollIntoView({behavior: 'smooth'});
    }

    if (ref === "main") {
      setCurrentTab('main');
      ingredientRef.current.scrollIntoView({behavior: 'smooth'});
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
        rootMargin: '0px 0px -90% 0px',
        threshold: .7,
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
      <div className={styles.ingredientsScroll} ref={containerRef}>
        <IngredientsSet
          sectionRef={bunsRef}
          type="bun"
          title="Булки"
        />
        <IngredientsSet
          sectionRef={sauceRef}
          type="sauce"
          title="Соусы"
        />
        <IngredientsSet
          sectionRef={ingredientRef}
          type="main"
          title="Начинки"
        />
      </div>
    </section>
  );
}

// BurgerIngredients.propTypes = {
//   ingredients: PropTypes.arrayOf(ingredientType).isRequired,
// };

export const BurgerIngredients = React.memo(BurgerIngredientsFunction);
