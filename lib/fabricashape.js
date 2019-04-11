(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("fabric"));
	else if(typeof define === 'function' && define.amd)
		define("fabricashape", ["fabric"], factory);
	else if(typeof exports === 'object')
		exports["fabricashape"] = factory(require("fabric"));
	else
		root["fabricashape"] = factory(root["fabric"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_fabric__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/arrowline.js":
/*!**************************!*\
  !*** ./src/arrowline.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Arrowline = void 0;

var _fabric = __webpack_require__(/*! fabric */ "fabric");

var _line = __webpack_require__(/*! ./line */ "./src/line.js");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * An Arrowline is a group that looks like a double arrowed line:
 *       <------->
 */
var Arrowline =
/*#__PURE__*/
function (_Line) {
  _inherits(Arrowline, _Line);

  function Arrowline(options) {
    var _this;

    _classCallCheck(this, Arrowline);

    _this = _possibleConstructorReturn(this, (Arrowline.__proto__ || Object.getPrototypeOf(Arrowline)).call(this, options));
    _this.type = 'arrowline';
    _this.bodyFill = options.fill;
    return _this;
  }

  _createClass(Arrowline, [{
    key: "_initComponents",
    value: function _initComponents() {
      var _this2 = this;

      this.text = new _fabric.fabric.Text('', {
        backgroundColor: 'white'
      });
      this.body = new _fabric.fabric.Rect({
        fill: this.bodyFill
      });
      this.leftTriangle = new _fabric.fabric.Triangle({
        fill: this.bodyFill
      });
      this.rightTriangle = new _fabric.fabric.Triangle({
        fill: this.bodyFill
      });

      this._setComponentsPosition();

      this.components = [this.body, this.leftTriangle, this.rightTriangle, this.text];
      this.components.forEach(function (component) {
        component.hasControls = false;
        component.selectable = false;

        _this2.canvas.add(component);

        component.sendBackwards();
      });
      this.setText(this.bodyText);
    }
  }, {
    key: "_setComponentsPosition",
    value: function _setComponentsPosition() {
      var degreesToRadiansRatio = Math.PI / 180,
          height = this.height * this.scaleY,
          width = this.width * this.scaleX,
          cosTeta = Math.cos(this.angle * degreesToRadiansRatio),
          sinTeta = Math.sin(this.angle * degreesToRadiansRatio),
          boundingRect = this.getBoundingRect();
      this.text.set({
        top: boundingRect.top + 0.5 * (boundingRect.height - this.text.height),
        left: boundingRect.left + 0.5 * (boundingRect.width - this.text.width),
        fontSize: 18
      });
      this.body.set({
        top: this.top + height * sinTeta + height / 4 * cosTeta,
        left: this.left + height * cosTeta - height / 4 * sinTeta,
        width: width - 2 * height,
        height: height / 2,
        angle: this.angle
      });
      this.leftTriangle.set({
        top: this.top + height * cosTeta,
        left: this.left - height * sinTeta,
        width: height,
        height: height,
        angle: this.angle - 90
      });
      this.rightTriangle.set({
        top: this.top + width * sinTeta,
        left: this.left + width * cosTeta,
        width: height,
        height: height,
        angle: this.angle + 90
      });
    }
  }]);

  return Arrowline;
}(_line.Line);

exports.Arrowline = Arrowline;

/***/ }),

/***/ "./src/canvas.js":
/*!***********************!*\
  !*** ./src/canvas.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Canvas = void 0;

var _fabric = __webpack_require__(/*! fabric */ "fabric");

var _constants = __webpack_require__(/*! ./constants */ "./src/constants.js");

