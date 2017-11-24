/**
 * Created by Yana_Zaitsava on 11/24/2017.
 */
import BaseClass from './BaseClass.js';
class Articles extends  BaseClass{  //Using ES6 extends
    constructor (type, id){
        super(type);
        this.id = id;
        this.ul.className = 'articles';
    }
    getArticles(){
        this.getItems(`https://newsapi.org/v2/everything?sources=${this.id}&apiKey=4436d03d090d45e5852dba4176de1e91`)   //Using ES6 string templates
            .then((data) => {
                this.items = data.articles;
                this.renderItems(this.template);
            });
    }
    template(res){
        let date = new Date(res.publishedAt);
        date = `${date.getDay()}-${date.getMonth()}-${date.getFullYear()}`;
        let { urlToImage, title, description, url } = res;  //Using ES6 extends destructuring assignment
        return `
                <div class="img-container">
                    <img src="${urlToImage}" />
                </div>
                <div class="content clearfix">
                    <h3>${title}</h3>
                    <span>${date}</span>
                    <p>${description}</p>
                    <a href="${url}" target="_blank">Read more</a>
                </div> 
            `
    }
    static destroy(){   //Using ES6 static method
        document.getElementById('articles').innerHTML = '';
    }
}

export default Articles;
