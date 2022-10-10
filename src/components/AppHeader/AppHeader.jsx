import React from "react";
import styles from "./AppHeader.module.css";
import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

function AppHeader() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.box}>
          <li className={styles.constructor}>
            <BurgerIcon type="primary" className={styles.icon} />
            <p className="text text_type_main-default ml-2">Конструктор</p>
          </li>
          <li className={styles.order}>
            <ListIcon type="secondary" className={styles.icon} />
            <p className="text text_type_main-default text_color_inactive ml-2">Лента Заказов</p>
          </li>
        </ul>
        <Logo className={styles.logo}/>
        <div className={styles.account}>
          <ProfileIcon type="secondary" className={styles.icon} />
          <p className="text text_type_main-default text_color_inactive ml-3">Личный кабинет</p>
        </div>
      </nav>
    </header>
  );
}

export default AppHeader;
