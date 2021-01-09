webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Navbar/NavbarElements.js":
/*!*********************************************!*\
  !*** ./components/Navbar/NavbarElements.js ***!
  \*********************************************/
/*! exports provided: Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Nav\", function() { return Nav; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NavbarContainer\", function() { return NavbarContainer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NavLogo\", function() { return NavLogo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MobileIcon\", function() { return MobileIcon; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NavMenu\", function() { return NavMenu; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NavItem\", function() { return NavItem; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NavLinks\", function() { return NavLinks; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NavBtn\", function() { return NavBtn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NavBtnLink\", function() { return NavBtnLink; });\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nfunction _templateObject9() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    border-radius: 50px;\\n    background: #285DF5;\\n    white-space: nowrap;\\n    padding: 10px 22px;\\n    color: #fff;\\n    font-size: 16px;\\n    outline: none;\\n    border: none;\\n    cursor: pointer;\\n    transition: all 0.2s ease-in-out;\\n    text-decoration: none;\\n\\n    &:hover{\\n        transition: all 0.2s ease-in-out;\\n        background: #fff;\\n        color: #010606;\\n    }\\n\"]);\n\n  _templateObject9 = function _templateObject9() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject8() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    display: flex;\\n    align-items: center;\\n\\n    @media screen and (max-width: 768px){\\n        display: none;\\n    }\\n\"]);\n\n  _templateObject8 = function _templateObject8() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject7() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    color: #fff;\\n    display: flex;\\n    align-items: center;\\n    text-decoration: none;\\n    padding: 0 1rem;\\n    height: 100%;\\n    cursor: pointer;\\n\\n    &.active {\\n        border-bottom: 3px solid #285DF5;\\n    }\\n\"]);\n\n  _templateObject7 = function _templateObject7() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject6() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    height: 80px;\\n\"]);\n\n  _templateObject6 = function _templateObject6() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject5() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    display: flex;\\n    align-items: center;\\n    list-style: none;\\n    list-style: none;\\n    text-align: center;\\n    margin-right: -22px;\\n\\n    @media screen and (max-width: 768px){\\n        display: none;\\n    }\\n\"]);\n\n  _templateObject5 = function _templateObject5() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject4() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    display: none;\\n\\n    @media screen and (max-width: 768px){\\n        display: block;\\n        position: absolute;\\n        top: 0;\\n        right: 0;\\n        transform: translate(-100%, 60%);\\n        font-size: 1.8rem;\\n        cursor: pointer;\\n        color: #fff;\\n    }\\n\"]);\n\n  _templateObject4 = function _templateObject4() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject3() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    color: #fff;\\n    justify-self: flex-start;\\n    cursor: pointer;\\n    font-size: 1.5rem;\\n    display: flex;\\n    align-items: center;\\n    margin-left: 24px;\\n    font-weight: bold;\\n    text-decoration: none;\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    display: flex;\\n    justify-content: space-between;\\n    height: 80px;\\n    z-index: 1;\\n    width: 100%;\\n    padding: 0 24px;\\n    max-width: 1100px;\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    // background : \", \";\\n    background: #000;\\n\\n    width: 1920px;\\n    height: 78.7px;\\n    padding: 13px 258px 5.7px 235.5px;\\n    object-fit: contain;\\n\\n    display: flex;\\n    // justify-content: center;\\n    // align-items: center;\\n    // font-size: 1rem;\\n    // position: sticky;\\n    // top: 0;\\n    // z-index: 10;\\n   \\n    @media screen and (max-width: 960px){\\n        transition: 0.8s all ease;\\n    }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\nvar Nav = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].nav(_templateObject(), function (_ref) {\n  var scrollNav = _ref.scrollNav;\n  return scrollNav ? '#000' : 'transparent';\n});\nvar NavbarContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject2());\nvar NavLogo = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject3());\nvar MobileIcon = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject4());\nvar NavMenu = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].ul(_templateObject5());\nvar NavItem = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].li(_templateObject6());\nvar NavLinks = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject7());\nvar NavBtn = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].nav(_templateObject8());\nvar NavBtnLink = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].button(_templateObject9());\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZiYXIvTmF2YmFyRWxlbWVudHMuanM/ZWM1MSJdLCJuYW1lcyI6WyJOYXYiLCJzdHlsZWQiLCJuYXYiLCJzY3JvbGxOYXYiLCJOYXZiYXJDb250YWluZXIiLCJkaXYiLCJOYXZMb2dvIiwiTW9iaWxlSWNvbiIsIk5hdk1lbnUiLCJ1bCIsIk5hdkl0ZW0iLCJsaSIsIk5hdkxpbmtzIiwiTmF2QnRuIiwiTmF2QnRuTGluayIsImJ1dHRvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVPLElBQU1BLEdBQUcsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVixvQkFDTTtBQUFBLE1BQUdDLFNBQUgsUUFBR0EsU0FBSDtBQUFBLFNBQW9CQSxTQUFTLEdBQUcsTUFBSCxHQUFZLGFBQXpDO0FBQUEsQ0FETixDQUFUO0FBc0JBLElBQU1DLGVBQWUsR0FBR0gseURBQU0sQ0FBQ0ksR0FBVixvQkFBckI7QUFVQSxJQUFNQyxPQUFPLEdBQUdMLHlEQUFNLENBQUNJLEdBQVYsb0JBQWI7QUFZQSxJQUFNRSxVQUFVLEdBQUdOLHlEQUFNLENBQUNJLEdBQVYsb0JBQWhCO0FBZUEsSUFBTUcsT0FBTyxHQUFHUCx5REFBTSxDQUFDUSxFQUFWLG9CQUFiO0FBYUEsSUFBTUMsT0FBTyxHQUFHVCx5REFBTSxDQUFDVSxFQUFWLG9CQUFiO0FBSUEsSUFBTUMsUUFBUSxHQUFHWCx5REFBTSxDQUFDSSxHQUFWLG9CQUFkO0FBY0EsSUFBTVEsTUFBTSxHQUFHWix5REFBTSxDQUFDQyxHQUFWLG9CQUFaO0FBU0EsSUFBTVksVUFBVSxHQUFHYix5REFBTSxDQUFDYyxNQUFWLG9CQUFoQiIsImZpbGUiOiIuL2NvbXBvbmVudHMvTmF2YmFyL05hdmJhckVsZW1lbnRzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuZXhwb3J0IGNvbnN0IE5hdiA9IHN0eWxlZC5uYXZgXG4gICAgLy8gYmFja2dyb3VuZCA6ICR7KHsgc2Nyb2xsTmF2IH0pID0+IChzY3JvbGxOYXYgPyAnIzAwMCcgOiAndHJhbnNwYXJlbnQnKX07XG4gICAgYmFja2dyb3VuZDogIzAwMDtcblxuICAgIHdpZHRoOiAxOTIwcHg7XG4gICAgaGVpZ2h0OiA3OC43cHg7XG4gICAgcGFkZGluZzogMTNweCAyNThweCA1LjdweCAyMzUuNXB4O1xuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC8vIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIC8vIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLy8gZm9udC1zaXplOiAxcmVtO1xuICAgIC8vIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgLy8gdG9wOiAwO1xuICAgIC8vIHotaW5kZXg6IDEwO1xuICAgXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpe1xuICAgICAgICB0cmFuc2l0aW9uOiAwLjhzIGFsbCBlYXNlO1xuICAgIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBOYXZiYXJDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGhlaWdodDogODBweDtcbiAgICB6LWluZGV4OiAxO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDAgMjRweDtcbiAgICBtYXgtd2lkdGg6IDExMDBweDtcbmA7XG5cbmV4cG9ydCBjb25zdCBOYXZMb2dvID0gc3R5bGVkLmRpdmBcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBqdXN0aWZ5LXNlbGY6IGZsZXgtc3RhcnQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogMjRweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5gO1xuXG5leHBvcnQgY29uc3QgTW9iaWxlSWNvbiA9IHN0eWxlZC5kaXZgXG4gICAgZGlzcGxheTogbm9uZTtcblxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KXtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwMCUsIDYwJSk7XG4gICAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgIH1cbmBcblxuZXhwb3J0IGNvbnN0IE5hdk1lbnUgPSBzdHlsZWQudWxgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMjJweDtcblxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KXtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5gXG5cbmV4cG9ydCBjb25zdCBOYXZJdGVtID0gc3R5bGVkLmxpYFxuICAgIGhlaWdodDogODBweDtcbmBcblxuZXhwb3J0IGNvbnN0IE5hdkxpbmtzID0gc3R5bGVkLmRpdmBcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHBhZGRpbmc6IDAgMXJlbTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgJi5hY3RpdmUge1xuICAgICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzI4NURGNTtcbiAgICB9XG5gO1xuXG5leHBvcnQgY29uc3QgTmF2QnRuID0gc3R5bGVkLm5hdmBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCl7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuYFxuXG5leHBvcnQgY29uc3QgTmF2QnRuTGluayA9IHN0eWxlZC5idXR0b25gXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBiYWNrZ3JvdW5kOiAjMjg1REY1O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgcGFkZGluZzogMTBweCAyMnB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXG4gICAgJjpob3ZlcntcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgIGNvbG9yOiAjMDEwNjA2O1xuICAgIH1cbmBcblxuXG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Navbar/NavbarElements.js\n");

/***/ })

})