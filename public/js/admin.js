/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/svelte-material-icons/BookMultiple.svelte":
/*!****************************************************************!*\
  !*** ./node_modules/svelte-material-icons/BookMultiple.svelte ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* node_modules/svelte-material-icons/BookMultiple.svelte generated by Svelte v3.50.1 */


function create_fragment(ctx) {
  var svg;
  var path;
  return {
    c: function c() {
      svg = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.svg_element)("svg");
      path = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.svg_element)("path");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(path, "d", "M19,18H9A2,2 0 0,1 7,16V4A2,2 0 0,1 9,2H10V7L12,5.5L14,7V2H19A2,2 0 0,1 21,4V16A2,2 0 0,1 19,18M17,20V22H5A2,2 0 0,1 3,20V6H5V20H17Z");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(path, "fill",
      /*color*/
      ctx[2]);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(svg, "width",
      /*width*/
      ctx[0]);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(svg, "height",
      /*height*/
      ctx[1]);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(svg, "viewBox",
      /*viewBox*/
      ctx[3]);
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, svg, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(svg, path);
    },
    p: function p(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (dirty &
      /*color*/
      4) {
        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(path, "fill",
        /*color*/
        ctx[2]);
      }

      if (dirty &
      /*width*/
      1) {
        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(svg, "width",
        /*width*/
        ctx[0]);
      }

      if (dirty &
      /*height*/
      2) {
        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(svg, "height",
        /*height*/
        ctx[1]);
      }

      if (dirty &
      /*viewBox*/
      8) {
        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(svg, "viewBox",
        /*viewBox*/
        ctx[3]);
      }
    },
    i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
    o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(svg);
    }
  };
}

function instance($$self, $$props, $$invalidate) {
  var _$$props$size = $$props.size,
      size = _$$props$size === void 0 ? "1em" : _$$props$size;
  var _$$props$width = $$props.width,
      width = _$$props$width === void 0 ? size : _$$props$width;
  var _$$props$height = $$props.height,
      height = _$$props$height === void 0 ? size : _$$props$height;
  var _$$props$color = $$props.color,
      color = _$$props$color === void 0 ? "currentColor" : _$$props$color;
  var _$$props$viewBox = $$props.viewBox,
      viewBox = _$$props$viewBox === void 0 ? "0 0 24 24" : _$$props$viewBox;

  $$self.$$set = function ($$props) {
    if ('size' in $$props) $$invalidate(4, size = $$props.size);
    if ('width' in $$props) $$invalidate(0, width = $$props.width);
    if ('height' in $$props) $$invalidate(1, height = $$props.height);
    if ('color' in $$props) $$invalidate(2, color = $$props.color);
    if ('viewBox' in $$props) $$invalidate(3, viewBox = $$props.viewBox);
  };

  return [width, height, color, viewBox, size];
}

var BookMultiple = /*#__PURE__*/function (_SvelteComponent) {
  _inherits(BookMultiple, _SvelteComponent);

  var _super = _createSuper(BookMultiple);

  function BookMultiple(options) {
    var _this;

    _classCallCheck(this, BookMultiple);

    _this = _super.call(this);
    (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(_assertThisInitialized(_this), options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, {
      size: 4,
      width: 0,
      height: 1,
      color: 2,
      viewBox: 3
    });
    return _this;
  }

  return _createClass(BookMultiple);
}(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BookMultiple);

/***/ }),

/***/ "./node_modules/svelte-material-icons/ContentSave.svelte":
/*!***************************************************************!*\
  !*** ./node_modules/svelte-material-icons/ContentSave.svelte ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* node_modules/svelte-material-icons/ContentSave.svelte generated by Svelte v3.50.1 */


function create_fragment(ctx) {
  var svg;
  var path;
  return {
    c: function c() {
      svg = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.svg_element)("svg");
      path = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.svg_element)("path");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(path, "d", "M15,9H5V5H15M12,19A3,3 0 0,1 9,16A3,3 0 0,1 12,13A3,3 0 0,1 15,16A3,3 0 0,1 12,19M17,3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V7L17,3Z");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(path, "fill",
      /*color*/
      ctx[2]);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(svg, "width",
      /*width*/
      ctx[0]);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(svg, "height",
      /*height*/
      ctx[1]);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(svg, "viewBox",
      /*viewBox*/
      ctx[3]);
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, svg, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(svg, path);
    },
    p: function p(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (dirty &
      /*color*/
      4) {
        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(path, "fill",
        /*color*/
        ctx[2]);
      }

      if (dirty &
      /*width*/
      1) {
        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(svg, "width",
        /*width*/
        ctx[0]);
      }

      if (dirty &
      /*height*/
      2) {
        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(svg, "height",
        /*height*/
        ctx[1]);
      }

      if (dirty &
      /*viewBox*/
      8) {
        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(svg, "viewBox",
        /*viewBox*/
        ctx[3]);
      }
    },
    i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
    o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(svg);
    }
  };
}

function instance($$self, $$props, $$invalidate) {
  var _$$props$size = $$props.size,
      size = _$$props$size === void 0 ? "1em" : _$$props$size;
  var _$$props$width = $$props.width,
      width = _$$props$width === void 0 ? size : _$$props$width;
  var _$$props$height = $$props.height,
      height = _$$props$height === void 0 ? size : _$$props$height;
  var _$$props$color = $$props.color,
      color = _$$props$color === void 0 ? "currentColor" : _$$props$color;
  var _$$props$viewBox = $$props.viewBox,
      viewBox = _$$props$viewBox === void 0 ? "0 0 24 24" : _$$props$viewBox;

  $$self.$$set = function ($$props) {
    if ('size' in $$props) $$invalidate(4, size = $$props.size);
    if ('width' in $$props) $$invalidate(0, width = $$props.width);
    if ('height' in $$props) $$invalidate(1, height = $$props.height);
    if ('color' in $$props) $$invalidate(2, color = $$props.color);
    if ('viewBox' in $$props) $$invalidate(3, viewBox = $$props.viewBox);
  };

  return [width, height, color, viewBox, size];
}

var ContentSave = /*#__PURE__*/function (_SvelteComponent) {
  _inherits(ContentSave, _SvelteComponent);

  var _super = _createSuper(ContentSave);

  function ContentSave(options) {
    var _this;

    _classCallCheck(this, ContentSave);

    _this = _super.call(this);
    (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(_assertThisInitialized(_this), options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, {
      size: 4,
      width: 0,
      height: 1,
      color: 2,
      viewBox: 3
    });
    return _this;
  }

  return _createClass(ContentSave);
}(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContentSave);

/***/ }),

/***/ "./node_modules/svelte-material-icons/Eye.svelte":
/*!*******************************************************!*\
  !*** ./node_modules/svelte-material-icons/Eye.svelte ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* node_modules/svelte-material-icons/Eye.svelte generated by Svelte v3.50.1 */


function create_fragment(ctx) {
  var svg;
  var path;
  return {
    c: function c() {
      svg = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.svg_element)("svg");
      path = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.svg_element)("path");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(path, "d", "M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(path, "fill",
      /*color*/
      ctx[2]);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(svg, "width",
      /*width*/
      ctx[0]);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(svg, "height",
      /*height*/
      ctx[1]);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(svg, "viewBox",
      /*viewBox*/
      ctx[3]);
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, svg, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(svg, path);
    },
    p: function p(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (dirty &
      /*color*/
      4) {
        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(path, "fill",
        /*color*/
        ctx[2]);
      }

      if (dirty &
      /*width*/
      1) {
        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(svg, "width",
        /*width*/
        ctx[0]);
      }

      if (dirty &
      /*height*/
      2) {
        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(svg, "height",
        /*height*/
        ctx[1]);
      }

      if (dirty &
      /*viewBox*/
      8) {
        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(svg, "viewBox",
        /*viewBox*/
        ctx[3]);
      }
    },
    i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
    o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(svg);
    }
  };
}

function instance($$self, $$props, $$invalidate) {
  var _$$props$size = $$props.size,
      size = _$$props$size === void 0 ? "1em" : _$$props$size;
  var _$$props$width = $$props.width,
      width = _$$props$width === void 0 ? size : _$$props$width;
  var _$$props$height = $$props.height,
      height = _$$props$height === void 0 ? size : _$$props$height;
  var _$$props$color = $$props.color,
      color = _$$props$color === void 0 ? "currentColor" : _$$props$color;
  var _$$props$viewBox = $$props.viewBox,
      viewBox = _$$props$viewBox === void 0 ? "0 0 24 24" : _$$props$viewBox;

  $$self.$$set = function ($$props) {
    if ('size' in $$props) $$invalidate(4, size = $$props.size);
    if ('width' in $$props) $$invalidate(0, width = $$props.width);
    if ('height' in $$props) $$invalidate(1, height = $$props.height);
    if ('color' in $$props) $$invalidate(2, color = $$props.color);
    if ('viewBox' in $$props) $$invalidate(3, viewBox = $$props.viewBox);
  };

  return [width, height, color, viewBox, size];
}

var Eye = /*#__PURE__*/function (_SvelteComponent) {
  _inherits(Eye, _SvelteComponent);

  var _super = _createSuper(Eye);

  function Eye(options) {
    var _this;

    _classCallCheck(this, Eye);

    _this = _super.call(this);
    (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(_assertThisInitialized(_this), options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, {
      size: 4,
      width: 0,
      height: 1,
      color: 2,
      viewBox: 3
    });
    return _this;
  }

  return _createClass(Eye);
}(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Eye);

/***/ }),

/***/ "./node_modules/svelte-material-icons/Logout.svelte":
/*!**********************************************************!*\
  !*** ./node_modules/svelte-material-icons/Logout.svelte ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* node_modules/svelte-material-icons/Logout.svelte generated by Svelte v3.50.1 */


function create_fragment(ctx) {
  var svg;
  var path;
  return {
    c: function c() {
      svg = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.svg_element)("svg");
      path = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.svg_element)("path");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(path, "d", "M16,17V14H9V10H16V7L21,12L16,17M14,2A2,2 0 0,1 16,4V6H14V4H5V20H14V18H16V20A2,2 0 0,1 14,22H5A2,2 0 0,1 3,20V4A2,2 0 0,1 5,2H14Z");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(path, "fill",
      /*color*/
      ctx[2]);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(svg, "width",
      /*width*/
      ctx[0]);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(svg, "height",
      /*height*/
      ctx[1]);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(svg, "viewBox",
      /*viewBox*/
      ctx[3]);
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, svg, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(svg, path);
    },
    p: function p(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (dirty &
      /*color*/
      4) {
        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(path, "fill",
        /*color*/
        ctx[2]);
      }

      if (dirty &
      /*width*/
      1) {
        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(svg, "width",
        /*width*/
        ctx[0]);
      }

      if (dirty &
      /*height*/
      2) {
        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(svg, "height",
        /*height*/
        ctx[1]);
      }

      if (dirty &
      /*viewBox*/
      8) {
        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(svg, "viewBox",
        /*viewBox*/
        ctx[3]);
      }
    },
    i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
    o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(svg);
    }
  };
}

function instance($$self, $$props, $$invalidate) {
  var _$$props$size = $$props.size,
      size = _$$props$size === void 0 ? "1em" : _$$props$size;
  var _$$props$width = $$props.width,
      width = _$$props$width === void 0 ? size : _$$props$width;
  var _$$props$height = $$props.height,
      height = _$$props$height === void 0 ? size : _$$props$height;
  var _$$props$color = $$props.color,
      color = _$$props$color === void 0 ? "currentColor" : _$$props$color;
  var _$$props$viewBox = $$props.viewBox,
      viewBox = _$$props$viewBox === void 0 ? "0 0 24 24" : _$$props$viewBox;

  $$self.$$set = function ($$props) {
    if ('size' in $$props) $$invalidate(4, size = $$props.size);
    if ('width' in $$props) $$invalidate(0, width = $$props.width);
    if ('height' in $$props) $$invalidate(1, height = $$props.height);
    if ('color' in $$props) $$invalidate(2, color = $$props.color);
    if ('viewBox' in $$props) $$invalidate(3, viewBox = $$props.viewBox);
  };

  return [width, height, color, viewBox, size];
}

var Logout = /*#__PURE__*/function (_SvelteComponent) {
  _inherits(Logout, _SvelteComponent);

  var _super = _createSuper(Logout);

  function Logout(options) {
    var _this;

    _classCallCheck(this, Logout);

    _this = _super.call(this);
    (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(_assertThisInitialized(_this), options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, {
      size: 4,
      width: 0,
      height: 1,
      color: 2,
      viewBox: 3
    });
    return _this;
  }

  return _createClass(Logout);
}(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Logout);

/***/ }),

/***/ "./node_modules/svelte-material-icons/PlusCircle.svelte":
/*!**************************************************************!*\
  !*** ./node_modules/svelte-material-icons/PlusCircle.svelte ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* node_modules/svelte-material-icons/PlusCircle.svelte generated by Svelte v3.50.1 */


function create_fragment(ctx) {
  var svg;
  var path;
  return {
    c: function c() {
      svg = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.svg_element)("svg");
      path = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.svg_element)("path");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(path, "d", "M17,13H13V17H11V13H7V11H11V7H13V11H17M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(path, "fill",
      /*color*/
      ctx[2]);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(svg, "width",
      /*width*/
      ctx[0]);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(svg, "height",
      /*height*/
      ctx[1]);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(svg, "viewBox",
      /*viewBox*/
      ctx[3]);
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, svg, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(svg, path);
    },
    p: function p(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (dirty &
      /*color*/
      4) {
        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(path, "fill",
        /*color*/
        ctx[2]);
      }

      if (dirty &
      /*width*/
      1) {
        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(svg, "width",
        /*width*/
        ctx[0]);
      }

      if (dirty &
      /*height*/
      2) {
        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(svg, "height",
        /*height*/
        ctx[1]);
      }

      if (dirty &
      /*viewBox*/
      8) {
        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(svg, "viewBox",
        /*viewBox*/
        ctx[3]);
      }
    },
    i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
    o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(svg);
    }
  };
}

function instance($$self, $$props, $$invalidate) {
  var _$$props$size = $$props.size,
      size = _$$props$size === void 0 ? "1em" : _$$props$size;
  var _$$props$width = $$props.width,
      width = _$$props$width === void 0 ? size : _$$props$width;
  var _$$props$height = $$props.height,
      height = _$$props$height === void 0 ? size : _$$props$height;
  var _$$props$color = $$props.color,
      color = _$$props$color === void 0 ? "currentColor" : _$$props$color;
  var _$$props$viewBox = $$props.viewBox,
      viewBox = _$$props$viewBox === void 0 ? "0 0 24 24" : _$$props$viewBox;

  $$self.$$set = function ($$props) {
    if ('size' in $$props) $$invalidate(4, size = $$props.size);
    if ('width' in $$props) $$invalidate(0, width = $$props.width);
    if ('height' in $$props) $$invalidate(1, height = $$props.height);
    if ('color' in $$props) $$invalidate(2, color = $$props.color);
    if ('viewBox' in $$props) $$invalidate(3, viewBox = $$props.viewBox);
  };

  return [width, height, color, viewBox, size];
}

var PlusCircle = /*#__PURE__*/function (_SvelteComponent) {
  _inherits(PlusCircle, _SvelteComponent);

  var _super = _createSuper(PlusCircle);

  function PlusCircle(options) {
    var _this;

    _classCallCheck(this, PlusCircle);

    _this = _super.call(this);
    (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(_assertThisInitialized(_this), options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, {
      size: 4,
      width: 0,
      height: 1,
      color: 2,
      viewBox: 3
    });
    return _this;
  }

  return _createClass(PlusCircle);
}(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlusCircle);

/***/ }),

/***/ "./node_modules/svelte-material-icons/SquareEditOutline.svelte":
/*!*********************************************************************!*\
  !*** ./node_modules/svelte-material-icons/SquareEditOutline.svelte ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* node_modules/svelte-material-icons/SquareEditOutline.svelte generated by Svelte v3.50.1 */


function create_fragment(ctx) {
  var svg;
  var path;
  return {
    c: function c() {
      svg = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.svg_element)("svg");
      path = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.svg_element)("path");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(path, "d", "M5,3C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19H5V5H12V3H5M17.78,4C17.61,4 17.43,4.07 17.3,4.2L16.08,5.41L18.58,7.91L19.8,6.7C20.06,6.44 20.06,6 19.8,5.75L18.25,4.2C18.12,4.07 17.95,4 17.78,4M15.37,6.12L8,13.5V16H10.5L17.87,8.62L15.37,6.12Z");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(path, "fill",
      /*color*/
      ctx[2]);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(svg, "width",
      /*width*/
      ctx[0]);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(svg, "height",
      /*height*/
      ctx[1]);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(svg, "viewBox",
      /*viewBox*/
      ctx[3]);
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, svg, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(svg, path);
    },
    p: function p(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (dirty &
      /*color*/
      4) {
        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(path, "fill",
        /*color*/
        ctx[2]);
      }

      if (dirty &
      /*width*/
      1) {
        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(svg, "width",
        /*width*/
        ctx[0]);
      }

      if (dirty &
      /*height*/
      2) {
        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(svg, "height",
        /*height*/
        ctx[1]);
      }

      if (dirty &
      /*viewBox*/
      8) {
        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(svg, "viewBox",
        /*viewBox*/
        ctx[3]);
      }
    },
    i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
    o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(svg);
    }
  };
}

function instance($$self, $$props, $$invalidate) {
  var _$$props$size = $$props.size,
      size = _$$props$size === void 0 ? "1em" : _$$props$size;
  var _$$props$width = $$props.width,
      width = _$$props$width === void 0 ? size : _$$props$width;
  var _$$props$height = $$props.height,
      height = _$$props$height === void 0 ? size : _$$props$height;
  var _$$props$color = $$props.color,
      color = _$$props$color === void 0 ? "currentColor" : _$$props$color;
  var _$$props$viewBox = $$props.viewBox,
      viewBox = _$$props$viewBox === void 0 ? "0 0 24 24" : _$$props$viewBox;

  $$self.$$set = function ($$props) {
    if ('size' in $$props) $$invalidate(4, size = $$props.size);
    if ('width' in $$props) $$invalidate(0, width = $$props.width);
    if ('height' in $$props) $$invalidate(1, height = $$props.height);
    if ('color' in $$props) $$invalidate(2, color = $$props.color);
    if ('viewBox' in $$props) $$invalidate(3, viewBox = $$props.viewBox);
  };

  return [width, height, color, viewBox, size];
}

var SquareEditOutline = /*#__PURE__*/function (_SvelteComponent) {
  _inherits(SquareEditOutline, _SvelteComponent);

  var _super = _createSuper(SquareEditOutline);

  function SquareEditOutline(options) {
    var _this;

    _classCallCheck(this, SquareEditOutline);

    _this = _super.call(this);
    (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(_assertThisInitialized(_this), options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, {
      size: 4,
      width: 0,
      height: 1,
      color: 2,
      viewBox: 3
    });
    return _this;
  }

  return _createClass(SquareEditOutline);
}(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SquareEditOutline);

/***/ }),

/***/ "./src/admin/admin.svelte":
/*!********************************!*\
  !*** ./src/admin/admin.svelte ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/admin/menu.svelte");
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar */ "./src/admin/sidebar.svelte");
/* harmony import */ var _pages_books__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/books */ "./src/admin/pages/books.svelte");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* src/admin/admin.svelte generated by Svelte v3.50.1 */





