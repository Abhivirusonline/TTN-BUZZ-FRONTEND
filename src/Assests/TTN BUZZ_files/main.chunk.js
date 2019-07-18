(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "*{\n    box-sizing: border-box;\n    margin: 0;\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Header/Header.css":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/Header/Header.css ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
var urlEscape = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/url-escape.js */ "./node_modules/css-loader/dist/runtime/url-escape.js");
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(/*! ../../Assests/header background-1.jpeg */ "./src/Assests/header background-1.jpeg"));

// Module
exports.push([module.i, "nav{\n    background-color: #3438a1;\n    padding: 5px 20px;\n    display: flex;\n    justify-content: space-around;\n    vertical-align: center;\n    top:0;\n    position: fixed;\n    z-index: 999;\n    width: 100%;\n    margin-bottom: 55px;\n}\nnav  a,nav >div{\n    width: 100%;\n    padding: 10px 10px;\n    background-color: #3438a1;\n    text-decoration: none;\n    color: #fff;\n    margin-right: 20px;\n    font-size: 18px;\n    cursor: pointer;\n    text-align: center;\n}\nnav a:active,nav >div:active{\n    color: #ffffff;\n    background-color: #030474;\n    text-decoration: none;\n}\nnav:last-child{\n    margin-right: 0;\n}\nheader > section{\n    margin-top: 49px;\n    width: 100%;\n    background: url(" + ___CSS_LOADER_URL___0___ + ") no-repeat center;\n    height: 200px;\n    display: flex;\n    vertical-align: center;\n}\n.banner-text{\n    font-family: Roboto;\n    color: #fff;\n    font-weight: bold;\n    word-wrap: break-spaces;\n    width: 600px;\n    padding-left: 130px;\n    margin-right: auto;\n}\n@media screen and (max-width: 500px) {\n    .banner-text{\n        font-size: 11px;\n        padding-left: 20px;\n        width: 200px;\n    }\n    header>section{\n        height: 150px;\n    }\n}\n\n@media screen and (max-width: 300px) {\n    header>section{\n        height: 100px;\n    }\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/buzz/Buzz.css":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/buzz/Buzz.css ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".Buzz{\n    margin-top: 20px;\n}\n.buzz-feed,.buzz-create{\n    width: 45vw;\n}\n\n@media screen and (max-width: 800px) {\n    .buzz-feed,.buzz-create{\n        width: 70vw;\n        margin-left: auto;\n        margin-right: auto;\n    }\n    .side-nav{\n        display: none;\n    }\n}\n@media screen and (max-width: 600px) {\n    .buzz-feed,.buzz-create{\n        width: 95vw;\n    }\n}\n@media screen and (max-width: 900px) {\n    .side-nav{\n        width: 2vw;\n    }\n}\n\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/buzz/BuzzFeed/BuzzFeed.css":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/buzz/BuzzFeed/BuzzFeed.css ***!
  \******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".buzz-feed{\n    padding: 2px 16px;\n    width:30vw;\n    border-radius: 5px;\n    margin-top: 10px;\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\n    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n    transition: 0.3s;\n    margin-left: 30vw;\n}\n.buzz-feed:first-child .buzz-header{\n    height: 78px;\n}\n.buzz-feed:hover{\n    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);\n}\n.buzz-header{\n    background-color: #fff;\n    padding: 16px;\n    border-top-left-radius: 5px;\n    border-top-right-radius: 5px;\n}\n.buzz-header div img{\n    border-radius: 50%;\n    height: 40.7px;\n    max-width: 40px;\n    width: 100%;\n}\n.buzz-header div span:first-child:hover{\n    color: blue;\n}\n.buzz-header div span:first-child{\n    color: rgba(0,0,0,0.87);\n    cursor: pointer;\n}\n.buzz-header div span:last-child{\n    color: rgba(0,0,0,0.54);\n}\n\n.buzz-content{\n    padding: 5px 16px;\n\n}\n.buzz-content article{\n    font-weight: normal;\n    font-family: Roboto !important;\n    font-size: 14px;\n    padding: 5px;\n    text-align: left;\n    direction: ltr;\n    border-radius: 5px;\n    word-wrap: break-word;\n}\n.buzz-attachment{\n    vertical-align: top;\n    padding-right: 5px;\n    padding-left: 5px;\n    min-height: 0;\n    max-width: 100%;\n    height: 427px;\n    max-height: 427px;\n\n}\n.buzz-footer{\n    border-top: 1px solid #ccc;\n    border-bottom-left-radius: 5px;\n    border-bottom-right-radius: 5px;\n}\n.buzz-footer div{\n    text-align: center;\n}\n.buzz-footer div i{\n    padding-top: 15px;\n    padding-bottom: 15px;\n    margin-right: 5px;\n}\n.buzz-footer div:hover{\n    background-color: #cccccc;\n    cursor: pointer;\n}\n.delete-btn{\n    box-sizing: border-box;\n    padding-left: 10px;\n}\n\n@media screen and (max-width: 700px) {\n    .buzz-content img{\n        width: 100%;\n    }\n}\n@media screen and (max-width: 300px) {\n    .buzz-feed:first-child .buzz-header{\n        height: 85px;\n    }\n}\n.read-more{\n    color: #030474;\n    font-size: larger;\n    cursor: pointer;\n    width: 150px;\n}\n.liked{\n    color: #2823ff;\n}\n.disliked{\n    background-color: #ff4f4a;\n}\n.activity{\n    text-align: center;\n    border:1px solid #ccc;\n    background-color: #a9aabb;\n    padding: 2px;\n    border-radius: 5px;\n    word-wrap: break-word;\n    overflow-y: hidden;\n}\n.delete-btn{\n    margin-left: -2px;\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/buzz/BuzzForm/BuzzForm.css":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/buzz/BuzzForm/BuzzForm.css ***!
  \******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".buzz-create{\n    width: 50vw;\n    margin-left: 30vw;\n    border-radius: 10px;\n    padding: 10px 10px 60px 10px;\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\n    transition: 0.3s;\n}\n.buzz-create:hover {\n    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);\n}\nbutton{\n    margin-top: 10px;\n    margin-bottom: 10px !important;\n    padding: 5px;\n    width: 50px;\n}\ninput {\n    padding: 5px;\n    border-radius: 5px;\n}\n.textarea{\n    user-focus:'/';\n    font-size: 17px;\n    color: #000010;\n    font-family: Roboto;\n}\n.row select{\n    width: 60%;\n    margin: 10px 0 0 0;\n\n}\n\n\ninput[type='file']{\n    margin-top: 10px;\n    width: 100px;\n}\n.post-control{\n    margin-top: 10px;\n    display: flex;\n    justify-content:space-between;\n}\n\n@media screen and (max-width: 400px) {\n    post-control{\n        display: flex;\n        justify-content: space-around;\n        flex-direction: column;\n    }\n}\n\n@media screen and (max-width:700px){\n    .btn-success{\n        position: absolute;\n        top: 59px;\n        width: auto;\n    }\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/complaints/complaints.css":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/complaints/complaints.css ***!
  \*****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "*{\n    box-sizing: border-box;\n}\n.form-group {\n    margin-bottom: 0;\n}\n.complaints{\n    border-radius: 5px;\n    max-width: 600px;\n    margin: 15px auto;\n    border: 1px solid #ccc;\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\n    transition: 0.3s;\n}\n.complaintId{\n    cursor: pointer;\n}\n.complaints:hover {\n    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);\n}\n.complaints-box-label\n{\n    border-top-left-radius: 5px;\n    border-top-right-radius: 5px;\n    background-color: #ccc;\n    padding-left: 25px;\n    font-size: 17px;\n    font-family: Roboto;\n}\n.form-group{\n    padding: 10px;\n}\n.row-no-gutters{\n    padding: 5px 15px;\n}\n.row-no-gutters div{\n    padding-right: 15px;\n}\n.row-no-gutters div:last-child{\n    padding-right:0;\n}\ntextarea{\n    resize: none;\n}\n.file-upload > input[type=\"file\"]{\n    display: none;\n}\n.file-upload label{\n    cursor: pointer;\n    width: 100px;\n    padding: 10px;\n}\n.file-upload i{\n    font-size:2em;\n}\n.file-upload label span{\n    padding-right: 10px;\n}\n.Resolved{\n    color: #00ff00;\n}\n.In-Progress{\n    color: #1a16af;\n}\n.PENDING{\n    color: #f00;\n}\ntable td{\n    word-wrap: break-word;\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/complaints/detailComp.css":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/complaints/detailComp.css ***!
  \*****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".complaint-attachment img{\n    width:100%;\n    height: 50vh;\n}\n.modal{\n    word-wrap: break-word;\n    word-wrap: break-spaces;\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/dashboard/dashboard.css":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/dashboard/dashboard.css ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/loginComponent/loginComp.css":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/loginComponent/loginComp.css ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
var urlEscape = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/url-escape.js */ "./node_modules/css-loader/dist/runtime/url-escape.js");
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(/*! ./background.jpg */ "./src/components/loginComponent/background.jpg"));

