"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Created by Yana_Zaitsava on 11/26/2017.
 */

var getItems = function getItems(url) {
  var promise = fetch(url); //Using ES6 fetch
  return promise.then(function (res) {
    return res.json();
  }); //Using ES6 promise
};

exports.default = getItems;