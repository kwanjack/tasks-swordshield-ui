webpackHotUpdate("static/development/pages/index.js",{

/***/ "./mock_api/models.js":
/*!****************************!*\
  !*** ./mock_api/models.js ***!
  \****************************/
/*! exports provided: getTasks, getPriorities, addTaskByName, removeTaskById, addPriorityByName, removePriorityById, moveTaskToRank */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTasks", function() { return getTasks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPriorities", function() { return getPriorities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addTaskByName", function() { return addTaskByName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeTaskById", function() { return removeTaskById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPriorityByName", function() { return addPriorityByName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removePriorityById", function() { return removePriorityById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moveTaskToRank", function() { return moveTaskToRank; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! pubsub-js */ "./node_modules/pubsub-js/src/pubsub.js");
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(pubsub_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _dummyData__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dummyData */ "./mock_api/dummyData.js");
/* harmony import */ var _dummyData__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_dummyData__WEBPACK_IMPORTED_MODULE_11__);











function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(source).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }

/*
Task {
	id: String
	name: String
}

Priority {
	id: String
	name: String
	ranking: [ TaskIds ]
}
*/



function generateId() {
  return '_' + Math.random().toString(36).substr(2, 9);
}

function getTasks() {
  var tasksJSON = localStorage.getItem('tasks');

  if (!tasksJSON) {
    localStorage.setItem('tasks', _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_9___default()(_dummyData__WEBPACK_IMPORTED_MODULE_11__["dummyTasks"]));
    localStorage.setItem('priorities', _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_9___default()(_dummyData__WEBPACK_IMPORTED_MODULE_11__["dummyPriorities"]));
    tasksJSON = localStorage.getItem('tasks');
    pubsub_js__WEBPACK_IMPORTED_MODULE_10___default.a.publish('tasks', JSON.parse(tasksJSON));
  }

  return JSON.parse(tasksJSON);
}
function getPriorities() {
  var priortiesJSON = localStorage.getItem('priorities');

  if (!priortiesJSON) {
    localStorage.setItem('tasks', _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_9___default()(_dummyData__WEBPACK_IMPORTED_MODULE_11__["dummyTasks"]));
    localStorage.setItem('priorities', _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_9___default()(_dummyData__WEBPACK_IMPORTED_MODULE_11__["dummyPriorities"]));
    priortiesJSON = localStorage.getItem('priorities');
    pubsub_js__WEBPACK_IMPORTED_MODULE_10___default.a.publish('priorities', JSON.parse(priortiesJSON));
  }

  return JSON.parse(priortiesJSON);
}
function addTaskByName(taskName) {
  var tasks = getTasks();
  var task = {
    id: generateId(),
    name: taskName
  };
  tasks.push(task);
  console.log('adding task by name:', taskName);
  var priorities = getPriorities();
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_8___default()(priorities), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var priority = _step.value;
      priority.ranking.unshift(task.id);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  localStorage.setItem('tasks', _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_9___default()(tasks));
  localStorage.setItem('priorities', _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_9___default()(priorities));
  pubsub_js__WEBPACK_IMPORTED_MODULE_10___default.a.publish('tasks', tasks);
  pubsub_js__WEBPACK_IMPORTED_MODULE_10___default.a.publish('priorities', priorities);
  return tasks;
}
function removeTaskById(taskId) {
  var tasks = getTasks();
  var priorities = getPriorities();
  var newTasks = tasks.filter(function (task) {
    return task.id !== taskId;
  });
  var newPriorities = priorities.map(function (priority) {
    return _objectSpread({}, priority, {
      ranking: priority.ranking.filter(function (id) {
        return id !== taskId;
      })
    });
  });
  localStorage.setItem('tasks', _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_9___default()(newTasks));
  localStorage.setItem('priorities', _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_9___default()(newPriorities));
  pubsub_js__WEBPACK_IMPORTED_MODULE_10___default.a.publish('tasks', newTasks);
  pubsub_js__WEBPACK_IMPORTED_MODULE_10___default.a.publish('priorities', newPriorities);
}
function addPriorityByName(priorityName) {
  var priorities = getPriorities();
  var tasks = getTasks();
  var priority = {
    id: generateId(),
    name: priorityName,
    ranking: tasks.map(function (task) {
      return task.id;
    })
  };
  priorities.push(priority);
  localStorage.setItem('priorities', _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_9___default()(priorities));
  pubsub_js__WEBPACK_IMPORTED_MODULE_10___default.a.publish('priorities', priorities);
  return priority;
}
function removePriorityById(priorityId) {
  var priorities = getPriorities();
  priorities = priorities.filter(function (p) {
    return p.id !== priorityId;
  });
  localStorage.setItem('priorities', _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_9___default()(priorities));
  pubsub_js__WEBPACK_IMPORTED_MODULE_10___default.a.publish('priorities', priorities);
  return priorities;
}
function moveTaskToRank(taskId, priorityId, position) {
  var priorities = getPriorities();
  var tasks = getTasks();
  var priorityIdx = priorities.findIndex(function (priority) {
    return priority.id === priorityId;
  });
  var priority = priorities[priorityIdx];
  var ranking = priority.ranking.slice();
  var withoutItem = ranking.filter(function (item) {
    return item !== taskId;
  });
  var newRanking = [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_6__["default"])(withoutItem.slice(0, position)), [taskId], Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_6__["default"])(withoutItem.slice(position)));

  var newPriority = _objectSpread({}, priority, {
    ranking: newRanking
  });

  priorities[priorityIdx] = newPriority;
  localStorage.setItem('priorities', _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_9___default()(priorities));
  pubsub_js__WEBPACK_IMPORTED_MODULE_10___default.a.publish('priorities', priorities);
}

/***/ })

})
//# sourceMappingURL=index.js.fcff0acb5d8ba9c94d89.hot-update.js.map