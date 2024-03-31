/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Pre-defines some common settings */
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
#weather-container {
  width: min(80%, 500px);
  height: max-content;
  display: grid;
  grid-template-columns: 7fr 3fr;
  background-color: #22c55e;
  padding: 0.5rem;
  border-radius: 25px;
  color: white;
  font-family: "Fira Code";
  font-weight: bold;
  /* opacity: 0.7; */
}
#today {
  height: 100%;
  grid-area: 1/1/2/2;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
}
#location {
  grid-area: 1/1/2/4;
  display: grid;
  text-align: center;
  align-items: center;
  text-align: center;
}
#rain-chance {
  grid-area: 2/1/3/2;
  display: flex;
  justify-content: center;
  /* grid-template-columns: 1; */
  /* grid-template-rows: 2; */
  /* gap: 0px; */
  text-align: center;
  align-items: center;
}
#rain-chance img {
  width: 50%;
}
#weather-icon {
  grid-area: 2/2/3/3;
  display: grid;
  text-align: center;
  align-items: center;
}
#temperature {
  grid-area: 2/3/3/4;
  display: grid;
  text-align: center;
  align-items: center;
}
#forecast {
  grid-area: 1/2/3/3;
  display: grid;
  grid-template-columns: 1;
  grid-template-rows: 2;
  justify-content: center;
  align-items: center;
}
#day-one,
#day-two,
#day-three {
  display: grid;
  gap: 15px;
  text-align: center;
}

/* location changer */
#search-input,
#search-input:focus {
  margin: auto;
  outline: none;
  background: transparent;
  border: none;
  color: white;
  font-family: "Fira Code";
  font-weight: bold;
  text-align: center;
  /* border-radius: 5px; */
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,qCAAqC;AACrC;EACE,8BAA8B;EAC9B,2BAA2B;EAC3B,sBAAsB;EACtB,UAAU;EACV,SAAS;AACX;AACA;EACE,sBAAsB;EACtB,mBAAmB;EACnB,aAAa;EACb,8BAA8B;EAC9B,yBAAyB;EACzB,eAAe;EACf,mBAAmB;EACnB,YAAY;EACZ,wBAAwB;EACxB,iBAAiB;EACjB,kBAAkB;AACpB;AACA;EACE,YAAY;EACZ,kBAAkB;EAClB,aAAa;EACb,kCAAkC;AACpC;AACA;EACE,kBAAkB;EAClB,aAAa;EACb,kBAAkB;EAClB,mBAAmB;EACnB,kBAAkB;AACpB;AACA;EACE,kBAAkB;EAClB,aAAa;EACb,uBAAuB;EACvB,8BAA8B;EAC9B,2BAA2B;EAC3B,cAAc;EACd,kBAAkB;EAClB,mBAAmB;AACrB;AACA;EACE,UAAU;AACZ;AACA;EACE,kBAAkB;EAClB,aAAa;EACb,kBAAkB;EAClB,mBAAmB;AACrB;AACA;EACE,kBAAkB;EAClB,aAAa;EACb,kBAAkB;EAClB,mBAAmB;AACrB;AACA;EACE,kBAAkB;EAClB,aAAa;EACb,wBAAwB;EACxB,qBAAqB;EACrB,uBAAuB;EACvB,mBAAmB;AACrB;AACA;;;EAGE,aAAa;EACb,SAAS;EACT,kBAAkB;AACpB;;AAEA,qBAAqB;AACrB;;EAEE,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,YAAY;EACZ,YAAY;EACZ,wBAAwB;EACxB,iBAAiB;EACjB,kBAAkB;EAClB,wBAAwB;AAC1B","sourcesContent":["/* Pre-defines some common settings */\n* {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n#weather-container {\n  width: min(80%, 500px);\n  height: max-content;\n  display: grid;\n  grid-template-columns: 7fr 3fr;\n  background-color: #22c55e;\n  padding: 0.5rem;\n  border-radius: 25px;\n  color: white;\n  font-family: \"Fira Code\";\n  font-weight: bold;\n  /* opacity: 0.7; */\n}\n#today {\n  height: 100%;\n  grid-area: 1/1/2/2;\n  display: grid;\n  grid-template-columns: 1fr 3fr 1fr;\n}\n#location {\n  grid-area: 1/1/2/4;\n  display: grid;\n  text-align: center;\n  align-items: center;\n  text-align: center;\n}\n#rain-chance {\n  grid-area: 2/1/3/2;\n  display: flex;\n  justify-content: center;\n  /* grid-template-columns: 1; */\n  /* grid-template-rows: 2; */\n  /* gap: 0px; */\n  text-align: center;\n  align-items: center;\n}\n#rain-chance img {\n  width: 50%;\n}\n#weather-icon {\n  grid-area: 2/2/3/3;\n  display: grid;\n  text-align: center;\n  align-items: center;\n}\n#temperature {\n  grid-area: 2/3/3/4;\n  display: grid;\n  text-align: center;\n  align-items: center;\n}\n#forecast {\n  grid-area: 1/2/3/3;\n  display: grid;\n  grid-template-columns: 1;\n  grid-template-rows: 2;\n  justify-content: center;\n  align-items: center;\n}\n#day-one,\n#day-two,\n#day-three {\n  display: grid;\n  gap: 15px;\n  text-align: center;\n}\n\n/* location changer */\n#search-input,\n#search-input:focus {\n  margin: auto;\n  outline: none;\n  background: transparent;\n  border: none;\n  color: white;\n  font-family: \"Fira Code\";\n  font-weight: bold;\n  text-align: center;\n  /* border-radius: 5px; */\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/images/cloudy.svg":
/*!*******************************!*\
  !*** ./src/images/cloudy.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/9b994df202e2abcd3cfd.svg";

/***/ }),