// Module
exports.push([module.i, "*{\n    box-sizing: border-box;\n    font-family: arial;\n}\n.login-background{\n    width: 100%;\n    background: url(" + ___CSS_LOADER_URL___0___ + ") no-repeat local;\n    background-size: cover;\n    height: 100vh;\n    position: relative;\n    opacity: 0.9;\n}\n.login-card{\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    width:300px;\n    margin-left: auto;\n    margin-right: auto;\n    background-color: #fff;\n    text-align: center;\n    padding-bottom: 10px;\n\n}\n.login-card img{\n    width: 200px;\n}\n.login-card input[type=\"button\"]{\n    background-color: #1d16f9;\n    border:1px solid #ccc;\n    padding: 10px 5px;\n    color: #fff;\n    font-size: 20px;\n    cursor: pointer;\n}\n\n@media screen and (max-width: 800px) {\n    .login-card{\n        height: fit-content;\n        width: fit-content;\n        padding-bottom: 10px;\n        height: auto;\n    }\n    .login-card h2{\n        font-size: 16px;\n    }\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/resolve/resolve.css":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/resolve/resolve.css ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".resolve{\n    width: 75%;\n    margin-top: 20px;\n    border-radius: 5px;\n    max-width: 800px;\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\n    transition: 0.3s;\n    position: absolute;\n    right: 13%;\n}\n.resolve:hover {\n    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);\n}\n.resolve-label{\n    border-top-left-radius: 5px;\n    border-top-right-radius: 5px;\n    height: 30px;\n    background-color: #e7e7e7;\n    padding: 5px 0 5px 20px;\n}\n.table-responsive,.resolve-label{\n    margin-left: -15px;\n    margin-right: -15px;\n}\n.issueId{\n    text-decoration: underline;\n    color: #3a58ff;\n}\n.resolve td select{\n    background-color: transparent;\n    border: none;\n}\n\n\n@media screen and (max-width: 800px) {\n    .resolve{\n        width: 100%;\n        max-height: fit-content;\n        padding-left: 50px;\n        padding-right: 50px;\n        position: initial;\n    }\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/settings/settings.css":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/settings/settings.css ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".settings{\n    border-radius: 5px;\n    max-width: 800px;\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\n    transition: 0.3s;\n    margin: 20px auto;\n    padding: 10px;\n    position: absolute;\n    right: 50px;\n    text-align: center;\n}\n.settings:hover {\n    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);\n}\n.settings img{\n    width: 150px;\n    height: 150px;\n    border-radius: 50%;\n}\n.image-upload{\n    padding: 10px;\n}\n.image-upload label{\n    padding: 20px;\n    cursor: pointer;\n    font-size: 2em;\n}\n\n@media screen and (max-width: 800px) {\n    .settings{\n        position: initial;\n    }\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/sidenav/sidenav.css":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/sidenav/sidenav.css ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".profile{\n    width: 70px;\n    margin-left: auto;\n    margin-right: auto;\n}\n.profile img{\n    height: 70px;\n    border-radius: 50%;\n}\n.side-nav{\n    padding-top: 10px;\n    background-color: #cccccc;\n    margin-top: 20px;\n    margin-left: 100px;\n    width: 250px;\n    border-radius: 5px;\n    position: -webkit-sticky;\n    position: sticky;\n    top: 70px;\n}\n.side-nav:hover {\n    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);\n}\n.side-nav ul{\n    list-style-type: none;\n    padding-inline-start: 0;\n    margin-bottom: 0;\n}\n.side-nav ul li{\n    border-bottom: 1px solid #6a6a6a;\n    color: #fff;\n    cursor: pointer;\n    padding: 5px 15px;\n}\n.side-nav ul li:last-child{\n    border-bottom: none;\n}\n.side-nav ul li a{\n    text-decoration: none;\n}\n.side-nav ul li i{\n    font-size: 28px;\n    padding-right: 15px;\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\n    \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n    monospace;\n}\n.myrow{\n  margin: 0;\n  padding: 0;\n}", ""]);



/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes */ "./src/routes/index.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/esm/react-toastify.js");
/* harmony import */ var react_toastify_dist_ReactToastify_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.min.css */ "./node_modules/react-toastify/dist/ReactToastify.min.css");
/* harmony import */ var react_toastify_dist_ReactToastify_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_min_css__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/home/ttn/Documents/TTN-BUZZ-FRONTEND/src/App.js";







class App extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "App",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["BrowserRouter"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_toastify__WEBPACK_IMPORTED_MODULE_4__["ToastContainer"], {
      pauseOnFocusLoss: false,
      newestOnTop: true,
      pauseOnFocusLoss: false,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/Assests/header background-1.jpeg":
/*!**********************************************!*\
  !*** ./src/Assests/header background-1.jpeg ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/header background-1.4f42f050.jpeg";

/***/ }),

/***/ "./src/actions/actionTypes.js":
/*!************************************!*\
  !*** ./src/actions/actionTypes.js ***!
  \************************************/