function add_css(target) {
  (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append_styles)(target, "svelte-1sgxiqq", "main.svelte-1sgxiqq.svelte-1sgxiqq{margin:0 auto;max-width:90vw;box-shadow:0px 2px 5px 0px rgba(0,0,0,0.14) , 0px 1px 10px 0px rgba(0,0,0,0.12) , 0px 2px 4px -1px rgba(0,0,0,0.2)}.banner.svelte-1sgxiqq.svelte-1sgxiqq{padding:1rem;min-height:15rem;background-position:0rem -16rem}.banner.svelte-1sgxiqq h1.svelte-1sgxiqq{font-family:monospace;color:white;text-shadow:-2px 2px 0 #000,\n        2px 2px 0 #000,\n                 2px -2px 0 #000}");
} // (26:12) {#if !showBooks}


function create_if_block(ctx) {
  var books_1;
  var current;
  books_1 = new _pages_books__WEBPACK_IMPORTED_MODULE_3__["default"]({});
  return {
    c: function c() {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(books_1.$$.fragment);
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(books_1, target, anchor);
      current = true;
    },
    i: function i(local) {
      if (current) return;
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(books_1.$$.fragment, local);
      current = true;
    },
    o: function o(local) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(books_1.$$.fragment, local);
      current = false;
    },
    d: function d(detaching) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(books_1, detaching);
    }
  };
}

function create_fragment(ctx) {
  var main;
  var div0;
  var t1;
  var menu;
  var t2;
  var div2;
  var sidebar;
  var t3;
  var div1;
  var current;
  menu = new _menu__WEBPACK_IMPORTED_MODULE_1__["default"]({});
  sidebar = new _sidebar__WEBPACK_IMPORTED_MODULE_2__["default"]({});
  sidebar.$on("getBooks",
  /*getBooks*/
  ctx[1]);
  var if_block = !
  /*showBooks*/
  ctx[0] && create_if_block(ctx);
  return {
    c: function c() {
      main = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("main");
      div0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      div0.innerHTML = "<h1 class=\"svelte-1sgxiqq\">Welcome to your webcomic backend!</h1>";
      t1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(menu.$$.fragment);
      t2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      div2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(sidebar.$$.fragment);
      t3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      div1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      if (if_block) if_block.c();
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div0, "class", "banner flx middle svelte-1sgxiqq");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_style)(div0, "background-image", "url('storage/704375.png')");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_style)(div1, "width", "100%");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_style)(div1, "padding", "1rem");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div2, "class", "flx is-12");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(main, "class", "svelte-1sgxiqq");
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, main, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(main, div0);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(main, t1);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(menu, main, null);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(main, t2);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(main, div2);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(sidebar, div2, null);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, t3);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, div1);
      if (if_block) if_block.m(div1, null);
      current = true;
    },
    p: function p(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (!
      /*showBooks*/
      ctx[0]) {
        if (if_block) {
          if (dirty &
          /*showBooks*/
          1) {
            (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(if_block, 1);
          }
        } else {
          if_block = create_if_block(ctx);
          if_block.c();
          (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(if_block, 1);
          if_block.m(div1, null);
        }
      } else if (if_block) {
        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.group_outros)();
        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(if_block, 1, 1, function () {
          if_block = null;
        });
        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.check_outros)();
      }
    },
    i: function i(local) {
      if (current) return;
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(menu.$$.fragment, local);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(sidebar.$$.fragment, local);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(if_block);
      current = true;
    },
    o: function o(local) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(menu.$$.fragment, local);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(sidebar.$$.fragment, local);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(if_block);
      current = false;
    },
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(main);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(menu);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(sidebar);
      if (if_block) if_block.d();
    }
  };
}

function instance($$self, $$props, $$invalidate) {
  var books;
  var showBooks;

  function getBooks(_x) {
    return _getBooks.apply(this, arguments);
  }

  function _getBooks() {
    _getBooks = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(e) {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // body...
              $$invalidate(0, showBooks = !showBooks);
              books = undefined;
              console.log('lol getbooks ig.');

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _getBooks.apply(this, arguments);
  }

  return [showBooks, getBooks];
}

var Admin = /*#__PURE__*/function (_SvelteComponent) {
  _inherits(Admin, _SvelteComponent);

  var _super = _createSuper(Admin);

  function Admin(options) {
    var _this;

    _classCallCheck(this, Admin);

    _this = _super.call(this);
    (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(_assertThisInitialized(_this), options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, {}, add_css);
    return _this;
  }

  return _createClass(Admin);
}(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Admin);

/***/ }),

/***/ "./src/admin/menu.svelte":
/*!*******************************!*\
  !*** ./src/admin/menu.svelte ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../package.json */ "./package.json");
/* harmony import */ var svelte_material_icons_Logout_svelte__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! svelte-material-icons/Logout.svelte */ "./node_modules/svelte-material-icons/Logout.svelte");
/* harmony import */ var svelte_material_icons_Eye_svelte__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! svelte-material-icons/Eye.svelte */ "./node_modules/svelte-material-icons/Eye.svelte");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/* src/admin/menu.svelte generated by Svelte v3.50.1 */





function add_css(target) {
  (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append_styles)(target, "svelte-gqmlx5", ".title.svelte-gqmlx5{color:white;font-weight:bold}.menu.svelte-gqmlx5{background-color:#fca311}span.svelte-gqmlx5{margin-right:.25rem}a.svelte-gqmlx5{margin-right:1rem}");
}

function create_fragment(ctx) {
  var div2;
  var div0;
  var span0;
  var t1;
  var div1;
  var a0;
  var span1;
  var eye;
  var t2;
  var t3;
  var a1;
  var span2;
  var logout;
  var t4;
  var current;
  eye = new svelte_material_icons_Eye_svelte__WEBPACK_IMPORTED_MODULE_3__["default"]({
    props: {
      size: "1.25rem",
      color: "black"
    }
  });
  logout = new svelte_material_icons_Logout_svelte__WEBPACK_IMPORTED_MODULE_2__["default"]({
    props: {
      size: "1.25rem",
      color: "black"
    }
  });
  return {
    c: function c() {
      div2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      div0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      span0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("span");
      span0.textContent = "".concat(
      /*title*/
      ctx[0]);
      t1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      div1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      a0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("a");
      span1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("span");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(eye.$$.fragment);
      t2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)("View Site");
      t3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      a1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("a");
      span2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("span");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(logout.$$.fragment);
      t4 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)("Logout");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(span0, "class", "svelte-gqmlx5");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div0, "class", "title is-5 svelte-gqmlx5");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(span1, "class", "flx middle svelte-gqmlx5");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a0, "class", "flx(wrap) middle center is-1 svelte-gqmlx5");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a0, "href", "/");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(span2, "class", "flx middle svelte-gqmlx5");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a1, "class", "flx(wrap) middle center is-1 svelte-gqmlx5");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(a1, "href", "/logout");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div1, "class", "is-5 flx middle right");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div2, "class", "menu flx(wrap) middle space-between padme svelte-gqmlx5");
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div2, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, div0);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div0, span0);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, t1);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div2, div1);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div1, a0);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(a0, span1);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(eye, span1, null);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(a0, t2);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div1, t3);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div1, a1);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(a1, span2);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(logout, span2, null);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(a1, t4);
      current = true;
    },
    p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
    i: function i(local) {
      if (current) return;
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(eye.$$.fragment, local);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(logout.$$.fragment, local);
      current = true;
    },
    o: function o(local) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(eye.$$.fragment, local);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(logout.$$.fragment, local);
      current = false;
    },
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div2);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(eye);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(logout);
    }
  };
}

function instance($$self) {
  var title = "Chiho CMS ".concat(_package_json__WEBPACK_IMPORTED_MODULE_1__.version);
  return [title];
}

var Menu = /*#__PURE__*/function (_SvelteComponent) {
  _inherits(Menu, _SvelteComponent);

  var _super = _createSuper(Menu);

  function Menu(options) {
    var _this;

    _classCallCheck(this, Menu);

    _this = _super.call(this);
    (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(_assertThisInitialized(_this), options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, {}, add_css);
    return _this;
  }

  return _createClass(Menu);
}(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Menu);

/***/ }),

/***/ "./src/admin/pages/books.svelte":
/*!**************************************!*\
  !*** ./src/admin/pages/books.svelte ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var svelte_material_icons_SquareEditOutline_svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte-material-icons/SquareEditOutline.svelte */ "./node_modules/svelte-material-icons/SquareEditOutline.svelte");
/* harmony import */ var svelte_material_icons_ContentSave_svelte__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! svelte-material-icons/ContentSave.svelte */ "./node_modules/svelte-material-icons/ContentSave.svelte");
/* harmony import */ var svelte__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! svelte */ "./node_modules/svelte/index.mjs");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* src/admin/pages/books.svelte generated by Svelte v3.50.1 */





function add_css(target) {
  (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append_styles)(target, "svelte-19g86li", ".dropdown.svelte-19g86li.svelte-19g86li{height:2.5rem;margin-bottom:1rem}.dropdown.svelte-19g86li>option.svelte-19g86li{padding:10px;font-size:18px;height:2.5rem}.grid-container.svelte-19g86li.svelte-19g86li{display:grid;grid-template-columns:1fr 1fr 1fr;grid-auto-rows:auto;grid-row-gap:.5rem}.last-grid-item.svelte-19g86li.svelte-19g86li{grid-column-start:1;grid-column-end:4}.pagination.svelte-19g86li.svelte-19g86li{margin-left:.2rem}.pagination.svelte-19g86li.svelte-19g86li:hover{background-color:blue}input.svelte-19g86li.svelte-19g86li,input[placeholder].svelte-19g86li.svelte-19g86li{font-size:18px;text-align:center}.svelte-19g86li.svelte-19g86li{scrollbar-width:normal;scrollbar-color:hsl(203deg, 77%, 43%) #fefefe}.svelte-19g86li.svelte-19g86li::-webkit-scrollbar{width:1px}.svelte-19g86li.svelte-19g86li::-webkit-scrollbar-track{background:#fefefe}.svelte-19g86li.svelte-19g86li::-webkit-scrollbar-thumb{background-color:hsl(203deg, 77%, 43%);border-radius:20px;border:2px #fefefe solid}");
}

function get_each_context(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[21] = list[i];
  child_ctx[23] = i;
  return child_ctx;
}

function get_each_context_1(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[21] = list[i];
  return child_ctx;
}

function get_each_context_2(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[26] = list[i];
  child_ctx[23] = i;
  return child_ctx;
}

function get_each_context_3(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[26] = list[i];
  child_ctx[23] = i;
  return child_ctx;
}

function get_each_context_4(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[29] = list[i];
  return child_ctx;
} // (106:4) {:else}


function create_else_block(ctx) {
  var select;
  var option;
  var t1;
  var if_block_anchor;
  var current;
  var mounted;
  var dispose;
  var each_value_4 =
  /*books*/
  ctx[0];
  var each_blocks = [];

  for (var i = 0; i < each_value_4.length; i += 1) {
    each_blocks[i] = create_each_block_4(get_each_context_4(ctx, each_value_4, i));
  }

  var if_block =
  /*pages*/
  ctx[5] && create_if_block_1(ctx);
  return {
    c: function c() {
      select = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("select");
      option = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("option");
      option.textContent = "--choose book--";

      for (var _i = 0; _i < each_blocks.length; _i += 1) {
        each_blocks[_i].c();
      }

      t1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      if (if_block) if_block.c();
      if_block_anchor = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.empty)();
      option.selected = true;
      option.__value = "--choose book--";
      option.value = option.__value;
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(option, "class", "svelte-19g86li");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(select, "class", "is-half dropdown svelte-19g86li");
      if (
      /*selectedBook*/
      ctx[1] === void 0) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.add_render_callback)(function () {
        return (
          /*select_change_handler*/
          ctx[10].call(select)
        );
      });
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, select, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(select, option);

      for (var _i2 = 0; _i2 < each_blocks.length; _i2 += 1) {
        each_blocks[_i2].m(select, null);
      }

      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.select_option)(select,
      /*selectedBook*/
      ctx[1]);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, t1, anchor);
      if (if_block) if_block.m(target, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, if_block_anchor, anchor);
      current = true;

      if (!mounted) {
        dispose = [(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(select, "change",
        /*select_change_handler*/
        ctx[10]), (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(select, "change",
        /*change_handler*/
        ctx[11])];
        mounted = true;
      }
    },
    p: function p(ctx, dirty) {
      if (dirty[0] &
      /*books*/
      1) {
        each_value_4 =
        /*books*/
        ctx[0];

        var _i3;

        for (_i3 = 0; _i3 < each_value_4.length; _i3 += 1) {
          var child_ctx = get_each_context_4(ctx, each_value_4, _i3);

          if (each_blocks[_i3]) {
            each_blocks[_i3].p(child_ctx, dirty);
          } else {
            each_blocks[_i3] = create_each_block_4(child_ctx);

            each_blocks[_i3].c();

            each_blocks[_i3].m(select, null);
          }
        }

        for (; _i3 < each_blocks.length; _i3 += 1) {
          each_blocks[_i3].d(1);
        }

        each_blocks.length = each_value_4.length;
      }

      if (dirty[0] &
      /*selectedBook, books*/
      3) {
        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.select_option)(select,
        /*selectedBook*/
        ctx[1]);
      }

      if (
      /*pages*/
      ctx[5]) {
        if (if_block) {
          if_block.p(ctx, dirty);

          if (dirty[0] &
          /*pages*/
          32) {
            (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(if_block, 1);
          }
        } else {
          if_block = create_if_block_1(ctx);
          if_block.c();
          (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.group_outros)();
        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(if_block, 1, 1, function () {
          if_block = null;
        });
        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.check_outros)();
      }
    },
    i: function i(local) {
      if (current) return;
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(if_block);
      current = true;
    },
    o: function o(local) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(if_block);
      current = false;
    },
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(select);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_each)(each_blocks, detaching);
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(t1);
      if (if_block) if_block.d(detaching);
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(if_block_anchor);
      mounted = false;
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.run_all)(dispose);
    }
  };
} // (103:4) {#if !books}


function create_if_block(ctx) {
  var h3;
  var t1;
  var button;
  return {
    c: function c() {
      h3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("h3");
      h3.textContent = "no books yet!";
      t1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      button = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("button");
      button.textContent = "Create?";
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(h3, "class", "svelte-19g86li");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button, "class", "svelte-19g86li");
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, h3, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, t1, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, button, anchor);
    },
    p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
    i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
    o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(h3);
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(t1);
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(button);
    }
  };
} // (109:8) {#each books as book}


function create_each_block_4(ctx) {
  var option;
  var t_value =
  /*book*/
  ctx[29].title + "";
  var t;
  var option_value_value;
  return {
    c: function c() {
      option = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("option");
      t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(t_value);
      option.__value = option_value_value =
      /*book*/
      ctx[29].title;
      option.value = option.__value;
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(option, "class", "svelte-19g86li");
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, option, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(option, t);
    },
    p: function p(ctx, dirty) {
      if (dirty[0] &
      /*books*/
      1 && t_value !== (t_value =
      /*book*/
      ctx[29].title + "")) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_data)(t, t_value);

      if (dirty[0] &
      /*books*/
      1 && option_value_value !== (option_value_value =
      /*book*/
      ctx[29].title)) {
        option.__value = option_value_value;
        option.value = option.__value;
      }
    },
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(option);
    }
  };
} // (114:8) {#if pages}