/***/ "./src/images/rainChance.svg":
/*!***********************************!*\
  !*** ./src/images/rainChance.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/326a96911d2f155487f0.svg";

/***/ }),

/***/ "./src/images/sunny.svg":
/*!******************************!*\
  !*** ./src/images/sunny.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/79682a3039aeffb721a7.svg";

/***/ }),

/***/ "./src/images/sunnyWithClouds.svg":
/*!****************************************!*\
  !*** ./src/images/sunnyWithClouds.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/932758eb8269fb776fe2.svg";

/***/ }),

/***/ "./src/images/sunnyWithRain.svg":
/*!**************************************!*\
  !*** ./src/images/sunnyWithRain.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/4c17e50d35caa21261b7.svg";

/***/ }),

/***/ "./src/images/sunnyWithThunder.svg":
/*!*****************************************!*\
  !*** ./src/images/sunnyWithThunder.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/404a9e452e6509bb1429.svg";

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _images_sunny_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/sunny.svg */ "./src/images/sunny.svg");
/* harmony import */ var _images_rainChance_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/rainChance.svg */ "./src/images/rainChance.svg");
/* harmony import */ var _images_sunnyWithClouds_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/sunnyWithClouds.svg */ "./src/images/sunnyWithClouds.svg");
/* harmony import */ var _images_sunnyWithRain_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/sunnyWithRain.svg */ "./src/images/sunnyWithRain.svg");
/* harmony import */ var _images_sunnyWithThunder_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/sunnyWithThunder.svg */ "./src/images/sunnyWithThunder.svg");
/* harmony import */ var _images_cloudy_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/cloudy.svg */ "./src/images/cloudy.svg");







