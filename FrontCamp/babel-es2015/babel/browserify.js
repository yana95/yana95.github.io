(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _CategoryClass = require('./CategoryClass.js');

var _CategoryClass2 = _interopRequireDefault(_CategoryClass);

var _BaseClass2 = require('./BaseClass.js');

var _BaseClass3 = _interopRequireDefault(_BaseClass2);

var _getItems = require('./getItems.js');

var _getItems2 = _interopRequireDefault(_getItems);

var _constants = require('./constants.js');

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Yana_Zaitsava on 11/24/2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
//Using ES6 modules


var allChannelsHandler = function allChannelsHandler() {
    //Using ES6 arrow function
    var button = document.getElementById('all-channels');
    button.addEventListener('click', function () {
        document.getElementById('categories').className = 'categories';
        document.getElementById('articles').className = 'hide';
        document.getElementById('channel-name').innerHTML = '';
    });
};

var App = function (_BaseClass) {
    _inherits(App, _BaseClass);

    function App() {
        _classCallCheck(this, App);

        var parentNode = document.getElementById('categories');

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, parentNode));

        parentNode = document.getElementById('articles');
        (0, _getItems2.default)(_constants2.default.CATEGORIES + '?language=' + _constants2.default.LANGUAGE + '&country=' + _constants2.default.COUNTRY + '&apiKey=' + _constants2.default.API_KEY).then(function (data) {
            _this.promiseHandler(data, parentNode);
        });
        allChannelsHandler();
        return _this;
    }

    _createClass(App, [{
        key: 'promiseHandler',
        value: function promiseHandler(data, parentNode) {
            this.items = data.sources.map(function (item) {
                return new _CategoryClass2.default(parentNode, item);
            });
            this.render();
        }
    }]);

    return App;
}(_BaseClass3.default);

exports.default = App;
},{"./BaseClass.js":3,"./CategoryClass.js":4,"./constants.js":5,"./getItems.js":6}],2:[function(require,module,exports){
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
},{"./constants.js":5}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by Yana_Zaitsava on 11/24/2017.
 */

var BaseClass = function () {
    //Using ES6 classes
    function BaseClass(parentNode) {
        _classCallCheck(this, BaseClass);

        this.parentNode = parentNode;
        this.items = [];
        this.el = document.createElement('li');
    }

    _createClass(BaseClass, [{
        key: 'render',
        value: function render() {
            var _this = this;

            this.parentNode.innerHTML = '';
            this.items.map(function (item) {
                item.el.innerHTML = item.template();
                item.info.id && item.el.setAttribute('id', item.info.id);
                _this.mountTo(item.el);
            });
        }
    }, {
        key: 'mountTo',
        value: function mountTo(node) {
            this.parentNode.appendChild(node);
        }
    }]);

    return BaseClass;
}();

exports.default = BaseClass;
},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ArticleClass = require('./ArticleClass.js');

var _ArticleClass2 = _interopRequireDefault(_ArticleClass);

var _BaseClass2 = require('./BaseClass.js');

var _BaseClass3 = _interopRequireDefault(_BaseClass2);

var _constants = require('./constants.js');

var _constants2 = _interopRequireDefault(_constants);

var _getItems = require('./getItems.js');

var _getItems2 = _interopRequireDefault(_getItems);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Yana_Zaitsava on 11/24/2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Category = function (_BaseClass) {
    _inherits(Category, _BaseClass);

    function Category(parentNode, info) {
        _classCallCheck(this, Category);

        var _this = _possibleConstructorReturn(this, (Category.__proto__ || Object.getPrototypeOf(Category)).call(this, parentNode));

        _this.info = info;
        _this.el.addEventListener('click', _this.clickHandler.bind(_this));
        return _this;
    }

    _createClass(Category, [{
        key: 'template',
        value: function template() {
            var _info = this.info,
                name = _info.name,
                category = _info.category,
                description = _info.description;

            return '\n            <h2>' + name + '</h2>\n            <span>' + category + '</span>\n            <p>' + description + '</p>\n        ';
        }
    }, {
        key: 'clickHandler',
        value: function clickHandler() {
            var _this2 = this;

            this.items = [];
            document.getElementById('categories').className = 'hide';
            document.getElementById('channel-name').innerHTML = '<span>' + this.info.name + '</span> <span>channel</span>';
            (0, _getItems2.default)(_constants2.default.ARTICLES + '?sources=' + this.info.id + '&apiKey=' + _constants2.default.API_KEY).then(function (data) {
                data.articles.map(function (item) {
                    var article = new _ArticleClass2.default(item);
                    _this2.items.push(article);
                });
                _this2.render();
                _this2.parentNode.className = 'articles';
            });
        }
    }]);

    return Category;
}(_BaseClass3.default);

exports.default = Category;
},{"./ArticleClass.js":2,"./BaseClass.js":3,"./constants.js":5,"./getItems.js":6}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var options = {
    API_KEY: '4436d03d090d45e5852dba4176de1e91',
    ARTICLES: 'https://newsapi.org/v2/everything',
    CATEGORIES: 'https://newsapi.org/v2/sources',
    LANGUAGE: 'en',
    COUNTRY: 'gb'
};

exports.default = options;
},{}],6:[function(require,module,exports){
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
},{}],7:[function(require,module,exports){
'use strict';

var _App = require('./App.js');

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _App2.default();
},{"./App.js":1}]},{},[7]);