function create_if_block_1(ctx) {
  var div1;
  var div0;
  var select0;
  var option0;
  var option1;
  var option2;
  var option3;
  var t4;
  var select1;
  var t5;
  var current_block_type_index;
  var if_block;
  var t6;
  var div5;
  var div2;
  var t8;
  var div3;
  var t10;
  var div4;
  var t11;
  var t12;
  var div6;
  var current;
  var mounted;
  var dispose;
  var each_value_3 = Array(100);
  var each_blocks_2 = [];

  for (var i = 0; i < each_value_3.length; i += 1) {
    each_blocks_2[i] = create_each_block_3(get_each_context_3(ctx, each_value_3, i));
  }

  var if_block_creators = [create_if_block_5, create_else_block_3];
  var if_blocks = [];

  function select_block_type_1(ctx, dirty) {
    if (!
    /*edit*/
    ctx[3]) return 0;
    return 1;
  }

  current_block_type_index = select_block_type_1(ctx, [-1, -1]);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  var each_value_1 =
  /*pages*/
  ctx[5];
  var each_blocks_1 = [];

  for (var _i4 = 0; _i4 < each_value_1.length; _i4 += 1) {
    each_blocks_1[_i4] = create_each_block_1(get_each_context_1(ctx, each_value_1, _i4));
  }

  var out = function out(i) {
    return (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(each_blocks_1[i], 1, 1, function () {
      each_blocks_1[i] = null;
    });
  };

  var each_value =
  /*shownPages*/
  ctx[6];
  var each_blocks = [];

  for (var _i5 = 0; _i5 < each_value.length; _i5 += 1) {
    each_blocks[_i5] = create_each_block(get_each_context(ctx, each_value, _i5));
  }

  return {
    c: function c() {
      div1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      div0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      select0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("select");
      option0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("option");
      option0.textContent = "--Sort--";
      option1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("option");
      option1.textContent = "ID";
      option2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("option");
      option2.textContent = "Sort Order";
      option3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("option");
      option3.textContent = "Title";
      t4 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      select1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("select");

      for (var _i6 = 0; _i6 < each_blocks_2.length; _i6 += 1) {
        each_blocks_2[_i6].c();
      }

      t5 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      if_block.c();
      t6 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      div5 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      div2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      div2.innerHTML = "<h4 class=\"svelte-19g86li\">sort order</h4>";
      t8 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      div3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      div3.innerHTML = "<h4 class=\"svelte-19g86li\">title</h4>";
      t10 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      div4 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      t11 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();

      for (var _i7 = 0; _i7 < each_blocks_1.length; _i7 += 1) {
        each_blocks_1[_i7].c();
      }

      t12 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      div6 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");

      for (var _i8 = 0; _i8 < each_blocks.length; _i8 += 1) {
        each_blocks[_i8].c();
      }

      option0.selected = true;
      option0.__value = "--Sort--";
      option0.value = option0.__value;
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(option0, "class", "svelte-19g86li");
      option1.__value = "id";
      option1.value = option1.__value;
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(option1, "class", "svelte-19g86li");
      option2.__value = "sort_order";
      option2.value = option2.__value;
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(option2, "class", "svelte-19g86li");
      option3.__value = "title";
      option3.value = option3.__value;
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(option3, "class", "svelte-19g86li");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(select0, "class", "dropdown svelte-19g86li");
      if (
      /*selectedSortStrategy*/
      ctx[2] === void 0) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.add_render_callback)(function () {
        return (
          /*select0_change_handler*/
          ctx[12].call(select0)
        );
      });
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(select1, "class", "dropdown svelte-19g86li");
      if (
      /*resultsPerPage*/
      ctx[4] === void 0) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.add_render_callback)(function () {
        return (
          /*select1_change_handler*/
          ctx[14].call(select1)
        );
      });
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div0, "class", "flx(wrap) middle center svelte-19g86li");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div1, "class", "flx(wrap) middle space-between svelte-19g86li");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div2, "class", "flx(wrap) middle center svelte-19g86li");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div3, "class", "flx(wrap) middle center svelte-19g86li");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div4, "class", "svelte-19g86li");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div5, "class", "grid-container svelte-19g86li");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_style)(div6, "display", "flex");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_style)(div6, "width", "15rem");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_style)(div6, "overflow-x", "scroll");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_style)(div6, "align-self", "center");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div6, "class", "svelte-19g86li");
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div1, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div1, div0);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div0, select0);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(select0, option0);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(select0, option1);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(select0, option2);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(select0, option3);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.select_option)(select0,
      /*selectedSortStrategy*/
      ctx[2]);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div0, t4);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div0, select1);

      for (var _i9 = 0; _i9 < each_blocks_2.length; _i9 += 1) {
        each_blocks_2[_i9].m(select1, null);
      }

      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.select_option)(select1,
      /*resultsPerPage*/
      ctx[4]);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div1, t5);
      if_blocks[current_block_type_index].m(div1, null);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, t6, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div5, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div5, div2);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div5, t8);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div5, div3);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div5, t10);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div5, div4);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div5, t11);

      for (var _i10 = 0; _i10 < each_blocks_1.length; _i10 += 1) {
        each_blocks_1[_i10].m(div5, null);
      }

      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, t12, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div6, anchor);

      for (var _i11 = 0; _i11 < each_blocks.length; _i11 += 1) {
        each_blocks[_i11].m(div6, null);
      }

      current = true;

      if (!mounted) {
        dispose = [(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(select0, "change",
        /*select0_change_handler*/
        ctx[12]), (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(select0, "change",
        /*change_handler_1*/
        ctx[13]), (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(select1, "change",
        /*select1_change_handler*/
        ctx[14]), (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(select1, "change",
        /*displayBookPages*/
        ctx[8])];
        mounted = true;
      }
    },
    p: function p(ctx, dirty) {
      if (dirty[0] &
      /*selectedSortStrategy*/
      4) {
        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.select_option)(select0,
        /*selectedSortStrategy*/
        ctx[2]);
      }

      if (dirty[0] &
      /*resultsPerPage*/
      16) {
        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.select_option)(select1,
        /*resultsPerPage*/
        ctx[4]);
      }

      var previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type_1(ctx, dirty);

      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx, dirty);
      } else {
        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.group_outros)();
        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(if_blocks[previous_block_index], 1, 1, function () {
          if_blocks[previous_block_index] = null;
        });
        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.check_outros)();
        if_block = if_blocks[current_block_type_index];

        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
          if_block.c();
        } else {
          if_block.p(ctx, dirty);
        }

        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(if_block, 1);
        if_block.m(div1, null);
      }

      if (dirty[0] &
      /*pages, edit, totalResults*/
      168) {
        each_value_1 =
        /*pages*/
        ctx[5];

        var _i12;

        for (_i12 = 0; _i12 < each_value_1.length; _i12 += 1) {
          var child_ctx = get_each_context_1(ctx, each_value_1, _i12);

          if (each_blocks_1[_i12]) {
            each_blocks_1[_i12].p(child_ctx, dirty);

            (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(each_blocks_1[_i12], 1);
          } else {
            each_blocks_1[_i12] = create_each_block_1(child_ctx);

            each_blocks_1[_i12].c();

            (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(each_blocks_1[_i12], 1);

            each_blocks_1[_i12].m(div5, null);
          }
        }

        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.group_outros)();

        for (_i12 = each_value_1.length; _i12 < each_blocks_1.length; _i12 += 1) {
          out(_i12);
        }

        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.check_outros)();
      }

      if (dirty[0] &
      /*displayBookPages, shownPages*/
      320) {
        each_value =
        /*shownPages*/
        ctx[6];

        var _i13;

        for (_i13 = 0; _i13 < each_value.length; _i13 += 1) {
          var _child_ctx = get_each_context(ctx, each_value, _i13);

          if (each_blocks[_i13]) {
            each_blocks[_i13].p(_child_ctx, dirty);
          } else {
            each_blocks[_i13] = create_each_block(_child_ctx);

            each_blocks[_i13].c();

            each_blocks[_i13].m(div6, null);
          }
        }

        for (; _i13 < each_blocks.length; _i13 += 1) {
          each_blocks[_i13].d(1);
        }

        each_blocks.length = each_value.length;
      }
    },
    i: function i(local) {
      if (current) return;
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(if_block);

      for (var _i14 = 0; _i14 < each_value_1.length; _i14 += 1) {
        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(each_blocks_1[_i14]);
      }

      current = true;
    },
    o: function o(local) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(if_block);
      each_blocks_1 = each_blocks_1.filter(Boolean);

      for (var _i15 = 0; _i15 < each_blocks_1.length; _i15 += 1) {
        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(each_blocks_1[_i15]);
      }

      current = false;
    },
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div1);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_each)(each_blocks_2, detaching);
      if_blocks[current_block_type_index].d();
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(t6);
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div5);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_each)(each_blocks_1, detaching);
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(t12);
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div6);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_each)(each_blocks, detaching);
      mounted = false;
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.run_all)(dispose);
    }
  };
} // (125:20) {#each Array(100) as _,index }


function create_each_block_3(ctx) {
  var option;
  var t_value =
  /*index*/
  ctx[23] + 1 + "";
  var t;
  var option_value_value;
  return {
    c: function c() {
      option = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("option");
      t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(t_value);
      option.__value = option_value_value =
      /*index*/
      ctx[23] + 1;
      option.value = option.__value;
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(option, "class", "svelte-19g86li");
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, option, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(option, t);
    },
    p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(option);
    }
  };
} // (134:12) {:else}


function create_else_block_3(ctx) {
  var button;
  var contentsave;
  var current;
  var mounted;
  var dispose;
  contentsave = new svelte_material_icons_ContentSave_svelte__WEBPACK_IMPORTED_MODULE_2__["default"]({});
  return {
    c: function c() {
      button = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("button");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(contentsave.$$.fragment);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button, "class", "btn(normal) is-success flx middle svelte-19g86li");
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, button, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(contentsave, button, null);
      current = true;

      if (!mounted) {
        dispose = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(button, "click",
        /*toggleEditSave*/
        ctx[9]);
        mounted = true;
      }
    },
    p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
    i: function i(local) {
      if (current) return;
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(contentsave.$$.fragment, local);
      current = true;
    },
    o: function o(local) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(contentsave.$$.fragment, local);
      current = false;
    },
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(button);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(contentsave);
      mounted = false;
      dispose();
    }
  };
} // (131:12) {#if !edit}


function create_if_block_5(ctx) {
  var button;
  var mounted;
  var dispose;
  return {
    c: function c() {
      button = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("button");
      button.textContent = "Quick Edit";
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button, "class", "btn(normal) is-warning flx middle svelte-19g86li");
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, button, anchor);

      if (!mounted) {
        dispose = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(button, "click",
        /*toggleEditSave*/
        ctx[9]);
        mounted = true;
      }
    },
    p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
    i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
    o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(button);
      mounted = false;
      dispose();
    }
  };
} // (176:16) {:else}


function create_else_block_2(ctx) {
  var div;
  var p;
  var t0;
  var t1_value =
  /*page*/
  ctx[21].pagination.results + "";
  var t1;
  var t2;
  var t3;
  return {
    c: function c() {
      div = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      p = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("p");
      t0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)("out of ");
      t1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(t1_value);
      t2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(" results");
      t3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(p, "class", "svelte-19g86li");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div, "class", "info flx(wrap) middle center last-grid-item svelte-19g86li");
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div, p);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(p, t0);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(p, t1);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(p, t2);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div, t3);
    },
    p: function p(ctx, dirty) {
      if (dirty[0] &
      /*pages*/
      32 && t1_value !== (t1_value =
      /*page*/
      ctx[21].pagination.results + "")) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_data)(t1, t1_value);
    },
    i: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
    o: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div);
    }
  };
} // (149:16) {#if !page.pagination}


function create_if_block_2(ctx) {
  var t0;
  var div;
  var button;
  var squareeditoutline;
  var t1;
  var current;

  function select_block_type_3(ctx, dirty) {
    if (!
    /*edit*/
    ctx[3]) return create_if_block_3;
    return create_else_block_1;
  }

  var current_block_type = select_block_type_3(ctx, [-1, -1]);
  var if_block = current_block_type(ctx);
  squareeditoutline = new svelte_material_icons_SquareEditOutline_svelte__WEBPACK_IMPORTED_MODULE_1__["default"]({});
  return {
    c: function c() {
      if_block.c();
      t0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      div = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      button = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("button");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(squareeditoutline.$$.fragment);
      t1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button, "class", "btn(normal) is-success is-round flx middle svelte-19g86li");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div, "class", "flx(wrap) middle center svelte-19g86li");
    },
    m: function m(target, anchor) {
      if_block.m(target, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, t0, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div, button);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(squareeditoutline, button, null);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div, t1);
      current = true;
    },
    p: function p(ctx, dirty) {
      if (current_block_type === (current_block_type = select_block_type_3(ctx, dirty)) && if_block) {
        if_block.p(ctx, dirty);
      } else {
        if_block.d(1);
        if_block = current_block_type(ctx);

        if (if_block) {
          if_block.c();
          if_block.m(t0.parentNode, t0);
        }
      }
    },
    i: function i(local) {
      if (current) return;
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(squareeditoutline.$$.fragment, local);
      current = true;
    },
    o: function o(local) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(squareeditoutline.$$.fragment, local);
      current = false;
    },
    d: function d(detaching) {
      if_block.d(detaching);
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(t0);
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(squareeditoutline);
    }
  };
} // (158:20) {:else}


function create_else_block_1(ctx) {
  var div0;
  var select;
  var t;
  var div1;
  var input;
  var input_placeholder_value;
  var mounted;
  var dispose;
  var each_value_2 = Array(
  /*totalResults*/
  ctx[7]);
  var each_blocks = [];

  for (var i = 0; i < each_value_2.length; i += 1) {
    each_blocks[i] = create_each_block_2(get_each_context_2(ctx, each_value_2, i));
  }

  function change_handler_2() {
    var _ctx;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (
      /*change_handler_2*/
      (_ctx = ctx)[15].apply(_ctx, [
      /*page*/
      ctx[21]].concat(args))
    );
  }

  function input_handler() {
    var _ctx2;

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return (
      /*input_handler*/
      (_ctx2 = ctx)[16].apply(_ctx2, [
      /*page*/
      ctx[21]].concat(args))
    );
  }

  return {
    c: function c() {
      div0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      select = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("select");

      for (var _i16 = 0; _i16 < each_blocks.length; _i16 += 1) {
        each_blocks[_i16].c();
      }

      t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      div1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      input = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("input");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(select, "class", "svelte-19g86li");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div0, "class", "flx(wrap) middle center svelte-19g86li");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input, "type", "text");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input, "name", "pageTitle");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input, "placeholder", input_placeholder_value =
      /*page*/
      ctx[21].title);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input, "class", "svelte-19g86li");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div1, "class", "flx(wrap) middle center svelte-19g86li");
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div0, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div0, select);

      for (var _i17 = 0; _i17 < each_blocks.length; _i17 += 1) {
        each_blocks[_i17].m(select, null);
      }

      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, t, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div1, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div1, input);

      if (!mounted) {
        dispose = [(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(select, "change", (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.self)(change_handler_2)), (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(input, "input", (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.self)(input_handler))];
        mounted = true;
      }
    },
    p: function p(new_ctx, dirty) {
      ctx = new_ctx;

      if (dirty[0] &
      /*pages, totalResults*/
      160) {
        each_value_2 = Array(
        /*totalResults*/
        ctx[7]);

        var _i18;

        for (_i18 = 0; _i18 < each_value_2.length; _i18 += 1) {
          var child_ctx = get_each_context_2(ctx, each_value_2, _i18);

          if (each_blocks[_i18]) {
            each_blocks[_i18].p(child_ctx, dirty);
          } else {
            each_blocks[_i18] = create_each_block_2(child_ctx);

            each_blocks[_i18].c();

            each_blocks[_i18].m(select, null);
          }
        }

        for (; _i18 < each_blocks.length; _i18 += 1) {
          each_blocks[_i18].d(1);
        }

        each_blocks.length = each_value_2.length;
      }

      if (dirty[0] &
      /*pages*/
      32 && input_placeholder_value !== (input_placeholder_value =
      /*page*/
      ctx[21].title)) {
        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(input, "placeholder", input_placeholder_value);
      }
    },
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div0);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_each)(each_blocks, detaching);
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(t);
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div1);
      mounted = false;
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.run_all)(dispose);
    }
  };
} // (150:20) {#if !edit}


function create_if_block_3(ctx) {
  var div0;
  var span0;
  var t0_value =
  /*page*/
  ctx[21].sort_order + "";
  var t0;
  var t1;
  var div1;
  var span1;
  var t2_value =
  /*page*/
  ctx[21].title + "";
  var t2;
  return {
    c: function c() {
      div0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      span0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("span");
      t0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(t0_value);
      t1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      div1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      span1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("span");
      t2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(t2_value);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(span0, "class", "svelte-19g86li");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div0, "class", "flx(wrap) middle center svelte-19g86li");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(span1, "class", "svelte-19g86li");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div1, "class", "flx(wrap) middle center svelte-19g86li");
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div0, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div0, span0);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(span0, t0);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, t1, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div1, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div1, span1);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(span1, t2);
    },
    p: function p(ctx, dirty) {
      if (dirty[0] &
      /*pages*/
      32 && t0_value !== (t0_value =
      /*page*/
      ctx[21].sort_order + "")) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_data)(t0, t0_value);
      if (dirty[0] &
      /*pages*/
      32 && t2_value !== (t2_value =
      /*page*/
      ctx[21].title + "")) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_data)(t2, t2_value);
    },
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div0);
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(t1);
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div1);
    }
  };
} // (163:36) {#if page.sort_order == index+1}


function create_if_block_4(ctx) {
  var option;
  var t_value =
  /*index*/
  ctx[23] + 1 + "";
  var t;
  var option_value_value;
  return {
    c: function c() {
      option = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("option");
      t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(t_value);
      option.__value = option_value_value =
      /*index*/
      ctx[23] + 1;
      option.value = option.__value;
      option.selected = true;
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(option, "class", "svelte-19g86li");
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, option, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(option, t);
    },
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(option);
    }
  };
} // (161:32) {#each Array(totalResults) as _,index }


function create_each_block_2(ctx) {
  var option;
  var t_value =
  /*index*/
  ctx[23] + 1 + "";
  var t;
  var option_value_value;
  var if_block_anchor;
  var if_block =
  /*page*/
  ctx[21].sort_order ==
  /*index*/
  ctx[23] + 1 && create_if_block_4(ctx);
  return {
    c: function c() {
      option = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("option");
      t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(t_value);
      if (if_block) if_block.c();
      if_block_anchor = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.empty)();
      option.__value = option_value_value =
      /*index*/
      ctx[23] + 1;
      option.value = option.__value;
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(option, "class", "svelte-19g86li");
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, option, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(option, t);
      if (if_block) if_block.m(target, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, if_block_anchor, anchor);
    },
    p: function p(ctx, dirty) {
      if (
      /*page*/
      ctx[21].sort_order ==
      /*index*/
      ctx[23] + 1) {
        if (if_block) {} else {
          if_block = create_if_block_4(ctx);
          if_block.c();
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
    },
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(option);
      if (if_block) if_block.d(detaching);
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(if_block_anchor);
    }
  };
} // (148:12) {#each pages as page}


function create_each_block_1(ctx) {
  var current_block_type_index;
  var if_block;
  var if_block_anchor;
  var current;
  var if_block_creators = [create_if_block_2, create_else_block_2];
  var if_blocks = [];

  function select_block_type_2(ctx, dirty) {
    if (!
    /*page*/
    ctx[21].pagination) return 0;
    return 1;
  }

  current_block_type_index = select_block_type_2(ctx, [-1, -1]);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  return {
    c: function c() {
      if_block.c();
      if_block_anchor = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.empty)();
    },
    m: function m(target, anchor) {
      if_blocks[current_block_type_index].m(target, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, if_block_anchor, anchor);
      current = true;
    },
    p: function p(ctx, dirty) {
      var previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type_2(ctx, dirty);

      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx, dirty);
      } else {
        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.group_outros)();
        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(if_blocks[previous_block_index], 1, 1, function () {
          if_blocks[previous_block_index] = null;
        });
        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.check_outros)();
        if_block = if_blocks[current_block_type_index];

        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
          if_block.c();
        } else {
          if_block.p(ctx, dirty);
        }

        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(if_block, 1);
        if_block.m(if_block_anchor.parentNode, if_block_anchor);
      }
    },
    i: function i(local) {
      if (current) return;
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(if_block);
      current = true;
    },
    o: function o(local) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(if_block);
      current = false;
    },
    d: function d(detaching) {
      if_blocks[current_block_type_index].d(detaching);
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(if_block_anchor);
    }
  };
} // (186:8) {#each shownPages as page, index}


function create_each_block(ctx) {
  var button;
  var t_value =
  /*page*/
  ctx[21] + 1 + "";
  var t;
  var mounted;
  var dispose;

  function click_handler() {
    var _ctx3;

    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    return (
      /*click_handler*/
      (_ctx3 = ctx)[17].apply(_ctx3, [
      /*page*/
      ctx[21],
      /*index*/
      ctx[23]].concat(args))
    );
  }

  return {
    c: function c() {
      button = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("button");
      t = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)(t_value);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(button, "class", "btn(normal) is-info pagination svelte-19g86li");
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, button, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(button, t);

      if (!mounted) {
        dispose = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(button, "click", click_handler);
        mounted = true;
      }
    },
    p: function p(new_ctx, dirty) {
      ctx = new_ctx;
      if (dirty[0] &
      /*shownPages*/
      64 && t_value !== (t_value =
      /*page*/
      ctx[21] + 1 + "")) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.set_data)(t, t_value);
    },
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(button);
      mounted = false;
      dispose();
    }
  };
}

function create_fragment(ctx) {
  var div;
  var h2;
  var t1;
  var current_block_type_index;
  var if_block;
  var current;
  var if_block_creators = [create_if_block, create_else_block];
  var if_blocks = [];

  function select_block_type(ctx, dirty) {
    if (!
    /*books*/
    ctx[0]) return 0;
    return 1;
  }

  current_block_type_index = select_block_type(ctx, [-1, -1]);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  return {
    c: function c() {
      div = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      h2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("h2");
      h2.textContent = "Books";
      t1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      if_block.c();
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(h2, "class", "svelte-19g86li");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div, "class", "flx(column) svelte-19g86li");
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div, h2);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div, t1);
      if_blocks[current_block_type_index].m(div, null);
      current = true;
    },
    p: function p(ctx, dirty) {
      var previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx, dirty);

      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx, dirty);
      } else {
        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.group_outros)();
        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(if_blocks[previous_block_index], 1, 1, function () {
          if_blocks[previous_block_index] = null;
        });
        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.check_outros)();
        if_block = if_blocks[current_block_type_index];

        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
          if_block.c();
        } else {
          if_block.p(ctx, dirty);
        }

        (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(if_block, 1);
        if_block.m(div, null);
      }
    },
    i: function i(local) {
      if (current) return;
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(if_block);
      current = true;
    },
    o: function o(local) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(if_block);
      current = false;
    },
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div);
      if_blocks[current_block_type_index].d();
    }
  };
}