const API_KEY = "a48238e2ce2d4eff87e113534242803";
// https://api.weatherapi.com/v1/current.json?key=11111111111111111&q=london
const locationDiv = document.querySelector("#location");
const rainChanceImg = document.querySelector("#rain-chance-img");
rainChanceImg.src = _images_rainChance_svg__WEBPACK_IMPORTED_MODULE_2__;
const rainChancePercentage = document.querySelector("#rain-chance-percentage");
const weatherIcon = document.querySelector("#weather-icon");
const todayTempDiv = document.querySelector("#temperature");
const dayOneWeekday = document.querySelector("#day-one .weekday");
const dayOneMinMax = document.querySelector("#day-one .min-max-temp");
const dayTwoWeekday = document.querySelector("#day-two .weekday");
const dayTwoMinMax = document.querySelector("#day-two .min-max-temp");
const dayThreeWeekday = document.querySelector("#day-three .weekday");
const dayThreeMinMax = document.querySelector("#day-three .min-max-temp");
const searchInput = document.querySelector("#search-input");
async function checkWeather(location) {
  try {
    const dayUrl = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}`;
    const responseDay = await fetch(dayUrl, {
      mode: "cors"
    });
    const forecastUrl = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&days=3&q=${location}`;
    const responseForecast = await fetch(forecastUrl, {
      mode: "cors"
    });
    const weatherDataDay = await responseDay.json();
    const weatherDataForecast = await responseForecast.json();
    const currentValues = weatherDataDay.current;
    const dayOne = setForecastValues(weatherDataForecast.forecast.forecastday[0].day);
    const dayTwo = setForecastValues(weatherDataForecast.forecast.forecastday[1].day);
    const dayThree = setForecastValues(weatherDataForecast.forecast.forecastday[2].day);
    const currentTemp = setCurrentTemp(currentValues);
    const currentDate = weatherDataForecast.forecast.forecastday[0].date;
    showWeather(location, currentTemp, dayOne, dayTwo, dayThree);
  } catch (error) {
    console.log(error);
  }
}
checkWeather("London");
// function showWeatherData(city, country, temp_c, wind_dir) {}
function showWeather(location, currentTemp, dayOne, dayTwo, dayThree) {
  // locationDiv.textContent = location;
  searchInput.value = location;
  todayTempDiv.textContent = `${currentTemp}°C`;
  setWeatherIcon(dayOne.condition);
  rainChancePercentage.textContent = dayOne.rainChance;
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const now = new Date().getDay();
  dayOneWeekday.textContent = "Today";
  dayTwoWeekday.textContent = "Tomorrow";
  dayThreeWeekday.textContent = weekDays[now + 2];
  dayOneMinMax.textContent = `${dayOne.minTemp}°C/${dayOne.maxTemp}°C`;
  dayTwoMinMax.textContent = `${dayTwo.minTemp}°C/${dayTwo.maxTemp}°C`;
  dayThreeMinMax.textContent = `${dayThree.minTemp}°C/${dayThree.maxTemp}°C`;
}
function setCurrentTemp(today) {
  return today.temp_c;
}
function setWeatherIcon(condition) {
  if (condition.includes("sunny")) {
    weatherIcon.src = _images_sunny_svg__WEBPACK_IMPORTED_MODULE_1__;
  } else if (condition.includes("patchy")) {
    weatherIcon.src = _images_sunnyWithClouds_svg__WEBPACK_IMPORTED_MODULE_3__;
  } else if (condition.includes("rain")) {
    weatherIcon.src = _images_sunnyWithRain_svg__WEBPACK_IMPORTED_MODULE_4__;
  } else if (condition.includes("thunder")) {
    weatherIcon.src = _images_sunnyWithThunder_svg__WEBPACK_IMPORTED_MODULE_5__;
  } else {
    weatherIcon.src = _images_cloudy_svg__WEBPACK_IMPORTED_MODULE_6__;
  }
}
function setForecastValues(day) {
  return {
    minTemp: day.mintemp_c,
    maxTemp: day.maxtemp_c,
    condition: day.condition.text,
    rainChance: day.daily_chance_of_rain
  };
}
// Change location
searchInput.onkeypress = function (e) {
  if (!e) e = window.event;
  const keyCode = e.code || e.key;
  if (keyCode === "Enter") {
    const searchQuery = searchInput.value;
    checkWeather(searchQuery);
  }
};
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIFByZS1kZWZpbmVzIHNvbWUgY29tbW9uIHNldHRpbmdzICovXG4qIHtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cbiN3ZWF0aGVyLWNvbnRhaW5lciB7XG4gIHdpZHRoOiBtaW4oODAlLCA1MDBweCk7XG4gIGhlaWdodDogbWF4LWNvbnRlbnQ7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogN2ZyIDNmcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyYzU1ZTtcbiAgcGFkZGluZzogMC41cmVtO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBcIkZpcmEgQ29kZVwiO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgLyogb3BhY2l0eTogMC43OyAqL1xufVxuI3RvZGF5IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBncmlkLWFyZWE6IDEvMS8yLzI7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmciAxZnI7XG59XG4jbG9jYXRpb24ge1xuICBncmlkLWFyZWE6IDEvMS8yLzQ7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuI3JhaW4tY2hhbmNlIHtcbiAgZ3JpZC1hcmVhOiAyLzEvMy8yO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgLyogZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxOyAqL1xuICAvKiBncmlkLXRlbXBsYXRlLXJvd3M6IDI7ICovXG4gIC8qIGdhcDogMHB4OyAqL1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4jcmFpbi1jaGFuY2UgaW1nIHtcbiAgd2lkdGg6IDUwJTtcbn1cbiN3ZWF0aGVyLWljb24ge1xuICBncmlkLWFyZWE6IDIvMi8zLzM7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbiN0ZW1wZXJhdHVyZSB7XG4gIGdyaWQtYXJlYTogMi8zLzMvNDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuI2ZvcmVjYXN0IHtcbiAgZ3JpZC1hcmVhOiAxLzIvMy8zO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4jZGF5LW9uZSxcbiNkYXktdHdvLFxuI2RheS10aHJlZSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMTVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4vKiBsb2NhdGlvbiBjaGFuZ2VyICovXG4jc2VhcmNoLWlucHV0LFxuI3NlYXJjaC1pbnB1dDpmb2N1cyB7XG4gIG1hcmdpbjogYXV0bztcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LWZhbWlseTogXCJGaXJhIENvZGVcIjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLyogYm9yZGVyLXJhZGl1czogNXB4OyAqL1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLHFDQUFxQztBQUNyQztFQUNFLDhCQUE4QjtFQUM5QiwyQkFBMkI7RUFDM0Isc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixTQUFTO0FBQ1g7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLDhCQUE4QjtFQUM5Qix5QkFBeUI7RUFDekIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osd0JBQXdCO0VBQ3hCLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGtDQUFrQztBQUNwQztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsOEJBQThCO0VBQzlCLDJCQUEyQjtFQUMzQixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsVUFBVTtBQUNaO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYix3QkFBd0I7RUFDeEIscUJBQXFCO0VBQ3JCLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7QUFDQTs7O0VBR0UsYUFBYTtFQUNiLFNBQVM7RUFDVCxrQkFBa0I7QUFDcEI7O0FBRUEscUJBQXFCO0FBQ3JCOztFQUVFLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixZQUFZO0VBQ1osd0JBQXdCO0VBQ3hCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsd0JBQXdCO0FBQzFCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIFByZS1kZWZpbmVzIHNvbWUgY29tbW9uIHNldHRpbmdzICovXFxuKiB7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuI3dlYXRoZXItY29udGFpbmVyIHtcXG4gIHdpZHRoOiBtaW4oODAlLCA1MDBweCk7XFxuICBoZWlnaHQ6IG1heC1jb250ZW50O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogN2ZyIDNmcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMmM1NWU7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJGaXJhIENvZGVcXFwiO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAvKiBvcGFjaXR5OiAwLjc7ICovXFxufVxcbiN0b2RheSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBncmlkLWFyZWE6IDEvMS8yLzI7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyIDFmcjtcXG59XFxuI2xvY2F0aW9uIHtcXG4gIGdyaWQtYXJlYTogMS8xLzIvNDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4jcmFpbi1jaGFuY2Uge1xcbiAgZ3JpZC1hcmVhOiAyLzEvMy8yO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgLyogZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxOyAqL1xcbiAgLyogZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyOyAqL1xcbiAgLyogZ2FwOiAwcHg7ICovXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4jcmFpbi1jaGFuY2UgaW1nIHtcXG4gIHdpZHRoOiA1MCU7XFxufVxcbiN3ZWF0aGVyLWljb24ge1xcbiAgZ3JpZC1hcmVhOiAyLzIvMy8zO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbiN0ZW1wZXJhdHVyZSB7XFxuICBncmlkLWFyZWE6IDIvMy8zLzQ7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuI2ZvcmVjYXN0IHtcXG4gIGdyaWQtYXJlYTogMS8yLzMvMztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbiNkYXktb25lLFxcbiNkYXktdHdvLFxcbiNkYXktdGhyZWUge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdhcDogMTVweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLyogbG9jYXRpb24gY2hhbmdlciAqL1xcbiNzZWFyY2gtaW5wdXQsXFxuI3NlYXJjaC1pbnB1dDpmb2N1cyB7XFxuICBtYXJnaW46IGF1dG87XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LWZhbWlseTogXFxcIkZpcmEgQ29kZVxcXCI7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIC8qIGJvcmRlci1yYWRpdXM6IDVweDsgKi9cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHN1bm55SW1nIGZyb20gXCIuL2ltYWdlcy9zdW5ueS5zdmdcIjtcbmltcG9ydCByYWluQ2hhbmNlSWNvbiBmcm9tIFwiLi9pbWFnZXMvcmFpbkNoYW5jZS5zdmdcIjtcbmltcG9ydCBzdW5ueVdpdGhDbG91ZHNJbWcgZnJvbSBcIi4vaW1hZ2VzL3N1bm55V2l0aENsb3Vkcy5zdmdcIjtcbmltcG9ydCBzdW5ueVdpdGhSYWluSW1nIGZyb20gXCIuL2ltYWdlcy9zdW5ueVdpdGhSYWluLnN2Z1wiO1xuaW1wb3J0IHN1bm55V2l0aFRodW5kZXJJbWcgZnJvbSBcIi4vaW1hZ2VzL3N1bm55V2l0aFRodW5kZXIuc3ZnXCI7XG5pbXBvcnQgY2xvdWR5SW1nIGZyb20gXCIuL2ltYWdlcy9jbG91ZHkuc3ZnXCI7XG5cbmNvbnN0IEFQSV9LRVkgPSBcImE0ODIzOGUyY2UyZDRlZmY4N2UxMTM1MzQyNDI4MDNcIjtcbi8vIGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2N1cnJlbnQuanNvbj9rZXk9MTExMTExMTExMTExMTExMTEmcT1sb25kb25cbmNvbnN0IGxvY2F0aW9uRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsb2NhdGlvblwiKTtcbmNvbnN0IHJhaW5DaGFuY2VJbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3JhaW4tY2hhbmNlLWltZ1wiKTtcbnJhaW5DaGFuY2VJbWcuc3JjID0gcmFpbkNoYW5jZUljb247XG5jb25zdCByYWluQ2hhbmNlUGVyY2VudGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmFpbi1jaGFuY2UtcGVyY2VudGFnZVwiKTtcbmNvbnN0IHdlYXRoZXJJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN3ZWF0aGVyLWljb25cIik7XG5jb25zdCB0b2RheVRlbXBEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RlbXBlcmF0dXJlXCIpO1xuY29uc3QgZGF5T25lV2Vla2RheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGF5LW9uZSAud2Vla2RheVwiKTtcbmNvbnN0IGRheU9uZU1pbk1heCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGF5LW9uZSAubWluLW1heC10ZW1wXCIpO1xuY29uc3QgZGF5VHdvV2Vla2RheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGF5LXR3byAud2Vla2RheVwiKTtcbmNvbnN0IGRheVR3b01pbk1heCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGF5LXR3byAubWluLW1heC10ZW1wXCIpO1xuY29uc3QgZGF5VGhyZWVXZWVrZGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkYXktdGhyZWUgLndlZWtkYXlcIik7XG5jb25zdCBkYXlUaHJlZU1pbk1heCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGF5LXRocmVlIC5taW4tbWF4LXRlbXBcIik7XG5jb25zdCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VhcmNoLWlucHV0XCIpO1xuYXN5bmMgZnVuY3Rpb24gY2hlY2tXZWF0aGVyKGxvY2F0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgZGF5VXJsID0gYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2N1cnJlbnQuanNvbj9rZXk9JHtBUElfS0VZfSZxPSR7bG9jYXRpb259YDtcbiAgICBjb25zdCByZXNwb25zZURheSA9IGF3YWl0IGZldGNoKGRheVVybCwgeyBtb2RlOiBcImNvcnNcIiB9KTtcbiAgICBjb25zdCBmb3JlY2FzdFVybCA9IGBodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PSR7QVBJX0tFWX0mZGF5cz0zJnE9JHtsb2NhdGlvbn1gO1xuICAgIGNvbnN0IHJlc3BvbnNlRm9yZWNhc3QgPSBhd2FpdCBmZXRjaChmb3JlY2FzdFVybCwgeyBtb2RlOiBcImNvcnNcIiB9KTtcbiAgICBjb25zdCB3ZWF0aGVyRGF0YURheSA9IGF3YWl0IHJlc3BvbnNlRGF5Lmpzb24oKTtcbiAgICBjb25zdCB3ZWF0aGVyRGF0YUZvcmVjYXN0ID0gYXdhaXQgcmVzcG9uc2VGb3JlY2FzdC5qc29uKCk7XG4gICAgY29uc3QgY3VycmVudFZhbHVlcyA9IHdlYXRoZXJEYXRhRGF5LmN1cnJlbnQ7XG4gICAgY29uc3QgZGF5T25lID0gc2V0Rm9yZWNhc3RWYWx1ZXMoXG4gICAgICB3ZWF0aGVyRGF0YUZvcmVjYXN0LmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheSxcbiAgICApO1xuICAgIGNvbnN0IGRheVR3byA9IHNldEZvcmVjYXN0VmFsdWVzKFxuICAgICAgd2VhdGhlckRhdGFGb3JlY2FzdC5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5kYXksXG4gICAgKTtcbiAgICBjb25zdCBkYXlUaHJlZSA9IHNldEZvcmVjYXN0VmFsdWVzKFxuICAgICAgd2VhdGhlckRhdGFGb3JlY2FzdC5mb3JlY2FzdC5mb3JlY2FzdGRheVsyXS5kYXksXG4gICAgKTtcbiAgICBjb25zdCBjdXJyZW50VGVtcCA9IHNldEN1cnJlbnRUZW1wKGN1cnJlbnRWYWx1ZXMpO1xuICAgIGNvbnN0IGN1cnJlbnREYXRlID0gd2VhdGhlckRhdGFGb3JlY2FzdC5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXRlO1xuICAgIHNob3dXZWF0aGVyKGxvY2F0aW9uLCBjdXJyZW50VGVtcCwgZGF5T25lLCBkYXlUd28sIGRheVRocmVlKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gIH1cbn1cbmNoZWNrV2VhdGhlcihcIkxvbmRvblwiKTtcbi8vIGZ1bmN0aW9uIHNob3dXZWF0aGVyRGF0YShjaXR5LCBjb3VudHJ5LCB0ZW1wX2MsIHdpbmRfZGlyKSB7fVxuZnVuY3Rpb24gc2hvd1dlYXRoZXIobG9jYXRpb24sIGN1cnJlbnRUZW1wLCBkYXlPbmUsIGRheVR3bywgZGF5VGhyZWUpIHtcbiAgLy8gbG9jYXRpb25EaXYudGV4dENvbnRlbnQgPSBsb2NhdGlvbjtcbiAgc2VhcmNoSW5wdXQudmFsdWUgPSBsb2NhdGlvbjtcbiAgdG9kYXlUZW1wRGl2LnRleHRDb250ZW50ID0gYCR7Y3VycmVudFRlbXB9wrBDYDtcbiAgc2V0V2VhdGhlckljb24oZGF5T25lLmNvbmRpdGlvbik7XG4gIHJhaW5DaGFuY2VQZXJjZW50YWdlLnRleHRDb250ZW50ID0gZGF5T25lLnJhaW5DaGFuY2U7XG4gIGNvbnN0IHdlZWtEYXlzID0gW1wiU3VuXCIsIFwiTW9uXCIsIFwiVHVlXCIsIFwiV2VkXCIsIFwiVGh1XCIsIFwiRnJpXCIsIFwiU2F0XCJdO1xuICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpLmdldERheSgpO1xuICBkYXlPbmVXZWVrZGF5LnRleHRDb250ZW50ID0gXCJUb2RheVwiO1xuICBkYXlUd29XZWVrZGF5LnRleHRDb250ZW50ID0gXCJUb21vcnJvd1wiO1xuICBkYXlUaHJlZVdlZWtkYXkudGV4dENvbnRlbnQgPSB3ZWVrRGF5c1tub3cgKyAyXTtcbiAgZGF5T25lTWluTWF4LnRleHRDb250ZW50ID0gYCR7ZGF5T25lLm1pblRlbXB9wrBDLyR7ZGF5T25lLm1heFRlbXB9wrBDYDtcbiAgZGF5VHdvTWluTWF4LnRleHRDb250ZW50ID0gYCR7ZGF5VHdvLm1pblRlbXB9wrBDLyR7ZGF5VHdvLm1heFRlbXB9wrBDYDtcbiAgZGF5VGhyZWVNaW5NYXgudGV4dENvbnRlbnQgPSBgJHtkYXlUaHJlZS5taW5UZW1wfcKwQy8ke2RheVRocmVlLm1heFRlbXB9wrBDYDtcbn1cbmZ1bmN0aW9uIHNldEN1cnJlbnRUZW1wKHRvZGF5KSB7XG4gIHJldHVybiB0b2RheS50ZW1wX2M7XG59XG5mdW5jdGlvbiBzZXRXZWF0aGVySWNvbihjb25kaXRpb24pIHtcbiAgaWYgKGNvbmRpdGlvbi5pbmNsdWRlcyhcInN1bm55XCIpKSB7XG4gICAgd2VhdGhlckljb24uc3JjID0gc3VubnlJbWc7XG4gIH0gZWxzZSBpZiAoY29uZGl0aW9uLmluY2x1ZGVzKFwicGF0Y2h5XCIpKSB7XG4gICAgd2VhdGhlckljb24uc3JjID0gc3VubnlXaXRoQ2xvdWRzSW1nO1xuICB9IGVsc2UgaWYgKGNvbmRpdGlvbi5pbmNsdWRlcyhcInJhaW5cIikpIHtcbiAgICB3ZWF0aGVySWNvbi5zcmMgPSBzdW5ueVdpdGhSYWluSW1nO1xuICB9IGVsc2UgaWYgKGNvbmRpdGlvbi5pbmNsdWRlcyhcInRodW5kZXJcIikpIHtcbiAgICB3ZWF0aGVySWNvbi5zcmMgPSBzdW5ueVdpdGhUaHVuZGVySW1nO1xuICB9IGVsc2Uge1xuICAgIHdlYXRoZXJJY29uLnNyYyA9IGNsb3VkeUltZztcbiAgfVxufVxuZnVuY3Rpb24gc2V0Rm9yZWNhc3RWYWx1ZXMoZGF5KSB7XG4gIHJldHVybiB7XG4gICAgbWluVGVtcDogZGF5Lm1pbnRlbXBfYyxcbiAgICBtYXhUZW1wOiBkYXkubWF4dGVtcF9jLFxuICAgIGNvbmRpdGlvbjogZGF5LmNvbmRpdGlvbi50ZXh0LFxuICAgIHJhaW5DaGFuY2U6IGRheS5kYWlseV9jaGFuY2Vfb2ZfcmFpbixcbiAgfTtcbn1cbi8vIENoYW5nZSBsb2NhdGlvblxuc2VhcmNoSW5wdXQub25rZXlwcmVzcyA9IGZ1bmN0aW9uIChlKSB7XG4gIGlmICghZSkgZSA9IHdpbmRvdy5ldmVudDtcbiAgY29uc3Qga2V5Q29kZSA9IGUuY29kZSB8fCBlLmtleTtcbiAgaWYgKGtleUNvZGUgPT09IFwiRW50ZXJcIikge1xuICAgIGNvbnN0IHNlYXJjaFF1ZXJ5ID0gc2VhcmNoSW5wdXQudmFsdWU7XG4gICAgY2hlY2tXZWF0aGVyKHNlYXJjaFF1ZXJ5KTtcbiAgfVxufTtcbiJdLCJuYW1lcyI6WyJzdW5ueUltZyIsInJhaW5DaGFuY2VJY29uIiwic3VubnlXaXRoQ2xvdWRzSW1nIiwic3VubnlXaXRoUmFpbkltZyIsInN1bm55V2l0aFRodW5kZXJJbWciLCJjbG91ZHlJbWciLCJBUElfS0VZIiwibG9jYXRpb25EaXYiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJyYWluQ2hhbmNlSW1nIiwic3JjIiwicmFpbkNoYW5jZVBlcmNlbnRhZ2UiLCJ3ZWF0aGVySWNvbiIsInRvZGF5VGVtcERpdiIsImRheU9uZVdlZWtkYXkiLCJkYXlPbmVNaW5NYXgiLCJkYXlUd29XZWVrZGF5IiwiZGF5VHdvTWluTWF4IiwiZGF5VGhyZWVXZWVrZGF5IiwiZGF5VGhyZWVNaW5NYXgiLCJzZWFyY2hJbnB1dCIsImNoZWNrV2VhdGhlciIsImxvY2F0aW9uIiwiZGF5VXJsIiwicmVzcG9uc2VEYXkiLCJmZXRjaCIsIm1vZGUiLCJmb3JlY2FzdFVybCIsInJlc3BvbnNlRm9yZWNhc3QiLCJ3ZWF0aGVyRGF0YURheSIsImpzb24iLCJ3ZWF0aGVyRGF0YUZvcmVjYXN0IiwiY3VycmVudFZhbHVlcyIsImN1cnJlbnQiLCJkYXlPbmUiLCJzZXRGb3JlY2FzdFZhbHVlcyIsImZvcmVjYXN0IiwiZm9yZWNhc3RkYXkiLCJkYXkiLCJkYXlUd28iLCJkYXlUaHJlZSIsImN1cnJlbnRUZW1wIiwic2V0Q3VycmVudFRlbXAiLCJjdXJyZW50RGF0ZSIsImRhdGUiLCJzaG93V2VhdGhlciIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInZhbHVlIiwidGV4dENvbnRlbnQiLCJzZXRXZWF0aGVySWNvbiIsImNvbmRpdGlvbiIsInJhaW5DaGFuY2UiLCJ3ZWVrRGF5cyIsIm5vdyIsIkRhdGUiLCJnZXREYXkiLCJtaW5UZW1wIiwibWF4VGVtcCIsInRvZGF5IiwidGVtcF9jIiwiaW5jbHVkZXMiLCJtaW50ZW1wX2MiLCJtYXh0ZW1wX2MiLCJ0ZXh0IiwiZGFpbHlfY2hhbmNlX29mX3JhaW4iLCJvbmtleXByZXNzIiwiZSIsIndpbmRvdyIsImV2ZW50Iiwia2V5Q29kZSIsImNvZGUiLCJrZXkiLCJzZWFyY2hRdWVyeSJdLCJzb3VyY2VSb290IjoiIn0=