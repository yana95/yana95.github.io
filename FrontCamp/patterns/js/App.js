/**
 * Created by Yana_Zaitsava on 11/24/2017.
 */
import Category from './CategoryClass';      //Using ES6 modules
import BaseClass from './BaseClass';
import getItems from './getItems';
import constants from './constants';
import {Observable} from './observer';
import {Observer} from './observer';
import Iterator from './iterator';
import store from './singleStore';
const state = store.getInstance();
const render = () => {
    document.getElementById('channel-name').innerHTML = `<span>${state.getState()}</span>`;
}
state.subscribe(render);

const allChannelsHandler = () => {    //Using ES6 arrow function
    const button = document.getElementById('all-channels');
    const categories = new Observer( () => {
        document.getElementById('categories').className = 'categories';
    });
    const articles = new Observer(()=>{
        document.getElementById('articles').className = 'hide';
    });
    const allChannel = new Observable();
    allChannel.addObserver(categories);
    allChannel.addObserver(articles);
    button.addEventListener('click', () => {
        state.dispatch({});
        console.log(state.getState());
        allChannel.sendMessage();
    });
}

class App extends  BaseClass{
    constructor (){
        let parentNode = document.getElementById('categories');
        super(parentNode);
        parentNode = document.getElementById('articles');
        getItems(`${constants.CATEGORIES}?language=${constants.LANGUAGE}&country=${constants.COUNTRY}&apiKey=${constants.API_KEY}`)
            .then( data => {
                this.promiseHandler(data, parentNode)
            });
        allChannelsHandler();
    }
    promiseHandler(data, parentNode){
        let iterator = new Iterator(data.sources);
        iterator.each( (item) => {
            this.items.push(new Category(parentNode, item));
        });
        this.render();
    }
}

export default App;