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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mYWJyaWNhc2hhcGUvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2ZhYnJpY2FzaGFwZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9mYWJyaWNhc2hhcGUvLi9zcmMvYXJyb3dsaW5lLmpzIiwid2VicGFjazovL2ZhYnJpY2FzaGFwZS8uL3NyYy9jYW52YXMuanMiLCJ3ZWJwYWNrOi8vZmFicmljYXNoYXBlLy4vc3JjL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9mYWJyaWNhc2hhcGUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZmFicmljYXNoYXBlLy4vc3JjL2xpbmUuanMiLCJ3ZWJwYWNrOi8vZmFicmljYXNoYXBlL2V4dGVybmFsIFwiZmFicmljXCIiXSwibmFtZXMiOlsiQXJyb3dsaW5lIiwidXRpbCIsImNyZWF0ZUNsYXNzIiwidHlwZSIsIl9pbml0Q29tcG9uZW50cyIsInRleHQiLCJUZXh0IiwiYm9keVRleHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib2R5IiwiUmVjdCIsImZpbGwiLCJib2R5RmlsbCIsImxlZnRUcmlhbmdsZSIsIlRyaWFuZ2xlIiwicmlnaHRUcmlhbmdsZSIsIl9zZXRDb21wb25lbnRzUG9zaXRpb24iLCJjb21wb25lbnRzIiwiX3NldHVwQ29tcG9uZW50cyIsInNldFRleHQiLCJkZWdyZWVzVG9SYWRpYW5zUmF0aW8iLCJNYXRoIiwiUEkiLCJoZWlnaHQiLCJzY2FsZVkiLCJ3aWR0aCIsInNjYWxlWCIsImNvc1RldGEiLCJjb3MiLCJhbmdsZSIsInNpblRldGEiLCJzaW4iLCJib3VuZGluZ1JlY3QiLCJnZXRCb3VuZGluZ1JlY3QiLCJzZXQiLCJ0b3AiLCJsZWZ0IiwiZm9udFNpemUiLCJmcm9tT2JqZWN0Iiwib2JqZWN0IiwiY2FsbGJhY2siLCJPYmplY3QiLCJfZnJvbU9iamVjdCIsIkNhbnZhcyIsImRvbUVsZW1lbmRJZCIsInNjYWxlIiwidmFsdWUiLCJzaGFwZSIsImJhY2tncm91bmRJbWFnZSIsImltYWdlRmlsZSIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJpbWciLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzcmMiLCJyZXN1bHQiLCJJbWFnZSIsImFkZCIsInJlbmRlckFsbCIsInJlYWRBc0RhdGFVUkwiLCJzZW5kVG9CYWNrIiwiaGFzQ29udHJvbHMiLCJzZWxlY3RhYmxlIiwiZGlzY2FyZEFjdGl2ZU9iamVjdCIsIm9uIiwiZSIsIm9iaiIsInRhcmdldCIsImN1cnJlbnRIZWlnaHQiLCJjdXJyZW50V2lkdGgiLCJzZXRDb29yZHMiLCJtYXgiLCJtaW4iLCJzY2FsZURlZmluaXRpb24iLCJjaG9pY2VzIiwiY2FudmFzaG9sZGVyIiwiZ2V0RWxlbWVudEJ5SWQiLCJzZWxlY3RMaXN0IiwiaWQiLCJwYXJlbnRFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJpIiwibGVuZ3RoIiwib3B0aW9uIiwibGFiZWwiLCJzdHlsZSIsImNvbG9yIiwic2VsZWN0T2JqZWN0IiwibGlzdFRvU2VsZWN0RE9NIiwiY3JlYXRlUmVmZXJlbmNlTGluZSIsInJlZmVyZW5jZUxpbmUiLCJvcHRpb25zIiwic2VsZWN0ZWRJbmRleCIsIml0ZW0iLCJzaXplIiwicmVxdWVzdFJlbmRlckFsbCIsImZpbGxSZWZlcmVuY2VMaW5lIiwiZHVwbGljYXRlUmVmZXJlbmNlTGluZSIsIlJFQ1RfRElTQUJMRURfQ09OVFJPTFMiLCJmb3JFYWNoIiwiY29udHJvbCIsInNldENvbnRyb2xWaXNpYmxlIiwib2ZmIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdHJva2UiLCJDb25zdGFudHMiLCJMaW5lIiwiaW5pdGlhbGl6ZSIsImNhbGxTdXBlciIsImhhc093blByb3BlcnR5IiwidmlzaWJsZSIsImNvbXBvbmVudCIsImV4Y2x1ZGVGcm9tRXhwb3J0IiwiY2FudmFzIiwic2VuZEJhY2t3YXJkcyIsImdldENvbXBvbmVudHMiLCJzbGlj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LE1BQVAsQ0FBY0MsV0FBZCxDQUEwQixNQUExQixFQUFrQ0gsTUFBbEMsRUFBMENDLFFBQTFDLENBQVA7QUFDSCxDQUZELEM7Ozs7Ozs7Ozs7O0FDeEhBLG9EIiwiZmlsZSI6ImZhYnJpY2FzaGFwZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImZhYnJpY1wiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcImZhYnJpY2FzaGFwZVwiLCBbXCJmYWJyaWNcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiZmFicmljYXNoYXBlXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiZmFicmljXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJmYWJyaWNhc2hhcGVcIl0gPSBmYWN0b3J5KHJvb3RbXCJmYWJyaWNcIl0pO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZmFicmljX18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCB7ZmFicmljfSBmcm9tICdmYWJyaWMnXG5pbXBvcnQge0xpbmV9IGZyb20gJy4vbGluZSdcblxuLyoqXG4gKiBBbiBBcnJvd2xpbmUgaXMgYSBncm91cCB0aGF0IGxvb2tzIGxpa2UgYSBkb3VibGUgYXJyb3dlZCBsaW5lOlxuICogICAgICAgPC0tLS0tLS0+XG4gKi9cbmV4cG9ydCBjb25zdCBBcnJvd2xpbmUgPSBmYWJyaWMudXRpbC5jcmVhdGVDbGFzcyhMaW5lLCB7XG5cbiAgICB0eXBlOiAnYXJyb3dsaW5lJyxcblxuICAgIF9pbml0Q29tcG9uZW50czogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnRleHQgPSBuZXcgZmFicmljLlRleHQodGhpcy5ib2R5VGV4dCwge2JhY2tncm91bmRDb2xvcjogJ3doaXRlJ30pXG4gICAgICAgIHRoaXMuYm9keSA9IG5ldyBmYWJyaWMuUmVjdCh7ZmlsbDogdGhpcy5ib2R5RmlsbH0pXG4gICAgICAgIHRoaXMubGVmdFRyaWFuZ2xlID0gbmV3IGZhYnJpYy5UcmlhbmdsZSh7ZmlsbDogdGhpcy5ib2R5RmlsbH0pXG4gICAgICAgIHRoaXMucmlnaHRUcmlhbmdsZSA9IG5ldyBmYWJyaWMuVHJpYW5nbGUoe2ZpbGw6IHRoaXMuYm9keUZpbGx9KVxuXG4gICAgICAgIHRoaXMuX3NldENvbXBvbmVudHNQb3NpdGlvbigpXG5cbiAgICAgICAgdGhpcy5jb21wb25lbnRzID0gW3RoaXMuYm9keSwgdGhpcy5sZWZ0VHJpYW5nbGUsIHRoaXMucmlnaHRUcmlhbmdsZSwgdGhpcy50ZXh0XVxuXG4gICAgICAgIHRoaXMuX3NldHVwQ29tcG9uZW50cygpXG4gICAgICAgIHRoaXMuc2V0VGV4dCh0aGlzLmJvZHlUZXh0KVxuICAgIH0sXG5cbiAgICBfc2V0Q29tcG9uZW50c1Bvc2l0aW9uOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IGRlZ3JlZXNUb1JhZGlhbnNSYXRpbyA9IE1hdGguUEkgLyAxODAsXG4gICAgICAgICAgICBoZWlnaHQgPSB0aGlzLmhlaWdodCAqIHRoaXMuc2NhbGVZLFxuICAgICAgICAgICAgd2lkdGggPSB0aGlzLndpZHRoICogdGhpcy5zY2FsZVgsXG4gICAgICAgICAgICBjb3NUZXRhID0gTWF0aC5jb3ModGhpcy5hbmdsZSAqIGRlZ3JlZXNUb1JhZGlhbnNSYXRpbyksXG4gICAgICAgICAgICBzaW5UZXRhID0gTWF0aC5zaW4odGhpcy5hbmdsZSAqIGRlZ3JlZXNUb1JhZGlhbnNSYXRpbyksXG4gICAgICAgICAgICBib3VuZGluZ1JlY3QgPSB0aGlzLmdldEJvdW5kaW5nUmVjdCgpXG5cbiAgICAgICAgdGhpcy50ZXh0LnNldCh7XG4gICAgICAgICAgICB0b3A6IGJvdW5kaW5nUmVjdC50b3AgKyAwLjUgKiAoYm91bmRpbmdSZWN0LmhlaWdodCAtIHRoaXMudGV4dC5oZWlnaHQpLFxuICAgICAgICAgICAgbGVmdDogYm91bmRpbmdSZWN0LmxlZnQgKyAwLjUgKiAoYm91bmRpbmdSZWN0LndpZHRoIC0gdGhpcy50ZXh0LndpZHRoKSxcbiAgICAgICAgICAgIGZvbnRTaXplOiAxOFxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuYm9keS5zZXQoe1xuICAgICAgICAgICAgdG9wOiB0aGlzLnRvcCArIGhlaWdodCAqIHNpblRldGEgKyAoaGVpZ2h0IC8gNCkgKiBjb3NUZXRhLFxuICAgICAgICAgICAgbGVmdDogdGhpcy5sZWZ0ICsgaGVpZ2h0ICogY29zVGV0YSAtIChoZWlnaHQgLyA0KSAqIHNpblRldGEsXG4gICAgICAgICAgICB3aWR0aDogd2lkdGggLSAyICogaGVpZ2h0LFxuICAgICAgICAgICAgaGVpZ2h0OiBoZWlnaHQgLyAyLFxuICAgICAgICAgICAgYW5nbGU6IHRoaXMuYW5nbGVcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLmxlZnRUcmlhbmdsZS5zZXQoe1xuICAgICAgICAgICAgdG9wOiB0aGlzLnRvcCArIGhlaWdodCAqIGNvc1RldGEsXG4gICAgICAgICAgICBsZWZ0OiB0aGlzLmxlZnQgLSBoZWlnaHQgKiBzaW5UZXRhLFxuICAgICAgICAgICAgd2lkdGg6IGhlaWdodCxcbiAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAgICAgICAgYW5nbGU6IHRoaXMuYW5nbGUgLSA5MFxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMucmlnaHRUcmlhbmdsZS5zZXQoe1xuICAgICAgICAgICAgdG9wOiB0aGlzLnRvcCArIHdpZHRoICogc2luVGV0YSxcbiAgICAgICAgICAgIGxlZnQ6IHRoaXMubGVmdCArIHdpZHRoICogY29zVGV0YSxcbiAgICAgICAgICAgIHdpZHRoOiBoZWlnaHQsXG4gICAgICAgICAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICAgICAgICAgIGFuZ2xlOiB0aGlzLmFuZ2xlICsgOTBcbiAgICAgICAgfSlcbiAgICB9XG5cbn0pXG5cbmZhYnJpYy5BcnJvd2xpbmUgPSBBcnJvd2xpbmVcblxuZmFicmljLkFycm93bGluZS5mcm9tT2JqZWN0ID0gZnVuY3Rpb24gKG9iamVjdCwgY2FsbGJhY2spIHtcbiAgICByZXR1cm4gZmFicmljLk9iamVjdC5fZnJvbU9iamVjdCgnQXJyb3dsaW5lJywgb2JqZWN0LCBjYWxsYmFjayk7XG59O1xuIiwiaW1wb3J0IHtmYWJyaWN9IGZyb20gJ2ZhYnJpYydcbmltcG9ydCB7Q29uc3RhbnRzfSBmcm9tICcuL2NvbnN0YW50cydcbmltcG9ydCB7TGluZX0gZnJvbSAnLi9saW5lJ1xuXG5leHBvcnQgY2xhc3MgQ2FudmFzIGV4dGVuZHMgZmFicmljLkNhbnZhcyB7XG5cbiAgICBjb25zdHJ1Y3Rvcihkb21FbGVtZW5kSWQpIHtcbiAgICAgICAgc3VwZXIoZG9tRWxlbWVuZElkKVxuICAgICAgICB0aGlzLmRvbUVsZW1lbmRJZCA9IGRvbUVsZW1lbmRJZFxuICAgICAgICB0aGlzLnNjYWxlID0ge3ZhbHVlOiBudWxsLCBzaGFwZTogbnVsbH1cbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kSW1hZ2UgPSBudWxsXG4gICAgICAgIC8vIHRoaXMuX2xvY2tPYmplY3RzVG9Cb3VuZGFyaWVzKClcbiAgICB9XG5cbiAgICBhZGRJbWFnZShpbWFnZUZpbGUpIHtcbiAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKVxuXG4gICAgICAgIHJlYWRlci5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuXG4gICAgICAgICAgICBpbWcuc3JjID0gcmVhZGVyLnJlc3VsdFxuXG4gICAgICAgICAgICB0aGlzLmJhY2tncm91bmRJbWFnZSA9IG5ldyBmYWJyaWMuSW1hZ2UoaW1nKVxuICAgICAgICAgICAgdGhpcy5iYWNrZ3JvdW5kSW1hZ2Uuc2NhbGUodGhpcy5oZWlnaHQgLyB0aGlzLmJhY2tncm91bmRJbWFnZS5oZWlnaHQpXG4gICAgICAgICAgICB0aGlzLmFkZCh0aGlzLmJhY2tncm91bmRJbWFnZSlcbiAgICAgICAgICAgIHRoaXMucmVuZGVyQWxsKClcbiAgICAgICAgfTtcblxuICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChpbWFnZUZpbGUpO1xuICAgIH1cblxuICAgIGxvY2tJbWFnZSgpIHtcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kSW1hZ2Uuc2VuZFRvQmFjaygpXG4gICAgICAgIHRoaXMuYmFja2dyb3VuZEltYWdlLmhhc0NvbnRyb2xzID0gZmFsc2VcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kSW1hZ2Uuc2VsZWN0YWJsZSA9IGZhbHNlXG4gICAgICAgIHRoaXMuZGlzY2FyZEFjdGl2ZU9iamVjdCgpO1xuICAgICAgICB0aGlzLnJlbmRlckFsbCgpXG4gICAgfVxuXG4gICAgX2xvY2tPYmplY3RzVG9Cb3VuZGFyaWVzKCkge1xuICAgICAgICB0aGlzLm9uKCdvYmplY3Q6bW92aW5nJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHZhciBvYmogPSBlLnRhcmdldDtcblxuICAgICAgICAgICAgLy8gaWYgb2JqZWN0IGlzIHRvbyBiaWcgaWdub3JlXG4gICAgICAgICAgICBpZiAob2JqLmN1cnJlbnRIZWlnaHQgPiB0aGlzLmhlaWdodCB8fCBvYmouY3VycmVudFdpZHRoID4gdGhpcy53aWR0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9iai5zZXRDb29yZHMoKTtcbiAgICAgICAgICAgIC8vIHRvcC1sZWZ0ICBjb3JuZXJcbiAgICAgICAgICAgIGlmIChvYmouZ2V0Qm91bmRpbmdSZWN0KCkudG9wIDwgMCB8fCBvYmouZ2V0Qm91bmRpbmdSZWN0KCkubGVmdCA8IDApIHtcbiAgICAgICAgICAgICAgICBvYmoudG9wID0gTWF0aC5tYXgob2JqLnRvcCwgb2JqLnRvcCAtIG9iai5nZXRCb3VuZGluZ1JlY3QoKS50b3ApO1xuICAgICAgICAgICAgICAgIG9iai5sZWZ0ID0gTWF0aC5tYXgob2JqLmxlZnQsIG9iai5sZWZ0IC0gb2JqLmdldEJvdW5kaW5nUmVjdCgpLmxlZnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gYm90LXJpZ2h0IGNvcm5lclxuICAgICAgICAgICAgaWYgKG9iai5nZXRCb3VuZGluZ1JlY3QoKS50b3AgKyBvYmouZ2V0Qm91bmRpbmdSZWN0KCkuaGVpZ2h0ID4gdGhpcy5oZWlnaHQgfHxcbiAgICAgICAgICAgICAgICAgICAgb2JqLmdldEJvdW5kaW5nUmVjdCgpLmxlZnQgKyBvYmouZ2V0Qm91bmRpbmdSZWN0KCkud2lkdGggPiB0aGlzLndpZHRoKSB7XG4gICAgICAgICAgICAgICAgb2JqLnRvcCA9IE1hdGgubWluKG9iai50b3AsIHRoaXMuaGVpZ2h0IC0gb2JqLmdldEJvdW5kaW5nUmVjdCgpLmhlaWdodCArXG4gICAgICAgICAgICAgICAgICAgIG9iai50b3AgLSBvYmouZ2V0Qm91bmRpbmdSZWN0KCkudG9wKTtcbiAgICAgICAgICAgICAgICBvYmoubGVmdCA9IE1hdGgubWluKG9iai5sZWZ0LCB0aGlzLndpZHRoIC0gb2JqLmdldEJvdW5kaW5nUmVjdCgpLndpZHRoICtcbiAgICAgICAgICAgICAgICAgICAgb2JqLmxlZnQgLSBvYmouZ2V0Qm91bmRpbmdSZWN0KCkubGVmdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNldFNjYWxlKHNjYWxlRGVmaW5pdGlvbikge1xuICAgICAgICBpZiAoc2NhbGVEZWZpbml0aW9uLnNoYXBlKSB7XG4gICAgICAgICAgICB0aGlzLnNjYWxlLnNoYXBlID0gc2NhbGVEZWZpbml0aW9uLnNoYXBlXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNjYWxlRGVmaW5pdGlvbi52YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5zY2FsZS52YWx1ZSA9IHNjYWxlRGVmaW5pdGlvbi52YWx1ZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0U2NhbGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNjYWxlXG4gICAgfVxuXG4gICAgbG9ja1NjYWxlKCkge1xuICAgICAgICB0aGlzLnNjYWxlLnNoYXBlLmhhc0NvbnRyb2xzID0gZmFsc2VcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIEBwYXJhbSBjaG9pY2VzOiBhIGxpc3Qgb2YgKGxhYmVsLCBjb2xvcilcbiAgICAgKiAgZXhhbXBsZTogW1xuICAgICAqICAgICAge2xhYmVsOiAnbGFiZWwxJywgY29sb3I6ICdibHVlJ30sXG4gICAgICogICAgICB7bGFiZWw6ICdsYWJlbDInLCBjb2xvcjogJ3JnYmEoMjU1LDAsMCwwLjUpJ31cbiAgICAgKiAgIF1cbiAgICAgKiBAcmV0dXJuIGEgRE9NIHNlbGVjdCBvYmplY3Qgd2l0aCBjb3JyZXNwb25kaW5nIG9wdGlvbnNcbiAgICAgKi9cbiAgICBsaXN0VG9TZWxlY3RET00oY2hvaWNlcykge1xuICAgICAgICBjb25zdCBjYW52YXNob2xkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmRvbUVsZW1lbmRJZClcblxuICAgICAgICAvLyBDcmVhdGUgYW5kIGFwcGVuZCBzZWxlY3QgbGlzdFxuICAgICAgICBjb25zdCBzZWxlY3RMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0JylcblxuICAgICAgICBzZWxlY3RMaXN0LmlkID0gJ2ZhYnJpY2FzaGFwZVNoYXBlQ2hvaWNlcydcbiAgICAgICAgY2FudmFzaG9sZGVyLnBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoc2VsZWN0TGlzdClcblxuICAgICAgICAvLyBDcmVhdGUgYW5kIGFwcGVuZCB0aGUgb3B0aW9uc1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNob2ljZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXG5cbiAgICAgICAgICAgIG9wdGlvbi52YWx1ZSA9IGNob2ljZXNbaV0ubGFiZWxcbiAgICAgICAgICAgIG9wdGlvbi50ZXh0ID0gY2hvaWNlc1tpXS5sYWJlbFxuICAgICAgICAgICAgb3B0aW9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNob2ljZXNbaV0uY29sb3JcbiAgICAgICAgICAgIHNlbGVjdExpc3QuYXBwZW5kQ2hpbGQob3B0aW9uKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzZWxlY3RMaXN0XG4gICAgfVxuXG4gICAgc2V0U2hhcGVDaG9pY2VzKGNob2ljZXMpIHtcbiAgICAgICAgY29uc3Qgc2VsZWN0T2JqZWN0ID0gdGhpcy5saXN0VG9TZWxlY3RET00oY2hvaWNlcylcblxuICAgICAgICB0aGlzLmNyZWF0ZVJlZmVyZW5jZUxpbmUoc2VsZWN0T2JqZWN0KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBsaW5lIHVzZXIgY2FuIGNsaWNrIG9uIHRvIGR1cGxpY2F0ZSBpdCBhbmQgdXNlIHRoZSBkdXBsaWNhdGUgaW50byB0aGUgc2NlbmUuXG4gICAgICovXG4gICAgY3JlYXRlUmVmZXJlbmNlTGluZShzZWxlY3RPYmplY3QpIHtcbiAgICAgICAgY29uc3QgcmVmZXJlbmNlTGluZSA9IG5ldyBmYWJyaWMuUmVjdCh7XG4gICAgICAgICAgICB0b3A6IDUsIGxlZnQ6IDUsIHdpZHRoOiA4MCwgaGVpZ2h0OiAxNyxcbiAgICAgICAgICAgIGZpbGw6IHNlbGVjdE9iamVjdC5vcHRpb25zW3NlbGVjdE9iamVjdC5zZWxlY3RlZEluZGV4XS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3JcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLmFkZChyZWZlcmVuY2VMaW5lKVxuICAgICAgICB0aGlzLml0ZW0odGhpcy5zaXplKCkgLSAxKS5oYXNDb250cm9scyA9IGZhbHNlXG4gICAgICAgIHRoaXMucmVxdWVzdFJlbmRlckFsbCgpXG5cbiAgICAgICAgY29uc3QgZmlsbFJlZmVyZW5jZUxpbmUgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzXG4gICAgICAgICAgICAgICAgLml0ZW0odGhpcy5zaXplKCkgLSAxKVxuICAgICAgICAgICAgICAgIC5zZXQoJ2ZpbGwnLCBzZWxlY3RPYmplY3Qub3B0aW9uc1tzZWxlY3RPYmplY3Quc2VsZWN0ZWRJbmRleF0uc3R5bGUuYmFja2dyb3VuZENvbG9yKVxuICAgICAgICAgICAgdGhpcy5yZW5kZXJBbGwoKVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZHVwbGljYXRlUmVmZXJlbmNlTGluZSA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlUmVmZXJlbmNlTGluZShzZWxlY3RPYmplY3QpXG4gICAgICAgICAgICByZWZlcmVuY2VMaW5lLmhhc0NvbnRyb2xzID0gdHJ1ZVxuICAgICAgICAgICAgQ29uc3RhbnRzLlJFQ1RfRElTQUJMRURfQ09OVFJPTFMuZm9yRWFjaCgoY29udHJvbCkgPT4ge1xuICAgICAgICAgICAgICAgIHJlZmVyZW5jZUxpbmUuc2V0Q29udHJvbFZpc2libGUoY29udHJvbCwgZmFsc2UpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgcmVmZXJlbmNlTGluZS5vbignbW91c2Vkb3duJywgKCkgPT4ge1xuICAgICAgICAgICAgZHVwbGljYXRlUmVmZXJlbmNlTGluZSgpXG4gICAgICAgICAgICByZWZlcmVuY2VMaW5lLm9mZignbW91c2Vkb3duJylcbiAgICAgICAgfSlcblxuICAgICAgICBzZWxlY3RPYmplY3QucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZmlsbFJlZmVyZW5jZUxpbmUpXG4gICAgICAgIHNlbGVjdE9iamVjdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmaWxsUmVmZXJlbmNlTGluZSlcbiAgICB9XG5cbiAgICBjcmVhdGVTY2FsZWRMaW5lKG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3Qgc2NhbGUgPSAodGhpcy5zY2FsZS5zaGFwZS53aWR0aCAqIHRoaXMuc2NhbGUuc2hhcGUuc2NhbGVYKSAvIHRoaXMuc2NhbGUudmFsdWVcblxuICAgICAgICBvcHRpb25zLnRvcCA9IG9wdGlvbnMudG9wICogc2NhbGVcbiAgICAgICAgb3B0aW9ucy5sZWZ0ID0gb3B0aW9ucy5sZWZ0ICogc2NhbGVcbiAgICAgICAgb3B0aW9ucy53aWR0aCA9IG9wdGlvbnMud2lkdGggKiBzY2FsZVxuICAgICAgICBvcHRpb25zLmhlaWdodCA9IG9wdGlvbnMuc3Ryb2tlICogc2NhbGVcblxuICAgICAgICByZXR1cm4gbmV3IExpbmUob3B0aW9ucylcbiAgICB9XG5cbn1cbiIsIi8vIGNvbnRyb2xzOiAndGwnLCAndHInLCAnYnInLCAnYmwnLCAnbWwnLCAnbXQnLCAnbXInLCAnbWInLCAnbXRyJ1xuZXhwb3J0IGNvbnN0IENvbnN0YW50cyA9IHtcbiAgICBSRUNUX0RJU0FCTEVEX0NPTlRST0xTOiBbICd0bCcsICd0cicsICdibCcsICdicicsICdtdCcsICdtYicgXVxufVxuIiwiaW1wb3J0IHtBcnJvd2xpbmV9IGZyb20gJy4vYXJyb3dsaW5lLmpzJztcbmltcG9ydCB7Q2FudmFzfSBmcm9tICcuL2NhbnZhcy5qcyc7XG5pbXBvcnQge0xpbmV9IGZyb20gJy4vbGluZS5qcyc7XG5pbXBvcnQge0NvbnN0YW50c30gZnJvbSAnLi9jb25zdGFudHMuanMnO1xuZXhwb3J0IHtBcnJvd2xpbmUsIENhbnZhcywgTGluZSwgQ29uc3RhbnRzfTtcbiIsImltcG9ydCB7ZmFicmljfSBmcm9tICdmYWJyaWMnXG5pbXBvcnQge0NvbnN0YW50c30gZnJvbSAnLi9jb25zdGFudHMnXG5cbmV4cG9ydCBjb25zdCBMaW5lID0gZmFicmljLnV0aWwuY3JlYXRlQ2xhc3MoZmFicmljLlJlY3QsIHtcblxuICAgIHR5cGU6ICdsaW5lJyxcbiAgICBjb21wb25lbnRzOiBbXSxcbiAgICBoYXNDb250cm9sczogdHJ1ZSxcblxuICAgIGluaXRpYWxpemU6IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIG9wdGlvbnMgfHwgKG9wdGlvbnMgPSB7IH0pO1xuICAgICAgICB0aGlzLmNhbGxTdXBlcignaW5pdGlhbGl6ZScsIG9wdGlvbnMpO1xuXG4gICAgICAgIHRoaXMuYm9keUZpbGwgPSBvcHRpb25zLmZpbGwgfHwgJydcbiAgICAgICAgaWYgKG9wdGlvbnMuaGFzT3duUHJvcGVydHkoJ2JvZHlGaWxsJykpIHtcbiAgICAgICAgICAgIHRoaXMuYm9keUZpbGwgPSBvcHRpb25zLmJvZHlGaWxsXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ib2R5VGV4dCA9IG9wdGlvbnMudGV4dCB8fCAnJ1xuICAgICAgICBpZiAob3B0aW9ucy5oYXNPd25Qcm9wZXJ0eSgnYm9keVRleHQnKSkge1xuICAgICAgICAgICAgdGhpcy5ib2R5VGV4dCA9IG9wdGlvbnMuYm9keVRleHRcbiAgICAgICAgfVxuICAgICAgICBDb25zdGFudHMuUkVDVF9ESVNBQkxFRF9DT05UUk9MUy5mb3JFYWNoKChjb250cm9sKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldENvbnRyb2xWaXNpYmxlKGNvbnRyb2wsIGZhbHNlKVxuICAgICAgICB9KVxuICAgICAgICB0aGlzLnNldCgnZmlsbCcsICd0cmFuc3BhcmVudCcpXG5cbiAgICAgICAgdGhpcy5vbihcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAnYWRkZWQnOiB0aGlzLl9pbml0Q29tcG9uZW50cyxcbiAgICAgICAgICAgICAgICAnbW9kaWZpZWQnOiB0aGlzLl9zZXRDb21wb25lbnRzUG9zaXRpb24sXG4gICAgICAgICAgICAgICAgJ3NjYWxpbmcnOiB0aGlzLl9zZXRDb21wb25lbnRzUG9zaXRpb24sXG4gICAgICAgICAgICAgICAgJ21vdmluZyc6IHRoaXMuX3NldENvbXBvbmVudHNQb3NpdGlvbixcbiAgICAgICAgICAgICAgICAncm90YXRpbmcnOiB0aGlzLl9zZXRDb21wb25lbnRzUG9zaXRpb25cbiAgICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgIH0sXG5cbiAgICBfaW5pdENvbXBvbmVudHM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy50ZXh0ID0gbmV3IGZhYnJpYy5UZXh0KCcnLCB7dmlzaWJsZTogZmFsc2V9KVxuICAgICAgICB0aGlzLmJvZHkgPSBuZXcgZmFicmljLlJlY3Qoe1xuICAgICAgICAgICAgd2lkdGg6IHRoaXMud2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQ6IHRoaXMuaGVpZ2h0LFxuICAgICAgICAgICAgdG9wOiB0aGlzLnRvcCxcbiAgICAgICAgICAgIGxlZnQ6IHRoaXMubGVmdCxcbiAgICAgICAgICAgIGZpbGw6IHRoaXMuYm9keUZpbGxcbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5jb21wb25lbnRzID0gW3RoaXMudGV4dCwgdGhpcy5ib2R5XVxuXG4gICAgICAgIHRoaXMuX3NldHVwQ29tcG9uZW50cygpXG4gICAgICAgIHRoaXMuc2V0VGV4dCh0aGlzLmJvZHlUZXh0KVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBfc2V0dXBDb21wb25lbnRzOiBhZGQgdGhlIGNvbXBvbmVudCB0byB0aGUgY2FudmFzIGFuZCBzZXQgc29tZSBvcHRpb25zXG4gICAgICogdG8gYXZvaWQgdGhlbSBmcm9tIGJlaW5nIGV4cG9ydGVkL3NlbGVjdGVkXG4gICAgICovXG4gICAgX3NldHVwQ29tcG9uZW50czogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmNvbXBvbmVudHMuZm9yRWFjaCgoY29tcG9uZW50KSA9PiB7XG4gICAgICAgICAgICBjb21wb25lbnQuc2V0KHtcbiAgICAgICAgICAgICAgICBleGNsdWRlRnJvbUV4cG9ydDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBoYXNDb250cm9sczogZmFsc2UsXG4gICAgICAgICAgICAgICAgc2VsZWN0YWJsZTogZmFsc2VcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB0aGlzLmNhbnZhcy5hZGQoY29tcG9uZW50KVxuICAgICAgICAgICAgY29tcG9uZW50LnNlbmRCYWNrd2FyZHMoKVxuICAgICAgICB9KVxuICAgIH0sXG5cbiAgICBfc2V0Q29tcG9uZW50c1Bvc2l0aW9uOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuaGVpZ2h0ICogdGhpcy5zY2FsZVksXG4gICAgICAgICAgICB3aWR0aCA9IHRoaXMud2lkdGggKiB0aGlzLnNjYWxlWCxcbiAgICAgICAgICAgIGJvdW5kaW5nUmVjdCA9IHRoaXMuZ2V0Qm91bmRpbmdSZWN0KClcblxuICAgICAgICBpZiAodGhpcy50ZXh0KSB7XG4gICAgICAgICAgICB0aGlzLnRleHQuc2V0KHtcbiAgICAgICAgICAgICAgICB0b3A6IGJvdW5kaW5nUmVjdC50b3AgKyAwLjUgKiAoYm91bmRpbmdSZWN0LmhlaWdodCAtIHRoaXMudGV4dC5oZWlnaHQpLFxuICAgICAgICAgICAgICAgIGxlZnQ6IGJvdW5kaW5nUmVjdC5sZWZ0ICsgMC41ICogKGJvdW5kaW5nUmVjdC53aWR0aCAtIHRoaXMudGV4dC53aWR0aClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmJvZHkuc2V0KHtcbiAgICAgICAgICAgIHRvcDogdGhpcy50b3AsXG4gICAgICAgICAgICBsZWZ0OiB0aGlzLmxlZnQsXG4gICAgICAgICAgICB3aWR0aDogd2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICAgICAgICAgIGFuZ2xlOiB0aGlzLmFuZ2xlXG4gICAgICAgIH0pXG5cbiAgICB9LFxuXG4gICAgZ2V0Q29tcG9uZW50czogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb21wb25lbnRzXG4gICAgfSxcblxuICAgIHNldFRleHQ6IGZ1bmN0aW9uICh0ZXh0KSB7XG4gICAgICAgIHRoaXMuYm9keVRleHQgPSB0ZXh0XG4gICAgICAgIGlmICh0ZXh0LnNsaWNlKC0xKSAhPT0gJ20nKSB7XG4gICAgICAgICAgICB0ZXh0ICs9ICdtJ1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudGV4dC5zZXQoe1xuICAgICAgICAgICAgdGV4dDogdGV4dFxuICAgICAgICB9KVxuICAgICAgICB0aGlzLl9zZXRDb21wb25lbnRzUG9zaXRpb24oKVxuICAgIH0sXG5cbiAgICBfcmVuZGVyOiBmdW5jdGlvbiAoY3R4KSB7XG4gICAgICAgIHRoaXMuY2FsbFN1cGVyKCdfcmVuZGVyJywgY3R4KTtcbiAgICB9LFxuXG4gICAgdG9PYmplY3Q6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGZhYnJpYy51dGlsLm9iamVjdC5leHRlbmQodGhpcy5jYWxsU3VwZXIoJ3RvT2JqZWN0JyksIHtcbiAgICAgICAgICAgIGJvZHlGaWxsOiB0aGlzLmdldCgnYm9keUZpbGwnKSxcbiAgICAgICAgICAgIGJvZHlUZXh0OiB0aGlzLmdldCgnYm9keVRleHQnKVxuICAgICAgICB9KTtcbiAgICB9XG5cbn0pXG5cbmZhYnJpYy5MaW5lID0gTGluZVxuXG5mYWJyaWMuTGluZS5mcm9tT2JqZWN0ID0gZnVuY3Rpb24gKG9iamVjdCwgY2FsbGJhY2spIHtcbiAgICByZXR1cm4gZmFicmljLk9iamVjdC5fZnJvbU9iamVjdCgnTGluZScsIG9iamVjdCwgY2FsbGJhY2spO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9mYWJyaWNfXzsiXSwic291cmNlUm9vdCI6IiJ9