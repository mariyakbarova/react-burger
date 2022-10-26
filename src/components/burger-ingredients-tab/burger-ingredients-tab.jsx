import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './burger-ingredients-tab.module.css'

export default function BurgerIngredientsTab({onClick, activeTab}) {

  return (
    <>
      <div className={styles.ingredientsSort}>
        <Tab value="bun" active={activeTab === "bun"} onClick={() => onClick('bun')} >
          Булки
        </Tab>
        <Tab value="sauce" active={activeTab === "sauce"} onClick={() => onClick('sauce')} >
          Соусы
        </Tab>
        <Tab value="main" active={activeTab === "main"} onClick={() => onClick('main')} >
          Начинки
        </Tab>
      </div>
 
    </>
  );
}
// onClick={setCurrent}