/**
 * Created by Yana_Zaitsava on 11/24/2017.
 */
import Category from './CategoryClass.js';      //Using ES6 modules
import BaseClass from './BaseClass.js';
import getItems from './getItems.js';
import constants from './constants.js';

const allChannelsHandler = () => {    //Using ES6 arrow function
    const button = document.getElementById('all-channels');
    button.addEventListener('click', () => {
        document.getElementById('categories').className = 'categories';
        document.getElementById('articles').className = 'hide';
        document.getElementById('channel-name').innerHTML = '';
    });
}

class App extends  BaseClass{
    constructor (){
        let parentNode = document.getElementById('categories');
        super(parentNode);
        parentNode = document.getElementById('articles');
        getItems(`${constants.CATEGORIES}?language=${constants.LANGUAGE}&country=${constants.COUNTRY}&apiKey=${constants.API_KEY}`)
            .then( data => {this.promiseHandler(data, parentNode)} );
        allChannelsHandler();
    }
    promiseHandler(data, parentNode){
        this.items = data.sources.map(item => new Category(parentNode, item));
        this.render();
    }
}

export default App;
