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
___CSS_LOADER_EXPORT___.push([module.id, `html{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    --content-color:  #ebe7ff;
    --sidebar-color: #e7e2ff;
    --header-color: #ddd6fe;
    --btn-color: #a78bfa
}
body{
    display: grid;
    grid-template-rows: auto 1fr;
    min-height: 100vh;
    margin: 0;
    padding: 0;
}
.logo{
    font-weight: bold;
}
.header{
    display: flex;
    justify-content: center;
    padding: 16px;
    background-color: var(--header-color);
}
.logo{
    font-size: 2.5rem;
}
.main{
    background-color: var(--content-color);
    display: grid;
    grid-template-columns: 0.2fr 1fr;
}
.sidebar{
    padding: 16px;
    background-color: var(--sidebar-color);
}
.project-btns{
    font-size: 1.5rem;
    margin-top: 16px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    cursor: pointer;
}
.project-btn{
    display: flex;
    border-radius: 8px;
    padding: 8px;
    align-items: center;
    gap: 8px;
    justify-content: space-between;
    background-color: var(--sidebar-color);
}
.project-btn-title:hover,.project-btn-close:hover, button:hover, .btn-new-project:hover{
    scale: 0.97;
}
.content{
    padding: 20px 40px;
    display: grid;
    grid-template-rows: auto 1fr;
    grid-gap: 16px;
}
.content-title{
    font-size: 1.5rem ;
}
.tasks{
    display: flex;
    flex-direction: column;
    gap: 12px;
}
.project-form-container, .task-form-container, .task-details{
    border-radius: 16px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    transition: 200ms ease-in-out;
    padding: 16px;
    z-index: 10;
    background-color: white;
    width: fit-content;
    height: auto;
}
.task-details.active{
    display: flex;
    background-color: var(--content-color);
    flex-direction: column;
    gap: 8px;
    width: 400px;
    transform: translate(-50%, -50%) scale(1);
}
.task-details-header{
    font-size: 1.5rem;

}
.task-form-container{
    width: clamp(250px, 300px, 40%);
}
.project-form-container.active, .task-form-container.active{
    transform: translate(-50%, -50%) scale(1);
}
.project-form, .task-form{
    display: flex;
    flex-direction: column;
    gap: 8px;
}
.task-form > div{
    display: flex;
    flex-direction: column;
    gap: 8px;
}
input{
    border-radius: 8px;
    padding: 8px;
    border: 1px solid var(--btn-color);
    outline: none;
}
button{
    all: unset;
    background-color: var(--btn-color);
    color: white;
    padding: 8px 16px 8px 16px;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    height: fit-content;
    text-align: center;
}
.project-form-overlay, .task-form-overlay, .task-details-overlay{
    position: fixed;
    opacity: 0;
    transition: 200ms ease-in-out;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, .5);
    pointer-events: none;
}
.project-form-overlay.active, .task-form-overlay.active, .task-details-overlay.active{
    opacity: 1;
    pointer-events: all;
}
.task{
    background-color: var(--sidebar-color);
    border-radius: 8px;
    padding: 8px;
    display: flex;
    justify-content: flex-start;
    gap: 16px;
    align-items: center;
}
.task:hover{
    scale: 1.005;
    -webkit-box-shadow: 2px 5px 6px 0px rgba(0,0,0,0.37); 
    box-shadow: 2px 5px 6px 0px rgba(0,0,0,0.37);
}
.task-close, .task-check-box, .project-btn-close{
    height: 24px;
    width: auto;
    cursor: pointer;
}
.task.checked{
    text-decoration: line-through;
    color: gray;
}
.task-date{
    margin-left: auto;
}
#task-description{
}
.project-btn{

}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,4DAA4D;IAC5D,yFAAyF;IACzF,yBAAyB;IACzB,wBAAwB;IACxB,uBAAuB;IACvB;AACJ;AACA;IACI,aAAa;IACb,4BAA4B;IAC5B,iBAAiB;IACjB,SAAS;IACT,UAAU;AACd;AACA;IACI,iBAAiB;AACrB;AACA;IACI,aAAa;IACb,uBAAuB;IACvB,aAAa;IACb,qCAAqC;AACzC;AACA;IACI,iBAAiB;AACrB;AACA;IACI,sCAAsC;IACtC,aAAa;IACb,gCAAgC;AACpC;AACA;IACI,aAAa;IACb,sCAAsC;AAC1C;AACA;IACI,iBAAiB;IACjB,gBAAgB;IAChB,aAAa;IACb,sBAAsB;IACtB,QAAQ;IACR,eAAe;AACnB;AACA;IACI,aAAa;IACb,kBAAkB;IAClB,YAAY;IACZ,mBAAmB;IACnB,QAAQ;IACR,8BAA8B;IAC9B,sCAAsC;AAC1C;AACA;IACI,WAAW;AACf;AACA;IACI,kBAAkB;IAClB,aAAa;IACb,4BAA4B;IAC5B,cAAc;AAClB;AACA;IACI,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;AACA;IACI,mBAAmB;IACnB,eAAe;IACf,QAAQ;IACR,SAAS;IACT,yCAAyC;IACzC,6BAA6B;IAC7B,aAAa;IACb,WAAW;IACX,uBAAuB;IACvB,kBAAkB;IAClB,YAAY;AAChB;AACA;IACI,aAAa;IACb,sCAAsC;IACtC,sBAAsB;IACtB,QAAQ;IACR,YAAY;IACZ,yCAAyC;AAC7C;AACA;IACI,iBAAiB;;AAErB;AACA;IACI,+BAA+B;AACnC;AACA;IACI,yCAAyC;AAC7C;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,QAAQ;AACZ;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,QAAQ;AACZ;AACA;IACI,kBAAkB;IAClB,YAAY;IACZ,kCAAkC;IAClC,aAAa;AACjB;AACA;IACI,UAAU;IACV,kCAAkC;IAClC,YAAY;IACZ,0BAA0B;IAC1B,kBAAkB;IAClB,YAAY;IACZ,eAAe;IACf,mBAAmB;IACnB,kBAAkB;AACtB;AACA;IACI,eAAe;IACf,UAAU;IACV,6BAA6B;IAC7B,MAAM;IACN,OAAO;IACP,QAAQ;IACR,SAAS;IACT,mCAAmC;IACnC,oBAAoB;AACxB;AACA;IACI,UAAU;IACV,mBAAmB;AACvB;AACA;IACI,sCAAsC;IACtC,kBAAkB;IAClB,YAAY;IACZ,aAAa;IACb,2BAA2B;IAC3B,SAAS;IACT,mBAAmB;AACvB;AACA;IACI,YAAY;IACZ,oDAAoD;IACpD,4CAA4C;AAChD;AACA;IACI,YAAY;IACZ,WAAW;IACX,eAAe;AACnB;AACA;IACI,6BAA6B;IAC7B,WAAW;AACf;AACA;IACI,iBAAiB;AACrB;AACA;AACA;AACA;;AAEA","sourcesContent":["html{\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n    --content-color:  #ebe7ff;\r\n    --sidebar-color: #e7e2ff;\r\n    --header-color: #ddd6fe;\r\n    --btn-color: #a78bfa\r\n}\r\nbody{\r\n    display: grid;\r\n    grid-template-rows: auto 1fr;\r\n    min-height: 100vh;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n.logo{\r\n    font-weight: bold;\r\n}\r\n.header{\r\n    display: flex;\r\n    justify-content: center;\r\n    padding: 16px;\r\n    background-color: var(--header-color);\r\n}\r\n.logo{\r\n    font-size: 2.5rem;\r\n}\r\n.main{\r\n    background-color: var(--content-color);\r\n    display: grid;\r\n    grid-template-columns: 0.2fr 1fr;\r\n}\r\n.sidebar{\r\n    padding: 16px;\r\n    background-color: var(--sidebar-color);\r\n}\r\n.project-btns{\r\n    font-size: 1.5rem;\r\n    margin-top: 16px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 8px;\r\n    cursor: pointer;\r\n}\r\n.project-btn{\r\n    display: flex;\r\n    border-radius: 8px;\r\n    padding: 8px;\r\n    align-items: center;\r\n    gap: 8px;\r\n    justify-content: space-between;\r\n    background-color: var(--sidebar-color);\r\n}\r\n.project-btn-title:hover,.project-btn-close:hover, button:hover, .btn-new-project:hover{\r\n    scale: 0.97;\r\n}\r\n.content{\r\n    padding: 20px 40px;\r\n    display: grid;\r\n    grid-template-rows: auto 1fr;\r\n    grid-gap: 16px;\r\n}\r\n.content-title{\r\n    font-size: 1.5rem ;\r\n}\r\n.tasks{\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 12px;\r\n}\r\n.project-form-container, .task-form-container, .task-details{\r\n    border-radius: 16px;\r\n    position: fixed;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%) scale(0);\r\n    transition: 200ms ease-in-out;\r\n    padding: 16px;\r\n    z-index: 10;\r\n    background-color: white;\r\n    width: fit-content;\r\n    height: auto;\r\n}\r\n.task-details.active{\r\n    display: flex;\r\n    background-color: var(--content-color);\r\n    flex-direction: column;\r\n    gap: 8px;\r\n    width: 400px;\r\n    transform: translate(-50%, -50%) scale(1);\r\n}\r\n.task-details-header{\r\n    font-size: 1.5rem;\r\n\r\n}\r\n.task-form-container{\r\n    width: clamp(250px, 300px, 40%);\r\n}\r\n.project-form-container.active, .task-form-container.active{\r\n    transform: translate(-50%, -50%) scale(1);\r\n}\r\n.project-form, .task-form{\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 8px;\r\n}\r\n.task-form > div{\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 8px;\r\n}\r\ninput{\r\n    border-radius: 8px;\r\n    padding: 8px;\r\n    border: 1px solid var(--btn-color);\r\n    outline: none;\r\n}\r\nbutton{\r\n    all: unset;\r\n    background-color: var(--btn-color);\r\n    color: white;\r\n    padding: 8px 16px 8px 16px;\r\n    border-radius: 8px;\r\n    border: none;\r\n    cursor: pointer;\r\n    height: fit-content;\r\n    text-align: center;\r\n}\r\n.project-form-overlay, .task-form-overlay, .task-details-overlay{\r\n    position: fixed;\r\n    opacity: 0;\r\n    transition: 200ms ease-in-out;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background-color: rgba(0, 0, 0, .5);\r\n    pointer-events: none;\r\n}\r\n.project-form-overlay.active, .task-form-overlay.active, .task-details-overlay.active{\r\n    opacity: 1;\r\n    pointer-events: all;\r\n}\r\n.task{\r\n    background-color: var(--sidebar-color);\r\n    border-radius: 8px;\r\n    padding: 8px;\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    gap: 16px;\r\n    align-items: center;\r\n}\r\n.task:hover{\r\n    scale: 1.005;\r\n    -webkit-box-shadow: 2px 5px 6px 0px rgba(0,0,0,0.37); \r\n    box-shadow: 2px 5px 6px 0px rgba(0,0,0,0.37);\r\n}\r\n.task-close, .task-check-box, .project-btn-close{\r\n    height: 24px;\r\n    width: auto;\r\n    cursor: pointer;\r\n}\r\n.task.checked{\r\n    text-decoration: line-through;\r\n    color: gray;\r\n}\r\n.task-date{\r\n    margin-left: auto;\r\n}\r\n#task-description{\r\n}\r\n.project-btn{\r\n\r\n}"],"sourceRoot":""}]);
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

/***/ "./src/projects-handler.js":
/*!*********************************!*\
  !*** ./src/projects-handler.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handleProjects: () => (/* binding */ handleProjects)
/* harmony export */ });
/* harmony import */ var _images_close_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/close.png */ "./src/images/close.png");

const handleProjects = (() => {
    const projectsLibrary = {}

    const addProject = ()=>{
        const newProject = document.createElement('div')
        newProject.classList.add('project-btn')

        const projectText = document.createElement('div')
        projectText.classList.add('project-btn-text')

        const projectTitle = document.createElement('div')
        projectTitle.classList.add('project-btn-title')
        projectTitle.textContent = document.getElementById('new-project-title').value
        projectText.appendChild(projectTitle)

        const closeButton = document.createElement('img')
        closeButton.classList.add('project-btn-close')
        closeButton.src = _images_close_png__WEBPACK_IMPORTED_MODULE_0__

        newProject.appendChild(projectText)
        newProject.appendChild(closeButton)
        document.querySelector(".project-section").appendChild(newProject)

        const projectName = document.getElementById('new-project-title').value
        projectsLibrary[projectName] = []
        console.log(projectsLibrary)
    }
    const addTaskToProject = (project ,task)=>{
        const taskArray = projectsLibrary[project]
        taskArray.push(task)
    }
    const removeTaskFromProject = (_projectName, _taskIndex)=>{
        const taskArray = projectsLibrary[_projectName]
        taskArray.splice(_taskIndex, 1)
        console.log(_taskIndex)
    }
    const getProjectArray = (project)=>{
        return projectsLibrary[project]
    }
    const removeProject = (_projectName)=>{
        delete projectsLibrary[_projectName]
    }
    const checkProject = (_projectName, _taskNumber)=>{
        const project = projectsLibrary[_projectName]
        const task = project[_taskNumber]
        task.checked = 'yes'
    }
    const showTaskDetails = (_projectName, _taskNumber)=>{
        const project = projectsLibrary[_projectName]
        const task = project[_taskNumber]
        document.querySelector('.task-details').classList.add('active')
        document.querySelector('.task-details-overlay').classList.add('active')
        document.querySelector('.task-details-title').textContent = `Title: ${task.title}`
        document.querySelector('.task-details-description').textContent = `Description: ${task.description}`
        document.querySelector('.task-details-date').textContent = `Date: ${task.date}`

    }
    return{addProject, removeProject, getProjectArray, addTaskToProject, removeTaskFromProject, checkProject, showTaskDetails}
})()



/***/ }),

/***/ "./src/tasks-handler.js":
/*!******************************!*\
  !*** ./src/tasks-handler.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handleTasks: () => (/* binding */ handleTasks)
/* harmony export */ });
/* harmony import */ var _projects_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects-handler */ "./src/projects-handler.js");
/* harmony import */ var _images_trash_can_outline_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/trash-can-outline.png */ "./src/images/trash-can-outline.png");
/* harmony import */ var _images_checkbox_outline_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/checkbox-outline.png */ "./src/images/checkbox-outline.png");



const contentTitle = document.querySelector('.content-title')
const contentTasks = document.querySelector('.tasks')
const handleTasks = (()=>{

    const show = (clickedProject)=>{
        contentTitle.textContent = clickedProject
        const projectArray = _projects_handler__WEBPACK_IMPORTED_MODULE_0__.handleProjects.getProjectArray(clickedProject)
        contentTasks.innerHTML = ''
        createTaskElementsOf(projectArray)
    }
    const createTaskElementsOf = (_projectArray)=>{
        _projectArray.forEach(item =>{
            const task = document.createElement('div')
            task.classList.add('task')
            task.dataset.number = _projectArray.indexOf(item)

            if(item.checked === 'yes'){
                task.classList.add('checked')
            }
            const checkBox = document.createElement('img')
            checkBox.classList.add('task-check-box')
            checkBox.src = _images_checkbox_outline_png__WEBPACK_IMPORTED_MODULE_2__
            task.appendChild(checkBox)

            const taskTitle = document.createElement('div')
            taskTitle.classList.add('task-title')
            taskTitle.textContent = item.title
            task.appendChild(taskTitle)

            const taskDate = document.createElement('div')
            taskDate.classList.add('task-date')
            taskDate.textContent = item.date
            task.appendChild(taskDate)
            
            const details = document.createElement('button')
            details.classList.add('see-details')
            details.textContent = 'Details'
            task.appendChild(details)

            const taskClose = document.createElement('img')
            taskClose.src = _images_trash_can_outline_png__WEBPACK_IMPORTED_MODULE_1__
            taskClose.classList.add('task-close')
            taskClose.textContent = 'Delete'
            task.appendChild(taskClose)

            // task.textContent = item
            contentTasks.appendChild(task)
        })
    }
    const add = ()=>{
        if(document.querySelector('.task-form').checkValidity()){
            const taskObject = {
                title: document.getElementById('task-title').value,
                description: document.getElementById('task-description').value,
                date: document.getElementById('task-date').value,
                checked: 'no'
            }
            const projectName = document.querySelector('.content-title').textContent
            _projects_handler__WEBPACK_IMPORTED_MODULE_0__.handleProjects.addTaskToProject(projectName, taskObject)
            show(projectName)
        }

    }
    const remove = (_taskIndex)=>{
        const projectName = document.querySelector('.content-title').textContent
        _projects_handler__WEBPACK_IMPORTED_MODULE_0__.handleProjects.removeTaskFromProject(projectName, _taskIndex)
        show(projectName)
    }
    return{show, add, remove}
})()



/***/ }),

/***/ "./src/images/checkbox-outline.png":
/*!*****************************************!*\
  !*** ./src/images/checkbox-outline.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f7739a29861e2e86e80e.png";

/***/ }),

/***/ "./src/images/close.png":
/*!******************************!*\
  !*** ./src/images/close.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "229d5d4299ec75e20e22.png";

/***/ }),

/***/ "./src/images/trash-can-outline.png":
/*!******************************************!*\
  !*** ./src/images/trash-can-outline.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9d85791232c5153a4295.png";

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
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
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
/* harmony import */ var _projects_handler_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects-handler.js */ "./src/projects-handler.js");
/* harmony import */ var _tasks_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasks-handler */ "./src/tasks-handler.js");



const btnAddProject = document.querySelector('.btn-new-project')
const projectFormContainer = document.querySelector('.project-form-container')
const projectForm = document.querySelector('.project-form')
const projectFormSubmit = document.querySelector('.btn-project-form-submit')
const projectFormOverlay = document.querySelector('.project-form-overlay')
const projectSection = document.querySelector('.project-section')
const btnAddTask = document.querySelector('.btn-new-task')
const taskFormContainer = document.querySelector('.task-form-container')
const taskFormOverlay = document.querySelector('.task-form-overlay')
const taskForm =document.querySelector('.task-form')
const taskFormSubmit = document.querySelector('.btn-task-form-submit')
const tasks = document.querySelector('.tasks')
const taskDetailsOverlay = document.querySelector('.task-details-overlay')

const handleProjectForm = (()=>{
    btnAddProject.addEventListener('click',()=>{
        openProjectForm()
    })
    projectFormSubmit.addEventListener('click',(event)=>{
        event.preventDefault()
        if(!projectForm.checkValidity()){
            projectForm.reportValidity()
        }
        if(projectForm.checkValidity()){
            _projects_handler_js__WEBPACK_IMPORTED_MODULE_1__.handleProjects.addProject()
            closeProjectForm()
        }
    })
    projectFormOverlay.addEventListener('click',()=>{
        closeProjectForm()
    })
})()

const openProjectForm = ()=>{
    projectFormContainer.classList.add('active')
    projectFormOverlay.classList.add('active')
}
const closeProjectForm = ()=>{
    projectFormContainer.classList.remove('active')
    projectFormOverlay.classList.remove('active')
    projectForm.reset()
}
projectSection.addEventListener('click',(clickedElement)=>{
    if(clickedElement.target.classList.contains('project-btn-title')){
        _tasks_handler__WEBPACK_IMPORTED_MODULE_2__.handleTasks.show(clickedElement.target.textContent)       
    }
})
projectSection.addEventListener('click',(clickedElement)=>{
    if(clickedElement.target.classList.contains('project-btn-close')){
        const parent = clickedElement.target.parentElement
        const titleChild = parent.firstChild
        projectSection.removeChild(parent)
        _projects_handler_js__WEBPACK_IMPORTED_MODULE_1__.handleProjects.removeProject(titleChild.textContent) 
    }
})

//all about tasks
const openTaskForm = ()=>{
    taskFormContainer.classList.add('active')
    taskFormOverlay.classList.add('active')
}
const closeTaskForm = ()=>{
    taskFormContainer.classList.remove('active')
    taskFormOverlay.classList.remove('active')
    taskForm.reset()
}
const handleTaskForm = (()=>{
    btnAddTask.addEventListener('click',()=>{
        openTaskForm()
    })
    taskFormOverlay.addEventListener('click',function(){
        closeTaskForm()
    })
    taskFormSubmit.addEventListener('click',(event)=>{
        event.preventDefault()
        _tasks_handler__WEBPACK_IMPORTED_MODULE_2__.handleTasks.add()
        if(!taskForm.checkValidity()){
            taskForm.reportValidity()
        }
        if(taskForm.checkValidity()){
            closeTaskForm()
        }
    })
})()

tasks.addEventListener('click',(_clickedElement)=>{
    if(_clickedElement.target.classList.contains("task-close")){
        const hey = _clickedElement.target.parentElement
        tasks.removeChild(hey)
        _tasks_handler__WEBPACK_IMPORTED_MODULE_2__.handleTasks.remove(hey.dataset.number)
    }
})
tasks.addEventListener('click',(_clickedElement)=>{
    if(_clickedElement.target.classList.contains("see-details")){
        const task = _clickedElement.target.parentElement
        _projects_handler_js__WEBPACK_IMPORTED_MODULE_1__.handleProjects.showTaskDetails(document.querySelector('.content-title').textContent ,task.dataset.number)
    }
})
tasks.addEventListener('click',(_clickedElement)=>{
    if(_clickedElement.target.classList.contains("task-check-box")){
        const task = _clickedElement.target.parentElement
        task.classList.add('checked')
        _projects_handler_js__WEBPACK_IMPORTED_MODULE_1__.handleProjects.checkProject(document.querySelector('.content-title').textContent, task.dataset.number)
    }
})
taskDetailsOverlay.addEventListener('click',()=>{
    taskDetailsOverlay.classList.remove('active')
    document.querySelector('.task-details').classList.remove('active')
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGdGQUFnRixZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksTUFBTSxLQUFLLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUs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QVc7QUFDbkI7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxnRUFBYztBQUN0QjtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsZ0VBQWM7QUFDdEI7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Byb2plY3RzLWhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90YXNrcy1oYW5kbGVyLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGh0bWx7XHJcbiAgICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcclxuICAgIC0tY29udGVudC1jb2xvcjogICNlYmU3ZmY7XHJcbiAgICAtLXNpZGViYXItY29sb3I6ICNlN2UyZmY7XHJcbiAgICAtLWhlYWRlci1jb2xvcjogI2RkZDZmZTtcclxuICAgIC0tYnRuLWNvbG9yOiAjYTc4YmZhXHJcbn1cclxuYm9keXtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcbi5sb2dve1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLmhlYWRlcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItY29sb3IpO1xyXG59XHJcbi5sb2dve1xyXG4gICAgZm9udC1zaXplOiAyLjVyZW07XHJcbn1cclxuLm1haW57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb250ZW50LWNvbG9yKTtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuMmZyIDFmcjtcclxufVxyXG4uc2lkZWJhcntcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWNvbG9yKTtcclxufVxyXG4ucHJvamVjdC1idG5ze1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDhweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4ucHJvamVjdC1idG57XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogOHB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1jb2xvcik7XHJcbn1cclxuLnByb2plY3QtYnRuLXRpdGxlOmhvdmVyLC5wcm9qZWN0LWJ0bi1jbG9zZTpob3ZlciwgYnV0dG9uOmhvdmVyLCAuYnRuLW5ldy1wcm9qZWN0OmhvdmVye1xyXG4gICAgc2NhbGU6IDAuOTc7XHJcbn1cclxuLmNvbnRlbnR7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDQwcHg7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcclxuICAgIGdyaWQtZ2FwOiAxNnB4O1xyXG59XHJcbi5jb250ZW50LXRpdGxle1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW0gO1xyXG59XHJcbi50YXNrc3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAxMnB4O1xyXG59XHJcbi5wcm9qZWN0LWZvcm0tY29udGFpbmVyLCAudGFzay1mb3JtLWNvbnRhaW5lciwgLnRhc2stZGV0YWlsc3tcclxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDApO1xyXG4gICAgdHJhbnNpdGlvbjogMjAwbXMgZWFzZS1pbi1vdXQ7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgei1pbmRleDogMTA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG4udGFzay1kZXRhaWxzLmFjdGl2ZXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb250ZW50LWNvbG9yKTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDhweDtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEpO1xyXG59XHJcbi50YXNrLWRldGFpbHMtaGVhZGVye1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcblxyXG59XHJcbi50YXNrLWZvcm0tY29udGFpbmVye1xyXG4gICAgd2lkdGg6IGNsYW1wKDI1MHB4LCAzMDBweCwgNDAlKTtcclxufVxyXG4ucHJvamVjdC1mb3JtLWNvbnRhaW5lci5hY3RpdmUsIC50YXNrLWZvcm0tY29udGFpbmVyLmFjdGl2ZXtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEpO1xyXG59XHJcbi5wcm9qZWN0LWZvcm0sIC50YXNrLWZvcm17XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogOHB4O1xyXG59XHJcbi50YXNrLWZvcm0gPiBkaXZ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogOHB4O1xyXG59XHJcbmlucHV0e1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYnRuLWNvbG9yKTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuYnV0dG9ue1xyXG4gICAgYWxsOiB1bnNldDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ0bi1jb2xvcik7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiA4cHggMTZweCA4cHggMTZweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnByb2plY3QtZm9ybS1vdmVybGF5LCAudGFzay1mb3JtLW92ZXJsYXksIC50YXNrLWRldGFpbHMtb3ZlcmxheXtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2l0aW9uOiAyMDBtcyBlYXNlLWluLW91dDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjUpO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuLnByb2plY3QtZm9ybS1vdmVybGF5LmFjdGl2ZSwgLnRhc2stZm9ybS1vdmVybGF5LmFjdGl2ZSwgLnRhc2stZGV0YWlscy1vdmVybGF5LmFjdGl2ZXtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBwb2ludGVyLWV2ZW50czogYWxsO1xyXG59XHJcbi50YXNre1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1jb2xvcik7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgZ2FwOiAxNnB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4udGFzazpob3ZlcntcclxuICAgIHNjYWxlOiAxLjAwNTtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMnB4IDVweCA2cHggMHB4IHJnYmEoMCwwLDAsMC4zNyk7IFxyXG4gICAgYm94LXNoYWRvdzogMnB4IDVweCA2cHggMHB4IHJnYmEoMCwwLDAsMC4zNyk7XHJcbn1cclxuLnRhc2stY2xvc2UsIC50YXNrLWNoZWNrLWJveCwgLnByb2plY3QtYnRuLWNsb3Nle1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLnRhc2suY2hlY2tlZHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbn1cclxuLnRhc2stZGF0ZXtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG59XHJcbiN0YXNrLWRlc2NyaXB0aW9ue1xyXG59XHJcbi5wcm9qZWN0LWJ0bntcclxuXHJcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSw0REFBNEQ7SUFDNUQseUZBQXlGO0lBQ3pGLHlCQUF5QjtJQUN6Qix3QkFBd0I7SUFDeEIsdUJBQXVCO0lBQ3ZCO0FBQ0o7QUFDQTtJQUNJLGFBQWE7SUFDYiw0QkFBNEI7SUFDNUIsaUJBQWlCO0lBQ2pCLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IscUNBQXFDO0FBQ3pDO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLHNDQUFzQztJQUN0QyxhQUFhO0lBQ2IsZ0NBQWdDO0FBQ3BDO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0NBQXNDO0FBQzFDO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsUUFBUTtJQUNSLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixRQUFRO0lBQ1IsOEJBQThCO0lBQzlCLHNDQUFzQztBQUMxQztBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLDRCQUE0QjtJQUM1QixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztBQUNiO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLFFBQVE7SUFDUixTQUFTO0lBQ1QseUNBQXlDO0lBQ3pDLDZCQUE2QjtJQUM3QixhQUFhO0lBQ2IsV0FBVztJQUNYLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHNDQUFzQztJQUN0QyxzQkFBc0I7SUFDdEIsUUFBUTtJQUNSLFlBQVk7SUFDWix5Q0FBeUM7QUFDN0M7QUFDQTtJQUNJLGlCQUFpQjs7QUFFckI7QUFDQTtJQUNJLCtCQUErQjtBQUNuQztBQUNBO0lBQ0kseUNBQXlDO0FBQzdDO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFFBQVE7QUFDWjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixRQUFRO0FBQ1o7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osa0NBQWtDO0lBQ2xDLGFBQWE7QUFDakI7QUFDQTtJQUNJLFVBQVU7SUFDVixrQ0FBa0M7SUFDbEMsWUFBWTtJQUNaLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsVUFBVTtJQUNWLDZCQUE2QjtJQUM3QixNQUFNO0lBQ04sT0FBTztJQUNQLFFBQVE7SUFDUixTQUFTO0lBQ1QsbUNBQW1DO0lBQ25DLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksVUFBVTtJQUNWLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksc0NBQXNDO0lBQ3RDLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtJQUNiLDJCQUEyQjtJQUMzQixTQUFTO0lBQ1QsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osb0RBQW9EO0lBQ3BELDRDQUE0QztBQUNoRDtBQUNBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxlQUFlO0FBQ25CO0FBQ0E7SUFDSSw2QkFBNkI7SUFDN0IsV0FBVztBQUNmO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcclxcbiAgICBmb250LWZhbWlseTogUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgLS1jb250ZW50LWNvbG9yOiAgI2ViZTdmZjtcXHJcXG4gICAgLS1zaWRlYmFyLWNvbG9yOiAjZTdlMmZmO1xcclxcbiAgICAtLWhlYWRlci1jb2xvcjogI2RkZDZmZTtcXHJcXG4gICAgLS1idG4tY29sb3I6ICNhNzhiZmFcXHJcXG59XFxyXFxuYm9keXtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcXHJcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuLmxvZ297XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG4uaGVhZGVye1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMTZweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWNvbG9yKTtcXHJcXG59XFxyXFxuLmxvZ297XFxyXFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcclxcbn1cXHJcXG4ubWFpbntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29udGVudC1jb2xvcik7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC4yZnIgMWZyO1xcclxcbn1cXHJcXG4uc2lkZWJhcntcXHJcXG4gICAgcGFkZGluZzogMTZweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1jb2xvcik7XFxyXFxufVxcclxcbi5wcm9qZWN0LWJ0bnN7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDhweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4ucHJvamVjdC1idG57XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gICAgcGFkZGluZzogOHB4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDhweDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWNvbG9yKTtcXHJcXG59XFxyXFxuLnByb2plY3QtYnRuLXRpdGxlOmhvdmVyLC5wcm9qZWN0LWJ0bi1jbG9zZTpob3ZlciwgYnV0dG9uOmhvdmVyLCAuYnRuLW5ldy1wcm9qZWN0OmhvdmVye1xcclxcbiAgICBzY2FsZTogMC45NztcXHJcXG59XFxyXFxuLmNvbnRlbnR7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHggNDBweDtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcXHJcXG4gICAgZ3JpZC1nYXA6IDE2cHg7XFxyXFxufVxcclxcbi5jb250ZW50LXRpdGxle1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbSA7XFxyXFxufVxcclxcbi50YXNrc3tcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAxMnB4O1xcclxcbn1cXHJcXG4ucHJvamVjdC1mb3JtLWNvbnRhaW5lciwgLnRhc2stZm9ybS1jb250YWluZXIsIC50YXNrLWRldGFpbHN7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgdG9wOiA1MCU7XFxyXFxuICAgIGxlZnQ6IDUwJTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMCk7XFxyXFxuICAgIHRyYW5zaXRpb246IDIwMG1zIGVhc2UtaW4tb3V0O1xcclxcbiAgICBwYWRkaW5nOiAxNnB4O1xcclxcbiAgICB6LWluZGV4OiAxMDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbn1cXHJcXG4udGFzay1kZXRhaWxzLmFjdGl2ZXtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29udGVudC1jb2xvcik7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogOHB4O1xcclxcbiAgICB3aWR0aDogNDAwcHg7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEpO1xcclxcbn1cXHJcXG4udGFzay1kZXRhaWxzLWhlYWRlcntcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuXFxyXFxufVxcclxcbi50YXNrLWZvcm0tY29udGFpbmVye1xcclxcbiAgICB3aWR0aDogY2xhbXAoMjUwcHgsIDMwMHB4LCA0MCUpO1xcclxcbn1cXHJcXG4ucHJvamVjdC1mb3JtLWNvbnRhaW5lci5hY3RpdmUsIC50YXNrLWZvcm0tY29udGFpbmVyLmFjdGl2ZXtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7XFxyXFxufVxcclxcbi5wcm9qZWN0LWZvcm0sIC50YXNrLWZvcm17XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogOHB4O1xcclxcbn1cXHJcXG4udGFzay1mb3JtID4gZGl2e1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDhweDtcXHJcXG59XFxyXFxuaW5wdXR7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gICAgcGFkZGluZzogOHB4O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1idG4tY29sb3IpO1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5idXR0b257XFxyXFxuICAgIGFsbDogdW5zZXQ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ0bi1jb2xvcik7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgcGFkZGluZzogOHB4IDE2cHggOHB4IDE2cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuLnByb2plY3QtZm9ybS1vdmVybGF5LCAudGFzay1mb3JtLW92ZXJsYXksIC50YXNrLWRldGFpbHMtb3ZlcmxheXtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgICB0cmFuc2l0aW9uOiAyMDBtcyBlYXNlLWluLW91dDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC41KTtcXHJcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxufVxcclxcbi5wcm9qZWN0LWZvcm0tb3ZlcmxheS5hY3RpdmUsIC50YXNrLWZvcm0tb3ZlcmxheS5hY3RpdmUsIC50YXNrLWRldGFpbHMtb3ZlcmxheS5hY3RpdmV7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxyXFxufVxcclxcbi50YXNre1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWNvbG9yKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgICBwYWRkaW5nOiA4cHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gICAgZ2FwOiAxNnB4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4udGFzazpob3ZlcntcXHJcXG4gICAgc2NhbGU6IDEuMDA1O1xcclxcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDJweCA1cHggNnB4IDBweCByZ2JhKDAsMCwwLDAuMzcpOyBcXHJcXG4gICAgYm94LXNoYWRvdzogMnB4IDVweCA2cHggMHB4IHJnYmEoMCwwLDAsMC4zNyk7XFxyXFxufVxcclxcbi50YXNrLWNsb3NlLCAudGFzay1jaGVjay1ib3gsIC5wcm9qZWN0LWJ0bi1jbG9zZXtcXHJcXG4gICAgaGVpZ2h0OiAyNHB4O1xcclxcbiAgICB3aWR0aDogYXV0bztcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4udGFzay5jaGVja2Vke1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXHJcXG4gICAgY29sb3I6IGdyYXk7XFxyXFxufVxcclxcbi50YXNrLWRhdGV7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbn1cXHJcXG4jdGFzay1kZXNjcmlwdGlvbntcXHJcXG59XFxyXFxuLnByb2plY3QtYnRue1xcclxcblxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGljb25DbG9zZSBmcm9tICcuL2ltYWdlcy9jbG9zZS5wbmcnXHJcbmNvbnN0IGhhbmRsZVByb2plY3RzID0gKCgpID0+IHtcclxuICAgIGNvbnN0IHByb2plY3RzTGlicmFyeSA9IHt9XHJcblxyXG4gICAgY29uc3QgYWRkUHJvamVjdCA9ICgpPT57XHJcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgbmV3UHJvamVjdC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWJ0bicpXHJcblxyXG4gICAgICAgIGNvbnN0IHByb2plY3RUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBwcm9qZWN0VGV4dC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWJ0bi10ZXh0JylcclxuXHJcbiAgICAgICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBwcm9qZWN0VGl0bGUuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1idG4tdGl0bGUnKVxyXG4gICAgICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctcHJvamVjdC10aXRsZScpLnZhbHVlXHJcbiAgICAgICAgcHJvamVjdFRleHQuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKVxyXG5cclxuICAgICAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXHJcbiAgICAgICAgY2xvc2VCdXR0b24uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1idG4tY2xvc2UnKVxyXG4gICAgICAgIGNsb3NlQnV0dG9uLnNyYyA9IGljb25DbG9zZVxyXG5cclxuICAgICAgICBuZXdQcm9qZWN0LmFwcGVuZENoaWxkKHByb2plY3RUZXh0KVxyXG4gICAgICAgIG5ld1Byb2plY3QuYXBwZW5kQ2hpbGQoY2xvc2VCdXR0b24pXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LXNlY3Rpb25cIikuYXBwZW5kQ2hpbGQobmV3UHJvamVjdClcclxuXHJcbiAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3LXByb2plY3QtdGl0bGUnKS52YWx1ZVxyXG4gICAgICAgIHByb2plY3RzTGlicmFyeVtwcm9qZWN0TmFtZV0gPSBbXVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RzTGlicmFyeSlcclxuICAgIH1cclxuICAgIGNvbnN0IGFkZFRhc2tUb1Byb2plY3QgPSAocHJvamVjdCAsdGFzayk9PntcclxuICAgICAgICBjb25zdCB0YXNrQXJyYXkgPSBwcm9qZWN0c0xpYnJhcnlbcHJvamVjdF1cclxuICAgICAgICB0YXNrQXJyYXkucHVzaCh0YXNrKVxyXG4gICAgfVxyXG4gICAgY29uc3QgcmVtb3ZlVGFza0Zyb21Qcm9qZWN0ID0gKF9wcm9qZWN0TmFtZSwgX3Rhc2tJbmRleCk9PntcclxuICAgICAgICBjb25zdCB0YXNrQXJyYXkgPSBwcm9qZWN0c0xpYnJhcnlbX3Byb2plY3ROYW1lXVxyXG4gICAgICAgIHRhc2tBcnJheS5zcGxpY2UoX3Rhc2tJbmRleCwgMSlcclxuICAgICAgICBjb25zb2xlLmxvZyhfdGFza0luZGV4KVxyXG4gICAgfVxyXG4gICAgY29uc3QgZ2V0UHJvamVjdEFycmF5ID0gKHByb2plY3QpPT57XHJcbiAgICAgICAgcmV0dXJuIHByb2plY3RzTGlicmFyeVtwcm9qZWN0XVxyXG4gICAgfVxyXG4gICAgY29uc3QgcmVtb3ZlUHJvamVjdCA9IChfcHJvamVjdE5hbWUpPT57XHJcbiAgICAgICAgZGVsZXRlIHByb2plY3RzTGlicmFyeVtfcHJvamVjdE5hbWVdXHJcbiAgICB9XHJcbiAgICBjb25zdCBjaGVja1Byb2plY3QgPSAoX3Byb2plY3ROYW1lLCBfdGFza051bWJlcik9PntcclxuICAgICAgICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdHNMaWJyYXJ5W19wcm9qZWN0TmFtZV1cclxuICAgICAgICBjb25zdCB0YXNrID0gcHJvamVjdFtfdGFza051bWJlcl1cclxuICAgICAgICB0YXNrLmNoZWNrZWQgPSAneWVzJ1xyXG4gICAgfVxyXG4gICAgY29uc3Qgc2hvd1Rhc2tEZXRhaWxzID0gKF9wcm9qZWN0TmFtZSwgX3Rhc2tOdW1iZXIpPT57XHJcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IHByb2plY3RzTGlicmFyeVtfcHJvamVjdE5hbWVdXHJcbiAgICAgICAgY29uc3QgdGFzayA9IHByb2plY3RbX3Rhc2tOdW1iZXJdXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZGV0YWlscycpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZGV0YWlscy1vdmVybGF5JykuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1kZXRhaWxzLXRpdGxlJykudGV4dENvbnRlbnQgPSBgVGl0bGU6ICR7dGFzay50aXRsZX1gXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZGV0YWlscy1kZXNjcmlwdGlvbicpLnRleHRDb250ZW50ID0gYERlc2NyaXB0aW9uOiAke3Rhc2suZGVzY3JpcHRpb259YFxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWRldGFpbHMtZGF0ZScpLnRleHRDb250ZW50ID0gYERhdGU6ICR7dGFzay5kYXRlfWBcclxuXHJcbiAgICB9XHJcbiAgICByZXR1cm57YWRkUHJvamVjdCwgcmVtb3ZlUHJvamVjdCwgZ2V0UHJvamVjdEFycmF5LCBhZGRUYXNrVG9Qcm9qZWN0LCByZW1vdmVUYXNrRnJvbVByb2plY3QsIGNoZWNrUHJvamVjdCwgc2hvd1Rhc2tEZXRhaWxzfVxyXG59KSgpXHJcblxyXG5leHBvcnQge2hhbmRsZVByb2plY3RzfTsiLCJpbXBvcnQgeyBoYW5kbGVQcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3RzLWhhbmRsZXJcIlxyXG5pbXBvcnQgaWNvbkRlbCBmcm9tICcuL2ltYWdlcy90cmFzaC1jYW4tb3V0bGluZS5wbmcnXHJcbmltcG9ydCBpY29uQ2hlY2sgZnJvbSAnLi9pbWFnZXMvY2hlY2tib3gtb3V0bGluZS5wbmcnXHJcbmNvbnN0IGNvbnRlbnRUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50LXRpdGxlJylcclxuY29uc3QgY29udGVudFRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzJylcclxuY29uc3QgaGFuZGxlVGFza3MgPSAoKCk9PntcclxuXHJcbiAgICBjb25zdCBzaG93ID0gKGNsaWNrZWRQcm9qZWN0KT0+e1xyXG4gICAgICAgIGNvbnRlbnRUaXRsZS50ZXh0Q29udGVudCA9IGNsaWNrZWRQcm9qZWN0XHJcbiAgICAgICAgY29uc3QgcHJvamVjdEFycmF5ID0gaGFuZGxlUHJvamVjdHMuZ2V0UHJvamVjdEFycmF5KGNsaWNrZWRQcm9qZWN0KVxyXG4gICAgICAgIGNvbnRlbnRUYXNrcy5pbm5lckhUTUwgPSAnJ1xyXG4gICAgICAgIGNyZWF0ZVRhc2tFbGVtZW50c09mKHByb2plY3RBcnJheSlcclxuICAgIH1cclxuICAgIGNvbnN0IGNyZWF0ZVRhc2tFbGVtZW50c09mID0gKF9wcm9qZWN0QXJyYXkpPT57XHJcbiAgICAgICAgX3Byb2plY3RBcnJheS5mb3JFYWNoKGl0ZW0gPT57XHJcbiAgICAgICAgICAgIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgICAgICB0YXNrLmNsYXNzTGlzdC5hZGQoJ3Rhc2snKVxyXG4gICAgICAgICAgICB0YXNrLmRhdGFzZXQubnVtYmVyID0gX3Byb2plY3RBcnJheS5pbmRleE9mKGl0ZW0pXHJcblxyXG4gICAgICAgICAgICBpZihpdGVtLmNoZWNrZWQgPT09ICd5ZXMnKXtcclxuICAgICAgICAgICAgICAgIHRhc2suY2xhc3NMaXN0LmFkZCgnY2hlY2tlZCcpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgY2hlY2tCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxyXG4gICAgICAgICAgICBjaGVja0JveC5jbGFzc0xpc3QuYWRkKCd0YXNrLWNoZWNrLWJveCcpXHJcbiAgICAgICAgICAgIGNoZWNrQm94LnNyYyA9IGljb25DaGVja1xyXG4gICAgICAgICAgICB0YXNrLmFwcGVuZENoaWxkKGNoZWNrQm94KVxyXG5cclxuICAgICAgICAgICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICAgICAgdGFza1RpdGxlLmNsYXNzTGlzdC5hZGQoJ3Rhc2stdGl0bGUnKVxyXG4gICAgICAgICAgICB0YXNrVGl0bGUudGV4dENvbnRlbnQgPSBpdGVtLnRpdGxlXHJcbiAgICAgICAgICAgIHRhc2suYXBwZW5kQ2hpbGQodGFza1RpdGxlKVxyXG5cclxuICAgICAgICAgICAgY29uc3QgdGFza0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgICAgICB0YXNrRGF0ZS5jbGFzc0xpc3QuYWRkKCd0YXNrLWRhdGUnKVxyXG4gICAgICAgICAgICB0YXNrRGF0ZS50ZXh0Q29udGVudCA9IGl0ZW0uZGF0ZVxyXG4gICAgICAgICAgICB0YXNrLmFwcGVuZENoaWxkKHRhc2tEYXRlKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgZGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICAgICAgICAgIGRldGFpbHMuY2xhc3NMaXN0LmFkZCgnc2VlLWRldGFpbHMnKVxyXG4gICAgICAgICAgICBkZXRhaWxzLnRleHRDb250ZW50ID0gJ0RldGFpbHMnXHJcbiAgICAgICAgICAgIHRhc2suYXBwZW5kQ2hpbGQoZGV0YWlscylcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHRhc2tDbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXHJcbiAgICAgICAgICAgIHRhc2tDbG9zZS5zcmMgPSBpY29uRGVsXHJcbiAgICAgICAgICAgIHRhc2tDbG9zZS5jbGFzc0xpc3QuYWRkKCd0YXNrLWNsb3NlJylcclxuICAgICAgICAgICAgdGFza0Nsb3NlLnRleHRDb250ZW50ID0gJ0RlbGV0ZSdcclxuICAgICAgICAgICAgdGFzay5hcHBlbmRDaGlsZCh0YXNrQ2xvc2UpXHJcblxyXG4gICAgICAgICAgICAvLyB0YXNrLnRleHRDb250ZW50ID0gaXRlbVxyXG4gICAgICAgICAgICBjb250ZW50VGFza3MuYXBwZW5kQ2hpbGQodGFzaylcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgY29uc3QgYWRkID0gKCk9PntcclxuICAgICAgICBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1mb3JtJykuY2hlY2tWYWxpZGl0eSgpKXtcclxuICAgICAgICAgICAgY29uc3QgdGFza09iamVjdCA9IHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay10aXRsZScpLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWRlc2NyaXB0aW9uJykudmFsdWUsXHJcbiAgICAgICAgICAgICAgICBkYXRlOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1kYXRlJykudmFsdWUsXHJcbiAgICAgICAgICAgICAgICBjaGVja2VkOiAnbm8nXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudC10aXRsZScpLnRleHRDb250ZW50XHJcbiAgICAgICAgICAgIGhhbmRsZVByb2plY3RzLmFkZFRhc2tUb1Byb2plY3QocHJvamVjdE5hbWUsIHRhc2tPYmplY3QpXHJcbiAgICAgICAgICAgIHNob3cocHJvamVjdE5hbWUpXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIGNvbnN0IHJlbW92ZSA9IChfdGFza0luZGV4KT0+e1xyXG4gICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQtdGl0bGUnKS50ZXh0Q29udGVudFxyXG4gICAgICAgIGhhbmRsZVByb2plY3RzLnJlbW92ZVRhc2tGcm9tUHJvamVjdChwcm9qZWN0TmFtZSwgX3Rhc2tJbmRleClcclxuICAgICAgICBzaG93KHByb2plY3ROYW1lKVxyXG4gICAgfVxyXG4gICAgcmV0dXJue3Nob3csIGFkZCwgcmVtb3ZlfVxyXG59KSgpXHJcblxyXG5leHBvcnR7aGFuZGxlVGFza3N9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJ1xyXG5pbXBvcnQge2hhbmRsZVByb2plY3RzfSBmcm9tICcuL3Byb2plY3RzLWhhbmRsZXIuanMnXHJcbmltcG9ydCB7aGFuZGxlVGFza3N9IGZyb20gJy4vdGFza3MtaGFuZGxlcidcclxuY29uc3QgYnRuQWRkUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tbmV3LXByb2plY3QnKVxyXG5jb25zdCBwcm9qZWN0Rm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWZvcm0tY29udGFpbmVyJylcclxuY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1mb3JtJylcclxuY29uc3QgcHJvamVjdEZvcm1TdWJtaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLXByb2plY3QtZm9ybS1zdWJtaXQnKVxyXG5jb25zdCBwcm9qZWN0Rm9ybU92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1mb3JtLW92ZXJsYXknKVxyXG5jb25zdCBwcm9qZWN0U2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LXNlY3Rpb24nKVxyXG5jb25zdCBidG5BZGRUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi1uZXctdGFzaycpXHJcbmNvbnN0IHRhc2tGb3JtQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZm9ybS1jb250YWluZXInKVxyXG5jb25zdCB0YXNrRm9ybU92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1mb3JtLW92ZXJsYXknKVxyXG5jb25zdCB0YXNrRm9ybSA9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZm9ybScpXHJcbmNvbnN0IHRhc2tGb3JtU3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi10YXNrLWZvcm0tc3VibWl0JylcclxuY29uc3QgdGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3MnKVxyXG5jb25zdCB0YXNrRGV0YWlsc092ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1kZXRhaWxzLW92ZXJsYXknKVxyXG5cclxuY29uc3QgaGFuZGxlUHJvamVjdEZvcm0gPSAoKCk9PntcclxuICAgIGJ0bkFkZFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XHJcbiAgICAgICAgb3BlblByb2plY3RGb3JtKClcclxuICAgIH0pXHJcbiAgICBwcm9qZWN0Rm9ybVN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGV2ZW50KT0+e1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBpZighcHJvamVjdEZvcm0uY2hlY2tWYWxpZGl0eSgpKXtcclxuICAgICAgICAgICAgcHJvamVjdEZvcm0ucmVwb3J0VmFsaWRpdHkoKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihwcm9qZWN0Rm9ybS5jaGVja1ZhbGlkaXR5KCkpe1xyXG4gICAgICAgICAgICBoYW5kbGVQcm9qZWN0cy5hZGRQcm9qZWN0KClcclxuICAgICAgICAgICAgY2xvc2VQcm9qZWN0Rm9ybSgpXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIHByb2plY3RGb3JtT3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcclxuICAgICAgICBjbG9zZVByb2plY3RGb3JtKClcclxuICAgIH0pXHJcbn0pKClcclxuXHJcbmNvbnN0IG9wZW5Qcm9qZWN0Rm9ybSA9ICgpPT57XHJcbiAgICBwcm9qZWN0Rm9ybUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxyXG4gICAgcHJvamVjdEZvcm1PdmVybGF5LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXHJcbn1cclxuY29uc3QgY2xvc2VQcm9qZWN0Rm9ybSA9ICgpPT57XHJcbiAgICBwcm9qZWN0Rm9ybUNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG4gICAgcHJvamVjdEZvcm1PdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcbiAgICBwcm9qZWN0Rm9ybS5yZXNldCgpXHJcbn1cclxucHJvamVjdFNlY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLChjbGlja2VkRWxlbWVudCk9PntcclxuICAgIGlmKGNsaWNrZWRFbGVtZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3Byb2plY3QtYnRuLXRpdGxlJykpe1xyXG4gICAgICAgIGhhbmRsZVRhc2tzLnNob3coY2xpY2tlZEVsZW1lbnQudGFyZ2V0LnRleHRDb250ZW50KSAgICAgICBcclxuICAgIH1cclxufSlcclxucHJvamVjdFNlY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLChjbGlja2VkRWxlbWVudCk9PntcclxuICAgIGlmKGNsaWNrZWRFbGVtZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3Byb2plY3QtYnRuLWNsb3NlJykpe1xyXG4gICAgICAgIGNvbnN0IHBhcmVudCA9IGNsaWNrZWRFbGVtZW50LnRhcmdldC5wYXJlbnRFbGVtZW50XHJcbiAgICAgICAgY29uc3QgdGl0bGVDaGlsZCA9IHBhcmVudC5maXJzdENoaWxkXHJcbiAgICAgICAgcHJvamVjdFNlY3Rpb24ucmVtb3ZlQ2hpbGQocGFyZW50KVxyXG4gICAgICAgIGhhbmRsZVByb2plY3RzLnJlbW92ZVByb2plY3QodGl0bGVDaGlsZC50ZXh0Q29udGVudCkgXHJcbiAgICB9XHJcbn0pXHJcblxyXG4vL2FsbCBhYm91dCB0YXNrc1xyXG5jb25zdCBvcGVuVGFza0Zvcm0gPSAoKT0+e1xyXG4gICAgdGFza0Zvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcclxuICAgIHRhc2tGb3JtT3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxyXG59XHJcbmNvbnN0IGNsb3NlVGFza0Zvcm0gPSAoKT0+e1xyXG4gICAgdGFza0Zvcm1Db250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuICAgIHRhc2tGb3JtT3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG4gICAgdGFza0Zvcm0ucmVzZXQoKVxyXG59XHJcbmNvbnN0IGhhbmRsZVRhc2tGb3JtID0gKCgpPT57XHJcbiAgICBidG5BZGRUYXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xyXG4gICAgICAgIG9wZW5UYXNrRm9ybSgpXHJcbiAgICB9KVxyXG4gICAgdGFza0Zvcm1PdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG4gICAgICAgIGNsb3NlVGFza0Zvcm0oKVxyXG4gICAgfSlcclxuICAgIHRhc2tGb3JtU3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZXZlbnQpPT57XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIGhhbmRsZVRhc2tzLmFkZCgpXHJcbiAgICAgICAgaWYoIXRhc2tGb3JtLmNoZWNrVmFsaWRpdHkoKSl7XHJcbiAgICAgICAgICAgIHRhc2tGb3JtLnJlcG9ydFZhbGlkaXR5KClcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGFza0Zvcm0uY2hlY2tWYWxpZGl0eSgpKXtcclxuICAgICAgICAgICAgY2xvc2VUYXNrRm9ybSgpXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufSkoKVxyXG5cclxudGFza3MuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLChfY2xpY2tlZEVsZW1lbnQpPT57XHJcbiAgICBpZihfY2xpY2tlZEVsZW1lbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInRhc2stY2xvc2VcIikpe1xyXG4gICAgICAgIGNvbnN0IGhleSA9IF9jbGlja2VkRWxlbWVudC50YXJnZXQucGFyZW50RWxlbWVudFxyXG4gICAgICAgIHRhc2tzLnJlbW92ZUNoaWxkKGhleSlcclxuICAgICAgICBoYW5kbGVUYXNrcy5yZW1vdmUoaGV5LmRhdGFzZXQubnVtYmVyKVxyXG4gICAgfVxyXG59KVxyXG50YXNrcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKF9jbGlja2VkRWxlbWVudCk9PntcclxuICAgIGlmKF9jbGlja2VkRWxlbWVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2VlLWRldGFpbHNcIikpe1xyXG4gICAgICAgIGNvbnN0IHRhc2sgPSBfY2xpY2tlZEVsZW1lbnQudGFyZ2V0LnBhcmVudEVsZW1lbnRcclxuICAgICAgICBoYW5kbGVQcm9qZWN0cy5zaG93VGFza0RldGFpbHMoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQtdGl0bGUnKS50ZXh0Q29udGVudCAsdGFzay5kYXRhc2V0Lm51bWJlcilcclxuICAgIH1cclxufSlcclxudGFza3MuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLChfY2xpY2tlZEVsZW1lbnQpPT57XHJcbiAgICBpZihfY2xpY2tlZEVsZW1lbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInRhc2stY2hlY2stYm94XCIpKXtcclxuICAgICAgICBjb25zdCB0YXNrID0gX2NsaWNrZWRFbGVtZW50LnRhcmdldC5wYXJlbnRFbGVtZW50XHJcbiAgICAgICAgdGFzay5jbGFzc0xpc3QuYWRkKCdjaGVja2VkJylcclxuICAgICAgICBoYW5kbGVQcm9qZWN0cy5jaGVja1Byb2plY3QoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQtdGl0bGUnKS50ZXh0Q29udGVudCwgdGFzay5kYXRhc2V0Lm51bWJlcilcclxuICAgIH1cclxufSlcclxudGFza0RldGFpbHNPdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xyXG4gICAgdGFza0RldGFpbHNPdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1kZXRhaWxzJykuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxufSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=