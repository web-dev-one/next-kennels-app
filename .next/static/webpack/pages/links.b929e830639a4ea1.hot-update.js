"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/links",{

/***/ "./components/Links.js":
/*!*****************************!*\
  !*** ./components/Links.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Links; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Links(param) {\n    let { links } = param;\n    const makeSection = (links)=>links.map((s, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-left flex-col justify-left items-center h-8 m-0 bg-purple-400 w-32\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    className: \"text-xl my-0 py-0 mx-2\",\n                    href: s.href,\n                    passHref: true,\n                    scroll: false,\n                    target: \"_blank\",\n                    rel: \"noopener noreferrer\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-red-600\",\n                        children: s.title\n                    }, void 0, false, {\n                        fileName: \"/home/web_dev/WebMastersSolutionsLLC/FrontEnd/next-kennels-app/components/Links.js\",\n                        lineNumber: 15,\n                        columnNumber: 26\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/web_dev/WebMastersSolutionsLLC/FrontEnd/next-kennels-app/components/Links.js\",\n                    lineNumber: 8,\n                    columnNumber: 25\n                }, this)\n            }, i, false, {\n                fileName: \"/home/web_dev/WebMastersSolutionsLLC/FrontEnd/next-kennels-app/components/Links.js\",\n                lineNumber: 7,\n                columnNumber: 27\n            }, this));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"grid grid-col-1 justify-center bg-indigo-400 mt-4 w-32\",\n            children: makeSection(links)\n        }, void 0, false, {\n            fileName: \"/home/web_dev/WebMastersSolutionsLLC/FrontEnd/next-kennels-app/components/Links.js\",\n            lineNumber: 20,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_c = Links;\nvar _c;\n$RefreshReg$(_c, \"Links\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xpbmtzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUE2QjtBQUdkLFNBQVNDLE1BQU0sS0FBTztRQUFQLEVBQUNDLEtBQUssRUFBQyxHQUFQO0lBRTFCLE1BQU1DLGNBQVksQ0FBQ0QsUUFDZkEsTUFBTUUsR0FBRyxDQUFDLENBQUNDLEdBQUVDLGtCQUFLLDhEQUFDQztnQkFBWUMsV0FBVTswQkFDekIsNEVBQUNSLGtEQUFJQTtvQkFDSFEsV0FBVTtvQkFDVkMsTUFBTUosRUFBRUksSUFBSTtvQkFDWkMsVUFBVTtvQkFDVkMsUUFBUTtvQkFDUkMsUUFBTztvQkFDUEMsS0FBSTs4QkFDTCw0RUFBQ0M7d0JBQUdOLFdBQVU7a0NBQWdCSCxFQUFFVSxLQUFLOzs7Ozs7Ozs7OztlQVIxQlQ7Ozs7O0lBWWhDLHFCQUFPO2tCQUNDLDRFQUFDQztZQUFJQyxXQUFVO3NCQUNWTCxZQUFZRDs7Ozs7OztBQUc3QjtLQXBCd0JEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTGlua3MuanM/ZmQ1YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGlua3Moe2xpbmtzfSl7XG4gICAgICAgIFxuICAgIGNvbnN0IG1ha2VTZWN0aW9uPShsaW5rcyk9PiggXG4gICAgICAgIGxpbmtzLm1hcCgocyxpKT0+KDxkaXYga2V5PXtpfSBjbGFzc05hbWU9XCJ0ZXh0LWxlZnQgZmxleC1jb2wganVzdGlmeS1sZWZ0IGl0ZW1zLWNlbnRlciBoLTggbS0wIGJnLXB1cnBsZS00MDAgdy0zMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC14bCBteS0wIHB5LTAgbXgtMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e3MuaHJlZn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGFzc0hyZWY9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbD17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPjxoMSBjbGFzc05hbWU9XCJ0ZXh0LXJlZC02MDBcIj57cy50aXRsZX08L2gxPjwvTGluaz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PilcbiAgICAgICAgKSlcblxuICAgIHJldHVybig8PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29sLTEganVzdGlmeS1jZW50ZXIgYmctaW5kaWdvLTQwMCBtdC00IHctMzJcIj5cbiAgICAgICAgICAgICAgICB7bWFrZVNlY3Rpb24obGlua3MpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC8+KVxufSJdLCJuYW1lcyI6WyJMaW5rIiwiTGlua3MiLCJsaW5rcyIsIm1ha2VTZWN0aW9uIiwibWFwIiwicyIsImkiLCJkaXYiLCJjbGFzc05hbWUiLCJocmVmIiwicGFzc0hyZWYiLCJzY3JvbGwiLCJ0YXJnZXQiLCJyZWwiLCJoMSIsInRpdGxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Links.js\n"));

/***/ })

});