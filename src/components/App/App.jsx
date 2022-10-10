import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import React, { useEffect } from 'react';
import { apiBurger } from '../api/api';
import AppHeader from '../AppHeader/AppHeader';

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
        <AppHeader />
    )
}
