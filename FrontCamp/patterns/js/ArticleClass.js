/**
 * Created by Yana_Zaitsava on 11/24/2017.
 */
import Factory from './tmpFactory';
class Article{  //Using ES6 extends
    constructor ( info){
        this.info = info;
        this.el = document.createElement('li');
    }
    template(){
        let date = new Date(this.info.publishedAt);
        date = `${date.getDay()}-${date.getMonth()}-${date.getFullYear()}`;
        const { urlToImage, title, description, url } = this.info;  //Using ES6 extends destructuring assignment
        const tmp = Factory('article');
        return tmp(urlToImage, title, description, url, date);
    }
}

export default Article;