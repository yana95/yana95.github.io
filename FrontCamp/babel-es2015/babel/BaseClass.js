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