function changeOrder(_x, _x2) {
  return _changeOrder.apply(this, arguments);
}

function _changeOrder() {
  _changeOrder = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(e, page) {
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            page.sort_order = e.target.value;

          case 1:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _changeOrder.apply(this, arguments);
}

function changeTitle(e, page) {
  page.title = e.target.value;
}

function instance($$self, $$props, $$invalidate) {
  var books = [];
  var selectedBook;
  var selectedSortStrategy = 'sort_order';
  var edit = false;
  var resultsPerPage = 10;
  var pages; //keeping track of selected pagination page so we can click on it later.

  var selectedPage;
  var pagination = [];
  var shownPages = [];
  var totalResults;
  var pagesCopy;

  function displayBookPages() {
    return _displayBookPages.apply(this, arguments);
  }

  function _displayBookPages() {
    _displayBookPages = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var pageNumber,
          e,
          paginationButtons,
          _iterator,
          _step,
          b,
          res,
          _args2 = arguments;

      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              pageNumber = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : 1;
              e = _args2.length > 1 ? _args2[1] : undefined;

              //if we are displaying via pagination button
              if (e) {
                paginationButtons = e.target.parentNode.childNodes;
                _iterator = _createForOfIteratorHelper(paginationButtons);

                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    b = _step.value;

                    if (b.style) {
                      b.style.backgroundColor = '';
                    }
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }

                selectedPage = e;
                e.target.style.backgroundColor = 'blue';
                e.target.scrollIntoView({
                  inline: "center",
                  behavior: "smooth"
                });
              } // request the first 10 and get the count, create pagination


              _context2.next = 5;
              return fetch("/admin/pages?book=".concat(selectedBook, "&results_count=").concat(resultsPerPage, "&page=").concat(pageNumber, "&sort=").concat(selectedSortStrategy));

            case 5:
              res = _context2.sent;
              _context2.prev = 6;
              _context2.t0 = $$invalidate;
              _context2.next = 10;
              return res.json();

            case 10:
              _context2.t1 = pages = _context2.sent;
              (0, _context2.t0)(5, _context2.t1);
              //to compare later so we only update what we need and not all at once.
              //have to use JSON.stringify hack in order to prevent pagesCopy from being mutated by
              //pages when we directly edit the dom.
              pagesCopy = JSON.stringify(pages);
              _context2.next = 18;
              break;

            case 15:
              _context2.prev = 15;
              _context2.t2 = _context2["catch"](6);
              console.log(_context2.t2);

            case 18:
              pagination = pages.find(function (p) {
                return p.pagination;
              });

              if (pagination.pagination.pages != shownPages.length) {
                $$invalidate(6, shownPages = Array(pagination.pagination.pages).fill().map(function (x, i) {
                  return i;
                }));
                $$invalidate(7, totalResults = parseInt(pagination.pagination.results));
              }

            case 20:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[6, 15]]);
    }));
    return _displayBookPages.apply(this, arguments);
  }

  function toggleEditSave() {
    return _toggleEditSave.apply(this, arguments);
  }

  function _toggleEditSave() {
    _toggleEditSave = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var originalPages, data, res;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              console.log('edit save');
              $$invalidate(3, edit = !edit);

              if (edit) {
                _context3.next = 15;
                break;
              }

              console.log('saving..');
              originalPages = JSON.parse(pagesCopy); //find the difference betweent the copies, then send it to server.

              data = pages.filter(function (page, i) {
                if (page.title != originalPages[i].title && page.title != undefined || page.sort_order != originalPages[i].sort_order && page.sort_order != undefined) {
                  console.log(page);
                  return page;
                }
              });
              _context3.next = 8;
              return fetch('/admin/update-pages', {
                method: 'POST',
                // *GET, POST, PUT, DELETE, etc.
                mode: 'cors',
                // no-cors, *cors, same-origin
                cache: 'no-cache',
                // *default, no-cache, reload, force-cache, only-if-cached
                credentials: 'same-origin',
                // include, *same-origin, omit
                headers: {
                  'Content-Type': 'application/json'
                },
                // 'Content-Type': 'application/x-www-form-urlencoded',
                redirect: 'follow',
                // manual, *follow, error
                referrerPolicy: 'no-referrer',
                // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
                body: JSON.stringify(data) // body data type must match "Content-Type" header

              });

            case 8:
              res = _context3.sent;
              _context3.t0 = console;
              _context3.next = 12;
              return res.json();

            case 12:
              _context3.t1 = _context3.sent;

              _context3.t0.log.call(_context3.t0, _context3.t1);

              if (!selectedPage) {
                displayBookPages();
              } else selectedPage.target.click();

            case 15:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));
    return _toggleEditSave.apply(this, arguments);
  }

  (0,svelte__WEBPACK_IMPORTED_MODULE_3__.onMount)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var res;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch("/admin/books");

          case 2:
            res = _context.sent;
            _context.t0 = $$invalidate;
            _context.next = 6;
            return res.json();

          case 6:
            _context.t1 = books = _context.sent;
            (0, _context.t0)(0, _context.t1);
            console.log(books);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));

  function select_change_handler() {
    selectedBook = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.select_value)(this);
    $$invalidate(1, selectedBook);
    $$invalidate(0, books);
  }

  var change_handler = function change_handler() {
    return displayBookPages();
  };

  function select0_change_handler() {
    selectedSortStrategy = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.select_value)(this);
    $$invalidate(2, selectedSortStrategy);
  }

  var change_handler_1 = function change_handler_1() {
    return displayBookPages();
  };

  function select1_change_handler() {
    resultsPerPage = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.select_value)(this);
    $$invalidate(4, resultsPerPage);
  }

  var change_handler_2 = function change_handler_2(page, e) {
    return changeOrder(e, page);
  };

  var input_handler = function input_handler(page, e) {
    return changeTitle(e, page);
  };

  var click_handler = function click_handler(page, index, e) {
    return displayBookPages(page + 1, e, index);
  };

  return [books, selectedBook, selectedSortStrategy, edit, resultsPerPage, pages, shownPages, totalResults, displayBookPages, toggleEditSave, select_change_handler, change_handler, select0_change_handler, change_handler_1, select1_change_handler, change_handler_2, input_handler, click_handler];
}

var Books = /*#__PURE__*/function (_SvelteComponent) {
  _inherits(Books, _SvelteComponent);

  var _super = _createSuper(Books);

  function Books(options) {
    var _this;

    _classCallCheck(this, Books);

    _this = _super.call(this);
    (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(_assertThisInitialized(_this), options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, {}, add_css, [-1, -1]);
    return _this;
  }

  return _createClass(Books);
}(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Books);

/***/ }),

/***/ "./src/admin/sidebar.svelte":
/*!**********************************!*\
  !*** ./src/admin/sidebar.svelte ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");
/* harmony import */ var svelte_material_icons_BookMultiple_svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svelte-material-icons/BookMultiple.svelte */ "./node_modules/svelte-material-icons/BookMultiple.svelte");
/* harmony import */ var svelte_material_icons_PlusCircle_svelte__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! svelte-material-icons/PlusCircle.svelte */ "./node_modules/svelte-material-icons/PlusCircle.svelte");
/* harmony import */ var svelte__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! svelte */ "./node_modules/svelte/index.mjs");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/* src/admin/sidebar.svelte generated by Svelte v3.50.1 */





function add_css(target) {
  (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append_styles)(target, "svelte-12nkpcx", ".lol.svelte-12nkpcx{border-right:orange dotted 3px}p.svelte-12nkpcx{margin-left:1rem;cursor:pointer}");
}

function create_fragment(ctx) {
  var div3;
  var div0;
  var h3;
  var t1;
  var p0;
  var span0;
  var pluscircle;
  var t2;
  var t3;
  var p1;
  var span1;
  var bookmultiple;
  var t4;
  var t5;
  var div1;
  var t7;
  var div2;
  var current;
  var mounted;
  var dispose;
  pluscircle = new svelte_material_icons_PlusCircle_svelte__WEBPACK_IMPORTED_MODULE_2__["default"]({
    props: {
      size: "1.25rem",
      color: "black"
    }
  });
  bookmultiple = new svelte_material_icons_BookMultiple_svelte__WEBPACK_IMPORTED_MODULE_1__["default"]({
    props: {
      size: "1.25rem",
      color: "black"
    }
  });
  return {
    c: function c() {
      div3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      div0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      h3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("h3");
      h3.textContent = "comic pages";
      t1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      p0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("p");
      span0 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("span");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(pluscircle.$$.fragment);
      t2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)("Add Page");
      t3 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      p1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("p");
      span1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("span");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.create_component)(bookmultiple.$$.fragment);
      t4 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.text)("Book View");
      t5 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      div1 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      div1.textContent = "asdf";
      t7 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.space)();
      div2 = (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.element)("div");
      div2.textContent = "archive Settings";
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(span0, "class", "flx(wrap) middle");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(p0, "class", "flx middle svelte-12nkpcx");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(span1, "class", "flx(wrap) middle");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(p1, "class", "flx middle svelte-12nkpcx");
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.attr)(div3, "class", "lol flx(column) is-3 padme svelte-12nkpcx");
    },
    m: function m(target, anchor) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.insert)(target, div3, anchor);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div3, div0);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div0, h3);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div0, t1);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div0, p0);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(p0, span0);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(pluscircle, span0, null);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(p0, t2);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div0, t3);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div0, p1);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(p1, span1);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.mount_component)(bookmultiple, span1, null);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(p1, t4);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div3, t5);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div3, div1);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div3, t7);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.append)(div3, div2);
      current = true;

      if (!mounted) {
        dispose = [(0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(p0, "click",
        /*click_handler*/
        ctx[1]), (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.listen)(p1, "click",
        /*click_handler_1*/
        ctx[2])];
        mounted = true;
      }
    },
    p: svelte_internal__WEBPACK_IMPORTED_MODULE_0__.noop,
    i: function i(local) {
      if (current) return;
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(pluscircle.$$.fragment, local);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_in)(bookmultiple.$$.fragment, local);
      current = true;
    },
    o: function o(local) {
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(pluscircle.$$.fragment, local);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.transition_out)(bookmultiple.$$.fragment, local);
      current = false;
    },
    d: function d(detaching) {
      if (detaching) (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.detach)(div3);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(pluscircle);
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.destroy_component)(bookmultiple);
      mounted = false;
      (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.run_all)(dispose);
    }
  };
}

function instance($$self) {
  var dispatch = (0,svelte__WEBPACK_IMPORTED_MODULE_3__.createEventDispatcher)();

  var click_handler = function click_handler() {
    return dispatch('newPage');
  };

  var click_handler_1 = function click_handler_1() {
    return dispatch('getBooks');
  };

  return [dispatch, click_handler, click_handler_1];
}

var Sidebar = /*#__PURE__*/function (_SvelteComponent) {
  _inherits(Sidebar, _SvelteComponent);

  var _super = _createSuper(Sidebar);

  function Sidebar(options) {
    var _this;

    _classCallCheck(this, Sidebar);

    _this = _super.call(this);
    (0,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.init)(_assertThisInitialized(_this), options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__.safe_not_equal, {}, add_css);
    return _this;
  }

  return _createClass(Sidebar);
}(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.SvelteComponent);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sidebar);

/***/ }),

/***/ "./src/admin/admin.js":
/*!****************************!*\
  !*** ./src/admin/admin.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _admin_svelte__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin.svelte */ "./src/admin/admin.svelte");
 // if ('serviceWorker' in navigator) {
//     console.log('serviceWorker is supported');
//     window.addEventListener('load',function(e) {
//         navigator.serviceWorker
//             .register('../serviceWorker.js')
//             .then(reg => console.log('serviceWorker registered!'))
//             .catch(err => console.log(`serviceWorker Error:: ${err}`));
//     });
// }

var app = new _admin_svelte__WEBPACK_IMPORTED_MODULE_0__["default"]({
  target: document.body,
  props: {
    name: 'world'
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (app);

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/svelte/index.mjs":
/*!***************************************!*\
  !*** ./node_modules/svelte/index.mjs ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SvelteComponent": () => (/* reexport safe */ _internal_index_mjs__WEBPACK_IMPORTED_MODULE_0__.SvelteComponentDev),
/* harmony export */   "SvelteComponentTyped": () => (/* reexport safe */ _internal_index_mjs__WEBPACK_IMPORTED_MODULE_0__.SvelteComponentTyped),
/* harmony export */   "afterUpdate": () => (/* reexport safe */ _internal_index_mjs__WEBPACK_IMPORTED_MODULE_0__.afterUpdate),
/* harmony export */   "beforeUpdate": () => (/* reexport safe */ _internal_index_mjs__WEBPACK_IMPORTED_MODULE_0__.beforeUpdate),
/* harmony export */   "createEventDispatcher": () => (/* reexport safe */ _internal_index_mjs__WEBPACK_IMPORTED_MODULE_0__.createEventDispatcher),
/* harmony export */   "getAllContexts": () => (/* reexport safe */ _internal_index_mjs__WEBPACK_IMPORTED_MODULE_0__.getAllContexts),
/* harmony export */   "getContext": () => (/* reexport safe */ _internal_index_mjs__WEBPACK_IMPORTED_MODULE_0__.getContext),
/* harmony export */   "hasContext": () => (/* reexport safe */ _internal_index_mjs__WEBPACK_IMPORTED_MODULE_0__.hasContext),
/* harmony export */   "onDestroy": () => (/* reexport safe */ _internal_index_mjs__WEBPACK_IMPORTED_MODULE_0__.onDestroy),
/* harmony export */   "onMount": () => (/* reexport safe */ _internal_index_mjs__WEBPACK_IMPORTED_MODULE_0__.onMount),
/* harmony export */   "setContext": () => (/* reexport safe */ _internal_index_mjs__WEBPACK_IMPORTED_MODULE_0__.setContext),
/* harmony export */   "tick": () => (/* reexport safe */ _internal_index_mjs__WEBPACK_IMPORTED_MODULE_0__.tick)
/* harmony export */ });
/* harmony import */ var _internal_index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/index.mjs */ "./node_modules/svelte/internal/index.mjs");


/***/ }),

/***/ "./node_modules/svelte/internal/index.mjs":
/*!************************************************!*\
  !*** ./node_modules/svelte/internal/index.mjs ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HtmlTag": () => (/* binding */ HtmlTag),
