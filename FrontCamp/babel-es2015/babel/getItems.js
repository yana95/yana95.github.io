"use strict";

/**
 * Created by Yana_Zaitsava on 11/26/2017.
 */

module.exports = function (url) {
  var promise = fetch(url); //Using ES6 fetch
  return promise.then(function (res) {
    return res.json();
  }); //Using ES6 promise
};