"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[city]",{

/***/ "./pages/City.js":
/*!***********************!*\
  !*** ./pages/City.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MyCity; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction MyCity(param) {\n    let { id, name, img, des, detail } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col justify-center w-100 h-100 mx-auto mt-4\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"fs-1 text-4xl text-red-500 text-center relative mt-14\",\n                    children: name\n                }, void 0, false, {\n                    fileName: \"/home/web_dev/WebMastersSolutionsLLC/FrontEnd/next-kennels-app/pages/City.js\",\n                    lineNumber: 8,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    className: \"fs-1 text-xl text-sky-900 mx-auto\",\n                    children: des\n                }, void 0, false, {\n                    fileName: \"/home/web_dev/WebMastersSolutionsLLC/FrontEnd/next-kennels-app/pages/City.js\",\n                    lineNumber: 9,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    src: img,\n                    width: 450,\n                    height: 580,\n                    className: \"mx-auto justify-center\",\n                    alt: \"\".concat(name),\n                    quality: 75,\n                    loading: \"eager\"\n                }, void 0, false, {\n                    fileName: \"/home/web_dev/WebMastersSolutionsLLC/FrontEnd/next-kennels-app/pages/City.js\",\n                    lineNumber: 10,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                    className: \"bg-white fs-1 text-xl text-sky-900 mx-auto\",\n                    children: detail\n                }, void 0, false, {\n                    fileName: \"/home/web_dev/WebMastersSolutionsLLC/FrontEnd/next-kennels-app/pages/City.js\",\n                    lineNumber: 19,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, id, true, {\n            fileName: \"/home/web_dev/WebMastersSolutionsLLC/FrontEnd/next-kennels-app/pages/City.js\",\n            lineNumber: 7,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_c = MyCity;\nvar _c;\n$RefreshReg$(_c, \"MyCity\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9DaXR5LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUErQjtBQUdoQixTQUFTQyxPQUFPLEtBQTRCO1FBQTVCLEVBQUNDLEVBQUUsRUFBRUMsSUFBSSxFQUFFQyxHQUFHLEVBQUVDLEdBQUcsRUFBRUMsTUFBTSxFQUFDLEdBQTVCO0lBRTNCLHFCQUFPO2tCQUNDLDRFQUFDQztZQUFhQyxXQUFVOzs4QkFDeEIsOERBQUNDO29CQUFHRCxXQUFVOzhCQUF5REw7Ozs7Ozs4QkFDdkUsOERBQUNPO29CQUFHRixXQUFVOzhCQUFxQ0g7Ozs7Ozs4QkFDbkQsOERBQUNMLG1EQUFLQTtvQkFDTFcsS0FBS1A7b0JBQ0xRLE9BQU87b0JBQ1BDLFFBQVE7b0JBQ1JMLFdBQVU7b0JBQ1ZNLEtBQUssR0FBUSxPQUFMWDtvQkFDUlksU0FBUztvQkFDVEMsU0FBUzs7Ozs7OzhCQUVWLDhEQUFDQztvQkFBR1QsV0FBVTs4QkFBOENGOzs7Ozs7O1dBWmxESjs7Ozs7O0FBZXRCO0tBbEJ3QkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvQ2l0eS5qcz8zY2E4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15Q2l0eSh7aWQsIG5hbWUsIGltZywgZGVzLCBkZXRhaWx9KXtcclxuICAgXHJcbiAgICByZXR1cm4oPD5cclxuICAgICAgICAgICAgPGRpdiBrZXk9e2lkfSBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIHctMTAwIGgtMTAwIG14LWF1dG8gbXQtNFwiPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZnMtMSB0ZXh0LTR4bCB0ZXh0LXJlZC01MDAgdGV4dC1jZW50ZXIgcmVsYXRpdmUgbXQtMTRcIj57bmFtZX08L2gxPlxyXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZnMtMSB0ZXh0LXhsIHRleHQtc2t5LTkwMCBteC1hdXRvXCI+e2Rlc308L2gzPlxyXG4gICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgIHNyYz17aW1nfVxyXG4gICAgICAgICAgICAgd2lkdGg9ezQ1MH1cclxuICAgICAgICAgICAgIGhlaWdodD17NTgwfVxyXG4gICAgICAgICAgICAgY2xhc3NOYW1lPVwibXgtYXV0byBqdXN0aWZ5LWNlbnRlclwiXHJcbiAgICAgICAgICAgICBhbHQ9e2Ake25hbWV9YH1cclxuICAgICAgICAgICAgIHF1YWxpdHk9ezc1fVxyXG4gICAgICAgICAgICAgbG9hZGluZz17XCJlYWdlclwifVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiYmctd2hpdGUgZnMtMSB0ZXh0LXhsIHRleHQtc2t5LTkwMCBteC1hdXRvXCI+e2RldGFpbH08L2g0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvPilcclxufSJdLCJuYW1lcyI6WyJJbWFnZSIsIk15Q2l0eSIsImlkIiwibmFtZSIsImltZyIsImRlcyIsImRldGFpbCIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwiaDMiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsInF1YWxpdHkiLCJsb2FkaW5nIiwiaDQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/City.js\n"));

/***/ })

});