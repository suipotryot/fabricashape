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

/**
 * An Arrowline is a group that looks like a double arrowed line:
 *       <------->
 */
var Arrowline = _fabric.fabric.util.createClass(_line.Line, {
  type: 'arrowline',
  _initComponents: function _initComponents() {
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

    this._setupComponents();

    this.setText(this.bodyText);
  },
  _setComponentsPosition: function _setComponentsPosition() {
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
});

exports.Arrowline = Arrowline;
_fabric.fabric.Arrowline = Arrowline;

_fabric.fabric.Arrowline.fromObject = function (object, callback) {
  return _fabric.fabric.Object._fromObject('Arrowline', object, callback);
};

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

        _this2.renderAll();
      };

      reader.readAsDataURL(imageFile);
    }
  }, {
    key: "lockImage",
    value: function lockImage() {
      this.backgroundImage.sendToBack();
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

var Line = _fabric.fabric.util.createClass(_fabric.fabric.Rect, {
  type: 'line',
  components: [],
  hasControls: true,
  initialize: function initialize(options) {
    var _this = this;

    options || (options = {});
    this.callSuper('initialize', options);
    this.bodyFill = options.fill || '';

    if (options.hasOwnProperty('bodyFill')) {
      this.bodyFill = options.bodyFill;
    }

    this.bodyText = options.text || '';

    if (options.hasOwnProperty('bodyFill')) {
      this.bodyFill = options.bodyFill;
    }

    _constants.Constants.RECT_DISABLED_CONTROLS.forEach(function (control) {
      _this.setControlVisible(control, false);
    });

    this.set('fill', 'transparent');
    this.on({
      'added': this._initComponents,
      'modified': this._setComponentsPosition,
      'scaling': this._setComponentsPosition,
      'moving': this._setComponentsPosition,
      'rotating': this._setComponentsPosition
    });
  },
  _initComponents: function _initComponents() {
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

    this._setupComponents();

    this.setText(this.bodyText);
  },

  /**
   * _setupComponents: add the component to the canvas and set some options
   * to avoid them from being exported/selected
   */
  _setupComponents: function _setupComponents() {
    var _this2 = this;

    this.components.forEach(function (component) {
      component.set({
        excludeFromExport: true,
        hasControls: false,
        selectable: false
      });

      _this2.canvas.add(component);

      component.sendBackwards();
    });
  },
  _setComponentsPosition: function _setComponentsPosition() {
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
  },
  getComponents: function getComponents() {
    return this.components;
  },
  setText: function setText(text) {
    if (text.slice(-1) !== 'm') {
      text += 'm';
    }

    this.text.set({
      text: text
    });

    this._setComponentsPosition();
  },
  _render: function _render(ctx) {
    this.callSuper('_render', ctx);
  }
});

exports.Line = Line;
_fabric.fabric.Line = Line;

_fabric.fabric.Line.fromObject = function (object, callback) {
  return _fabric.fabric.Object._fromObject('Line', object, callback);
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mYWJyaWNhc2hhcGUvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2ZhYnJpY2FzaGFwZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9mYWJyaWNhc2hhcGUvLi9zcmMvYXJyb3dsaW5lLmpzIiwid2VicGFjazovL2ZhYnJpY2FzaGFwZS8uL3NyYy9jYW52YXMuanMiLCJ3ZWJwYWNrOi8vZmFicmljYXNoYXBlLy4vc3JjL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9mYWJyaWNhc2hhcGUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZmFicmljYXNoYXBlLy4vc3JjL2xpbmUuanMiLCJ3ZWJwYWNrOi8vZmFicmljYXNoYXBlL2V4dGVybmFsIFwiZmFicmljXCIiXSwibmFtZXMiOlsiQXJyb3dsaW5lIiwidXRpbCIsImNyZWF0ZUNsYXNzIiwidHlwZSIsIl9pbml0Q29tcG9uZW50cyIsInRleHQiLCJUZXh0IiwiYmFja2dyb3VuZENvbG9yIiwiYm9keSIsIlJlY3QiLCJmaWxsIiwiYm9keUZpbGwiLCJsZWZ0VHJpYW5nbGUiLCJUcmlhbmdsZSIsInJpZ2h0VHJpYW5nbGUiLCJfc2V0Q29tcG9uZW50c1Bvc2l0aW9uIiwiY29tcG9uZW50cyIsIl9zZXR1cENvbXBvbmVudHMiLCJzZXRUZXh0IiwiYm9keVRleHQiLCJkZWdyZWVzVG9SYWRpYW5zUmF0aW8iLCJNYXRoIiwiUEkiLCJoZWlnaHQiLCJzY2FsZVkiLCJ3aWR0aCIsInNjYWxlWCIsImNvc1RldGEiLCJjb3MiLCJhbmdsZSIsInNpblRldGEiLCJzaW4iLCJib3VuZGluZ1JlY3QiLCJnZXRCb3VuZGluZ1JlY3QiLCJzZXQiLCJ0b3AiLCJsZWZ0IiwiZm9udFNpemUiLCJmcm9tT2JqZWN0Iiwib2JqZWN0IiwiY2FsbGJhY2siLCJPYmplY3QiLCJfZnJvbU9iamVjdCIsIkNhbnZhcyIsImRvbUVsZW1lbmRJZCIsInNjYWxlIiwidmFsdWUiLCJzaGFwZSIsImJhY2tncm91bmRJbWFnZSIsImltYWdlRmlsZSIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJpbWciLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzcmMiLCJyZXN1bHQiLCJJbWFnZSIsImFkZCIsInJlbmRlckFsbCIsInJlYWRBc0RhdGFVUkwiLCJzZW5kVG9CYWNrIiwiaGFzQ29udHJvbHMiLCJzZWxlY3RhYmxlIiwiZGlzY2FyZEFjdGl2ZU9iamVjdCIsIm9uIiwiZSIsIm9iaiIsInRhcmdldCIsImN1cnJlbnRIZWlnaHQiLCJjdXJyZW50V2lkdGgiLCJzZXRDb29yZHMiLCJtYXgiLCJtaW4iLCJzY2FsZURlZmluaXRpb24iLCJjaG9pY2VzIiwiY2FudmFzaG9sZGVyIiwiZ2V0RWxlbWVudEJ5SWQiLCJzZWxlY3RMaXN0IiwiaWQiLCJwYXJlbnRFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJpIiwibGVuZ3RoIiwib3B0aW9uIiwibGFiZWwiLCJzdHlsZSIsImNvbG9yIiwic2VsZWN0T2JqZWN0IiwibGlzdFRvU2VsZWN0RE9NIiwiY3JlYXRlUmVmZXJlbmNlTGluZSIsInJlZmVyZW5jZUxpbmUiLCJvcHRpb25zIiwic2VsZWN0ZWRJbmRleCIsIml0ZW0iLCJzaXplIiwicmVxdWVzdFJlbmRlckFsbCIsImZpbGxSZWZlcmVuY2VMaW5lIiwiZHVwbGljYXRlUmVmZXJlbmNlTGluZSIsIlJFQ1RfRElTQUJMRURfQ09OVFJPTFMiLCJmb3JFYWNoIiwiY29udHJvbCIsInNldENvbnRyb2xWaXNpYmxlIiwib2ZmIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdHJva2UiLCJDb25zdGFudHMiLCJMaW5lIiwiaW5pdGlhbGl6ZSIsImNhbGxTdXBlciIsImhhc093blByb3BlcnR5IiwidmlzaWJsZSIsImNvbXBvbmVudCIsImV4Y2x1ZGVGcm9tRXhwb3J0IiwiY2FudmFzIiwic2VuZEJhY2t3YXJkcyIsImdldENvbXBvbmVudHMiLCJzbGlj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QUtBLEdBREE7QUFFVkMsVUFBSSxFQUFFLEtBQUtBLElBRkQ7QUFHVlgsV0FBSyxFQUFFQSxLQUhHO0FBSVZGLFlBQU0sRUFBRUEsTUFKRTtBQUtWTSxXQUFLLEVBQUUsS0FBS0E7QUFMRixLQUFkO0FBUUgsR0FyRm9EO0FBdUZyRHlGLGVBQWEsRUFBRSx5QkFBWTtBQUN2QixXQUFPLEtBQUt0RyxVQUFaO0FBQ0gsR0F6Rm9EO0FBMkZyREUsU0FBTyxFQUFFLGlCQUFVYixJQUFWLEVBQWdCO0FBQ3JCLFFBQUlBLElBQUksQ0FBQ2tILEtBQUwsQ0FBVyxDQUFDLENBQVosTUFBbUIsR0FBdkIsRUFBNEI7QUFDeEJsSCxVQUFJLElBQUksR0FBUjtBQUNIOztBQUNELFNBQUtBLElBQUwsQ0FBVTZCLEdBQVYsQ0FBYztBQUNWN0IsVUFBSSxFQUFFQTtBQURJLEtBQWQ7O0FBR0EsU0FBS1Usc0JBQUw7QUFDSCxHQW5Hb0Q7QUFxR3JEeUcsU0FBTyxFQUFFLGlCQUFVQyxHQUFWLEVBQWU7QUFDcEIsU0FBS1YsU0FBTCxDQUFlLFNBQWYsRUFBMEJVLEdBQTFCO0FBQ0g7QUF2R29ELENBQXJDLENBQWI7OztBQTJHUCxlQUFPWixJQUFQLEdBQWNBLElBQWQ7O0FBRUEsZUFBT0EsSUFBUCxDQUFZdkUsVUFBWixHQUF5QixVQUFVQyxNQUFWLEVBQWtCQyxRQUFsQixFQUE0QjtBQUNqRCxTQUFPLGVBQU9DLE1BQVAsQ0FBY0MsV0FBZCxDQUEwQixNQUExQixFQUFrQ0gsTUFBbEMsRUFBMENDLFFBQTFDLENBQVA7QUFDSCxDQUZELEM7Ozs7Ozs7Ozs7O0FDaEhBLG9EIiwiZmlsZSI6ImZhYnJpY2FzaGFwZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImZhYnJpY1wiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcImZhYnJpY2FzaGFwZVwiLCBbXCJmYWJyaWNcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiZmFicmljYXNoYXBlXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiZmFicmljXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJmYWJyaWNhc2hhcGVcIl0gPSBmYWN0b3J5KHJvb3RbXCJmYWJyaWNcIl0pO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZmFicmljX18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCB7ZmFicmljfSBmcm9tICdmYWJyaWMnXG5pbXBvcnQge0xpbmV9IGZyb20gJy4vbGluZSdcblxuLyoqXG4gKiBBbiBBcnJvd2xpbmUgaXMgYSBncm91cCB0aGF0IGxvb2tzIGxpa2UgYSBkb3VibGUgYXJyb3dlZCBsaW5lOlxuICogICAgICAgPC0tLS0tLS0+XG4gKi9cbmV4cG9ydCBjb25zdCBBcnJvd2xpbmUgPSBmYWJyaWMudXRpbC5jcmVhdGVDbGFzcyhMaW5lLCB7XG5cbiAgICB0eXBlOiAnYXJyb3dsaW5lJyxcblxuICAgIF9pbml0Q29tcG9uZW50czogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnRleHQgPSBuZXcgZmFicmljLlRleHQoJycsIHtiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZSd9KVxuICAgICAgICB0aGlzLmJvZHkgPSBuZXcgZmFicmljLlJlY3Qoe2ZpbGw6IHRoaXMuYm9keUZpbGx9KVxuICAgICAgICB0aGlzLmxlZnRUcmlhbmdsZSA9IG5ldyBmYWJyaWMuVHJpYW5nbGUoe2ZpbGw6IHRoaXMuYm9keUZpbGx9KVxuICAgICAgICB0aGlzLnJpZ2h0VHJpYW5nbGUgPSBuZXcgZmFicmljLlRyaWFuZ2xlKHtmaWxsOiB0aGlzLmJvZHlGaWxsfSlcblxuICAgICAgICB0aGlzLl9zZXRDb21wb25lbnRzUG9zaXRpb24oKVxuXG4gICAgICAgIHRoaXMuY29tcG9uZW50cyA9IFt0aGlzLmJvZHksIHRoaXMubGVmdFRyaWFuZ2xlLCB0aGlzLnJpZ2h0VHJpYW5nbGUsIHRoaXMudGV4dF1cblxuICAgICAgICB0aGlzLl9zZXR1cENvbXBvbmVudHMoKVxuICAgICAgICB0aGlzLnNldFRleHQodGhpcy5ib2R5VGV4dClcbiAgICB9LFxuXG4gICAgX3NldENvbXBvbmVudHNQb3NpdGlvbjogZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBkZWdyZWVzVG9SYWRpYW5zUmF0aW8gPSBNYXRoLlBJIC8gMTgwLFxuICAgICAgICAgICAgaGVpZ2h0ID0gdGhpcy5oZWlnaHQgKiB0aGlzLnNjYWxlWSxcbiAgICAgICAgICAgIHdpZHRoID0gdGhpcy53aWR0aCAqIHRoaXMuc2NhbGVYLFxuICAgICAgICAgICAgY29zVGV0YSA9IE1hdGguY29zKHRoaXMuYW5nbGUgKiBkZWdyZWVzVG9SYWRpYW5zUmF0aW8pLFxuICAgICAgICAgICAgc2luVGV0YSA9IE1hdGguc2luKHRoaXMuYW5nbGUgKiBkZWdyZWVzVG9SYWRpYW5zUmF0aW8pLFxuICAgICAgICAgICAgYm91bmRpbmdSZWN0ID0gdGhpcy5nZXRCb3VuZGluZ1JlY3QoKVxuXG4gICAgICAgIHRoaXMudGV4dC5zZXQoe1xuICAgICAgICAgICAgdG9wOiBib3VuZGluZ1JlY3QudG9wICsgMC41ICogKGJvdW5kaW5nUmVjdC5oZWlnaHQgLSB0aGlzLnRleHQuaGVpZ2h0KSxcbiAgICAgICAgICAgIGxlZnQ6IGJvdW5kaW5nUmVjdC5sZWZ0ICsgMC41ICogKGJvdW5kaW5nUmVjdC53aWR0aCAtIHRoaXMudGV4dC53aWR0aCksXG4gICAgICAgICAgICBmb250U2l6ZTogMThcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLmJvZHkuc2V0KHtcbiAgICAgICAgICAgIHRvcDogdGhpcy50b3AgKyBoZWlnaHQgKiBzaW5UZXRhICsgKGhlaWdodCAvIDQpICogY29zVGV0YSxcbiAgICAgICAgICAgIGxlZnQ6IHRoaXMubGVmdCArIGhlaWdodCAqIGNvc1RldGEgLSAoaGVpZ2h0IC8gNCkgKiBzaW5UZXRhLFxuICAgICAgICAgICAgd2lkdGg6IHdpZHRoIC0gMiAqIGhlaWdodCxcbiAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0IC8gMixcbiAgICAgICAgICAgIGFuZ2xlOiB0aGlzLmFuZ2xlXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5sZWZ0VHJpYW5nbGUuc2V0KHtcbiAgICAgICAgICAgIHRvcDogdGhpcy50b3AgKyBoZWlnaHQgKiBjb3NUZXRhLFxuICAgICAgICAgICAgbGVmdDogdGhpcy5sZWZ0IC0gaGVpZ2h0ICogc2luVGV0YSxcbiAgICAgICAgICAgIHdpZHRoOiBoZWlnaHQsXG4gICAgICAgICAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICAgICAgICAgIGFuZ2xlOiB0aGlzLmFuZ2xlIC0gOTBcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLnJpZ2h0VHJpYW5nbGUuc2V0KHtcbiAgICAgICAgICAgIHRvcDogdGhpcy50b3AgKyB3aWR0aCAqIHNpblRldGEsXG4gICAgICAgICAgICBsZWZ0OiB0aGlzLmxlZnQgKyB3aWR0aCAqIGNvc1RldGEsXG4gICAgICAgICAgICB3aWR0aDogaGVpZ2h0LFxuICAgICAgICAgICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgICAgICAgICBhbmdsZTogdGhpcy5hbmdsZSArIDkwXG4gICAgICAgIH0pXG4gICAgfVxuXG59KVxuXG5mYWJyaWMuQXJyb3dsaW5lID0gQXJyb3dsaW5lXG5cbmZhYnJpYy5BcnJvd2xpbmUuZnJvbU9iamVjdCA9IGZ1bmN0aW9uIChvYmplY3QsIGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIGZhYnJpYy5PYmplY3QuX2Zyb21PYmplY3QoJ0Fycm93bGluZScsIG9iamVjdCwgY2FsbGJhY2spO1xufTtcbiIsImltcG9ydCB7ZmFicmljfSBmcm9tICdmYWJyaWMnXG5pbXBvcnQge0NvbnN0YW50c30gZnJvbSAnLi9jb25zdGFudHMnXG5pbXBvcnQge0xpbmV9IGZyb20gJy4vbGluZSdcblxuZXhwb3J0IGNsYXNzIENhbnZhcyBleHRlbmRzIGZhYnJpYy5DYW52YXMge1xuXG4gICAgY29uc3RydWN0b3IoZG9tRWxlbWVuZElkKSB7XG4gICAgICAgIHN1cGVyKGRvbUVsZW1lbmRJZClcbiAgICAgICAgdGhpcy5kb21FbGVtZW5kSWQgPSBkb21FbGVtZW5kSWRcbiAgICAgICAgdGhpcy5zY2FsZSA9IHt2YWx1ZTogbnVsbCwgc2hhcGU6IG51bGx9XG4gICAgICAgIHRoaXMuYmFja2dyb3VuZEltYWdlID0gbnVsbFxuICAgICAgICAvLyB0aGlzLl9sb2NrT2JqZWN0c1RvQm91bmRhcmllcygpXG4gICAgfVxuXG4gICAgYWRkSW1hZ2UoaW1hZ2VGaWxlKSB7XG4gICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKClcblxuICAgICAgICByZWFkZXIub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcblxuICAgICAgICAgICAgaW1nLnNyYyA9IHJlYWRlci5yZXN1bHRcblxuICAgICAgICAgICAgdGhpcy5iYWNrZ3JvdW5kSW1hZ2UgPSBuZXcgZmFicmljLkltYWdlKGltZylcbiAgICAgICAgICAgIHRoaXMuYmFja2dyb3VuZEltYWdlLnNjYWxlKHRoaXMuaGVpZ2h0IC8gdGhpcy5iYWNrZ3JvdW5kSW1hZ2UuaGVpZ2h0KVxuICAgICAgICAgICAgdGhpcy5hZGQodGhpcy5iYWNrZ3JvdW5kSW1hZ2UpXG4gICAgICAgICAgICB0aGlzLnJlbmRlckFsbCgpXG4gICAgICAgIH07XG5cbiAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoaW1hZ2VGaWxlKTtcbiAgICB9XG5cbiAgICBsb2NrSW1hZ2UoKSB7XG4gICAgICAgIHRoaXMuYmFja2dyb3VuZEltYWdlLnNlbmRUb0JhY2soKVxuICAgICAgICB0aGlzLmJhY2tncm91bmRJbWFnZS5oYXNDb250cm9scyA9IGZhbHNlXG4gICAgICAgIHRoaXMuYmFja2dyb3VuZEltYWdlLnNlbGVjdGFibGUgPSBmYWxzZVxuICAgICAgICB0aGlzLmRpc2NhcmRBY3RpdmVPYmplY3QoKTtcbiAgICAgICAgdGhpcy5yZW5kZXJBbGwoKVxuICAgIH1cblxuICAgIF9sb2NrT2JqZWN0c1RvQm91bmRhcmllcygpIHtcbiAgICAgICAgdGhpcy5vbignb2JqZWN0Om1vdmluZycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICB2YXIgb2JqID0gZS50YXJnZXQ7XG5cbiAgICAgICAgICAgIC8vIGlmIG9iamVjdCBpcyB0b28gYmlnIGlnbm9yZVxuICAgICAgICAgICAgaWYgKG9iai5jdXJyZW50SGVpZ2h0ID4gdGhpcy5oZWlnaHQgfHwgb2JqLmN1cnJlbnRXaWR0aCA+IHRoaXMud2lkdGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvYmouc2V0Q29vcmRzKCk7XG4gICAgICAgICAgICAvLyB0b3AtbGVmdCAgY29ybmVyXG4gICAgICAgICAgICBpZiAob2JqLmdldEJvdW5kaW5nUmVjdCgpLnRvcCA8IDAgfHwgb2JqLmdldEJvdW5kaW5nUmVjdCgpLmxlZnQgPCAwKSB7XG4gICAgICAgICAgICAgICAgb2JqLnRvcCA9IE1hdGgubWF4KG9iai50b3AsIG9iai50b3AgLSBvYmouZ2V0Qm91bmRpbmdSZWN0KCkudG9wKTtcbiAgICAgICAgICAgICAgICBvYmoubGVmdCA9IE1hdGgubWF4KG9iai5sZWZ0LCBvYmoubGVmdCAtIG9iai5nZXRCb3VuZGluZ1JlY3QoKS5sZWZ0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGJvdC1yaWdodCBjb3JuZXJcbiAgICAgICAgICAgIGlmIChvYmouZ2V0Qm91bmRpbmdSZWN0KCkudG9wICsgb2JqLmdldEJvdW5kaW5nUmVjdCgpLmhlaWdodCA+IHRoaXMuaGVpZ2h0IHx8XG4gICAgICAgICAgICAgICAgICAgIG9iai5nZXRCb3VuZGluZ1JlY3QoKS5sZWZ0ICsgb2JqLmdldEJvdW5kaW5nUmVjdCgpLndpZHRoID4gdGhpcy53aWR0aCkge1xuICAgICAgICAgICAgICAgIG9iai50b3AgPSBNYXRoLm1pbihvYmoudG9wLCB0aGlzLmhlaWdodCAtIG9iai5nZXRCb3VuZGluZ1JlY3QoKS5oZWlnaHQgK1xuICAgICAgICAgICAgICAgICAgICBvYmoudG9wIC0gb2JqLmdldEJvdW5kaW5nUmVjdCgpLnRvcCk7XG4gICAgICAgICAgICAgICAgb2JqLmxlZnQgPSBNYXRoLm1pbihvYmoubGVmdCwgdGhpcy53aWR0aCAtIG9iai5nZXRCb3VuZGluZ1JlY3QoKS53aWR0aCArXG4gICAgICAgICAgICAgICAgICAgIG9iai5sZWZ0IC0gb2JqLmdldEJvdW5kaW5nUmVjdCgpLmxlZnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzZXRTY2FsZShzY2FsZURlZmluaXRpb24pIHtcbiAgICAgICAgaWYgKHNjYWxlRGVmaW5pdGlvbi5zaGFwZSkge1xuICAgICAgICAgICAgdGhpcy5zY2FsZS5zaGFwZSA9IHNjYWxlRGVmaW5pdGlvbi5zaGFwZVxuICAgICAgICB9XG4gICAgICAgIGlmIChzY2FsZURlZmluaXRpb24udmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuc2NhbGUudmFsdWUgPSBzY2FsZURlZmluaXRpb24udmFsdWVcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldFNjYWxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zY2FsZVxuICAgIH1cblxuICAgIGxvY2tTY2FsZSgpIHtcbiAgICAgICAgdGhpcy5zY2FsZS5zaGFwZS5oYXNDb250cm9scyA9IGZhbHNlXG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBAcGFyYW0gY2hvaWNlczogYSBsaXN0IG9mIChsYWJlbCwgY29sb3IpXG4gICAgICogIGV4YW1wbGU6IFtcbiAgICAgKiAgICAgIHtsYWJlbDogJ2xhYmVsMScsIGNvbG9yOiAnYmx1ZSd9LFxuICAgICAqICAgICAge2xhYmVsOiAnbGFiZWwyJywgY29sb3I6ICdyZ2JhKDI1NSwwLDAsMC41KSd9XG4gICAgICogICBdXG4gICAgICogQHJldHVybiBhIERPTSBzZWxlY3Qgb2JqZWN0IHdpdGggY29ycmVzcG9uZGluZyBvcHRpb25zXG4gICAgICovXG4gICAgbGlzdFRvU2VsZWN0RE9NKGNob2ljZXMpIHtcbiAgICAgICAgY29uc3QgY2FudmFzaG9sZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5kb21FbGVtZW5kSWQpXG5cbiAgICAgICAgLy8gQ3JlYXRlIGFuZCBhcHBlbmQgc2VsZWN0IGxpc3RcbiAgICAgICAgY29uc3Qgc2VsZWN0TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpXG5cbiAgICAgICAgc2VsZWN0TGlzdC5pZCA9ICdmYWJyaWNhc2hhcGVTaGFwZUNob2ljZXMnXG4gICAgICAgIGNhbnZhc2hvbGRlci5wYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKHNlbGVjdExpc3QpXG5cbiAgICAgICAgLy8gQ3JlYXRlIGFuZCBhcHBlbmQgdGhlIG9wdGlvbnNcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaG9pY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuXG4gICAgICAgICAgICBvcHRpb24udmFsdWUgPSBjaG9pY2VzW2ldLmxhYmVsXG4gICAgICAgICAgICBvcHRpb24udGV4dCA9IGNob2ljZXNbaV0ubGFiZWxcbiAgICAgICAgICAgIG9wdGlvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjaG9pY2VzW2ldLmNvbG9yXG4gICAgICAgICAgICBzZWxlY3RMaXN0LmFwcGVuZENoaWxkKG9wdGlvbilcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2VsZWN0TGlzdFxuICAgIH1cblxuICAgIHNldFNoYXBlQ2hvaWNlcyhjaG9pY2VzKSB7XG4gICAgICAgIGNvbnN0IHNlbGVjdE9iamVjdCA9IHRoaXMubGlzdFRvU2VsZWN0RE9NKGNob2ljZXMpXG5cbiAgICAgICAgdGhpcy5jcmVhdGVSZWZlcmVuY2VMaW5lKHNlbGVjdE9iamVjdClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbGluZSB1c2VyIGNhbiBjbGljayBvbiB0byBkdXBsaWNhdGUgaXQgYW5kIHVzZSB0aGUgZHVwbGljYXRlIGludG8gdGhlIHNjZW5lLlxuICAgICAqL1xuICAgIGNyZWF0ZVJlZmVyZW5jZUxpbmUoc2VsZWN0T2JqZWN0KSB7XG4gICAgICAgIGNvbnN0IHJlZmVyZW5jZUxpbmUgPSBuZXcgZmFicmljLlJlY3Qoe1xuICAgICAgICAgICAgdG9wOiA1LCBsZWZ0OiA1LCB3aWR0aDogODAsIGhlaWdodDogMTcsXG4gICAgICAgICAgICBmaWxsOiBzZWxlY3RPYmplY3Qub3B0aW9uc1tzZWxlY3RPYmplY3Quc2VsZWN0ZWRJbmRleF0uc3R5bGUuYmFja2dyb3VuZENvbG9yXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5hZGQocmVmZXJlbmNlTGluZSlcbiAgICAgICAgdGhpcy5pdGVtKHRoaXMuc2l6ZSgpIC0gMSkuaGFzQ29udHJvbHMgPSBmYWxzZVxuICAgICAgICB0aGlzLnJlcXVlc3RSZW5kZXJBbGwoKVxuXG4gICAgICAgIGNvbnN0IGZpbGxSZWZlcmVuY2VMaW5lID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpc1xuICAgICAgICAgICAgICAgIC5pdGVtKHRoaXMuc2l6ZSgpIC0gMSlcbiAgICAgICAgICAgICAgICAuc2V0KCdmaWxsJywgc2VsZWN0T2JqZWN0Lm9wdGlvbnNbc2VsZWN0T2JqZWN0LnNlbGVjdGVkSW5kZXhdLnN0eWxlLmJhY2tncm91bmRDb2xvcilcbiAgICAgICAgICAgIHRoaXMucmVuZGVyQWxsKClcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGR1cGxpY2F0ZVJlZmVyZW5jZUxpbmUgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVJlZmVyZW5jZUxpbmUoc2VsZWN0T2JqZWN0KVxuICAgICAgICAgICAgcmVmZXJlbmNlTGluZS5oYXNDb250cm9scyA9IHRydWVcbiAgICAgICAgICAgIENvbnN0YW50cy5SRUNUX0RJU0FCTEVEX0NPTlRST0xTLmZvckVhY2goKGNvbnRyb2wpID0+IHtcbiAgICAgICAgICAgICAgICByZWZlcmVuY2VMaW5lLnNldENvbnRyb2xWaXNpYmxlKGNvbnRyb2wsIGZhbHNlKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJlZmVyZW5jZUxpbmUub24oJ21vdXNlZG93bicsICgpID0+IHtcbiAgICAgICAgICAgIGR1cGxpY2F0ZVJlZmVyZW5jZUxpbmUoKVxuICAgICAgICAgICAgcmVmZXJlbmNlTGluZS5vZmYoJ21vdXNlZG93bicpXG4gICAgICAgIH0pXG5cbiAgICAgICAgc2VsZWN0T2JqZWN0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZpbGxSZWZlcmVuY2VMaW5lKVxuICAgICAgICBzZWxlY3RPYmplY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZmlsbFJlZmVyZW5jZUxpbmUpXG4gICAgfVxuXG4gICAgY3JlYXRlU2NhbGVkTGluZShvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IHNjYWxlID0gKHRoaXMuc2NhbGUuc2hhcGUud2lkdGggKiB0aGlzLnNjYWxlLnNoYXBlLnNjYWxlWCkgLyB0aGlzLnNjYWxlLnZhbHVlXG5cbiAgICAgICAgb3B0aW9ucy50b3AgPSBvcHRpb25zLnRvcCAqIHNjYWxlXG4gICAgICAgIG9wdGlvbnMubGVmdCA9IG9wdGlvbnMubGVmdCAqIHNjYWxlXG4gICAgICAgIG9wdGlvbnMud2lkdGggPSBvcHRpb25zLndpZHRoICogc2NhbGVcbiAgICAgICAgb3B0aW9ucy5oZWlnaHQgPSBvcHRpb25zLnN0cm9rZSAqIHNjYWxlXG5cbiAgICAgICAgcmV0dXJuIG5ldyBMaW5lKG9wdGlvbnMpXG4gICAgfVxuXG59XG4iLCIvLyBjb250cm9sczogJ3RsJywgJ3RyJywgJ2JyJywgJ2JsJywgJ21sJywgJ210JywgJ21yJywgJ21iJywgJ210cidcbmV4cG9ydCBjb25zdCBDb25zdGFudHMgPSB7XG4gICAgUkVDVF9ESVNBQkxFRF9DT05UUk9MUzogWyAndGwnLCAndHInLCAnYmwnLCAnYnInLCAnbXQnLCAnbWInIF1cbn1cbiIsImltcG9ydCB7QXJyb3dsaW5lfSBmcm9tICcuL2Fycm93bGluZS5qcyc7XG5pbXBvcnQge0NhbnZhc30gZnJvbSAnLi9jYW52YXMuanMnO1xuaW1wb3J0IHtMaW5lfSBmcm9tICcuL2xpbmUuanMnO1xuaW1wb3J0IHtDb25zdGFudHN9IGZyb20gJy4vY29uc3RhbnRzLmpzJztcbmV4cG9ydCB7QXJyb3dsaW5lLCBDYW52YXMsIExpbmUsIENvbnN0YW50c307XG4iLCJpbXBvcnQge2ZhYnJpY30gZnJvbSAnZmFicmljJ1xuaW1wb3J0IHtDb25zdGFudHN9IGZyb20gJy4vY29uc3RhbnRzJ1xuXG5leHBvcnQgY29uc3QgTGluZSA9IGZhYnJpYy51dGlsLmNyZWF0ZUNsYXNzKGZhYnJpYy5SZWN0LCB7XG5cbiAgICB0eXBlOiAnbGluZScsXG4gICAgY29tcG9uZW50czogW10sXG4gICAgaGFzQ29udHJvbHM6IHRydWUsXG5cbiAgICBpbml0aWFsaXplOiBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICBvcHRpb25zIHx8IChvcHRpb25zID0geyB9KTtcbiAgICAgICAgdGhpcy5jYWxsU3VwZXIoJ2luaXRpYWxpemUnLCBvcHRpb25zKTtcblxuICAgICAgICB0aGlzLmJvZHlGaWxsID0gb3B0aW9ucy5maWxsIHx8ICcnXG4gICAgICAgIGlmIChvcHRpb25zLmhhc093blByb3BlcnR5KCdib2R5RmlsbCcpKSB7XG4gICAgICAgICAgICB0aGlzLmJvZHlGaWxsID0gb3B0aW9ucy5ib2R5RmlsbFxuICAgICAgICB9XG4gICAgICAgIHRoaXMuYm9keVRleHQgPSBvcHRpb25zLnRleHQgfHwgJydcbiAgICAgICAgaWYgKG9wdGlvbnMuaGFzT3duUHJvcGVydHkoJ2JvZHlGaWxsJykpIHtcbiAgICAgICAgICAgIHRoaXMuYm9keUZpbGwgPSBvcHRpb25zLmJvZHlGaWxsXG4gICAgICAgIH1cbiAgICAgICAgQ29uc3RhbnRzLlJFQ1RfRElTQUJMRURfQ09OVFJPTFMuZm9yRWFjaCgoY29udHJvbCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRDb250cm9sVmlzaWJsZShjb250cm9sLCBmYWxzZSlcbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5zZXQoJ2ZpbGwnLCAndHJhbnNwYXJlbnQnKVxuXG4gICAgICAgIHRoaXMub24oXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgJ2FkZGVkJzogdGhpcy5faW5pdENvbXBvbmVudHMsXG4gICAgICAgICAgICAgICAgJ21vZGlmaWVkJzogdGhpcy5fc2V0Q29tcG9uZW50c1Bvc2l0aW9uLFxuICAgICAgICAgICAgICAgICdzY2FsaW5nJzogdGhpcy5fc2V0Q29tcG9uZW50c1Bvc2l0aW9uLFxuICAgICAgICAgICAgICAgICdtb3ZpbmcnOiB0aGlzLl9zZXRDb21wb25lbnRzUG9zaXRpb24sXG4gICAgICAgICAgICAgICAgJ3JvdGF0aW5nJzogdGhpcy5fc2V0Q29tcG9uZW50c1Bvc2l0aW9uXG4gICAgICAgICAgICB9XG4gICAgICAgIClcbiAgICB9LFxuXG4gICAgX2luaXRDb21wb25lbnRzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMudGV4dCA9IG5ldyBmYWJyaWMuVGV4dCgnJywge3Zpc2libGU6IGZhbHNlfSlcbiAgICAgICAgdGhpcy5ib2R5ID0gbmV3IGZhYnJpYy5SZWN0KHtcbiAgICAgICAgICAgIHdpZHRoOiB0aGlzLndpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLmhlaWdodCxcbiAgICAgICAgICAgIHRvcDogdGhpcy50b3AsXG4gICAgICAgICAgICBsZWZ0OiB0aGlzLmxlZnQsXG4gICAgICAgICAgICBmaWxsOiB0aGlzLmJvZHlGaWxsXG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuY29tcG9uZW50cyA9IFt0aGlzLnRleHQsIHRoaXMuYm9keV1cblxuICAgICAgICB0aGlzLl9zZXR1cENvbXBvbmVudHMoKVxuICAgICAgICB0aGlzLnNldFRleHQodGhpcy5ib2R5VGV4dClcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogX3NldHVwQ29tcG9uZW50czogYWRkIHRoZSBjb21wb25lbnQgdG8gdGhlIGNhbnZhcyBhbmQgc2V0IHNvbWUgb3B0aW9uc1xuICAgICAqIHRvIGF2b2lkIHRoZW0gZnJvbSBiZWluZyBleHBvcnRlZC9zZWxlY3RlZFxuICAgICAqL1xuICAgIF9zZXR1cENvbXBvbmVudHM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5jb21wb25lbnRzLmZvckVhY2goKGNvbXBvbmVudCkgPT4ge1xuICAgICAgICAgICAgY29tcG9uZW50LnNldCh7XG4gICAgICAgICAgICAgICAgZXhjbHVkZUZyb21FeHBvcnQ6IHRydWUsXG4gICAgICAgICAgICAgICAgaGFzQ29udHJvbHM6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNlbGVjdGFibGU6IGZhbHNlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgdGhpcy5jYW52YXMuYWRkKGNvbXBvbmVudClcbiAgICAgICAgICAgIGNvbXBvbmVudC5zZW5kQmFja3dhcmRzKClcbiAgICAgICAgfSlcbiAgICB9LFxuXG4gICAgX3NldENvbXBvbmVudHNQb3NpdGlvbjogZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmhlaWdodCAqIHRoaXMuc2NhbGVZLFxuICAgICAgICAgICAgd2lkdGggPSB0aGlzLndpZHRoICogdGhpcy5zY2FsZVgsXG4gICAgICAgICAgICBib3VuZGluZ1JlY3QgPSB0aGlzLmdldEJvdW5kaW5nUmVjdCgpXG5cbiAgICAgICAgaWYgKHRoaXMudGV4dCkge1xuICAgICAgICAgICAgdGhpcy50ZXh0LnNldCh7XG4gICAgICAgICAgICAgICAgdG9wOiBib3VuZGluZ1JlY3QudG9wICsgMC41ICogKGJvdW5kaW5nUmVjdC5oZWlnaHQgLSB0aGlzLnRleHQuaGVpZ2h0KSxcbiAgICAgICAgICAgICAgICBsZWZ0OiBib3VuZGluZ1JlY3QubGVmdCArIDAuNSAqIChib3VuZGluZ1JlY3Qud2lkdGggLSB0aGlzLnRleHQud2lkdGgpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5ib2R5LnNldCh7XG4gICAgICAgICAgICB0b3A6IHRoaXMudG9wLFxuICAgICAgICAgICAgbGVmdDogdGhpcy5sZWZ0LFxuICAgICAgICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgICAgICAgICBhbmdsZTogdGhpcy5hbmdsZVxuICAgICAgICB9KVxuXG4gICAgfSxcblxuICAgIGdldENvbXBvbmVudHM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcG9uZW50c1xuICAgIH0sXG5cbiAgICBzZXRUZXh0OiBmdW5jdGlvbiAodGV4dCkge1xuICAgICAgICBpZiAodGV4dC5zbGljZSgtMSkgIT09ICdtJykge1xuICAgICAgICAgICAgdGV4dCArPSAnbSdcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRleHQuc2V0KHtcbiAgICAgICAgICAgIHRleHQ6IHRleHRcbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5fc2V0Q29tcG9uZW50c1Bvc2l0aW9uKClcbiAgICB9LFxuXG4gICAgX3JlbmRlcjogZnVuY3Rpb24gKGN0eCkge1xuICAgICAgICB0aGlzLmNhbGxTdXBlcignX3JlbmRlcicsIGN0eCk7XG4gICAgfVxuXG59KVxuXG5mYWJyaWMuTGluZSA9IExpbmVcblxuZmFicmljLkxpbmUuZnJvbU9iamVjdCA9IGZ1bmN0aW9uIChvYmplY3QsIGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIGZhYnJpYy5PYmplY3QuX2Zyb21PYmplY3QoJ0xpbmUnLCBvYmplY3QsIGNhbGxiYWNrKTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZmFicmljX187Il0sInNvdXJjZVJvb3QiOiIifQ==