var _line = __webpack_require__(/*! ./line */ "./src/line.js");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Canvas =
/*#__PURE__*/
function (_fabric$Canvas) {
  _inherits(Canvas, _fabric$Canvas);

  function Canvas(domElemendId) {
    var _this;

    _classCallCheck(this, Canvas);

    _this = _possibleConstructorReturn(this, (Canvas.__proto__ || Object.getPrototypeOf(Canvas)).call(this, domElemendId));
    _this.domElemendId = domElemendId;
    _this.scale = {
      value: null,
      shape: null
    };
    _this.backgroundImage = null; // this._lockObjectsToBoundaries()

    return _this;
  }

  _createClass(Canvas, [{
    key: "addImage",
    value: function addImage(imageFile) {
      var _this2 = this;

      var reader = new FileReader();

      reader.onload = function () {
        var img = document.createElement('img');
        img.src = reader.result;
        _this2.backgroundImage = new _fabric.fabric.Image(img);

        _this2.backgroundImage.scale(_this2.height / _this2.backgroundImage.height);

        _this2.add(_this2.backgroundImage);

        _this2.backgroundImage.sendToBack();

        _this2.renderAll();
      };

      reader.readAsDataURL(imageFile);
    }
  }, {
    key: "lockImage",
    value: function lockImage() {
      this.backgroundImage.hasControls = false;
      this.backgroundImage.selectable = false;
      this.discardActiveObject();
      this.renderAll();
    }
  }, {
    key: "_lockObjectsToBoundaries",
    value: function _lockObjectsToBoundaries() {
      this.on('object:moving', function (e) {
        var obj = e.target; // if object is too big ignore

        if (obj.currentHeight > this.height || obj.currentWidth > this.width) {
          return;
        }

        obj.setCoords(); // top-left  corner

        if (obj.getBoundingRect().top < 0 || obj.getBoundingRect().left < 0) {
          obj.top = Math.max(obj.top, obj.top - obj.getBoundingRect().top);
          obj.left = Math.max(obj.left, obj.left - obj.getBoundingRect().left);
        } // bot-right corner


        if (obj.getBoundingRect().top + obj.getBoundingRect().height > this.height || obj.getBoundingRect().left + obj.getBoundingRect().width > this.width) {
          obj.top = Math.min(obj.top, this.height - obj.getBoundingRect().height + obj.top - obj.getBoundingRect().top);
          obj.left = Math.min(obj.left, this.width - obj.getBoundingRect().width + obj.left - obj.getBoundingRect().left);
        }
      });
    }
  }, {
    key: "setScale",
    value: function setScale(scaleDefinition) {
      if (scaleDefinition.shape) {
        this.scale.shape = scaleDefinition.shape;
      }

      if (scaleDefinition.value) {
        this.scale.value = scaleDefinition.value;
      }
    }
  }, {
    key: "getScale",
    value: function getScale() {
      return this.scale;
    }
  }, {
    key: "lockScale",
    value: function lockScale() {
      this.scale.shape.hasControls = false;
    }
    /*
     * @param choices: a list of (label, color)
     *  example: [
     *      {label: 'label1', color: 'blue'},
     *      {label: 'label2', color: 'rgba(255,0,0,0.5)'}
     *   ]
     * @return a DOM select object with corresponding options
     */

  }, {
    key: "listToSelectDOM",
    value: function listToSelectDOM(choices) {
      var canvasholder = document.getElementById(this.domElemendId); // Create and append select list

      var selectList = document.createElement('select');
      selectList.id = 'fabricashapeShapeChoices';
      canvasholder.parentElement.appendChild(selectList); // Create and append the options

      for (var i = 0; i < choices.length; i++) {
        var option = document.createElement('option');
        option.value = choices[i].label;
        option.text = choices[i].label;
        option.style.backgroundColor = choices[i].color;
        selectList.appendChild(option);
      }

      return selectList;
    }
  }, {
    key: "setShapeChoices",
    value: function setShapeChoices(choices) {
      var selectObject = this.listToSelectDOM(choices);
      this.createReferenceLine(selectObject);
    }
    /**
     * Creates a line user can click on to duplicate it and use the duplicate into the scene.
     */

  }, {
    key: "createReferenceLine",
    value: function createReferenceLine(selectObject) {
      var _this3 = this;

      var referenceLine = new _fabric.fabric.Rect({
        top: 5,
        left: 5,
        width: 80,
        height: 17,
        fill: selectObject.options[selectObject.selectedIndex].style.backgroundColor
      });
      this.add(referenceLine);
      this.item(this.size() - 1).hasControls = false;
      this.requestRenderAll();

      var fillReferenceLine = function fillReferenceLine() {
        _this3.item(_this3.size() - 1).set('fill', selectObject.options[selectObject.selectedIndex].style.backgroundColor);

        _this3.renderAll();
      };

      var duplicateReferenceLine = function duplicateReferenceLine() {
        _this3.createReferenceLine(selectObject);

        referenceLine.hasControls = true;

        _constants.Constants.RECT_DISABLED_CONTROLS.forEach(function (control) {
          referenceLine.setControlVisible(control, false);
        });
      };

      referenceLine.on('mousedown', function () {
        duplicateReferenceLine();
        referenceLine.off('mousedown');
      });
      selectObject.removeEventListener('change', fillReferenceLine);
      selectObject.addEventListener('change', fillReferenceLine);
    }
  }, {
    key: "createScaledLine",
    value: function createScaledLine(options) {
      var scale = this.scale.shape.width * this.scale.shape.scaleX / this.scale.value;
      options.top = options.top * scale;
      options.left = options.left * scale;
      options.width = options.width * scale;
      options.height = options.stroke * scale;
      return new _line.Line(options);
    }
  }]);

  return Canvas;
}(_fabric.fabric.Canvas);

exports.Canvas = Canvas;

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Constants = void 0;
// controls: 'tl', 'tr', 'br', 'bl', 'ml', 'mt', 'mr', 'mb', 'mtr'
var Constants = {
  RECT_DISABLED_CONTROLS: ['tl', 'tr', 'bl', 'br', 'mt', 'mb']
};
exports.Constants = Constants;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Arrowline", {
  enumerable: true,
  get: function get() {
    return _arrowline.Arrowline;
  }
});
Object.defineProperty(exports, "Canvas", {
  enumerable: true,
  get: function get() {
    return _canvas.Canvas;
  }
});
Object.defineProperty(exports, "Line", {
  enumerable: true,
  get: function get() {
    return _line.Line;
  }
});
Object.defineProperty(exports, "Constants", {
  enumerable: true,
  get: function get() {
    return _constants.Constants;
  }
});

var _arrowline = __webpack_require__(/*! ./arrowline.js */ "./src/arrowline.js");

var _canvas = __webpack_require__(/*! ./canvas.js */ "./src/canvas.js");

var _line = __webpack_require__(/*! ./line.js */ "./src/line.js");

var _constants = __webpack_require__(/*! ./constants.js */ "./src/constants.js");

/***/ }),

/***/ "./src/line.js":
/*!*********************!*\
  !*** ./src/line.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Line = void 0;

var _fabric = __webpack_require__(/*! fabric */ "fabric");

var _constants = __webpack_require__(/*! ./constants */ "./src/constants.js");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Line =
/*#__PURE__*/
function (_fabric$Rect) {
  _inherits(Line, _fabric$Rect);

  function Line(options) {
    var _this;

    _classCallCheck(this, Line);

    _this = _possibleConstructorReturn(this, (Line.__proto__ || Object.getPrototypeOf(Line)).call(this, options));
    _this.bodyFill = options.fill;
    _this.bodyText = options.text || '';
    _this.components = [];
    _this.type = 'line';
    _this.hasControls = true;

    _constants.Constants.RECT_DISABLED_CONTROLS.forEach(function (control) {
      _this.setControlVisible(control, false);
    });

    _this.set('fill', 'transparent');

    _this.on({
      'added': _this._initComponents,
      'modified': _this._setComponentsPosition,
      'scaling': _this._setComponentsPosition,
      'moving': _this._setComponentsPosition,
      'rotating': _this._setComponentsPosition
    });

    return _this;
  }

  _createClass(Line, [{
    key: "_initComponents",
    value: function _initComponents() {
      var _this2 = this;

      this.text = new _fabric.fabric.Text('', {
        visible: false
      });
      this.body = new _fabric.fabric.Rect({
        width: this.width,
        height: this.height,
        top: this.top,
        left: this.left,
        fill: this.bodyFill
      });
      this.components = [this.text, this.body];
      this.components.forEach(function (component) {
        component.hasControls = false;
        component.selectable = false;

        _this2.canvas.add(component);

        component.sendBackwards();
      });
      this.setText(this.bodyText);
    }
  }, {
    key: "_setComponentsPosition",
    value: function _setComponentsPosition() {
      var height = this.height * this.scaleY,
          width = this.width * this.scaleX,
          boundingRect = this.getBoundingRect();

      if (this.text) {
        this.text.set({
          top: boundingRect.top + 0.5 * (boundingRect.height - this.text.height),
          left: boundingRect.left + 0.5 * (boundingRect.width - this.text.width)
        });
      }

      this.body.set({
        top: this.top,
        left: this.left,
        width: width,
        height: height,
        angle: this.angle
      });
    }
  }, {
    key: "getComponents",
    value: function getComponents() {
      return this.components;
    }
  }, {
    key: "setText",
    value: function setText(text) {
      if (text.slice(-1) !== 'm') {
        text += 'm';
      }

      this.text.set({
        text: text
      });

      this._setComponentsPosition();
    }
  }]);

  return Line;
}(_fabric.fabric.Rect);