/*! exports provided: FETCH_BUZZ_STARTED, FETCH_BUZZ_SUCCESS, FETCH_BUZZ_FAILED, FETCH_DEPARTMENT, ADD_DEPARTMENT_STARTED, ADD_DEPARTMENT, ADD_DEPARTMENT_FAILED, DELETE_BUZZ_STARTED, DELETE_BUZZ_SUCCESS, DELETE_BUZZ_FAILED, LIKE_BUZZ, DISLIKE_BUZZ, CREATE_BUZZ_STARTED, CREATE_BUZZ_SUCCESS, CREATE_BUZZ_FAILED, FILE_COMPLAINT_STARTED, FILE_COMPLAINT, FILE_COMPLAINT_FAILED, FETCH_COMPLAINT, UPDATE_COMPLAINT_STATUS, FETCH_USER_STARTED, FETCH_USER, FETCH_USER_FAILED, FETCH_ALL_USERS_STARTED, FETCH_ALL_USERS, FETCH_ALL_USERS_FAILED, UPLOAD_USER_PHOTO_STARTED, UPLOAD_USER_PHOTO, UPLOAD_USER_PHOTO_FAILED */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_BUZZ_STARTED", function() { return FETCH_BUZZ_STARTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_BUZZ_SUCCESS", function() { return FETCH_BUZZ_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_BUZZ_FAILED", function() { return FETCH_BUZZ_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_DEPARTMENT", function() { return FETCH_DEPARTMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_DEPARTMENT_STARTED", function() { return ADD_DEPARTMENT_STARTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_DEPARTMENT", function() { return ADD_DEPARTMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_DEPARTMENT_FAILED", function() { return ADD_DEPARTMENT_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_BUZZ_STARTED", function() { return DELETE_BUZZ_STARTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_BUZZ_SUCCESS", function() { return DELETE_BUZZ_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_BUZZ_FAILED", function() { return DELETE_BUZZ_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_BUZZ", function() { return LIKE_BUZZ; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DISLIKE_BUZZ", function() { return DISLIKE_BUZZ; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_BUZZ_STARTED", function() { return CREATE_BUZZ_STARTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_BUZZ_SUCCESS", function() { return CREATE_BUZZ_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_BUZZ_FAILED", function() { return CREATE_BUZZ_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILE_COMPLAINT_STARTED", function() { return FILE_COMPLAINT_STARTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILE_COMPLAINT", function() { return FILE_COMPLAINT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILE_COMPLAINT_FAILED", function() { return FILE_COMPLAINT_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_COMPLAINT", function() { return FETCH_COMPLAINT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_COMPLAINT_STATUS", function() { return UPDATE_COMPLAINT_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_USER_STARTED", function() { return FETCH_USER_STARTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_USER", function() { return FETCH_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_USER_FAILED", function() { return FETCH_USER_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_ALL_USERS_STARTED", function() { return FETCH_ALL_USERS_STARTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_ALL_USERS", function() { return FETCH_ALL_USERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_ALL_USERS_FAILED", function() { return FETCH_ALL_USERS_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_USER_PHOTO_STARTED", function() { return UPLOAD_USER_PHOTO_STARTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_USER_PHOTO", function() { return UPLOAD_USER_PHOTO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_USER_PHOTO_FAILED", function() { return UPLOAD_USER_PHOTO_FAILED; });
const FETCH_BUZZ_STARTED = 'FETCH_BUZZ_STARTED';
const FETCH_BUZZ_SUCCESS = 'FETCH_BUZZ_SUCCESS';
const FETCH_BUZZ_FAILED = 'FETCH_BUZZ_FAILED';
const FETCH_DEPARTMENT = 'FETCH_DEPARTMENT';
const ADD_DEPARTMENT_STARTED = 'ADD_DEPARTMENT';
const ADD_DEPARTMENT = 'ADD_DEPARTMENT';
const ADD_DEPARTMENT_FAILED = 'ADD_DEPARTMENT_FAILED';
const DELETE_BUZZ_STARTED = 'DELETE_BUZZ_STARTED';
const DELETE_BUZZ_SUCCESS = 'DELETE_BUZZ_SUCCESS';
const DELETE_BUZZ_FAILED = 'DELETE_BUZZ_FAILED';
const LIKE_BUZZ = 'LIKE_BUZZ';
const DISLIKE_BUZZ = 'DISLIKE_BUZZ';
const CREATE_BUZZ_STARTED = 'CREATE_BUZZ_STARTED';
const CREATE_BUZZ_SUCCESS = 'CREATE_BUZZ_SUCCESS';
const CREATE_BUZZ_FAILED = 'CREATE_BUZZ_FAILED';
const FILE_COMPLAINT_STARTED = 'FILE_COMPLAINT_STARTED';
const FILE_COMPLAINT = 'FILE_COMPLAINT';
const FILE_COMPLAINT_FAILED = 'FILE_COMPLAINT_FAILED';
const FETCH_COMPLAINT = 'FETCH_COMPLAINT';
const UPDATE_COMPLAINT_STATUS = 'UPDATE_COMPLAINT_STATUS';
const FETCH_USER_STARTED = 'FETCH_USER_STARTED';
const FETCH_USER = 'FETCH_USER';
const FETCH_USER_FAILED = 'FETCH_USER_FAILED';
const FETCH_ALL_USERS_STARTED = 'FETCH_ALL_USERS_STARTED';
const FETCH_ALL_USERS = 'FETCH_ALL_USERS';
const FETCH_ALL_USERS_FAILED = 'FETCH_ALL_USERS_FAILED';
const UPLOAD_USER_PHOTO_STARTED = 'UPLOAD_USER_PHOTO_STARTED';
const UPLOAD_USER_PHOTO = 'UPLOAD_USER_PHOTO';
const UPLOAD_USER_PHOTO_FAILED = 'UPLOAD_USER_PHOTO_FAILED';

/***/ }),

/***/ "./src/actions/buzz.actions.js":
/*!*************************************!*\
  !*** ./src/actions/buzz.actions.js ***!
  \*************************************/
/*! exports provided: displayBuzz, fetchbuzz, like, dislike, saveBuzz, deleteBuzz */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "displayBuzz", function() { return displayBuzz; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchbuzz", function() { return fetchbuzz; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "like", function() { return like; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dislike", function() { return dislike; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveBuzz", function() { return saveBuzz; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteBuzz", function() { return deleteBuzz; });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionTypes */ "./src/actions/actionTypes.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/esm/react-toastify.js");
/* harmony import */ var _utilities_axiosInterceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilities/axiosInterceptor */ "./src/utilities/axiosInterceptor.js");
/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/constants */ "./src/config/constants.js");
/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_config_constants__WEBPACK_IMPORTED_MODULE_3__);




const displayBuzz = data => ({
  type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_BUZZ_SUCCESS"],
  payload: data
});
const fetchbuzz = skip => dispatch => {
  _utilities_axiosInterceptor__WEBPACK_IMPORTED_MODULE_2__["default"].get(_config_constants__WEBPACK_IMPORTED_MODULE_3___default.a.buzzAPI + "/" + skip).then(res => {
    dispatch(displayBuzz(res.data));
  }).catch(err => {
    console.log('fetch operation failed : ' + err);
  });
};
const like = e => dispatch => {
  _utilities_axiosInterceptor__WEBPACK_IMPORTED_MODULE_2__["default"].put(_config_constants__WEBPACK_IMPORTED_MODULE_3___default.a.buzzLike, {
    data: {
      buzzId: e.target.id
    }
  }).then(res => {
    dispatch({
      type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["LIKE_BUZZ"],
      payload: res.data
    });
  }).catch(err => {
    react_toastify__WEBPACK_IMPORTED_MODULE_1__["toast"].error("some error occured");
  });
};
const dislike = e => dispatch => {
  _utilities_axiosInterceptor__WEBPACK_IMPORTED_MODULE_2__["default"].put(_config_constants__WEBPACK_IMPORTED_MODULE_3___default.a.buzzDisLike, {
    data: {
      buzzId: e.target.id
    }
  }).then(res => {
    dispatch({
      type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["DISLIKE_BUZZ"],
      payload: res.data
    });
  }).catch(err => {
    console.log("error in liked actions.");
  });
};
const saveBuzz = formData => dispatch => {
  let toastId = null;
  Object(_utilities_axiosInterceptor__WEBPACK_IMPORTED_MODULE_2__["default"])({
    method: 'post',
    url: _config_constants__WEBPACK_IMPORTED_MODULE_3___default.a.buzzAPI,
    data: formData,
    config: {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    },
    onUploadProgress: p => {
      const progress = Math.round(p.loaded * 100 / p.total);

      if (toastId === null) {
        toastId = Object(react_toastify__WEBPACK_IMPORTED_MODULE_1__["toast"])("Please Wait while we post your buzz", {
          progress
        });
      } else {
        react_toastify__WEBPACK_IMPORTED_MODULE_1__["toast"].update(toastId, {
          render: "Uploaded Successfully ".concat(progress, ", Processing"),
          type: react_toastify__WEBPACK_IMPORTED_MODULE_1__["toast"].TYPE.SUCCESS
        });
      }
    }
  }).then(res => {
    dispatch({
      type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["CREATE_BUZZ_SUCCESS"],
      payload: res.data
    });
    react_toastify__WEBPACK_IMPORTED_MODULE_1__["toast"].done(toastId);
  }).catch(err => {
    react_toastify__WEBPACK_IMPORTED_MODULE_1__["toast"].error("Buzz Not Created");
  });
};
const deleteBuzz = e => dispatch => {
  Object(_utilities_axiosInterceptor__WEBPACK_IMPORTED_MODULE_2__["default"])({
    method: 'delete',
    url: _config_constants__WEBPACK_IMPORTED_MODULE_3___default.a.buzzAPI,
    data: {
      _id: e.target.id
    }
  }).then(res => {
    dispatch({
      type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["DELETE_BUZZ_SUCCESS"],
      payload: res.data
    });
  }).catch(err => console.log(err));
};

/***/ }),

/***/ "./src/actions/complaints.action.js":
/*!******************************************!*\
  !*** ./src/actions/complaints.action.js ***!
  \******************************************/
/*! exports provided: fileComplaint, updateComplaintStatus, fetchDepartment, showComplaintList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fileComplaint", function() { return fileComplaint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateComplaintStatus", function() { return updateComplaintStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDepartment", function() { return fetchDepartment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showComplaintList", function() { return showComplaintList; });
/* harmony import */ var _utilities_axiosInterceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/axiosInterceptor */ "./src/utilities/axiosInterceptor.js");
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actionTypes */ "./src/actions/actionTypes.js");
/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/constants */ "./src/config/constants.js");
/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_config_constants__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/esm/react-toastify.js");




const fileComplaint = formData => dispatch => {
  let toastId = null;
  Object(_utilities_axiosInterceptor__WEBPACK_IMPORTED_MODULE_0__["default"])({
    method: 'post',
    url: _config_constants__WEBPACK_IMPORTED_MODULE_2___default.a.complaintAPI,
    data: formData,
    config: {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    },
    onUploadProgress: p => {
      const progress = Math.round(p.loaded * 100 / p.total);

      if (toastId === null) {
        toastId = Object(react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"])("Please Wait while we file your complaint", {
          progress
        });
      } else {
        react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"].update(toastId, {
          render: "Processing"
        });
      }
    }
  }).then(res => {
    dispatch({
      type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__["FILE_COMPLAINT"],
      payload: res.data
    });
    react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"].done(toastId);
  }).catch(err => {
    alert(JSON.stringify(err));
    react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"].error("Complaint Registration Failed");
  });
};
const updateComplaintStatus = e => dispatch => {
  Object(_utilities_axiosInterceptor__WEBPACK_IMPORTED_MODULE_0__["default"])({
    method: 'patch',
    url: _config_constants__WEBPACK_IMPORTED_MODULE_2___default.a.complaintAPI,
    data: {
      complaintId: e.target.id,
      complaintStatus: e.target.value
    }
  }).then(res => {
    react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"].success("Complaint Status Changed Successfully");
    dispatch({
      type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__["UPDATE_COMPLAINT_STATUS"],
      payload: res.data
    });
  }).catch(err => react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"].error("Updating Complaint Status Failed"));
};
const fetchDepartment = () => dispatch => {
  _utilities_axiosInterceptor__WEBPACK_IMPORTED_MODULE_0__["default"].get(_config_constants__WEBPACK_IMPORTED_MODULE_2___default.a.departmentAPI).then(res => {
    dispatch({
      type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__["FETCH_DEPARTMENT"],
      payload: res.data
    });
  }).catch(err => {
    console.log(err);
  });
};
const showComplaintList = () => dispatch => {
  _utilities_axiosInterceptor__WEBPACK_IMPORTED_MODULE_0__["default"].get(_config_constants__WEBPACK_IMPORTED_MODULE_2___default.a.complaintAPI).then(res => {
    dispatch({
      type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__["FETCH_COMPLAINT"],
      payload: res.data
    });
  });
};

/***/ }),

