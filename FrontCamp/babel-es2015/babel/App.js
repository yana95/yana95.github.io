'use strict';

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

module.exports = function (_BaseClass) {
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