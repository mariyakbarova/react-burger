import React, { useRef } from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './burger-ingredients-tab.module.css'

export default function BurgerIngredientsTab({onClick}) {
  const [current, setCurrent] = React.useState('bun');


  return (
    <>
      <div className={styles.ingredientsSort}>
        <Tab value="bun" active={current === "bun"} onClick={() => onClick('bun')} >
          Булки
        </Tab>
        <Tab value="sauce" active={current === "sauce"} onClick={() => onClick('sause')} >
          Соусы
        </Tab>
        <Tab value="main" active={current === "main"} onClick={() => onClick('main')} >
          Начинки
        </Tab>
      </div>
 
    </>
  );
}
// onClick={setCurrent}