/* harmony export */   "HtmlTagHydration": () => (/* binding */ HtmlTagHydration),
/* harmony export */   "SvelteComponent": () => (/* binding */ SvelteComponent),
/* harmony export */   "SvelteComponentDev": () => (/* binding */ SvelteComponentDev),
/* harmony export */   "SvelteComponentTyped": () => (/* binding */ SvelteComponentTyped),
/* harmony export */   "SvelteElement": () => (/* binding */ SvelteElement),
/* harmony export */   "action_destroyer": () => (/* binding */ action_destroyer),
/* harmony export */   "add_attribute": () => (/* binding */ add_attribute),
/* harmony export */   "add_classes": () => (/* binding */ add_classes),
/* harmony export */   "add_flush_callback": () => (/* binding */ add_flush_callback),
/* harmony export */   "add_location": () => (/* binding */ add_location),
/* harmony export */   "add_render_callback": () => (/* binding */ add_render_callback),
/* harmony export */   "add_resize_listener": () => (/* binding */ add_resize_listener),
/* harmony export */   "add_styles": () => (/* binding */ add_styles),
/* harmony export */   "add_transform": () => (/* binding */ add_transform),
/* harmony export */   "afterUpdate": () => (/* binding */ afterUpdate),
/* harmony export */   "append": () => (/* binding */ append),
/* harmony export */   "append_dev": () => (/* binding */ append_dev),
/* harmony export */   "append_empty_stylesheet": () => (/* binding */ append_empty_stylesheet),
/* harmony export */   "append_hydration": () => (/* binding */ append_hydration),
/* harmony export */   "append_hydration_dev": () => (/* binding */ append_hydration_dev),
/* harmony export */   "append_styles": () => (/* binding */ append_styles),
/* harmony export */   "assign": () => (/* binding */ assign),
/* harmony export */   "attr": () => (/* binding */ attr),
/* harmony export */   "attr_dev": () => (/* binding */ attr_dev),
/* harmony export */   "attribute_to_object": () => (/* binding */ attribute_to_object),
/* harmony export */   "beforeUpdate": () => (/* binding */ beforeUpdate),
/* harmony export */   "bind": () => (/* binding */ bind),
/* harmony export */   "binding_callbacks": () => (/* binding */ binding_callbacks),
/* harmony export */   "blank_object": () => (/* binding */ blank_object),
/* harmony export */   "bubble": () => (/* binding */ bubble),
/* harmony export */   "check_outros": () => (/* binding */ check_outros),
/* harmony export */   "children": () => (/* binding */ children),
/* harmony export */   "claim_component": () => (/* binding */ claim_component),
/* harmony export */   "claim_element": () => (/* binding */ claim_element),
/* harmony export */   "claim_html_tag": () => (/* binding */ claim_html_tag),
/* harmony export */   "claim_space": () => (/* binding */ claim_space),
/* harmony export */   "claim_svg_element": () => (/* binding */ claim_svg_element),
/* harmony export */   "claim_text": () => (/* binding */ claim_text),
/* harmony export */   "clear_loops": () => (/* binding */ clear_loops),
/* harmony export */   "component_subscribe": () => (/* binding */ component_subscribe),
/* harmony export */   "compute_rest_props": () => (/* binding */ compute_rest_props),
/* harmony export */   "compute_slots": () => (/* binding */ compute_slots),
/* harmony export */   "createEventDispatcher": () => (/* binding */ createEventDispatcher),
/* harmony export */   "create_animation": () => (/* binding */ create_animation),
/* harmony export */   "create_bidirectional_transition": () => (/* binding */ create_bidirectional_transition),
/* harmony export */   "create_component": () => (/* binding */ create_component),
/* harmony export */   "create_in_transition": () => (/* binding */ create_in_transition),
/* harmony export */   "create_out_transition": () => (/* binding */ create_out_transition),
/* harmony export */   "create_slot": () => (/* binding */ create_slot),
/* harmony export */   "create_ssr_component": () => (/* binding */ create_ssr_component),
/* harmony export */   "current_component": () => (/* binding */ current_component),
/* harmony export */   "custom_event": () => (/* binding */ custom_event),
/* harmony export */   "dataset_dev": () => (/* binding */ dataset_dev),
/* harmony export */   "debug": () => (/* binding */ debug),
/* harmony export */   "destroy_block": () => (/* binding */ destroy_block),
/* harmony export */   "destroy_component": () => (/* binding */ destroy_component),
/* harmony export */   "destroy_each": () => (/* binding */ destroy_each),
/* harmony export */   "detach": () => (/* binding */ detach),
/* harmony export */   "detach_after_dev": () => (/* binding */ detach_after_dev),
/* harmony export */   "detach_before_dev": () => (/* binding */ detach_before_dev),
/* harmony export */   "detach_between_dev": () => (/* binding */ detach_between_dev),
/* harmony export */   "detach_dev": () => (/* binding */ detach_dev),
/* harmony export */   "dirty_components": () => (/* binding */ dirty_components),
/* harmony export */   "dispatch_dev": () => (/* binding */ dispatch_dev),
/* harmony export */   "each": () => (/* binding */ each),
/* harmony export */   "element": () => (/* binding */ element),
/* harmony export */   "element_is": () => (/* binding */ element_is),
/* harmony export */   "empty": () => (/* binding */ empty),
/* harmony export */   "end_hydrating": () => (/* binding */ end_hydrating),
/* harmony export */   "escape": () => (/* binding */ escape),
/* harmony export */   "escape_attribute_value": () => (/* binding */ escape_attribute_value),
/* harmony export */   "escape_object": () => (/* binding */ escape_object),
/* harmony export */   "exclude_internal_props": () => (/* binding */ exclude_internal_props),
/* harmony export */   "fix_and_destroy_block": () => (/* binding */ fix_and_destroy_block),
/* harmony export */   "fix_and_outro_and_destroy_block": () => (/* binding */ fix_and_outro_and_destroy_block),
/* harmony export */   "fix_position": () => (/* binding */ fix_position),
/* harmony export */   "flush": () => (/* binding */ flush),
/* harmony export */   "getAllContexts": () => (/* binding */ getAllContexts),
/* harmony export */   "getContext": () => (/* binding */ getContext),
/* harmony export */   "get_all_dirty_from_scope": () => (/* binding */ get_all_dirty_from_scope),
/* harmony export */   "get_binding_group_value": () => (/* binding */ get_binding_group_value),
/* harmony export */   "get_current_component": () => (/* binding */ get_current_component),
/* harmony export */   "get_custom_elements_slots": () => (/* binding */ get_custom_elements_slots),
/* harmony export */   "get_root_for_style": () => (/* binding */ get_root_for_style),
/* harmony export */   "get_slot_changes": () => (/* binding */ get_slot_changes),
/* harmony export */   "get_spread_object": () => (/* binding */ get_spread_object),
/* harmony export */   "get_spread_update": () => (/* binding */ get_spread_update),
/* harmony export */   "get_store_value": () => (/* binding */ get_store_value),
/* harmony export */   "globals": () => (/* binding */ globals),
/* harmony export */   "group_outros": () => (/* binding */ group_outros),
/* harmony export */   "handle_promise": () => (/* binding */ handle_promise),
/* harmony export */   "hasContext": () => (/* binding */ hasContext),
/* harmony export */   "has_prop": () => (/* binding */ has_prop),
/* harmony export */   "identity": () => (/* binding */ identity),
/* harmony export */   "init": () => (/* binding */ init),
/* harmony export */   "insert": () => (/* binding */ insert),
/* harmony export */   "insert_dev": () => (/* binding */ insert_dev),
/* harmony export */   "insert_hydration": () => (/* binding */ insert_hydration),
/* harmony export */   "insert_hydration_dev": () => (/* binding */ insert_hydration_dev),
/* harmony export */   "intros": () => (/* binding */ intros),
/* harmony export */   "invalid_attribute_name_character": () => (/* binding */ invalid_attribute_name_character),
/* harmony export */   "is_client": () => (/* binding */ is_client),
/* harmony export */   "is_crossorigin": () => (/* binding */ is_crossorigin),
/* harmony export */   "is_empty": () => (/* binding */ is_empty),
/* harmony export */   "is_function": () => (/* binding */ is_function),
/* harmony export */   "is_promise": () => (/* binding */ is_promise),
/* harmony export */   "is_void": () => (/* binding */ is_void),
/* harmony export */   "listen": () => (/* binding */ listen),
/* harmony export */   "listen_dev": () => (/* binding */ listen_dev),
/* harmony export */   "loop": () => (/* binding */ loop),
/* harmony export */   "loop_guard": () => (/* binding */ loop_guard),
/* harmony export */   "merge_ssr_styles": () => (/* binding */ merge_ssr_styles),
/* harmony export */   "missing_component": () => (/* binding */ missing_component),
/* harmony export */   "mount_component": () => (/* binding */ mount_component),
/* harmony export */   "noop": () => (/* binding */ noop),
/* harmony export */   "not_equal": () => (/* binding */ not_equal),
/* harmony export */   "now": () => (/* binding */ now),
/* harmony export */   "null_to_empty": () => (/* binding */ null_to_empty),
/* harmony export */   "object_without_properties": () => (/* binding */ object_without_properties),
/* harmony export */   "onDestroy": () => (/* binding */ onDestroy),
/* harmony export */   "onMount": () => (/* binding */ onMount),
/* harmony export */   "once": () => (/* binding */ once),
/* harmony export */   "outro_and_destroy_block": () => (/* binding */ outro_and_destroy_block),
/* harmony export */   "prevent_default": () => (/* binding */ prevent_default),
/* harmony export */   "prop_dev": () => (/* binding */ prop_dev),
/* harmony export */   "query_selector_all": () => (/* binding */ query_selector_all),
/* harmony export */   "raf": () => (/* binding */ raf),
/* harmony export */   "run": () => (/* binding */ run),
/* harmony export */   "run_all": () => (/* binding */ run_all),
/* harmony export */   "safe_not_equal": () => (/* binding */ safe_not_equal),
/* harmony export */   "schedule_update": () => (/* binding */ schedule_update),
/* harmony export */   "select_multiple_value": () => (/* binding */ select_multiple_value),
/* harmony export */   "select_option": () => (/* binding */ select_option),
/* harmony export */   "select_options": () => (/* binding */ select_options),
/* harmony export */   "select_value": () => (/* binding */ select_value),
/* harmony export */   "self": () => (/* binding */ self),
/* harmony export */   "setContext": () => (/* binding */ setContext),
/* harmony export */   "set_attributes": () => (/* binding */ set_attributes),
/* harmony export */   "set_current_component": () => (/* binding */ set_current_component),
/* harmony export */   "set_custom_element_data": () => (/* binding */ set_custom_element_data),
/* harmony export */   "set_data": () => (/* binding */ set_data),
/* harmony export */   "set_data_dev": () => (/* binding */ set_data_dev),
/* harmony export */   "set_input_type": () => (/* binding */ set_input_type),
/* harmony export */   "set_input_value": () => (/* binding */ set_input_value),
/* harmony export */   "set_now": () => (/* binding */ set_now),
/* harmony export */   "set_raf": () => (/* binding */ set_raf),
/* harmony export */   "set_store_value": () => (/* binding */ set_store_value),
/* harmony export */   "set_style": () => (/* binding */ set_style),
/* harmony export */   "set_svg_attributes": () => (/* binding */ set_svg_attributes),
/* harmony export */   "space": () => (/* binding */ space),
/* harmony export */   "spread": () => (/* binding */ spread),
/* harmony export */   "src_url_equal": () => (/* binding */ src_url_equal),
/* harmony export */   "start_hydrating": () => (/* binding */ start_hydrating),
/* harmony export */   "stop_propagation": () => (/* binding */ stop_propagation),
/* harmony export */   "subscribe": () => (/* binding */ subscribe),
/* harmony export */   "svg_element": () => (/* binding */ svg_element),
/* harmony export */   "text": () => (/* binding */ text),
/* harmony export */   "tick": () => (/* binding */ tick),
/* harmony export */   "time_ranges_to_array": () => (/* binding */ time_ranges_to_array),
/* harmony export */   "to_number": () => (/* binding */ to_number),
/* harmony export */   "toggle_class": () => (/* binding */ toggle_class),
/* harmony export */   "transition_in": () => (/* binding */ transition_in),
/* harmony export */   "transition_out": () => (/* binding */ transition_out),
/* harmony export */   "trusted": () => (/* binding */ trusted),
/* harmony export */   "update_await_block_branch": () => (/* binding */ update_await_block_branch),
/* harmony export */   "update_keyed_each": () => (/* binding */ update_keyed_each),
/* harmony export */   "update_slot": () => (/* binding */ update_slot),
/* harmony export */   "update_slot_base": () => (/* binding */ update_slot_base),
/* harmony export */   "validate_component": () => (/* binding */ validate_component),
/* harmony export */   "validate_dynamic_element": () => (/* binding */ validate_dynamic_element),
/* harmony export */   "validate_each_argument": () => (/* binding */ validate_each_argument),
/* harmony export */   "validate_each_keys": () => (/* binding */ validate_each_keys),
/* harmony export */   "validate_slots": () => (/* binding */ validate_slots),
/* harmony export */   "validate_store": () => (/* binding */ validate_store),
/* harmony export */   "validate_void_dynamic_element": () => (/* binding */ validate_void_dynamic_element),
/* harmony export */   "xlink_attr": () => (/* binding */ xlink_attr)
/* harmony export */ });
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function noop() {}

var identity = function identity(x) {
  return x;
};

function assign(tar, src) {
  // @ts-ignore
  for (var k in src) {
    tar[k] = src[k];
  }

  return tar;
}

function is_promise(value) {
  return value && _typeof(value) === 'object' && typeof value.then === 'function';
}

function add_location(element, file, line, column, _char) {
  element.__svelte_meta = {
    loc: {
      file: file,
      line: line,
      column: column,
      "char": _char
    }
  };
}

function run(fn) {
  return fn();
}

function blank_object() {
  return Object.create(null);
}

function run_all(fns) {
  fns.forEach(run);
}

function is_function(thing) {
  return typeof thing === 'function';
}

function safe_not_equal(a, b) {
  return a != a ? b == b : a !== b || a && _typeof(a) === 'object' || typeof a === 'function';
}

var src_url_equal_anchor;

function src_url_equal(element_src, url) {
  if (!src_url_equal_anchor) {
    src_url_equal_anchor = document.createElement('a');
  }

  src_url_equal_anchor.href = url;
  return element_src === src_url_equal_anchor.href;
}

function not_equal(a, b) {
  return a != a ? b == b : a !== b;
}

function is_empty(obj) {
  return Object.keys(obj).length === 0;
}

function validate_store(store, name) {
  if (store != null && typeof store.subscribe !== 'function') {
    throw new Error("'".concat(name, "' is not a store with a 'subscribe' method"));
  }
}

function subscribe(store) {
  if (store == null) {
    return noop;
  }

  for (var _len = arguments.length, callbacks = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    callbacks[_key - 1] = arguments[_key];
  }

  var unsub = store.subscribe.apply(store, callbacks);
  return unsub.unsubscribe ? function () {
    return unsub.unsubscribe();
  } : unsub;
}

function get_store_value(store) {
  var value;
  subscribe(store, function (_) {
    return value = _;
  })();
  return value;
}

function component_subscribe(component, store, callback) {
  component.$$.on_destroy.push(subscribe(store, callback));
}

function create_slot(definition, ctx, $$scope, fn) {
  if (definition) {
    var slot_ctx = get_slot_context(definition, ctx, $$scope, fn);
    return definition[0](slot_ctx);
  }
}

function get_slot_context(definition, ctx, $$scope, fn) {
  return definition[1] && fn ? assign($$scope.ctx.slice(), definition[1](fn(ctx))) : $$scope.ctx;
}

function get_slot_changes(definition, $$scope, dirty, fn) {
  if (definition[2] && fn) {
    var lets = definition[2](fn(dirty));

    if ($$scope.dirty === undefined) {
      return lets;
    }

    if (_typeof(lets) === 'object') {
      var merged = [];
      var len = Math.max($$scope.dirty.length, lets.length);

      for (var i = 0; i < len; i += 1) {
        merged[i] = $$scope.dirty[i] | lets[i];
      }

      return merged;
    }

    return $$scope.dirty | lets;
  }

  return $$scope.dirty;
}

function update_slot_base(slot, slot_definition, ctx, $$scope, slot_changes, get_slot_context_fn) {
  if (slot_changes) {
    var slot_context = get_slot_context(slot_definition, ctx, $$scope, get_slot_context_fn);
    slot.p(slot_context, slot_changes);
  }
}

function update_slot(slot, slot_definition, ctx, $$scope, dirty, get_slot_changes_fn, get_slot_context_fn) {
  var slot_changes = get_slot_changes(slot_definition, $$scope, dirty, get_slot_changes_fn);
  update_slot_base(slot, slot_definition, ctx, $$scope, slot_changes, get_slot_context_fn);
}

function get_all_dirty_from_scope($$scope) {
  if ($$scope.ctx.length > 32) {
    var dirty = [];
    var length = $$scope.ctx.length / 32;

    for (var i = 0; i < length; i++) {
      dirty[i] = -1;
    }

    return dirty;
  }

  return -1;
}

function exclude_internal_props(props) {
  var result = {};

  for (var k in props) {
    if (k[0] !== '$') result[k] = props[k];
  }

  return result;
}

function compute_rest_props(props, keys) {
  var rest = {};
  keys = new Set(keys);

  for (var k in props) {
    if (!keys.has(k) && k[0] !== '$') rest[k] = props[k];
  }

  return rest;
}

function compute_slots(slots) {
  var result = {};

  for (var key in slots) {
    result[key] = true;
  }

  return result;
}

function once(fn) {
  var ran = false;
  return function () {
    if (ran) return;
    ran = true;

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    fn.call.apply(fn, [this].concat(args));
  };
}

function null_to_empty(value) {
  return value == null ? '' : value;
}

function set_store_value(store, ret, value) {
  store.set(value);
  return ret;
}

var has_prop = function has_prop(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
};

function action_destroyer(action_result) {
  return action_result && is_function(action_result.destroy) ? action_result.destroy : noop;
}

var is_client = typeof window !== 'undefined';
var now = is_client ? function () {
  return window.performance.now();
} : function () {
  return Date.now();
};
var raf = is_client ? function (cb) {
  return requestAnimationFrame(cb);
} : noop; // used internally for testing

function set_now(fn) {
  now = fn;
}

function set_raf(fn) {
  raf = fn;
}

var tasks = new Set();

function run_tasks(now) {
  tasks.forEach(function (task) {
    if (!task.c(now)) {
      tasks["delete"](task);
      task.f();
    }
  });
  if (tasks.size !== 0) raf(run_tasks);
}
/**
 * For testing purposes only!
 */


function clear_loops() {
  tasks.clear();
}
/**
 * Creates a new task that runs on each raf frame
 * until it returns a falsy value or is aborted
 */


function loop(callback) {
  var task;
  if (tasks.size === 0) raf(run_tasks);
  return {
    promise: new Promise(function (fulfill) {
      tasks.add(task = {
        c: callback,
        f: fulfill
      });
    }),
    abort: function abort() {
      tasks["delete"](task);
    }
  };
} // Track which nodes are claimed during hydration. Unclaimed nodes can then be removed from the DOM
// at the end of hydration without touching the remaining nodes.


var is_hydrating = false;

function start_hydrating() {
  is_hydrating = true;
}

function end_hydrating() {
  is_hydrating = false;
}

function upper_bound(low, high, key, value) {
  // Return first index of value larger than input value in the range [low, high)
  while (low < high) {
    var mid = low + (high - low >> 1);

    if (key(mid) <= value) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }

  return low;
}

function init_hydrate(target) {
  if (target.hydrate_init) return;
  target.hydrate_init = true; // We know that all children have claim_order values since the unclaimed have been detached if target is not <head>

  var children = target.childNodes; // If target is <head>, there may be children without claim_order

  if (target.nodeName === 'HEAD') {
    var myChildren = [];

    for (var i = 0; i < children.length; i++) {
      var node = children[i];

      if (node.claim_order !== undefined) {
        myChildren.push(node);
      }
    }

    children = myChildren;
  }
  /*
  * Reorder claimed children optimally.
  * We can reorder claimed children optimally by finding the longest subsequence of
  * nodes that are already claimed in order and only moving the rest. The longest
  * subsequence subsequence of nodes that are claimed in order can be found by
  * computing the longest increasing subsequence of .claim_order values.
  *
  * This algorithm is optimal in generating the least amount of reorder operations
  * possible.
  *
  * Proof:
  * We know that, given a set of reordering operations, the nodes that do not move
  * always form an increasing subsequence, since they do not move among each other
  * meaning that they must be already ordered among each other. Thus, the maximal
  * set of nodes that do not move form a longest increasing subsequence.
  */
  // Compute longest increasing subsequence
  // m: subsequence length j => index k of smallest value that ends an increasing subsequence of length j


  var m = new Int32Array(children.length + 1); // Predecessor indices + 1

  var p = new Int32Array(children.length);
  m[0] = -1;
  var longest = 0;

  for (var _i = 0; _i < children.length; _i++) {
    var current = children[_i].claim_order; // Find the largest subsequence length such that it ends in a value less than our current value
    // upper_bound returns first greater value, so we subtract one
    // with fast path for when we are on the current longest subsequence

    var seqLen = (longest > 0 && children[m[longest]].claim_order <= current ? longest + 1 : upper_bound(1, longest, function (idx) {
      return children[m[idx]].claim_order;
    }, current)) - 1;
    p[_i] = m[seqLen] + 1;
    var newLen = seqLen + 1; // We can guarantee that current is the smallest value. Otherwise, we would have generated a longer sequence.

    m[newLen] = _i;
    longest = Math.max(newLen, longest);
  } // The longest increasing subsequence of nodes (initially reversed)


  var lis = []; // The rest of the nodes, nodes that will be moved

  var toMove = [];
  var last = children.length - 1;

  for (var cur = m[longest] + 1; cur != 0; cur = p[cur - 1]) {
    lis.push(children[cur - 1]);

    for (; last >= cur; last--) {
      toMove.push(children[last]);
    }

    last--;
  }

  for (; last >= 0; last--) {
    toMove.push(children[last]);
  }

  lis.reverse(); // We sort the nodes being moved to guarantee that their insertion order matches the claim order

  toMove.sort(function (a, b) {
    return a.claim_order - b.claim_order;
  }); // Finally, we move the nodes

  for (var _i2 = 0, j = 0; _i2 < toMove.length; _i2++) {
    while (j < lis.length && toMove[_i2].claim_order >= lis[j].claim_order) {
      j++;
    }

    var anchor = j < lis.length ? lis[j] : null;
    target.insertBefore(toMove[_i2], anchor);
  }
}

function append(target, node) {
  target.appendChild(node);
}

function append_styles(target, style_sheet_id, styles) {
  var append_styles_to = get_root_for_style(target);

  if (!append_styles_to.getElementById(style_sheet_id)) {
    var style = element('style');
    style.id = style_sheet_id;
    style.textContent = styles;
    append_stylesheet(append_styles_to, style);
  }
}

function get_root_for_style(node) {
  if (!node) return document;
  var root = node.getRootNode ? node.getRootNode() : node.ownerDocument;

  if (root && root.host) {
    return root;
  }

  return node.ownerDocument;
}

function append_empty_stylesheet(node) {
  var style_element = element('style');
  append_stylesheet(get_root_for_style(node), style_element);
  return style_element.sheet;
}

function append_stylesheet(node, style) {
  append(node.head || node, style);
  return style.sheet;
}

function append_hydration(target, node) {
  if (is_hydrating) {
    init_hydrate(target);

    if (target.actual_end_child === undefined || target.actual_end_child !== null && target.actual_end_child.parentNode !== target) {
      target.actual_end_child = target.firstChild;
    } // Skip nodes of undefined ordering


    while (target.actual_end_child !== null && target.actual_end_child.claim_order === undefined) {
      target.actual_end_child = target.actual_end_child.nextSibling;
    }

    if (node !== target.actual_end_child) {
      // We only insert if the ordering of this node should be modified or the parent node is not target
      if (node.claim_order !== undefined || node.parentNode !== target) {
        target.insertBefore(node, target.actual_end_child);
      }
    } else {
      target.actual_end_child = node.nextSibling;
    }
  } else if (node.parentNode !== target || node.nextSibling !== null) {
    target.appendChild(node);
  }
}

