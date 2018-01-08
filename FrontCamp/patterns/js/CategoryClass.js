/**
 * Created by Yana_Zaitsava on 11/24/2017.
 */

import BaseClass from './BaseClass';
import Factory from './tmpFactory';
import Iterator from './iterator';
import singleton from './singletone';
import Article from './ArticleClass';

class Category extends BaseClass {
    constructor (parentNode, info){
        super(parentNode);
        this.info = info;
        this.el.addEventListener('click', this.clickHandler.bind(this));
        this.cache = singleton.getInstance();
    }
    template(){
        const { name, category, description } = this.info;
        const tmp = Factory('category');
        return tmp(name, category, description);
    }
    clickHandler(){
        import(/* webpackChunkName: "ArticleClass" */
            /* webpackMode: "lazy" */ './ArticleClass').then(module => {
            console.log("Lazy loading");
            const Article = module.default;
            this.items = [];
            document.getElementById('categories').className = 'hide';
            document.getElementById('channel-name').innerHTML = `<span>${this.info.name}</span> <span>channel</span>`;
            let articles = this.cache.getArticles(this.info.id);
            if( typeof articles.then == 'function'){
                articles.then( ()=>{
                    let articles = this.cache.getArticles(this.info.id);
                    this.createArticles(articles);
                });
            } else{
                this.createArticles(articles);
            };
        });
    }
    createArticles(articles){
        const iterator = new Iterator(articles);
        iterator.each((item) => {
            const article = new Article(item);
            this.items.push(article);
        });
        this.render();
        this.parentNode.className = 'articles';
    }
}

export  default  Category;
