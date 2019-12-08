webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/PrioritySelect.js":
/*!**************************************!*\
  !*** ./components/PrioritySelect.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.browser.esm.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _mock_api_models__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../mock_api/models */ "./mock_api/models.js");







var _jsxFileName = "/Users/jackkwan/Projects/priorities/components/PrioritySelect.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(source).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }




 // react-select has its own preferred way for styling.

var customStyles = {
  control: function control(base, state) {
    return _objectSpread({}, base, {
      background: "#f0bb39",
      border: state.isFocused ? 0 : 0,
      // This line disable the blue border
      boxShadow: state.isFocused ? 0 : 0,
      '&:hover': {
        border: state.isFocused ? 0 : 0
      },
      height: '54px',
      'minHeight': '54px',
      'borderRadius': '0px',
      fontFamily: "Arial",
      fontSize: '20px',
      'fontWeight': 700,
      flex: 1
    });
  },
  singleValue: function singleValue(provided, state) {
    return _objectSpread({}, provided, {
      fontWeight: 900,
      color: 'black'
    });
  }
};

var selectStyle = __jsx("style", {
  jsx: "true",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  },
  __self: undefined
}, "\n.select-wrapper {\n  position: absolute;\n  display: flex;\n  flex-direction: row;\n  width: 100vw;\n  height: 100px;\n  right: 0;\n  top: 80px;\n  align-items: center;\n}\n\n.select { flex: 1 }\n\n.select-label {\n  display: flex;\n  height: 54px;\n  width: 100px;\n  padding: 0px;\n  margin: 0px;\n  background-color: #6d695f;\n  font-size: 20px;\n  font-weight: 700;\n  align-items: center;\n  justify-content: center;\n}\n\n.remove-priority:hover { color: red; }\n\n.option-container {\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n}\n\n.react-select__single-value .priority-option {\n  visibility: hidden;\n}\n");

var PrioritySelect = function PrioritySelect(props) {
  var priorities = props.priorities,
      pickedPriorityId = props.pickedPriorityId,
      setPickedPriorityId = props.setPickedPriorityId;
  var options = priorities.map(function (priority) {
    return {
      value: priority.id,
      label: priority.name
    };
  });
  var picked = options.find(function (option) {
    return option.value === pickedPriorityId;
  }) || null;

  var formatOptionLabel = function formatOptionLabel(_ref) {
    var value = _ref.value,
        label = _ref.label,
        customAbbreviation = _ref.customAbbreviation;
    return __jsx("div", {
      className: "option-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, label), __jsx("div", {
      className: "priority-option",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, customAbbreviation, __jsx("div", {
      className: "remove-priority",
      onClick: function onClick(e) {
        e.stopPropagation();
        var newPriorities = Object(_mock_api_models__WEBPACK_IMPORTED_MODULE_11__["removePriorityById"])(value);

        if (newPriorities.length === 0) {
          return setPickedPriorityId(null);
        }

        if (newPriorities.findIndex(function (p) {
          return p.id === pickedPriorityId;
        }) === -1) {
          setPickedPriorityId(newPriorities[0].id);
        }
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, " ", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faTrash"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }), " ")));
  };

  return __jsx("div", {
    className: "select-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, __jsx("div", {
    className: "select-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, " Sort by: "), __jsx(react_select__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: "select",
    instanceId: "selectPriority",
    classNamePrefix: "react-select",
    value: picked,
    onChange: function onChange(selected) {
      return setPickedPriorityId(selected.value);
    },
    formatOptionLabel: formatOptionLabel,
    options: options,
    components: {
      IndicatorSeparator: function IndicatorSeparator() {
        return null;
      }
    },
    styles: customStyles,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }), selectStyle);
};

/* harmony default export */ __webpack_exports__["default"] = (PrioritySelect);

/***/ })

})
//# sourceMappingURL=index.js.e600c217c59ff3c9666c.hot-update.js.map