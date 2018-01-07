let tmpCategory = function (name, category, description) {
    return `
            <h2>${name}</h2>
            <span>${category}</span>
            <p>${description}</p>
        `
};
let tmpArticle = function (urlToImage, title, description, url, date) {
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
};
let isString = function (value) {
    return typeof value == 'string';
};
let Decorator = function (f, checker) {
    return function () {
        for( let i = 0; i< arguments.length; i++){
            if( !checker(arguments[i]) ){
                alert('Неверный тип параметра');
                return;
            }
        }
        return f.apply(this, arguments);
    }
};
const templates = {
    'article': Decorator(tmpArticle, isString),
    'category': Decorator(tmpCategory, isString)
};
const Factory = function (type) {
    return templates[type];
}
export default Factory;