/***/ "./src/actions/user.actions.js":
/*!*************************************!*\
  !*** ./src/actions/user.actions.js ***!
  \*************************************/
/*! exports provided: fetchUser, fetchAllUser, updatePhoto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchUser", function() { return fetchUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchAllUser", function() { return fetchAllUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePhoto", function() { return updatePhoto; });
/* harmony import */ var _utilities_axiosInterceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/axiosInterceptor */ "./src/utilities/axiosInterceptor.js");
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actionTypes */ "./src/actions/actionTypes.js");
/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/constants */ "./src/config/constants.js");
/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_config_constants__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/esm/react-toastify.js");




const fetchUser = () => dispatch => {
  _utilities_axiosInterceptor__WEBPACK_IMPORTED_MODULE_0__["default"].get(_config_constants__WEBPACK_IMPORTED_MODULE_2___default.a.profileAPI).then(res => {
    dispatch({
      type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__["FETCH_USER"],
      payload: res.data
    });
  }).catch(err => {
    console.log("-------> err" + err);
  });
};
const fetchAllUser = () => dispatch => {
  _utilities_axiosInterceptor__WEBPACK_IMPORTED_MODULE_0__["default"].get(_config_constants__WEBPACK_IMPORTED_MODULE_2___default.a.getAllUser).then(res => {
    dispatch({
      type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__["FETCH_ALL_USERS"],
      payload: res.data
    });
  }).catch(err => {
    console.log("error :", err);
  });
};
const updatePhoto = formData => dispatch => {
  let toastId = null;
  Object(_utilities_axiosInterceptor__WEBPACK_IMPORTED_MODULE_0__["default"])({
    method: 'post',
    url: _config_constants__WEBPACK_IMPORTED_MODULE_2___default.a.profileAPI,
    data: formData,
    onUploadProgress: p => {
      const progress = Math.round(p.loaded * 100 / p.total);

      if (toastId === null) {
        toastId = Object(react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"])("Please Wait while we post your buzz :".concat(progress, "%"), {
          progress
        });
      } else {
        react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"].update(toastId, {
          render: "Uploaded Successfully ".concat(progress, ", Processing"),
          type: react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"].TYPE.SUCCESS
        });
      }
    }
  }).then(res => {
    dispatch({
      type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__["FETCH_USER"],
      payload: res.data
    });
    react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"].done(toastId);
  }).catch(err => {
    react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"].error("Photo Updating failed");
  });
};

/***/ }),

/***/ "./src/components/Header/Header.css":
/*!******************************************!*\
  !*** ./src/components/Header/Header.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Header.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Header/Header.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Header.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Header/Header.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Header.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Header/Header.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/Header/Header.js":
/*!*****************************************!*\
  !*** ./src/components/Header/Header.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Header_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header.css */ "./src/components/Header/Header.css");
/* harmony import */ var _Header_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Header_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/ttn/Documents/TTN-BUZZ-FRONTEND/src/components/Header/Header.js";




class Header extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    this.logout = () => {
      localStorage.removeItem('token');
      this.props.history.push('/');
    };
  }

  render() {
    console.log("isAdmin :" + this.props.isAdmin);
    const isAdmin = this.props.isAdmin;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
      to: "/dashboard",
      activeClassName: "selected-item",
      title: "News feed",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "far fa-newspaper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
      to: "/dashboard/complaints",
      activeClassName: "selected-item",
      title: "Complaints",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fas fa-file-alt",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    })), isAdmin ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
      to: "/dashboard/resolve",
      activeClassName: "selected-item",
      title: "Resolve",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fas fa-bullhorn",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    })) : null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
      to: "/dashboard/settings",
      activeClassName: "selected-item",
      title: "Settings",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fas fa-user-cog",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      onClick: this.logout,
      title: "Logout",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fas fa-sign-out-alt",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      className: "banner-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, "POSTING YOUR THOUGHTS NEVER BEEN SO EASY..")));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/components/buzz/Buzz.css":
/*!**************************************!*\
  !*** ./src/components/buzz/Buzz.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Buzz.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/buzz/Buzz.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Buzz.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/buzz/Buzz.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Buzz.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/buzz/Buzz.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/buzz/Buzz.js":
/*!*************************************!*\
  !*** ./src/components/buzz/Buzz.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BuzzFeed_BuzzFeed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BuzzFeed/BuzzFeed */ "./src/components/buzz/BuzzFeed/BuzzFeed.js");
/* harmony import */ var _BuzzForm_BuzzForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BuzzForm/BuzzForm */ "./src/components/buzz/BuzzForm/BuzzForm.js");
/* harmony import */ var _Buzz_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Buzz.css */ "./src/components/buzz/Buzz.css");
/* harmony import */ var _Buzz_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Buzz_css__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/home/ttn/Documents/TTN-BUZZ-FRONTEND/src/components/buzz/Buzz.js";





class Buzz extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "Buzz",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BuzzForm_BuzzForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BuzzFeed_BuzzFeed__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Buzz);

/***/ }),

/***/ "./src/components/buzz/BuzzFeed/BuzzFeed.css":
/*!***************************************************!*\
  !*** ./src/components/buzz/BuzzFeed/BuzzFeed.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../../node_modules/postcss-loader/src??postcss!./BuzzFeed.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/buzz/BuzzFeed/BuzzFeed.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../../node_modules/postcss-loader/src??postcss!./BuzzFeed.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/buzz/BuzzFeed/BuzzFeed.css", function() {
		var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../../node_modules/postcss-loader/src??postcss!./BuzzFeed.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/buzz/BuzzFeed/BuzzFeed.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/buzz/BuzzFeed/BuzzFeed.js":
/*!**************************************************!*\
  !*** ./src/components/buzz/BuzzFeed/BuzzFeed.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BuzzFeed_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BuzzFeed.css */ "./src/components/buzz/BuzzFeed/BuzzFeed.css");
/* harmony import */ var _BuzzFeed_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_BuzzFeed_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var typeface_roboto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! typeface-roboto */ "./node_modules/typeface-roboto/index.css");
/* harmony import */ var typeface_roboto__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(typeface_roboto__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var read_more_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! read-more-react */ "./node_modules/read-more-react/dist/index.js");
/* harmony import */ var read_more_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(read_more_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_infinite_scroller__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-infinite-scroller */ "./node_modules/react-infinite-scroller/index.js");
/* harmony import */ var react_infinite_scroller__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_infinite_scroller__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_buzz_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../actions/buzz.actions */ "./src/actions/buzz.actions.js");
var _jsxFileName = "/home/ttn/Documents/TTN-BUZZ-FRONTEND/src/components/buzz/BuzzFeed/BuzzFeed.js";









