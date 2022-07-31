/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style/common.less":
/*!*******************************!*\
  !*** ./src/style/common.less ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://tanchishe/./src/style/common.less?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_common_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/common.less */ \"./src/style/common.less\");\n/* harmony import */ var _modules_GameControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/GameControl */ \"./src/modules/GameControl.ts\");\n\n\nnew _modules_GameControl__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n\n\n//# sourceURL=webpack://tanchishe/./src/index.ts?");

/***/ }),

/***/ "./src/modules/Food.ts":
/*!*****************************!*\
  !*** ./src/modules/Food.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Food\": () => (/* binding */ Food),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// 定义一个属性表示食物所对应的元素\nvar Food = /** @class */ (function () {\n    function Food() {\n        this.element = document.getElementById(\"food\");\n    }\n    Object.defineProperty(Food.prototype, \"X\", {\n        get: function () {\n            return this.element.offsetLeft;\n        },\n        enumerable: false,\n        configurable: true\n    });\n    Object.defineProperty(Food.prototype, \"Y\", {\n        get: function () {\n            return this.element.offsetTop;\n        },\n        enumerable: false,\n        configurable: true\n    });\n    Food.prototype.change = function () {\n        var top = Math.round(Math.random() * 29) * 10;\n        var left = Math.round(Math.random() * 29) * 10;\n        this.element.style.left = left + \"px\";\n        this.element.style.top = top + \"px\";\n    };\n    return Food;\n}());\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Food);\n\n\n//# sourceURL=webpack://tanchishe/./src/modules/Food.ts?");

/***/ }),

/***/ "./src/modules/GameControl.ts":
/*!************************************!*\
  !*** ./src/modules/GameControl.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _snake__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./snake */ \"./src/modules/snake.ts\");\n/* harmony import */ var _Food__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Food */ \"./src/modules/Food.ts\");\n/* harmony import */ var _ScorePanel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ScorePanel */ \"./src/modules/ScorePanel.ts\");\n\n\n\nvar GameControl = /** @class */ (function () {\n    function GameControl() {\n        this.direction = '';\n        // 判断游戏是否结束\n        this.isLive = true;\n        this.snake = new _snake__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n        this.food = new _Food__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n        this.scorePanel = new _ScorePanel__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n        this.phTop = document.getElementById(\"phTop\");\n        this.phLeft = document.getElementById(\"phLeft\");\n        this.phRight = document.getElementById(\"phRight\");\n        this.phUpdown = document.getElementById(\"phUpdown\");\n        this.init();\n    }\n    GameControl.prototype.init = function () {\n        document.addEventListener('keydown', this.keydownHandler.bind(this));\n        // 绑定屏幕按键\n        this.phTop.addEventListener(\"click\", this.Upon.bind(this));\n        this.phLeft.addEventListener(\"click\", this.Left.bind(this));\n        this.phRight.addEventListener(\"click\", this.Right.bind(this));\n        this.phUpdown.addEventListener(\"click\", this.Down.bind(this));\n        this.run();\n    };\n    GameControl.prototype.keydownHandler = function (event) {\n        this.direction = event.key;\n    };\n    GameControl.prototype.run = function () {\n        // 获取蛇现在的坐标\n        var X = this.snake.X;\n        var Y = this.snake.Y;\n        // 根据按键方向修改XY\n        switch (this.direction) {\n            case 'ArrowUp':\n            case 'Up':\n                Y -= 10;\n                break;\n            case 'ArrowDown':\n            case 'Down':\n                Y += 10;\n                break;\n            case 'ArrowLeft':\n            case 'Left':\n                X -= 10;\n                break;\n            case 'ArrowRight':\n            case 'Right':\n                X += 10;\n                break;\n            default:\n                break;\n        }\n        this.checkEat(X, Y);\n        // 修改蛇的XY\n        try {\n            this.snake.X = X;\n            this.snake.Y = Y;\n        }\n        catch (error) {\n            alert(error + 'Game Over!');\n            this.isLive = false;\n        }\n        // 开启定时器调用\n        this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30);\n    };\n    // 检查蛇是否吃到食物\n    GameControl.prototype.checkEat = function (X, Y) {\n        if (X === this.food.X && Y === this.food.Y) {\n            this.food.change();\n            this.scorePanel.addScore();\n            this.snake.addBody();\n        }\n    };\n    // 定义屏幕按键函数\n    GameControl.prototype.Upon = function () {\n        this.direction = \"ArrowUp\";\n    };\n    GameControl.prototype.Left = function () {\n        this.direction = \"ArrowLeft\";\n    };\n    GameControl.prototype.Right = function () {\n        this.direction = \"ArrowRight\";\n    };\n    GameControl.prototype.Down = function () {\n        this.direction = \"ArrowDown\";\n    };\n    return GameControl;\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameControl);\n\n\n//# sourceURL=webpack://tanchishe/./src/modules/GameControl.ts?");

