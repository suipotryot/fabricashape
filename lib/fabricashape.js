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
  toObject: function toObject() {
    return _fabric.fabric.util.object.extend(this.callSuper('toObject'), {
      bodyFill: this.get('bodyFill'),
      bodyText: this.get('bodyText')
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mYWJyaWNhc2hhcGUvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2ZhYnJpY2FzaGFwZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9mYWJyaWNhc2hhcGUvLi9zcmMvYXJyb3dsaW5lLmpzIiwid2VicGFjazovL2ZhYnJpY2FzaGFwZS8uL3NyYy9jYW52YXMuanMiLCJ3ZWJwYWNrOi8vZmFicmljYXNoYXBlLy4vc3JjL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9mYWJyaWNhc2hhcGUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZmFicmljYXNoYXBlLy4vc3JjL2xpbmUuanMiLCJ3ZWJwYWNrOi8vZmFicmljYXNoYXBlL2V4dGVybmFsIFwiZmFicmljXCIiXSwibmFtZXMiOlsiQXJyb3dsaW5lIiwidXRpbCIsImNyZWF0ZUNsYXNzIiwidHlwZSIsIl9pbml0Q29tcG9uZW50cyIsInRleHQiLCJUZXh0IiwiYmFja2dyb3VuZENvbG9yIiwiYm9keSIsIlJlY3QiLCJmaWxsIiwiYm9keUZpbGwiLCJsZWZ0VHJpYW5nbGUiLCJUcmlhbmdsZSIsInJpZ2h0VHJpYW5nbGUiLCJfc2V0Q29tcG9uZW50c1Bvc2l0aW9uIiwiY29tcG9uZW50cyIsIl9zZXR1cENvbXBvbmVudHMiLCJzZXRUZXh0IiwiYm9keVRleHQiLCJkZWdyZWVzVG9SYWRpYW5zUmF0aW8iLCJNYXRoIiwiUEkiLCJoZWlnaHQiLCJzY2FsZVkiLCJ3aWR0aCIsInNjYWxlWCIsImNvc1RldGEiLCJjb3MiLCJhbmdsZSIsInNpblRldGEiLCJzaW4iLCJib3VuZGluZ1JlY3QiLCJnZXRCb3VuZGluZ1JlY3QiLCJzZXQiLCJ0b3AiLCJsZWZ0IiwiZm9udFNpemUiLCJmcm9tT2JqZWN0Iiwib2JqZWN0IiwiY2FsbGJhY2siLCJPYmplY3QiLCJfZnJvbU9iamVjdCIsIkNhbnZhcyIsImRvbUVsZW1lbmRJZCIsInNjYWxlIiwidmFsdWUiLCJzaGFwZSIsImJhY2tncm91bmRJbWFnZSIsImltYWdlRmlsZSIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJpbWciLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzcmMiLCJyZXN1bHQiLCJJbWFnZSIsImFkZCIsInJlbmRlckFsbCIsInJlYWRBc0RhdGFVUkwiLCJzZW5kVG9CYWNrIiwiaGFzQ29udHJvbHMiLCJzZWxlY3RhYmxlIiwiZGlzY2FyZEFjdGl2ZU9iamVjdCIsIm9uIiwiZSIsIm9iaiIsInRhcmdldCIsImN1cnJlbnRIZWlnaHQiLCJjdXJyZW50V2lkdGgiLCJzZXRDb29yZHMiLCJtYXgiLCJtaW4iLCJzY2FsZURlZmluaXRpb24iLCJjaG9pY2VzIiwiY2FudmFzaG9sZGVyIiwiZ2V0RWxlbWVudEJ5SWQiLCJzZWxlY3RMaXN0IiwiaWQiLCJwYXJlbnRFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJpIiwibGVuZ3RoIiwib3B0aW9uIiwibGFiZWwiLCJzdHlsZSIsImNvbG9yIiwic2VsZWN0T2JqZWN0IiwibGlzdFRvU2VsZWN0RE9NIiwiY3JlYXRlUmVmZXJlbmNlTGluZSIsInJlZmVyZW5jZUxpbmUiLCJvcHRpb25zIiwic2VsZWN0ZWRJbmRleCIsIml0ZW0iLCJzaXplIiwicmVxdWVzdFJlbmRlckFsbCIsImZpbGxSZWZlcmVuY2VMaW5lIiwiZHVwbGljYXRlUmVmZXJlbmNlTGluZSIsIlJFQ1RfRElTQUJMRURfQ09OVFJPTFMiLCJmb3JFYWNoIiwiY29udHJvbCIsInNldENvbnRyb2xWaXNpYmxlIiwib2ZmIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdHJva2UiLCJDb25zdGFudHMiLCJMaW5lIiwiaW5pdGlhbGl6ZSIsImNhbGxTdXBlciIsImhhc093blByb3BlcnR5IiwidmlzaWJsZSIsImNvbXBvbmVudCIsImV4Y2x1ZGVGcm9tRXhwb3J0IiwiY2FudmFzIiwic2VuZEJhY2t3YXJkcyIsImdldENvbXBvbmVudHMiLCJzbGlj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ZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJmYWJyaWNcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJmYWJyaWNhc2hhcGVcIiwgW1wiZmFicmljXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImZhYnJpY2FzaGFwZVwiXSA9IGZhY3RvcnkocmVxdWlyZShcImZhYnJpY1wiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiZmFicmljYXNoYXBlXCJdID0gZmFjdG9yeShyb290W1wiZmFicmljXCJdKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ZhYnJpY19fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQge2ZhYnJpY30gZnJvbSAnZmFicmljJ1xuaW1wb3J0IHtMaW5lfSBmcm9tICcuL2xpbmUnXG5cbi8qKlxuICogQW4gQXJyb3dsaW5lIGlzIGEgZ3JvdXAgdGhhdCBsb29rcyBsaWtlIGEgZG91YmxlIGFycm93ZWQgbGluZTpcbiAqICAgICAgIDwtLS0tLS0tPlxuICovXG5leHBvcnQgY29uc3QgQXJyb3dsaW5lID0gZmFicmljLnV0aWwuY3JlYXRlQ2xhc3MoTGluZSwge1xuXG4gICAgdHlwZTogJ2Fycm93bGluZScsXG5cbiAgICBfaW5pdENvbXBvbmVudHM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy50ZXh0ID0gbmV3IGZhYnJpYy5UZXh0KCcnLCB7YmFja2dyb3VuZENvbG9yOiAnd2hpdGUnfSlcbiAgICAgICAgdGhpcy5ib2R5ID0gbmV3IGZhYnJpYy5SZWN0KHtmaWxsOiB0aGlzLmJvZHlGaWxsfSlcbiAgICAgICAgdGhpcy5sZWZ0VHJpYW5nbGUgPSBuZXcgZmFicmljLlRyaWFuZ2xlKHtmaWxsOiB0aGlzLmJvZHlGaWxsfSlcbiAgICAgICAgdGhpcy5yaWdodFRyaWFuZ2xlID0gbmV3IGZhYnJpYy5UcmlhbmdsZSh7ZmlsbDogdGhpcy5ib2R5RmlsbH0pXG5cbiAgICAgICAgdGhpcy5fc2V0Q29tcG9uZW50c1Bvc2l0aW9uKClcblxuICAgICAgICB0aGlzLmNvbXBvbmVudHMgPSBbdGhpcy5ib2R5LCB0aGlzLmxlZnRUcmlhbmdsZSwgdGhpcy5yaWdodFRyaWFuZ2xlLCB0aGlzLnRleHRdXG5cbiAgICAgICAgdGhpcy5fc2V0dXBDb21wb25lbnRzKClcbiAgICAgICAgdGhpcy5zZXRUZXh0KHRoaXMuYm9keVRleHQpXG4gICAgfSxcblxuICAgIF9zZXRDb21wb25lbnRzUG9zaXRpb246IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgZGVncmVlc1RvUmFkaWFuc1JhdGlvID0gTWF0aC5QSSAvIDE4MCxcbiAgICAgICAgICAgIGhlaWdodCA9IHRoaXMuaGVpZ2h0ICogdGhpcy5zY2FsZVksXG4gICAgICAgICAgICB3aWR0aCA9IHRoaXMud2lkdGggKiB0aGlzLnNjYWxlWCxcbiAgICAgICAgICAgIGNvc1RldGEgPSBNYXRoLmNvcyh0aGlzLmFuZ2xlICogZGVncmVlc1RvUmFkaWFuc1JhdGlvKSxcbiAgICAgICAgICAgIHNpblRldGEgPSBNYXRoLnNpbih0aGlzLmFuZ2xlICogZGVncmVlc1RvUmFkaWFuc1JhdGlvKSxcbiAgICAgICAgICAgIGJvdW5kaW5nUmVjdCA9IHRoaXMuZ2V0Qm91bmRpbmdSZWN0KClcblxuICAgICAgICB0aGlzLnRleHQuc2V0KHtcbiAgICAgICAgICAgIHRvcDogYm91bmRpbmdSZWN0LnRvcCArIDAuNSAqIChib3VuZGluZ1JlY3QuaGVpZ2h0IC0gdGhpcy50ZXh0LmhlaWdodCksXG4gICAgICAgICAgICBsZWZ0OiBib3VuZGluZ1JlY3QubGVmdCArIDAuNSAqIChib3VuZGluZ1JlY3Qud2lkdGggLSB0aGlzLnRleHQud2lkdGgpLFxuICAgICAgICAgICAgZm9udFNpemU6IDE4XG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5ib2R5LnNldCh7XG4gICAgICAgICAgICB0b3A6IHRoaXMudG9wICsgaGVpZ2h0ICogc2luVGV0YSArIChoZWlnaHQgLyA0KSAqIGNvc1RldGEsXG4gICAgICAgICAgICBsZWZ0OiB0aGlzLmxlZnQgKyBoZWlnaHQgKiBjb3NUZXRhIC0gKGhlaWdodCAvIDQpICogc2luVGV0YSxcbiAgICAgICAgICAgIHdpZHRoOiB3aWR0aCAtIDIgKiBoZWlnaHQsXG4gICAgICAgICAgICBoZWlnaHQ6IGhlaWdodCAvIDIsXG4gICAgICAgICAgICBhbmdsZTogdGhpcy5hbmdsZVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMubGVmdFRyaWFuZ2xlLnNldCh7XG4gICAgICAgICAgICB0b3A6IHRoaXMudG9wICsgaGVpZ2h0ICogY29zVGV0YSxcbiAgICAgICAgICAgIGxlZnQ6IHRoaXMubGVmdCAtIGhlaWdodCAqIHNpblRldGEsXG4gICAgICAgICAgICB3aWR0aDogaGVpZ2h0LFxuICAgICAgICAgICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgICAgICAgICBhbmdsZTogdGhpcy5hbmdsZSAtIDkwXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5yaWdodFRyaWFuZ2xlLnNldCh7XG4gICAgICAgICAgICB0b3A6IHRoaXMudG9wICsgd2lkdGggKiBzaW5UZXRhLFxuICAgICAgICAgICAgbGVmdDogdGhpcy5sZWZ0ICsgd2lkdGggKiBjb3NUZXRhLFxuICAgICAgICAgICAgd2lkdGg6IGhlaWdodCxcbiAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAgICAgICAgYW5nbGU6IHRoaXMuYW5nbGUgKyA5MFxuICAgICAgICB9KVxuICAgIH1cblxufSlcblxuZmFicmljLkFycm93bGluZSA9IEFycm93bGluZVxuXG5mYWJyaWMuQXJyb3dsaW5lLmZyb21PYmplY3QgPSBmdW5jdGlvbiAob2JqZWN0LCBjYWxsYmFjaykge1xuICAgIHJldHVybiBmYWJyaWMuT2JqZWN0Ll9mcm9tT2JqZWN0KCdBcnJvd2xpbmUnLCBvYmplY3QsIGNhbGxiYWNrKTtcbn07XG4iLCJpbXBvcnQge2ZhYnJpY30gZnJvbSAnZmFicmljJ1xuaW1wb3J0IHtDb25zdGFudHN9IGZyb20gJy4vY29uc3RhbnRzJ1xuaW1wb3J0IHtMaW5lfSBmcm9tICcuL2xpbmUnXG5cbmV4cG9ydCBjbGFzcyBDYW52YXMgZXh0ZW5kcyBmYWJyaWMuQ2FudmFzIHtcblxuICAgIGNvbnN0cnVjdG9yKGRvbUVsZW1lbmRJZCkge1xuICAgICAgICBzdXBlcihkb21FbGVtZW5kSWQpXG4gICAgICAgIHRoaXMuZG9tRWxlbWVuZElkID0gZG9tRWxlbWVuZElkXG4gICAgICAgIHRoaXMuc2NhbGUgPSB7dmFsdWU6IG51bGwsIHNoYXBlOiBudWxsfVxuICAgICAgICB0aGlzLmJhY2tncm91bmRJbWFnZSA9IG51bGxcbiAgICAgICAgLy8gdGhpcy5fbG9ja09iamVjdHNUb0JvdW5kYXJpZXMoKVxuICAgIH1cblxuICAgIGFkZEltYWdlKGltYWdlRmlsZSkge1xuICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpXG5cbiAgICAgICAgcmVhZGVyLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG5cbiAgICAgICAgICAgIGltZy5zcmMgPSByZWFkZXIucmVzdWx0XG5cbiAgICAgICAgICAgIHRoaXMuYmFja2dyb3VuZEltYWdlID0gbmV3IGZhYnJpYy5JbWFnZShpbWcpXG4gICAgICAgICAgICB0aGlzLmJhY2tncm91bmRJbWFnZS5zY2FsZSh0aGlzLmhlaWdodCAvIHRoaXMuYmFja2dyb3VuZEltYWdlLmhlaWdodClcbiAgICAgICAgICAgIHRoaXMuYWRkKHRoaXMuYmFja2dyb3VuZEltYWdlKVxuICAgICAgICAgICAgdGhpcy5yZW5kZXJBbGwoKVxuICAgICAgICB9O1xuXG4gICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGltYWdlRmlsZSk7XG4gICAgfVxuXG4gICAgbG9ja0ltYWdlKCkge1xuICAgICAgICB0aGlzLmJhY2tncm91bmRJbWFnZS5zZW5kVG9CYWNrKClcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kSW1hZ2UuaGFzQ29udHJvbHMgPSBmYWxzZVxuICAgICAgICB0aGlzLmJhY2tncm91bmRJbWFnZS5zZWxlY3RhYmxlID0gZmFsc2VcbiAgICAgICAgdGhpcy5kaXNjYXJkQWN0aXZlT2JqZWN0KCk7XG4gICAgICAgIHRoaXMucmVuZGVyQWxsKClcbiAgICB9XG5cbiAgICBfbG9ja09iamVjdHNUb0JvdW5kYXJpZXMoKSB7XG4gICAgICAgIHRoaXMub24oJ29iamVjdDptb3ZpbmcnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIG9iaiA9IGUudGFyZ2V0O1xuXG4gICAgICAgICAgICAvLyBpZiBvYmplY3QgaXMgdG9vIGJpZyBpZ25vcmVcbiAgICAgICAgICAgIGlmIChvYmouY3VycmVudEhlaWdodCA+IHRoaXMuaGVpZ2h0IHx8IG9iai5jdXJyZW50V2lkdGggPiB0aGlzLndpZHRoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb2JqLnNldENvb3JkcygpO1xuICAgICAgICAgICAgLy8gdG9wLWxlZnQgIGNvcm5lclxuICAgICAgICAgICAgaWYgKG9iai5nZXRCb3VuZGluZ1JlY3QoKS50b3AgPCAwIHx8IG9iai5nZXRCb3VuZGluZ1JlY3QoKS5sZWZ0IDwgMCkge1xuICAgICAgICAgICAgICAgIG9iai50b3AgPSBNYXRoLm1heChvYmoudG9wLCBvYmoudG9wIC0gb2JqLmdldEJvdW5kaW5nUmVjdCgpLnRvcCk7XG4gICAgICAgICAgICAgICAgb2JqLmxlZnQgPSBNYXRoLm1heChvYmoubGVmdCwgb2JqLmxlZnQgLSBvYmouZ2V0Qm91bmRpbmdSZWN0KCkubGVmdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBib3QtcmlnaHQgY29ybmVyXG4gICAgICAgICAgICBpZiAob2JqLmdldEJvdW5kaW5nUmVjdCgpLnRvcCArIG9iai5nZXRCb3VuZGluZ1JlY3QoKS5oZWlnaHQgPiB0aGlzLmhlaWdodCB8fFxuICAgICAgICAgICAgICAgICAgICBvYmouZ2V0Qm91bmRpbmdSZWN0KCkubGVmdCArIG9iai5nZXRCb3VuZGluZ1JlY3QoKS53aWR0aCA+IHRoaXMud2lkdGgpIHtcbiAgICAgICAgICAgICAgICBvYmoudG9wID0gTWF0aC5taW4ob2JqLnRvcCwgdGhpcy5oZWlnaHQgLSBvYmouZ2V0Qm91bmRpbmdSZWN0KCkuaGVpZ2h0ICtcbiAgICAgICAgICAgICAgICAgICAgb2JqLnRvcCAtIG9iai5nZXRCb3VuZGluZ1JlY3QoKS50b3ApO1xuICAgICAgICAgICAgICAgIG9iai5sZWZ0ID0gTWF0aC5taW4ob2JqLmxlZnQsIHRoaXMud2lkdGggLSBvYmouZ2V0Qm91bmRpbmdSZWN0KCkud2lkdGggK1xuICAgICAgICAgICAgICAgICAgICBvYmoubGVmdCAtIG9iai5nZXRCb3VuZGluZ1JlY3QoKS5sZWZ0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2V0U2NhbGUoc2NhbGVEZWZpbml0aW9uKSB7XG4gICAgICAgIGlmIChzY2FsZURlZmluaXRpb24uc2hhcGUpIHtcbiAgICAgICAgICAgIHRoaXMuc2NhbGUuc2hhcGUgPSBzY2FsZURlZmluaXRpb24uc2hhcGVcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2NhbGVEZWZpbml0aW9uLnZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLnNjYWxlLnZhbHVlID0gc2NhbGVEZWZpbml0aW9uLnZhbHVlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRTY2FsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NhbGVcbiAgICB9XG5cbiAgICBsb2NrU2NhbGUoKSB7XG4gICAgICAgIHRoaXMuc2NhbGUuc2hhcGUuaGFzQ29udHJvbHMgPSBmYWxzZVxuICAgIH1cblxuICAgIC8qXG4gICAgICogQHBhcmFtIGNob2ljZXM6IGEgbGlzdCBvZiAobGFiZWwsIGNvbG9yKVxuICAgICAqICBleGFtcGxlOiBbXG4gICAgICogICAgICB7bGFiZWw6ICdsYWJlbDEnLCBjb2xvcjogJ2JsdWUnfSxcbiAgICAgKiAgICAgIHtsYWJlbDogJ2xhYmVsMicsIGNvbG9yOiAncmdiYSgyNTUsMCwwLDAuNSknfVxuICAgICAqICAgXVxuICAgICAqIEByZXR1cm4gYSBET00gc2VsZWN0IG9iamVjdCB3aXRoIGNvcnJlc3BvbmRpbmcgb3B0aW9uc1xuICAgICAqL1xuICAgIGxpc3RUb1NlbGVjdERPTShjaG9pY2VzKSB7XG4gICAgICAgIGNvbnN0IGNhbnZhc2hvbGRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuZG9tRWxlbWVuZElkKVxuXG4gICAgICAgIC8vIENyZWF0ZSBhbmQgYXBwZW5kIHNlbGVjdCBsaXN0XG4gICAgICAgIGNvbnN0IHNlbGVjdExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKVxuXG4gICAgICAgIHNlbGVjdExpc3QuaWQgPSAnZmFicmljYXNoYXBlU2hhcGVDaG9pY2VzJ1xuICAgICAgICBjYW52YXNob2xkZXIucGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZChzZWxlY3RMaXN0KVxuXG4gICAgICAgIC8vIENyZWF0ZSBhbmQgYXBwZW5kIHRoZSBvcHRpb25zXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hvaWNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcblxuICAgICAgICAgICAgb3B0aW9uLnZhbHVlID0gY2hvaWNlc1tpXS5sYWJlbFxuICAgICAgICAgICAgb3B0aW9uLnRleHQgPSBjaG9pY2VzW2ldLmxhYmVsXG4gICAgICAgICAgICBvcHRpb24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY2hvaWNlc1tpXS5jb2xvclxuICAgICAgICAgICAgc2VsZWN0TGlzdC5hcHBlbmRDaGlsZChvcHRpb24pXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNlbGVjdExpc3RcbiAgICB9XG5cbiAgICBzZXRTaGFwZUNob2ljZXMoY2hvaWNlcykge1xuICAgICAgICBjb25zdCBzZWxlY3RPYmplY3QgPSB0aGlzLmxpc3RUb1NlbGVjdERPTShjaG9pY2VzKVxuXG4gICAgICAgIHRoaXMuY3JlYXRlUmVmZXJlbmNlTGluZShzZWxlY3RPYmplY3QpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIGxpbmUgdXNlciBjYW4gY2xpY2sgb24gdG8gZHVwbGljYXRlIGl0IGFuZCB1c2UgdGhlIGR1cGxpY2F0ZSBpbnRvIHRoZSBzY2VuZS5cbiAgICAgKi9cbiAgICBjcmVhdGVSZWZlcmVuY2VMaW5lKHNlbGVjdE9iamVjdCkge1xuICAgICAgICBjb25zdCByZWZlcmVuY2VMaW5lID0gbmV3IGZhYnJpYy5SZWN0KHtcbiAgICAgICAgICAgIHRvcDogNSwgbGVmdDogNSwgd2lkdGg6IDgwLCBoZWlnaHQ6IDE3LFxuICAgICAgICAgICAgZmlsbDogc2VsZWN0T2JqZWN0Lm9wdGlvbnNbc2VsZWN0T2JqZWN0LnNlbGVjdGVkSW5kZXhdLnN0eWxlLmJhY2tncm91bmRDb2xvclxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuYWRkKHJlZmVyZW5jZUxpbmUpXG4gICAgICAgIHRoaXMuaXRlbSh0aGlzLnNpemUoKSAtIDEpLmhhc0NvbnRyb2xzID0gZmFsc2VcbiAgICAgICAgdGhpcy5yZXF1ZXN0UmVuZGVyQWxsKClcblxuICAgICAgICBjb25zdCBmaWxsUmVmZXJlbmNlTGluZSA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXNcbiAgICAgICAgICAgICAgICAuaXRlbSh0aGlzLnNpemUoKSAtIDEpXG4gICAgICAgICAgICAgICAgLnNldCgnZmlsbCcsIHNlbGVjdE9iamVjdC5vcHRpb25zW3NlbGVjdE9iamVjdC5zZWxlY3RlZEluZGV4XS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IpXG4gICAgICAgICAgICB0aGlzLnJlbmRlckFsbCgpXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBkdXBsaWNhdGVSZWZlcmVuY2VMaW5lID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVSZWZlcmVuY2VMaW5lKHNlbGVjdE9iamVjdClcbiAgICAgICAgICAgIHJlZmVyZW5jZUxpbmUuaGFzQ29udHJvbHMgPSB0cnVlXG4gICAgICAgICAgICBDb25zdGFudHMuUkVDVF9ESVNBQkxFRF9DT05UUk9MUy5mb3JFYWNoKChjb250cm9sKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVmZXJlbmNlTGluZS5zZXRDb250cm9sVmlzaWJsZShjb250cm9sLCBmYWxzZSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICByZWZlcmVuY2VMaW5lLm9uKCdtb3VzZWRvd24nLCAoKSA9PiB7XG4gICAgICAgICAgICBkdXBsaWNhdGVSZWZlcmVuY2VMaW5lKClcbiAgICAgICAgICAgIHJlZmVyZW5jZUxpbmUub2ZmKCdtb3VzZWRvd24nKVxuICAgICAgICB9KVxuXG4gICAgICAgIHNlbGVjdE9iamVjdC5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmaWxsUmVmZXJlbmNlTGluZSlcbiAgICAgICAgc2VsZWN0T2JqZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZpbGxSZWZlcmVuY2VMaW5lKVxuICAgIH1cblxuICAgIGNyZWF0ZVNjYWxlZExpbmUob3B0aW9ucykge1xuICAgICAgICBjb25zdCBzY2FsZSA9ICh0aGlzLnNjYWxlLnNoYXBlLndpZHRoICogdGhpcy5zY2FsZS5zaGFwZS5zY2FsZVgpIC8gdGhpcy5zY2FsZS52YWx1ZVxuXG4gICAgICAgIG9wdGlvbnMudG9wID0gb3B0aW9ucy50b3AgKiBzY2FsZVxuICAgICAgICBvcHRpb25zLmxlZnQgPSBvcHRpb25zLmxlZnQgKiBzY2FsZVxuICAgICAgICBvcHRpb25zLndpZHRoID0gb3B0aW9ucy53aWR0aCAqIHNjYWxlXG4gICAgICAgIG9wdGlvbnMuaGVpZ2h0ID0gb3B0aW9ucy5zdHJva2UgKiBzY2FsZVxuXG4gICAgICAgIHJldHVybiBuZXcgTGluZShvcHRpb25zKVxuICAgIH1cblxufVxuIiwiLy8gY29udHJvbHM6ICd0bCcsICd0cicsICdicicsICdibCcsICdtbCcsICdtdCcsICdtcicsICdtYicsICdtdHInXG5leHBvcnQgY29uc3QgQ29uc3RhbnRzID0ge1xuICAgIFJFQ1RfRElTQUJMRURfQ09OVFJPTFM6IFsgJ3RsJywgJ3RyJywgJ2JsJywgJ2JyJywgJ210JywgJ21iJyBdXG59XG4iLCJpbXBvcnQge0Fycm93bGluZX0gZnJvbSAnLi9hcnJvd2xpbmUuanMnO1xuaW1wb3J0IHtDYW52YXN9IGZyb20gJy4vY2FudmFzLmpzJztcbmltcG9ydCB7TGluZX0gZnJvbSAnLi9saW5lLmpzJztcbmltcG9ydCB7Q29uc3RhbnRzfSBmcm9tICcuL2NvbnN0YW50cy5qcyc7XG5leHBvcnQge0Fycm93bGluZSwgQ2FudmFzLCBMaW5lLCBDb25zdGFudHN9O1xuIiwiaW1wb3J0IHtmYWJyaWN9IGZyb20gJ2ZhYnJpYydcbmltcG9ydCB7Q29uc3RhbnRzfSBmcm9tICcuL2NvbnN0YW50cydcblxuZXhwb3J0IGNvbnN0IExpbmUgPSBmYWJyaWMudXRpbC5jcmVhdGVDbGFzcyhmYWJyaWMuUmVjdCwge1xuXG4gICAgdHlwZTogJ2xpbmUnLFxuICAgIGNvbXBvbmVudHM6IFtdLFxuICAgIGhhc0NvbnRyb2xzOiB0cnVlLFxuXG4gICAgaW5pdGlhbGl6ZTogZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgb3B0aW9ucyB8fCAob3B0aW9ucyA9IHsgfSk7XG4gICAgICAgIHRoaXMuY2FsbFN1cGVyKCdpbml0aWFsaXplJywgb3B0aW9ucyk7XG5cbiAgICAgICAgdGhpcy5ib2R5RmlsbCA9IG9wdGlvbnMuZmlsbCB8fCAnJ1xuICAgICAgICBpZiAob3B0aW9ucy5oYXNPd25Qcm9wZXJ0eSgnYm9keUZpbGwnKSkge1xuICAgICAgICAgICAgdGhpcy5ib2R5RmlsbCA9IG9wdGlvbnMuYm9keUZpbGxcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmJvZHlUZXh0ID0gb3B0aW9ucy50ZXh0IHx8ICcnXG4gICAgICAgIENvbnN0YW50cy5SRUNUX0RJU0FCTEVEX0NPTlRST0xTLmZvckVhY2goKGNvbnRyb2wpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0Q29udHJvbFZpc2libGUoY29udHJvbCwgZmFsc2UpXG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuc2V0KCdmaWxsJywgJ3RyYW5zcGFyZW50JylcblxuICAgICAgICB0aGlzLm9uKFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICdhZGRlZCc6IHRoaXMuX2luaXRDb21wb25lbnRzLFxuICAgICAgICAgICAgICAgICdtb2RpZmllZCc6IHRoaXMuX3NldENvbXBvbmVudHNQb3NpdGlvbixcbiAgICAgICAgICAgICAgICAnc2NhbGluZyc6IHRoaXMuX3NldENvbXBvbmVudHNQb3NpdGlvbixcbiAgICAgICAgICAgICAgICAnbW92aW5nJzogdGhpcy5fc2V0Q29tcG9uZW50c1Bvc2l0aW9uLFxuICAgICAgICAgICAgICAgICdyb3RhdGluZyc6IHRoaXMuX3NldENvbXBvbmVudHNQb3NpdGlvblxuICAgICAgICAgICAgfVxuICAgICAgICApXG4gICAgfSxcblxuICAgIF9pbml0Q29tcG9uZW50czogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnRleHQgPSBuZXcgZmFicmljLlRleHQoJycsIHt2aXNpYmxlOiBmYWxzZX0pXG4gICAgICAgIHRoaXMuYm9keSA9IG5ldyBmYWJyaWMuUmVjdCh7XG4gICAgICAgICAgICB3aWR0aDogdGhpcy53aWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogdGhpcy5oZWlnaHQsXG4gICAgICAgICAgICB0b3A6IHRoaXMudG9wLFxuICAgICAgICAgICAgbGVmdDogdGhpcy5sZWZ0LFxuICAgICAgICAgICAgZmlsbDogdGhpcy5ib2R5RmlsbFxuICAgICAgICB9KVxuICAgICAgICB0aGlzLmNvbXBvbmVudHMgPSBbdGhpcy50ZXh0LCB0aGlzLmJvZHldXG5cbiAgICAgICAgdGhpcy5fc2V0dXBDb21wb25lbnRzKClcbiAgICAgICAgdGhpcy5zZXRUZXh0KHRoaXMuYm9keVRleHQpXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIF9zZXR1cENvbXBvbmVudHM6IGFkZCB0aGUgY29tcG9uZW50IHRvIHRoZSBjYW52YXMgYW5kIHNldCBzb21lIG9wdGlvbnNcbiAgICAgKiB0byBhdm9pZCB0aGVtIGZyb20gYmVpbmcgZXhwb3J0ZWQvc2VsZWN0ZWRcbiAgICAgKi9cbiAgICBfc2V0dXBDb21wb25lbnRzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuY29tcG9uZW50cy5mb3JFYWNoKChjb21wb25lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbXBvbmVudC5zZXQoe1xuICAgICAgICAgICAgICAgIGV4Y2x1ZGVGcm9tRXhwb3J0OiB0cnVlLFxuICAgICAgICAgICAgICAgIGhhc0NvbnRyb2xzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzZWxlY3RhYmxlOiBmYWxzZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLmFkZChjb21wb25lbnQpXG4gICAgICAgICAgICBjb21wb25lbnQuc2VuZEJhY2t3YXJkcygpXG4gICAgICAgIH0pXG4gICAgfSxcblxuICAgIF9zZXRDb21wb25lbnRzUG9zaXRpb246IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5oZWlnaHQgKiB0aGlzLnNjYWxlWSxcbiAgICAgICAgICAgIHdpZHRoID0gdGhpcy53aWR0aCAqIHRoaXMuc2NhbGVYLFxuICAgICAgICAgICAgYm91bmRpbmdSZWN0ID0gdGhpcy5nZXRCb3VuZGluZ1JlY3QoKVxuXG4gICAgICAgIGlmICh0aGlzLnRleHQpIHtcbiAgICAgICAgICAgIHRoaXMudGV4dC5zZXQoe1xuICAgICAgICAgICAgICAgIHRvcDogYm91bmRpbmdSZWN0LnRvcCArIDAuNSAqIChib3VuZGluZ1JlY3QuaGVpZ2h0IC0gdGhpcy50ZXh0LmhlaWdodCksXG4gICAgICAgICAgICAgICAgbGVmdDogYm91bmRpbmdSZWN0LmxlZnQgKyAwLjUgKiAoYm91bmRpbmdSZWN0LndpZHRoIC0gdGhpcy50ZXh0LndpZHRoKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYm9keS5zZXQoe1xuICAgICAgICAgICAgdG9wOiB0aGlzLnRvcCxcbiAgICAgICAgICAgIGxlZnQ6IHRoaXMubGVmdCxcbiAgICAgICAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAgICAgICAgYW5nbGU6IHRoaXMuYW5nbGVcbiAgICAgICAgfSlcblxuICAgIH0sXG5cbiAgICBnZXRDb21wb25lbnRzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbXBvbmVudHNcbiAgICB9LFxuXG4gICAgc2V0VGV4dDogZnVuY3Rpb24gKHRleHQpIHtcbiAgICAgICAgaWYgKHRleHQuc2xpY2UoLTEpICE9PSAnbScpIHtcbiAgICAgICAgICAgIHRleHQgKz0gJ20nXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50ZXh0LnNldCh7XG4gICAgICAgICAgICB0ZXh0OiB0ZXh0XG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuX3NldENvbXBvbmVudHNQb3NpdGlvbigpXG4gICAgfSxcblxuICAgIHRvT2JqZWN0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBmYWJyaWMudXRpbC5vYmplY3QuZXh0ZW5kKHRoaXMuY2FsbFN1cGVyKCd0b09iamVjdCcpLCB7XG4gICAgICAgICAgICBib2R5RmlsbDogdGhpcy5nZXQoJ2JvZHlGaWxsJyksXG4gICAgICAgICAgICBib2R5VGV4dDogdGhpcy5nZXQoJ2JvZHlUZXh0JylcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIF9yZW5kZXI6IGZ1bmN0aW9uIChjdHgpIHtcbiAgICAgICAgdGhpcy5jYWxsU3VwZXIoJ19yZW5kZXInLCBjdHgpO1xuICAgIH1cblxufSlcblxuZmFicmljLkxpbmUgPSBMaW5lXG5cbmZhYnJpYy5MaW5lLmZyb21PYmplY3QgPSBmdW5jdGlvbiAob2JqZWN0LCBjYWxsYmFjaykge1xuICAgIHJldHVybiBmYWJyaWMuT2JqZWN0Ll9mcm9tT2JqZWN0KCdMaW5lJywgb2JqZWN0LCBjYWxsYmFjayk7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ZhYnJpY19fOyJdLCJzb3VyY2VSb290IjoiIn0=