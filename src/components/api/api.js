import { apiConfig } from "../burger.config";

class Api {
    constructor({ baseUrl, ingredients, defaultHeaders, order }) {
        this._baseUrl = baseUrl;
        this._ingredientsEndpoint = ingredients;
        this._defaultHeaders = defaultHeaders;
        this._orderEndpoint = order;
        // А ещё надо тут прибивать методы, иначе потеряем this
    }
    // Для сбора конечного url можно сделать отдельный метод классe
    _makeUrl(endpoint) {
        return `${this._baseUrl}${endpoint}`;
    }

    _checkResponce(res) {
        if (res.ok) {
           console.log(res.ok)
            return res.json()
          }
          return res.json()
          .then( 
            err => {
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

    _request(url, options) {
      return fetch(url, options).then(this._checkResponce)
    }

    requestOrderDetails(idList) {
        const options = {
          method: 'POST',
          headers: this._defaultHeaders,
          body: JSON.stringify({
            ingredients: idList
          })
        }
        return this._request(this._makeUrl(this._orderEndpoint), options)
      }
    }

export const apiBurger = new Api (apiConfig);