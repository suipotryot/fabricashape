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
    key: "remove",
    value: function remove(objects) {
      console.log('biche');

      if (Array.isArray(objects)) {
        objects.forEach(function (object) {
          if (object.hasOwnProperty('clear')) {
            object.clear();
          }
        });
      } else {
        if (objects.hasOwnProperty('clear')) {
          objects.clear();
        }
      }

      this.callSuper('remove', objects);
    }
  }, {
    key: "clearScale",
    value: function clearScale() {}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mYWJyaWNhc2hhcGUvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2ZhYnJpY2FzaGFwZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9mYWJyaWNhc2hhcGUvLi9zcmMvYXJyb3dsaW5lLmpzIiwid2VicGFjazovL2ZhYnJpY2FzaGFwZS8uL3NyYy9jYW52YXMuanMiLCJ3ZWJwYWNrOi8vZmFicmljYXNoYXBlLy4vc3JjL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9mYWJyaWNhc2hhcGUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZmFicmljYXNoYXBlLy4vc3JjL2xpbmUuanMiLCJ3ZWJwYWNrOi8vZmFicmljYXNoYXBlL2V4dGVybmFsIFwiZmFicmljXCIiXSwibmFtZXMiOlsiQXJyb3dsaW5lIiwidXRpbCIsImNyZWF0ZUNsYXNzIiwidHlwZSIsIl9pbml0Q29tcG9uZW50cyIsInRleHQiLCJUZXh0IiwiYm9keVRleHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib2R5IiwiUmVjdCIsImZpbGwiLCJib2R5RmlsbCIsImxlZnRUcmlhbmdsZSIsIlRyaWFuZ2xlIiwicmlnaHRUcmlhbmdsZSIsIl9zZXRDb21wb25lbnRzUG9zaXRpb24iLCJjb21wb25lbnRzIiwiX3NldHVwQ29tcG9uZW50cyIsInNldFRleHQiLCJkZWdyZWVzVG9SYWRpYW5zUmF0aW8iLCJNYXRoIiwiUEkiLCJoZWlnaHQiLCJzY2FsZVkiLCJ3aWR0aCIsInNjYWxlWCIsImNvc1RldGEiLCJjb3MiLCJhbmdsZSIsInNpblRldGEiLCJzaW4iLCJib3VuZGluZ1JlY3QiLCJnZXRCb3VuZGluZ1JlY3QiLCJzZXQiLCJ0b3AiLCJsZWZ0IiwiZm9udFNpemUiLCJmcm9tT2JqZWN0Iiwib2JqZWN0IiwiY2FsbGJhY2siLCJPYmplY3QiLCJfZnJvbU9iamVjdCIsIkNhbnZhcyIsImRvbUVsZW1lbmRJZCIsInNjYWxlIiwidmFsdWUiLCJzaGFwZSIsImN1c3RvbUJhY2tncm91bmRJbWFnZSIsImltYWdlRmlsZSIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJpbWciLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzcmMiLCJyZXN1bHQiLCJJbWFnZSIsImFkZCIsInJlbmRlckFsbCIsInJlYWRBc0RhdGFVUkwiLCJzZW5kVG9CYWNrIiwiaGFzQ29udHJvbHMiLCJzZWxlY3RhYmxlIiwiZGlzY2FyZEFjdGl2ZU9iamVjdCIsIm9uIiwiZSIsIm9iaiIsInRhcmdldCIsImN1cnJlbnRIZWlnaHQiLCJjdXJyZW50V2lkdGgiLCJzZXRDb29yZHMiLCJtYXgiLCJtaW4iLCJzY2FsZURlZmluaXRpb24iLCJvYmplY3RzIiwiY29uc29sZSIsImxvZyIsIkFycmF5IiwiaXNBcnJheSIsImZvckVhY2giLCJoYXNPd25Qcm9wZXJ0eSIsImNsZWFyIiwiY2FsbFN1cGVyIiwiY2hvaWNlcyIsImNhbnZhc2hvbGRlciIsImdldEVsZW1lbnRCeUlkIiwic2VsZWN0TGlzdCIsImlkIiwicGFyZW50RWxlbWVudCIsImFwcGVuZENoaWxkIiwiaSIsImxlbmd0aCIsIm9wdGlvbiIsImxhYmVsIiwic3R5bGUiLCJjb2xvciIsInNlbGVjdE9iamVjdCIsImxpc3RUb1NlbGVjdERPTSIsImNyZWF0ZVJlZmVyZW5jZUxpbmUiLCJyZWZlcmVuY2VMaW5lIiwib3B0aW9ucyIsInNlbGVjdGVkSW5kZXgiLCJpdGVtIiwic2l6ZSIsInJlcXVlc3RSZW5kZXJBbGwiLCJmaWxsUmVmZXJlbmNlTGluZSIsImR1cGxpY2F0ZVJlZmVyZW5jZUxpbmUiLCJSRUNUX0RJU0FCTEVEX0NPTlRST0xTIiwiY29udHJvbCIsInNldENvbnRyb2xWaXNpYmxlIiwib2ZmIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdHJva2UiLCJDb25zdGFudHMiLCJMaW5lIiwiaW5pdGlhbGl6ZSIsInZpc2libGUiLCJjb21wb25lbnQiLCJleGNsdWRlRnJvbUV4cG9ydCIsImNhbnZhcyIsInNlbmRCYWNrd2FyZHMiLCJnZXRDb21wb25lbnRzIiwic2xpY2UiLCJfcmVuZGVyIiwiY3R4IiwicmVtb3ZlIiwidG9PYmplY3QiLCJleHRlbmQiLCJnZXQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTs7QUFDQTs7QUFFQTs7OztBQUlPLElBQU1BLFNBQVMsR0FBRyxlQUFPQyxJQUFQLENBQVlDLFdBQVosYUFBOEI7QUFFbkRDLE1BQUksRUFBRSxXQUY2QztBQUluREMsaUJBQWUsRUFBRSwyQkFBWTtBQUN6QixTQUFLQyxJQUFMLEdBQVksSUFBSSxlQUFPQyxJQUFYLENBQWdCLEtBQUtDLFFBQXJCLEVBQStCO0FBQUNDLHFCQUFlLEVBQUU7QUFBbEIsS0FBL0IsQ0FBWjtBQUNB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RCxTQUFLQSxJQUFMLENBQVU2QixHQUFWLENBQWM7QUFDVjdCLFVBQUksRUFBRUE7QUFESSxLQUFkOztBQUdBLFNBQUtXLHNCQUFMO0FBQ0gsR0FwR29EO0FBc0dyRDhHLFNBQU8sRUFBRSxpQkFBVUMsR0FBVixFQUFlO0FBQ3BCLFNBQUszQyxTQUFMLENBQWUsU0FBZixFQUEwQjJDLEdBQTFCO0FBQ0gsR0F4R29EO0FBMEdyRDVDLE9BQUssRUFBRSxpQkFBWTtBQUNmLFNBQUt1QyxNQUFMLENBQVlNLE1BQVosQ0FBbUIsS0FBSy9HLFVBQXhCO0FBQ0gsR0E1R29EO0FBOEdyRGdILFVBQVEsRUFBRSxvQkFBWTtBQUNsQixXQUFPLGVBQU9oSSxJQUFQLENBQVlzQyxNQUFaLENBQW1CMkYsTUFBbkIsQ0FBMEIsS0FBSzlDLFNBQUwsQ0FBZSxVQUFmLENBQTFCLEVBQXNEO0FBQ3pEeEUsY0FBUSxFQUFFLEtBQUt1SCxHQUFMLENBQVMsVUFBVCxDQUQrQztBQUV6RDVILGNBQVEsRUFBRSxLQUFLNEgsR0FBTCxDQUFTLFVBQVQ7QUFGK0MsS0FBdEQsQ0FBUDtBQUlIO0FBbkhvRCxDQUFyQyxDQUFiOzs7QUF1SFAsZUFBT2QsSUFBUCxHQUFjQSxJQUFkOztBQUVBLGVBQU9BLElBQVAsQ0FBWS9FLFVBQVosR0FBeUIsVUFBVUMsTUFBVixFQUFrQkMsUUFBbEIsRUFBNEI7QUFDakQsU0FBTyxlQUFPQyxNQUFQLENBQWNDLFdBQWQsQ0FBMEIsTUFBMUIsRUFBa0NILE1BQWxDLEVBQTBDQyxRQUExQyxDQUFQO0FBQ0gsQ0FGRCxDOzs7Ozs7Ozs7OztBQzVIQSxvRCIsImZpbGUiOiJmYWJyaWNhc2hhcGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJmYWJyaWNcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJmYWJyaWNhc2hhcGVcIiwgW1wiZmFicmljXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImZhYnJpY2FzaGFwZVwiXSA9IGZhY3RvcnkocmVxdWlyZShcImZhYnJpY1wiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiZmFicmljYXNoYXBlXCJdID0gZmFjdG9yeShyb290W1wiZmFicmljXCJdKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ZhYnJpY19fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQge2ZhYnJpY30gZnJvbSAnZmFicmljJ1xuaW1wb3J0IHtMaW5lfSBmcm9tICcuL2xpbmUnXG5cbi8qKlxuICogQW4gQXJyb3dsaW5lIGlzIGEgZ3JvdXAgdGhhdCBsb29rcyBsaWtlIGEgZG91YmxlIGFycm93ZWQgbGluZTpcbiAqICAgICAgIDwtLS0tLS0tPlxuICovXG5leHBvcnQgY29uc3QgQXJyb3dsaW5lID0gZmFicmljLnV0aWwuY3JlYXRlQ2xhc3MoTGluZSwge1xuXG4gICAgdHlwZTogJ2Fycm93bGluZScsXG5cbiAgICBfaW5pdENvbXBvbmVudHM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy50ZXh0ID0gbmV3IGZhYnJpYy5UZXh0KHRoaXMuYm9keVRleHQsIHtiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZSd9KVxuICAgICAgICB0aGlzLmJvZHkgPSBuZXcgZmFicmljLlJlY3Qoe2ZpbGw6IHRoaXMuYm9keUZpbGx9KVxuICAgICAgICB0aGlzLmxlZnRUcmlhbmdsZSA9IG5ldyBmYWJyaWMuVHJpYW5nbGUoe2ZpbGw6IHRoaXMuYm9keUZpbGx9KVxuICAgICAgICB0aGlzLnJpZ2h0VHJpYW5nbGUgPSBuZXcgZmFicmljLlRyaWFuZ2xlKHtmaWxsOiB0aGlzLmJvZHlGaWxsfSlcblxuICAgICAgICB0aGlzLl9zZXRDb21wb25lbnRzUG9zaXRpb24oKVxuXG4gICAgICAgIHRoaXMuY29tcG9uZW50cyA9IFt0aGlzLmJvZHksIHRoaXMubGVmdFRyaWFuZ2xlLCB0aGlzLnJpZ2h0VHJpYW5nbGUsIHRoaXMudGV4dF1cblxuICAgICAgICB0aGlzLl9zZXR1cENvbXBvbmVudHMoKVxuICAgICAgICB0aGlzLnNldFRleHQodGhpcy5ib2R5VGV4dClcbiAgICB9LFxuXG4gICAgX3NldENvbXBvbmVudHNQb3NpdGlvbjogZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBkZWdyZWVzVG9SYWRpYW5zUmF0aW8gPSBNYXRoLlBJIC8gMTgwLFxuICAgICAgICAgICAgaGVpZ2h0ID0gdGhpcy5oZWlnaHQgKiB0aGlzLnNjYWxlWSxcbiAgICAgICAgICAgIHdpZHRoID0gdGhpcy53aWR0aCAqIHRoaXMuc2NhbGVYLFxuICAgICAgICAgICAgY29zVGV0YSA9IE1hdGguY29zKHRoaXMuYW5nbGUgKiBkZWdyZWVzVG9SYWRpYW5zUmF0aW8pLFxuICAgICAgICAgICAgc2luVGV0YSA9IE1hdGguc2luKHRoaXMuYW5nbGUgKiBkZWdyZWVzVG9SYWRpYW5zUmF0aW8pLFxuICAgICAgICAgICAgYm91bmRpbmdSZWN0ID0gdGhpcy5nZXRCb3VuZGluZ1JlY3QoKVxuXG4gICAgICAgIHRoaXMudGV4dC5zZXQoe1xuICAgICAgICAgICAgdG9wOiBib3VuZGluZ1JlY3QudG9wICsgMC41ICogKGJvdW5kaW5nUmVjdC5oZWlnaHQgLSB0aGlzLnRleHQuaGVpZ2h0KSxcbiAgICAgICAgICAgIGxlZnQ6IGJvdW5kaW5nUmVjdC5sZWZ0ICsgMC41ICogKGJvdW5kaW5nUmVjdC53aWR0aCAtIHRoaXMudGV4dC53aWR0aCksXG4gICAgICAgICAgICBmb250U2l6ZTogMThcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLmJvZHkuc2V0KHtcbiAgICAgICAgICAgIHRvcDogdGhpcy50b3AgKyBoZWlnaHQgKiBzaW5UZXRhICsgKGhlaWdodCAvIDQpICogY29zVGV0YSxcbiAgICAgICAgICAgIGxlZnQ6IHRoaXMubGVmdCArIGhlaWdodCAqIGNvc1RldGEgLSAoaGVpZ2h0IC8gNCkgKiBzaW5UZXRhLFxuICAgICAgICAgICAgd2lkdGg6IHdpZHRoIC0gMiAqIGhlaWdodCxcbiAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0IC8gMixcbiAgICAgICAgICAgIGFuZ2xlOiB0aGlzLmFuZ2xlXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5sZWZ0VHJpYW5nbGUuc2V0KHtcbiAgICAgICAgICAgIHRvcDogdGhpcy50b3AgKyBoZWlnaHQgKiBjb3NUZXRhLFxuICAgICAgICAgICAgbGVmdDogdGhpcy5sZWZ0IC0gaGVpZ2h0ICogc2luVGV0YSxcbiAgICAgICAgICAgIHdpZHRoOiBoZWlnaHQsXG4gICAgICAgICAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICAgICAgICAgIGFuZ2xlOiB0aGlzLmFuZ2xlIC0gOTBcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLnJpZ2h0VHJpYW5nbGUuc2V0KHtcbiAgICAgICAgICAgIHRvcDogdGhpcy50b3AgKyB3aWR0aCAqIHNpblRldGEsXG4gICAgICAgICAgICBsZWZ0OiB0aGlzLmxlZnQgKyB3aWR0aCAqIGNvc1RldGEsXG4gICAgICAgICAgICB3aWR0aDogaGVpZ2h0LFxuICAgICAgICAgICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgICAgICAgICBhbmdsZTogdGhpcy5hbmdsZSArIDkwXG4gICAgICAgIH0pXG4gICAgfVxuXG59KVxuXG5mYWJyaWMuQXJyb3dsaW5lID0gQXJyb3dsaW5lXG5cbmZhYnJpYy5BcnJvd2xpbmUuZnJvbU9iamVjdCA9IGZ1bmN0aW9uIChvYmplY3QsIGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIGZhYnJpYy5PYmplY3QuX2Zyb21PYmplY3QoJ0Fycm93bGluZScsIG9iamVjdCwgY2FsbGJhY2spO1xufTtcbiIsImltcG9ydCB7ZmFicmljfSBmcm9tICdmYWJyaWMnXG5pbXBvcnQge0NvbnN0YW50c30gZnJvbSAnLi9jb25zdGFudHMnXG5pbXBvcnQge0xpbmV9IGZyb20gJy4vbGluZSdcblxuZXhwb3J0IGNsYXNzIENhbnZhcyBleHRlbmRzIGZhYnJpYy5DYW52YXMge1xuXG4gICAgY29uc3RydWN0b3IoZG9tRWxlbWVuZElkKSB7XG4gICAgICAgIHN1cGVyKGRvbUVsZW1lbmRJZClcbiAgICAgICAgdGhpcy5kb21FbGVtZW5kSWQgPSBkb21FbGVtZW5kSWRcbiAgICAgICAgdGhpcy5zY2FsZSA9IHt2YWx1ZTogbnVsbCwgc2hhcGU6IG51bGx9XG4gICAgICAgIHRoaXMuY3VzdG9tQmFja2dyb3VuZEltYWdlID0gbnVsbFxuICAgICAgICAvLyB0aGlzLl9sb2NrT2JqZWN0c1RvQm91bmRhcmllcygpXG4gICAgfVxuXG4gICAgYWRkSW1hZ2UoaW1hZ2VGaWxlKSB7XG4gICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKClcblxuICAgICAgICByZWFkZXIub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcblxuICAgICAgICAgICAgaW1nLnNyYyA9IHJlYWRlci5yZXN1bHRcblxuICAgICAgICAgICAgdGhpcy5jdXN0b21CYWNrZ3JvdW5kSW1hZ2UgPSBuZXcgZmFicmljLkltYWdlKGltZylcbiAgICAgICAgICAgIHRoaXMuY3VzdG9tQmFja2dyb3VuZEltYWdlLnNjYWxlKHRoaXMuaGVpZ2h0IC8gdGhpcy5jdXN0b21CYWNrZ3JvdW5kSW1hZ2UuaGVpZ2h0KVxuICAgICAgICAgICAgdGhpcy5hZGQodGhpcy5jdXN0b21CYWNrZ3JvdW5kSW1hZ2UpXG4gICAgICAgICAgICB0aGlzLnJlbmRlckFsbCgpXG4gICAgICAgIH07XG5cbiAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoaW1hZ2VGaWxlKTtcbiAgICB9XG5cbiAgICBsb2NrSW1hZ2UoKSB7XG4gICAgICAgIHRoaXMuY3VzdG9tQmFja2dyb3VuZEltYWdlLnNlbmRUb0JhY2soKVxuICAgICAgICB0aGlzLmN1c3RvbUJhY2tncm91bmRJbWFnZS5oYXNDb250cm9scyA9IGZhbHNlXG4gICAgICAgIHRoaXMuY3VzdG9tQmFja2dyb3VuZEltYWdlLnNlbGVjdGFibGUgPSBmYWxzZVxuICAgICAgICB0aGlzLmRpc2NhcmRBY3RpdmVPYmplY3QoKTtcbiAgICAgICAgdGhpcy5yZW5kZXJBbGwoKVxuICAgIH1cblxuICAgIF9sb2NrT2JqZWN0c1RvQm91bmRhcmllcygpIHtcbiAgICAgICAgdGhpcy5vbignb2JqZWN0Om1vdmluZycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICB2YXIgb2JqID0gZS50YXJnZXQ7XG5cbiAgICAgICAgICAgIC8vIGlmIG9iamVjdCBpcyB0b28gYmlnIGlnbm9yZVxuICAgICAgICAgICAgaWYgKG9iai5jdXJyZW50SGVpZ2h0ID4gdGhpcy5oZWlnaHQgfHwgb2JqLmN1cnJlbnRXaWR0aCA+IHRoaXMud2lkdGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvYmouc2V0Q29vcmRzKCk7XG4gICAgICAgICAgICAvLyB0b3AtbGVmdCAgY29ybmVyXG4gICAgICAgICAgICBpZiAob2JqLmdldEJvdW5kaW5nUmVjdCgpLnRvcCA8IDAgfHwgb2JqLmdldEJvdW5kaW5nUmVjdCgpLmxlZnQgPCAwKSB7XG4gICAgICAgICAgICAgICAgb2JqLnRvcCA9IE1hdGgubWF4KG9iai50b3AsIG9iai50b3AgLSBvYmouZ2V0Qm91bmRpbmdSZWN0KCkudG9wKTtcbiAgICAgICAgICAgICAgICBvYmoubGVmdCA9IE1hdGgubWF4KG9iai5sZWZ0LCBvYmoubGVmdCAtIG9iai5nZXRCb3VuZGluZ1JlY3QoKS5sZWZ0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGJvdC1yaWdodCBjb3JuZXJcbiAgICAgICAgICAgIGlmIChvYmouZ2V0Qm91bmRpbmdSZWN0KCkudG9wICsgb2JqLmdldEJvdW5kaW5nUmVjdCgpLmhlaWdodCA+IHRoaXMuaGVpZ2h0IHx8XG4gICAgICAgICAgICAgICAgICAgIG9iai5nZXRCb3VuZGluZ1JlY3QoKS5sZWZ0ICsgb2JqLmdldEJvdW5kaW5nUmVjdCgpLndpZHRoID4gdGhpcy53aWR0aCkge1xuICAgICAgICAgICAgICAgIG9iai50b3AgPSBNYXRoLm1pbihvYmoudG9wLCB0aGlzLmhlaWdodCAtIG9iai5nZXRCb3VuZGluZ1JlY3QoKS5oZWlnaHQgK1xuICAgICAgICAgICAgICAgICAgICBvYmoudG9wIC0gb2JqLmdldEJvdW5kaW5nUmVjdCgpLnRvcCk7XG4gICAgICAgICAgICAgICAgb2JqLmxlZnQgPSBNYXRoLm1pbihvYmoubGVmdCwgdGhpcy53aWR0aCAtIG9iai5nZXRCb3VuZGluZ1JlY3QoKS53aWR0aCArXG4gICAgICAgICAgICAgICAgICAgIG9iai5sZWZ0IC0gb2JqLmdldEJvdW5kaW5nUmVjdCgpLmxlZnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzZXRTY2FsZShzY2FsZURlZmluaXRpb24pIHtcbiAgICAgICAgaWYgKHNjYWxlRGVmaW5pdGlvbi5zaGFwZSkge1xuICAgICAgICAgICAgdGhpcy5zY2FsZS5zaGFwZSA9IHNjYWxlRGVmaW5pdGlvbi5zaGFwZVxuICAgICAgICAgICAgdGhpcy5zY2FsZS5zaGFwZS5oYXNDb250cm9scyA9IGZhbHNlXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNjYWxlRGVmaW5pdGlvbi52YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5zY2FsZS52YWx1ZSA9IHNjYWxlRGVmaW5pdGlvbi52YWx1ZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0U2NhbGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNjYWxlXG4gICAgfVxuXG4gICAgbG9ja1NjYWxlKCkge1xuICAgICAgICB0aGlzLnNjYWxlLnNoYXBlLmhhc0NvbnRyb2xzID0gZmFsc2VcbiAgICB9XG5cbiAgICByZW1vdmUob2JqZWN0cykge1xuICAgICAgICBjb25zb2xlLmxvZygnYmljaGUnKVxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShvYmplY3RzKSkge1xuICAgICAgICAgICAgb2JqZWN0cy5mb3JFYWNoKChvYmplY3QpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAob2JqZWN0Lmhhc093blByb3BlcnR5KCdjbGVhcicpKSB7XG4gICAgICAgICAgICAgICAgICAgIG9iamVjdC5jbGVhcigpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChvYmplY3RzLmhhc093blByb3BlcnR5KCdjbGVhcicpKSB7XG4gICAgICAgICAgICAgICAgb2JqZWN0cy5jbGVhcigpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jYWxsU3VwZXIoJ3JlbW92ZScsIG9iamVjdHMpXG4gICAgfVxuXG4gICAgY2xlYXJTY2FsZSgpIHtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIEBwYXJhbSBjaG9pY2VzOiBhIGxpc3Qgb2YgKGxhYmVsLCBjb2xvcilcbiAgICAgKiAgZXhhbXBsZTogW1xuICAgICAqICAgICAge2xhYmVsOiAnbGFiZWwxJywgY29sb3I6ICdibHVlJ30sXG4gICAgICogICAgICB7bGFiZWw6ICdsYWJlbDInLCBjb2xvcjogJ3JnYmEoMjU1LDAsMCwwLjUpJ31cbiAgICAgKiAgIF1cbiAgICAgKiBAcmV0dXJuIGEgRE9NIHNlbGVjdCBvYmplY3Qgd2l0aCBjb3JyZXNwb25kaW5nIG9wdGlvbnNcbiAgICAgKi9cbiAgICBsaXN0VG9TZWxlY3RET00oY2hvaWNlcykge1xuICAgICAgICBjb25zdCBjYW52YXNob2xkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmRvbUVsZW1lbmRJZClcblxuICAgICAgICAvLyBDcmVhdGUgYW5kIGFwcGVuZCBzZWxlY3QgbGlzdFxuICAgICAgICBjb25zdCBzZWxlY3RMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0JylcblxuICAgICAgICBzZWxlY3RMaXN0LmlkID0gJ2ZhYnJpY2FzaGFwZVNoYXBlQ2hvaWNlcydcbiAgICAgICAgY2FudmFzaG9sZGVyLnBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoc2VsZWN0TGlzdClcblxuICAgICAgICAvLyBDcmVhdGUgYW5kIGFwcGVuZCB0aGUgb3B0aW9uc1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNob2ljZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXG5cbiAgICAgICAgICAgIG9wdGlvbi52YWx1ZSA9IGNob2ljZXNbaV0ubGFiZWxcbiAgICAgICAgICAgIG9wdGlvbi50ZXh0ID0gY2hvaWNlc1tpXS5sYWJlbFxuICAgICAgICAgICAgb3B0aW9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNob2ljZXNbaV0uY29sb3JcbiAgICAgICAgICAgIHNlbGVjdExpc3QuYXBwZW5kQ2hpbGQob3B0aW9uKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzZWxlY3RMaXN0XG4gICAgfVxuXG4gICAgc2V0U2hhcGVDaG9pY2VzKGNob2ljZXMpIHtcbiAgICAgICAgY29uc3Qgc2VsZWN0T2JqZWN0ID0gdGhpcy5saXN0VG9TZWxlY3RET00oY2hvaWNlcylcblxuICAgICAgICB0aGlzLmNyZWF0ZVJlZmVyZW5jZUxpbmUoc2VsZWN0T2JqZWN0KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBsaW5lIHVzZXIgY2FuIGNsaWNrIG9uIHRvIGR1cGxpY2F0ZSBpdCBhbmQgdXNlIHRoZSBkdXBsaWNhdGUgaW50byB0aGUgc2NlbmUuXG4gICAgICovXG4gICAgY3JlYXRlUmVmZXJlbmNlTGluZShzZWxlY3RPYmplY3QpIHtcbiAgICAgICAgY29uc3QgcmVmZXJlbmNlTGluZSA9IG5ldyBmYWJyaWMuUmVjdCh7XG4gICAgICAgICAgICB0b3A6IDUsIGxlZnQ6IDUsIHdpZHRoOiA4MCwgaGVpZ2h0OiAxNyxcbiAgICAgICAgICAgIGZpbGw6IHNlbGVjdE9iamVjdC5vcHRpb25zW3NlbGVjdE9iamVjdC5zZWxlY3RlZEluZGV4XS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3JcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLmFkZChyZWZlcmVuY2VMaW5lKVxuICAgICAgICB0aGlzLml0ZW0odGhpcy5zaXplKCkgLSAxKS5oYXNDb250cm9scyA9IGZhbHNlXG4gICAgICAgIHRoaXMucmVxdWVzdFJlbmRlckFsbCgpXG5cbiAgICAgICAgY29uc3QgZmlsbFJlZmVyZW5jZUxpbmUgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzXG4gICAgICAgICAgICAgICAgLml0ZW0odGhpcy5zaXplKCkgLSAxKVxuICAgICAgICAgICAgICAgIC5zZXQoJ2ZpbGwnLCBzZWxlY3RPYmplY3Qub3B0aW9uc1tzZWxlY3RPYmplY3Quc2VsZWN0ZWRJbmRleF0uc3R5bGUuYmFja2dyb3VuZENvbG9yKVxuICAgICAgICAgICAgdGhpcy5yZW5kZXJBbGwoKVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZHVwbGljYXRlUmVmZXJlbmNlTGluZSA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlUmVmZXJlbmNlTGluZShzZWxlY3RPYmplY3QpXG4gICAgICAgICAgICByZWZlcmVuY2VMaW5lLmhhc0NvbnRyb2xzID0gdHJ1ZVxuICAgICAgICAgICAgQ29uc3RhbnRzLlJFQ1RfRElTQUJMRURfQ09OVFJPTFMuZm9yRWFjaCgoY29udHJvbCkgPT4ge1xuICAgICAgICAgICAgICAgIHJlZmVyZW5jZUxpbmUuc2V0Q29udHJvbFZpc2libGUoY29udHJvbCwgZmFsc2UpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgcmVmZXJlbmNlTGluZS5vbignbW91c2Vkb3duJywgKCkgPT4ge1xuICAgICAgICAgICAgZHVwbGljYXRlUmVmZXJlbmNlTGluZSgpXG4gICAgICAgICAgICByZWZlcmVuY2VMaW5lLm9mZignbW91c2Vkb3duJylcbiAgICAgICAgfSlcblxuICAgICAgICBzZWxlY3RPYmplY3QucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZmlsbFJlZmVyZW5jZUxpbmUpXG4gICAgICAgIHNlbGVjdE9iamVjdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmaWxsUmVmZXJlbmNlTGluZSlcbiAgICB9XG5cbiAgICBjcmVhdGVTY2FsZWRMaW5lKG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3Qgc2NhbGUgPSAodGhpcy5zY2FsZS5zaGFwZS53aWR0aCAqIHRoaXMuc2NhbGUuc2hhcGUuc2NhbGVYKSAvIHRoaXMuc2NhbGUudmFsdWVcblxuICAgICAgICBvcHRpb25zLnRvcCA9IG9wdGlvbnMudG9wICogc2NhbGVcbiAgICAgICAgb3B0aW9ucy5sZWZ0ID0gb3B0aW9ucy5sZWZ0ICogc2NhbGVcbiAgICAgICAgb3B0aW9ucy53aWR0aCA9IG9wdGlvbnMud2lkdGggKiBzY2FsZVxuICAgICAgICBvcHRpb25zLmhlaWdodCA9IG9wdGlvbnMuc3Ryb2tlICogc2NhbGVcblxuICAgICAgICByZXR1cm4gbmV3IExpbmUob3B0aW9ucylcbiAgICB9XG5cbn1cbiIsIi8vIGNvbnRyb2xzOiAndGwnLCAndHInLCAnYnInLCAnYmwnLCAnbWwnLCAnbXQnLCAnbXInLCAnbWInLCAnbXRyJ1xuZXhwb3J0IGNvbnN0IENvbnN0YW50cyA9IHtcbiAgICBSRUNUX0RJU0FCTEVEX0NPTlRST0xTOiBbICd0bCcsICd0cicsICdibCcsICdicicsICdtdCcsICdtYicgXVxufVxuIiwiaW1wb3J0IHtBcnJvd2xpbmV9IGZyb20gJy4vYXJyb3dsaW5lLmpzJztcbmltcG9ydCB7Q2FudmFzfSBmcm9tICcuL2NhbnZhcy5qcyc7XG5pbXBvcnQge0xpbmV9IGZyb20gJy4vbGluZS5qcyc7XG5pbXBvcnQge0NvbnN0YW50c30gZnJvbSAnLi9jb25zdGFudHMuanMnO1xuZXhwb3J0IHtBcnJvd2xpbmUsIENhbnZhcywgTGluZSwgQ29uc3RhbnRzfTtcbiIsImltcG9ydCB7ZmFicmljfSBmcm9tICdmYWJyaWMnXG5pbXBvcnQge0NvbnN0YW50c30gZnJvbSAnLi9jb25zdGFudHMnXG5cbmV4cG9ydCBjb25zdCBMaW5lID0gZmFicmljLnV0aWwuY3JlYXRlQ2xhc3MoZmFicmljLlJlY3QsIHtcblxuICAgIHR5cGU6ICdsaW5lJyxcbiAgICBjb21wb25lbnRzOiBbXSxcbiAgICBoYXNDb250cm9sczogdHJ1ZSxcblxuICAgIGluaXRpYWxpemU6IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIG9wdGlvbnMgfHwgKG9wdGlvbnMgPSB7IH0pO1xuICAgICAgICB0aGlzLmNhbGxTdXBlcignaW5pdGlhbGl6ZScsIG9wdGlvbnMpO1xuXG4gICAgICAgIHRoaXMuYm9keUZpbGwgPSBvcHRpb25zLmZpbGwgfHwgJydcbiAgICAgICAgaWYgKG9wdGlvbnMuaGFzT3duUHJvcGVydHkoJ2JvZHlGaWxsJykpIHtcbiAgICAgICAgICAgIHRoaXMuYm9keUZpbGwgPSBvcHRpb25zLmJvZHlGaWxsXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ib2R5VGV4dCA9IG9wdGlvbnMudGV4dCB8fCAnJ1xuICAgICAgICBpZiAob3B0aW9ucy5oYXNPd25Qcm9wZXJ0eSgnYm9keVRleHQnKSkge1xuICAgICAgICAgICAgdGhpcy5ib2R5VGV4dCA9IG9wdGlvbnMuYm9keVRleHRcbiAgICAgICAgfVxuICAgICAgICBDb25zdGFudHMuUkVDVF9ESVNBQkxFRF9DT05UUk9MUy5mb3JFYWNoKChjb250cm9sKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldENvbnRyb2xWaXNpYmxlKGNvbnRyb2wsIGZhbHNlKVxuICAgICAgICB9KVxuICAgICAgICB0aGlzLnNldCgnZmlsbCcsICd0cmFuc3BhcmVudCcpXG5cbiAgICAgICAgdGhpcy5vbihcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAnYWRkZWQnOiB0aGlzLl9pbml0Q29tcG9uZW50cyxcbiAgICAgICAgICAgICAgICAnbW9kaWZpZWQnOiB0aGlzLl9zZXRDb21wb25lbnRzUG9zaXRpb24sXG4gICAgICAgICAgICAgICAgJ3NjYWxpbmcnOiB0aGlzLl9zZXRDb21wb25lbnRzUG9zaXRpb24sXG4gICAgICAgICAgICAgICAgJ21vdmluZyc6IHRoaXMuX3NldENvbXBvbmVudHNQb3NpdGlvbixcbiAgICAgICAgICAgICAgICAncm90YXRpbmcnOiB0aGlzLl9zZXRDb21wb25lbnRzUG9zaXRpb25cbiAgICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgIH0sXG5cbiAgICBfaW5pdENvbXBvbmVudHM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy50ZXh0ID0gbmV3IGZhYnJpYy5UZXh0KCcnLCB7dmlzaWJsZTogZmFsc2V9KVxuICAgICAgICB0aGlzLmJvZHkgPSBuZXcgZmFicmljLlJlY3Qoe1xuICAgICAgICAgICAgd2lkdGg6IHRoaXMud2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQ6IHRoaXMuaGVpZ2h0LFxuICAgICAgICAgICAgdG9wOiB0aGlzLnRvcCxcbiAgICAgICAgICAgIGxlZnQ6IHRoaXMubGVmdCxcbiAgICAgICAgICAgIGZpbGw6IHRoaXMuYm9keUZpbGxcbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5jb21wb25lbnRzID0gW3RoaXMudGV4dCwgdGhpcy5ib2R5XVxuXG4gICAgICAgIHRoaXMuX3NldHVwQ29tcG9uZW50cygpXG4gICAgICAgIHRoaXMuc2V0VGV4dCh0aGlzLmJvZHlUZXh0KVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBfc2V0dXBDb21wb25lbnRzOiBhZGQgdGhlIGNvbXBvbmVudCB0byB0aGUgY2FudmFzIGFuZCBzZXQgc29tZSBvcHRpb25zXG4gICAgICogdG8gYXZvaWQgdGhlbSBmcm9tIGJlaW5nIGV4cG9ydGVkL3NlbGVjdGVkXG4gICAgICovXG4gICAgX3NldHVwQ29tcG9uZW50czogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmNvbXBvbmVudHMuZm9yRWFjaCgoY29tcG9uZW50KSA9PiB7XG4gICAgICAgICAgICBjb21wb25lbnQuc2V0KHtcbiAgICAgICAgICAgICAgICBleGNsdWRlRnJvbUV4cG9ydDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBoYXNDb250cm9sczogZmFsc2UsXG4gICAgICAgICAgICAgICAgc2VsZWN0YWJsZTogZmFsc2VcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB0aGlzLmNhbnZhcy5hZGQoY29tcG9uZW50KVxuICAgICAgICAgICAgY29tcG9uZW50LnNlbmRCYWNrd2FyZHMoKVxuICAgICAgICB9KVxuICAgIH0sXG5cbiAgICBfc2V0Q29tcG9uZW50c1Bvc2l0aW9uOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuaGVpZ2h0ICogdGhpcy5zY2FsZVksXG4gICAgICAgICAgICB3aWR0aCA9IHRoaXMud2lkdGggKiB0aGlzLnNjYWxlWCxcbiAgICAgICAgICAgIGJvdW5kaW5nUmVjdCA9IHRoaXMuZ2V0Qm91bmRpbmdSZWN0KClcblxuICAgICAgICBpZiAodGhpcy50ZXh0KSB7XG4gICAgICAgICAgICB0aGlzLnRleHQuc2V0KHtcbiAgICAgICAgICAgICAgICB0b3A6IGJvdW5kaW5nUmVjdC50b3AgKyAwLjUgKiAoYm91bmRpbmdSZWN0LmhlaWdodCAtIHRoaXMudGV4dC5oZWlnaHQpLFxuICAgICAgICAgICAgICAgIGxlZnQ6IGJvdW5kaW5nUmVjdC5sZWZ0ICsgMC41ICogKGJvdW5kaW5nUmVjdC53aWR0aCAtIHRoaXMudGV4dC53aWR0aClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmJvZHkuc2V0KHtcbiAgICAgICAgICAgIHRvcDogdGhpcy50b3AsXG4gICAgICAgICAgICBsZWZ0OiB0aGlzLmxlZnQsXG4gICAgICAgICAgICB3aWR0aDogd2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICAgICAgICAgIGFuZ2xlOiB0aGlzLmFuZ2xlXG4gICAgICAgIH0pXG5cbiAgICB9LFxuXG4gICAgZ2V0Q29tcG9uZW50czogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb21wb25lbnRzXG4gICAgfSxcblxuICAgIHNldFRleHQ6IGZ1bmN0aW9uICh0ZXh0KSB7XG4gICAgICAgIHRoaXMuYm9keVRleHQgPSB0ZXh0XG4gICAgICAgIGlmICh0ZXh0LnNsaWNlKC0xKSAhPT0gJ20nKSB7XG4gICAgICAgICAgICB0ZXh0ICs9ICdtJ1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudGV4dC5zZXQoe1xuICAgICAgICAgICAgdGV4dDogdGV4dFxuICAgICAgICB9KVxuICAgICAgICB0aGlzLl9zZXRDb21wb25lbnRzUG9zaXRpb24oKVxuICAgIH0sXG5cbiAgICBfcmVuZGVyOiBmdW5jdGlvbiAoY3R4KSB7XG4gICAgICAgIHRoaXMuY2FsbFN1cGVyKCdfcmVuZGVyJywgY3R4KVxuICAgIH0sXG5cbiAgICBjbGVhcjogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmNhbnZhcy5yZW1vdmUodGhpcy5jb21wb25lbnRzKVxuICAgIH0sXG5cbiAgICB0b09iamVjdDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZmFicmljLnV0aWwub2JqZWN0LmV4dGVuZCh0aGlzLmNhbGxTdXBlcigndG9PYmplY3QnKSwge1xuICAgICAgICAgICAgYm9keUZpbGw6IHRoaXMuZ2V0KCdib2R5RmlsbCcpLFxuICAgICAgICAgICAgYm9keVRleHQ6IHRoaXMuZ2V0KCdib2R5VGV4dCcpXG4gICAgICAgIH0pO1xuICAgIH1cblxufSlcblxuZmFicmljLkxpbmUgPSBMaW5lXG5cbmZhYnJpYy5MaW5lLmZyb21PYmplY3QgPSBmdW5jdGlvbiAob2JqZWN0LCBjYWxsYmFjaykge1xuICAgIHJldHVybiBmYWJyaWMuT2JqZWN0Ll9mcm9tT2JqZWN0KCdMaW5lJywgb2JqZWN0LCBjYWxsYmFjayk7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ZhYnJpY19fOyJdLCJzb3VyY2VSb290IjoiIn0=