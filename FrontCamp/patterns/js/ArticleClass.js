/**
 * Created by Yana_Zaitsava on 11/24/2017.
 */
import Factory from './tmpFactory';
function Article(info) {
    this.info = info;
    this.el = document.createElement('li');
}
Article.prototype = {
    template: function () {
        let date = new Date(this.info.publishedAt);
        date = `${date.getDay()}-${date.getMonth()}-${date.getFullYear()}`;
        const { urlToImage, title, description, url } = this.info;  //Using ES6 extends destructuring assignment
        let tmp = Factory('article');
        return tmp(urlToImage, title, description, url, date);
    }
};

export default Article;