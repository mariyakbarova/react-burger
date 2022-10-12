import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import React, { useEffect } from 'react';
import { apiBurger } from '../api/api';
import AppHeader from '../AppHeader/AppHeader';
import styles from './App.module.css'
import BurgerIngridients from '../burger-ingridients/BurgerIngridients';
import BurgerGenerate from '../burger-generate/burger-generate';


export default function App() {

const [ingredients, setIngredients] = React.useState([]);
    
    useEffect(() => {
        apiBurger.getIngredients()
        .then(( {sucсess, data} ) => {
            if (sucсess === true) {
                setIngredients(data);
            }
            console.dir(data)
        })
        .catch(console.log)
    }, [])

    return (
        <><AppHeader />
        <main className={styles.main}>
          <BurgerIngridients />
          <BurgerGenerate />
            
            </main></>
    )
}
