'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by Yana_Zaitsava on 11/24/2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _constants = require('./constants.js');

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Article = function () {
    //Using ES6 extends
    function Article(info) {
        _classCallCheck(this, Article);

        this.info = info;
        this.el = document.createElement('li');
    }

    _createClass(Article, [{
        key: 'template',
        value: function template() {
            var date = new Date(this.info.publishedAt);
            date = date.getDay() + '-' + date.getMonth() + '-' + date.getFullYear();
            var _info = this.info,
                urlToImage = _info.urlToImage,
                title = _info.title,
                description = _info.description,
                url = _info.url; //Using ES6 extends destructuring assignment

            return '\n                <div class="img-container">\n                    <img src="' + urlToImage + '" />\n                </div>\n                <div class="content clearfix">\n                    <h3>' + title + '</h3>\n                    <span>' + date + '</span>\n                    <p>' + description + '</p>\n                    <a href="' + url + '" target="_blank">Read more</a>\n                </div> \n            ';
        }
    }]);

    return Article;
}();

exports.default = Article;