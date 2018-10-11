(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["watchProps"] = factory(require("react"));
	else
		root["watchProps"] = factory(root["React"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WatchComponentCreator; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



function getParams(state) {
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var watch = state.__watchObject;
  if (watch && (typeof watch === 'undefined' ? 'undefined' : _typeof(watch)) === 'object') {
    var params = {};
    Object.keys(watch).forEach(function (key) {
      params[key] = props[key];
    });
    return params;
  }
}

function shallowEqual() {
  var data1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var data2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var keys = Object.keys(data1);
  for (var i in keys) {
    var key = keys[i];
    if (data1[key] !== data2[key]) {
      return false;
    }
  }
  return true;
}

function checkReactGt163() {
  var versions = react__WEBPACK_IMPORTED_MODULE_0___default.a.version.split('.');
  if (versions[0] > 16) return true;
  if (versions[0] == 16 && versions[1] >= 3) {
    return true;
  }
  return false;
}

function handleReactGt163(WatchComponent) {
  WatchComponent.prototype.componentDidUpdate = function (prevProps) {
    var _this = this;

    var params = this.state.__watchState;
    var watchObject = this.state.__watchObject;
    if (!watchObject || !params) {
      return;
    }
    Object.keys(watchObject).forEach(function (key) {
      if (params[key] !== prevProps[key]) {
        if (watchObject[key] && typeof watchObject[key] === 'function') {
          watchObject[key].call(_this.child, params[key], prevProps[key]);
        }
      }
    });
  };

  WatchComponent.getDerivedStateFromProps = function (nextProps, prevState) {
    var params = getParams(prevState, nextProps);
    var __watchObject = prevState.__watchObject;
    if (!params || !__watchObject) {
      return null;
    }
    if (!prevState.__watchState) {
      return {
        __watchState: params
      };
    } else if (!shallowEqual(params, prevState.__watchState)) {
      return {
        __watchState: params
      };
    }
    return null;
  };
}

function handleReactLt163(WatchComponent) {
  WatchComponent.prototype.componentWillReceiveProps = function (nextProps) {
    var _this2 = this;

    if (!this.state.__watchObject) return;
    var watchObject = this.state.__watchObject;
    Object.keys(watchObject).forEach(function (key) {
      if (_this2.props[key] !== nextProps[key]) {
        watchObject[key].call(_this2.child, nextProps[key], _this2.props[key]);
      }
    });
  };
}

function WatchComponentCreator(WrappedComponent) {
  var WatchComponent = function (_React$PureComponent) {
    _inherits(WatchComponent, _React$PureComponent);

    function WatchComponent(props) {
      _classCallCheck(this, WatchComponent);

      var _this3 = _possibleConstructorReturn(this, (WatchComponent.__proto__ || Object.getPrototypeOf(WatchComponent)).call(this, props));

      _this3.state = {};
      return _this3;
    }

    _createClass(WatchComponent, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        var watch = this.child.watch;
        if (watch) {
          if (typeof watch === 'function') {
            this.setState({
              __watchObject: watch.call(this.child)
            });
          } else if ((typeof watch === 'undefined' ? 'undefined' : _typeof(watch)) === 'object') {
            this.setState({
              __watchObject: watch
            });
          }
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var _this4 = this;

        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrappedComponent, Object.assign({ ref: function ref(child) {
            return _this4.child = child;
          } }, this.props));
      }
    }]);

    return WatchComponent;
  }(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);

  if (checkReactGt163()) {
    handleReactGt163(WatchComponent);
  } else {
    handleReactLt163(WatchComponent);
  }

  return WatchComponent;
}

/***/ })
/******/ ]);
});