class BuzzFeed extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    this.handleComment = e => {
      alert("COMMENT : " + e.target.id);
    };

    this.checkUserLike = (user, like) => {
      const liked = like.find(item => {
        if (item.user === user) {
          console.log("-------------->", item.user);
          return true;
        }
      });

      if (liked) {
        return 'liked';
      } else {
        return '';
      }
    };

    this.checkUserDislike = (user, dislike) => {
      const disliked = dislike.find(item => item.user === user);

      if (disliked) {
        return 'disliked';
      } else {
        return '';
      }
    };

    this.setStateFunction = () => {
      const newState = {
        skip: this.state.skip + 5
      };
      return newState;
    };

    this.loadFunc = () => {
      this.setState(this.setStateFunction(), () => {
        this.props.fetchbuzz(this.state.skip);
      });
    };

    this.state = {
      skip: 0
    };
  }

  componentDidMount() {
    this.props.fetchbuzz(this.state.skip);
  }

  render() {
    let buzzes = this.props.buzzes;
    const user = this.props.user;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "buzz-feed-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_infinite_scroller__WEBPACK_IMPORTED_MODULE_5___default.a, {
      pageStart: 0,
      loadMore: this.loadFunc,
      hasMore: this.state.skip < this.props.buzzes.length,
      loader: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "loader",
        key: 0,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, "Loading ..."),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, buzzes.map((item, index) => {
      const buzzId = item._id,
            buzz = item.buzz,
            createdAt = item.createdAt,
            attachment = item.attachment,
            category = item.category,
            like = item.like,
            dislike = item.dislike,
            comments = item.comments,
            postedBy = item.postedBy;
      const liked = this.checkUserLike(user, like);
      const disliked = this.checkUserDislike(user, dislike);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "buzz-feed container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "buzz-header row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-lg-2 col-xs-3 col-md-3 col-sm-3",
        title: "User photo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: postedBy.photoURL,
        alt: "",
        width: "100%",
        height: "100px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-lg-8 col-xs-8 col-md-8 col-sm-8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-lg-7 col-xs-8 col-sm-6 col-md-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        style: {
          display: "block"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, postedBy.displayName), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        title: "time of buzz creation",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, moment__WEBPACK_IMPORTED_MODULE_4___default()(createdAt).calendar())), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-lg-4 col-lg-offset-1 col-md-3 col-md-offset-3 col-xs-4 col-sm-3 col-sm-offset-3 activity",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, category)), postedBy._id === user._id ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: buzzId,
        className: "col-lg-2 col-xs-1 col-sm-1 col-md-1 delete-btn",
        onClick: this.props.deleteBuzz,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        id: buzzId,
        type: "button",
        className: "close",
        title: "Delete the buzz",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, "\xD7")) : null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        className: "row buzz-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(read_more_react__WEBPACK_IMPORTED_MODULE_3___default.a, {
        text: buzz,
        min: 100,
        ideal: 150,
        max: 200,
        readMoreText: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "read-more",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 109
          },
          __self: this
        }, "Read More..."),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      })), attachment === "" ? null : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "buzz-attachment",
        style: Object.assign({
          background: "url(\"".concat(attachment, "\") center no-repeat")
        }, {
          backgroundSize: 'contain'
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "buzz-footer row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-lg-4 col-md-4 col-sm-4 col-xs-4",
        id: buzzId,
        onClick: this.props.like,
        title: "Like",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "far fa-thumbs-up" + liked,
        id: buzzId,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "badge",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, like.length)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-lg-4 col-md-4 col-sm-4 col-xs-4",
        id: buzzId,
        onClick: this.props.dislike,
        title: "Dislike",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "far fa-thumbs-down ".concat(disliked),
        id: buzzId,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "badge",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, dislike.length)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-lg-4 col-md-4 col-sm-4 col-xs-4",
        id: buzzId,
        onClick: this.handleComment,
        title: "Comment",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "far fa-comment-dots",
        id: buzzId,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "badge",
        id: buzzId,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, comments.length))));
    })), " ");
  }

}

const mapStateToProps = state => {
  return {
    user: state.userReducer.userData,
    buzzes: state.buzzReducer.buzzList
  };
};

const mapDispatchToProps = {
  fetchbuzz: _actions_buzz_actions__WEBPACK_IMPORTED_MODULE_7__["fetchbuzz"],
  like: _actions_buzz_actions__WEBPACK_IMPORTED_MODULE_7__["like"],
  dislike: _actions_buzz_actions__WEBPACK_IMPORTED_MODULE_7__["dislike"],
  deleteBuzz: _actions_buzz_actions__WEBPACK_IMPORTED_MODULE_7__["deleteBuzz"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps, mapDispatchToProps)(BuzzFeed));

/***/ }),

/***/ "./src/components/buzz/BuzzForm/BuzzForm.css":
/*!***************************************************!*\
  !*** ./src/components/buzz/BuzzForm/BuzzForm.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../../node_modules/postcss-loader/src??postcss!./BuzzForm.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/buzz/BuzzForm/BuzzForm.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../../node_modules/postcss-loader/src??postcss!./BuzzForm.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/buzz/BuzzForm/BuzzForm.css", function() {
		var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../../node_modules/postcss-loader/src??postcss!./BuzzForm.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/buzz/BuzzForm/BuzzForm.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/buzz/BuzzForm/BuzzForm.js":
/*!**************************************************!*\
  !*** ./src/components/buzz/BuzzForm/BuzzForm.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BuzzForm_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BuzzForm.css */ "./src/components/buzz/BuzzForm/BuzzForm.css");
/* harmony import */ var _BuzzForm_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_BuzzForm_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions_buzz_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../actions/buzz.actions */ "./src/actions/buzz.actions.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var _jsxFileName = "/home/ttn/Documents/TTN-BUZZ-FRONTEND/src/components/buzz/BuzzForm/BuzzForm.js";





class BuzzForm extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    this.handleFileChange = e => {
      this.setState({
        fileName: e.target.files[0].name
      });
    };

    this.handleSubmit = e => {
      e.preventDefault();
      const formData = new FormData();
      let buzz = e.target[0].value.trim();
      let category = e.target[1].value;

      if (buzz && category) {
        formData.append('buzz', buzz);
        formData.append('category', category);
        if (e.target[2].value) formData.append('attachment', e.target[2].files[0]);
        console.log('file is : ', JSON.stringify(e.target[2].files[0]));
        this.props.saveBuzz(formData);
        e.target.reset();
        this.setState({
          fileName: ''
        });
      }
    };

    this.state = {
      fileName: ''
    };
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "buzz-create",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      onSubmit: this.handleSubmit,
      encType: "multipart/form-data",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "Buzz create",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, "CREATE BUZZ"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
      className: "form-control textarea",
      name: "buzz",
      id: "buzz",
      required: true,
      cols: "10",
      rows: "5",
      placeholder: "Share your thoughts....",
      title: "Type your buzz",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row col-sm-12 post-control",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
      name: "category",
      id: "category",
      className: "form-control col-xs-12",
      title: "Select Buzz Activity",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "Activity",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, "ACTIVITY"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "Lost and Found",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, "LOST AND FOUND")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: 'file-upload col-xs-12',
      title: "Choose file ",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "file-upload",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "far fa-image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, this.state.fileName), console.log('file----------->', this.state.filename)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "file",
      name: "attachment",
      id: "file-upload",
      className: "attachment",
      onChange: this.handleFileChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      type: "submit",
      className: "btn btn-success col-xs-6",
      title: "Upload your buzz",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fas fa-paper-plane",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }), " Post")))));
  }

}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = {
  saveBuzz: _actions_buzz_actions__WEBPACK_IMPORTED_MODULE_2__["saveBuzz"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(BuzzForm));

/***/ }),

/***/ "./src/components/complaints/complaints.css":
/*!**************************************************!*\
  !*** ./src/components/complaints/complaints.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./complaints.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/complaints/complaints.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./complaints.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/complaints/complaints.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./complaints.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/complaints/complaints.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/complaints/complaints.js":
/*!*************************************************!*\
  !*** ./src/components/complaints/complaints.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _complaints_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./complaints.css */ "./src/components/complaints/complaints.css");
/* harmony import */ var _complaints_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_complaints_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions_complaints_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/complaints.action */ "./src/actions/complaints.action.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _detailComp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./detailComp */ "./src/components/complaints/detailComp.js");
var _jsxFileName = "/home/ttn/Documents/TTN-BUZZ-FRONTEND/src/components/complaints/complaints.js";






