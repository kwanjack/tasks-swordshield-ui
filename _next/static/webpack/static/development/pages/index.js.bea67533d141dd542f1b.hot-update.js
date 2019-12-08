webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/TaskList.js":
/*!********************************!*\
  !*** ./components/TaskList.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_customHooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/customHooks */ "./hooks/customHooks.js");
/* harmony import */ var react_movable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-movable */ "./node_modules/react-movable/lib/index.js");
/* harmony import */ var react_movable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_movable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mock_api_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mock_api/models */ "./mock_api/models.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");

var _jsxFileName = "/Users/jackkwan/Projects/priorities/components/TaskList.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var listStyle = __jsx("style", {
  jsx: "true",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, "\n.draggable-list {\n  margin-top: 80px;\n  overflow: auto;\n  max-height: -webkit-calc(100vh - 180px);\n  -webkit-mask-image: -webkit-gradient(linear, left center, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)));\n}\n\n.draggable-left {\n  background: lightgrey;\n  width: 30px;\n  padding: 0px;\n  margin: 0px;\n  height: 100%;\n}\n\n.list-item-content {\n  width: -webkit-calc(100% - 180px);\n  display: flex;\n  flex-direction: row;\n  height: 40px;\n  align-items: center;\n  font-weight: 700;\n}\n\nul { padding: 0px; }\n\nli:hover {\n  cursor: move; /* fallback if grab cursor is unsupported */\n  cursor: grab;\n}\n\nli {\n  display: flex;\n  margin: 10px 0px;\n  background-color: white;\n  list-style-type: none;\n  font-size: 20px;\n  height: 40px;\n  justify-content: space-between;\n  flex-direction: row;\n}\n\n.list-item-name {\n  text-align: left;\n  padding-left: 10px;\n  flex: 1;\n}\n\n.trash-button {\n  border: none;\n  margin: 0;\n  padding: 0;\n  width: auto;\n  overflow: visible;\n  cursor: pointer;\n  background: transparent;\n  font-size: 20px;\n}\n\n.l\n");

var sortTasksUsingPriority = function sortTasksUsingPriority(pickedPriorityId, tasks) {
  var priorities = Object(_hooks_customHooks__WEBPACK_IMPORTED_MODULE_2__["usePriorities"])() || [];

  if (!pickedPriorityId || priorities.length === 0) {
    return [];
  }

  var result = [];
  var priority = priorities.find(function (priority) {
    return priority.id === pickedPriorityId;
  });

  if (!priority) {
    return [];
  }

  var _loop = function _loop(i) {
    var ranking = priority.ranking[i];
    var task = tasks.find(function (task) {
      return task.id === ranking;
    });
    result.push(task);
  };

  for (var i = 0; i < priority.ranking.length; i++) {
    _loop(i);
  }

  ;
  result = result.filter(function (item) {
    return item !== undefined;
  });
  return result;
};

var TaskList = function TaskList(props) {
  var tasks = props.tasks,
      pickedPriorityId = props.pickedPriorityId;
  var sortedTasks = sortTasksUsingPriority(pickedPriorityId, tasks);
  var items = sortedTasks.map(function (st) {
    return st.name;
  });
  return __jsx(react_movable__WEBPACK_IMPORTED_MODULE_3__["List"], {
    values: items,
    removableByMove: true,
    onChange: function onChange(_ref) {
      var oldIndex = _ref.oldIndex,
          newIndex = _ref.newIndex,
          targetRect = _ref.targetRect;
      console.log('targetRect:', targetRect);

      if (newIndex === -1) {
        return Object(_mock_api_models__WEBPACK_IMPORTED_MODULE_4__["removeTaskById"])(sortedTasks[oldIndex].id);
      }

      Object(_mock_api_models__WEBPACK_IMPORTED_MODULE_4__["moveTaskToRank"])(sortedTasks[oldIndex].id, pickedPriorityId, newIndex);
    },
    renderList: function renderList(_ref2) {
      var children = _ref2.children,
          props = _ref2.props;
      return __jsx("ul", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        className: "draggable-list"
      }, props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }), children, " ", listStyle);
    },
    renderItem: function renderItem(_ref3) {
      var value = _ref3.value,
          props = _ref3.props,
          index = _ref3.index;
      return __jsx("li", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        className: "list-item"
      }, props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }), __jsx("div", {
        className: "list-item-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, __jsx("div", {
        className: "draggable-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }), __jsx("div", {
        className: "list-item-name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, " ", value, " "), __jsx("button", {
        className: "trash-button",
        onClick: function onClick() {
          return Object(_mock_api_models__WEBPACK_IMPORTED_MODULE_4__["removeTaskById"])(sortedTasks[index].id);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faTrash"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }))));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  });
};

/* harmony default export */ __webpack_exports__["default"] = (TaskList);

/***/ })

})
//# sourceMappingURL=index.js.bea67533d141dd542f1b.hot-update.js.map