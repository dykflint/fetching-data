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
}
html,
button,
input {
  font-family: "Source Sans Pro", Helvetica, sans-serif;
  color: #666;
}
button,
input {
  font-size: 100%;
  margin: 0;
  max-width: 100%;
  vertical-align: baseline;
}
h1 {
  color: black;
  text-align: center;
}
#container {
  display: flex;
  flex-direction: column;
  background-color: #ffc927;
}
#imgheader {
  flex: 1 1 0;
}
img {
  width: 100%;
}
#sucolumn {
  flex: 2 1 0;
}

/* Put copyright text at the bottom of the image */
#imgheader {
  position: relative;
  background-color: #ffc927;
}
#textoverimage {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: absolute;
  bottom: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 3rem;
}

/* form settings */
input,
input:focus {
  outline: 0;
}
input:focus::placeholder {
  color: transparent;
}
input,
input:valid {
  background-color: #fff;
  border: 1px solid #d8d8d8;
  padding: 24px 10px 12px;
  font-size: 15px;
  font-size: 1rem;
}
#suform {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
form div[id^="su"] {
  display: flex;
  flex-direction: column;
}
input {
  border: 2px solid red;
}

/* Label Styles */
#suform label {
  padding: 5px 5px;
  display: none;
  position: absolute;
  /* top: 15px;
    left: 26px; */
  color: #666;
  font-size: 14px;
  -webkit-animation: silo-fade 0.2s;
  -moz-animation: silo-fade 0.2s;
  animation: silo-fade 0.2s;
  max-width: 80%;
}

#suform input:focus + label,
#suform input[required]:valid + label,
#suform input:not(:placeholder-shown) + label {
  display: block;
}
/* Button styling */
#su-confirm {
  display: flex;
  flex-direction: column;
  align-items: center;
}
#su-confirm button,
#su-confirm button:hover {
  width: max-content;
  padding: 15px;
  border-radius: 15px;
  border: none;
  background-color: #5ab173;
  color: black;
  font-weight: bold;
  cursor: pointer;
}

#email {
  width: 100%;
}
#contactinfo,
#passwordconfirmation {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
/* put source at the bottom center */
#imgheader > p {
  position: absolute;
  bottom: 0;
  padding: 0 25%;
}
/* Animations */
@-webkit-keyframes silo-fade {
  0% {
    opacity: 0;
    -webkit-transform: translateY(-1.4em);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
  }
}
@-moz-keyframes silo-fade {
  0% {
    opacity: 0;
    -webkit-transform: translateY(-1.4em);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
  }
}
@keyframes silo-fade {
  0% {
    opacity: 0;
    -webkit-transform: translateY(-1.4em);
    -moz-transform: translateY(-1.4em);
    -ms-transform: translateY(-1.4em);
    -o-transform: translateY(-1.4em);
    transform: translateY(-1.4em);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
  }
}