function insert(target, node, anchor) {
  target.insertBefore(node, anchor || null);
}

function insert_hydration(target, node, anchor) {
  if (is_hydrating && !anchor) {
    append_hydration(target, node);
  } else if (node.parentNode !== target || node.nextSibling != anchor) {
    target.insertBefore(node, anchor || null);
  }
}

function detach(node) {
  node.parentNode.removeChild(node);
}

function destroy_each(iterations, detaching) {
  for (var i = 0; i < iterations.length; i += 1) {
    if (iterations[i]) iterations[i].d(detaching);
  }
}

function element(name) {
  return document.createElement(name);
}

function element_is(name, is) {
  return document.createElement(name, {
    is: is
  });
}

function object_without_properties(obj, exclude) {
  var target = {};

  for (var k in obj) {
    if (has_prop(obj, k) // @ts-ignore
    && exclude.indexOf(k) === -1) {
      // @ts-ignore
      target[k] = obj[k];
    }
  }

  return target;
}

function svg_element(name) {
  return document.createElementNS('http://www.w3.org/2000/svg', name);
}

function text(data) {
  return document.createTextNode(data);
}

function space() {
  return text(' ');
}

function empty() {
  return text('');
}

function listen(node, event, handler, options) {
  node.addEventListener(event, handler, options);
  return function () {
    return node.removeEventListener(event, handler, options);
  };
}

function prevent_default(fn) {
  return function (event) {
    event.preventDefault(); // @ts-ignore

    return fn.call(this, event);
  };
}

function stop_propagation(fn) {
  return function (event) {
    event.stopPropagation(); // @ts-ignore

    return fn.call(this, event);
  };
}

function self(fn) {
  return function (event) {
    // @ts-ignore
    if (event.target === this) fn.call(this, event);
  };
}

function trusted(fn) {
  return function (event) {
    // @ts-ignore
    if (event.isTrusted) fn.call(this, event);
  };
}

function attr(node, attribute, value) {
  if (value == null) node.removeAttribute(attribute);else if (node.getAttribute(attribute) !== value) node.setAttribute(attribute, value);
}

function set_attributes(node, attributes) {
  // @ts-ignore
  var descriptors = Object.getOwnPropertyDescriptors(node.__proto__);

  for (var key in attributes) {
    if (attributes[key] == null) {
      node.removeAttribute(key);
    } else if (key === 'style') {
      node.style.cssText = attributes[key];
    } else if (key === '__value') {
      node.value = node[key] = attributes[key];
    } else if (descriptors[key] && descriptors[key].set) {
      node[key] = attributes[key];
    } else {
      attr(node, key, attributes[key]);
    }
  }
}

function set_svg_attributes(node, attributes) {
  for (var key in attributes) {
    attr(node, key, attributes[key]);
  }
}

function set_custom_element_data(node, prop, value) {
  if (prop in node) {
    node[prop] = typeof node[prop] === 'boolean' && value === '' ? true : value;
  } else {
    attr(node, prop, value);
  }
}

function xlink_attr(node, attribute, value) {
  node.setAttributeNS('http://www.w3.org/1999/xlink', attribute, value);
}

function get_binding_group_value(group, __value, checked) {
  var value = new Set();

  for (var i = 0; i < group.length; i += 1) {
    if (group[i].checked) value.add(group[i].__value);
  }

  if (!checked) {
    value["delete"](__value);
  }

  return Array.from(value);
}

function to_number(value) {
  return value === '' ? null : +value;
}

function time_ranges_to_array(ranges) {
  var array = [];

  for (var i = 0; i < ranges.length; i += 1) {
    array.push({
      start: ranges.start(i),
      end: ranges.end(i)
    });
  }

  return array;
}

function children(element) {
  return Array.from(element.childNodes);
}

function init_claim_info(nodes) {
  if (nodes.claim_info === undefined) {
    nodes.claim_info = {
      last_index: 0,
      total_claimed: 0
    };
  }
}

function claim_node(nodes, predicate, processNode, createNode) {
  var dontUpdateLastIndex = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  // Try to find nodes in an order such that we lengthen the longest increasing subsequence
  init_claim_info(nodes);

  var resultNode = function () {
    // We first try to find an element after the previous one
    for (var i = nodes.claim_info.last_index; i < nodes.length; i++) {
      var node = nodes[i];

      if (predicate(node)) {
        var replacement = processNode(node);

        if (replacement === undefined) {
          nodes.splice(i, 1);
        } else {
          nodes[i] = replacement;
        }

        if (!dontUpdateLastIndex) {
          nodes.claim_info.last_index = i;
        }

        return node;
      }
    } // Otherwise, we try to find one before
    // We iterate in reverse so that we don't go too far back


    for (var _i3 = nodes.claim_info.last_index - 1; _i3 >= 0; _i3--) {
      var _node = nodes[_i3];

      if (predicate(_node)) {
        var _replacement = processNode(_node);

        if (_replacement === undefined) {
          nodes.splice(_i3, 1);
        } else {
          nodes[_i3] = _replacement;
        }

        if (!dontUpdateLastIndex) {
          nodes.claim_info.last_index = _i3;
        } else if (_replacement === undefined) {
          // Since we spliced before the last_index, we decrease it
          nodes.claim_info.last_index--;
        }

        return _node;
      }
    } // If we can't find any matching node, we create a new one


    return createNode();
  }();

  resultNode.claim_order = nodes.claim_info.total_claimed;
  nodes.claim_info.total_claimed += 1;
  return resultNode;
}

function claim_element_base(nodes, name, attributes, create_element) {
  return claim_node(nodes, function (node) {
    return node.nodeName === name;
  }, function (node) {
    var remove = [];

    for (var j = 0; j < node.attributes.length; j++) {
      var attribute = node.attributes[j];

      if (!attributes[attribute.name]) {
        remove.push(attribute.name);
      }
    }

    remove.forEach(function (v) {
      return node.removeAttribute(v);
    });
    return undefined;
  }, function () {
    return create_element(name);
  });
}

function claim_element(nodes, name, attributes) {
  return claim_element_base(nodes, name, attributes, element);
}

function claim_svg_element(nodes, name, attributes) {
  return claim_element_base(nodes, name, attributes, svg_element);
}

function claim_text(nodes, data) {
  return claim_node(nodes, function (node) {
    return node.nodeType === 3;
  }, function (node) {
    var dataStr = '' + data;

    if (node.data.startsWith(dataStr)) {
      if (node.data.length !== dataStr.length) {
        return node.splitText(dataStr.length);
      }
    } else {
      node.data = dataStr;
    }
  }, function () {
    return text(data);
  }, true // Text nodes should not update last index since it is likely not worth it to eliminate an increasing subsequence of actual elements
  );
}

function claim_space(nodes) {
  return claim_text(nodes, ' ');
}

function find_comment(nodes, text, start) {
  for (var i = start; i < nodes.length; i += 1) {
    var node = nodes[i];

    if (node.nodeType === 8
    /* comment node */
    && node.textContent.trim() === text) {
      return i;
    }
  }

  return nodes.length;
}

function claim_html_tag(nodes, is_svg) {
  // find html opening tag
  var start_index = find_comment(nodes, 'HTML_TAG_START', 0);
  var end_index = find_comment(nodes, 'HTML_TAG_END', start_index);

  if (start_index === end_index) {
    return new HtmlTagHydration(undefined, is_svg);
  }

  init_claim_info(nodes);
  var html_tag_nodes = nodes.splice(start_index, end_index - start_index + 1);
  detach(html_tag_nodes[0]);
  detach(html_tag_nodes[html_tag_nodes.length - 1]);
  var claimed_nodes = html_tag_nodes.slice(1, html_tag_nodes.length - 1);

  var _iterator = _createForOfIteratorHelper(claimed_nodes),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var n = _step.value;
      n.claim_order = nodes.claim_info.total_claimed;
      nodes.claim_info.total_claimed += 1;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return new HtmlTagHydration(claimed_nodes, is_svg);
}

function set_data(text, data) {
  data = '' + data;
  if (text.wholeText !== data) text.data = data;
}

function set_input_value(input, value) {
  input.value = value == null ? '' : value;
}

function set_input_type(input, type) {
  try {
    input.type = type;
  } catch (e) {// do nothing
  }
}

function set_style(node, key, value, important) {
  if (value === null) {
    node.style.removeProperty(key);
  } else {
    node.style.setProperty(key, value, important ? 'important' : '');
  }
}

function select_option(select, value) {
  for (var i = 0; i < select.options.length; i += 1) {
    var option = select.options[i];

    if (option.__value === value) {
      option.selected = true;
      return;
    }
  }

  select.selectedIndex = -1; // no option should be selected
}

function select_options(select, value) {
  for (var i = 0; i < select.options.length; i += 1) {
    var option = select.options[i];
    option.selected = ~value.indexOf(option.__value);
  }
}

function select_value(select) {
  var selected_option = select.querySelector(':checked') || select.options[0];
  return selected_option && selected_option.__value;
}

function select_multiple_value(select) {
  return [].map.call(select.querySelectorAll(':checked'), function (option) {
    return option.__value;
  });
} // unfortunately this can't be a constant as that wouldn't be tree-shakeable
// so we cache the result instead


var crossorigin;

function is_crossorigin() {
  if (crossorigin === undefined) {
    crossorigin = false;

    try {
      if (typeof window !== 'undefined' && window.parent) {
        void window.parent.document;
      }
    } catch (error) {
      crossorigin = true;
    }
  }

  return crossorigin;
}

function add_resize_listener(node, fn) {
  var computed_style = getComputedStyle(node);

  if (computed_style.position === 'static') {
    node.style.position = 'relative';
  }

  var iframe = element('iframe');
  iframe.setAttribute('style', 'display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; ' + 'overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;');
  iframe.setAttribute('aria-hidden', 'true');
  iframe.tabIndex = -1;
  var crossorigin = is_crossorigin();
  var unsubscribe;

  if (crossorigin) {
    iframe.src = "data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}</script>";
    unsubscribe = listen(window, 'message', function (event) {
      if (event.source === iframe.contentWindow) fn();
    });
  } else {
    iframe.src = 'about:blank';

    iframe.onload = function () {
      unsubscribe = listen(iframe.contentWindow, 'resize', fn);
    };
  }

  append(node, iframe);
  return function () {
    if (crossorigin) {
      unsubscribe();
    } else if (unsubscribe && iframe.contentWindow) {
      unsubscribe();
    }

    detach(iframe);
  };
}

function toggle_class(element, name, toggle) {
  element.classList[toggle ? 'add' : 'remove'](name);
}

function custom_event(type, detail) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref$bubbles = _ref.bubbles,
      bubbles = _ref$bubbles === void 0 ? false : _ref$bubbles,
      _ref$cancelable = _ref.cancelable,
      cancelable = _ref$cancelable === void 0 ? false : _ref$cancelable;

  var e = document.createEvent('CustomEvent');
  e.initCustomEvent(type, bubbles, cancelable, detail);
  return e;
}

function query_selector_all(selector) {
  var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.body;
  return Array.from(parent.querySelectorAll(selector));
}

var HtmlTag = /*#__PURE__*/function () {
  function HtmlTag() {
    var is_svg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    _classCallCheck(this, HtmlTag);

    this.is_svg = false;
    this.is_svg = is_svg;
    this.e = this.n = null;
  }

  _createClass(HtmlTag, [{
    key: "c",
    value: function c(html) {
      this.h(html);
    }
  }, {
    key: "m",
    value: function m(html, target) {
      var anchor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

      if (!this.e) {
        if (this.is_svg) this.e = svg_element(target.nodeName);else this.e = element(target.nodeName);
        this.t = target;
        this.c(html);
      }

      this.i(anchor);
    }
  }, {
    key: "h",
    value: function h(html) {
      this.e.innerHTML = html;
      this.n = Array.from(this.e.childNodes);
    }
  }, {
    key: "i",
    value: function i(anchor) {
      for (var i = 0; i < this.n.length; i += 1) {
        insert(this.t, this.n[i], anchor);
      }
    }
  }, {
    key: "p",
    value: function p(html) {
      this.d();
      this.h(html);
      this.i(this.a);
    }
  }, {
    key: "d",
    value: function d() {
      this.n.forEach(detach);
    }
  }]);

  return HtmlTag;
}();

var HtmlTagHydration = /*#__PURE__*/function (_HtmlTag) {
  _inherits(HtmlTagHydration, _HtmlTag);

  var _super = _createSuper(HtmlTagHydration);

  function HtmlTagHydration(claimed_nodes) {
    var _this;

    var is_svg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    _classCallCheck(this, HtmlTagHydration);

    _this = _super.call(this, is_svg);
    _this.e = _this.n = null;
    _this.l = claimed_nodes;
    return _this;
  }

  _createClass(HtmlTagHydration, [{
    key: "c",
    value: function c(html) {
      if (this.l) {
        this.n = this.l;
      } else {
        _get(_getPrototypeOf(HtmlTagHydration.prototype), "c", this).call(this, html);
      }
    }
  }, {
    key: "i",
    value: function i(anchor) {
      for (var i = 0; i < this.n.length; i += 1) {
        insert_hydration(this.t, this.n[i], anchor);
      }
    }
  }]);

  return HtmlTagHydration;
}(HtmlTag);

function attribute_to_object(attributes) {
  var result = {};

  var _iterator2 = _createForOfIteratorHelper(attributes),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var attribute = _step2.value;
      result[attribute.name] = attribute.value;
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  return result;
}

function get_custom_elements_slots(element) {
  var result = {};
  element.childNodes.forEach(function (node) {
    result[node.slot || 'default'] = true;
  });
  return result;
} // we need to store the information for multiple documents because a Svelte application could also contain iframes
// https://github.com/sveltejs/svelte/issues/3624


var managed_styles = new Map();
var active = 0; // https://github.com/darkskyapp/string-hash/blob/master/index.js

function hash(str) {
  var hash = 5381;
  var i = str.length;

  while (i--) {
    hash = (hash << 5) - hash ^ str.charCodeAt(i);
  }

  return hash >>> 0;
}

function create_style_information(doc, node) {
  var info = {
    stylesheet: append_empty_stylesheet(node),
    rules: {}
  };
  managed_styles.set(doc, info);
  return info;
}

function create_rule(node, a, b, duration, delay, ease, fn) {
  var uid = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 0;
  var step = 16.666 / duration;
  var keyframes = '{\n';

  for (var p = 0; p <= 1; p += step) {
    var t = a + (b - a) * ease(p);
    keyframes += p * 100 + "%{".concat(fn(t, 1 - t), "}\n");
  }

  var rule = keyframes + "100% {".concat(fn(b, 1 - b), "}\n}");
  var name = "__svelte_".concat(hash(rule), "_").concat(uid);
  var doc = get_root_for_style(node);

  var _ref2 = managed_styles.get(doc) || create_style_information(doc, node),
      stylesheet = _ref2.stylesheet,
      rules = _ref2.rules;

  if (!rules[name]) {
    rules[name] = true;
    stylesheet.insertRule("@keyframes ".concat(name, " ").concat(rule), stylesheet.cssRules.length);
  }

  var animation = node.style.animation || '';
  node.style.animation = "".concat(animation ? "".concat(animation, ", ") : '').concat(name, " ").concat(duration, "ms linear ").concat(delay, "ms 1 both");
  active += 1;
  return name;
}

function delete_rule(node, name) {
  var previous = (node.style.animation || '').split(', ');
  var next = previous.filter(name ? function (anim) {
    return anim.indexOf(name) < 0;
  } // remove specific animation
  : function (anim) {
    return anim.indexOf('__svelte') === -1;
  } // remove all Svelte animations
  );
  var deleted = previous.length - next.length;

  if (deleted) {
    node.style.animation = next.join(', ');
    active -= deleted;
    if (!active) clear_rules();
  }
}

function clear_rules() {
  raf(function () {
    if (active) return;
    managed_styles.forEach(function (info) {
      var ownerNode = info.stylesheet.ownerNode; // there is no ownerNode if it runs on jsdom.

      if (ownerNode) detach(ownerNode);
    });
    managed_styles.clear();
  });
}

function create_animation(node, from, fn, params) {
  if (!from) return noop;
  var to = node.getBoundingClientRect();
  if (from.left === to.left && from.right === to.right && from.top === to.top && from.bottom === to.bottom) return noop;

  var _fn = fn(node, {
    from: from,
    to: to
  }, params),
      _fn$delay = _fn.delay,
      delay = _fn$delay === void 0 ? 0 : _fn$delay,
      _fn$duration = _fn.duration,
      duration = _fn$duration === void 0 ? 300 : _fn$duration,
      _fn$easing = _fn.easing,
      easing = _fn$easing === void 0 ? identity : _fn$easing,
      _fn$start = _fn.start,
      start_time = _fn$start === void 0 ? now() + delay : _fn$start,
      _fn$end = _fn.end,
      end = _fn$end === void 0 ? start_time + duration : _fn$end,
      _fn$tick = _fn.tick,
      tick = _fn$tick === void 0 ? noop : _fn$tick,
      css = _fn.css;

  var running = true;
  var started = false;
  var name;

  function start() {
    if (css) {
      name = create_rule(node, 0, 1, duration, delay, easing, css);
    }

    if (!delay) {
      started = true;
    }
  }

  function stop() {
    if (css) delete_rule(node, name);
    running = false;
  }

  loop(function (now) {
    if (!started && now >= start_time) {
      started = true;
    }

    if (started && now >= end) {
      tick(1, 0);
      stop();
    }

    if (!running) {
      return false;
    }

    if (started) {
      var p = now - start_time;
      var t = 0 + 1 * easing(p / duration);
      tick(t, 1 - t);
    }

    return true;
  });
  start();
  tick(0, 1);
  return stop;
}

function fix_position(node) {
  var style = getComputedStyle(node);

  if (style.position !== 'absolute' && style.position !== 'fixed') {
    var width = style.width,
        height = style.height;
    var a = node.getBoundingClientRect();
    node.style.position = 'absolute';
    node.style.width = width;
    node.style.height = height;
    add_transform(node, a);
  }
}

function add_transform(node, a) {
  var b = node.getBoundingClientRect();

  if (a.left !== b.left || a.top !== b.top) {
    var style = getComputedStyle(node);
    var transform = style.transform === 'none' ? '' : style.transform;
    node.style.transform = "".concat(transform, " translate(").concat(a.left - b.left, "px, ").concat(a.top - b.top, "px)");
  }
}

var current_component;

function set_current_component(component) {
  current_component = component;
}

function get_current_component() {
  if (!current_component) throw new Error('Function called outside component initialization');
  return current_component;
}

function beforeUpdate(fn) {
  get_current_component().$$.before_update.push(fn);
}

function onMount(fn) {
  get_current_component().$$.on_mount.push(fn);
}

function afterUpdate(fn) {
  get_current_component().$$.after_update.push(fn);
}

function onDestroy(fn) {
  get_current_component().$$.on_destroy.push(fn);
}

