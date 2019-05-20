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
    this.text = new _fabric.fabric.Text(this.bodyText, {
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
    _this.customBackgroundImage = null; // this._lockObjectsToBoundaries()

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
        _this2.customBackgroundImage = new _fabric.fabric.Image(img);

        _this2.customBackgroundImage.scale(_this2.height / _this2.customBackgroundImage.height);

        _this2.add(_this2.customBackgroundImage);

        _this2.renderAll();
      };

      reader.readAsDataURL(imageFile);
    }
  }, {
    key: "lockImage",
    value: function lockImage() {
      this.customBackgroundImage.sendToBack();
      this.customBackgroundImage.hasControls = false;
      this.customBackgroundImage.selectable = false;
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
        this.scale.shape.hasControls = false;
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
  }, {
    key: "clearScale",
    value: function clearScale() {
      if (this.scale.shape) {
        console.log('clearScale');
        console.log(this.scale.shape);
        this.clear();
        this.remove(this.scale.shape);
        this.remove(this.scale.shape);
        this.renderAll();
      }
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

    if (options.hasOwnProperty('bodyText')) {
      this.bodyText = options.bodyText;
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
    this.bodyText = text;

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
  },
  clear: function clear() {
    this.canvas.remove(this.components);
  },
  toObject: function toObject() {
    return _fabric.fabric.util.object.extend(this.callSuper('toObject'), {
      bodyFill: this.get('bodyFill'),
      bodyText: this.get('bodyText')
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mYWJyaWNhc2hhcGUvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2ZhYnJpY2FzaGFwZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9mYWJyaWNhc2hhcGUvLi9zcmMvYXJyb3dsaW5lLmpzIiwid2VicGFjazovL2ZhYnJpY2FzaGFwZS8uL3NyYy9jYW52YXMuanMiLCJ3ZWJwYWNrOi8vZmFicmljYXNoYXBlLy4vc3JjL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9mYWJyaWNhc2hhcGUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZmFicmljYXNoYXBlLy4vc3JjL2xpbmUuanMiLCJ3ZWJwYWNrOi8vZmFicmljYXNoYXBlL2V4dGVybmFsIFwiZmFicmljXCIiXSwibmFtZXMiOlsiQXJyb3dsaW5lIiwidXRpbCIsImNyZWF0ZUNsYXNzIiwidHlwZSIsIl9pbml0Q29tcG9uZW50cyIsInRleHQiLCJUZXh0IiwiYm9keVRleHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib2R5IiwiUmVjdCIsImZpbGwiLCJib2R5RmlsbCIsImxlZnRUcmlhbmdsZSIsIlRyaWFuZ2xlIiwicmlnaHRUcmlhbmdsZSIsIl9zZXRDb21wb25lbnRzUG9zaXRpb24iLCJjb21wb25lbnRzIiwiX3NldHVwQ29tcG9uZW50cyIsInNldFRleHQiLCJkZWdyZWVzVG9SYWRpYW5zUmF0aW8iLCJNYXRoIiwiUEkiLCJoZWlnaHQiLCJzY2FsZVkiLCJ3aWR0aCIsInNjYWxlWCIsImNvc1RldGEiLCJjb3MiLCJhbmdsZSIsInNpblRldGEiLCJzaW4iLCJib3VuZGluZ1JlY3QiLCJnZXRCb3VuZGluZ1JlY3QiLCJzZXQiLCJ0b3AiLCJsZWZ0IiwiZm9udFNpemUiLCJmcm9tT2JqZWN0Iiwib2JqZWN0IiwiY2FsbGJhY2siLCJPYmplY3QiLCJfZnJvbU9iamVjdCIsIkNhbnZhcyIsImRvbUVsZW1lbmRJZCIsInNjYWxlIiwidmFsdWUiLCJzaGFwZSIsImN1c3RvbUJhY2tncm91bmRJbWFnZSIsImltYWdlRmlsZSIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJpbWciLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzcmMiLCJyZXN1bHQiLCJJbWFnZSIsImFkZCIsInJlbmRlckFsbCIsInJlYWRBc0RhdGFVUkwiLCJzZW5kVG9CYWNrIiwiaGFzQ29udHJvbHMiLCJzZWxlY3RhYmxlIiwiZGlzY2FyZEFjdGl2ZU9iamVjdCIsIm9uIiwiZSIsIm9iaiIsInRhcmdldCIsImN1cnJlbnRIZWlnaHQiLCJjdXJyZW50V2lkdGgiLCJzZXRDb29yZHMiLCJtYXgiLCJtaW4iLCJzY2FsZURlZmluaXRpb24iLCJjb25zb2xlIiwibG9nIiwiY2xlYXIiLCJyZW1vdmUiLCJjaG9pY2VzIiwiY2FudmFzaG9sZGVyIiwiZ2V0RWxlbWVudEJ5SWQiLCJzZWxlY3RMaXN0IiwiaWQiLCJwYXJlbnRFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJpIiwibGVuZ3RoIiwib3B0aW9uIiwibGFiZWwiLCJzdHlsZSIsImNvbG9yIiwic2VsZWN0T2JqZWN0IiwibGlzdFRvU2VsZWN0RE9NIiwiY3JlYXRlUmVmZXJlbmNlTGluZSIsInJlZmVyZW5jZUxpbmUiLCJvcHRpb25zIiwic2VsZWN0ZWRJbmRleCIsIml0ZW0iLCJzaXplIiwicmVxdWVzdFJlbmRlckFsbCIsImZpbGxSZWZlcmVuY2VMaW5lIiwiZHVwbGljYXRlUmVmZXJlbmNlTGluZSIsIlJFQ1RfRElTQUJMRURfQ09OVFJPTFMiLCJmb3JFYWNoIiwiY29udHJvbCIsInNldENvbnRyb2xWaXNpYmxlIiwib2ZmIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdHJva2UiLCJDb25zdGFudHMiLCJMaW5lIiwiaW5pdGlhbGl6ZSIsImNhbGxTdXBlciIsImhhc093blByb3BlcnR5IiwidmlzaWJsZSIsImNvbXBvbmVudCIsImV4Y2x1ZGVGcm9tRXhwb3J0IiwiY2FudmFzIiwic2VuZEJhY2t3YXJkcyIsImdldENvbXBvbmVudHMiLCJzbGljZSIsIl9yZW5kZXIiLCJjdHgiLCJ0b09iamVjdCIsImV4dGVuZCIsImdldCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBOztBQUNBOztBQUVBOzs7O0FBSU8sSUFBTUEsU0FBUyxHQUFHLGVBQU9DLElBQVAsQ0FBWUMsV0FBWixhQUE4QjtBQUVuREMsTUFBSSxFQUFFLFdBRjZDO0FBSW5EQyxpQkFBZSxFQUFFLDJCQUFZO0FBQ3pCLFNBQUtDLElBQUwsR0FBWSxJQUFJLGVBQU9DLElBQVgsQ0FBZ0IsS0FBS0MsUUFBckIsRUFBK0I7QUFBQ0MscUJBQWUsRUFBRTtBQUFsQixLQUEvQixDQUFaO0FBQ0EsU0FBS0MsSUFBTCxHQUFZLElBQUksZUFBT0Ms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QUExQjtBQUNILEdBeEdvRDtBQTBHckQvQyxPQUFLLEVBQUUsaUJBQVk7QUFDZixTQUFLMEMsTUFBTCxDQUFZekMsTUFBWixDQUFtQixLQUFLOUQsVUFBeEI7QUFDSCxHQTVHb0Q7QUE4R3JENkcsVUFBUSxFQUFFLG9CQUFZO0FBQ2xCLFdBQU8sZUFBTzdILElBQVAsQ0FBWXNDLE1BQVosQ0FBbUJ3RixNQUFuQixDQUEwQixLQUFLWixTQUFMLENBQWUsVUFBZixDQUExQixFQUFzRDtBQUN6RHZHLGNBQVEsRUFBRSxLQUFLb0gsR0FBTCxDQUFTLFVBQVQsQ0FEK0M7QUFFekR6SCxjQUFRLEVBQUUsS0FBS3lILEdBQUwsQ0FBUyxVQUFUO0FBRitDLEtBQXRELENBQVA7QUFJSDtBQW5Ib0QsQ0FBckMsQ0FBYjs7O0FBdUhQLGVBQU9mLElBQVAsR0FBY0EsSUFBZDs7QUFFQSxlQUFPQSxJQUFQLENBQVkzRSxVQUFaLEdBQXlCLFVBQVVDLE1BQVYsRUFBa0JDLFFBQWxCLEVBQTRCO0FBQ2pELFNBQU8sZUFBT0MsTUFBUCxDQUFjQyxXQUFkLENBQTBCLE1BQTFCLEVBQWtDSCxNQUFsQyxFQUEwQ0MsUUFBMUMsQ0FBUDtBQUNILENBRkQsQzs7Ozs7Ozs7Ozs7QUM1SEEsb0QiLCJmaWxlIjoiZmFicmljYXNoYXBlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiZmFicmljXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiZmFicmljYXNoYXBlXCIsIFtcImZhYnJpY1wiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJmYWJyaWNhc2hhcGVcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJmYWJyaWNcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImZhYnJpY2FzaGFwZVwiXSA9IGZhY3Rvcnkocm9vdFtcImZhYnJpY1wiXSk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9mYWJyaWNfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHtmYWJyaWN9IGZyb20gJ2ZhYnJpYydcbmltcG9ydCB7TGluZX0gZnJvbSAnLi9saW5lJ1xuXG4vKipcbiAqIEFuIEFycm93bGluZSBpcyBhIGdyb3VwIHRoYXQgbG9va3MgbGlrZSBhIGRvdWJsZSBhcnJvd2VkIGxpbmU6XG4gKiAgICAgICA8LS0tLS0tLT5cbiAqL1xuZXhwb3J0IGNvbnN0IEFycm93bGluZSA9IGZhYnJpYy51dGlsLmNyZWF0ZUNsYXNzKExpbmUsIHtcblxuICAgIHR5cGU6ICdhcnJvd2xpbmUnLFxuXG4gICAgX2luaXRDb21wb25lbnRzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMudGV4dCA9IG5ldyBmYWJyaWMuVGV4dCh0aGlzLmJvZHlUZXh0LCB7YmFja2dyb3VuZENvbG9yOiAnd2hpdGUnfSlcbiAgICAgICAgdGhpcy5ib2R5ID0gbmV3IGZhYnJpYy5SZWN0KHtmaWxsOiB0aGlzLmJvZHlGaWxsfSlcbiAgICAgICAgdGhpcy5sZWZ0VHJpYW5nbGUgPSBuZXcgZmFicmljLlRyaWFuZ2xlKHtmaWxsOiB0aGlzLmJvZHlGaWxsfSlcbiAgICAgICAgdGhpcy5yaWdodFRyaWFuZ2xlID0gbmV3IGZhYnJpYy5UcmlhbmdsZSh7ZmlsbDogdGhpcy5ib2R5RmlsbH0pXG5cbiAgICAgICAgdGhpcy5fc2V0Q29tcG9uZW50c1Bvc2l0aW9uKClcblxuICAgICAgICB0aGlzLmNvbXBvbmVudHMgPSBbdGhpcy5ib2R5LCB0aGlzLmxlZnRUcmlhbmdsZSwgdGhpcy5yaWdodFRyaWFuZ2xlLCB0aGlzLnRleHRdXG5cbiAgICAgICAgdGhpcy5fc2V0dXBDb21wb25lbnRzKClcbiAgICAgICAgdGhpcy5zZXRUZXh0KHRoaXMuYm9keVRleHQpXG4gICAgfSxcblxuICAgIF9zZXRDb21wb25lbnRzUG9zaXRpb246IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgZGVncmVlc1RvUmFkaWFuc1JhdGlvID0gTWF0aC5QSSAvIDE4MCxcbiAgICAgICAgICAgIGhlaWdodCA9IHRoaXMuaGVpZ2h0ICogdGhpcy5zY2FsZVksXG4gICAgICAgICAgICB3aWR0aCA9IHRoaXMud2lkdGggKiB0aGlzLnNjYWxlWCxcbiAgICAgICAgICAgIGNvc1RldGEgPSBNYXRoLmNvcyh0aGlzLmFuZ2xlICogZGVncmVlc1RvUmFkaWFuc1JhdGlvKSxcbiAgICAgICAgICAgIHNpblRldGEgPSBNYXRoLnNpbih0aGlzLmFuZ2xlICogZGVncmVlc1RvUmFkaWFuc1JhdGlvKSxcbiAgICAgICAgICAgIGJvdW5kaW5nUmVjdCA9IHRoaXMuZ2V0Qm91bmRpbmdSZWN0KClcblxuICAgICAgICB0aGlzLnRleHQuc2V0KHtcbiAgICAgICAgICAgIHRvcDogYm91bmRpbmdSZWN0LnRvcCArIDAuNSAqIChib3VuZGluZ1JlY3QuaGVpZ2h0IC0gdGhpcy50ZXh0LmhlaWdodCksXG4gICAgICAgICAgICBsZWZ0OiBib3VuZGluZ1JlY3QubGVmdCArIDAuNSAqIChib3VuZGluZ1JlY3Qud2lkdGggLSB0aGlzLnRleHQud2lkdGgpLFxuICAgICAgICAgICAgZm9udFNpemU6IDE4XG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5ib2R5LnNldCh7XG4gICAgICAgICAgICB0b3A6IHRoaXMudG9wICsgaGVpZ2h0ICogc2luVGV0YSArIChoZWlnaHQgLyA0KSAqIGNvc1RldGEsXG4gICAgICAgICAgICBsZWZ0OiB0aGlzLmxlZnQgKyBoZWlnaHQgKiBjb3NUZXRhIC0gKGhlaWdodCAvIDQpICogc2luVGV0YSxcbiAgICAgICAgICAgIHdpZHRoOiB3aWR0aCAtIDIgKiBoZWlnaHQsXG4gICAgICAgICAgICBoZWlnaHQ6IGhlaWdodCAvIDIsXG4gICAgICAgICAgICBhbmdsZTogdGhpcy5hbmdsZVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMubGVmdFRyaWFuZ2xlLnNldCh7XG4gICAgICAgICAgICB0b3A6IHRoaXMudG9wICsgaGVpZ2h0ICogY29zVGV0YSxcbiAgICAgICAgICAgIGxlZnQ6IHRoaXMubGVmdCAtIGhlaWdodCAqIHNpblRldGEsXG4gICAgICAgICAgICB3aWR0aDogaGVpZ2h0LFxuICAgICAgICAgICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgICAgICAgICBhbmdsZTogdGhpcy5hbmdsZSAtIDkwXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5yaWdodFRyaWFuZ2xlLnNldCh7XG4gICAgICAgICAgICB0b3A6IHRoaXMudG9wICsgd2lkdGggKiBzaW5UZXRhLFxuICAgICAgICAgICAgbGVmdDogdGhpcy5sZWZ0ICsgd2lkdGggKiBjb3NUZXRhLFxuICAgICAgICAgICAgd2lkdGg6IGhlaWdodCxcbiAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAgICAgICAgYW5nbGU6IHRoaXMuYW5nbGUgKyA5MFxuICAgICAgICB9KVxuICAgIH1cblxufSlcblxuZmFicmljLkFycm93bGluZSA9IEFycm93bGluZVxuXG5mYWJyaWMuQXJyb3dsaW5lLmZyb21PYmplY3QgPSBmdW5jdGlvbiAob2JqZWN0LCBjYWxsYmFjaykge1xuICAgIHJldHVybiBmYWJyaWMuT2JqZWN0Ll9mcm9tT2JqZWN0KCdBcnJvd2xpbmUnLCBvYmplY3QsIGNhbGxiYWNrKTtcbn07XG4iLCJpbXBvcnQge2ZhYnJpY30gZnJvbSAnZmFicmljJ1xuaW1wb3J0IHtDb25zdGFudHN9IGZyb20gJy4vY29uc3RhbnRzJ1xuaW1wb3J0IHtMaW5lfSBmcm9tICcuL2xpbmUnXG5cbmV4cG9ydCBjbGFzcyBDYW52YXMgZXh0ZW5kcyBmYWJyaWMuQ2FudmFzIHtcblxuICAgIGNvbnN0cnVjdG9yKGRvbUVsZW1lbmRJZCkge1xuICAgICAgICBzdXBlcihkb21FbGVtZW5kSWQpXG4gICAgICAgIHRoaXMuZG9tRWxlbWVuZElkID0gZG9tRWxlbWVuZElkXG4gICAgICAgIHRoaXMuc2NhbGUgPSB7dmFsdWU6IG51bGwsIHNoYXBlOiBudWxsfVxuICAgICAgICB0aGlzLmN1c3RvbUJhY2tncm91bmRJbWFnZSA9IG51bGxcbiAgICAgICAgLy8gdGhpcy5fbG9ja09iamVjdHNUb0JvdW5kYXJpZXMoKVxuICAgIH1cblxuICAgIGFkZEltYWdlKGltYWdlRmlsZSkge1xuICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpXG5cbiAgICAgICAgcmVhZGVyLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG5cbiAgICAgICAgICAgIGltZy5zcmMgPSByZWFkZXIucmVzdWx0XG5cbiAgICAgICAgICAgIHRoaXMuY3VzdG9tQmFja2dyb3VuZEltYWdlID0gbmV3IGZhYnJpYy5JbWFnZShpbWcpXG4gICAgICAgICAgICB0aGlzLmN1c3RvbUJhY2tncm91bmRJbWFnZS5zY2FsZSh0aGlzLmhlaWdodCAvIHRoaXMuY3VzdG9tQmFja2dyb3VuZEltYWdlLmhlaWdodClcbiAgICAgICAgICAgIHRoaXMuYWRkKHRoaXMuY3VzdG9tQmFja2dyb3VuZEltYWdlKVxuICAgICAgICAgICAgdGhpcy5yZW5kZXJBbGwoKVxuICAgICAgICB9O1xuXG4gICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGltYWdlRmlsZSk7XG4gICAgfVxuXG4gICAgbG9ja0ltYWdlKCkge1xuICAgICAgICB0aGlzLmN1c3RvbUJhY2tncm91bmRJbWFnZS5zZW5kVG9CYWNrKClcbiAgICAgICAgdGhpcy5jdXN0b21CYWNrZ3JvdW5kSW1hZ2UuaGFzQ29udHJvbHMgPSBmYWxzZVxuICAgICAgICB0aGlzLmN1c3RvbUJhY2tncm91bmRJbWFnZS5zZWxlY3RhYmxlID0gZmFsc2VcbiAgICAgICAgdGhpcy5kaXNjYXJkQWN0aXZlT2JqZWN0KCk7XG4gICAgICAgIHRoaXMucmVuZGVyQWxsKClcbiAgICB9XG5cbiAgICBfbG9ja09iamVjdHNUb0JvdW5kYXJpZXMoKSB7XG4gICAgICAgIHRoaXMub24oJ29iamVjdDptb3ZpbmcnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIG9iaiA9IGUudGFyZ2V0O1xuXG4gICAgICAgICAgICAvLyBpZiBvYmplY3QgaXMgdG9vIGJpZyBpZ25vcmVcbiAgICAgICAgICAgIGlmIChvYmouY3VycmVudEhlaWdodCA+IHRoaXMuaGVpZ2h0IHx8IG9iai5jdXJyZW50V2lkdGggPiB0aGlzLndpZHRoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb2JqLnNldENvb3JkcygpO1xuICAgICAgICAgICAgLy8gdG9wLWxlZnQgIGNvcm5lclxuICAgICAgICAgICAgaWYgKG9iai5nZXRCb3VuZGluZ1JlY3QoKS50b3AgPCAwIHx8IG9iai5nZXRCb3VuZGluZ1JlY3QoKS5sZWZ0IDwgMCkge1xuICAgICAgICAgICAgICAgIG9iai50b3AgPSBNYXRoLm1heChvYmoudG9wLCBvYmoudG9wIC0gb2JqLmdldEJvdW5kaW5nUmVjdCgpLnRvcCk7XG4gICAgICAgICAgICAgICAgb2JqLmxlZnQgPSBNYXRoLm1heChvYmoubGVmdCwgb2JqLmxlZnQgLSBvYmouZ2V0Qm91bmRpbmdSZWN0KCkubGVmdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBib3QtcmlnaHQgY29ybmVyXG4gICAgICAgICAgICBpZiAob2JqLmdldEJvdW5kaW5nUmVjdCgpLnRvcCArIG9iai5nZXRCb3VuZGluZ1JlY3QoKS5oZWlnaHQgPiB0aGlzLmhlaWdodCB8fFxuICAgICAgICAgICAgICAgICAgICBvYmouZ2V0Qm91bmRpbmdSZWN0KCkubGVmdCArIG9iai5nZXRCb3VuZGluZ1JlY3QoKS53aWR0aCA+IHRoaXMud2lkdGgpIHtcbiAgICAgICAgICAgICAgICBvYmoudG9wID0gTWF0aC5taW4ob2JqLnRvcCwgdGhpcy5oZWlnaHQgLSBvYmouZ2V0Qm91bmRpbmdSZWN0KCkuaGVpZ2h0ICtcbiAgICAgICAgICAgICAgICAgICAgb2JqLnRvcCAtIG9iai5nZXRCb3VuZGluZ1JlY3QoKS50b3ApO1xuICAgICAgICAgICAgICAgIG9iai5sZWZ0ID0gTWF0aC5taW4ob2JqLmxlZnQsIHRoaXMud2lkdGggLSBvYmouZ2V0Qm91bmRpbmdSZWN0KCkud2lkdGggK1xuICAgICAgICAgICAgICAgICAgICBvYmoubGVmdCAtIG9iai5nZXRCb3VuZGluZ1JlY3QoKS5sZWZ0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2V0U2NhbGUoc2NhbGVEZWZpbml0aW9uKSB7XG4gICAgICAgIGlmIChzY2FsZURlZmluaXRpb24uc2hhcGUpIHtcbiAgICAgICAgICAgIHRoaXMuc2NhbGUuc2hhcGUgPSBzY2FsZURlZmluaXRpb24uc2hhcGVcbiAgICAgICAgICAgIHRoaXMuc2NhbGUuc2hhcGUuaGFzQ29udHJvbHMgPSBmYWxzZVxuICAgICAgICB9XG4gICAgICAgIGlmIChzY2FsZURlZmluaXRpb24udmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuc2NhbGUudmFsdWUgPSBzY2FsZURlZmluaXRpb24udmFsdWVcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldFNjYWxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zY2FsZVxuICAgIH1cblxuICAgIGxvY2tTY2FsZSgpIHtcbiAgICAgICAgdGhpcy5zY2FsZS5zaGFwZS5oYXNDb250cm9scyA9IGZhbHNlXG4gICAgfVxuXG4gICAgY2xlYXJTY2FsZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuc2NhbGUuc2hhcGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjbGVhclNjYWxlJylcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc2NhbGUuc2hhcGUpXG4gICAgICAgICAgICB0aGlzLmNsZWFyKClcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlKHRoaXMuc2NhbGUuc2hhcGUpXG4gICAgICAgICAgICB0aGlzLnJlbW92ZSh0aGlzLnNjYWxlLnNoYXBlKVxuICAgICAgICAgICAgdGhpcy5yZW5kZXJBbGwoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBAcGFyYW0gY2hvaWNlczogYSBsaXN0IG9mIChsYWJlbCwgY29sb3IpXG4gICAgICogIGV4YW1wbGU6IFtcbiAgICAgKiAgICAgIHtsYWJlbDogJ2xhYmVsMScsIGNvbG9yOiAnYmx1ZSd9LFxuICAgICAqICAgICAge2xhYmVsOiAnbGFiZWwyJywgY29sb3I6ICdyZ2JhKDI1NSwwLDAsMC41KSd9XG4gICAgICogICBdXG4gICAgICogQHJldHVybiBhIERPTSBzZWxlY3Qgb2JqZWN0IHdpdGggY29ycmVzcG9uZGluZyBvcHRpb25zXG4gICAgICovXG4gICAgbGlzdFRvU2VsZWN0RE9NKGNob2ljZXMpIHtcbiAgICAgICAgY29uc3QgY2FudmFzaG9sZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5kb21FbGVtZW5kSWQpXG5cbiAgICAgICAgLy8gQ3JlYXRlIGFuZCBhcHBlbmQgc2VsZWN0IGxpc3RcbiAgICAgICAgY29uc3Qgc2VsZWN0TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpXG5cbiAgICAgICAgc2VsZWN0TGlzdC5pZCA9ICdmYWJyaWNhc2hhcGVTaGFwZUNob2ljZXMnXG4gICAgICAgIGNhbnZhc2hvbGRlci5wYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKHNlbGVjdExpc3QpXG5cbiAgICAgICAgLy8gQ3JlYXRlIGFuZCBhcHBlbmQgdGhlIG9wdGlvbnNcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaG9pY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuXG4gICAgICAgICAgICBvcHRpb24udmFsdWUgPSBjaG9pY2VzW2ldLmxhYmVsXG4gICAgICAgICAgICBvcHRpb24udGV4dCA9IGNob2ljZXNbaV0ubGFiZWxcbiAgICAgICAgICAgIG9wdGlvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjaG9pY2VzW2ldLmNvbG9yXG4gICAgICAgICAgICBzZWxlY3RMaXN0LmFwcGVuZENoaWxkKG9wdGlvbilcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2VsZWN0TGlzdFxuICAgIH1cblxuICAgIHNldFNoYXBlQ2hvaWNlcyhjaG9pY2VzKSB7XG4gICAgICAgIGNvbnN0IHNlbGVjdE9iamVjdCA9IHRoaXMubGlzdFRvU2VsZWN0RE9NKGNob2ljZXMpXG5cbiAgICAgICAgdGhpcy5jcmVhdGVSZWZlcmVuY2VMaW5lKHNlbGVjdE9iamVjdClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbGluZSB1c2VyIGNhbiBjbGljayBvbiB0byBkdXBsaWNhdGUgaXQgYW5kIHVzZSB0aGUgZHVwbGljYXRlIGludG8gdGhlIHNjZW5lLlxuICAgICAqL1xuICAgIGNyZWF0ZVJlZmVyZW5jZUxpbmUoc2VsZWN0T2JqZWN0KSB7XG4gICAgICAgIGNvbnN0IHJlZmVyZW5jZUxpbmUgPSBuZXcgZmFicmljLlJlY3Qoe1xuICAgICAgICAgICAgdG9wOiA1LCBsZWZ0OiA1LCB3aWR0aDogODAsIGhlaWdodDogMTcsXG4gICAgICAgICAgICBmaWxsOiBzZWxlY3RPYmplY3Qub3B0aW9uc1tzZWxlY3RPYmplY3Quc2VsZWN0ZWRJbmRleF0uc3R5bGUuYmFja2dyb3VuZENvbG9yXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5hZGQocmVmZXJlbmNlTGluZSlcbiAgICAgICAgdGhpcy5pdGVtKHRoaXMuc2l6ZSgpIC0gMSkuaGFzQ29udHJvbHMgPSBmYWxzZVxuICAgICAgICB0aGlzLnJlcXVlc3RSZW5kZXJBbGwoKVxuXG4gICAgICAgIGNvbnN0IGZpbGxSZWZlcmVuY2VMaW5lID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpc1xuICAgICAgICAgICAgICAgIC5pdGVtKHRoaXMuc2l6ZSgpIC0gMSlcbiAgICAgICAgICAgICAgICAuc2V0KCdmaWxsJywgc2VsZWN0T2JqZWN0Lm9wdGlvbnNbc2VsZWN0T2JqZWN0LnNlbGVjdGVkSW5kZXhdLnN0eWxlLmJhY2tncm91bmRDb2xvcilcbiAgICAgICAgICAgIHRoaXMucmVuZGVyQWxsKClcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGR1cGxpY2F0ZVJlZmVyZW5jZUxpbmUgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVJlZmVyZW5jZUxpbmUoc2VsZWN0T2JqZWN0KVxuICAgICAgICAgICAgcmVmZXJlbmNlTGluZS5oYXNDb250cm9scyA9IHRydWVcbiAgICAgICAgICAgIENvbnN0YW50cy5SRUNUX0RJU0FCTEVEX0NPTlRST0xTLmZvckVhY2goKGNvbnRyb2wpID0+IHtcbiAgICAgICAgICAgICAgICByZWZlcmVuY2VMaW5lLnNldENvbnRyb2xWaXNpYmxlKGNvbnRyb2wsIGZhbHNlKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJlZmVyZW5jZUxpbmUub24oJ21vdXNlZG93bicsICgpID0+IHtcbiAgICAgICAgICAgIGR1cGxpY2F0ZVJlZmVyZW5jZUxpbmUoKVxuICAgICAgICAgICAgcmVmZXJlbmNlTGluZS5vZmYoJ21vdXNlZG93bicpXG4gICAgICAgIH0pXG5cbiAgICAgICAgc2VsZWN0T2JqZWN0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZpbGxSZWZlcmVuY2VMaW5lKVxuICAgICAgICBzZWxlY3RPYmplY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZmlsbFJlZmVyZW5jZUxpbmUpXG4gICAgfVxuXG4gICAgY3JlYXRlU2NhbGVkTGluZShvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IHNjYWxlID0gKHRoaXMuc2NhbGUuc2hhcGUud2lkdGggKiB0aGlzLnNjYWxlLnNoYXBlLnNjYWxlWCkgLyB0aGlzLnNjYWxlLnZhbHVlXG5cbiAgICAgICAgb3B0aW9ucy50b3AgPSBvcHRpb25zLnRvcCAqIHNjYWxlXG4gICAgICAgIG9wdGlvbnMubGVmdCA9IG9wdGlvbnMubGVmdCAqIHNjYWxlXG4gICAgICAgIG9wdGlvbnMud2lkdGggPSBvcHRpb25zLndpZHRoICogc2NhbGVcbiAgICAgICAgb3B0aW9ucy5oZWlnaHQgPSBvcHRpb25zLnN0cm9rZSAqIHNjYWxlXG5cbiAgICAgICAgcmV0dXJuIG5ldyBMaW5lKG9wdGlvbnMpXG4gICAgfVxuXG59XG4iLCIvLyBjb250cm9sczogJ3RsJywgJ3RyJywgJ2JyJywgJ2JsJywgJ21sJywgJ210JywgJ21yJywgJ21iJywgJ210cidcbmV4cG9ydCBjb25zdCBDb25zdGFudHMgPSB7XG4gICAgUkVDVF9ESVNBQkxFRF9DT05UUk9MUzogWyAndGwnLCAndHInLCAnYmwnLCAnYnInLCAnbXQnLCAnbWInIF1cbn1cbiIsImltcG9ydCB7QXJyb3dsaW5lfSBmcm9tICcuL2Fycm93bGluZS5qcyc7XG5pbXBvcnQge0NhbnZhc30gZnJvbSAnLi9jYW52YXMuanMnO1xuaW1wb3J0IHtMaW5lfSBmcm9tICcuL2xpbmUuanMnO1xuaW1wb3J0IHtDb25zdGFudHN9IGZyb20gJy4vY29uc3RhbnRzLmpzJztcbmV4cG9ydCB7QXJyb3dsaW5lLCBDYW52YXMsIExpbmUsIENvbnN0YW50c307XG4iLCJpbXBvcnQge2ZhYnJpY30gZnJvbSAnZmFicmljJ1xuaW1wb3J0IHtDb25zdGFudHN9IGZyb20gJy4vY29uc3RhbnRzJ1xuXG5leHBvcnQgY29uc3QgTGluZSA9IGZhYnJpYy51dGlsLmNyZWF0ZUNsYXNzKGZhYnJpYy5SZWN0LCB7XG5cbiAgICB0eXBlOiAnbGluZScsXG4gICAgY29tcG9uZW50czogW10sXG4gICAgaGFzQ29udHJvbHM6IHRydWUsXG5cbiAgICBpbml0aWFsaXplOiBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICBvcHRpb25zIHx8IChvcHRpb25zID0geyB9KTtcbiAgICAgICAgdGhpcy5jYWxsU3VwZXIoJ2luaXRpYWxpemUnLCBvcHRpb25zKTtcblxuICAgICAgICB0aGlzLmJvZHlGaWxsID0gb3B0aW9ucy5maWxsIHx8ICcnXG4gICAgICAgIGlmIChvcHRpb25zLmhhc093blByb3BlcnR5KCdib2R5RmlsbCcpKSB7XG4gICAgICAgICAgICB0aGlzLmJvZHlGaWxsID0gb3B0aW9ucy5ib2R5RmlsbFxuICAgICAgICB9XG4gICAgICAgIHRoaXMuYm9keVRleHQgPSBvcHRpb25zLnRleHQgfHwgJydcbiAgICAgICAgaWYgKG9wdGlvbnMuaGFzT3duUHJvcGVydHkoJ2JvZHlUZXh0JykpIHtcbiAgICAgICAgICAgIHRoaXMuYm9keVRleHQgPSBvcHRpb25zLmJvZHlUZXh0XG4gICAgICAgIH1cbiAgICAgICAgQ29uc3RhbnRzLlJFQ1RfRElTQUJMRURfQ09OVFJPTFMuZm9yRWFjaCgoY29udHJvbCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRDb250cm9sVmlzaWJsZShjb250cm9sLCBmYWxzZSlcbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5zZXQoJ2ZpbGwnLCAndHJhbnNwYXJlbnQnKVxuXG4gICAgICAgIHRoaXMub24oXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgJ2FkZGVkJzogdGhpcy5faW5pdENvbXBvbmVudHMsXG4gICAgICAgICAgICAgICAgJ21vZGlmaWVkJzogdGhpcy5fc2V0Q29tcG9uZW50c1Bvc2l0aW9uLFxuICAgICAgICAgICAgICAgICdzY2FsaW5nJzogdGhpcy5fc2V0Q29tcG9uZW50c1Bvc2l0aW9uLFxuICAgICAgICAgICAgICAgICdtb3ZpbmcnOiB0aGlzLl9zZXRDb21wb25lbnRzUG9zaXRpb24sXG4gICAgICAgICAgICAgICAgJ3JvdGF0aW5nJzogdGhpcy5fc2V0Q29tcG9uZW50c1Bvc2l0aW9uXG4gICAgICAgICAgICB9XG4gICAgICAgIClcbiAgICB9LFxuXG4gICAgX2luaXRDb21wb25lbnRzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMudGV4dCA9IG5ldyBmYWJyaWMuVGV4dCgnJywge3Zpc2libGU6IGZhbHNlfSlcbiAgICAgICAgdGhpcy5ib2R5ID0gbmV3IGZhYnJpYy5SZWN0KHtcbiAgICAgICAgICAgIHdpZHRoOiB0aGlzLndpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLmhlaWdodCxcbiAgICAgICAgICAgIHRvcDogdGhpcy50b3AsXG4gICAgICAgICAgICBsZWZ0OiB0aGlzLmxlZnQsXG4gICAgICAgICAgICBmaWxsOiB0aGlzLmJvZHlGaWxsXG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuY29tcG9uZW50cyA9IFt0aGlzLnRleHQsIHRoaXMuYm9keV1cblxuICAgICAgICB0aGlzLl9zZXR1cENvbXBvbmVudHMoKVxuICAgICAgICB0aGlzLnNldFRleHQodGhpcy5ib2R5VGV4dClcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogX3NldHVwQ29tcG9uZW50czogYWRkIHRoZSBjb21wb25lbnQgdG8gdGhlIGNhbnZhcyBhbmQgc2V0IHNvbWUgb3B0aW9uc1xuICAgICAqIHRvIGF2b2lkIHRoZW0gZnJvbSBiZWluZyBleHBvcnRlZC9zZWxlY3RlZFxuICAgICAqL1xuICAgIF9zZXR1cENvbXBvbmVudHM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5jb21wb25lbnRzLmZvckVhY2goKGNvbXBvbmVudCkgPT4ge1xuICAgICAgICAgICAgY29tcG9uZW50LnNldCh7XG4gICAgICAgICAgICAgICAgZXhjbHVkZUZyb21FeHBvcnQ6IHRydWUsXG4gICAgICAgICAgICAgICAgaGFzQ29udHJvbHM6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNlbGVjdGFibGU6IGZhbHNlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgdGhpcy5jYW52YXMuYWRkKGNvbXBvbmVudClcbiAgICAgICAgICAgIGNvbXBvbmVudC5zZW5kQmFja3dhcmRzKClcbiAgICAgICAgfSlcbiAgICB9LFxuXG4gICAgX3NldENvbXBvbmVudHNQb3NpdGlvbjogZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmhlaWdodCAqIHRoaXMuc2NhbGVZLFxuICAgICAgICAgICAgd2lkdGggPSB0aGlzLndpZHRoICogdGhpcy5zY2FsZVgsXG4gICAgICAgICAgICBib3VuZGluZ1JlY3QgPSB0aGlzLmdldEJvdW5kaW5nUmVjdCgpXG5cbiAgICAgICAgaWYgKHRoaXMudGV4dCkge1xuICAgICAgICAgICAgdGhpcy50ZXh0LnNldCh7XG4gICAgICAgICAgICAgICAgdG9wOiBib3VuZGluZ1JlY3QudG9wICsgMC41ICogKGJvdW5kaW5nUmVjdC5oZWlnaHQgLSB0aGlzLnRleHQuaGVpZ2h0KSxcbiAgICAgICAgICAgICAgICBsZWZ0OiBib3VuZGluZ1JlY3QubGVmdCArIDAuNSAqIChib3VuZGluZ1JlY3Qud2lkdGggLSB0aGlzLnRleHQud2lkdGgpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5ib2R5LnNldCh7XG4gICAgICAgICAgICB0b3A6IHRoaXMudG9wLFxuICAgICAgICAgICAgbGVmdDogdGhpcy5sZWZ0LFxuICAgICAgICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgICAgICAgICBhbmdsZTogdGhpcy5hbmdsZVxuICAgICAgICB9KVxuXG4gICAgfSxcblxuICAgIGdldENvbXBvbmVudHM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcG9uZW50c1xuICAgIH0sXG5cbiAgICBzZXRUZXh0OiBmdW5jdGlvbiAodGV4dCkge1xuICAgICAgICB0aGlzLmJvZHlUZXh0ID0gdGV4dFxuICAgICAgICBpZiAodGV4dC5zbGljZSgtMSkgIT09ICdtJykge1xuICAgICAgICAgICAgdGV4dCArPSAnbSdcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRleHQuc2V0KHtcbiAgICAgICAgICAgIHRleHQ6IHRleHRcbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5fc2V0Q29tcG9uZW50c1Bvc2l0aW9uKClcbiAgICB9LFxuXG4gICAgX3JlbmRlcjogZnVuY3Rpb24gKGN0eCkge1xuICAgICAgICB0aGlzLmNhbGxTdXBlcignX3JlbmRlcicsIGN0eCk7XG4gICAgfSxcblxuICAgIGNsZWFyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuY2FudmFzLnJlbW92ZSh0aGlzLmNvbXBvbmVudHMpXG4gICAgfSxcblxuICAgIHRvT2JqZWN0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBmYWJyaWMudXRpbC5vYmplY3QuZXh0ZW5kKHRoaXMuY2FsbFN1cGVyKCd0b09iamVjdCcpLCB7XG4gICAgICAgICAgICBib2R5RmlsbDogdGhpcy5nZXQoJ2JvZHlGaWxsJyksXG4gICAgICAgICAgICBib2R5VGV4dDogdGhpcy5nZXQoJ2JvZHlUZXh0JylcbiAgICAgICAgfSk7XG4gICAgfVxuXG59KVxuXG5mYWJyaWMuTGluZSA9IExpbmVcblxuZmFicmljLkxpbmUuZnJvbU9iamVjdCA9IGZ1bmN0aW9uIChvYmplY3QsIGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIGZhYnJpYy5PYmplY3QuX2Zyb21PYmplY3QoJ0xpbmUnLCBvYmplY3QsIGNhbGxiYWNrKTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZmFicmljX187Il0sInNvdXJjZVJvb3QiOiIifQ==