webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/Button.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "/Users/fabian/Documents/GitHub/demo-web-project-PentaTech/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

/**
 * Index
 * @summary The home page of our website.
 */






var Home = function Home(props) {
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Res: ".concat(props.result)), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), __jsx(LoadingButton, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), __jsx("img", {
    src: props.qr,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }));
};
/** Component for interactive button */


var LoadingButton = function LoadingButton() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      isLoading = _useState[0],
      setLoading = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      isClicked = _useState2[0],
      setClicked = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      names = _useState3[0],
      setNames = _useState3[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (isLoading) {
      checkIn().then(function (props) {
        setNames(props.result);
        setClicked(true);
        setLoading(false);
      });
    }
  }, [isLoading]);

  var handleClick = function handleClick() {
    return setLoading(true);
  };

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6___default.a, {
    variant: "primary",
    disabled: isLoading,
    onClick: !isLoading ? handleClick : null,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, isLoading ? 'Loading…' : 'Check in'), isClicked ? __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }), names.map(function (name, index) {
    return __jsx("p", {
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, name, __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }));
  })) : null);
}; // ADD YOUR GET ROUTE, YOUR NAME IN PARAM FOR FUNCTION, AND YOUR RESPONSE IN RETURN OBJECT


var checkIn =
/*#__PURE__*/
function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", axios__WEBPACK_IMPORTED_MODULE_5___default.a.all([axios__WEBPACK_IMPORTED_MODULE_5___default.a.get('http://localhost:5000/check-fabian'), axios__WEBPACK_IMPORTED_MODULE_5___default.a.get('http://localhost:5000/check-miguel'), axios__WEBPACK_IMPORTED_MODULE_5___default.a.get('http://localhost:5000/check-chy')]).then(axios__WEBPACK_IMPORTED_MODULE_5___default.a.spread(function (fabian, miguel, chy) {
              return {
                result: [fabian.data.Success, miguel.data.Success, chy.data.Success]
              };
            })).then()["catch"](function (error) {
              console.error(error);
              return {
                result: 'Failed to check in members'
              };
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function checkIn() {
    return _ref.apply(this, arguments);
  };
}();

Home.getInitialProps =
/*#__PURE__*/
Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
  var res, res1;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return axios__WEBPACK_IMPORTED_MODULE_5___default.a.get('http://localhost:5000/ping');

        case 3:
          res = _context2.sent;
          _context2.next = 6;
          return axios__WEBPACK_IMPORTED_MODULE_5___default.a.get('http://localhost:5000/qrcode');

        case 6:
          res1 = _context2.sent;
          return _context2.abrupt("return", {
            result: res.data.Success,
            qr: res1
          });

        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2["catch"](0);
          console.error(_context2.t0);
          return _context2.abrupt("return", {
            result: 'Failed to fetch data from server'
          });

        case 14:
        case "end":
          return _context2.stop();
      }
    }
  }, _callee2, null, [[0, 10]]);
}));
/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.35c164a69a57b4483f65.hot-update.js.map