function createEventDispatcher() {
  var component = get_current_component();
  return function (type, detail) {
    var _ref3 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
        _ref3$cancelable = _ref3.cancelable,
        cancelable = _ref3$cancelable === void 0 ? false : _ref3$cancelable;

    var callbacks = component.$$.callbacks[type];

    if (callbacks) {
      // TODO are there situations where events could be dispatched
      // in a server (non-DOM) environment?
      var event = custom_event(type, detail, {
        cancelable: cancelable
      });
      callbacks.slice().forEach(function (fn) {
        fn.call(component, event);
      });
      return !event.defaultPrevented;
    }

    return true;
  };
}

function setContext(key, context) {
  get_current_component().$$.context.set(key, context);
  return context;
}

function getContext(key) {
  return get_current_component().$$.context.get(key);
}

function getAllContexts() {
  return get_current_component().$$.context;
}

function hasContext(key) {
  return get_current_component().$$.context.has(key);
} // TODO figure out if we still want to support
// shorthand events, or if we want to implement
// a real bubbling mechanism


function bubble(component, event) {
  var _this2 = this;

  var callbacks = component.$$.callbacks[event.type];

  if (callbacks) {
    // @ts-ignore
    callbacks.slice().forEach(function (fn) {
      return fn.call(_this2, event);
    });
  }
}

var dirty_components = [];
var intros = {
  enabled: false
};
var binding_callbacks = [];
var render_callbacks = [];
var flush_callbacks = [];
var resolved_promise = Promise.resolve();
var update_scheduled = false;

function schedule_update() {
  if (!update_scheduled) {
    update_scheduled = true;
    resolved_promise.then(flush);
  }
}

function tick() {
  schedule_update();
  return resolved_promise;
}

function add_render_callback(fn) {
  render_callbacks.push(fn);
}

function add_flush_callback(fn) {
  flush_callbacks.push(fn);
} // flush() calls callbacks in this order:
// 1. All beforeUpdate callbacks, in order: parents before children
// 2. All bind:this callbacks, in reverse order: children before parents.
// 3. All afterUpdate callbacks, in order: parents before children. EXCEPT
//    for afterUpdates called during the initial onMount, which are called in
//    reverse order: children before parents.
// Since callbacks might update component values, which could trigger another
// call to flush(), the following steps guard against this:
// 1. During beforeUpdate, any updated components will be added to the
//    dirty_components array and will cause a reentrant call to flush(). Because
//    the flush index is kept outside the function, the reentrant call will pick
//    up where the earlier call left off and go through all dirty components. The
//    current_component value is saved and restored so that the reentrant call will
//    not interfere with the "parent" flush() call.
// 2. bind:this callbacks cannot trigger new flush() calls.
// 3. During afterUpdate, any updated components will NOT have their afterUpdate
//    callback called a second time; the seen_callbacks set, outside the flush()
//    function, guarantees this behavior.


var seen_callbacks = new Set();
var flushidx = 0; // Do *not* move this inside the flush() function

function flush() {
  var saved_component = current_component;

  do {
    // first, call beforeUpdate functions
    // and update components
    while (flushidx < dirty_components.length) {
      var component = dirty_components[flushidx];
      flushidx++;
      set_current_component(component);
      update(component.$$);
    }

    set_current_component(null);
    dirty_components.length = 0;
    flushidx = 0;

    while (binding_callbacks.length) {
      binding_callbacks.pop()();
    } // then, once components are updated, call
    // afterUpdate functions. This may cause
    // subsequent updates...


    for (var i = 0; i < render_callbacks.length; i += 1) {
      var callback = render_callbacks[i];

      if (!seen_callbacks.has(callback)) {
        // ...so guard against infinite loops
        seen_callbacks.add(callback);
        callback();
      }
    }

    render_callbacks.length = 0;
  } while (dirty_components.length);

  while (flush_callbacks.length) {
    flush_callbacks.pop()();
  }

  update_scheduled = false;
  seen_callbacks.clear();
  set_current_component(saved_component);
}

function update($$) {
  if ($$.fragment !== null) {
    $$.update();
    run_all($$.before_update);
    var dirty = $$.dirty;
    $$.dirty = [-1];
    $$.fragment && $$.fragment.p($$.ctx, dirty);
    $$.after_update.forEach(add_render_callback);
  }
}

var promise;

function wait() {
  if (!promise) {
    promise = Promise.resolve();
    promise.then(function () {
      promise = null;
    });
  }

  return promise;
}

function dispatch(node, direction, kind) {
  node.dispatchEvent(custom_event("".concat(direction ? 'intro' : 'outro').concat(kind)));
}

var outroing = new Set();
var outros;

function group_outros() {
  outros = {
    r: 0,
    c: [],
    p: outros // parent group

  };
}

function check_outros() {
  if (!outros.r) {
    run_all(outros.c);
  }

  outros = outros.p;
}

function transition_in(block, local) {
  if (block && block.i) {
    outroing["delete"](block);
    block.i(local);
  }
}

function transition_out(block, local, detach, callback) {
  if (block && block.o) {
    if (outroing.has(block)) return;
    outroing.add(block);
    outros.c.push(function () {
      outroing["delete"](block);

      if (callback) {
        if (detach) block.d(1);
        callback();
      }
    });
    block.o(local);
  } else if (callback) {
    callback();
  }
}

var null_transition = {
  duration: 0
};

function create_in_transition(node, fn, params) {
  var config = fn(node, params);
  var running = false;
  var animation_name;
  var task;
  var uid = 0;

  function cleanup() {
    if (animation_name) delete_rule(node, animation_name);
  }

  function go() {
    var _ref4 = config || null_transition,
        _ref4$delay = _ref4.delay,
        delay = _ref4$delay === void 0 ? 0 : _ref4$delay,
        _ref4$duration = _ref4.duration,
        duration = _ref4$duration === void 0 ? 300 : _ref4$duration,
        _ref4$easing = _ref4.easing,
        easing = _ref4$easing === void 0 ? identity : _ref4$easing,
        _ref4$tick = _ref4.tick,
        tick = _ref4$tick === void 0 ? noop : _ref4$tick,
        css = _ref4.css;

    if (css) animation_name = create_rule(node, 0, 1, duration, delay, easing, css, uid++);
    tick(0, 1);
    var start_time = now() + delay;
    var end_time = start_time + duration;
    if (task) task.abort();
    running = true;
    add_render_callback(function () {
      return dispatch(node, true, 'start');
    });
    task = loop(function (now) {
      if (running) {
        if (now >= end_time) {
          tick(1, 0);
          dispatch(node, true, 'end');
          cleanup();
          return running = false;
        }

        if (now >= start_time) {
          var t = easing((now - start_time) / duration);
          tick(t, 1 - t);
        }
      }

      return running;
    });
  }

  var started = false;
  return {
    start: function start() {
      if (started) return;
      started = true;
      delete_rule(node);

      if (is_function(config)) {
        config = config();
        wait().then(go);
      } else {
        go();
      }
    },
    invalidate: function invalidate() {
      started = false;
    },
    end: function end() {
      if (running) {
        cleanup();
        running = false;
      }
    }
  };
}

function create_out_transition(node, fn, params) {
  var config = fn(node, params);
  var running = true;
  var animation_name;
  var group = outros;
  group.r += 1;

  function go() {
    var _ref5 = config || null_transition,
        _ref5$delay = _ref5.delay,
        delay = _ref5$delay === void 0 ? 0 : _ref5$delay,
        _ref5$duration = _ref5.duration,
        duration = _ref5$duration === void 0 ? 300 : _ref5$duration,
        _ref5$easing = _ref5.easing,
        easing = _ref5$easing === void 0 ? identity : _ref5$easing,
        _ref5$tick = _ref5.tick,
        tick = _ref5$tick === void 0 ? noop : _ref5$tick,
        css = _ref5.css;

    if (css) animation_name = create_rule(node, 1, 0, duration, delay, easing, css);
    var start_time = now() + delay;
    var end_time = start_time + duration;
    add_render_callback(function () {
      return dispatch(node, false, 'start');
    });
    loop(function (now) {
      if (running) {
        if (now >= end_time) {
          tick(0, 1);
          dispatch(node, false, 'end');

          if (! --group.r) {
            // this will result in `end()` being called,
            // so we don't need to clean up here
            run_all(group.c);
          }

          return false;
        }

        if (now >= start_time) {
          var t = easing((now - start_time) / duration);
          tick(1 - t, t);
        }
      }

      return running;
    });
  }

  if (is_function(config)) {
    wait().then(function () {
      // @ts-ignore
      config = config();
      go();
    });
  } else {
    go();
  }

  return {
    end: function end(reset) {
      if (reset && config.tick) {
        config.tick(1, 0);
      }

      if (running) {
        if (animation_name) delete_rule(node, animation_name);
        running = false;
      }
    }
  };
}

function create_bidirectional_transition(node, fn, params, intro) {
  var config = fn(node, params);
  var t = intro ? 0 : 1;
  var running_program = null;
  var pending_program = null;
  var animation_name = null;

  function clear_animation() {
    if (animation_name) delete_rule(node, animation_name);
  }

  function init(program, duration) {
    var d = program.b - t;
    duration *= Math.abs(d);
    return {
      a: t,
      b: program.b,
      d: d,
      duration: duration,
      start: program.start,
      end: program.start + duration,
      group: program.group
    };
  }

  function go(b) {
    var _ref6 = config || null_transition,
        _ref6$delay = _ref6.delay,
        delay = _ref6$delay === void 0 ? 0 : _ref6$delay,
        _ref6$duration = _ref6.duration,
        duration = _ref6$duration === void 0 ? 300 : _ref6$duration,
        _ref6$easing = _ref6.easing,
        easing = _ref6$easing === void 0 ? identity : _ref6$easing,
        _ref6$tick = _ref6.tick,
        tick = _ref6$tick === void 0 ? noop : _ref6$tick,
        css = _ref6.css;

    var program = {
      start: now() + delay,
      b: b
    };

    if (!b) {
      // @ts-ignore todo: improve typings
      program.group = outros;
      outros.r += 1;
    }

    if (running_program || pending_program) {
      pending_program = program;
    } else {
      // if this is an intro, and there's a delay, we need to do
      // an initial tick and/or apply CSS animation immediately
      if (css) {
        clear_animation();
        animation_name = create_rule(node, t, b, duration, delay, easing, css);
      }

      if (b) tick(0, 1);
      running_program = init(program, duration);
      add_render_callback(function () {
        return dispatch(node, b, 'start');
      });
      loop(function (now) {
        if (pending_program && now > pending_program.start) {
          running_program = init(pending_program, duration);
          pending_program = null;
          dispatch(node, running_program.b, 'start');

          if (css) {
            clear_animation();
            animation_name = create_rule(node, t, running_program.b, running_program.duration, 0, easing, config.css);
          }
        }

        if (running_program) {
          if (now >= running_program.end) {
            tick(t = running_program.b, 1 - t);
            dispatch(node, running_program.b, 'end');

            if (!pending_program) {
              // we're done
              if (running_program.b) {
                // intro — we can tidy up immediately
                clear_animation();
              } else {
                // outro — needs to be coordinated
                if (! --running_program.group.r) run_all(running_program.group.c);
              }
            }

            running_program = null;
          } else if (now >= running_program.start) {
            var p = now - running_program.start;
            t = running_program.a + running_program.d * easing(p / running_program.duration);
            tick(t, 1 - t);
          }
        }

        return !!(running_program || pending_program);
      });
    }
  }

  return {
    run: function run(b) {
      if (is_function(config)) {
        wait().then(function () {
          // @ts-ignore
          config = config();
          go(b);
        });
      } else {
        go(b);
      }
    },
    end: function end() {
      clear_animation();
      running_program = pending_program = null;
    }
  };
}

function handle_promise(promise, info) {
  var token = info.token = {};

  function update(type, index, key, value) {
    if (info.token !== token) return;
    info.resolved = value;
    var child_ctx = info.ctx;

    if (key !== undefined) {
      child_ctx = child_ctx.slice();
      child_ctx[key] = value;
    }

    var block = type && (info.current = type)(child_ctx);
    var needs_flush = false;

    if (info.block) {
      if (info.blocks) {
        info.blocks.forEach(function (block, i) {
          if (i !== index && block) {
            group_outros();
            transition_out(block, 1, 1, function () {
              if (info.blocks[i] === block) {
                info.blocks[i] = null;
              }
            });
            check_outros();
          }
        });
      } else {
        info.block.d(1);
      }

      block.c();
      transition_in(block, 1);
      block.m(info.mount(), info.anchor);
      needs_flush = true;
    }

    info.block = block;
    if (info.blocks) info.blocks[index] = block;

    if (needs_flush) {
      flush();
    }
  }

  if (is_promise(promise)) {
    var _current_component = get_current_component();

    promise.then(function (value) {
      set_current_component(_current_component);
      update(info.then, 1, info.value, value);
      set_current_component(null);
    }, function (error) {
      set_current_component(_current_component);
      update(info["catch"], 2, info.error, error);
      set_current_component(null);

      if (!info.hasCatch) {
        throw error;
      }
    }); // if we previously had a then/catch block, destroy it

    if (info.current !== info.pending) {
      update(info.pending, 0);
      return true;
    }
  } else {
    if (info.current !== info.then) {
      update(info.then, 1, info.value, promise);
      return true;
    }

    info.resolved = promise;
  }
}

function update_await_block_branch(info, ctx, dirty) {
  var child_ctx = ctx.slice();
  var resolved = info.resolved;

  if (info.current === info.then) {
    child_ctx[info.value] = resolved;
  }

  if (info.current === info["catch"]) {
    child_ctx[info.error] = resolved;
  }

  info.block.p(child_ctx, dirty);
}

var globals = typeof window !== 'undefined' ? window : typeof globalThis !== 'undefined' ? globalThis : global;

function destroy_block(block, lookup) {
  block.d(1);
  lookup["delete"](block.key);
}

function outro_and_destroy_block(block, lookup) {
  transition_out(block, 1, 1, function () {
    lookup["delete"](block.key);
  });
}

function fix_and_destroy_block(block, lookup) {
  block.f();
  destroy_block(block, lookup);
}

function fix_and_outro_and_destroy_block(block, lookup) {
  block.f();
  outro_and_destroy_block(block, lookup);
}

function update_keyed_each(old_blocks, dirty, get_key, dynamic, ctx, list, lookup, node, destroy, create_each_block, next, get_context) {
  var o = old_blocks.length;
  var n = list.length;
  var i = o;
  var old_indexes = {};

  while (i--) {
    old_indexes[old_blocks[i].key] = i;
  }

  var new_blocks = [];
  var new_lookup = new Map();
  var deltas = new Map();
  i = n;

  while (i--) {
    var child_ctx = get_context(ctx, list, i);
    var key = get_key(child_ctx);
    var block = lookup.get(key);

    if (!block) {
      block = create_each_block(key, child_ctx);
      block.c();
    } else if (dynamic) {
      block.p(child_ctx, dirty);
    }

    new_lookup.set(key, new_blocks[i] = block);
    if (key in old_indexes) deltas.set(key, Math.abs(i - old_indexes[key]));
  }

  var will_move = new Set();
  var did_move = new Set();

  function insert(block) {
    transition_in(block, 1);
    block.m(node, next);
    lookup.set(block.key, block);
    next = block.first;
    n--;
  }

  while (o && n) {
    var new_block = new_blocks[n - 1];
    var old_block = old_blocks[o - 1];
    var new_key = new_block.key;
    var old_key = old_block.key;

    if (new_block === old_block) {
      // do nothing
      next = new_block.first;
      o--;
      n--;
    } else if (!new_lookup.has(old_key)) {
      // remove old block
      destroy(old_block, lookup);
      o--;
    } else if (!lookup.has(new_key) || will_move.has(new_key)) {
      insert(new_block);
    } else if (did_move.has(old_key)) {
      o--;
    } else if (deltas.get(new_key) > deltas.get(old_key)) {
      did_move.add(new_key);
      insert(new_block);
    } else {
      will_move.add(old_key);
      o--;
    }
  }

  while (o--) {
    var _old_block = old_blocks[o];
    if (!new_lookup.has(_old_block.key)) destroy(_old_block, lookup);
  }

  while (n) {
    insert(new_blocks[n - 1]);
  }

  return new_blocks;
}

function validate_each_keys(ctx, list, get_context, get_key) {
  var keys = new Set();

  for (var i = 0; i < list.length; i++) {
    var key = get_key(get_context(ctx, list, i));

    if (keys.has(key)) {
      throw new Error('Cannot have duplicate keys in a keyed each');
    }

    keys.add(key);
  }
}

function get_spread_update(levels, updates) {
  var update = {};
  var to_null_out = {};
  var accounted_for = {
    $$scope: 1
  };
  var i = levels.length;

  while (i--) {
    var o = levels[i];
    var n = updates[i];

    if (n) {
      for (var key in o) {
        if (!(key in n)) to_null_out[key] = 1;
      }

      for (var _key3 in n) {
        if (!accounted_for[_key3]) {
          update[_key3] = n[_key3];
          accounted_for[_key3] = 1;
        }
      }

      levels[i] = n;
    } else {
      for (var _key4 in o) {
        accounted_for[_key4] = 1;
      }
    }
  }

  for (var _key5 in to_null_out) {
    if (!(_key5 in update)) update[_key5] = undefined;
  }

  return update;
}

function get_spread_object(spread_props) {
  return _typeof(spread_props) === 'object' && spread_props !== null ? spread_props : {};
} // source: https://html.spec.whatwg.org/multipage/indices.html


var boolean_attributes = new Set(['allowfullscreen', 'allowpaymentrequest', 'async', 'autofocus', 'autoplay', 'checked', 'controls', 'default', 'defer', 'disabled', 'formnovalidate', 'hidden', 'ismap', 'loop', 'multiple', 'muted', 'nomodule', 'novalidate', 'open', 'playsinline', 'readonly', 'required', 'reversed', 'selected']);
/** regex of all html void element names */

var void_element_names = /^(?:area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)$/;

function is_void(name) {
  return void_element_names.test(name) || name.toLowerCase() === '!doctype';
}