exports.Line = Line;

/***/ }),

/***/ "fabric":
/*!*************************!*\
  !*** external "fabric" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_fabric__;

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mYWJyaWNhc2hhcGUvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2ZhYnJpY2FzaGFwZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9mYWJyaWNhc2hhcGUvLi9zcmMvYXJyb3dsaW5lLmpzIiwid2VicGFjazovL2ZhYnJpY2FzaGFwZS8uL3NyYy9jYW52YXMuanMiLCJ3ZWJwYWNrOi8vZmFicmljYXNoYXBlLy4vc3JjL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9mYWJyaWNhc2hhcGUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZmFicmljYXNoYXBlLy4vc3JjL2xpbmUuanMiLCJ3ZWJwYWNrOi8vZmFicmljYXNoYXBlL2V4dGVybmFsIFwiZmFicmljXCIiXSwibmFtZXMiOlsiQXJyb3dsaW5lIiwib3B0aW9ucyIsInR5cGUiLCJib2R5RmlsbCIsImZpbGwiLCJ0ZXh0IiwiVGV4dCIsImJhY2tncm91bmRDb2xvciIsImJvZHkiLCJSZWN0IiwibGVmdFRyaWFuZ2xlIiwiVHJpYW5nbGUiLCJyaWdodFRyaWFuZ2xlIiwiX3NldENvbXBvbmVudHNQb3NpdGlvbiIsImNvbXBvbmVudHMiLCJmb3JFYWNoIiwiY29tcG9uZW50IiwiaGFzQ29udHJvbHMiLCJzZWxlY3RhYmxlIiwiY2FudmFzIiwiYWRkIiwic2VuZEJhY2t3YXJkcyIsInNldFRleHQiLCJib2R5VGV4dCIsImRlZ3JlZXNUb1JhZGlhbnNSYXRpbyIsIk1hdGgiLCJQSSIsImhlaWdodCIsInNjYWxlWSIsIndpZHRoIiwic2NhbGVYIiwiY29zVGV0YSIsImNvcyIsImFuZ2xlIiwic2luVGV0YSIsInNpbiIsImJvdW5kaW5nUmVjdCIsImdldEJvdW5kaW5nUmVjdCIsInNldCIsInRvcCIsImxlZnQiLCJmb250U2l6ZSIsIkNhbnZhcyIsImRvbUVsZW1lbmRJZCIsInNjYWxlIiwidmFsdWUiLCJzaGFwZSIsImJhY2tncm91bmRJbWFnZSIsImltYWdlRmlsZSIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJpbWciLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzcmMiLCJyZXN1bHQiLCJJbWFnZSIsInNlbmRUb0JhY2siLCJyZW5kZXJBbGwiLCJyZWFkQXNEYXRhVVJMIiwiZGlzY2FyZEFjdGl2ZU9iamVjdCIsIm9uIiwiZSIsIm9iaiIsInRhcmdldCIsImN1cnJlbnRIZWlnaHQiLCJjdXJyZW50V2lkdGgiLCJzZXRDb29yZHMiLCJtYXgiLCJtaW4iLCJzY2FsZURlZmluaXRpb24iLCJjaG9pY2VzIiwiY2FudmFzaG9sZGVyIiwiZ2V0RWxlbWVudEJ5SWQiLCJzZWxlY3RMaXN0IiwiaWQiLCJwYXJlbnRFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJpIiwibGVuZ3RoIiwib3B0aW9uIiwibGFiZWwiLCJzdHlsZSIsImNvbG9yIiwic2VsZWN0T2JqZWN0IiwibGlzdFRvU2VsZWN0RE9NIiwiY3JlYXRlUmVmZXJlbmNlTGluZSIsInJlZmVyZW5jZUxpbmUiLCJzZWxlY3RlZEluZGV4IiwiaXRlbSIsInNpemUiLCJyZXF1ZXN0UmVuZGVyQWxsIiwiZmlsbFJlZmVyZW5jZUxpbmUiLCJkdXBsaWNhdGVSZWZlcmVuY2VMaW5lIiwiUkVDVF9ESVNBQkxFRF9DT05UUk9MUyIsImNvbnRyb2wiLCJzZXRDb250cm9sVmlzaWJsZSIsIm9mZiIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJhZGRFdmVudExpc3RlbmVyIiwic3Ryb2tlIiwiQ29uc3RhbnRzIiwiTGluZSIsIl9pbml0Q29tcG9uZW50cyIsInZpc2libGUiLCJzbGljZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztB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aEMsSUFBVCxFQUFlO0FBQ1gsYUFBS0EsSUFBTCxDQUFVaUMsR0FBVixDQUFjO0FBQ1ZDLGFBQUcsRUFBRUgsWUFBWSxDQUFDRyxHQUFiLEdBQW1CLE9BQU9ILFlBQVksQ0FBQ1QsTUFBYixHQUFzQixLQUFLdEIsSUFBTCxDQUFVc0IsTUFBdkMsQ0FEZDtBQUVWYSxjQUFJLEVBQUVKLFlBQVksQ0FBQ0ksSUFBYixHQUFvQixPQUFPSixZQUFZLENBQUNQLEtBQWIsR0FBcUIsS0FBS3hCLElBQUwsQ0FBVXdCLEtBQXRDO0FBRmhCLFNBQWQ7QUFJSDs7QUFFRCxXQUFLckIsSUFBTCxDQUFVOEIsR0FBVixDQUFjO0FBQ1ZDLFdBQUcsRUFBRSxLQUFLQSxHQURBO0FBRVZDLFlBQUksRUFBRSxLQUFLQSxJQUZEO0FBR1ZYLGFBQUssRUFBRUEsS0FIRztBQUlWRixjQUFNLEVBQUVBLE1BSkU7QUFLVk0sYUFBSyxFQUFFLEtBQUtBO0FBTEYsT0FBZDtBQVFIOzs7b0NBRWU7QUFDWixhQUFPLEtBQUtuQixVQUFaO0FBQ0g7Ozs0QkFFT1QsSSxFQUFNO0FBQ1YsVUFBSUEsSUFBSSxDQUFDcUcsS0FBTCxDQUFXLENBQUMsQ0FBWixNQUFtQixHQUF2QixFQUE0QjtBQUN4QnJHLFlBQUksSUFBSSxHQUFSO0FBQ0g7O0FBQ0QsV0FBS0EsSUFBTCxDQUFVaUMsR0FBVixDQUFjO0FBQ1ZqQyxZQUFJLEVBQUVBO0FBREksT0FBZDs7QUFHQSxXQUFLUSxzQkFBTDtBQUNIOzs7O0VBL0VxQixlQUFPSixJOzs7Ozs7Ozs7Ozs7O0FDSGpDLG9EIiwiZmlsZSI6ImZhYnJpY2FzaGFwZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImZhYnJpY1wiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcImZhYnJpY2FzaGFwZVwiLCBbXCJmYWJyaWNcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiZmFicmljYXNoYXBlXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiZmFicmljXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJmYWJyaWNhc2hhcGVcIl0gPSBmYWN0b3J5KHJvb3RbXCJmYWJyaWNcIl0pO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZmFicmljX18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCB7ZmFicmljfSBmcm9tICdmYWJyaWMnXG5pbXBvcnQge0xpbmV9IGZyb20gJy4vbGluZSdcblxuLyoqXG4gKiBBbiBBcnJvd2xpbmUgaXMgYSBncm91cCB0aGF0IGxvb2tzIGxpa2UgYSBkb3VibGUgYXJyb3dlZCBsaW5lOlxuICogICAgICAgPC0tLS0tLS0+XG4gKi9cbmV4cG9ydCBjbGFzcyBBcnJvd2xpbmUgZXh0ZW5kcyBMaW5lIHtcblxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIob3B0aW9ucylcbiAgICAgICAgdGhpcy50eXBlID0gJ2Fycm93bGluZSdcbiAgICAgICAgdGhpcy5ib2R5RmlsbCA9IG9wdGlvbnMuZmlsbFxuICAgIH1cblxuICAgIF9pbml0Q29tcG9uZW50cygpIHtcbiAgICAgICAgdGhpcy50ZXh0ID0gbmV3IGZhYnJpYy5UZXh0KCcnLCB7YmFja2dyb3VuZENvbG9yOiAnd2hpdGUnfSlcbiAgICAgICAgdGhpcy5ib2R5ID0gbmV3IGZhYnJpYy5SZWN0KHtmaWxsOiB0aGlzLmJvZHlGaWxsfSlcbiAgICAgICAgdGhpcy5sZWZ0VHJpYW5nbGUgPSBuZXcgZmFicmljLlRyaWFuZ2xlKHtmaWxsOiB0aGlzLmJvZHlGaWxsfSlcbiAgICAgICAgdGhpcy5yaWdodFRyaWFuZ2xlID0gbmV3IGZhYnJpYy5UcmlhbmdsZSh7ZmlsbDogdGhpcy5ib2R5RmlsbH0pXG5cbiAgICAgICAgdGhpcy5fc2V0Q29tcG9uZW50c1Bvc2l0aW9uKClcblxuICAgICAgICB0aGlzLmNvbXBvbmVudHMgPSBbdGhpcy5ib2R5LCB0aGlzLmxlZnRUcmlhbmdsZSwgdGhpcy5yaWdodFRyaWFuZ2xlLCB0aGlzLnRleHRdXG5cbiAgICAgICAgdGhpcy5jb21wb25lbnRzLmZvckVhY2goKGNvbXBvbmVudCkgPT4ge1xuICAgICAgICAgICAgY29tcG9uZW50Lmhhc0NvbnRyb2xzID0gZmFsc2VcbiAgICAgICAgICAgIGNvbXBvbmVudC5zZWxlY3RhYmxlID0gZmFsc2VcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLmFkZChjb21wb25lbnQpXG4gICAgICAgICAgICBjb21wb25lbnQuc2VuZEJhY2t3YXJkcygpXG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuc2V0VGV4dCh0aGlzLmJvZHlUZXh0KVxuICAgIH1cblxuICAgIF9zZXRDb21wb25lbnRzUG9zaXRpb24oKSB7XG4gICAgICAgIGNvbnN0IGRlZ3JlZXNUb1JhZGlhbnNSYXRpbyA9IE1hdGguUEkgLyAxODAsXG4gICAgICAgICAgICBoZWlnaHQgPSB0aGlzLmhlaWdodCAqIHRoaXMuc2NhbGVZLFxuICAgICAgICAgICAgd2lkdGggPSB0aGlzLndpZHRoICogdGhpcy5zY2FsZVgsXG4gICAgICAgICAgICBjb3NUZXRhID0gTWF0aC5jb3ModGhpcy5hbmdsZSAqIGRlZ3JlZXNUb1JhZGlhbnNSYXRpbyksXG4gICAgICAgICAgICBzaW5UZXRhID0gTWF0aC5zaW4odGhpcy5hbmdsZSAqIGRlZ3JlZXNUb1JhZGlhbnNSYXRpbyksXG4gICAgICAgICAgICBib3VuZGluZ1JlY3QgPSB0aGlzLmdldEJvdW5kaW5nUmVjdCgpXG5cbiAgICAgICAgdGhpcy50ZXh0LnNldCh7XG4gICAgICAgICAgICB0b3A6IGJvdW5kaW5nUmVjdC50b3AgKyAwLjUgKiAoYm91bmRpbmdSZWN0LmhlaWdodCAtIHRoaXMudGV4dC5oZWlnaHQpLFxuICAgICAgICAgICAgbGVmdDogYm91bmRpbmdSZWN0LmxlZnQgKyAwLjUgKiAoYm91bmRpbmdSZWN0LndpZHRoIC0gdGhpcy50ZXh0LndpZHRoKSxcbiAgICAgICAgICAgIGZvbnRTaXplOiAxOFxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuYm9keS5zZXQoe1xuICAgICAgICAgICAgdG9wOiB0aGlzLnRvcCArIGhlaWdodCAqIHNpblRldGEgKyAoaGVpZ2h0IC8gNCkgKiBjb3NUZXRhLFxuICAgICAgICAgICAgbGVmdDogdGhpcy5sZWZ0ICsgaGVpZ2h0ICogY29zVGV0YSAtIChoZWlnaHQgLyA0KSAqIHNpblRldGEsXG4gICAgICAgICAgICB3aWR0aDogd2lkdGggLSAyICogaGVpZ2h0LFxuICAgICAgICAgICAgaGVpZ2h0OiBoZWlnaHQgLyAyLFxuICAgICAgICAgICAgYW5nbGU6IHRoaXMuYW5nbGVcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLmxlZnRUcmlhbmdsZS5zZXQoe1xuICAgICAgICAgICAgdG9wOiB0aGlzLnRvcCArIGhlaWdodCAqIGNvc1RldGEsXG4gICAgICAgICAgICBsZWZ0OiB0aGlzLmxlZnQgLSBoZWlnaHQgKiBzaW5UZXRhLFxuICAgICAgICAgICAgd2lkdGg6IGhlaWdodCxcbiAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAgICAgICAgYW5nbGU6IHRoaXMuYW5nbGUgLSA5MFxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMucmlnaHRUcmlhbmdsZS5zZXQoe1xuICAgICAgICAgICAgdG9wOiB0aGlzLnRvcCArIHdpZHRoICogc2luVGV0YSxcbiAgICAgICAgICAgIGxlZnQ6IHRoaXMubGVmdCArIHdpZHRoICogY29zVGV0YSxcbiAgICAgICAgICAgIHdpZHRoOiBoZWlnaHQsXG4gICAgICAgICAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICAgICAgICAgIGFuZ2xlOiB0aGlzLmFuZ2xlICsgOTBcbiAgICAgICAgfSlcbiAgICB9XG5cbn1cbiIsImltcG9ydCB7ZmFicmljfSBmcm9tICdmYWJyaWMnXG5pbXBvcnQge0NvbnN0YW50c30gZnJvbSAnLi9jb25zdGFudHMnXG5pbXBvcnQge0xpbmV9IGZyb20gJy4vbGluZSdcblxuZXhwb3J0IGNsYXNzIENhbnZhcyBleHRlbmRzIGZhYnJpYy5DYW52YXMge1xuXG4gICAgY29uc3RydWN0b3IoZG9tRWxlbWVuZElkKSB7XG4gICAgICAgIHN1cGVyKGRvbUVsZW1lbmRJZClcbiAgICAgICAgdGhpcy5kb21FbGVtZW5kSWQgPSBkb21FbGVtZW5kSWRcbiAgICAgICAgdGhpcy5zY2FsZSA9IHt2YWx1ZTogbnVsbCwgc2hhcGU6IG51bGx9XG4gICAgICAgIHRoaXMuYmFja2dyb3VuZEltYWdlID0gbnVsbFxuICAgICAgICAvLyB0aGlzLl9sb2NrT2JqZWN0c1RvQm91bmRhcmllcygpXG4gICAgfVxuXG4gICAgYWRkSW1hZ2UoaW1hZ2VGaWxlKSB7XG4gICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKClcblxuICAgICAgICByZWFkZXIub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcblxuICAgICAgICAgICAgaW1nLnNyYyA9IHJlYWRlci5yZXN1bHRcblxuICAgICAgICAgICAgdGhpcy5iYWNrZ3JvdW5kSW1hZ2UgPSBuZXcgZmFicmljLkltYWdlKGltZylcbiAgICAgICAgICAgIHRoaXMuYmFja2dyb3VuZEltYWdlLnNjYWxlKHRoaXMuaGVpZ2h0IC8gdGhpcy5iYWNrZ3JvdW5kSW1hZ2UuaGVpZ2h0KVxuICAgICAgICAgICAgdGhpcy5hZGQodGhpcy5iYWNrZ3JvdW5kSW1hZ2UpXG4gICAgICAgICAgICB0aGlzLmJhY2tncm91bmRJbWFnZS5zZW5kVG9CYWNrKClcbiAgICAgICAgICAgIHRoaXMucmVuZGVyQWxsKClcbiAgICAgICAgfTtcblxuICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChpbWFnZUZpbGUpO1xuICAgIH1cblxuICAgIGxvY2tJbWFnZSgpIHtcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kSW1hZ2UuaGFzQ29udHJvbHMgPSBmYWxzZVxuICAgICAgICB0aGlzLmJhY2tncm91bmRJbWFnZS5zZWxlY3RhYmxlID0gZmFsc2VcbiAgICAgICAgdGhpcy5kaXNjYXJkQWN0aXZlT2JqZWN0KCk7XG4gICAgICAgIHRoaXMucmVuZGVyQWxsKClcbiAgICB9XG5cbiAgICBfbG9ja09iamVjdHNUb0JvdW5kYXJpZXMoKSB7XG4gICAgICAgIHRoaXMub24oJ29iamVjdDptb3ZpbmcnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIG9iaiA9IGUudGFyZ2V0O1xuXG4gICAgICAgICAgICAvLyBpZiBvYmplY3QgaXMgdG9vIGJpZyBpZ25vcmVcbiAgICAgICAgICAgIGlmIChvYmouY3VycmVudEhlaWdodCA+IHRoaXMuaGVpZ2h0IHx8IG9iai5jdXJyZW50V2lkdGggPiB0aGlzLndpZHRoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb2JqLnNldENvb3JkcygpO1xuICAgICAgICAgICAgLy8gdG9wLWxlZnQgIGNvcm5lclxuICAgICAgICAgICAgaWYgKG9iai5nZXRCb3VuZGluZ1JlY3QoKS50b3AgPCAwIHx8IG9iai5nZXRCb3VuZGluZ1JlY3QoKS5sZWZ0IDwgMCkge1xuICAgICAgICAgICAgICAgIG9iai50b3AgPSBNYXRoLm1heChvYmoudG9wLCBvYmoudG9wIC0gb2JqLmdldEJvdW5kaW5nUmVjdCgpLnRvcCk7XG4gICAgICAgICAgICAgICAgb2JqLmxlZnQgPSBNYXRoLm1heChvYmoubGVmdCwgb2JqLmxlZnQgLSBvYmouZ2V0Qm91bmRpbmdSZWN0KCkubGVmdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBib3QtcmlnaHQgY29ybmVyXG4gICAgICAgICAgICBpZiAob2JqLmdldEJvdW5kaW5nUmVjdCgpLnRvcCArIG9iai5nZXRCb3VuZGluZ1JlY3QoKS5oZWlnaHQgPiB0aGlzLmhlaWdodCB8fFxuICAgICAgICAgICAgICAgICAgICBvYmouZ2V0Qm91bmRpbmdSZWN0KCkubGVmdCArIG9iai5nZXRCb3VuZGluZ1JlY3QoKS53aWR0aCA+IHRoaXMud2lkdGgpIHtcbiAgICAgICAgICAgICAgICBvYmoudG9wID0gTWF0aC5taW4ob2JqLnRvcCwgdGhpcy5oZWlnaHQgLSBvYmouZ2V0Qm91bmRpbmdSZWN0KCkuaGVpZ2h0ICtcbiAgICAgICAgICAgICAgICAgICAgb2JqLnRvcCAtIG9iai5nZXRCb3VuZGluZ1JlY3QoKS50b3ApO1xuICAgICAgICAgICAgICAgIG9iai5sZWZ0ID0gTWF0aC5taW4ob2JqLmxlZnQsIHRoaXMud2lkdGggLSBvYmouZ2V0Qm91bmRpbmdSZWN0KCkud2lkdGggK1xuICAgICAgICAgICAgICAgICAgICBvYmoubGVmdCAtIG9iai5nZXRCb3VuZGluZ1JlY3QoKS5sZWZ0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2V0U2NhbGUoc2NhbGVEZWZpbml0aW9uKSB7XG4gICAgICAgIGlmIChzY2FsZURlZmluaXRpb24uc2hhcGUpIHtcbiAgICAgICAgICAgIHRoaXMuc2NhbGUuc2hhcGUgPSBzY2FsZURlZmluaXRpb24uc2hhcGVcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2NhbGVEZWZpbml0aW9uLnZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLnNjYWxlLnZhbHVlID0gc2NhbGVEZWZpbml0aW9uLnZhbHVlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRTY2FsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NhbGVcbiAgICB9XG5cbiAgICBsb2NrU2NhbGUoKSB7XG4gICAgICAgIHRoaXMuc2NhbGUuc2hhcGUuaGFzQ29udHJvbHMgPSBmYWxzZVxuICAgIH1cblxuICAgIC8qXG4gICAgICogQHBhcmFtIGNob2ljZXM6IGEgbGlzdCBvZiAobGFiZWwsIGNvbG9yKVxuICAgICAqICBleGFtcGxlOiBbXG4gICAgICogICAgICB7bGFiZWw6ICdsYWJlbDEnLCBjb2xvcjogJ2JsdWUnfSxcbiAgICAgKiAgICAgIHtsYWJlbDogJ2xhYmVsMicsIGNvbG9yOiAncmdiYSgyNTUsMCwwLDAuNSknfVxuICAgICAqICAgXVxuICAgICAqIEByZXR1cm4gYSBET00gc2VsZWN0IG9iamVjdCB3aXRoIGNvcnJlc3BvbmRpbmcgb3B0aW9uc1xuICAgICAqL1xuICAgIGxpc3RUb1NlbGVjdERPTShjaG9pY2VzKSB7XG4gICAgICAgIGNvbnN0IGNhbnZhc2hvbGRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuZG9tRWxlbWVuZElkKVxuXG4gICAgICAgIC8vIENyZWF0ZSBhbmQgYXBwZW5kIHNlbGVjdCBsaXN0XG4gICAgICAgIGNvbnN0IHNlbGVjdExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKVxuXG4gICAgICAgIHNlbGVjdExpc3QuaWQgPSAnZmFicmljYXNoYXBlU2hhcGVDaG9pY2VzJ1xuICAgICAgICBjYW52YXNob2xkZXIucGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZChzZWxlY3RMaXN0KVxuXG4gICAgICAgIC8vIENyZWF0ZSBhbmQgYXBwZW5kIHRoZSBvcHRpb25zXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hvaWNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcblxuICAgICAgICAgICAgb3B0aW9uLnZhbHVlID0gY2hvaWNlc1tpXS5sYWJlbFxuICAgICAgICAgICAgb3B0aW9uLnRleHQgPSBjaG9pY2VzW2ldLmxhYmVsXG4gICAgICAgICAgICBvcHRpb24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY2hvaWNlc1tpXS5jb2xvclxuICAgICAgICAgICAgc2VsZWN0TGlzdC5hcHBlbmRDaGlsZChvcHRpb24pXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNlbGVjdExpc3RcbiAgICB9XG5cbiAgICBzZXRTaGFwZUNob2ljZXMoY2hvaWNlcykge1xuICAgICAgICBjb25zdCBzZWxlY3RPYmplY3QgPSB0aGlzLmxpc3RUb1NlbGVjdERPTShjaG9pY2VzKVxuXG4gICAgICAgIHRoaXMuY3JlYXRlUmVmZXJlbmNlTGluZShzZWxlY3RPYmplY3QpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIGxpbmUgdXNlciBjYW4gY2xpY2sgb24gdG8gZHVwbGljYXRlIGl0IGFuZCB1c2UgdGhlIGR1cGxpY2F0ZSBpbnRvIHRoZSBzY2VuZS5cbiAgICAgKi9cbiAgICBjcmVhdGVSZWZlcmVuY2VMaW5lKHNlbGVjdE9iamVjdCkge1xuICAgICAgICBjb25zdCByZWZlcmVuY2VMaW5lID0gbmV3IGZhYnJpYy5SZWN0KHtcbiAgICAgICAgICAgIHRvcDogNSwgbGVmdDogNSwgd2lkdGg6IDgwLCBoZWlnaHQ6IDE3LFxuICAgICAgICAgICAgZmlsbDogc2VsZWN0T2JqZWN0Lm9wdGlvbnNbc2VsZWN0T2JqZWN0LnNlbGVjdGVkSW5kZXhdLnN0eWxlLmJhY2tncm91bmRDb2xvclxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuYWRkKHJlZmVyZW5jZUxpbmUpXG4gICAgICAgIHRoaXMuaXRlbSh0aGlzLnNpemUoKSAtIDEpLmhhc0NvbnRyb2xzID0gZmFsc2VcbiAgICAgICAgdGhpcy5yZXF1ZXN0UmVuZGVyQWxsKClcblxuICAgICAgICBjb25zdCBmaWxsUmVmZXJlbmNlTGluZSA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXNcbiAgICAgICAgICAgICAgICAuaXRlbSh0aGlzLnNpemUoKSAtIDEpXG4gICAgICAgICAgICAgICAgLnNldCgnZmlsbCcsIHNlbGVjdE9iamVjdC5vcHRpb25zW3NlbGVjdE9iamVjdC5zZWxlY3RlZEluZGV4XS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IpXG4gICAgICAgICAgICB0aGlzLnJlbmRlckFsbCgpXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBkdXBsaWNhdGVSZWZlcmVuY2VMaW5lID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVSZWZlcmVuY2VMaW5lKHNlbGVjdE9iamVjdClcbiAgICAgICAgICAgIHJlZmVyZW5jZUxpbmUuaGFzQ29udHJvbHMgPSB0cnVlXG4gICAgICAgICAgICBDb25zdGFudHMuUkVDVF9ESVNBQkxFRF9DT05UUk9MUy5mb3JFYWNoKChjb250cm9sKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVmZXJlbmNlTGluZS5zZXRDb250cm9sVmlzaWJsZShjb250cm9sLCBmYWxzZSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICByZWZlcmVuY2VMaW5lLm9uKCdtb3VzZWRvd24nLCAoKSA9PiB7XG4gICAgICAgICAgICBkdXBsaWNhdGVSZWZlcmVuY2VMaW5lKClcbiAgICAgICAgICAgIHJlZmVyZW5jZUxpbmUub2ZmKCdtb3VzZWRvd24nKVxuICAgICAgICB9KVxuXG4gICAgICAgIHNlbGVjdE9iamVjdC5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmaWxsUmVmZXJlbmNlTGluZSlcbiAgICAgICAgc2VsZWN0T2JqZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZpbGxSZWZlcmVuY2VMaW5lKVxuICAgIH1cblxuICAgIGNyZWF0ZVNjYWxlZExpbmUob3B0aW9ucykge1xuICAgICAgICBjb25zdCBzY2FsZSA9ICh0aGlzLnNjYWxlLnNoYXBlLndpZHRoICogdGhpcy5zY2FsZS5zaGFwZS5zY2FsZVgpIC8gdGhpcy5zY2FsZS52YWx1ZVxuXG4gICAgICAgIG9wdGlvbnMudG9wID0gb3B0aW9ucy50b3AgKiBzY2FsZVxuICAgICAgICBvcHRpb25zLmxlZnQgPSBvcHRpb25zLmxlZnQgKiBzY2FsZVxuICAgICAgICBvcHRpb25zLndpZHRoID0gb3B0aW9ucy53aWR0aCAqIHNjYWxlXG4gICAgICAgIG9wdGlvbnMuaGVpZ2h0ID0gb3B0aW9ucy5zdHJva2UgKiBzY2FsZVxuXG4gICAgICAgIHJldHVybiBuZXcgTGluZShvcHRpb25zKVxuICAgIH1cblxufVxuIiwiLy8gY29udHJvbHM6ICd0bCcsICd0cicsICdicicsICdibCcsICdtbCcsICdtdCcsICdtcicsICdtYicsICdtdHInXG5leHBvcnQgY29uc3QgQ29uc3RhbnRzID0ge1xuICAgIFJFQ1RfRElTQUJMRURfQ09OVFJPTFM6IFsgJ3RsJywgJ3RyJywgJ2JsJywgJ2JyJywgJ210JywgJ21iJyBdXG59XG4iLCJpbXBvcnQge0Fycm93bGluZX0gZnJvbSAnLi9hcnJvd2xpbmUuanMnO1xuaW1wb3J0IHtDYW52YXN9IGZyb20gJy4vY2FudmFzLmpzJztcbmltcG9ydCB7TGluZX0gZnJvbSAnLi9saW5lLmpzJztcbmltcG9ydCB7Q29uc3RhbnRzfSBmcm9tICcuL2NvbnN0YW50cy5qcyc7XG5leHBvcnQge0Fycm93bGluZSwgQ2FudmFzLCBMaW5lLCBDb25zdGFudHN9O1xuIiwiaW1wb3J0IHtmYWJyaWN9IGZyb20gJ2ZhYnJpYydcbmltcG9ydCB7Q29uc3RhbnRzfSBmcm9tICcuL2NvbnN0YW50cydcblxuZXhwb3J0IGNsYXNzIExpbmUgZXh0ZW5kcyBmYWJyaWMuUmVjdCB7XG5cbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKG9wdGlvbnMpXG4gICAgICAgIHRoaXMuYm9keUZpbGwgPSBvcHRpb25zLmZpbGxcbiAgICAgICAgdGhpcy5ib2R5VGV4dCA9IG9wdGlvbnMudGV4dCB8fCAnJ1xuICAgICAgICB0aGlzLmNvbXBvbmVudHMgPSBbXVxuICAgICAgICB0aGlzLnR5cGUgPSAnbGluZSdcbiAgICAgICAgdGhpcy5oYXNDb250cm9scyA9IHRydWVcbiAgICAgICAgQ29uc3RhbnRzLlJFQ1RfRElTQUJMRURfQ09OVFJPTFMuZm9yRWFjaCgoY29udHJvbCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRDb250cm9sVmlzaWJsZShjb250cm9sLCBmYWxzZSlcbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5zZXQoJ2ZpbGwnLCAndHJhbnNwYXJlbnQnKVxuXG4gICAgICAgIHRoaXMub24oXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgJ2FkZGVkJzogdGhpcy5faW5pdENvbXBvbmVudHMsXG4gICAgICAgICAgICAgICAgJ21vZGlmaWVkJzogdGhpcy5fc2V0Q29tcG9uZW50c1Bvc2l0aW9uLFxuICAgICAgICAgICAgICAgICdzY2FsaW5nJzogdGhpcy5fc2V0Q29tcG9uZW50c1Bvc2l0aW9uLFxuICAgICAgICAgICAgICAgICdtb3ZpbmcnOiB0aGlzLl9zZXRDb21wb25lbnRzUG9zaXRpb24sXG4gICAgICAgICAgICAgICAgJ3JvdGF0aW5nJzogdGhpcy5fc2V0Q29tcG9uZW50c1Bvc2l0aW9uXG4gICAgICAgICAgICB9XG4gICAgICAgIClcbiAgICB9XG5cbiAgICBfaW5pdENvbXBvbmVudHMoKSB7XG4gICAgICAgIHRoaXMudGV4dCA9IG5ldyBmYWJyaWMuVGV4dCgnJywge3Zpc2libGU6IGZhbHNlfSlcbiAgICAgICAgdGhpcy5ib2R5ID0gbmV3IGZhYnJpYy5SZWN0KHtcbiAgICAgICAgICAgIHdpZHRoOiB0aGlzLndpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLmhlaWdodCxcbiAgICAgICAgICAgIHRvcDogdGhpcy50b3AsXG4gICAgICAgICAgICBsZWZ0OiB0aGlzLmxlZnQsXG4gICAgICAgICAgICBmaWxsOiB0aGlzLmJvZHlGaWxsXG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuY29tcG9uZW50cyA9IFt0aGlzLnRleHQsIHRoaXMuYm9keV1cblxuICAgICAgICB0aGlzLmNvbXBvbmVudHMuZm9yRWFjaCgoY29tcG9uZW50KSA9PiB7XG4gICAgICAgICAgICBjb21wb25lbnQuaGFzQ29udHJvbHMgPSBmYWxzZVxuICAgICAgICAgICAgY29tcG9uZW50LnNlbGVjdGFibGUgPSBmYWxzZVxuICAgICAgICAgICAgdGhpcy5jYW52YXMuYWRkKGNvbXBvbmVudClcbiAgICAgICAgICAgIGNvbXBvbmVudC5zZW5kQmFja3dhcmRzKClcbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5zZXRUZXh0KHRoaXMuYm9keVRleHQpXG4gICAgfVxuXG4gICAgX3NldENvbXBvbmVudHNQb3NpdGlvbigpIHtcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5oZWlnaHQgKiB0aGlzLnNjYWxlWSxcbiAgICAgICAgICAgIHdpZHRoID0gdGhpcy53aWR0aCAqIHRoaXMuc2NhbGVYLFxuICAgICAgICAgICAgYm91bmRpbmdSZWN0ID0gdGhpcy5nZXRCb3VuZGluZ1JlY3QoKVxuXG4gICAgICAgIGlmICh0aGlzLnRleHQpIHtcbiAgICAgICAgICAgIHRoaXMudGV4dC5zZXQoe1xuICAgICAgICAgICAgICAgIHRvcDogYm91bmRpbmdSZWN0LnRvcCArIDAuNSAqIChib3VuZGluZ1JlY3QuaGVpZ2h0IC0gdGhpcy50ZXh0LmhlaWdodCksXG4gICAgICAgICAgICAgICAgbGVmdDogYm91bmRpbmdSZWN0LmxlZnQgKyAwLjUgKiAoYm91bmRpbmdSZWN0LndpZHRoIC0gdGhpcy50ZXh0LndpZHRoKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYm9keS5zZXQoe1xuICAgICAgICAgICAgdG9wOiB0aGlzLnRvcCxcbiAgICAgICAgICAgIGxlZnQ6IHRoaXMubGVmdCxcbiAgICAgICAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAgICAgICAgYW5nbGU6IHRoaXMuYW5nbGVcbiAgICAgICAgfSlcblxuICAgIH1cblxuICAgIGdldENvbXBvbmVudHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbXBvbmVudHNcbiAgICB9XG5cbiAgICBzZXRUZXh0KHRleHQpIHtcbiAgICAgICAgaWYgKHRleHQuc2xpY2UoLTEpICE9PSAnbScpIHtcbiAgICAgICAgICAgIHRleHQgKz0gJ20nXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50ZXh0LnNldCh7XG4gICAgICAgICAgICB0ZXh0OiB0ZXh0XG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuX3NldENvbXBvbmVudHNQb3NpdGlvbigpXG4gICAgfVxuXG59XG5cbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9mYWJyaWNfXzsiXSwic291cmNlUm9vdCI6IiJ9