/***/ }),

/***/ "./src/modules/ScorePanel.ts":
/*!***********************************!*\
  !*** ./src/modules/ScorePanel.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// 定义表示记分牌的类\nvar ScorePanel = /** @class */ (function () {\n    function ScorePanel(maxLevel, upScore) {\n        if (maxLevel === void 0) { maxLevel = 10; }\n        if (upScore === void 0) { upScore = 1; }\n        this.score = 0;\n        this.level = 1;\n        this.scoreEle = document.getElementById(\"score\");\n        this.levelEle = document.getElementById(\"level\");\n        this.maxLevel = maxLevel;\n        this.upScore = upScore;\n    }\n    // 加分\n    ScorePanel.prototype.addScore = function () {\n        this.scoreEle.innerHTML = ++this.score + \"\";\n        if (this.score % this.upScore === 0) {\n            this.levelUp();\n        }\n    };\n    // 升级\n    ScorePanel.prototype.levelUp = function () {\n        if (this.level < this.maxLevel) {\n            this.levelEle.innerHTML = ++this.level + \"\";\n        }\n    };\n    return ScorePanel;\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScorePanel);\n\n\n//# sourceURL=webpack://tanchishe/./src/modules/ScorePanel.ts?");

/***/ }),

/***/ "./src/modules/snake.ts":
/*!******************************!*\
  !*** ./src/modules/snake.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar Snake = /** @class */ (function () {\n    function Snake() {\n        this.element = document.getElementById(\"snake\");\n        this.head = document.querySelector('#snake > div');\n        this.bodies = this.element.getElementsByTagName(\"div\");\n    }\n    Object.defineProperty(Snake.prototype, \"X\", {\n        // 获取蛇的坐标\n        get: function () {\n            return this.head.offsetLeft;\n        },\n        // 设置蛇头的坐标\n        set: function (value) {\n            // 前后值相同不更新\n            if (this.X == value) {\n                return;\n            }\n            // 控制蛇的移动范围\n            if (value < 0 || value > 290) {\n                throw new Error(\"蛇撞墙了！\");\n                ;\n            }\n            // 蛇不能直接掉头\n            if (this.bodies[1] && this.bodies[1].offsetLeft === value) {\n                if (value > this.X) {\n                    value = this.X - 10;\n                }\n                else {\n                    value = this.X + 10;\n                }\n            }\n            this.moveBody();\n            this.head.style.left = value + \"px\";\n            this.checkHeadBody();\n        },\n        enumerable: false,\n        configurable: true\n    });\n    Object.defineProperty(Snake.prototype, \"Y\", {\n        get: function () {\n            return this.head.offsetTop;\n        },\n        set: function (value) {\n            // 前后值相同不更新\n            if (this.Y == value) {\n                return;\n            }\n            // 蛇不能直接掉头\n            if (this.bodies[1] && this.bodies[1].offsetTop === value) {\n                if (value > this.Y) {\n                    value = this.Y - 10;\n                }\n                else {\n                    value = this.Y + 10;\n                }\n            }\n            // 控制蛇的移动范围\n            if (value < 0 || value > 290) {\n                throw new Error(\"蛇撞墙了！\");\n                ;\n            }\n            this.moveBody();\n            this.head.style.top = value + \"px\";\n            this.checkHeadBody();\n        },\n        enumerable: false,\n        configurable: true\n    });\n    // 增加蛇身体\n    Snake.prototype.addBody = function () {\n        this.element.insertAdjacentHTML(\"beforeend\", \"<div></div>\");\n    };\n    // 移动新增加的身体\n    Snake.prototype.moveBody = function () {\n        for (var i = this.bodies.length - 1; i > 0; i--) {\n            var X = this.bodies[i - 1].offsetLeft;\n            var Y = this.bodies[i - 1].offsetTop;\n            this.bodies[i].style.left = X + 'px';\n            this.bodies[i].style.top = Y + \"px\";\n        }\n    };\n    // 判断是否撞到自身\n    Snake.prototype.checkHeadBody = function () {\n        for (var i = 1; i < this.bodies.length; i++) {\n            var bd = this.bodies[i];\n            if (this.X === bd.offsetLeft && this.Y === bd.offsetTop) {\n                throw new Error(\"撞到自己了！\" + \"Game Over\");\n            }\n        }\n    };\n    return Snake;\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Snake);\n\n\n//# sourceURL=webpack://tanchishe/./src/modules/snake.ts?");

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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;