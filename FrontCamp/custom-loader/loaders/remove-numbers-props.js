/**
 * Created by Yana_Zaitsava on 12/10/2017.
 */
module.exports = function(source){
    var arr = typeof source === "string" ? JSON.parse(source) : source;
    arr = arr.map(function (item) {
        for(let prop in item) {
            if (typeof item[prop] === 'number') {
                delete item[prop];
            }
        }
        return item;
    });
    return JSON.stringify(arr);
}