/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./all-tests.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./all-tests.js":
/*!**********************!*\
  !*** ./all-tests.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/**\n * This file simplifies the use of webpack for testing.\n * It loads every test file in ./tests folder and exports its content.\n * This way, the command `make tests` finds them all.\n */\ncontext = __webpack_require__(\"./tests sync recursive .js$\");\ncontext.keys().forEach(context);\nmodule.exports = context;\n\n\n//# sourceURL=webpack:///./all-tests.js?");

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/*! exports provided: RECT_DISABLED_CONTROLS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RECT_DISABLED_CONTROLS\", function() { return RECT_DISABLED_CONTROLS; });\n// controls: 'tl', 'tr', 'br', 'bl', 'ml', 'mt', 'mr', 'mb', 'mtr'\nconst RECT_DISABLED_CONTROLS = [ 'tl', 'tr', 'bl', 'br', 'mt', 'mb' ]\n\n\n//# sourceURL=webpack:///./src/constants.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: Canvas, Line, Arrowline */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Canvas\", function() { return Canvas; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Line\", function() { return Line; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Arrowline\", function() { return Arrowline; });\n/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fabric */ \"fabric\");\n/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fabric__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n\n\n\nclass Canvas extends fabric__WEBPACK_IMPORTED_MODULE_0__[\"fabric\"].Canvas {\n\n    constructor(domElemendId) {\n        super(domElemendId)\n        this.domElemendId = domElemendId\n        this.scale = {value: null, shape: null}\n        this.backgroundImage = null\n        // this._lockObjectsToBoundaries()\n    }\n\n    addImage(imageFile) {\n        const reader = new FileReader()\n\n        reader.onload = () => {\n            const img = document.createElement('img')\n            img.src = reader.result\n\n            this.backgroundImage = new fabric__WEBPACK_IMPORTED_MODULE_0__[\"fabric\"].Image(img)\n            this.backgroundImage.scale(this.height/this.backgroundImage.height)\n            this.add(this.backgroundImage)\n            this.backgroundImage.sendToBack()\n            this.renderAll()\n        };\n\n        reader.readAsDataURL(imageFile);\n    }\n\n    lockImage() {\n        this.backgroundImage.hasControls = false\n        this.backgroundImage.selectable = false\n        this.discardActiveObject();\n        this.renderAll()\n    }\n\n    _lockObjectsToBoundaries() {\n        this.on('object:moving', function (e) {\n            var obj = e.target;\n            // if object is too big ignore\n            if(obj.currentHeight > this.height || obj.currentWidth > this.width){\n                return;\n            }        \n            obj.setCoords();        \n            // top-left  corner\n            if(obj.getBoundingRect().top < 0 || obj.getBoundingRect().left < 0){\n                obj.top = Math.max(obj.top, obj.top-obj.getBoundingRect().top);\n                obj.left = Math.max(obj.left, obj.left-obj.getBoundingRect().left);\n            }\n            // bot-right corner\n            if(obj.getBoundingRect().top+obj.getBoundingRect().height  > this.height || obj.getBoundingRect().left+obj.getBoundingRect().width  > this.width){\n                obj.top = Math.min(obj.top, this.height-obj.getBoundingRect().height+obj.top-obj.getBoundingRect().top);\n                obj.left = Math.min(obj.left, this.width-obj.getBoundingRect().width+obj.left-obj.getBoundingRect().left);\n            }\n        });\n    }\n\n\n    setScale(scaleDefinition) {\n        if (scaleDefinition.shape) {\n            this.scale.shape = scaleDefinition.shape\n        }\n        if (scaleDefinition.value) {\n            this.scale.value = scaleDefinition.value\n        }\n    }\n\n    getScale() {\n        return this.scale\n    }\n\n    lockScale() {\n        this.scale.shape.hasControls = false\n    }\n\n    /* \n     * @param choices: a list of (label, color)\n     *  example: [\n     *      {label: 'label1', color: 'blue'},\n     *      {label: 'label2', color: 'rgba(255,0,0,0.5)'}\n     *   ]\n     * @return a DOM select object with corresponding options\n     */\n    listToSelectDOM(choices) {\n        const canvasholder = document.getElementById(this.domElemendId)\n\n        //Create and append select list\n        const selectList = document.createElement(\"select\")\n        selectList.id = \"fabricashapeShapeChoices\"\n        canvasholder.parentElement.appendChild(selectList)\n\n        //Create and append the options\n        for (let i = 0; i < choices.length; i++) {\n            const option = document.createElement(\"option\")\n            option.value = choices[i].label\n            option.text = choices[i].label\n            option.style.backgroundColor = choices[i].color\n            selectList.appendChild(option)\n        }\n        for (let key in _constants__WEBPACK_IMPORTED_MODULE_1__[\"SELECT_LIST_STYLE\"]) {\n            selectList.style[key] = _constants__WEBPACK_IMPORTED_MODULE_1__[\"SELECT_LIST_STYLE\"][key]\n        }\n        return selectList\n    }\n\n    setShapeChoices(choices) {\n        const selectObject = this.listToSelectDOM(choices)\n        this.createReferenceLine(selectObject)\n    }\n\n    /**\n     * Creates a line user can click on to duplicate it and use the duplicate into the scene.\n     */\n    createReferenceLine(selectObject) {\n        const referenceLine = new fabric__WEBPACK_IMPORTED_MODULE_0__[\"fabric\"].Rect({ top: 5, left: 5, width: 80, height: 17, fill: selectObject.options[selectObject.selectedIndex].style.backgroundColor})\n        this.add(referenceLine)\n        this.item(this.size() - 1).hasControls = false\n        this.requestRenderAll()\n\n        const fillReferenceLine = () => {\n            this.item(this.size() - 1).set('fill', selectObject.options[selectObject.selectedIndex].style.backgroundColor)\n            this.renderAll()\n        }\n\n        const duplicateReferenceLine = () => {\n            this.createReferenceLine(selectObject)\n            referenceLine.hasControls = true\n            _constants__WEBPACK_IMPORTED_MODULE_1__[\"RECT_DISABLED_CONTROLS\"].forEach((control) => {\n                referenceLine.setControlVisible(control, false)\n            })\n        }\n\n        referenceLine.on('mousedown', () => {\n            duplicateReferenceLine()\n            referenceLine.off('mousedown')\n        })\n\n        selectObject.removeEventListener('change', fillReferenceLine)\n        selectObject.addEventListener('change', fillReferenceLine)\n    }\n\n    createScaledLine(options) {\n        const scale = (this.scale.shape.width * this.scale.shape.scaleX) / this.scale.value \n        options.top = options.top * scale\n        options.left = options.left * scale\n        options.width = options.width * scale\n        options.height = options.stroke * scale\n\n        return new Line(options)\n    }\n\n}\n\nclass Line extends fabric__WEBPACK_IMPORTED_MODULE_0__[\"fabric\"].Rect {\n\n    constructor(options) {\n        super(options)\n        this.bodyFill = options.fill\n        this.bodyText = options.text || \"\"\n        this.components = []\n        this.type = \"line\"\n        this.hasControls = true\n        _constants__WEBPACK_IMPORTED_MODULE_1__[\"RECT_DISABLED_CONTROLS\"].forEach((control) => {\n            this.setControlVisible(control, false)\n        })\n        this.set('fill', 'transparent')\n\n        this.on(\n            {\n                'added': this._initComponents,\n                'modified': this._setComponentsPosition,\n                'scaling': this._setComponentsPosition,\n                'moving': this._setComponentsPosition,\n                'rotating': this._setComponentsPosition,\n            }\n        )\n    }\n\n    _initComponents() {\n        this.text = new fabric__WEBPACK_IMPORTED_MODULE_0__[\"fabric\"].Text('', {visible: false}) \n        this.body = new fabric__WEBPACK_IMPORTED_MODULE_0__[\"fabric\"].Rect({\n            width: this.width,\n            height: this.height,\n            top: this.top,\n            left: this.left,\n            fill: this.bodyFill,\n        })\n        this.components = [this.text, this.body]\n\n        this.components.forEach((component) => {\n            component.hasControls = false\n            component.selectable = false\n            this.canvas.add(component)\n            component.sendBackwards()\n        })\n        this.setText(this.bodyText)\n    }\n\n    _setComponentsPosition() {\n        const degreesToRadiansRatio = Math.PI / 180,\n            height = this.height * this.scaleY,\n            width = this.width * this.scaleX,\n            cosTeta = Math.cos(this.angle * degreesToRadiansRatio),\n            sinTeta = Math.sin(this.angle * degreesToRadiansRatio),\n            boundingRect = this.getBoundingRect()\n\n\n        if (this.text) {\n            this.text.set({\n                top: boundingRect.top + 0.5 * (boundingRect.height - this.text.height),\n                left: boundingRect.left + 0.5 * (boundingRect.width - this.text.width),\n            })\n        }\n\n        this.body.set({\n            top: this.top,\n            left: this.left,\n            width: width,\n            height: height,\n            angle: this.angle,\n        })\n\n    }\n\n    getComponents() {\n        return this.components\n    }\n\n    setText(text) {\n        if (text.slice(-1) != \"m\") {\n            text += \"m\"\n        }\n        this.text.set({\n            text: text\n        })\n        this._setComponentsPosition()\n    }\n\n}\n\n/**\n * An Arrowline is a group that looks like a double arrowed line:\n *       <------->\n */\nclass Arrowline extends Line {\n\n    constructor(options) {\n        super(options)\n        this.type = \"arrowline\"\n        this.bodyFill = options.fill\n    }\n\n    _initComponents() {\n        this.text = new fabric__WEBPACK_IMPORTED_MODULE_0__[\"fabric\"].Text('', {backgroundColor: \"white\"}) \n        this.body = new fabric__WEBPACK_IMPORTED_MODULE_0__[\"fabric\"].Rect({fill: this.bodyFill})\n        this.leftTriangle = new fabric__WEBPACK_IMPORTED_MODULE_0__[\"fabric\"].Triangle({fill: this.bodyFill})\n        this.rightTriangle = new fabric__WEBPACK_IMPORTED_MODULE_0__[\"fabric\"].Triangle({fill: this.bodyFill})\n\n        this._setComponentsPosition()\n\n        this.components = [this.body, this.leftTriangle, this.rightTriangle, this.text]\n\n        this.components.forEach((component) => {\n            component.hasControls = false\n            component.selectable = false\n            this.canvas.add(component)\n            component.sendBackwards()\n        })\n        this.setText(this.bodyText)\n    }\n\n    _setComponentsPosition() {\n        const degreesToRadiansRatio = Math.PI / 180,\n            height = this.height * this.scaleY,\n            width = this.width * this.scaleX,\n            cosTeta = Math.cos(this.angle * degreesToRadiansRatio),\n            sinTeta = Math.sin(this.angle * degreesToRadiansRatio),\n            boundingRect = this.getBoundingRect()\n\n\n        this.text.set({\n            top: boundingRect.top + 0.5 * (boundingRect.height - this.text.height),\n            left: boundingRect.left + 0.5 * (boundingRect.width - this.text.width),\n            fontSize: 18,\n        })\n\n        this.body.set({\n            top: this.top + height  * sinTeta + (height / 4) * cosTeta,\n            left: this.left + height * cosTeta - (height / 4) * sinTeta,\n            width: width - 2 * height,\n            height: height / 2,\n            angle: this.angle,\n        })\n\n        this.leftTriangle.set({\n            top: this.top + height * cosTeta,\n            left: this.left - height * sinTeta,\n            width: height,\n            height: height,\n            angle: this.angle - 90,\n        })\n\n        this.rightTriangle.set({\n            top: this.top + width * sinTeta,\n            left: this.left + width * cosTeta,\n            width: height,\n            height: height,\n            angle: this.angle + 90,\n        })\n    }\n\n}\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./tests sync recursive .js$":
/*!*************************!*\
  !*** ./tests sync .js$ ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./index.test.js\": \"./tests/index.test.js\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tvar id = map[req];\n\tif(!(id + 1)) { // check for number or string\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn id;\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./tests sync recursive .js$\";\n\n//# sourceURL=webpack:///./tests_sync_.js$?");

/***/ }),