@media screen and (min-width: 700px) {
  #container {
    display: flex;
    flex-direction: row;
    gap: 20px;
    height: 100vh;
  }
  #sucolumn {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    width: 100% !important;
  }
  #imgheader {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #ffc927;
    width: 20%;
  }
  /* put source at the bottom center */
  #imgheader > p {
    position: absolute;
    bottom: 0;
    padding: 0 15%;
  }
  img {
    /* height: 100vh; */
    width: 100%;
    overflow: auto;
    background-color: #ffc927;
  }
  form div[id^="su"] {
    display: flex;
    flex-direction: row;
    width: 100%;
  }
  #suform {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  #contactinfo,
  #passwordconfirmation {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 20%;
  }
  #su-confirm {
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: left;
    gap: 20px;
  }
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,qCAAqC;AACrC;EACE,8BAA8B;EAC9B,2BAA2B;EAC3B,sBAAsB;AACxB;AACA;;;EAGE,qDAAqD;EACrD,WAAW;AACb;AACA;;EAEE,eAAe;EACf,SAAS;EACT,eAAe;EACf,wBAAwB;AAC1B;AACA;EACE,YAAY;EACZ,kBAAkB;AACpB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,yBAAyB;AAC3B;AACA;EACE,WAAW;AACb;AACA;EACE,WAAW;AACb;AACA;EACE,WAAW;AACb;;AAEA,kDAAkD;AAClD;EACE,kBAAkB;EAClB,yBAAyB;AAC3B;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;EACX,kBAAkB;EAClB,WAAW;EACX,oCAAoC;EACpC,YAAY;EACZ,eAAe;AACjB;;AAEA,kBAAkB;AAClB;;EAEE,UAAU;AACZ;AACA;EACE,kBAAkB;AACpB;AACA;;EAEE,sBAAsB;EACtB,yBAAyB;EACzB,uBAAuB;EACvB,eAAe;EACf,eAAe;AACjB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;AACA;EACE,aAAa;EACb,sBAAsB;AACxB;AACA;EACE,qBAAqB;AACvB;;AAEA,iBAAiB;AACjB;EACE,gBAAgB;EAChB,aAAa;EACb,kBAAkB;EAClB;iBACe;EACf,WAAW;EACX,eAAe;EACf,iCAAiC;EACjC,8BAA8B;EAC9B,yBAAyB;EACzB,cAAc;AAChB;;AAEA;;;EAGE,cAAc;AAChB;AACA,mBAAmB;AACnB;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;AACA;;EAEE,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,YAAY;EACZ,yBAAyB;EACzB,YAAY;EACZ,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,WAAW;AACb;AACA;;EAEE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;AACA,oCAAoC;AACpC;EACE,kBAAkB;EAClB,SAAS;EACT,cAAc;AAChB;AACA,eAAe;AACf;EACE;IACE,UAAU;IACV,qCAAqC;EACvC;EACA;IACE,UAAU;IACV,gCAAgC;EAClC;AACF;AACA;EACE;IACE,UAAU;IACV,qCAAqC;EACvC;EACA;IACE,UAAU;IACV,gCAAgC;EAClC;AACF;AACA;EACE;IACE,UAAU;IACV,qCAAqC;IACrC,kCAAkC;IAClC,iCAAiC;IACjC,gCAAgC;IAChC,6BAA6B;EAC/B;EACA;IACE,UAAU;IACV,gCAAgC;IAChC,6BAA6B;IAC7B,4BAA4B;IAC5B,2BAA2B;IAC3B,wBAAwB;EAC1B;AACF;;AAEA;EACE;IACE,aAAa;IACb,mBAAmB;IACnB,SAAS;IACT,aAAa;EACf;EACA;IACE,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;IACT,sBAAsB;EACxB;EACA;IACE,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,yBAAyB;IACzB,UAAU;EACZ;EACA,oCAAoC;EACpC;IACE,kBAAkB;IAClB,SAAS;IACT,cAAc;EAChB;EACA;IACE,mBAAmB;IACnB,WAAW;IACX,cAAc;IACd,yBAAyB;EAC3B;EACA;IACE,aAAa;IACb,mBAAmB;IACnB,WAAW;EACb;EACA;IACE,aAAa;IACb,sBAAsB;IACtB,SAAS;EACX;EACA;;IAEE,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,QAAQ;EACV;EACA;IACE,aAAa;IACb,sBAAsB;IACtB,iBAAiB;IACjB,qBAAqB;IACrB,SAAS;EACX;AACF","sourcesContent":["/* Pre-defines some common settings */\n* {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\nhtml,\nbutton,\ninput {\n  font-family: \"Source Sans Pro\", Helvetica, sans-serif;\n  color: #666;\n}\nbutton,\ninput {\n  font-size: 100%;\n  margin: 0;\n  max-width: 100%;\n  vertical-align: baseline;\n}\nh1 {\n  color: black;\n  text-align: center;\n}\n#container {\n  display: flex;\n  flex-direction: column;\n  background-color: #ffc927;\n}\n#imgheader {\n  flex: 1 1 0;\n}\nimg {\n  width: 100%;\n}\n#sucolumn {\n  flex: 2 1 0;\n}\n\n/* Put copyright text at the bottom of the image */\n#imgheader {\n  position: relative;\n  background-color: #ffc927;\n}\n#textoverimage {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  position: absolute;\n  bottom: 50%;\n  background-color: rgba(0, 0, 0, 0.5);\n  color: white;\n  font-size: 3rem;\n}\n\n/* form settings */\ninput,\ninput:focus {\n  outline: 0;\n}\ninput:focus::placeholder {\n  color: transparent;\n}\ninput,\ninput:valid {\n  background-color: #fff;\n  border: 1px solid #d8d8d8;\n  padding: 24px 10px 12px;\n  font-size: 15px;\n  font-size: 1rem;\n}\n#suform {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\nform div[id^=\"su\"] {\n  display: flex;\n  flex-direction: column;\n}\ninput {\n  border: 2px solid red;\n}\n\n/* Label Styles */\n#suform label {\n  padding: 5px 5px;\n  display: none;\n  position: absolute;\n  /* top: 15px;\n    left: 26px; */\n  color: #666;\n  font-size: 14px;\n  -webkit-animation: silo-fade 0.2s;\n  -moz-animation: silo-fade 0.2s;\n  animation: silo-fade 0.2s;\n  max-width: 80%;\n}\n\n#suform input:focus + label,\n#suform input[required]:valid + label,\n#suform input:not(:placeholder-shown) + label {\n  display: block;\n}\n/* Button styling */\n#su-confirm {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n#su-confirm button,\n#su-confirm button:hover {\n  width: max-content;\n  padding: 15px;\n  border-radius: 15px;\n  border: none;\n  background-color: #5ab173;\n  color: black;\n  font-weight: bold;\n  cursor: pointer;\n}\n\n#email {\n  width: 100%;\n}\n#contactinfo,\n#passwordconfirmation {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n/* put source at the bottom center */\n#imgheader > p {\n  position: absolute;\n  bottom: 0;\n  padding: 0 25%;\n}\n/* Animations */\n@-webkit-keyframes silo-fade {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(-1.4em);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n  }\n}\n@-moz-keyframes silo-fade {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(-1.4em);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n  }\n}\n@keyframes silo-fade {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(-1.4em);\n    -moz-transform: translateY(-1.4em);\n    -ms-transform: translateY(-1.4em);\n    -o-transform: translateY(-1.4em);\n    transform: translateY(-1.4em);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n    -moz-transform: translateY(0);\n    -ms-transform: translateY(0);\n    -o-transform: translateY(0);\n    transform: translateY(0);\n  }\n}\n\n@media screen and (min-width: 700px) {\n  #container {\n    display: flex;\n    flex-direction: row;\n    gap: 20px;\n    height: 100vh;\n  }\n  #sucolumn {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 20px;\n    width: 100% !important;\n  }\n  #imgheader {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    background-color: #ffc927;\n    width: 20%;\n  }\n  /* put source at the bottom center */\n  #imgheader > p {\n    position: absolute;\n    bottom: 0;\n    padding: 0 15%;\n  }\n  img {\n    /* height: 100vh; */\n    width: 100%;\n    overflow: auto;\n    background-color: #ffc927;\n  }\n  form div[id^=\"su\"] {\n    display: flex;\n    flex-direction: row;\n    width: 100%;\n  }\n  #suform {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n  }\n  #contactinfo,\n  #passwordconfirmation {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    gap: 20%;\n  }\n  #su-confirm {\n    display: flex;\n    flex-direction: column;\n    align-items: left;\n    justify-content: left;\n    gap: 20px;\n  }\n}\n"],"sourceRoot":""}]);
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

