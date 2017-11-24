/**
 * Created by Yana_Zaitsava on 11/24/2017.
 */
import Articles from './ArticlesClass.js';
import BaseClass from './BaseClass.js';

class Categories extends BaseClass {
    constructor (){
        super('categories')
    }
    getCategories(){
        this.getItems('https://newsapi.org/v2/sources?language=en&country=gb&apiKey=4436d03d090d45e5852dba4176de1e91')
            .then((data) => {
                this.items = data.sources;
                this.renderItems(this.template);
                this.addClickHandler();
            });
    }
    template(res){
        let { name, category, description } = res;
        return `
            <h2>${name}</h2>
            <span>${category}</span>
            <p>${description}</p>
        `
    }
    addClickHandler(){
        let catArray = this.ul.childNodes;
        for(let i = 0; i<catArray.length; i++){
            catArray[i].addEventListener('click', (e, item = this.items[i]) => {
                Articles.destroy();
                this.ul.className = 'hide';
                document.getElementById('channel-name').innerHTML = `<span>${item.name}</span> <span>channel</span>`;
                let articles = new Articles('articles', item.id);
                articles.getArticles();
            });
        }
    }
}

export default Categories;
