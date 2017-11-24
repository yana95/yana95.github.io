/**
 * Created by Yana_Zaitsava on 11/24/2017.
 */
import Categories from './CategoriesClass.js';      //Using ES6 modules

let allChannelsHandler = () => {    //Using ES6 arrow function
    let button = document.getElementById('all-channels');
    button.addEventListener('click', () => {
        document.getElementById('categories').className = 'categories';
        document.getElementById('articles').className = 'hide';
        document.getElementById('channel-name').innerHTML = '';
    });
}

export function entryPoint(text) {
    let categories = new Categories(); //Using ES6 let
    categories.getCategories();
    allChannelsHandler();
}