// Form Validation using JS
// For Email, Country, Zip Code,
//  password and password confirmation (patch passwords)
// The labels can act as additional error containers
const email = document.querySelector('input[name="email"');
const emailLabel = document.querySelector('label[for="email"]');
const country = document.querySelector('input[name="country"]');
const countryLabel = document.querySelector('label[for="country"]');
const zipCode = document.querySelector('input[name="zipcode"]');
const zipCodeLabel = document.querySelector('label[for="zipcode"]');
const setPassword = document.querySelector('input[name="setpassword"]');
const setPasswordLabel = document.querySelector('label[for="setpassword"]');
const confirmPassword = document.querySelector('input[name="confirmpassword"]');
const confirmPasswordLabel = document.querySelector('label[for="confirmpassword"]');
// Email Validation
const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
email.addEventListener("input", () => {
  if (emailRegExp.test(email.value)) {
    emailLabel.innerHTML = "Email*";
    email.setCustomValidity("");
  } else {
    emailLabel.innerHTML = "Email* <span style='color:red'>(give a proper email)</span>";
    email.setCustomValidity("invalid");
  }
});
// Country Validation
country.addEventListener("input", () => {
  if (country.value.length >= 2) {
    countryLabel.innerHTML = "Country*";
    country.setCustomValidity("");
  } else {
    countryLabel.innerHTML = "Country* <span style='color:red'>(Is that a proper country?)</span>";
    country.setCustomValidity("invalid");
  }
});
// zip code validation
const zipCodeRegExp = /\d\d\d\d\d/;
zipCode.addEventListener("input", () => {
  if (zipCodeRegExp.test(zipCode.value)) {
    zipCodeLabel.innerHTML = "Zip Code*";
    zipCode.setCustomValidity("");
  } else {
    zipCodeLabel.innerHTML = "Zip Code* <span style='color:red'>(Zip Code must match XXXXX format)</span>";
    zipCode.setCustomValidity("invalid");
  }
});
// Password validation
const specialChars = /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/;
setPassword.addEventListener("input", () => {
  if (setPassword.value.length >= 8) {
    if (specialChars.test(setPassword.value)) {
      setPasswordLabel.innerHTML = "Password*";
      setPassword.setCustomValidity("");
    } else {
      // no special characters - set one
      setPasswordLabel.innerHTML = "Password* <span style='color:red'>(missing special character)</span>";
      setPassword.setCustomValidity("invalid");
    }
  } else {
    // less than 8
    setPasswordLabel.innerHTML = "Password* <span style='color:red'>(at least 8 characters)</span>";
    setPassword.setCustomValidity("invalid");
  }
});
// must match setPassword
confirmPassword.addEventListener("input", () => {
  if (setPassword.value === confirmPassword.value) {
    confirmPasswordLabel.innerHTML = "Confirm Password*";
    confirmPassword.setCustomValidity("");
  } else {
    confirmPasswordLabel.innerHTML = "Confirm Password* <span style='color:red'>(doesn't match)</span>";
    confirmPassword.setCustomValidity("invalid");
  }
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sdUZBQXVGLE1BQU0sWUFBWSxhQUFhLGFBQWEsTUFBTSxPQUFPLFlBQVksV0FBVyxLQUFLLE1BQU0sVUFBVSxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLFlBQVksTUFBTSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsT0FBTyxZQUFZLE9BQU8sVUFBVSxLQUFLLEtBQUssWUFBWSxNQUFNLE1BQU0sWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sWUFBWSxNQUFNLFlBQVksV0FBVyxZQUFZLE1BQU0sTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLE9BQU8sVUFBVSxNQUFNLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxN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Z0JBQWdCLENBQUNPLFNBQVMsR0FBRyxXQUFXO01BQ3hDUixXQUFXLENBQUNTLGlCQUFpQixDQUFDLEVBQUUsQ0FBQztJQUNuQyxDQUFDLE1BQU07TUFDTDtNQUNBUixnQkFBZ0IsQ0FBQ08sU0FBUyxHQUN4QixzRUFBc0U7TUFDeEVSLFdBQVcsQ0FBQ1MsaUJBQWlCLENBQUMsU0FBUyxDQUFDO0lBQzFDO0VBQ0YsQ0FBQyxNQUFNO0lBQ0w7SUFDQVIsZ0JBQWdCLENBQUNPLFNBQVMsR0FDeEIsa0VBQWtFO0lBQ3BFUixXQUFXLENBQUNTLGlCQUFpQixDQUFDLFNBQVMsQ0FBQztFQUMxQztBQUNGLENBQUMsQ0FBQztBQUNGO0FBQ0FQLGVBQWUsQ0FBQ0csZ0JBQWdCLENBQUMsT0FBTyxFQUFFLE1BQU07RUFDOUMsSUFBSUwsV0FBVyxDQUFDTyxLQUFLLEtBQUtMLGVBQWUsQ0FBQ0ssS0FBSyxFQUFFO0lBQy9DSixvQkFBb0IsQ0FBQ0ssU0FBUyxHQUFHLG1CQUFtQjtJQUNwRE4sZUFBZSxDQUFDTyxpQkFBaUIsQ0FBQyxFQUFFLENBQUM7RUFDdkMsQ0FBQyxNQUFNO0lBQ0xOLG9CQUFvQixDQUFDSyxTQUFTLEdBQzVCLGtFQUFrRTtJQUNwRU4sZUFBZSxDQUFDTyxpQkFBaUIsQ0FBQyxTQUFTLENBQUM7RUFDOUM7QUFDRixDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBQcmUtZGVmaW5lcyBzb21lIGNvbW1vbiBzZXR0aW5ncyAqL1xuKiB7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuaHRtbCxcbmJ1dHRvbixcbmlucHV0IHtcbiAgZm9udC1mYW1pbHk6IFwiU291cmNlIFNhbnMgUHJvXCIsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICM2NjY7XG59XG5idXR0b24sXG5pbnB1dCB7XG4gIGZvbnQtc2l6ZTogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cbmgxIHtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4jY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYzkyNztcbn1cbiNpbWdoZWFkZXIge1xuICBmbGV4OiAxIDEgMDtcbn1cbmltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuI3N1Y29sdW1uIHtcbiAgZmxleDogMiAxIDA7XG59XG5cbi8qIFB1dCBjb3B5cmlnaHQgdGV4dCBhdCB0aGUgYm90dG9tIG9mIHRoZSBpbWFnZSAqL1xuI2ltZ2hlYWRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYzkyNztcbn1cbiN0ZXh0b3ZlcmltYWdlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAzcmVtO1xufVxuXG4vKiBmb3JtIHNldHRpbmdzICovXG5pbnB1dCxcbmlucHV0OmZvY3VzIHtcbiAgb3V0bGluZTogMDtcbn1cbmlucHV0OmZvY3VzOjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbmlucHV0LFxuaW5wdXQ6dmFsaWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDhkOGQ4O1xuICBwYWRkaW5nOiAyNHB4IDEwcHggMTJweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXNpemU6IDFyZW07XG59XG4jc3Vmb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxMHB4O1xufVxuZm9ybSBkaXZbaWRePVwic3VcIl0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuaW5wdXQge1xuICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XG59XG5cbi8qIExhYmVsIFN0eWxlcyAqL1xuI3N1Zm9ybSBsYWJlbCB7XG4gIHBhZGRpbmc6IDVweCA1cHg7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgLyogdG9wOiAxNXB4O1xuICAgIGxlZnQ6IDI2cHg7ICovXG4gIGNvbG9yOiAjNjY2O1xuICBmb250LXNpemU6IDE0cHg7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzaWxvLWZhZGUgMC4ycztcbiAgLW1vei1hbmltYXRpb246IHNpbG8tZmFkZSAwLjJzO1xuICBhbmltYXRpb246IHNpbG8tZmFkZSAwLjJzO1xuICBtYXgtd2lkdGg6IDgwJTtcbn1cblxuI3N1Zm9ybSBpbnB1dDpmb2N1cyArIGxhYmVsLFxuI3N1Zm9ybSBpbnB1dFtyZXF1aXJlZF06dmFsaWQgKyBsYWJlbCxcbiNzdWZvcm0gaW5wdXQ6bm90KDpwbGFjZWhvbGRlci1zaG93bikgKyBsYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLyogQnV0dG9uIHN0eWxpbmcgKi9cbiNzdS1jb25maXJtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbiNzdS1jb25maXJtIGJ1dHRvbixcbiNzdS1jb25maXJtIGJ1dHRvbjpob3ZlciB7XG4gIHdpZHRoOiBtYXgtY29udGVudDtcbiAgcGFkZGluZzogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWFiMTczO1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiNlbWFpbCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuI2NvbnRhY3RpbmZvLFxuI3Bhc3N3b3JkY29uZmlybWF0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxMHB4O1xufVxuLyogcHV0IHNvdXJjZSBhdCB0aGUgYm90dG9tIGNlbnRlciAqL1xuI2ltZ2hlYWRlciA+IHAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgcGFkZGluZzogMCAyNSU7XG59XG4vKiBBbmltYXRpb25zICovXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2lsby1mYWRlIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEuNGVtKTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG59XG5ALW1vei1rZXlmcmFtZXMgc2lsby1mYWRlIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEuNGVtKTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHNpbG8tZmFkZSB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xLjRlbSk7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEuNGVtKTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xLjRlbSk7XG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xLjRlbSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xLjRlbSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzAwcHgpIHtcbiAgI2NvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGdhcDogMjBweDtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICB9XG4gICNzdWNvbHVtbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAyMHB4O1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIH1cbiAgI2ltZ2hlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmM5Mjc7XG4gICAgd2lkdGg6IDIwJTtcbiAgfVxuICAvKiBwdXQgc291cmNlIGF0IHRoZSBib3R0b20gY2VudGVyICovXG4gICNpbWdoZWFkZXIgPiBwIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIHBhZGRpbmc6IDAgMTUlO1xuICB9XG4gIGltZyB7XG4gICAgLyogaGVpZ2h0OiAxMDB2aDsgKi9cbiAgICB3aWR0aDogMTAwJTtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjOTI3O1xuICB9XG4gIGZvcm0gZGl2W2lkXj1cInN1XCJdIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgI3N1Zm9ybSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMjBweDtcbiAgfVxuICAjY29udGFjdGluZm8sXG4gICNwYXNzd29yZGNvbmZpcm1hdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBnYXA6IDIwJTtcbiAgfVxuICAjc3UtY29uZmlybSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBsZWZ0O1xuICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcbiAgICBnYXA6IDIwcHg7XG4gIH1cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxxQ0FBcUM7QUFDckM7RUFDRSw4QkFBOEI7RUFDOUIsMkJBQTJCO0VBQzNCLHNCQUFzQjtBQUN4QjtBQUNBOzs7RUFHRSxxREFBcUQ7RUFDckQsV0FBVztBQUNiO0FBQ0E7O0VBRUUsZUFBZTtFQUNmLFNBQVM7RUFDVCxlQUFlO0VBQ2Ysd0JBQXdCO0FBQzFCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLFdBQVc7QUFDYjs7QUFFQSxrREFBa0Q7QUFDbEQ7RUFDRSxrQkFBa0I7RUFDbEIseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsb0NBQW9DO0VBQ3BDLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBLGtCQUFrQjtBQUNsQjs7RUFFRSxVQUFVO0FBQ1o7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBOztFQUVFLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekIsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDtBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBLGlCQUFpQjtBQUNqQjtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCO2lCQUNlO0VBQ2YsV0FBVztFQUNYLGVBQWU7RUFDZixpQ0FBaUM7RUFDakMsOEJBQThCO0VBQzlCLHlCQUF5QjtFQUN6QixjQUFjO0FBQ2hCOztBQUVBOzs7RUFHRSxjQUFjO0FBQ2hCO0FBQ0EsbUJBQW1CO0FBQ25CO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7QUFDQTs7RUFFRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjtBQUNBOztFQUVFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztBQUNYO0FBQ0Esb0NBQW9DO0FBQ3BDO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxjQUFjO0FBQ2hCO0FBQ0EsZUFBZTtBQUNmO0VBQ0U7SUFDRSxVQUFVO0lBQ1YscUNBQXFDO0VBQ3ZDO0VBQ0E7SUFDRSxVQUFVO0lBQ1YsZ0NBQWdDO0VBQ2xDO0FBQ0Y7QUFDQTtFQUNFO0lBQ0UsVUFBVTtJQUNWLHFDQUFxQztFQUN2QztFQUNBO0lBQ0UsVUFBVTtJQUNWLGdDQUFnQztFQUNsQztBQUNGO0FBQ0E7RUFDRTtJQUNFLFVBQVU7SUFDVixxQ0FBcUM7SUFDckMsa0NBQWtDO0lBQ2xDLGlDQUFpQztJQUNqQyxnQ0FBZ0M7SUFDaEMsNkJBQTZCO0VBQy9CO0VBQ0E7SUFDRSxVQUFVO0lBQ1YsZ0NBQWdDO0lBQ2hDLDZCQUE2QjtJQUM3Qiw0QkFBNEI7SUFDNUIsMkJBQTJCO0lBQzNCLHdCQUF3QjtFQUMxQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxhQUFhO0VBQ2Y7RUFDQTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1Qsc0JBQXNCO0VBQ3hCO0VBQ0E7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2Qix5QkFBeUI7SUFDekIsVUFBVTtFQUNaO0VBQ0Esb0NBQW9DO0VBQ3BDO0lBQ0Usa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGNBQWM7SUFDZCx5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsV0FBVztFQUNiO0VBQ0E7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7RUFDWDtFQUNBOztJQUVFLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLFFBQVE7RUFDVjtFQUNBO0lBQ0UsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLFNBQVM7RUFDWDtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIFByZS1kZWZpbmVzIHNvbWUgY29tbW9uIHNldHRpbmdzICovXFxuKiB7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5odG1sLFxcbmJ1dHRvbixcXG5pbnB1dCB7XFxuICBmb250LWZhbWlseTogXFxcIlNvdXJjZSBTYW5zIFByb1xcXCIsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiAjNjY2O1xcbn1cXG5idXR0b24sXFxuaW5wdXQge1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgbWFyZ2luOiAwO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5oMSB7XFxuICBjb2xvcjogYmxhY2s7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbiNjb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjOTI3O1xcbn1cXG4jaW1naGVhZGVyIHtcXG4gIGZsZXg6IDEgMSAwO1xcbn1cXG5pbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbiNzdWNvbHVtbiB7XFxuICBmbGV4OiAyIDEgMDtcXG59XFxuXFxuLyogUHV0IGNvcHlyaWdodCB0ZXh0IGF0IHRoZSBib3R0b20gb2YgdGhlIGltYWdlICovXFxuI2ltZ2hlYWRlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjOTI3O1xcbn1cXG4jdGV4dG92ZXJpbWFnZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiA1MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbi8qIGZvcm0gc2V0dGluZ3MgKi9cXG5pbnB1dCxcXG5pbnB1dDpmb2N1cyB7XFxuICBvdXRsaW5lOiAwO1xcbn1cXG5pbnB1dDpmb2N1czo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5pbnB1dCxcXG5pbnB1dDp2YWxpZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q4ZDhkODtcXG4gIHBhZGRpbmc6IDI0cHggMTBweCAxMnB4O1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG4jc3Vmb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5mb3JtIGRpdltpZF49XFxcInN1XFxcIl0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbmlucHV0IHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcXG59XFxuXFxuLyogTGFiZWwgU3R5bGVzICovXFxuI3N1Zm9ybSBsYWJlbCB7XFxuICBwYWRkaW5nOiA1cHggNXB4O1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIC8qIHRvcDogMTVweDtcXG4gICAgbGVmdDogMjZweDsgKi9cXG4gIGNvbG9yOiAjNjY2O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgLXdlYmtpdC1hbmltYXRpb246IHNpbG8tZmFkZSAwLjJzO1xcbiAgLW1vei1hbmltYXRpb246IHNpbG8tZmFkZSAwLjJzO1xcbiAgYW5pbWF0aW9uOiBzaWxvLWZhZGUgMC4ycztcXG4gIG1heC13aWR0aDogODAlO1xcbn1cXG5cXG4jc3Vmb3JtIGlucHV0OmZvY3VzICsgbGFiZWwsXFxuI3N1Zm9ybSBpbnB1dFtyZXF1aXJlZF06dmFsaWQgKyBsYWJlbCxcXG4jc3Vmb3JtIGlucHV0Om5vdCg6cGxhY2Vob2xkZXItc2hvd24pICsgbGFiZWwge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi8qIEJ1dHRvbiBzdHlsaW5nICovXFxuI3N1LWNvbmZpcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4jc3UtY29uZmlybSBidXR0b24sXFxuI3N1LWNvbmZpcm0gYnV0dG9uOmhvdmVyIHtcXG4gIHdpZHRoOiBtYXgtY29udGVudDtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVhYjE3MztcXG4gIGNvbG9yOiBibGFjaztcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jZW1haWwge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbiNjb250YWN0aW5mbyxcXG4jcGFzc3dvcmRjb25maXJtYXRpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxufVxcbi8qIHB1dCBzb3VyY2UgYXQgdGhlIGJvdHRvbSBjZW50ZXIgKi9cXG4jaW1naGVhZGVyID4gcCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDA7XFxuICBwYWRkaW5nOiAwIDI1JTtcXG59XFxuLyogQW5pbWF0aW9ucyAqL1xcbkAtd2Via2l0LWtleWZyYW1lcyBzaWxvLWZhZGUge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMS40ZW0pO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgfVxcbn1cXG5ALW1vei1rZXlmcmFtZXMgc2lsby1mYWRlIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEuNGVtKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBzaWxvLWZhZGUge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMS40ZW0pO1xcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMS40ZW0pO1xcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xLjRlbSk7XFxuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMS40ZW0pO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEuNGVtKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MDBweCkge1xcbiAgI2NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGdhcDogMjBweDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gIH1cXG4gICNzdWNvbHVtbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XFxuICB9XFxuICAjaW1naGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmM5Mjc7XFxuICAgIHdpZHRoOiAyMCU7XFxuICB9XFxuICAvKiBwdXQgc291cmNlIGF0IHRoZSBib3R0b20gY2VudGVyICovXFxuICAjaW1naGVhZGVyID4gcCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBwYWRkaW5nOiAwIDE1JTtcXG4gIH1cXG4gIGltZyB7XFxuICAgIC8qIGhlaWdodDogMTAwdmg7ICovXFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYzkyNztcXG4gIH1cXG4gIGZvcm0gZGl2W2lkXj1cXFwic3VcXFwiXSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbiAgI3N1Zm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMjBweDtcXG4gIH1cXG4gICNjb250YWN0aW5mbyxcXG4gICNwYXNzd29yZGNvbmZpcm1hdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZ2FwOiAyMCU7XFxuICB9XFxuICAjc3UtY29uZmlybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBsZWZ0O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XFxuICAgIGdhcDogMjBweDtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG4vLyBGb3JtIFZhbGlkYXRpb24gdXNpbmcgSlNcbi8vIEZvciBFbWFpbCwgQ291bnRyeSwgWmlwIENvZGUsXG4vLyAgcGFzc3dvcmQgYW5kIHBhc3N3b3JkIGNvbmZpcm1hdGlvbiAocGF0Y2ggcGFzc3dvcmRzKVxuLy8gVGhlIGxhYmVscyBjYW4gYWN0IGFzIGFkZGl0aW9uYWwgZXJyb3IgY29udGFpbmVyc1xuY29uc3QgZW1haWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwiZW1haWxcIicpO1xuY29uc3QgZW1haWxMYWJlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2xhYmVsW2Zvcj1cImVtYWlsXCJdJyk7XG5jb25zdCBjb3VudHJ5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cImNvdW50cnlcIl0nKTtcbmNvbnN0IGNvdW50cnlMYWJlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2xhYmVsW2Zvcj1cImNvdW50cnlcIl0nKTtcbmNvbnN0IHppcENvZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwiemlwY29kZVwiXScpO1xuY29uc3QgemlwQ29kZUxhYmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbGFiZWxbZm9yPVwiemlwY29kZVwiXScpO1xuY29uc3Qgc2V0UGFzc3dvcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwic2V0cGFzc3dvcmRcIl0nKTtcbmNvbnN0IHNldFBhc3N3b3JkTGFiZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdsYWJlbFtmb3I9XCJzZXRwYXNzd29yZFwiXScpO1xuY29uc3QgY29uZmlybVBhc3N3b3JkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cImNvbmZpcm1wYXNzd29yZFwiXScpO1xuY29uc3QgY29uZmlybVBhc3N3b3JkTGFiZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAnbGFiZWxbZm9yPVwiY29uZmlybXBhc3N3b3JkXCJdJyxcbik7XG4vLyBFbWFpbCBWYWxpZGF0aW9uXG5jb25zdCBlbWFpbFJlZ0V4cCA9XG4gIC9eW2EtekEtWjAtOS4hIyQlJicqKy89P15fYHt8fX4tXStAW2EtekEtWjAtOS1dKyg/OlxcLlthLXpBLVowLTktXSspKiQvO1xuZW1haWwuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcbiAgaWYgKGVtYWlsUmVnRXhwLnRlc3QoZW1haWwudmFsdWUpKSB7XG4gICAgZW1haWxMYWJlbC5pbm5lckhUTUwgPSBcIkVtYWlsKlwiO1xuICAgIGVtYWlsLnNldEN1c3RvbVZhbGlkaXR5KFwiXCIpO1xuICB9IGVsc2Uge1xuICAgIGVtYWlsTGFiZWwuaW5uZXJIVE1MID1cbiAgICAgIFwiRW1haWwqIDxzcGFuIHN0eWxlPSdjb2xvcjpyZWQnPihnaXZlIGEgcHJvcGVyIGVtYWlsKTwvc3Bhbj5cIjtcbiAgICBlbWFpbC5zZXRDdXN0b21WYWxpZGl0eShcImludmFsaWRcIik7XG4gIH1cbn0pO1xuLy8gQ291bnRyeSBWYWxpZGF0aW9uXG5jb3VudHJ5LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XG4gIGlmIChjb3VudHJ5LnZhbHVlLmxlbmd0aCA+PSAyKSB7XG4gICAgY291bnRyeUxhYmVsLmlubmVySFRNTCA9IFwiQ291bnRyeSpcIjtcbiAgICBjb3VudHJ5LnNldEN1c3RvbVZhbGlkaXR5KFwiXCIpO1xuICB9IGVsc2Uge1xuICAgIGNvdW50cnlMYWJlbC5pbm5lckhUTUwgPVxuICAgICAgXCJDb3VudHJ5KiA8c3BhbiBzdHlsZT0nY29sb3I6cmVkJz4oSXMgdGhhdCBhIHByb3BlciBjb3VudHJ5Pyk8L3NwYW4+XCI7XG4gICAgY291bnRyeS5zZXRDdXN0b21WYWxpZGl0eShcImludmFsaWRcIik7XG4gIH1cbn0pO1xuLy8gemlwIGNvZGUgdmFsaWRhdGlvblxuY29uc3QgemlwQ29kZVJlZ0V4cCA9IC9cXGRcXGRcXGRcXGRcXGQvO1xuemlwQ29kZS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xuICBpZiAoemlwQ29kZVJlZ0V4cC50ZXN0KHppcENvZGUudmFsdWUpKSB7XG4gICAgemlwQ29kZUxhYmVsLmlubmVySFRNTCA9IFwiWmlwIENvZGUqXCI7XG4gICAgemlwQ29kZS5zZXRDdXN0b21WYWxpZGl0eShcIlwiKTtcbiAgfSBlbHNlIHtcbiAgICB6aXBDb2RlTGFiZWwuaW5uZXJIVE1MID1cbiAgICAgIFwiWmlwIENvZGUqIDxzcGFuIHN0eWxlPSdjb2xvcjpyZWQnPihaaXAgQ29kZSBtdXN0IG1hdGNoIFhYWFhYIGZvcm1hdCk8L3NwYW4+XCI7XG4gICAgemlwQ29kZS5zZXRDdXN0b21WYWxpZGl0eShcImludmFsaWRcIik7XG4gIH1cbn0pO1xuLy8gUGFzc3dvcmQgdmFsaWRhdGlvblxuY29uc3Qgc3BlY2lhbENoYXJzID0gL1tgIUAjJCVeJiooKV8rXFwtPVtcXF17fTsnOlwiXFxcXHwsLjw+Lz9+XS87XG5zZXRQYXNzd29yZC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xuICBpZiAoc2V0UGFzc3dvcmQudmFsdWUubGVuZ3RoID49IDgpIHtcbiAgICBpZiAoc3BlY2lhbENoYXJzLnRlc3Qoc2V0UGFzc3dvcmQudmFsdWUpKSB7XG4gICAgICBzZXRQYXNzd29yZExhYmVsLmlubmVySFRNTCA9IFwiUGFzc3dvcmQqXCI7XG4gICAgICBzZXRQYXNzd29yZC5zZXRDdXN0b21WYWxpZGl0eShcIlwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gbm8gc3BlY2lhbCBjaGFyYWN0ZXJzIC0gc2V0IG9uZVxuICAgICAgc2V0UGFzc3dvcmRMYWJlbC5pbm5lckhUTUwgPVxuICAgICAgICBcIlBhc3N3b3JkKiA8c3BhbiBzdHlsZT0nY29sb3I6cmVkJz4obWlzc2luZyBzcGVjaWFsIGNoYXJhY3Rlcik8L3NwYW4+XCI7XG4gICAgICBzZXRQYXNzd29yZC5zZXRDdXN0b21WYWxpZGl0eShcImludmFsaWRcIik7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIGxlc3MgdGhhbiA4XG4gICAgc2V0UGFzc3dvcmRMYWJlbC5pbm5lckhUTUwgPVxuICAgICAgXCJQYXNzd29yZCogPHNwYW4gc3R5bGU9J2NvbG9yOnJlZCc+KGF0IGxlYXN0IDggY2hhcmFjdGVycyk8L3NwYW4+XCI7XG4gICAgc2V0UGFzc3dvcmQuc2V0Q3VzdG9tVmFsaWRpdHkoXCJpbnZhbGlkXCIpO1xuICB9XG59KTtcbi8vIG11c3QgbWF0Y2ggc2V0UGFzc3dvcmRcbmNvbmZpcm1QYXNzd29yZC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xuICBpZiAoc2V0UGFzc3dvcmQudmFsdWUgPT09IGNvbmZpcm1QYXNzd29yZC52YWx1ZSkge1xuICAgIGNvbmZpcm1QYXNzd29yZExhYmVsLmlubmVySFRNTCA9IFwiQ29uZmlybSBQYXNzd29yZCpcIjtcbiAgICBjb25maXJtUGFzc3dvcmQuc2V0Q3VzdG9tVmFsaWRpdHkoXCJcIik7XG4gIH0gZWxzZSB7XG4gICAgY29uZmlybVBhc3N3b3JkTGFiZWwuaW5uZXJIVE1MID1cbiAgICAgIFwiQ29uZmlybSBQYXNzd29yZCogPHNwYW4gc3R5bGU9J2NvbG9yOnJlZCc+KGRvZXNuJ3QgbWF0Y2gpPC9zcGFuPlwiO1xuICAgIGNvbmZpcm1QYXNzd29yZC5zZXRDdXN0b21WYWxpZGl0eShcImludmFsaWRcIik7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImVtYWlsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZW1haWxMYWJlbCIsImNvdW50cnkiLCJjb3VudHJ5TGFiZWwiLCJ6aXBDb2RlIiwiemlwQ29kZUxhYmVsIiwic2V0UGFzc3dvcmQiLCJzZXRQYXNzd29yZExhYmVsIiwiY29uZmlybVBhc3N3b3JkIiwiY29uZmlybVBhc3N3b3JkTGFiZWwiLCJlbWFpbFJlZ0V4cCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0ZXN0IiwidmFsdWUiLCJpbm5lckhUTUwiLCJzZXRDdXN0b21WYWxpZGl0eSIsImxlbmd0aCIsInppcENvZGVSZWdFeHAiLCJzcGVjaWFsQ2hhcnMiXSwic291cmNlUm9vdCI6IiJ9