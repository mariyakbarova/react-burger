import React from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './burger-ingredients-tab.module.css'

export default function BurgerIngredientsTab() {
  const [current, setCurrent] = React.useState('bun');
  return (
    <>
      <div className={styles.ingredientsSort}>
        <Tab value="bun" active={current === "bun"} onClick={setCurrent} >
          Булки
        </Tab>
        <Tab value="sauce" active={current === "sauce"} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="main" active={current === "main"} onClick={setCurrent}>
          Начинки
        </Tab>
      </div>
 
    </>
  );
}