"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/elite-canine-habitat",{

/***/ "./components/PaymentLinks.jsx":
/*!*************************************!*\
  !*** ./components/PaymentLinks.jsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PaymentLinks; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _FlipTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FlipTitle */ \"./components/FlipTitle.jsx\");\n/* harmony import */ var _DropDown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DropDown */ \"./components/DropDown.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction PaymentLinks() {\n    _s();\n    const [show, setShow] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [size, setSize] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [price, setPrice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1400);\n    const [link, setLink] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    console.log(\"SIZE\", size);\n    const showMyPrice = ()=>{\n        if (size === \"Small\") {\n            setPrice(1400);\n        }\n        if (size === \"Medium\") {\n            setPrice(1700);\n        }\n        if (size === \"Large\") {\n            setPrice(2200);\n        }\n    };\n    const setMyLink = ()=>{\n        if (size === \"Small\") {\n            setLink(\"https://square.link/u/qmPMRRcF?src=embed\");\n        }\n        if (size === \"Medium\") {\n            setLink(\"https://square.link/u/yIhrXS5X\");\n        }\n        if (size === \"Large\") {\n            setLink(\"https://square.link/u/NXZnLkjl\");\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        showMyPrice();\n        setMyLink();\n    });\n    const medPrice = 1700;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container flex-col mx-auto button my-5 h-1/2 mt-10 pt-10 w-2/6 static mobileKennel\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-col price mx-auto static mt-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FlipTitle__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        show: show,\n                        setShow: setShow\n                    }, void 0, false, {\n                        fileName: \"/home/web_dev/WebMastersSolutionsLLC/FrontEnd/next-kennels-app/components/PaymentLinks.jsx\",\n                        lineNumber: 46,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-center text-lg text-gray-700 mt-5 montserrat tsd\",\n                        children: \"Step into the realm of unmatched quality and security with our premium pet kennels, backed by two decades of excellence in craftsmanship.\"\n                    }, void 0, false, {\n                        fileName: \"/home/web_dev/WebMastersSolutionsLLC/FrontEnd/next-kennels-app/components/PaymentLinks.jsx\",\n                        lineNumber: 47,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-center text-lg text-gray-700 mt-3 montserrat tsd\",\n                        children: \"Available in three sizes to accommodate pets of all breeds and sizes, our kennels are designed to meet the diverse needs of your furry family members.\"\n                    }, void 0, false, {\n                        fileName: \"/home/web_dev/WebMastersSolutionsLLC/FrontEnd/next-kennels-app/components/PaymentLinks.jsx\",\n                        lineNumber: 50,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-center text-lg text-gray-700 mt-3 montserrat tsd\",\n                        children: \"Each kennel is constructed with a robust 14-gauge steel frame, meticulously welded and reinforced to withstand the test of time.\"\n                    }, void 0, false, {\n                        fileName: \"/home/web_dev/WebMastersSolutionsLLC/FrontEnd/next-kennels-app/components/PaymentLinks.jsx\",\n                        lineNumber: 53,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-center text-lg text-gray-700 mt-3 montserrat tsd\",\n                        children: \"The walls and roof are adorned with Del Mar panels, offering both durability and aesthetic appeal.\"\n                    }, void 0, false, {\n                        fileName: \"/home/web_dev/WebMastersSolutionsLLC/FrontEnd/next-kennels-app/components/PaymentLinks.jsx\",\n                        lineNumber: 56,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-center text-lg text-gray-700 mt-3 montserrat tsd\",\n                        children: \"And with an assortment of captivating colors to choose from, including Polar White, Hawaiian Blue, Desert Beige, and more, you can customize your pet's sanctuary to reflect your personal style and preferences.\"\n                    }, void 0, false, {\n                        fileName: \"/home/web_dev/WebMastersSolutionsLLC/FrontEnd/next-kennels-app/components/PaymentLinks.jsx\",\n                        lineNumber: 59,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-center text-lg text-gray-700 mt-3 montserrat tsd\",\n                        children: \"Experience the pinnacle of pet protection with our premium kennels—where quality, craftsmanship, and peace of mind converge to create a haven your furry companions will adore.\"\n                    }, void 0, false, {\n                        fileName: \"/home/web_dev/WebMastersSolutionsLLC/FrontEnd/next-kennels-app/components/PaymentLinks.jsx\",\n                        lineNumber: 62,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DropDown__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        setSize: setSize\n                    }, void 0, false, {\n                        fileName: \"/home/web_dev/WebMastersSolutionsLLC/FrontEnd/next-kennels-app/components/PaymentLinks.jsx\",\n                        lineNumber: 65,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"mx-auto montserrat tsd gn\",\n                        children: [\n                            \"$\",\n                            price\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/web_dev/WebMastersSolutionsLLC/FrontEnd/next-kennels-app/components/PaymentLinks.jsx\",\n                        lineNumber: 66,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        className: \"mx-auto rounded\",\n                        src: \"/smallKennel.jpg\",\n                        alt: \"starter kit\",\n                        height: \"300px\",\n                        width: \"400px\"\n                    }, void 0, false, {\n                        fileName: \"/home/web_dev/WebMastersSolutionsLLC/FrontEnd/next-kennels-app/components/PaymentLinks.jsx\",\n                        lineNumber: 67,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        target: \"_blank\",\n                        href: link,\n                        className: \"justify-center mx-auto buy mb-6\",\n                        children: \"Buy now\"\n                    }, void 0, false, {\n                        fileName: \"/home/web_dev/WebMastersSolutionsLLC/FrontEnd/next-kennels-app/components/PaymentLinks.jsx\",\n                        lineNumber: 68,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/web_dev/WebMastersSolutionsLLC/FrontEnd/next-kennels-app/components/PaymentLinks.jsx\",\n                lineNumber: 45,\n                columnNumber: 19\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/web_dev/WebMastersSolutionsLLC/FrontEnd/next-kennels-app/components/PaymentLinks.jsx\",\n            lineNumber: 44,\n            columnNumber: 19\n        }, this)\n    }, void 0, false);\n}\n_s(PaymentLinks, \"1d/KyHEhRRh+/lwny51X/pZOmX8=\");\n_c = PaymentLinks;\nvar _c;\n$RefreshReg$(_c, \"PaymentLinks\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1BheW1lbnRMaW5rcy5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQWdEO0FBQ2I7QUFDRjtBQUNsQixTQUFTSzs7SUFFaEIsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdOLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQ08sTUFBTUMsUUFBUSxHQUFHUiwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLENBQUNTLE9BQU9DLFNBQVMsR0FBR1YsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDVyxNQUFNQyxRQUFRLEdBQUdaLCtDQUFRQSxDQUFDO0lBQ2pDYSxRQUFRQyxHQUFHLENBQUMsUUFBUVA7SUFFcEIsTUFBTVEsY0FBYztRQUNsQixJQUFJUixTQUFTLFNBQVE7WUFDbkJHLFNBQVM7UUFDWDtRQUNBLElBQUlILFNBQVMsVUFBUztZQUNwQkcsU0FBUztRQUNYO1FBQ0EsSUFBSUgsU0FBUyxTQUFRO1lBQ25CRyxTQUFTO1FBQ1g7SUFDRjtJQUVBLE1BQU1NLFlBQVk7UUFDaEIsSUFBSVQsU0FBUyxTQUFRO1lBQ25CSyxRQUFRO1FBQ1Y7UUFDQSxJQUFJTCxTQUFTLFVBQVM7WUFDcEJLLFFBQVE7UUFDVjtRQUNBLElBQUlMLFNBQVMsU0FBUTtZQUNuQkssUUFBUTtRQUNWO0lBQ0Y7SUFFQVgsZ0RBQVNBLENBQUM7UUFDTmM7UUFDQUM7SUFDSjtJQUVBLE1BQU1DLFdBQVc7SUFFakIscUJBQU87a0JBQ0csNEVBQUNDO1lBQUlDLFdBQVU7c0JBQ2YsNEVBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ2pCLGtEQUFTQTt3QkFBQ0csTUFBTUE7d0JBQU1DLFNBQVNBOzs7Ozs7a0NBQ2hDLDhEQUFDYzt3QkFBRUQsV0FBVTtrQ0FBd0Q7Ozs7OztrQ0FHckUsOERBQUNDO3dCQUFFRCxXQUFVO2tDQUF3RDs7Ozs7O2tDQUdyRSw4REFBQ0M7d0JBQUVELFdBQVU7a0NBQXdEOzs7Ozs7a0NBR3JFLDhEQUFDQzt3QkFBRUQsV0FBVTtrQ0FBd0Q7Ozs7OztrQ0FHckUsOERBQUNDO3dCQUFFRCxXQUFVO2tDQUF3RDs7Ozs7O2tDQUdyRSw4REFBQ0M7d0JBQUVELFdBQVU7a0NBQXdEOzs7Ozs7a0NBR3JFLDhEQUFDaEIsaURBQVFBO3dCQUFDSyxTQUFTQTs7Ozs7O2tDQUNuQiw4REFBQ1k7d0JBQUVELFdBQVU7OzRCQUE0Qjs0QkFBRVY7Ozs7Ozs7a0NBQzNDLDhEQUFDWTt3QkFBSUYsV0FBVTt3QkFBa0JHLEtBQUs7d0JBQW9CQyxLQUFJO3dCQUFjQyxRQUFRO3dCQUFTQyxPQUFPOzs7Ozs7a0NBQ3BHLDhEQUFDQzt3QkFBRUMsUUFBTzt3QkFBU0MsTUFBTWpCO3dCQUFNUSxXQUFVO2tDQUFrQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSS9GO0dBcEV3QmY7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYXltZW50TGlua3MuanN4PzdiNTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBGbGlwVGl0bGUgZnJvbSAnLi9GbGlwVGl0bGUnXG5pbXBvcnQgRHJvcERvd24gZnJvbSAnLi9Ecm9wRG93bidcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBheW1lbnRMaW5rcygpe1xuXG4gICAgICAgIGNvbnN0IFtzaG93LCBzZXRTaG93XSA9IHVzZVN0YXRlKHRydWUpO1xuICAgICAgICBjb25zdCBbc2l6ZSwgc2V0U2l6ZV0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgICAgIGNvbnN0IFtwcmljZSwgc2V0UHJpY2VdID0gdXNlU3RhdGUoMTQwMCk7XG4gICAgICAgIGNvbnN0IFtsaW5rLCBzZXRMaW5rXSA9IHVzZVN0YXRlKCcnKVxuICAgICAgICBjb25zb2xlLmxvZyhcIlNJWkVcIiwgc2l6ZSlcblxuICAgICAgICBjb25zdCBzaG93TXlQcmljZSA9ICgpID0+e1xuICAgICAgICAgIGlmIChzaXplID09PSAnU21hbGwnKXtcbiAgICAgICAgICAgIHNldFByaWNlKDE0MDApXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChzaXplID09PSAnTWVkaXVtJyl7XG4gICAgICAgICAgICBzZXRQcmljZSgxNzAwKVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoc2l6ZSA9PT0gJ0xhcmdlJyl7XG4gICAgICAgICAgICBzZXRQcmljZSgyMjAwKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHNldE15TGluayA9ICgpID0+e1xuICAgICAgICAgIGlmIChzaXplID09PSAnU21hbGwnKXtcbiAgICAgICAgICAgIHNldExpbmsoXCJodHRwczovL3NxdWFyZS5saW5rL3UvcW1QTVJSY0Y/c3JjPWVtYmVkXCIpXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChzaXplID09PSAnTWVkaXVtJyl7XG4gICAgICAgICAgICBzZXRMaW5rKFwiaHR0cHM6Ly9zcXVhcmUubGluay91L3lJaHJYUzVYXCIpXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChzaXplID09PSAnTGFyZ2UnKXtcbiAgICAgICAgICAgIHNldExpbmsoXCJodHRwczovL3NxdWFyZS5saW5rL3UvTlhabkxramxcIilcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB1c2VFZmZlY3QoKCk9PntcbiAgICAgICAgICAgIHNob3dNeVByaWNlKClcbiAgICAgICAgICAgIHNldE15TGluaygpXG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgICAgICBjb25zdCBtZWRQcmljZSA9IDE3MDBcblxuICAgICAgICByZXR1cm4oPD5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGZsZXgtY29sIG14LWF1dG8gYnV0dG9uIG15LTUgaC0xLzIgbXQtMTAgcHQtMTAgdy0yLzYgc3RhdGljIG1vYmlsZUtlbm5lbFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgtY29sIHByaWNlIG14LWF1dG8gc3RhdGljIG10LTEwJz5cbiAgICAgICAgICAgICAgICAgICAgPEZsaXBUaXRsZSBzaG93PXtzaG93fSBzZXRTaG93PXtzZXRTaG93fSAvPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LWxnIHRleHQtZ3JheS03MDAgbXQtNSBtb250c2VycmF0IHRzZFwiPlxuICAgICAgICAgICAgICAgICAgICAgU3RlcCBpbnRvIHRoZSByZWFsbSBvZiB1bm1hdGNoZWQgcXVhbGl0eSBhbmQgc2VjdXJpdHkgd2l0aCBvdXIgcHJlbWl1bSBwZXQga2VubmVscywgYmFja2VkIGJ5IHR3byBkZWNhZGVzIG9mIGV4Y2VsbGVuY2UgaW4gY3JhZnRzbWFuc2hpcC5cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LWxnIHRleHQtZ3JheS03MDAgbXQtMyBtb250c2VycmF0IHRzZFwiPlxuICAgICAgICAgICAgICAgICAgICAgQXZhaWxhYmxlIGluIHRocmVlIHNpemVzIHRvIGFjY29tbW9kYXRlIHBldHMgb2YgYWxsIGJyZWVkcyBhbmQgc2l6ZXMsIG91ciBrZW5uZWxzIGFyZSBkZXNpZ25lZCB0byBtZWV0IHRoZSBkaXZlcnNlIG5lZWRzIG9mIHlvdXIgZnVycnkgZmFtaWx5IG1lbWJlcnMuXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC1sZyB0ZXh0LWdyYXktNzAwIG10LTMgbW9udHNlcnJhdCB0c2RcIj5cbiAgICAgICAgICAgICAgICAgICAgIEVhY2gga2VubmVsIGlzIGNvbnN0cnVjdGVkIHdpdGggYSByb2J1c3QgMTQtZ2F1Z2Ugc3RlZWwgZnJhbWUsIG1ldGljdWxvdXNseSB3ZWxkZWQgYW5kIHJlaW5mb3JjZWQgdG8gd2l0aHN0YW5kIHRoZSB0ZXN0IG9mIHRpbWUuXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC1sZyB0ZXh0LWdyYXktNzAwIG10LTMgbW9udHNlcnJhdCB0c2RcIj5cbiAgICAgICAgICAgICAgICAgICAgIFRoZSB3YWxscyBhbmQgcm9vZiBhcmUgYWRvcm5lZCB3aXRoIERlbCBNYXIgcGFuZWxzLCBvZmZlcmluZyBib3RoIGR1cmFiaWxpdHkgYW5kIGFlc3RoZXRpYyBhcHBlYWwuXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC1sZyB0ZXh0LWdyYXktNzAwIG10LTMgbW9udHNlcnJhdCB0c2RcIj5cbiAgICAgICAgICAgICAgICAgICAgIEFuZCB3aXRoIGFuIGFzc29ydG1lbnQgb2YgY2FwdGl2YXRpbmcgY29sb3JzIHRvIGNob29zZSBmcm9tLCBpbmNsdWRpbmcgUG9sYXIgV2hpdGUsIEhhd2FpaWFuIEJsdWUsIERlc2VydCBCZWlnZSwgYW5kIG1vcmUsIHlvdSBjYW4gY3VzdG9taXplIHlvdXIgcGV0J3Mgc2FuY3R1YXJ5IHRvIHJlZmxlY3QgeW91ciBwZXJzb25hbCBzdHlsZSBhbmQgcHJlZmVyZW5jZXMuXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC1sZyB0ZXh0LWdyYXktNzAwIG10LTMgbW9udHNlcnJhdCB0c2RcIj5cbiAgICAgICAgICAgICAgICAgICAgIEV4cGVyaWVuY2UgdGhlIHBpbm5hY2xlIG9mIHBldCBwcm90ZWN0aW9uIHdpdGggb3VyIHByZW1pdW0ga2VubmVsc+KAlHdoZXJlIHF1YWxpdHksIGNyYWZ0c21hbnNoaXAsIGFuZCBwZWFjZSBvZiBtaW5kIGNvbnZlcmdlIHRvIGNyZWF0ZSBhIGhhdmVuIHlvdXIgZnVycnkgY29tcGFuaW9ucyB3aWxsIGFkb3JlLlxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxEcm9wRG93biBzZXRTaXplPXtzZXRTaXplfS8+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nbXgtYXV0byBtb250c2VycmF0IHRzZCBnbic+JHtwcmljZX08L3A+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibXgtYXV0byByb3VuZGVkXCIgc3JjPXsnL3NtYWxsS2VubmVsLmpwZyd9IGFsdD1cInN0YXJ0ZXIga2l0XCIgaGVpZ2h0PXtcIjMwMHB4XCJ9IHdpZHRoPXtcIjQwMHB4XCJ9Lz5cbiAgICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj17bGlua30gY2xhc3NOYW1lPVwianVzdGlmeS1jZW50ZXIgbXgtYXV0byBidXkgbWItNlwiPkJ1eSBub3c8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgIDwvPilcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkZsaXBUaXRsZSIsIkRyb3BEb3duIiwiUGF5bWVudExpbmtzIiwic2hvdyIsInNldFNob3ciLCJzaXplIiwic2V0U2l6ZSIsInByaWNlIiwic2V0UHJpY2UiLCJsaW5rIiwic2V0TGluayIsImNvbnNvbGUiLCJsb2ciLCJzaG93TXlQcmljZSIsInNldE15TGluayIsIm1lZFByaWNlIiwiZGl2IiwiY2xhc3NOYW1lIiwicCIsImltZyIsInNyYyIsImFsdCIsImhlaWdodCIsIndpZHRoIiwiYSIsInRhcmdldCIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/PaymentLinks.jsx\n"));

/***/ })

});