class Complaints extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    this.handleSubmit = e => {
      e.preventDefault();
      const formData = new FormData();
      formData.append('department', e.target[0].value);
      formData.append('issueTitle', e.target[1].value);
      formData.append('concern', e.target[2].value);
      if (e.target[3].value) formData.append('attachment', e.target[3].files[0]);
      this.props.fileComplaint(formData);
      e.target.reset();
    };
  }

  componentDidMount() {
    this.props.showComplaintList();
    this.props.fetchDepartment();
  }

  render() {
    const _this$props = this.props,
          departmentList = _this$props.departmentList,
          complaintList = _this$props.complaintList;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      className: "complaints container-fluids clearfix",
      onSubmit: this.handleSubmit,
      encType: "multipart/form-data",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "complaints-box-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, "Complaint Box")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "myrow",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-xs-12 col-sm-6 col-md-6 col-lg-6 form-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "department",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, "Select Department"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
      name: "department",
      id: "department",
      className: "form-control",
      title: "Select Department",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, departmentList.map(department => {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: department._id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, department.deptName);
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-xs-12 col-sm-6 col-md-6 col-lg-6 form-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "issueTitle",
      className: "control-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, "Issue Title"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "text",
      name: "issueTitle",
      id: "issueTitle",
      className: "form-control",
      required: true,
      maxLength: 50,
      title: "Write Issue Title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "myrow",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-xs-12 col-sm-12 col-md-12 col-lg-12 form-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "concern",
      className: "control-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, "Your Concern"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
      name: "concern",
      id: "concern",
      className: "form-control",
      required: true,
      cols: "30",
      rows: "4",
      placeholder: "write your concern to us.",
      maxLength: 1000,
      title: "Write Your Concern to us.",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "myrow",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-xs-12 col-xs-offset-0 col-sm-3 col-sm-offset-9 col-lg-3 col-lg-offset-9 form-group file-upload",
      title: "Choose File",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "file-upload",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, "Attachment"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "far fa-image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "file",
      id: "file-upload",
      name: "attachment",
      className: "form-control ",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-xs-12 col-xs-offset-0 col-sm-3 col-sm-offset-9 col-lg-3 col-lg-offset-9 form-group",
      title: "Submit Your Complaint",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "submit",
      name: "complaint-submit",
      id: "complaint-submit",
      className: "form-control btn btn-primary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "resolve container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "resolve-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, "My Complaints")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "table-responsive",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
      className: "table table-bordered",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      key: "first-row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, "Department"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }, "Issue id"), "  ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }, "Assigned To"), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }, "Status"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, complaintList.map(complain => {
      //checking that only user complaint displayed here
      if (complain.RaisedBy._id === this.props.user._id) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_detailComp__WEBPACK_IMPORTED_MODULE_4__["default"], {
          complaint: complain,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88
          },
          __self: this
        });
      } //returning true just for the sake of warning ..........................


      return true;
    }))))));
  }

}

const mapStateToProps = state => {
  return {
    user: state.userReducer.userData,
    complaintList: state.complaintReducer.complaintList,
    departmentList: state.departmentReducer.departmentList
  };
};

const mapDispatchToProps = {
  fileComplaint: _actions_complaints_action__WEBPACK_IMPORTED_MODULE_2__["fileComplaint"],
  fetchDepartment: _actions_complaints_action__WEBPACK_IMPORTED_MODULE_2__["fetchDepartment"],
  showComplaintList: _actions_complaints_action__WEBPACK_IMPORTED_MODULE_2__["showComplaintList"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(Complaints));

/***/ }),

/***/ "./src/components/complaints/detailComp.css":
/*!**************************************************!*\
  !*** ./src/components/complaints/detailComp.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./detailComp.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/complaints/detailComp.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./detailComp.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/complaints/detailComp.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./detailComp.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/complaints/detailComp.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/complaints/detailComp.js":
/*!*************************************************!*\
  !*** ./src/components/complaints/detailComp.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _detailComp_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detailComp.css */ "./src/components/complaints/detailComp.css");
/* harmony import */ var _detailComp_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_detailComp_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/ttn/Documents/TTN-BUZZ-FRONTEND/src/components/complaints/detailComp.js";



const DetailComp = props => {
  const complaint = props.complaint;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, complaint.department.deptName), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    style: {
      color: "blue"
    },
    "data-toggle": "modal",
    "data-target": "#myModal" + complaint._id,
    className: "complaintId",
    title: "Complaint ID",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, complaint._id), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    title: "Assigned To",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, complaint.assignedTo.displayName), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: complaint.status,
    title: "status",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, complaint.status), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal fade",
    id: "myModal" + complaint._id,
    role: "dialog",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-dialog modal-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "close",
    "data-dismiss": "modal",
    title: "close",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, "\xD7"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "modal-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, "Complaint Details")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, "Complaint ID :"), " ", complaint._id), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, "Issue Title :"), " ", complaint.issueTitle)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, "Department :"), " ", complaint.department.deptName), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, "Raised By :"), " ", complaint.RaisedBy.displayName)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, "Concern : "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, complaint.concern)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-12 complaint-attachment",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, complaint.attachment === undefined ? null : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: complaint.attachment,
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }, "Assigned To :"), " ", complaint.assignedTo.displayName), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, "Status :"), " ", complaint.status))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "btn btn-default",
    "data-dismiss": "modal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }, "Close"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (DetailComp);

/***/ }),

/***/ "./src/components/dashboard/dashboard.css":
/*!************************************************!*\
  !*** ./src/components/dashboard/dashboard.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./dashboard.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/dashboard/dashboard.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./dashboard.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/dashboard/dashboard.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./dashboard.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/dashboard/dashboard.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/dashboard/dashboard.js":
/*!***********************************************!*\
  !*** ./src/components/dashboard/dashboard.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _dashboard_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.css */ "./src/components/dashboard/dashboard.css");
/* harmony import */ var _dashboard_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_dashboard_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _buzz_Buzz__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../buzz/Buzz */ "./src/components/buzz/Buzz.js");
/* harmony import */ var _Header_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Header/Header */ "./src/components/Header/Header.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _complaints_complaints__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../complaints/complaints */ "./src/components/complaints/complaints.js");
/* harmony import */ var _resolve_resolve__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../resolve/resolve */ "./src/components/resolve/resolve.js");
/* harmony import */ var _sidenav_sidenav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../sidenav/sidenav */ "./src/components/sidenav/sidenav.js");
/* harmony import */ var _settings_settings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../settings/settings */ "./src/components/settings/settings.js");
/* harmony import */ var _actions_user_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../actions/user.actions */ "./src/actions/user.actions.js");
/* harmony import */ var react_toastify_dist_ReactToastify_min_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.min.css */ "./node_modules/react-toastify/dist/ReactToastify.min.css");
/* harmony import */ var react_toastify_dist_ReactToastify_min_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_min_css__WEBPACK_IMPORTED_MODULE_11__);
var _jsxFileName = "/home/ttn/Documents/TTN-BUZZ-FRONTEND/src/components/dashboard/dashboard.js";













class Dashboard extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    const match = this.props.match;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "dashboard",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header_Header__WEBPACK_IMPORTED_MODULE_4__["default"], {
      history: this.props.history,
      isAdmin: this.props.user.isAdmin,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_sidenav_sidenav__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Switch"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
      exact: true,
      path: "".concat(match.path, "/"),
      component: _buzz_Buzz__WEBPACK_IMPORTED_MODULE_3__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
      exact: true,
      path: "".concat(match.path, "/buzz"),
      component: _buzz_Buzz__WEBPACK_IMPORTED_MODULE_3__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
      exact: true,
      path: "".concat(match.path, "/complaints"),
      component: _complaints_complaints__WEBPACK_IMPORTED_MODULE_6__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
      exact: true,
      path: "".concat(match.path, "/resolve"),
      component: _resolve_resolve__WEBPACK_IMPORTED_MODULE_7__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
      exact: true,
      path: "".concat(match.path, "/settings"),
      component: _settings_settings__WEBPACK_IMPORTED_MODULE_9__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
      path: "".concat(match.path),
      render: () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, "You are lost..........."),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    })));
  }

}

const mapStateToProps = state => {
  return {
    user: state.userReducer.userData
  };
};

const mapDispatchToProps = {
  fetchUser: _actions_user_actions__WEBPACK_IMPORTED_MODULE_10__["fetchUser"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapStateToProps, mapDispatchToProps)(Dashboard));

/***/ }),

/***/ "./src/components/loginComponent/background.jpg":
/*!******************************************************!*\
  !*** ./src/components/loginComponent/background.jpg ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/background.a65bc1d2.jpg";

/***/ }),

/***/ "./src/components/loginComponent/loginComp.css":
/*!*****************************************************!*\
  !*** ./src/components/loginComponent/loginComp.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./loginComp.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/loginComponent/loginComp.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./loginComp.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/loginComponent/loginComp.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./loginComp.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/loginComponent/loginComp.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/loginComponent/loginComp.js":
/*!****************************************************!*\
  !*** ./src/components/loginComponent/loginComp.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _loginComp_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loginComp.css */ "./src/components/loginComponent/loginComp.css");
/* harmony import */ var _loginComp_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_loginComp_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _logo_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logo.jpg */ "./src/components/loginComponent/logo.jpg");
/* harmony import */ var _logo_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_logo_jpg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/constants */ "./src/config/constants.js");
/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_config_constants__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/home/ttn/Documents/TTN-BUZZ-FRONTEND/src/components/loginComponent/loginComp.js";





class Login extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  componentDidMount() {
    if (localStorage.getItem('token')) this.props.history.push('/dashboard');
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "login-background",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "login-card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: _logo_jpg__WEBPACK_IMPORTED_MODULE_2___default.a,
      alt: "logo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, "Create Your Own Buzz"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: _config_constants__WEBPACK_IMPORTED_MODULE_3___default.a.AuthURL,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "button",
      value: "Sign in with Google",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ }),

