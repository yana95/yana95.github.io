/**
 * Created by Yana_Zaitsava on 11/24/2017.
 */
import constants from './constants.js';
class Article{  //Using ES6 extends
    constructor ( info){
        this.info = info;
        this.el = document.createElement('li');
    }
    template(){
        let date = new Date(this.info.publishedAt);
        date = `${date.getDay()}-${date.getMonth()}-${date.getFullYear()}`;
        const { urlToImage, title, description, url } = this.info;  //Using ES6 extends destructuring assignment
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
}

export default Article;
