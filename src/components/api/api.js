import { apiConfig } from "../burger.config";

class Api {
    constructor({ baseUrl, ingredients, defaultHeaders }) {
        this._baseUrl = baseUrl;
        this._ingredientsEndpoint = ingredients;
        this._defaultHeaders = defaultHeaders;
        // А ещё надо тут прибивать методы, иначе потеряем this
    }
    // Для сбора конечного url можно сделать отдельный метод класса
    _makeUrl(endpoint) {
        return `${this._baseUrl}${endpoint}`;
    }

    _checkResponce(res) {
        if (res.ok) {
            return res.json();
          }
          return res.json().then(err => {
            err.code = res.status;
        
            return Promise.reject(err)
          });
    }
   
    // получатель ингредиентов
    getIngredients() {
        const options = { 
            method: 'GET',
            headers: this._defaultHeaders

            // здесь собери объект опций для fetch
        };
        return fetch(this._makeUrl(this._ingredientsEndpoint), options)
            .then(this._checkResponce);
    }
    // тут дальше пиши другие методы
}

export const apiBurger = new Api (apiConfig);