/**
 * Created by Yana_Zaitsava on 11/24/2017.
 */

class BaseClass {   //Using ES6 classes
    constructor (parentNode){
        this.parentNode = parentNode;
        this.items = [];
        this.el = document.createElement('li');
    }
    render(){
        this.parentNode.innerHTML = '';
        this.items.map( item => {
            item.el.innerHTML = item.template();
            item.info.id && item.el.setAttribute('id', item.info.id)
            this.mountTo(item.el);
        });
    }
    mountTo(node){
        this.parentNode.appendChild(node)
    }
}

export default BaseClass;