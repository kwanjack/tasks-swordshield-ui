webpackHotUpdate("static/development/pages/index.js",{

/***/ "./hooks/customHooks.js":
/*!******************************!*\
  !*** ./hooks/customHooks.js ***!
  \******************************/
/*! exports provided: useTasks, usePriorities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTasks", function() { return useTasks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePriorities", function() { return usePriorities; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pubsub-js */ "./node_modules/pubsub-js/src/pubsub.js");
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pubsub_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mock_api_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mock_api/models */ "./mock_api/models.js");



function useTasks() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      tasks = _useState[0],
      setTasks = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    //on first render
    console.log('Local Storage Empty. Setting initial Tasks...');
    var initialTasks = Object(_mock_api_models__WEBPACK_IMPORTED_MODULE_2__["getTasks"])();
    setTasks(initialTasks);
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    //on every render
    var token = pubsub_js__WEBPACK_IMPORTED_MODULE_1___default.a.subscribe('tasks', function (msg, data) {
      return setTasks(data);
    });
    return function () {
      return pubsub_js__WEBPACK_IMPORTED_MODULE_1___default.a.unsubscribe(token);
    };
  });
  return tasks;
}
function usePriorities() {
  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      priorities = _useState2[0],
      setPriorities = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    //on first render
    console.log('Local Storage Empty. Setting initial Priorities...');
    var initialPriorities = Object(_mock_api_models__WEBPACK_IMPORTED_MODULE_2__["getPriorities"])();
    setPriorities(initialPriorities);
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    //on every render
    var token = pubsub_js__WEBPACK_IMPORTED_MODULE_1___default.a.subscribe('priorities', function (msg, data) {
      setPriorities(data);
    });
    return function () {
      return pubsub_js__WEBPACK_IMPORTED_MODULE_1___default.a.unsubscribe(token);
    };
  });
  return priorities;
}

/***/ })

})
//# sourceMappingURL=index.js.63889f87c9e633f7b980.hot-update.js.map