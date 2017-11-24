/**
 * Created by Yana_Zaitsava on 11/24/2017.
 */

class BaseClass {   //Using ES6 classes
    constructor (type){
        this.ul = document.getElementById(type);
        this.items = [];
    }
    getItems(url){
        let promise = fetch(url);    //Using ES6 fetch
        return promise.then((res) => res.json()); //Using ES6 promise
    }
    renderItems(template){
        for(let i=0; i < this.items.length; i++){
            let li = document.createElement('li');
            li.innerHTML = template(this.items[i]);
            this.ul.appendChild(li);
        }
    }
}

export default BaseClass;
