webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_customHooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/customHooks */ "./hooks/customHooks.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _components_PrioritySelect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/PrioritySelect */ "./components/PrioritySelect.js");
/* harmony import */ var _components_TaskList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/TaskList */ "./components/TaskList.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
var _jsxFileName = "/Users/jackkwan/Projects/priorities/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var homeStyle = __jsx("style", {
  jsx: "true",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, "\nh1 { font-size: 40px; }\n.main-title { margin-bottom: 0; }\n.sub-title { margin-top: 0; font-size: 12px; }\n.main-content {\n  padding-left: 20px;\n  width: -webkit-calc(100vw - 50px);\n }\n");

function Home() {
  var tasks = Object(_hooks_customHooks__WEBPACK_IMPORTED_MODULE_1__["useTasks"])();
  var priorities = Object(_hooks_customHooks__WEBPACK_IMPORTED_MODULE_1__["usePriorities"])() || [];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('0'),
      pickedPriorityId = _useState[0],
      setPickedPriorityId = _useState[1];

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onAddPriority: setPickedPriorityId,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("div", {
    className: "main-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("h1", {
    className: "main-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, " ", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faList"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), " Priorities"), __jsx("h2", {
    className: "sub-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, " Pokemon Sword/Shield Themed Task Organizer."), __jsx(_components_PrioritySelect__WEBPACK_IMPORTED_MODULE_4__["default"], {
    priorities: priorities,
    pickedPriorityId: pickedPriorityId,
    setPickedPriorityId: setPickedPriorityId,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), __jsx(_components_TaskList__WEBPACK_IMPORTED_MODULE_5__["default"], {
    tasks: tasks,
    pickedPriorityId: pickedPriorityId,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  })), homeStyle);
}

/***/ })

})
//# sourceMappingURL=index.js.45c6b19c9d6021478b42.hot-update.js.map