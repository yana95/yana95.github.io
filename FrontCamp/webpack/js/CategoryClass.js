/**
 * Created by Yana_Zaitsava on 11/24/2017.
 */

import BaseClass from './BaseClass';
import constants from './constants';
import getItems from './getItems';

class Category extends BaseClass {
    constructor (parentNode, info){
        super(parentNode);
        this.info = info;
        this.el.addEventListener('click', this.clickHandler.bind(this));
    }
    template(){
        const { name, category, description } = this.info;
        return `
            <h2>${name}</h2>
            <span>${category}</span>
            <p>${description}</p>
        `
    }
    clickHandler(){
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
    }
}

export  default  Category;
