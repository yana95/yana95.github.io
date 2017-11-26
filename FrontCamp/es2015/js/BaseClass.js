/**
 * Created by Yana_Zaitsava on 11/24/2017.
 */

class BaseClass {   //Using ES6 classes
    constructor (parentNode){
        this.parentNode = parentNode;
        this.items = [];
    }
    render(){
        this.parentNode.innerHTML = '';
        this.items.map( item => {
            let node = document.createElement('li');
            node.innerHTML = item.template();
            item.info.id && node.setAttribute('id', item.info.id)
            this.mountTo(node);
        });
    }
    mountTo(node){
        this.parentNode.appendChild(node)
    }
}

export default BaseClass;
