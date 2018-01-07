/**
 * Created by Yana_Zaitsava on 11/24/2017.
 */

import BaseClass from './BaseClass';
import constants from './constants';
import getItems from './getItems';
import Factory from './tmpFactory';
import $ from './myJquery';

function Category(parentNode, info) {
    BaseClass.call(this, parentNode);
    this.info = info;
    this.el.addEventListener('click', this.clickHandler.bind(this));
}

Category.prototype = Object.create(BaseClass.prototype);
Category.prototype.constructor = Category;

Category.prototype.template = function(){
        const { name, category, description } = this.info;
        let tmp = Factory('category');
        return tmp(name, category, description);
    };
Category.prototype.clickHandler = function(){
        import(/* webpackChunkName: "ArticleClass" */
            /* webpackMode: "lazy" */ './ArticleClass').then(module => {
            console.log("Lazy loading");
            const Article = module.default;
            this.items = [];
            document.getElementById('categories').className = 'hide';
            document.getElementById('channel-name').innerHTML = `<span>${this.info.name}</span> <span>channel</span>`;
            getItems(`${constants.ARTICLES}?sources=${this.info.id}&apiKey=${constants.API_KEY}`)
                .then( data => {
                    data.articles.map( item => {
                        const article = new Article(item);
                        this.items.push(article);
                    });
                    this.render();
                    this.parentNode.className = 'articles';
                });
        });
    };

export  default  Category;
