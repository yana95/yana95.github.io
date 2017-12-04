/**
 * Created by Yana_Zaitsava on 11/26/2017.
 */
 import 'whatwg-fetch';

module.exports = (url) => {
    const promise = fetch(url);    //Using ES6 fetch
    return promise.then((res) => res.json()); //Using ES6 promise
}