var invalid_attribute_name_character = /(?:[\t-\r "'\/=>\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFDD0-\uFDEF\uFEFF\uFFFE\uFFFF]|[\uD83F\uD87F\uD8BF\uD8FF\uD93F\uD97F\uD9BF\uD9FF\uDA3F\uDA7F\uDABF\uDAFF\uDB3F\uDB7F\uDBBF\uDBFF][\uDFFE\uDFFF])/; // https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
// https://infra.spec.whatwg.org/#noncharacter

function spread(args, attrs_to_add) {
  var attributes = Object.assign.apply(Object, [{}].concat(_toConsumableArray(args)));

  if (attrs_to_add) {
    var classes_to_add = attrs_to_add.classes;
    var styles_to_add = attrs_to_add.styles;

    if (classes_to_add) {
      if (attributes["class"] == null) {
        attributes["class"] = classes_to_add;
      } else {
        attributes["class"] += ' ' + classes_to_add;
      }
    }

    if (styles_to_add) {
      if (attributes.style == null) {
        attributes.style = style_object_to_string(styles_to_add);
      } else {
        attributes.style = style_object_to_string(merge_ssr_styles(attributes.style, styles_to_add));
      }
    }
  }

  var str = '';
  Object.keys(attributes).forEach(function (name) {
    if (invalid_attribute_name_character.test(name)) return;
    var value = attributes[name];
    if (value === true) str += ' ' + name;else if (boolean_attributes.has(name.toLowerCase())) {
      if (value) str += ' ' + name;
    } else if (value != null) {
      str += " ".concat(name, "=\"").concat(value, "\"");
    }
  });
  return str;
}

function merge_ssr_styles(style_attribute, style_directive) {
  var style_object = {};

  var _iterator3 = _createForOfIteratorHelper(style_attribute.split(';')),
      _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var individual_style = _step3.value;
      var colon_index = individual_style.indexOf(':');

      var _name = individual_style.slice(0, colon_index).trim();

      var _value = individual_style.slice(colon_index + 1).trim();

      if (!_name) continue;
      style_object[_name] = _value;
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }

  for (var name in style_directive) {
    var value = style_directive[name];

    if (value) {
      style_object[name] = value;
    } else {
      delete style_object[name];
    }
  }

  return style_object;
}

var ATTR_REGEX = /[&"]/g;
var CONTENT_REGEX = /[&<]/g;
/**
 * Note: this method is performance sensitive and has been optimized
 * https://github.com/sveltejs/svelte/pull/5701
 */

function escape(value) {
  var is_attr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var str = String(value);
  var pattern = is_attr ? ATTR_REGEX : CONTENT_REGEX;
  pattern.lastIndex = 0;
  var escaped = '';
  var last = 0;

  while (pattern.test(str)) {
    var i = pattern.lastIndex - 1;
    var ch = str[i];
    escaped += str.substring(last, i) + (ch === '&' ? '&amp;' : ch === '"' ? '&quot;' : '&lt;');
    last = i + 1;
  }

  return escaped + str.substring(last);
}

function escape_attribute_value(value) {
  // keep booleans, null, and undefined for the sake of `spread`
  var should_escape = typeof value === 'string' || value && _typeof(value) === 'object';
  return should_escape ? escape(value, true) : value;
}

function escape_object(obj) {
  var result = {};

  for (var key in obj) {
    result[key] = escape_attribute_value(obj[key]);
  }

  return result;
}

function each(items, fn) {
  var str = '';

  for (var i = 0; i < items.length; i += 1) {
    str += fn(items[i], i);
  }

  return str;
}

var missing_component = {
  $$render: function $$render() {
    return '';
  }
};

function validate_component(component, name) {
  if (!component || !component.$$render) {
    if (name === 'svelte:component') name += ' this={...}';
    throw new Error("<".concat(name, "> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules"));
  }

  return component;
}

function debug(file, line, column, values) {
  console.log("{@debug} ".concat(file ? file + ' ' : '', "(").concat(line, ":").concat(column, ")")); // eslint-disable-line no-console

  console.log(values); // eslint-disable-line no-console

  return '';
}

var on_destroy;

function create_ssr_component(fn) {
  function $$render(result, props, bindings, slots, context) {
    var parent_component = current_component;
    var $$ = {
      on_destroy: on_destroy,
      context: new Map(context || (parent_component ? parent_component.$$.context : [])),
      // these will be immediately discarded
      on_mount: [],
      before_update: [],
      after_update: [],
      callbacks: blank_object()
    };
    set_current_component({
      $$: $$
    });
    var html = fn(result, props, bindings, slots);
    set_current_component(parent_component);
    return html;
  }

  return {
    render: function render() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var _ref7 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref7$$$slots = _ref7.$$slots,
          $$slots = _ref7$$$slots === void 0 ? {} : _ref7$$$slots,
          _ref7$context = _ref7.context,
          context = _ref7$context === void 0 ? new Map() : _ref7$context;

      on_destroy = [];
      var result = {
        title: '',
        head: '',
        css: new Set()
      };
      var html = $$render(result, props, {}, $$slots, context);
      run_all(on_destroy);
      return {
        html: html,
        css: {
          code: Array.from(result.css).map(function (css) {
            return css.code;
          }).join('\n'),
          map: null // TODO

        },
        head: result.title + result.head
      };
    },
    $$render: $$render
  };
}

function add_attribute(name, value, _boolean) {
  if (value == null || _boolean && !value) return '';
  var assignment = _boolean && value === true ? '' : "=\"".concat(escape(value, true), "\"");
  return " ".concat(name).concat(assignment);
}

function add_classes(classes) {
  return classes ? " class=\"".concat(classes, "\"") : '';
}

function style_object_to_string(style_object) {
  return Object.keys(style_object).filter(function (key) {
    return style_object[key];
  }).map(function (key) {
    return "".concat(key, ": ").concat(style_object[key], ";");
  }).join(' ');
}

function add_styles(style_object) {
  var styles = style_object_to_string(style_object);
  return styles ? " style=\"".concat(styles, "\"") : '';
}

function bind(component, name, callback) {
  var index = component.$$.props[name];

  if (index !== undefined) {
    component.$$.bound[index] = callback;
    callback(component.$$.ctx[index]);
  }
}

function create_component(block) {
  block && block.c();
}

function claim_component(block, parent_nodes) {
  block && block.l(parent_nodes);
}

function mount_component(component, target, anchor, customElement) {
  var _component$$$ = component.$$,
      fragment = _component$$$.fragment,
      on_mount = _component$$$.on_mount,
      on_destroy = _component$$$.on_destroy,
      after_update = _component$$$.after_update;
  fragment && fragment.m(target, anchor);

  if (!customElement) {
    // onMount happens before the initial afterUpdate
    add_render_callback(function () {
      var new_on_destroy = on_mount.map(run).filter(is_function);

      if (on_destroy) {
        on_destroy.push.apply(on_destroy, _toConsumableArray(new_on_destroy));
      } else {
        // Edge case - component was destroyed immediately,
        // most likely as a result of a binding initialising
        run_all(new_on_destroy);
      }

      component.$$.on_mount = [];
    });
  }

  after_update.forEach(add_render_callback);
}

function destroy_component(component, detaching) {
  var $$ = component.$$;

  if ($$.fragment !== null) {
    run_all($$.on_destroy);
    $$.fragment && $$.fragment.d(detaching); // TODO null out other refs, including component.$$ (but need to
    // preserve final state?)

    $$.on_destroy = $$.fragment = null;
    $$.ctx = [];
  }
}

function make_dirty(component, i) {
  if (component.$$.dirty[0] === -1) {
    dirty_components.push(component);
    schedule_update();
    component.$$.dirty.fill(0);
  }

  component.$$.dirty[i / 31 | 0] |= 1 << i % 31;
}

function init(component, options, instance, create_fragment, not_equal, props, append_styles) {
  var dirty = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : [-1];
  var parent_component = current_component;
  set_current_component(component);
  var $$ = component.$$ = {
    fragment: null,
    ctx: null,
    // state
    props: props,
    update: noop,
    not_equal: not_equal,
    bound: blank_object(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(options.context || (parent_component ? parent_component.$$.context : [])),
    // everything else
    callbacks: blank_object(),
    dirty: dirty,
    skip_bound: false,
    root: options.target || parent_component.$$.root
  };
  append_styles && append_styles($$.root);
  var ready = false;
  $$.ctx = instance ? instance(component, options.props || {}, function (i, ret) {
    var value = (arguments.length <= 2 ? 0 : arguments.length - 2) ? arguments.length <= 2 ? undefined : arguments[2] : ret;

    if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
      if (!$$.skip_bound && $$.bound[i]) $$.bound[i](value);
      if (ready) make_dirty(component, i);
    }

    return ret;
  }) : [];
  $$.update();
  ready = true;
  run_all($$.before_update); // `false` as a special case of no DOM component

  $$.fragment = create_fragment ? create_fragment($$.ctx) : false;

  if (options.target) {
    if (options.hydrate) {
      start_hydrating();
      var nodes = children(options.target); // eslint-disable-next-line @typescript-eslint/no-non-null-assertion

      $$.fragment && $$.fragment.l(nodes);
      nodes.forEach(detach);
    } else {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      $$.fragment && $$.fragment.c();
    }

    if (options.intro) transition_in(component.$$.fragment);
    mount_component(component, options.target, options.anchor, options.customElement);
    end_hydrating();
    flush();
  }

  set_current_component(parent_component);
}

var SvelteElement;

if (typeof HTMLElement === 'function') {
  SvelteElement = /*#__PURE__*/function (_HTMLElement) {
    _inherits(SvelteElement, _HTMLElement);

    var _super2 = _createSuper(SvelteElement);

    function SvelteElement() {
      var _this3;

      _classCallCheck(this, SvelteElement);

      _this3 = _super2.call(this);

      _this3.attachShadow({
        mode: 'open'
      });

      return _this3;
    }

    _createClass(SvelteElement, [{
      key: "connectedCallback",
      value: function connectedCallback() {
        var on_mount = this.$$.on_mount;
        this.$$.on_disconnect = on_mount.map(run).filter(is_function); // @ts-ignore todo: improve typings

        for (var key in this.$$.slotted) {
          // @ts-ignore todo: improve typings
          this.appendChild(this.$$.slotted[key]);
        }
      }
    }, {
      key: "attributeChangedCallback",
      value: function attributeChangedCallback(attr, _oldValue, newValue) {
        this[attr] = newValue;
      }
    }, {
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        run_all(this.$$.on_disconnect);
      }
    }, {
      key: "$destroy",
      value: function $destroy() {
        destroy_component(this, 1);
        this.$destroy = noop;
      }
    }, {
      key: "$on",
      value: function $on(type, callback) {
        // TODO should this delegate to addEventListener?
        var callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
        callbacks.push(callback);
        return function () {
          var index = callbacks.indexOf(callback);
          if (index !== -1) callbacks.splice(index, 1);
        };
      }
    }, {
      key: "$set",
      value: function $set($$props) {
        if (this.$$set && !is_empty($$props)) {
          this.$$.skip_bound = true;
          this.$$set($$props);
          this.$$.skip_bound = false;
        }
      }
    }]);

    return SvelteElement;
  }( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
}
/**
 * Base class for Svelte components. Used when dev=false.
 */


var SvelteComponent = /*#__PURE__*/function () {
  function SvelteComponent() {
    _classCallCheck(this, SvelteComponent);
  }

  _createClass(SvelteComponent, [{
    key: "$destroy",
    value: function $destroy() {
      destroy_component(this, 1);
      this.$destroy = noop;
    }
  }, {
    key: "$on",
    value: function $on(type, callback) {
      var callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
      callbacks.push(callback);
      return function () {
        var index = callbacks.indexOf(callback);
        if (index !== -1) callbacks.splice(index, 1);
      };
    }
  }, {
    key: "$set",
    value: function $set($$props) {
      if (this.$$set && !is_empty($$props)) {
        this.$$.skip_bound = true;
        this.$$set($$props);
        this.$$.skip_bound = false;
      }
    }
  }]);

  return SvelteComponent;
}();

function dispatch_dev(type, detail) {
  document.dispatchEvent(custom_event(type, Object.assign({
    version: '3.50.1'
  }, detail), {
    bubbles: true
  }));
}

function append_dev(target, node) {
  dispatch_dev('SvelteDOMInsert', {
    target: target,
    node: node
  });
  append(target, node);
}

function append_hydration_dev(target, node) {
  dispatch_dev('SvelteDOMInsert', {
    target: target,
    node: node
  });
  append_hydration(target, node);
}

function insert_dev(target, node, anchor) {
  dispatch_dev('SvelteDOMInsert', {
    target: target,
    node: node,
    anchor: anchor
  });
  insert(target, node, anchor);
}

function insert_hydration_dev(target, node, anchor) {
  dispatch_dev('SvelteDOMInsert', {
    target: target,
    node: node,
    anchor: anchor
  });
  insert_hydration(target, node, anchor);
}

function detach_dev(node) {
  dispatch_dev('SvelteDOMRemove', {
    node: node
  });
  detach(node);
}

function detach_between_dev(before, after) {
  while (before.nextSibling && before.nextSibling !== after) {
    detach_dev(before.nextSibling);
  }
}

function detach_before_dev(after) {
  while (after.previousSibling) {
    detach_dev(after.previousSibling);
  }
}

function detach_after_dev(before) {
  while (before.nextSibling) {
    detach_dev(before.nextSibling);
  }
}

function listen_dev(node, event, handler, options, has_prevent_default, has_stop_propagation) {
  var modifiers = options === true ? ['capture'] : options ? Array.from(Object.keys(options)) : [];
  if (has_prevent_default) modifiers.push('preventDefault');
  if (has_stop_propagation) modifiers.push('stopPropagation');
  dispatch_dev('SvelteDOMAddEventListener', {
    node: node,
    event: event,
    handler: handler,
    modifiers: modifiers
  });
  var dispose = listen(node, event, handler, options);
  return function () {
    dispatch_dev('SvelteDOMRemoveEventListener', {
      node: node,
      event: event,
      handler: handler,
      modifiers: modifiers
    });
    dispose();
  };
}

function attr_dev(node, attribute, value) {
  attr(node, attribute, value);
  if (value == null) dispatch_dev('SvelteDOMRemoveAttribute', {
    node: node,
    attribute: attribute
  });else dispatch_dev('SvelteDOMSetAttribute', {
    node: node,
    attribute: attribute,
    value: value
  });
}

function prop_dev(node, property, value) {
  node[property] = value;
  dispatch_dev('SvelteDOMSetProperty', {
    node: node,
    property: property,
    value: value
  });
}

function dataset_dev(node, property, value) {
  node.dataset[property] = value;
  dispatch_dev('SvelteDOMSetDataset', {
    node: node,
    property: property,
    value: value
  });
}

function set_data_dev(text, data) {
  data = '' + data;
  if (text.wholeText === data) return;
  dispatch_dev('SvelteDOMSetData', {
    node: text,
    data: data
  });
  text.data = data;
}

function validate_each_argument(arg) {
  if (typeof arg !== 'string' && !(arg && _typeof(arg) === 'object' && 'length' in arg)) {
    var msg = '{#each} only iterates over array-like objects.';

    if (typeof Symbol === 'function' && arg && Symbol.iterator in arg) {
      msg += ' You can use a spread to convert this iterable into an array.';
    }

    throw new Error(msg);
  }
}

function validate_slots(name, slot, keys) {
  for (var _i4 = 0, _Object$keys = Object.keys(slot); _i4 < _Object$keys.length; _i4++) {
    var slot_key = _Object$keys[_i4];

    if (!~keys.indexOf(slot_key)) {
      console.warn("<".concat(name, "> received an unexpected slot \"").concat(slot_key, "\"."));
    }
  }
}

function validate_dynamic_element(tag) {
  var is_string = typeof tag === 'string';

  if (tag && !is_string) {
    throw new Error('<svelte:element> expects "this" attribute to be a string.');
  }
}

function validate_void_dynamic_element(tag) {
  if (tag && is_void(tag)) {
    throw new Error("<svelte:element this=\"".concat(tag, "\"> is self-closing and cannot have content."));
  }
}
/**
 * Base class for Svelte components with some minor dev-enhancements. Used when dev=true.
 */


var SvelteComponentDev = /*#__PURE__*/function (_SvelteComponent) {
  _inherits(SvelteComponentDev, _SvelteComponent);

  var _super3 = _createSuper(SvelteComponentDev);

  function SvelteComponentDev(options) {
    _classCallCheck(this, SvelteComponentDev);

    if (!options || !options.target && !options.$$inline) {
      throw new Error("'target' is a required option");
    }

    return _super3.call(this);
  }

  _createClass(SvelteComponentDev, [{
    key: "$destroy",
    value: function $destroy() {
      _get(_getPrototypeOf(SvelteComponentDev.prototype), "$destroy", this).call(this);

      this.$destroy = function () {
        console.warn('Component was already destroyed'); // eslint-disable-line no-console
      };
    }
  }, {
    key: "$capture_state",
    value: function $capture_state() {}
  }, {
    key: "$inject_state",
    value: function $inject_state() {}
  }]);

  return SvelteComponentDev;
}(SvelteComponent);
/**
 * Base class to create strongly typed Svelte components.
 * This only exists for typing purposes and should be used in `.d.ts` files.
 *
 * ### Example:
 *
 * You have component library on npm called `component-library`, from which
 * you export a component called `MyComponent`. For Svelte+TypeScript users,
 * you want to provide typings. Therefore you create a `index.d.ts`:
 * ```ts
 * import { SvelteComponentTyped } from "svelte";
 * export class MyComponent extends SvelteComponentTyped<{foo: string}> {}
 * ```
 * Typing this makes it possible for IDEs like VS Code with the Svelte extension
 * to provide intellisense and to use the component like this in a Svelte file
 * with TypeScript:
 * ```svelte
 * <script lang="ts">
 * 	import { MyComponent } from "component-library";
 * </script>
 * <MyComponent foo={'bar'} />
 * ```
 *
 * #### Why not make this part of `SvelteComponent(Dev)`?
 * Because
 * ```ts
 * class ASubclassOfSvelteComponent extends SvelteComponent<{foo: string}> {}
 * const component: typeof SvelteComponent = ASubclassOfSvelteComponent;
 * ```
 * will throw a type error, so we need to separate the more strictly typed class.
 */


var SvelteComponentTyped = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(SvelteComponentTyped, _SvelteComponentDev);

  var _super4 = _createSuper(SvelteComponentTyped);

  function SvelteComponentTyped(options) {
    _classCallCheck(this, SvelteComponentTyped);

    return _super4.call(this, options);
  }

  return _createClass(SvelteComponentTyped);
}(SvelteComponentDev);

function loop_guard(timeout) {
  var start = Date.now();
  return function () {
    if (Date.now() - start > timeout) {
      throw new Error('Infinite loop detected');
    }
  };
}



/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/***/ ((module) => {

module.exports = JSON.parse('{"name":"chihocms","version":"1.0.0","description":"webcomic cms","main":"index.js","scripts":{"dev":"npm run development","development":"cross-env NODE_ENV=development node_modules/webpack/bin/webpack.js --progress --config=node_modules/laravel-mix/setup/webpack.config.js","watch":"npm run development -- --watch","hot":"cross-env NODE_ENV=development node_modules/webpack-dev-server/bin/webpack-dev-server.js --inline --hot --config=node_modules/laravel-mix/setup/webpack.config.js","prod":"npm run production","production":"cross-env NODE_ENV=production node_modules/webpack/bin/webpack.js  --config=node_modules/laravel-mix/setup/webpack.config.js"},"repository":{"type":"git","url":"git+https://github.com/Meleeman01/ChihoCMS.git"},"keywords":["cms","chiho"],"author":"Meleeman01","license":"MIT","bugs":{"url":"https://github.com/Meleeman01/ChihoCMS/issues"},"homepage":"https://github.com/Meleeman01/ChihoCMS#readme","dependencies":{"cross-env":"^7.0.3","eslint-plugin-svelte3":"^3.4.1","laravel-mix":"^6.0.43","laravel-mix-svelte":"^0.5.0","mflx":"^1.2.1","svelte":"^3.50.1","svelte-loader":"^3.1.2","svelte-material-icons":"^2.0.4","svelte-spa-router":"^3.3.0"},"devDependencies":{"eslint":"^8.27.0","resolve-url-loader":"^5.0.0","sass":"^1.55.0","sass-loader":"^12.6.0"}}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/public/js/admin": 0,
/******/ 			"public/css/main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkchihocms"] = self["webpackChunkchihocms"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["public/css/main"], () => (__webpack_require__("./src/admin/admin.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["public/css/main"], () => (__webpack_require__("./src/scss/main.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;