/***/ "./tests/index.test.js":
/*!*****************************!*\
  !*** ./tests/index.test.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fabric */ \"fabric\");\n/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fabric__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var chai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chai */ \"chai\");\n/* harmony import */ var chai__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chai__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! events */ \"events\");\n/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _src_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/index */ \"./src/index.js\");\n/* harmony import */ var _src_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/constants */ \"./src/constants.js\");\n\n\n\n\n\n\n\n\n// Init fake 'document' to simulate DOM for tests\nfs__WEBPACK_IMPORTED_MODULE_2___default.a.readFile('./tests/example2D.html', 'utf8', (err,data) => {\n    if (err) {\n        console.error(err)\n        process.exit()\n    }\n    __webpack_require__(/*! jsdom-global */ \"jsdom-global\")(data)\n});\n\ndescribe('Canvas', () => {\n\n    describe('constructor', () => {\n        it('Should save the given domElemendId.', () => {\n            const c = new _src_index__WEBPACK_IMPORTED_MODULE_4__[\"Canvas\"]('myId')\n\n            chai__WEBPACK_IMPORTED_MODULE_1__[\"assert\"].equal(c.domElemendId, 'myId')\n        });\n    });\n\n    describe('listToSelectDOM', () => {\n\n        const tests = [\n            {\n                description: 'Should return a select object with as much choices',\n                list: [\n                    {label: 'label1', color: 'color1'},\n                    {label: 'label2', color: 'color2'}\n                ],\n                expectedLength: 2,\n                expectedContent: [\n                    { value: 'label1', text: 'label1' },\n                    { value: 'label2', text: 'label2' }\n\n                ]\n            },\n            {\n                description: 'Should return empty select object for empty choices',\n                list: [ ],\n                expectedLength: 0\n            }\n        ]\n\n        tests.forEach((test) => {\n            it(test.description, () => {\n                // Arrange\n                const c = new _src_index__WEBPACK_IMPORTED_MODULE_4__[\"Canvas\"]('example2D')\n                // Act\n                const resultSelectDOM = c.listToSelectDOM(test.list)\n\n                // Assert\n                chai__WEBPACK_IMPORTED_MODULE_1__[\"assert\"].equal(resultSelectDOM.children.length, test.expectedLength)\n\n                if (test.expectedContent) {\n                    for (var i = 0, len = test.expectedContent.len; i < len; i++) {\n                        chai__WEBPACK_IMPORTED_MODULE_1__[\"assert\"].equal(resultSelectDOM.children[i].value, test.expectedContent[i].value)\n                        chai__WEBPACK_IMPORTED_MODULE_1__[\"assert\"].equal(resultSelectDOM.children[i].text, test.expectedContent[i].text)\n                    }\n                }\n            });\n        })\n    });\n\n    describe('setScale', () => {\n        it('Should save given shape and given scale value.', () => {\n            // Arrange\n            const canvas = new _src_index__WEBPACK_IMPORTED_MODULE_4__[\"Canvas\"]('example2D')\n            const shape = new fabric__WEBPACK_IMPORTED_MODULE_0__[\"fabric\"].Rect({width: 10, height: 10})\n            const value = 13.89\n        \n            // Act\n            const result = canvas.setScale({shape, value})\n        \n            // Assert\n            chai__WEBPACK_IMPORTED_MODULE_1__[\"assert\"].equal(canvas.scale.shape, shape)\n            chai__WEBPACK_IMPORTED_MODULE_1__[\"assert\"].equal(canvas.scale.value, value)\n        });\n\n        it('Should save only shape if no value is given.', () => {\n            // Arrange\n            const canvas = new _src_index__WEBPACK_IMPORTED_MODULE_4__[\"Canvas\"]('example2D')\n            const shape = new fabric__WEBPACK_IMPORTED_MODULE_0__[\"fabric\"].Rect({width: 10, height: 10})\n            const value = 13.89\n        \n            // Act\n            canvas.setScale({shape, value})\n            const result = canvas.setScale({shape})\n        \n            // Assert\n            chai__WEBPACK_IMPORTED_MODULE_1__[\"assert\"].equal(canvas.scale.shape, shape)\n            chai__WEBPACK_IMPORTED_MODULE_1__[\"assert\"].equal(canvas.scale.value, value)\n        });\n\n        it('Should save only value if no shape is given.', () => {\n            // Arrange\n            const canvas = new _src_index__WEBPACK_IMPORTED_MODULE_4__[\"Canvas\"]('example2D')\n            const shape = new fabric__WEBPACK_IMPORTED_MODULE_0__[\"fabric\"].Rect({width: 10, height: 10})\n            const value = 13.89\n        \n            // Act\n            canvas.setScale({shape, value})\n            const result = canvas.setScale({value})\n        \n            // Assert\n            chai__WEBPACK_IMPORTED_MODULE_1__[\"assert\"].equal(canvas.scale.shape, shape)\n            chai__WEBPACK_IMPORTED_MODULE_1__[\"assert\"].equal(canvas.scale.value, value)\n        });\n    });\n\n    describe('lockScale', () => {\n        it('Should set scale shape hasControls attribute to false.', () => {\n            // Arrange\n            const canvas = new _src_index__WEBPACK_IMPORTED_MODULE_4__[\"Canvas\"]('example2D')\n        \n            // Act\n            const shape = new fabric__WEBPACK_IMPORTED_MODULE_0__[\"fabric\"].Rect({width: 10, height: 10})\n            const value = 13.89\n            canvas.setScale({shape, value})\n            canvas.lockScale()\n        \n            // Assert\n            chai__WEBPACK_IMPORTED_MODULE_1__[\"assert\"].isFalse(canvas.scale.shape.hasControls)\n        });\n    });\n\n    describe('createScaledLine', () => {\n        it('Should create a line with dimensions calculated from scale.', () => {\n            // Arrange\n            const canvas = new _src_index__WEBPACK_IMPORTED_MODULE_4__[\"Canvas\"]('example2D')\n        \n            // Act\n            const shape = new fabric__WEBPACK_IMPORTED_MODULE_0__[\"fabric\"].Rect({width: 10, height: 10})\n            const value = 12.5\n            canvas.setScale({shape, value})\n            const createdLine = canvas.createScaledLine({top: 1, left: 2, width: 3, stroke: 0.4})\n        \n            // Assert\n            const scale = 10 / 12.5 // shape.width / scale value\n            chai__WEBPACK_IMPORTED_MODULE_1__[\"assert\"].equal(createdLine.top, 1 * scale, \"top is not ok\")\n            chai__WEBPACK_IMPORTED_MODULE_1__[\"assert\"].equal(createdLine.left, 2 * scale, \"left is not ok\")\n            chai__WEBPACK_IMPORTED_MODULE_1__[\"assert\"].equal(createdLine.width, 3 * scale, \"width is not ok\")\n            chai__WEBPACK_IMPORTED_MODULE_1__[\"assert\"].equal(createdLine.height, 0.4 * scale, \"height is not ok\")\n        });\n\n        it('Should take scale shape transformations in account.', () => {\n            // Arrange\n            const canvas = new _src_index__WEBPACK_IMPORTED_MODULE_4__[\"Canvas\"]('example2D')\n        \n            // Act\n            const shape = new fabric__WEBPACK_IMPORTED_MODULE_0__[\"fabric\"].Rect({width: 10, height: 10})\n            shape.scaleX = 3\n            const value = 12.5\n            canvas.setScale({shape, value})\n            const createdLine = canvas.createScaledLine({top: 1, left: 2, width: 3, stroke: 0.4})\n        \n            // Assert\n            const scale = (3 * 10) / 12.5 // shape.width / scale value\n            chai__WEBPACK_IMPORTED_MODULE_1__[\"assert\"].equal(createdLine.top, 1 * scale, \"top is not ok\")\n            chai__WEBPACK_IMPORTED_MODULE_1__[\"assert\"].equal(createdLine.left, 2 * scale, \"left is not ok\")\n            chai__WEBPACK_IMPORTED_MODULE_1__[\"assert\"].equal(createdLine.width, 3 * scale, \"width is not ok\")\n            chai__WEBPACK_IMPORTED_MODULE_1__[\"assert\"].equal(createdLine.height, 0.4 * scale, \"height is not ok\")\n\n        });\n    });\n\n    describe\n\n});\n\ndescribe('Line', () => {\n\n    let canvas, line, lineComponents\n\n    beforeEach(() => {\n        canvas = new _src_index__WEBPACK_IMPORTED_MODULE_4__[\"Canvas\"]('myId')\n        line = new _src_index__WEBPACK_IMPORTED_MODULE_4__[\"Line\"]({top: 1, left: 2, width: 3, height: 4, angle: 5})\n    })\n\n    describe('constructor', () => {\n        it('Should set type to \"line\".', () => {\n            // Arrange\n            // Act\n            // Assert\n            chai__WEBPACK_IMPORTED_MODULE_1__[\"assert\"].equal(line.type, 'line')\n        });\n\n        it('Should set fill of main line to transparent.', () => {\n            // Arrange\n            // Act\n            // Assert\n            chai__WEBPACK_IMPORTED_MODULE_1__[\"assert\"].equal(line.fill, 'transparent')\n        });\n\n        it('Should set hasControls to true.', () => {\n            // Arrange\n            // Act\n            // Assert\n            chai__WEBPACK_IMPORTED_MODULE_1__[\"assert\"].isTrue(line.hasControls)\n        });\n\n        it('Should disable any control in RECT_DISABLED_CONTROLS.', () => {\n            // Arrange\n            // Act\n            // Assert\n            _src_constants__WEBPACK_IMPORTED_MODULE_5__[\"RECT_DISABLED_CONTROLS\"].forEach((control) => {\n                chai__WEBPACK_IMPORTED_MODULE_1__[\"assert\"].isFalse(line.isControlVisible(control), `Control ${control} is visible while it shouldn't.`)\n            })\n        });\n\n        it('Should rescale body to equal main line.', () => {\n            // Arrange\n\n            // Act\n            canvas.add(line)\n            line.scale(12)\n            line.fire('scaling')\n\n            // Assert\n            chai__WEBPACK_IMPORTED_MODULE_1__[\"assert\"].equal(line.body.scaleX, 1)\n            chai__WEBPACK_IMPORTED_MODULE_1__[\"assert\"].equal(line.body.scaleY, 1)\n            chai__WEBPACK_IMPORTED_MODULE_1__[\"assert\"].equal(line.scaleY, 12)\n            chai__WEBPACK_IMPORTED_MODULE_1__[\"assert\"].equal(line.body.top, line.top)\n            chai__WEBPACK_IMPORTED_MODULE_1__[\"assert\"].equal(line.body.left, line.left)\n            chai__WEBPACK_IMPORTED_MODULE_1__[\"assert\"].equal(line.body.height, line.height * line.scaleY)\n            chai__WEBPACK_IMPORTED_MODULE_1__[\"assert\"].equal(line.body.width, line.width * line.scaleX)\n            chai__WEBPACK_IMPORTED_MODULE_1__[\"assert\"].equal(line.body.angle, line.angle)\n        });\n\n        it('Should set body fill to given fill.', () => {\n            // Arrange\n            const expectedFill = \"blue\"\n        \n            // Act\n            line = new _src_index__WEBPACK_IMPORTED_MODULE_4__[\"Line\"]({fill: expectedFill})\n            canvas.add(line)\n        \n            // Assert\n            chai__WEBPACK_IMPORTED_MODULE_1__[\"assert\"].equal(line.body.fill, expectedFill)\n        });\n\n        it('Should set text to given text.', () => {\n            // Arrange\n            const expectedText = \"12m\"\n        \n            // Act\n            line = new _src_index__WEBPACK_IMPORTED_MODULE_4__[\"Line\"]({text: expectedText})\n            canvas.add(line)\n        \n            // Assert\n            chai__WEBPACK_IMPORTED_MODULE_1__[\"assert\"].equal(line.text.text, expectedText)\n        });\n    });\n\n    describe('getComponents', () => {\n        it('Should return components of the line.', () => {\n            // Arrange\n            // Act\n            canvas.add(line)\n            lineComponents = line.getComponents()\n\n            // Assert\n            chai__WEBPACK_IMPORTED_MODULE_1__[\"assert\"].equal(lineComponents.length, 2)\n            chai__WEBPACK_IMPORTED_MODULE_1__[\"assert\"].equal(lineComponents[0].type, 'text')\n            chai__WEBPACK_IMPORTED_MODULE_1__[\"assert\"].equal(lineComponents[1].type, 'rect')\n        });\n    });\n\n    describe('setText', () => {\n        it('Should change component text.', () => {\n            // Arrange\n            const expectedText = \"12.4m\"\n        \n            // Act\n            canvas.add(line)\n            line.setText(expectedText)\n        \n            // Assert\n            chai__WEBPACK_IMPORTED_MODULE_1__[\"assert\"].equal(line.getComponents()[0].text, expectedText)\n        });\n\n        it('Should add \"m\" at the end if not already set.', () => {\n            // Arrange\n            const expectedText = \"12.4m\"\n        \n            // Act\n            canvas.add(line)\n            line.setText(\"12.4\")\n        \n            // Assert\n            chai__WEBPACK_IMPORTED_MODULE_1__[\"assert\"].equal(line.getComponents()[0].text, expectedText)\n        });\n    });\n\n});\n\ndescribe('Arrowline', () => {\n\n    describe('constructor', () => {\n\n        let canvas, arrowline, arrowlineComponents\n\n        beforeEach(() => {\n            canvas = new _src_index__WEBPACK_IMPORTED_MODULE_4__[\"Canvas\"]('myId')\n            arrowline = new _src_index__WEBPACK_IMPORTED_MODULE_4__[\"Arrowline\"]({top: 1, left: 2, width: 3, height: 4, angle: 5})\n        })\n\n        it('Should set type to \"arrowline\".', () => {\n            // Arrange\n            // Act\n            // Assert\n            chai__WEBPACK_IMPORTED_MODULE_1__[\"assert\"].equal(arrowline.type, 'arrowline')\n        });\n\n        it('Should create a text, a body and 2 arrows in a group.', () => {\n            // Arrange\n            // Act\n            canvas.add(arrowline)\n            arrowlineComponents = arrowline.getComponents()\n\n            // Assert\n            chai__WEBPACK_IMPORTED_MODULE_1__[\"assert\"].equal(arrowlineComponents.length, 4)\n            chai__WEBPACK_IMPORTED_MODULE_1__[\"assert\"].equal(arrowlineComponents[0].type, 'rect')\n            chai__WEBPACK_IMPORTED_MODULE_1__[\"assert\"].equal(arrowlineComponents[1].type, 'triangle')\n            chai__WEBPACK_IMPORTED_MODULE_1__[\"assert\"].equal(arrowlineComponents[2].type, 'triangle')\n            chai__WEBPACK_IMPORTED_MODULE_1__[\"assert\"].equal(arrowlineComponents[3].type, 'text')\n        });\n\n        it('Should set hasControls to true.', () => {\n            // Arrange\n            // Act\n            // Assert\n            chai__WEBPACK_IMPORTED_MODULE_1__[\"assert\"].isTrue(arrowline.hasControls)\n        });\n\n        it('Should disable any control in RECT_DISABLED_CONTROLS.', () => {\n            // Arrange\n            // Act\n            // Assert\n            _src_constants__WEBPACK_IMPORTED_MODULE_5__[\"RECT_DISABLED_CONTROLS\"].forEach((control) => {\n                chai__WEBPACK_IMPORTED_MODULE_1__[\"assert\"].isFalse(arrowline.isControlVisible(control), `Control ${control} is visible while it shouldn't.`)\n            })\n        });\n\n        it('Should not resize triangles on group resize.', () => {\n            // Arrange\n            arrowline.scale(12)\n\n            // Act\n            canvas.add(arrowline)\n            arrowline.fire('scaling')\n\n            // Assert\n            chai__WEBPACK_IMPORTED_MODULE_1__[\"assert\"].equal(arrowline.leftTriangle.scaleY, 1)\n            chai__WEBPACK_IMPORTED_MODULE_1__[\"assert\"].equal(arrowline.rightTriangle.scaleY, 1)\n        });\n\n        it('Should rescale body to touch both arrows.', () => {\n            // Arrange\n            arrowline.scale(12)\n            const degreesToRadiansRatio = Math.PI / 180,\n                height = arrowline.height * arrowline.scaleY,\n                width = arrowline.width * arrowline.scaleX,\n                cosTeta = Math.cos(arrowline.angle * degreesToRadiansRatio),\n                sinTeta = Math.sin(arrowline.angle * degreesToRadiansRatio),\n                boundingRect = arrowline.getBoundingRect(),\n                expectedTop = arrowline.top + height  * sinTeta + (height / 4) * cosTeta,\n                expectedLeft = arrowline.left + height * cosTeta - (height / 4) * sinTeta,\n                expectedWidth = width - 2 * height,\n                expectedHeight = height / 2,\n                expectedAngle = arrowline.angle\n\n            // Act\n            canvas.add(arrowline)\n            arrowline.fire('scaling')\n\n            // Assert\n            chai__WEBPACK_IMPORTED_MODULE_1__[\"assert\"].equal(arrowline.body.scaleX, 1)\n            chai__WEBPACK_IMPORTED_MODULE_1__[\"assert\"].equal(arrowline.body.top, expectedTop)\n            chai__WEBPACK_IMPORTED_MODULE_1__[\"assert\"].equal(arrowline.body.left, expectedLeft)\n            chai__WEBPACK_IMPORTED_MODULE_1__[\"assert\"].equal(arrowline.body.height, expectedHeight)\n            chai__WEBPACK_IMPORTED_MODULE_1__[\"assert\"].equal(arrowline.body.width, expectedWidth)\n            chai__WEBPACK_IMPORTED_MODULE_1__[\"assert\"].equal(arrowline.body.angle, expectedAngle)\n        });\n\n        it('Should set body fill to given fill.', () => {\n            // Arrange\n            const expectedFill = \"green\"\n        \n            // Act\n            arrowline = new _src_index__WEBPACK_IMPORTED_MODULE_4__[\"Arrowline\"]({fill: expectedFill})\n            canvas.add(arrowline)\n        \n            // Assert\n            chai__WEBPACK_IMPORTED_MODULE_1__[\"assert\"].equal(arrowline.body.fill, expectedFill)\n            chai__WEBPACK_IMPORTED_MODULE_1__[\"assert\"].equal(arrowline.leftTriangle.fill, expectedFill)\n            chai__WEBPACK_IMPORTED_MODULE_1__[\"assert\"].equal(arrowline.rightTriangle.fill, expectedFill)\n        });\n    });\n\n});\n\n\n//# sourceURL=webpack:///./tests/index.test.js?");

/***/ }),

/***/ "chai":
/*!***********************!*\
  !*** external "chai" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"chai\");\n\n//# sourceURL=webpack:///external_%22chai%22?");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"events\");\n\n//# sourceURL=webpack:///external_%22events%22?");

/***/ }),

/***/ "fabric":
/*!*************************!*\
  !*** external "fabric" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fabric\");\n\n//# sourceURL=webpack:///external_%22fabric%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "jsdom-global":
/*!*******************************!*\
  !*** external "jsdom-global" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jsdom-global\");\n\n//# sourceURL=webpack:///external_%22jsdom-global%22?");

/***/ })

/******/ });