/***/ "./src/components/loginComponent/logo.jpg":
/*!************************************************!*\
  !*** ./src/components/loginComponent/logo.jpg ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/logo.65a52c10.jpg";

/***/ }),

/***/ "./src/components/resolve/resolve.css":
/*!********************************************!*\
  !*** ./src/components/resolve/resolve.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./resolve.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/resolve/resolve.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./resolve.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/resolve/resolve.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./resolve.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/resolve/resolve.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/resolve/resolve.js":
/*!*******************************************!*\
  !*** ./src/components/resolve/resolve.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _resolve_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resolve.css */ "./src/components/resolve/resolve.css");
/* harmony import */ var _resolve_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_resolve_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_user_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/user.actions */ "./src/actions/user.actions.js");
/* harmony import */ var _actions_complaints_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/complaints.action */ "./src/actions/complaints.action.js");
var _jsxFileName = "/home/ttn/Documents/TTN-BUZZ-FRONTEND/src/components/resolve/resolve.js";






class Resolve extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      complaintID: ''
    };
  }

  componentDidMount() {
    this.props.showComplaintList();
    this.props.fetchDepartment();
  }

  render() {
    const _this$props = this.props,
          complaintList = _this$props.complaintList,
          departmentList = _this$props.departmentList,
          allUser = _this$props.allUser;
    console.log("all users :", allUser);
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "resolve container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "resolve-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, "All Complaints")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "table-responsive",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
      className: "table table-bordered",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      key: "first-row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
      name: "department",
      id: "department",
      className: "form-control",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "All",
      disabled: true,
      selected: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, "Department"), departmentList.map((department, index) => {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: department._id,
        key: index,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, department.deptName);
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, "Issue id"), "   ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, "Locked By"), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, "Assigned To"), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, "Status"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, complaintList.map((complain, index) => {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
        key: index,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        title: "department",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, complain.department.deptName), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        style: {
          color: "blue"
        },
        title: "Complaint ID",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, complain._id), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        title: "locked by",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, complain.RaisedBy.displayName), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        title: "Assigned to",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, complain.assignedTo.displayName), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        title: "Update Complaint Status",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
        name: "status",
        id: complain._id,
        onChange: this.props.updateComplaintStatus,
        className: complain.status,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: complain.status,
        disabled: true,
        selected: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, complain.status), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "In-Progress",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, "In-Progress"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "Resolved",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, "Resolved"))));
    })))));
  }

}

const mapStateToProps = state => {
  return {
    user: state.userReducer.userData,
    allUser: state.userReducer.allUsers,
    complaintList: state.complaintReducer.complaintList,
    departmentList: state.departmentReducer.departmentList
  };
};

const mapDispatchToProps = {
  showComplaintList: _actions_complaints_action__WEBPACK_IMPORTED_MODULE_4__["showComplaintList"],
  fetchDepartment: _actions_complaints_action__WEBPACK_IMPORTED_MODULE_4__["fetchDepartment"],
  fetchAllUser: _actions_user_actions__WEBPACK_IMPORTED_MODULE_3__["fetchAllUser"],
  updateComplaintStatus: _actions_complaints_action__WEBPACK_IMPORTED_MODULE_4__["updateComplaintStatus"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(Resolve));

/***/ }),

/***/ "./src/components/settings/settings.css":
/*!**********************************************!*\
  !*** ./src/components/settings/settings.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./settings.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/settings/settings.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./settings.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/settings/settings.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./settings.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/settings/settings.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/settings/settings.js":
/*!*********************************************!*\
  !*** ./src/components/settings/settings.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _settings_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.css */ "./src/components/settings/settings.css");
/* harmony import */ var _settings_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_settings_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_user_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/user.actions */ "./src/actions/user.actions.js");
var _jsxFileName = "/home/ttn/Documents/TTN-BUZZ-FRONTEND/src/components/settings/settings.js";





class Settings extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    this.handleSubmit = e => {
      e.preventDefault();
      const formData = new FormData();

      if (e.target.attachment.value) {
        formData.append('attachment', e.target.attachment.files[0]);
        this.props.updatePhoto(formData);
      } else alert('Please choose photo first.');

      e.target.reset();
    };
  }

  render() {
    const _this$props$user = this.props.user,
          displayName = _this$props$user.displayName,
          photoURL = _this$props$user.photoURL,
          department = _this$props$user.department;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "settings container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: photoURL,
      alt: "",
      title: "User Profile Photo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "image-upload",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      onSubmit: this.handleSubmit,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "file-upload",
      title: "Choose Image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "far fa-image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "file",
      name: "attachment",
      id: "file-upload",
      className: "attachment",
      style: {
        display: "none"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      type: "submit",
      className: "btn btn-success",
      style: {
        width: "100px"
      },
      title: "Update Photo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fas fa-paper-plane",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }), " Update"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, displayName), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, department.deptName));
  }

}

const mapStateToProps = state => {
  return {
    user: state.userReducer.userData
  };
};

const mapDispatchToProps = {
  updatePhoto: _actions_user_actions__WEBPACK_IMPORTED_MODULE_3__["updatePhoto"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(Settings));

/***/ }),

/***/ "./src/components/sidenav/sidenav.css":
/*!********************************************!*\
  !*** ./src/components/sidenav/sidenav.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./sidenav.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/sidenav/sidenav.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./sidenav.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/sidenav/sidenav.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./sidenav.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/sidenav/sidenav.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/sidenav/sidenav.js":
/*!*******************************************!*\
  !*** ./src/components/sidenav/sidenav.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sidenav_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidenav.css */ "./src/components/sidenav/sidenav.css");
/* harmony import */ var _sidenav_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sidenav_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var _jsxFileName = "/home/ttn/Documents/TTN-BUZZ-FRONTEND/src/components/sidenav/sidenav.js";





class SideNav extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const _this$props$user = this.props.user,
          photoURL = _this$props$user.photoURL,
          isAdmin = _this$props$user.isAdmin;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
      className: "side-nav col-xs-12 col-lg-4 col-sm-4 col-md-4 row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "profile",
      title: "User profile",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: photoURL,
      alt: "Avatar",
      style: {
        width: "100%"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
      to: "/dashboard",
      activeClassName: "selected-item",
      title: "Buzz feed",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "far fa-newspaper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }), "BUZZ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
      to: "/dashboard/complaints",
      activeClassName: "selected-item",
      title: "Complaints",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fas fa-file-alt",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }), "COMPLAINTS")), isAdmin ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
      to: "/dashboard/resolve",
      activeClassName: "selected-item",
      title: "Resolve",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fab fa-resolving",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }), "RESOLVE")) : null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
      to: "/dashboard/settings",
      activeClassName: "selected-item",
      title: "Settings",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fas fa-user-cog",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }), "SETTINGS"))));
  }

}

const mapStateToProps = state => {
  return {
    user: state.userReducer.userData
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps)(SideNav));

/***/ }),

/***/ "./src/components/utilities/saveToken.js":
/*!***********************************************!*\
  !*** ./src/components/utilities/saveToken.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/ttn/Documents/TTN-BUZZ-FRONTEND/src/components/utilities/saveToken.js";


class SaveToken extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  componentDidMount() {
    const token = this.props.location.search.split('=')[1];
    localStorage.setItem("token", token);
    this.props.history.push('/dashboard');
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (SaveToken);

/***/ }),

/***/ "./src/config/constants.js":
/*!*********************************!*\
  !*** ./src/config/constants.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  AuthURL: "http://localhost:3000/auth/google",
  profileAPI: 'http://localhost:3000/users',
  getAllUser: 'http://localhost:3000/users/all',
  buzzAPI: 'http://localhost:3000/buzzes',
  buzzLike: 'http://localhost:3000/buzzes/like',
  buzzDisLike: 'http://localhost:3000/buzzes/dislike',
  complaintAPI: 'http://localhost:3000/complaints',
  departmentAPI: 'http://localhost:3000/complaints/departments',
  myComplaintAPI: 'http://localhost:3000/complaints/mycomplaints'
};

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./store/store */ "./src/store/store.js");
var _jsxFileName = "/home/ttn/Documents/TTN-BUZZ-FRONTEND/src/index.js";







react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_5__["Provider"], {
  store: _store_store__WEBPACK_IMPORTED_MODULE_6__["default"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
})), document.getElementById('root'));
_serviceWorker__WEBPACK_IMPORTED_MODULE_4__["unregister"]();

/***/ }),

