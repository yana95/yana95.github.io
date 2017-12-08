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