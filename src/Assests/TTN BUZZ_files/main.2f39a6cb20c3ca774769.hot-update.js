webpackHotUpdate("main",{

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

/***/ })

})
//# sourceMappingURL=main.2f39a6cb20c3ca774769.hot-update.js.map