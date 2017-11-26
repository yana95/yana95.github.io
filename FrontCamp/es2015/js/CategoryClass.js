/**
 * Created by Yana_Zaitsava on 11/24/2017.
 */
import Article from './ArticleClass.js';
import BaseClass from './BaseClass.js';
import constants from './constants.js';
import getItems from './getItems.js';

class Category extends BaseClass {
    constructor (parentNode, info){
        super(parentNode);
        this.info = info;
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
    }
}

export default Category;
