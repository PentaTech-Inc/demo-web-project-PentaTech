module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SearchBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchBar */ "./components/SearchBar.js");
/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Navbar */ "react-bootstrap/Navbar");
/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Nav */ "react-bootstrap/Nav");
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/miguel/Documents/Github/demo-web-project-PentaTech/components/Header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/**
 * Header
 * @summary This component defines our site header (nav bar).
 * Contains site branding, page links, and a search bar.
 */



 // easily apply CSS rules to components in JSON

const linkStyle = {
  marginRight: 15,
  color: 'whitesmoke'
};
/** Component to help clean up links in NavBar 
 * @returns <Nav.Link> component with appropriate contextual data
*/

const NavLink = props => {
  return __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3___default.a.Link, {
    href: props.title === "Home" ? '/' : '/' + props.title.toLowerCase() // if "Home" replace with '/' else return appropriately titled page
    ,
    style: linkStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, props.title);
};

const Header = () => {
  return __jsx(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_2___default.a, {
    bg: "primary",
    expand: "sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
var _jsxFileName = "/Users/miguel/Documents/Github/demo-web-project-PentaTech/components/Layout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/**
 * Layout
 * @summary This component gives basic styling to the structure of the page.
 * Will help keep the site's identity consistent throughout pages.
 * Header will be present in all pages to provide navigation.
 * {props.children} is to display all other components that inside Layout.
 */

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};
/**
 * @param props consists of the components between <Layout> *props* </Layout> tags
 * @returns Layout component with Header and formatted page content
 */

const Layout = props => {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, __jsx(_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }), " ", __jsx("div", {
    style: layoutStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, props.children, " "));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/SearchBar.js":
/*!*********************************!*\
  !*** ./components/SearchBar.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Form */ "react-bootstrap/Form");
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/FormControl */ "react-bootstrap/FormControl");
/* harmony import */ var react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Button */ "react-bootstrap/Button");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/miguel/Documents/Github/demo-web-project-PentaTech/components/SearchBar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/**
 * SearchBar
 * @summary This component is the default search bar used to query for movies or shows.
 */




const SearchBar = props => {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1___default.a, {
    inline: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx(react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_2___default.a, {
    type: "text",
    placeholder: "Search",
    className: " mr-sm-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }), __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3___default.a, {
    type: "submit",
    variant: "light",
    size: "sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, " Submit")));
};

/* harmony default export */ __webpack_exports__["default"] = (SearchBar);

/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Button */ "react-bootstrap/Button");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _screamingsun_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./screamingsun.jpg */ "./pages/screamingsun.jpg");
/* harmony import */ var _screamingsun_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_screamingsun_jpg__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/miguel/Documents/Github/demo-web-project-PentaTech/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/**
 * Index
 * @summary The home page of our website.
 */




 // Miguel image import library



const Home = props => {
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, `Res: ${props.result}`), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }), __jsx(LoadingButton, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, "next-images to add images to webpage "), __jsx("img", {
    src: _screamingsun_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
    alt: "logo",
    id: "logoImage",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  })));
};
/** Component for interactive button */


const LoadingButton = () => {
  const {
    0: isLoading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: isClicked,
    1: setClicked
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: names,
    1: setNames
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (isLoading) {
      checkIn().then(props => {
        setNames(props.result);
        setClicked(true);
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = () => setLoading(true);

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }, __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4___default.a, {
    variant: "primary",
    disabled: isLoading,
    onClick: !isLoading ? handleClick : null,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }, isLoading ? 'Loading…' : 'Check in'), isClicked ? __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }, __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  }), names.map((name, index) => {
    return __jsx("p", {
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: undefined
    }, name, __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: undefined
    }));
  })) : null)
  /* miguel picture */
  ;
}; // ADD YOUR GET ROUTE, YOUR NAME IN PARAM FOR FUNCTION, AND YOUR RESPONSE IN RETURN OBJECT


const checkIn = async () => {
  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.all([axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('http://localhost:5000/check-fabian'), axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('http://localhost:5000/check-miguel'), axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('http://localhost:5000/check-chy')]).then(axios__WEBPACK_IMPORTED_MODULE_3___default.a.spread(function (fabian, miguel, chy) {
    return {
      result: [fabian.data.Success, miguel.data.Success, chy.data.Success]
    };
  })).then().catch(error => {
    console.error(error);
    return {
      result: 'Failed to check in members'
    };
  });
};

Home.getInitialProps = async () => {
  try {
    // call server at endpoint /search-title
    const res = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('http://localhost:5000/ping'); // res.data is the JSON object returned which is { Success: ***data*** }

    return {
      result: res.data.Success
    };
  } catch (error) {
    console.error(error);
    return {
      result: 'Failed to fetch data from server'
    };
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./pages/screamingsun.jpg":
/*!********************************!*\
  !*** ./pages/screamingsun.jpg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/screamingsun-9c8ca7498b8da993c30f05ec794fb46f.jpg";

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/miguel/Documents/Github/demo-web-project-PentaTech/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap/Button":
/*!*****************************************!*\
  !*** external "react-bootstrap/Button" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Button");

/***/ }),

/***/ "react-bootstrap/Form":
/*!***************************************!*\
  !*** external "react-bootstrap/Form" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Form");

/***/ }),

/***/ "react-bootstrap/FormControl":
/*!**********************************************!*\
  !*** external "react-bootstrap/FormControl" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/FormControl");

/***/ }),

/***/ "react-bootstrap/Nav":
/*!**************************************!*\
  !*** external "react-bootstrap/Nav" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Nav");

/***/ }),

/***/ "react-bootstrap/Navbar":
/*!*****************************************!*\
  !*** external "react-bootstrap/Navbar" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Navbar");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map