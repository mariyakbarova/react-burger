import React from "react";
import styles from "./app-header.module.css";
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
          <li className='pt-4 pb-4 pl-5 pr-5'>
            <a href='#' className={styles.link}>
            <BurgerIcon type="primary" className={styles.icon} />
            <p className="text text_type_main-default ml-2">Конструктор</p>
            </a>
          </li>
          <li className='pt-4 pb-4 pl-5 pr-5'>
          <a href='#' className={styles.link}>
            <ListIcon type="secondary" className={styles.icon} />
            <p className="text text_type_main-default text_color_inactive ml-2">Лента Заказов</p>
            </a>
          </li>
        </ul>
        <Logo className={styles.logo}/>
        <div className={styles.account}>
            <a href='#' className={`${styles.link} pt-4 pb-4 pl-5 pr-5`}>
          <ProfileIcon type="secondary" className={styles.icon} />
          <p className="text text_type_main-default text_color_inactive ml-3">Личный кабинет</p>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default AppHeader;
