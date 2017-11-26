/**
 * Created by Yana_Zaitsava on 11/26/2017.
 */

export default (url) => {
    let promise = fetch(url);    //Using ES6 fetch
    return promise.then((res) => res.json()); //Using ES6 promise
}
