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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mYWJyaWNhc2hhcGUvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2ZhYnJpY2FzaGFwZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9mYWJyaWNhc2hhcGUvLi9zcmMvYXJyb3dsaW5lLmpzIiwid2VicGFjazovL2ZhYnJpY2FzaGFwZS8uL3NyYy9jYW52YXMuanMiLCJ3ZWJwYWNrOi8vZmFicmljYXNoYXBlLy4vc3JjL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9mYWJyaWNhc2hhcGUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZmFicmljYXNoYXBlLy4vc3JjL2xpbmUuanMiLCJ3ZWJwYWNrOi8vZmFicmljYXNoYXBlL2V4dGVybmFsIFwiZmFicmljXCIiXSwibmFtZXMiOlsiQXJyb3dsaW5lIiwidXRpbCIsImNyZWF0ZUNsYXNzIiwidHlwZSIsIl9pbml0Q29tcG9uZW50cyIsInRleHQiLCJUZXh0IiwiYm9keVRleHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib2R5IiwiUmVjdCIsImZpbGwiLCJib2R5RmlsbCIsImxlZnRUcmlhbmdsZSIsIlRyaWFuZ2xlIiwicmlnaHRUcmlhbmdsZSIsIl9zZXRDb21wb25lbnRzUG9zaXRpb24iLCJjb21wb25lbnRzIiwiX3NldHVwQ29tcG9uZW50cyIsInNldFRleHQiLCJkZWdyZWVzVG9SYWRpYW5zUmF0aW8iLCJNYXRoIiwiUEkiLCJoZWlnaHQiLCJzY2FsZVkiLCJ3aWR0aCIsInNjYWxlWCIsImNvc1RldGEiLCJjb3MiLCJhbmdsZSIsInNpblRldGEiLCJzaW4iLCJib3VuZGluZ1JlY3QiLCJnZXRCb3VuZGluZ1JlY3QiLCJzZXQiLCJ0b3AiLCJsZWZ0IiwiZm9udFNpemUiLCJmcm9tT2JqZWN0Iiwib2JqZWN0IiwiY2FsbGJhY2siLCJPYmplY3QiLCJfZnJvbU9iamVjdCIsIkNhbnZhcyIsImRvbUVsZW1lbmRJZCIsInNjYWxlIiwidmFsdWUiLCJzaGFwZSIsImN1c3RvbUJhY2tncm91bmRJbWFnZSIsImltYWdlRmlsZSIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJpbWciLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzcmMiLCJyZXN1bHQiLCJJbWFnZSIsImFkZCIsInJlbmRlckFsbCIsInJlYWRBc0RhdGFVUkwiLCJzZW5kVG9CYWNrIiwiaGFzQ29udHJvbHMiLCJzZWxlY3RhYmxlIiwiZGlzY2FyZEFjdGl2ZU9iamVjdCIsIm9uIiwiZSIsIm9iaiIsInRhcmdldCIsImN1cnJlbnRIZWlnaHQiLCJjdXJyZW50V2lkdGgiLCJzZXRDb29yZHMiLCJtYXgiLCJtaW4iLCJzY2FsZURlZmluaXRpb24iLCJjaG9pY2VzIiwiY2FudmFzaG9sZGVyIiwiZ2V0RWxlbWVudEJ5SWQiLCJzZWxlY3RMaXN0IiwiaWQiLCJwYXJlbnRFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJpIiwibGVuZ3RoIiwib3B0aW9uIiwibGFiZWwiLCJzdHlsZSIsImNvbG9yIiwic2VsZWN0T2JqZWN0IiwibGlzdFRvU2VsZWN0RE9NIiwiY3JlYXRlUmVmZXJlbmNlTGluZSIsInJlZmVyZW5jZUxpbmUiLCJvcHRpb25zIiwic2VsZWN0ZWRJbmRleCIsIml0ZW0iLCJzaXplIiwicmVxdWVzdFJlbmRlckFsbCIsImZpbGxSZWZlcmVuY2VMaW5lIiwiZHVwbGljYXRlUmVmZXJlbmNlTGluZSIsIlJFQ1RfRElTQUJMRURfQ09OVFJPTFMiLCJmb3JFYWNoIiwiY29udHJvbCIsInNldENvbnRyb2xWaXNpYmxlIiwib2ZmIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdHJva2UiLCJDb25zdGFudHMiLCJMaW5lIiwiaW5pdGlhbGl6ZSIsImNhbGxTdXBlciIsImhhc093blByb3BlcnR5IiwidmlzaWJsZSIsImNvbXBvbmVudCIsImV4Y2x1ZGVGcm9tRXhwb3J0IiwiY2FudmFzIiwic2VuZEJhY2t3YXJkcyIsImdldENvbXBvbmVudHMi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Q2pELFNBQU8sZUFBT0MsTUFBUCxDQUFjQyxXQUFkLENBQTBCLE1BQTFCLEVBQWtDSCxNQUFsQyxFQUEwQ0MsUUFBMUMsQ0FBUDtBQUNILENBRkQsQzs7Ozs7Ozs7Ozs7QUN4SEEsb0QiLCJmaWxlIjoiZmFicmljYXNoYXBlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiZmFicmljXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiZmFicmljYXNoYXBlXCIsIFtcImZhYnJpY1wiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJmYWJyaWNhc2hhcGVcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJmYWJyaWNcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImZhYnJpY2FzaGFwZVwiXSA9IGZhY3Rvcnkocm9vdFtcImZhYnJpY1wiXSk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9mYWJyaWNfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHtmYWJyaWN9IGZyb20gJ2ZhYnJpYydcbmltcG9ydCB7TGluZX0gZnJvbSAnLi9saW5lJ1xuXG4vKipcbiAqIEFuIEFycm93bGluZSBpcyBhIGdyb3VwIHRoYXQgbG9va3MgbGlrZSBhIGRvdWJsZSBhcnJvd2VkIGxpbmU6XG4gKiAgICAgICA8LS0tLS0tLT5cbiAqL1xuZXhwb3J0IGNvbnN0IEFycm93bGluZSA9IGZhYnJpYy51dGlsLmNyZWF0ZUNsYXNzKExpbmUsIHtcblxuICAgIHR5cGU6ICdhcnJvd2xpbmUnLFxuXG4gICAgX2luaXRDb21wb25lbnRzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMudGV4dCA9IG5ldyBmYWJyaWMuVGV4dCh0aGlzLmJvZHlUZXh0LCB7YmFja2dyb3VuZENvbG9yOiAnd2hpdGUnfSlcbiAgICAgICAgdGhpcy5ib2R5ID0gbmV3IGZhYnJpYy5SZWN0KHtmaWxsOiB0aGlzLmJvZHlGaWxsfSlcbiAgICAgICAgdGhpcy5sZWZ0VHJpYW5nbGUgPSBuZXcgZmFicmljLlRyaWFuZ2xlKHtmaWxsOiB0aGlzLmJvZHlGaWxsfSlcbiAgICAgICAgdGhpcy5yaWdodFRyaWFuZ2xlID0gbmV3IGZhYnJpYy5UcmlhbmdsZSh7ZmlsbDogdGhpcy5ib2R5RmlsbH0pXG5cbiAgICAgICAgdGhpcy5fc2V0Q29tcG9uZW50c1Bvc2l0aW9uKClcblxuICAgICAgICB0aGlzLmNvbXBvbmVudHMgPSBbdGhpcy5ib2R5LCB0aGlzLmxlZnRUcmlhbmdsZSwgdGhpcy5yaWdodFRyaWFuZ2xlLCB0aGlzLnRleHRdXG5cbiAgICAgICAgdGhpcy5fc2V0dXBDb21wb25lbnRzKClcbiAgICAgICAgdGhpcy5zZXRUZXh0KHRoaXMuYm9keVRleHQpXG4gICAgfSxcblxuICAgIF9zZXRDb21wb25lbnRzUG9zaXRpb246IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgZGVncmVlc1RvUmFkaWFuc1JhdGlvID0gTWF0aC5QSSAvIDE4MCxcbiAgICAgICAgICAgIGhlaWdodCA9IHRoaXMuaGVpZ2h0ICogdGhpcy5zY2FsZVksXG4gICAgICAgICAgICB3aWR0aCA9IHRoaXMud2lkdGggKiB0aGlzLnNjYWxlWCxcbiAgICAgICAgICAgIGNvc1RldGEgPSBNYXRoLmNvcyh0aGlzLmFuZ2xlICogZGVncmVlc1RvUmFkaWFuc1JhdGlvKSxcbiAgICAgICAgICAgIHNpblRldGEgPSBNYXRoLnNpbih0aGlzLmFuZ2xlICogZGVncmVlc1RvUmFkaWFuc1JhdGlvKSxcbiAgICAgICAgICAgIGJvdW5kaW5nUmVjdCA9IHRoaXMuZ2V0Qm91bmRpbmdSZWN0KClcblxuICAgICAgICB0aGlzLnRleHQuc2V0KHtcbiAgICAgICAgICAgIHRvcDogYm91bmRpbmdSZWN0LnRvcCArIDAuNSAqIChib3VuZGluZ1JlY3QuaGVpZ2h0IC0gdGhpcy50ZXh0LmhlaWdodCksXG4gICAgICAgICAgICBsZWZ0OiBib3VuZGluZ1JlY3QubGVmdCArIDAuNSAqIChib3VuZGluZ1JlY3Qud2lkdGggLSB0aGlzLnRleHQud2lkdGgpLFxuICAgICAgICAgICAgZm9udFNpemU6IDE4XG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5ib2R5LnNldCh7XG4gICAgICAgICAgICB0b3A6IHRoaXMudG9wICsgaGVpZ2h0ICogc2luVGV0YSArIChoZWlnaHQgLyA0KSAqIGNvc1RldGEsXG4gICAgICAgICAgICBsZWZ0OiB0aGlzLmxlZnQgKyBoZWlnaHQgKiBjb3NUZXRhIC0gKGhlaWdodCAvIDQpICogc2luVGV0YSxcbiAgICAgICAgICAgIHdpZHRoOiB3aWR0aCAtIDIgKiBoZWlnaHQsXG4gICAgICAgICAgICBoZWlnaHQ6IGhlaWdodCAvIDIsXG4gICAgICAgICAgICBhbmdsZTogdGhpcy5hbmdsZVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMubGVmdFRyaWFuZ2xlLnNldCh7XG4gICAgICAgICAgICB0b3A6IHRoaXMudG9wICsgaGVpZ2h0ICogY29zVGV0YSxcbiAgICAgICAgICAgIGxlZnQ6IHRoaXMubGVmdCAtIGhlaWdodCAqIHNpblRldGEsXG4gICAgICAgICAgICB3aWR0aDogaGVpZ2h0LFxuICAgICAgICAgICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgICAgICAgICBhbmdsZTogdGhpcy5hbmdsZSAtIDkwXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5yaWdodFRyaWFuZ2xlLnNldCh7XG4gICAgICAgICAgICB0b3A6IHRoaXMudG9wICsgd2lkdGggKiBzaW5UZXRhLFxuICAgICAgICAgICAgbGVmdDogdGhpcy5sZWZ0ICsgd2lkdGggKiBjb3NUZXRhLFxuICAgICAgICAgICAgd2lkdGg6IGhlaWdodCxcbiAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAgICAgICAgYW5nbGU6IHRoaXMuYW5nbGUgKyA5MFxuICAgICAgICB9KVxuICAgIH1cblxufSlcblxuZmFicmljLkFycm93bGluZSA9IEFycm93bGluZVxuXG5mYWJyaWMuQXJyb3dsaW5lLmZyb21PYmplY3QgPSBmdW5jdGlvbiAob2JqZWN0LCBjYWxsYmFjaykge1xuICAgIHJldHVybiBmYWJyaWMuT2JqZWN0Ll9mcm9tT2JqZWN0KCdBcnJvd2xpbmUnLCBvYmplY3QsIGNhbGxiYWNrKTtcbn07XG4iLCJpbXBvcnQge2ZhYnJpY30gZnJvbSAnZmFicmljJ1xuaW1wb3J0IHtDb25zdGFudHN9IGZyb20gJy4vY29uc3RhbnRzJ1xuaW1wb3J0IHtMaW5lfSBmcm9tICcuL2xpbmUnXG5cbmV4cG9ydCBjbGFzcyBDYW52YXMgZXh0ZW5kcyBmYWJyaWMuQ2FudmFzIHtcblxuICAgIGNvbnN0cnVjdG9yKGRvbUVsZW1lbmRJZCkge1xuICAgICAgICBzdXBlcihkb21FbGVtZW5kSWQpXG4gICAgICAgIHRoaXMuZG9tRWxlbWVuZElkID0gZG9tRWxlbWVuZElkXG4gICAgICAgIHRoaXMuc2NhbGUgPSB7dmFsdWU6IG51bGwsIHNoYXBlOiBudWxsfVxuICAgICAgICB0aGlzLmN1c3RvbUJhY2tncm91bmRJbWFnZSA9IG51bGxcbiAgICAgICAgLy8gdGhpcy5fbG9ja09iamVjdHNUb0JvdW5kYXJpZXMoKVxuICAgIH1cblxuICAgIGFkZEltYWdlKGltYWdlRmlsZSkge1xuICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpXG5cbiAgICAgICAgcmVhZGVyLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG5cbiAgICAgICAgICAgIGltZy5zcmMgPSByZWFkZXIucmVzdWx0XG5cbiAgICAgICAgICAgIHRoaXMuY3VzdG9tQmFja2dyb3VuZEltYWdlID0gbmV3IGZhYnJpYy5JbWFnZShpbWcpXG4gICAgICAgICAgICB0aGlzLmN1c3RvbUJhY2tncm91bmRJbWFnZS5zY2FsZSh0aGlzLmhlaWdodCAvIHRoaXMuY3VzdG9tQmFja2dyb3VuZEltYWdlLmhlaWdodClcbiAgICAgICAgICAgIHRoaXMuYWRkKHRoaXMuY3VzdG9tQmFja2dyb3VuZEltYWdlKVxuICAgICAgICAgICAgdGhpcy5yZW5kZXJBbGwoKVxuICAgICAgICB9O1xuXG4gICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGltYWdlRmlsZSk7XG4gICAgfVxuXG4gICAgbG9ja0ltYWdlKCkge1xuICAgICAgICB0aGlzLmN1c3RvbUJhY2tncm91bmRJbWFnZS5zZW5kVG9CYWNrKClcbiAgICAgICAgdGhpcy5jdXN0b21CYWNrZ3JvdW5kSW1hZ2UuaGFzQ29udHJvbHMgPSBmYWxzZVxuICAgICAgICB0aGlzLmN1c3RvbUJhY2tncm91bmRJbWFnZS5zZWxlY3RhYmxlID0gZmFsc2VcbiAgICAgICAgdGhpcy5kaXNjYXJkQWN0aXZlT2JqZWN0KCk7XG4gICAgICAgIHRoaXMucmVuZGVyQWxsKClcbiAgICB9XG5cbiAgICBfbG9ja09iamVjdHNUb0JvdW5kYXJpZXMoKSB7XG4gICAgICAgIHRoaXMub24oJ29iamVjdDptb3ZpbmcnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIG9iaiA9IGUudGFyZ2V0O1xuXG4gICAgICAgICAgICAvLyBpZiBvYmplY3QgaXMgdG9vIGJpZyBpZ25vcmVcbiAgICAgICAgICAgIGlmIChvYmouY3VycmVudEhlaWdodCA+IHRoaXMuaGVpZ2h0IHx8IG9iai5jdXJyZW50V2lkdGggPiB0aGlzLndpZHRoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb2JqLnNldENvb3JkcygpO1xuICAgICAgICAgICAgLy8gdG9wLWxlZnQgIGNvcm5lclxuICAgICAgICAgICAgaWYgKG9iai5nZXRCb3VuZGluZ1JlY3QoKS50b3AgPCAwIHx8IG9iai5nZXRCb3VuZGluZ1JlY3QoKS5sZWZ0IDwgMCkge1xuICAgICAgICAgICAgICAgIG9iai50b3AgPSBNYXRoLm1heChvYmoudG9wLCBvYmoudG9wIC0gb2JqLmdldEJvdW5kaW5nUmVjdCgpLnRvcCk7XG4gICAgICAgICAgICAgICAgb2JqLmxlZnQgPSBNYXRoLm1heChvYmoubGVmdCwgb2JqLmxlZnQgLSBvYmouZ2V0Qm91bmRpbmdSZWN0KCkubGVmdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBib3QtcmlnaHQgY29ybmVyXG4gICAgICAgICAgICBpZiAob2JqLmdldEJvdW5kaW5nUmVjdCgpLnRvcCArIG9iai5nZXRCb3VuZGluZ1JlY3QoKS5oZWlnaHQgPiB0aGlzLmhlaWdodCB8fFxuICAgICAgICAgICAgICAgICAgICBvYmouZ2V0Qm91bmRpbmdSZWN0KCkubGVmdCArIG9iai5nZXRCb3VuZGluZ1JlY3QoKS53aWR0aCA+IHRoaXMud2lkdGgpIHtcbiAgICAgICAgICAgICAgICBvYmoudG9wID0gTWF0aC5taW4ob2JqLnRvcCwgdGhpcy5oZWlnaHQgLSBvYmouZ2V0Qm91bmRpbmdSZWN0KCkuaGVpZ2h0ICtcbiAgICAgICAgICAgICAgICAgICAgb2JqLnRvcCAtIG9iai5nZXRCb3VuZGluZ1JlY3QoKS50b3ApO1xuICAgICAgICAgICAgICAgIG9iai5sZWZ0ID0gTWF0aC5taW4ob2JqLmxlZnQsIHRoaXMud2lkdGggLSBvYmouZ2V0Qm91bmRpbmdSZWN0KCkud2lkdGggK1xuICAgICAgICAgICAgICAgICAgICBvYmoubGVmdCAtIG9iai5nZXRCb3VuZGluZ1JlY3QoKS5sZWZ0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2V0U2NhbGUoc2NhbGVEZWZpbml0aW9uKSB7XG4gICAgICAgIGlmIChzY2FsZURlZmluaXRpb24uc2hhcGUpIHtcbiAgICAgICAgICAgIHRoaXMuc2NhbGUuc2hhcGUgPSBzY2FsZURlZmluaXRpb24uc2hhcGVcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2NhbGVEZWZpbml0aW9uLnZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLnNjYWxlLnZhbHVlID0gc2NhbGVEZWZpbml0aW9uLnZhbHVlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRTY2FsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NhbGVcbiAgICB9XG5cbiAgICBsb2NrU2NhbGUoKSB7XG4gICAgICAgIHRoaXMuc2NhbGUuc2hhcGUuaGFzQ29udHJvbHMgPSBmYWxzZVxuICAgIH1cblxuICAgIC8qXG4gICAgICogQHBhcmFtIGNob2ljZXM6IGEgbGlzdCBvZiAobGFiZWwsIGNvbG9yKVxuICAgICAqICBleGFtcGxlOiBbXG4gICAgICogICAgICB7bGFiZWw6ICdsYWJlbDEnLCBjb2xvcjogJ2JsdWUnfSxcbiAgICAgKiAgICAgIHtsYWJlbDogJ2xhYmVsMicsIGNvbG9yOiAncmdiYSgyNTUsMCwwLDAuNSknfVxuICAgICAqICAgXVxuICAgICAqIEByZXR1cm4gYSBET00gc2VsZWN0IG9iamVjdCB3aXRoIGNvcnJlc3BvbmRpbmcgb3B0aW9uc1xuICAgICAqL1xuICAgIGxpc3RUb1NlbGVjdERPTShjaG9pY2VzKSB7XG4gICAgICAgIGNvbnN0IGNhbnZhc2hvbGRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuZG9tRWxlbWVuZElkKVxuXG4gICAgICAgIC8vIENyZWF0ZSBhbmQgYXBwZW5kIHNlbGVjdCBsaXN0XG4gICAgICAgIGNvbnN0IHNlbGVjdExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKVxuXG4gICAgICAgIHNlbGVjdExpc3QuaWQgPSAnZmFicmljYXNoYXBlU2hhcGVDaG9pY2VzJ1xuICAgICAgICBjYW52YXNob2xkZXIucGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZChzZWxlY3RMaXN0KVxuXG4gICAgICAgIC8vIENyZWF0ZSBhbmQgYXBwZW5kIHRoZSBvcHRpb25zXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hvaWNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcblxuICAgICAgICAgICAgb3B0aW9uLnZhbHVlID0gY2hvaWNlc1tpXS5sYWJlbFxuICAgICAgICAgICAgb3B0aW9uLnRleHQgPSBjaG9pY2VzW2ldLmxhYmVsXG4gICAgICAgICAgICBvcHRpb24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY2hvaWNlc1tpXS5jb2xvclxuICAgICAgICAgICAgc2VsZWN0TGlzdC5hcHBlbmRDaGlsZChvcHRpb24pXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNlbGVjdExpc3RcbiAgICB9XG5cbiAgICBzZXRTaGFwZUNob2ljZXMoY2hvaWNlcykge1xuICAgICAgICBjb25zdCBzZWxlY3RPYmplY3QgPSB0aGlzLmxpc3RUb1NlbGVjdERPTShjaG9pY2VzKVxuXG4gICAgICAgIHRoaXMuY3JlYXRlUmVmZXJlbmNlTGluZShzZWxlY3RPYmplY3QpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIGxpbmUgdXNlciBjYW4gY2xpY2sgb24gdG8gZHVwbGljYXRlIGl0IGFuZCB1c2UgdGhlIGR1cGxpY2F0ZSBpbnRvIHRoZSBzY2VuZS5cbiAgICAgKi9cbiAgICBjcmVhdGVSZWZlcmVuY2VMaW5lKHNlbGVjdE9iamVjdCkge1xuICAgICAgICBjb25zdCByZWZlcmVuY2VMaW5lID0gbmV3IGZhYnJpYy5SZWN0KHtcbiAgICAgICAgICAgIHRvcDogNSwgbGVmdDogNSwgd2lkdGg6IDgwLCBoZWlnaHQ6IDE3LFxuICAgICAgICAgICAgZmlsbDogc2VsZWN0T2JqZWN0Lm9wdGlvbnNbc2VsZWN0T2JqZWN0LnNlbGVjdGVkSW5kZXhdLnN0eWxlLmJhY2tncm91bmRDb2xvclxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuYWRkKHJlZmVyZW5jZUxpbmUpXG4gICAgICAgIHRoaXMuaXRlbSh0aGlzLnNpemUoKSAtIDEpLmhhc0NvbnRyb2xzID0gZmFsc2VcbiAgICAgICAgdGhpcy5yZXF1ZXN0UmVuZGVyQWxsKClcblxuICAgICAgICBjb25zdCBmaWxsUmVmZXJlbmNlTGluZSA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXNcbiAgICAgICAgICAgICAgICAuaXRlbSh0aGlzLnNpemUoKSAtIDEpXG4gICAgICAgICAgICAgICAgLnNldCgnZmlsbCcsIHNlbGVjdE9iamVjdC5vcHRpb25zW3NlbGVjdE9iamVjdC5zZWxlY3RlZEluZGV4XS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IpXG4gICAgICAgICAgICB0aGlzLnJlbmRlckFsbCgpXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBkdXBsaWNhdGVSZWZlcmVuY2VMaW5lID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVSZWZlcmVuY2VMaW5lKHNlbGVjdE9iamVjdClcbiAgICAgICAgICAgIHJlZmVyZW5jZUxpbmUuaGFzQ29udHJvbHMgPSB0cnVlXG4gICAgICAgICAgICBDb25zdGFudHMuUkVDVF9ESVNBQkxFRF9DT05UUk9MUy5mb3JFYWNoKChjb250cm9sKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVmZXJlbmNlTGluZS5zZXRDb250cm9sVmlzaWJsZShjb250cm9sLCBmYWxzZSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICByZWZlcmVuY2VMaW5lLm9uKCdtb3VzZWRvd24nLCAoKSA9PiB7XG4gICAgICAgICAgICBkdXBsaWNhdGVSZWZlcmVuY2VMaW5lKClcbiAgICAgICAgICAgIHJlZmVyZW5jZUxpbmUub2ZmKCdtb3VzZWRvd24nKVxuICAgICAgICB9KVxuXG4gICAgICAgIHNlbGVjdE9iamVjdC5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmaWxsUmVmZXJlbmNlTGluZSlcbiAgICAgICAgc2VsZWN0T2JqZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZpbGxSZWZlcmVuY2VMaW5lKVxuICAgIH1cblxuICAgIGNyZWF0ZVNjYWxlZExpbmUob3B0aW9ucykge1xuICAgICAgICBjb25zdCBzY2FsZSA9ICh0aGlzLnNjYWxlLnNoYXBlLndpZHRoICogdGhpcy5zY2FsZS5zaGFwZS5zY2FsZVgpIC8gdGhpcy5zY2FsZS52YWx1ZVxuXG4gICAgICAgIG9wdGlvbnMudG9wID0gb3B0aW9ucy50b3AgKiBzY2FsZVxuICAgICAgICBvcHRpb25zLmxlZnQgPSBvcHRpb25zLmxlZnQgKiBzY2FsZVxuICAgICAgICBvcHRpb25zLndpZHRoID0gb3B0aW9ucy53aWR0aCAqIHNjYWxlXG4gICAgICAgIG9wdGlvbnMuaGVpZ2h0ID0gb3B0aW9ucy5zdHJva2UgKiBzY2FsZVxuXG4gICAgICAgIHJldHVybiBuZXcgTGluZShvcHRpb25zKVxuICAgIH1cblxufVxuIiwiLy8gY29udHJvbHM6ICd0bCcsICd0cicsICdicicsICdibCcsICdtbCcsICdtdCcsICdtcicsICdtYicsICdtdHInXG5leHBvcnQgY29uc3QgQ29uc3RhbnRzID0ge1xuICAgIFJFQ1RfRElTQUJMRURfQ09OVFJPTFM6IFsgJ3RsJywgJ3RyJywgJ2JsJywgJ2JyJywgJ210JywgJ21iJyBdXG59XG4iLCJpbXBvcnQge0Fycm93bGluZX0gZnJvbSAnLi9hcnJvd2xpbmUuanMnO1xuaW1wb3J0IHtDYW52YXN9IGZyb20gJy4vY2FudmFzLmpzJztcbmltcG9ydCB7TGluZX0gZnJvbSAnLi9saW5lLmpzJztcbmltcG9ydCB7Q29uc3RhbnRzfSBmcm9tICcuL2NvbnN0YW50cy5qcyc7XG5leHBvcnQge0Fycm93bGluZSwgQ2FudmFzLCBMaW5lLCBDb25zdGFudHN9O1xuIiwiaW1wb3J0IHtmYWJyaWN9IGZyb20gJ2ZhYnJpYydcbmltcG9ydCB7Q29uc3RhbnRzfSBmcm9tICcuL2NvbnN0YW50cydcblxuZXhwb3J0IGNvbnN0IExpbmUgPSBmYWJyaWMudXRpbC5jcmVhdGVDbGFzcyhmYWJyaWMuUmVjdCwge1xuXG4gICAgdHlwZTogJ2xpbmUnLFxuICAgIGNvbXBvbmVudHM6IFtdLFxuICAgIGhhc0NvbnRyb2xzOiB0cnVlLFxuXG4gICAgaW5pdGlhbGl6ZTogZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgb3B0aW9ucyB8fCAob3B0aW9ucyA9IHsgfSk7XG4gICAgICAgIHRoaXMuY2FsbFN1cGVyKCdpbml0aWFsaXplJywgb3B0aW9ucyk7XG5cbiAgICAgICAgdGhpcy5ib2R5RmlsbCA9IG9wdGlvbnMuZmlsbCB8fCAnJ1xuICAgICAgICBpZiAob3B0aW9ucy5oYXNPd25Qcm9wZXJ0eSgnYm9keUZpbGwnKSkge1xuICAgICAgICAgICAgdGhpcy5ib2R5RmlsbCA9IG9wdGlvbnMuYm9keUZpbGxcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmJvZHlUZXh0ID0gb3B0aW9ucy50ZXh0IHx8ICcnXG4gICAgICAgIGlmIChvcHRpb25zLmhhc093blByb3BlcnR5KCdib2R5VGV4dCcpKSB7XG4gICAgICAgICAgICB0aGlzLmJvZHlUZXh0ID0gb3B0aW9ucy5ib2R5VGV4dFxuICAgICAgICB9XG4gICAgICAgIENvbnN0YW50cy5SRUNUX0RJU0FCTEVEX0NPTlRST0xTLmZvckVhY2goKGNvbnRyb2wpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0Q29udHJvbFZpc2libGUoY29udHJvbCwgZmFsc2UpXG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuc2V0KCdmaWxsJywgJ3RyYW5zcGFyZW50JylcblxuICAgICAgICB0aGlzLm9uKFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICdhZGRlZCc6IHRoaXMuX2luaXRDb21wb25lbnRzLFxuICAgICAgICAgICAgICAgICdtb2RpZmllZCc6IHRoaXMuX3NldENvbXBvbmVudHNQb3NpdGlvbixcbiAgICAgICAgICAgICAgICAnc2NhbGluZyc6IHRoaXMuX3NldENvbXBvbmVudHNQb3NpdGlvbixcbiAgICAgICAgICAgICAgICAnbW92aW5nJzogdGhpcy5fc2V0Q29tcG9uZW50c1Bvc2l0aW9uLFxuICAgICAgICAgICAgICAgICdyb3RhdGluZyc6IHRoaXMuX3NldENvbXBvbmVudHNQb3NpdGlvblxuICAgICAgICAgICAgfVxuICAgICAgICApXG4gICAgfSxcblxuICAgIF9pbml0Q29tcG9uZW50czogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnRleHQgPSBuZXcgZmFicmljLlRleHQoJycsIHt2aXNpYmxlOiBmYWxzZX0pXG4gICAgICAgIHRoaXMuYm9keSA9IG5ldyBmYWJyaWMuUmVjdCh7XG4gICAgICAgICAgICB3aWR0aDogdGhpcy53aWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogdGhpcy5oZWlnaHQsXG4gICAgICAgICAgICB0b3A6IHRoaXMudG9wLFxuICAgICAgICAgICAgbGVmdDogdGhpcy5sZWZ0LFxuICAgICAgICAgICAgZmlsbDogdGhpcy5ib2R5RmlsbFxuICAgICAgICB9KVxuICAgICAgICB0aGlzLmNvbXBvbmVudHMgPSBbdGhpcy50ZXh0LCB0aGlzLmJvZHldXG5cbiAgICAgICAgdGhpcy5fc2V0dXBDb21wb25lbnRzKClcbiAgICAgICAgdGhpcy5zZXRUZXh0KHRoaXMuYm9keVRleHQpXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIF9zZXR1cENvbXBvbmVudHM6IGFkZCB0aGUgY29tcG9uZW50IHRvIHRoZSBjYW52YXMgYW5kIHNldCBzb21lIG9wdGlvbnNcbiAgICAgKiB0byBhdm9pZCB0aGVtIGZyb20gYmVpbmcgZXhwb3J0ZWQvc2VsZWN0ZWRcbiAgICAgKi9cbiAgICBfc2V0dXBDb21wb25lbnRzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuY29tcG9uZW50cy5mb3JFYWNoKChjb21wb25lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbXBvbmVudC5zZXQoe1xuICAgICAgICAgICAgICAgIGV4Y2x1ZGVGcm9tRXhwb3J0OiB0cnVlLFxuICAgICAgICAgICAgICAgIGhhc0NvbnRyb2xzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzZWxlY3RhYmxlOiBmYWxzZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLmFkZChjb21wb25lbnQpXG4gICAgICAgICAgICBjb21wb25lbnQuc2VuZEJhY2t3YXJkcygpXG4gICAgICAgIH0pXG4gICAgfSxcblxuICAgIF9zZXRDb21wb25lbnRzUG9zaXRpb246IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5oZWlnaHQgKiB0aGlzLnNjYWxlWSxcbiAgICAgICAgICAgIHdpZHRoID0gdGhpcy53aWR0aCAqIHRoaXMuc2NhbGVYLFxuICAgICAgICAgICAgYm91bmRpbmdSZWN0ID0gdGhpcy5nZXRCb3VuZGluZ1JlY3QoKVxuXG4gICAgICAgIGlmICh0aGlzLnRleHQpIHtcbiAgICAgICAgICAgIHRoaXMudGV4dC5zZXQoe1xuICAgICAgICAgICAgICAgIHRvcDogYm91bmRpbmdSZWN0LnRvcCArIDAuNSAqIChib3VuZGluZ1JlY3QuaGVpZ2h0IC0gdGhpcy50ZXh0LmhlaWdodCksXG4gICAgICAgICAgICAgICAgbGVmdDogYm91bmRpbmdSZWN0LmxlZnQgKyAwLjUgKiAoYm91bmRpbmdSZWN0LndpZHRoIC0gdGhpcy50ZXh0LndpZHRoKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYm9keS5zZXQoe1xuICAgICAgICAgICAgdG9wOiB0aGlzLnRvcCxcbiAgICAgICAgICAgIGxlZnQ6IHRoaXMubGVmdCxcbiAgICAgICAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAgICAgICAgYW5nbGU6IHRoaXMuYW5nbGVcbiAgICAgICAgfSlcblxuICAgIH0sXG5cbiAgICBnZXRDb21wb25lbnRzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbXBvbmVudHNcbiAgICB9LFxuXG4gICAgc2V0VGV4dDogZnVuY3Rpb24gKHRleHQpIHtcbiAgICAgICAgdGhpcy5ib2R5VGV4dCA9IHRleHRcbiAgICAgICAgaWYgKHRleHQuc2xpY2UoLTEpICE9PSAnbScpIHtcbiAgICAgICAgICAgIHRleHQgKz0gJ20nXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50ZXh0LnNldCh7XG4gICAgICAgICAgICB0ZXh0OiB0ZXh0XG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuX3NldENvbXBvbmVudHNQb3NpdGlvbigpXG4gICAgfSxcblxuICAgIF9yZW5kZXI6IGZ1bmN0aW9uIChjdHgpIHtcbiAgICAgICAgdGhpcy5jYWxsU3VwZXIoJ19yZW5kZXInLCBjdHgpO1xuICAgIH0sXG5cbiAgICB0b09iamVjdDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZmFicmljLnV0aWwub2JqZWN0LmV4dGVuZCh0aGlzLmNhbGxTdXBlcigndG9PYmplY3QnKSwge1xuICAgICAgICAgICAgYm9keUZpbGw6IHRoaXMuZ2V0KCdib2R5RmlsbCcpLFxuICAgICAgICAgICAgYm9keVRleHQ6IHRoaXMuZ2V0KCdib2R5VGV4dCcpXG4gICAgICAgIH0pO1xuICAgIH1cblxufSlcblxuZmFicmljLkxpbmUgPSBMaW5lXG5cbmZhYnJpYy5MaW5lLmZyb21PYmplY3QgPSBmdW5jdGlvbiAob2JqZWN0LCBjYWxsYmFjaykge1xuICAgIHJldHVybiBmYWJyaWMuT2JqZWN0Ll9mcm9tT2JqZWN0KCdMaW5lJywgb2JqZWN0LCBjYWxsYmFjayk7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ZhYnJpY19fOyJdLCJzb3VyY2VSb290IjoiIn0=