/***/ "./src/reducers/buzzReducer.js":
/*!*************************************!*\
  !*** ./src/reducers/buzzReducer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_ttn_Documents_TTN_BUZZ_FRONTEND_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/actionTypes */ "./src/actions/actionTypes.js");


const initialState = {
  buzzList: []
};

const buzzReducer = (state = initialState, action) => {
  switch (action.type) {
    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__["CREATE_BUZZ_STARTED"]:
      {
        return state;
      }

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__["CREATE_BUZZ_SUCCESS"]:
      const buzzList = [action.payload, ...state.buzzList];
      return Object(_home_ttn_Documents_TTN_BUZZ_FRONTEND_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        buzzList
      });

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__["CREATE_BUZZ_FAILED"]:
      return state;

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__["FETCH_BUZZ_STARTED"]:
      return state;

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__["FETCH_BUZZ_SUCCESS"]:
      const buzz = state.buzzList.concat(...action.payload);
      return Object(_home_ttn_Documents_TTN_BUZZ_FRONTEND_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        buzzList: buzz
      });

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__["FETCH_BUZZ_FAILED"]:
      return state;

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__["DELETE_BUZZ_STARTED"]:
      return state;

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__["DELETE_BUZZ_SUCCESS"]:
      {
        state.buzzList = state.buzzList.filter(buzz => {
          if (buzz._id !== action.payload) {
            return buzz;
          }
        });
        return Object(_home_ttn_Documents_TTN_BUZZ_FRONTEND_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          buzzList: state.buzzList
        });
      }

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__["DELETE_BUZZ_FAILED"]:
      return state;

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__["LIKE_BUZZ"]:
      const updatedBuzList = state.buzzList.map(item => {
        if (item._id === action.payload._id) {
          return action.payload;
        }

        return item;
      });
      return Object(_home_ttn_Documents_TTN_BUZZ_FRONTEND_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        buzzList: updatedBuzList
      });

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__["DISLIKE_BUZZ"]:
      const New_BuzList = state.buzzList.map(item => {
        if (item._id === action.payload._id) {
          return action.payload;
        }

        return item;
      });
      return Object(_home_ttn_Documents_TTN_BUZZ_FRONTEND_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        buzzList: New_BuzList
      });

    default:
      {
        return state;
      }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (buzzReducer);

/***/ }),

/***/ "./src/reducers/complaint.reducer.js":
/*!*******************************************!*\
  !*** ./src/reducers/complaint.reducer.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_ttn_Documents_TTN_BUZZ_FRONTEND_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/actionTypes */ "./src/actions/actionTypes.js");


const initialState = {
  complaintList: []
};

const complaintReducer = (state = initialState, action) => {
  switch (action.type) {
    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__["FILE_COMPLAINT"]:
      {
        return Object(_home_ttn_Documents_TTN_BUZZ_FRONTEND_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          complaintList: [...state.complaintList, action.payload]
        });
      }

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__["FETCH_COMPLAINT"]:
      {
        return Object(_home_ttn_Documents_TTN_BUZZ_FRONTEND_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          complaintList: action.payload
        });
      }

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__["UPDATE_COMPLAINT_STATUS"]:
      {
        const updatedComplaintList = state.complaintList.map(complaint => {
          if (complaint._id === action.payload[0]._id) {
            return action.payload[0];
          }

          return complaint;
        });
        return Object(_home_ttn_Documents_TTN_BUZZ_FRONTEND_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          complaintList: updatedComplaintList
        });
      }

    default:
      {
        return state;
      }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (complaintReducer);

/***/ }),

/***/ "./src/reducers/department.reducer.js":
/*!********************************************!*\
  !*** ./src/reducers/department.reducer.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_ttn_Documents_TTN_BUZZ_FRONTEND_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/actionTypes */ "./src/actions/actionTypes.js");


const initialState = {
  departmentList: [{
    _id: '',
    deptName: ''
  }]
};

const departmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__["ADD_DEPARTMENT"]:
      {
        return Object(_home_ttn_Documents_TTN_BUZZ_FRONTEND_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          departmentList: [...state.departmentList, action.payload]
        });
      }

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__["FETCH_DEPARTMENT"]:
      {
        return Object(_home_ttn_Documents_TTN_BUZZ_FRONTEND_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          departmentList: action.payload
        });
      }

    default:
      {
        return state;
      }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (departmentReducer);

/***/ }),

/***/ "./src/reducers/rootReducer.js":
/*!*************************************!*\
  !*** ./src/reducers/rootReducer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _user_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.reducer */ "./src/reducers/user.reducer.js");
/* harmony import */ var _complaint_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./complaint.reducer */ "./src/reducers/complaint.reducer.js");
/* harmony import */ var _buzzReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./buzzReducer */ "./src/reducers/buzzReducer.js");
/* harmony import */ var _department_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./department.reducer */ "./src/reducers/department.reducer.js");





const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  userReducer: _user_reducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  buzzReducer: _buzzReducer__WEBPACK_IMPORTED_MODULE_3__["default"],
  complaintReducer: _complaint_reducer__WEBPACK_IMPORTED_MODULE_2__["default"],
  departmentReducer: _department_reducer__WEBPACK_IMPORTED_MODULE_4__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./src/reducers/user.reducer.js":
/*!**************************************!*\
  !*** ./src/reducers/user.reducer.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_ttn_Documents_TTN_BUZZ_FRONTEND_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/actionTypes */ "./src/actions/actionTypes.js");


const initialState = {
  userData: {
    _id: '',
    displayName: '',
    isActive: true,
    department: {},
    isAdmin: false
  },
  allUsers: []
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__["FETCH_USER"]:
      {
        return Object(_home_ttn_Documents_TTN_BUZZ_FRONTEND_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          userData: action.payload
        });
      }

    case _actions_actionTypes__WEBPACK_IMPORTED_MODULE_1__["FETCH_ALL_USERS"]:
      {
        return Object(_home_ttn_Documents_TTN_BUZZ_FRONTEND_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          allUsers: action.payload
        });
      }

    default:
      {
        return state;
      }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (userReducer);

/***/ }),

/***/ "./src/routes/index.js":
/*!*****************************!*\
  !*** ./src/routes/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_ttn_Documents_TTN_BUZZ_FRONTEND_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_loginComponent_loginComp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/loginComponent/loginComp */ "./src/components/loginComponent/loginComp.js");
/* harmony import */ var _components_utilities_saveToken__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/utilities/saveToken */ "./src/components/utilities/saveToken.js");
/* harmony import */ var _components_dashboard_dashboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/dashboard/dashboard */ "./src/components/dashboard/dashboard.js");

var _jsxFileName = "/home/ttn/Documents/TTN-BUZZ-FRONTEND/src/routes/index.js";






const Routes = () => {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Switch"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    exact: true,
    path: "/",
    component: _components_loginComponent_loginComp__WEBPACK_IMPORTED_MODULE_3__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    exact: true,
    path: "/token",
    component: _components_utilities_saveToken__WEBPACK_IMPORTED_MODULE_4__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PrivateRoute, {
    path: "/dashboard",
    component: _components_dashboard_dashboard__WEBPACK_IMPORTED_MODULE_5__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    render: () => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: undefined
    }, "You are lost"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  })));
};

const PrivateRoute = (_ref) => {
  let Component = _ref.component,
      restProps = Object(_home_ttn_Documents_TTN_BUZZ_FRONTEND_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["component"]);

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], Object.assign({}, restProps, {
    render: props => {
      return localStorage.getItem('token') ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Component, Object.assign({}, props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: undefined
      })) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], {
        to: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: undefined
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Routes);

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}

/***/ }),

/***/ "./src/store/store.js":
/*!****************************!*\
  !*** ./src/store/store.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _reducers_rootReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducers/rootReducer */ "./src/reducers/rootReducer.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ "./node_modules/redux-devtools-extension/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-logger */ "./node_modules/redux-logger/dist/redux-logger.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_4__);





const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers_rootReducer__WEBPACK_IMPORTED_MODULE_1__["default"], Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_3__["default"], redux_logger__WEBPACK_IMPORTED_MODULE_4___default.a)));
store.subscribe(() => {
  console.log("store has changed " + store.getState());
});
/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),

/***/ "./src/utilities/axiosInterceptor.js":
/*!*******************************************!*\
  !*** ./src/utilities/axiosInterceptor.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const axiosInstance = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create();
axiosInstance.interceptors.request.use(config => {
  config.headers.authorization = localStorage.getItem('token');
  return config;
});
/* harmony default export */ __webpack_exports__["default"] = (axiosInstance);

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/ttn/Documents/TTN-BUZZ-FRONTEND/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /home/ttn/Documents/TTN-BUZZ-FRONTEND/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime~main",1]]]);
//# sourceMappingURL=main.chunk.js.map