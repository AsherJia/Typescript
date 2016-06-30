/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var isDone = false;
	var decLiteral1 = 0.1;
	var decLiteral2 = 0.1;
	var decLiteral3 = 0.1;
	var hexLiteral = 0xf00d;
	var binaryLiteral = 10;
	var octalLiteral = 484;
	console.log('isDone: ', isDone);
	console.log('@, ', decLiteral1 + decLiteral2 + decLiteral3);
	var nameValue = "Gene";
	var age = 37;
	var sentence = "Hello, my name is " + nameValue + ".\n\nI'll be " + (age + 1) + " years old next month.";
	console.log('sentence: ', sentence);
	var sum = function (arg1, arg2) {
	    return arg1 + arg2;
	};
	console.log('sum: ', sum(2, 3));
	var arrayType;
	arrayType = [12, 'Typess'];
	console.log(arrayType[1].substr(1));
	// arrayType = ['Typess', 12];
	// console.log(arrayType[1].substr(1));
	var Color;
	(function (Color) {
	    Color[Color["Red"] = 0] = "Red";
	    Color[Color["Green"] = 1] = "Green";
	    Color[Color["Blue"] = 2] = "Blue";
	})(Color || (Color = {}));
	console.log('Red: ', Color.Red);
	var notSure = 3;
	console.log('NotSure: ', notSure);
	notSure = 'not sure';
	console.log('NotSure: ', notSure);
	notSure = false;
	console.log('NotSure: ', notSure);
	function warnUser() {
	    console.log('Test function return type..');
	}
	warnUser();
	var unusable = undefined;
	var unusable1 = null;
	// let someValue: any = 'Test some value string';
	// let someNumber: number = (<string>someValue).length;
	// console.log(someValue+', '+someNumber);
	for (var i = 0; i < 10; i++) {
	    (function (i) {
	        setTimeout(function () { console.log(i); }, 100 * i);
	    })(i);
	}
	function keepWholeObject(wholeObject) {
	    console.log('wholeObject1: ', wholeObject);
	    var a = wholeObject.a, _a = wholeObject.b, b = _a === void 0 ? 1001 : _a;
	    console.log('wholeObject2: ', wholeObject);
	}
	keepWholeObject({ a: 'shi xiao ka' });
	function printLabel(labelledObj) {
	    console.log(labelledObj);
	}
	var myObj = { size: 10, label: "Size 10 Object" };
	printLabel(myObj);
	var interface1_1 = __webpack_require__(1);
	var square = interface1_1.createSquare({ color: 'blue', width: 200 });
	console.log('square: ', square);
	var functionType_1 = __webpack_require__(2);
	var result = functionType_1.default(1, 3);
	console.log('sumFunc = ', result);
	var extendsT_1 = __webpack_require__(3);
	var dog1 = new extendsT_1.Dog('jinba', 'pipi');
	console.log('dog1: ', dog1);


/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	function createSquare(config) {
	    var result = { color: 'red', area: 100 };
	    if (config.color) {
	        result.color = config.color;
	    }
	    if (config.width) {
	        result.area = config.width * config.width;
	    }
	    return result;
	}
	exports.createSquare = createSquare;


/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	var sumFunc;
	sumFunc = function (value1, value2) {
	    return value1 + value2;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = sumFunc;


/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Animal = (function () {
	    function Animal(type) {
	        this.type = type;
	    }
	    return Animal;
	}());
	exports.Animal = Animal;
	var Dog = (function (_super) {
	    __extends(Dog, _super);
	    function Dog(type, name) {
	        _super.call(this, type);
	        this.name = name;
	    }
	    return Dog;
	}(Animal));
	exports.Dog = Dog;


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map