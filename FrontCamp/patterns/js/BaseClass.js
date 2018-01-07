/**
 * Created by Yana_Zaitsava on 11/24/2017.
 */

function BaseClass(parentNode){
    this.parentNode = parentNode;
    this.items = [];
    this.el = document.createElement('li');
}
BaseClass.prototype = {
    render: function () {
        this.parentNode.innerHTML = '';
        this.items.map( item => {
            item.el.innerHTML = item.template();
            item.info.id && item.el.setAttribute('id', item.info.id)
            this.mountTo(item.el);
        });
    },
    mountTo: function (node) {
        this.parentNode.appendChild(node)
    }
};


export default BaseClass;