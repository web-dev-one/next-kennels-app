"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/ECH",{

/***/ "./components/Cart/ColorPicker.js":
/*!****************************************!*\
  !*** ./components/Cart/ColorPicker.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ColorPicker_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ColorPicker.module.css */ \"./components/Cart/ColorPicker.module.css\");\n/* harmony import */ var _ColorPicker_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ColorPicker_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n // Import CSS module\nconst ColorPicker = (param)=>{\n    let { handleColorSelect, selectedColor, he } = param;\n    const colors = [\n        {\n            name: \"Polar White\",\n            hex: \"#E8E8EF\"\n        },\n        {\n            name: \"Hawiian Blue\",\n            hex: \"#012169\"\n        },\n        {\n            name: \"Desert Beige\",\n            hex: \"#E6D3B7\"\n        },\n        {\n            name: \"Sahara Tan\",\n            hex: \"#B69D85\"\n        },\n        {\n            name: \"Light Stone\",\n            hex: \"#ddd8d6\"\n        },\n        {\n            name: \"Ash Grey\",\n            hex: \"#b2beb5\"\n        },\n        {\n            name: \"Koko Brown\",\n            hex: \"#665049\"\n        },\n        {\n            name: \"Emerald Green\",\n            hex: \"#50C878\"\n        },\n        {\n            name: \"Charcoal\",\n            hex: \"#36454f\"\n        },\n        {\n            name: \"Country Red\",\n            hex: \"#ff4500\"\n        },\n        {\n            name: \"Copper Penny\",\n            hex: \"#ad6f69\"\n        },\n        {\n            name: \"Black\",\n            hex: \"#000000\"\n        }\n    ];\n    debugger;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        className: \"flex-col\",\n        children: [\n            \"choose color\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_ColorPicker_module_css__WEBPACK_IMPORTED_MODULE_2___default().colorPicker),\n                children: colors.map((color, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: (_ColorPicker_module_css__WEBPACK_IMPORTED_MODULE_2___default().colorOption),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"radio\",\n                                name: \"color\",\n                                value: color.name,\n                                checked: selectedColor === color.name,\n                                onChange: (e)=>handleColorSelect({\n                                        event: e,\n                                        color: color.name,\n                                        hex: color.hex\n                                    })\n                            }, void 0, false, {\n                                fileName: \"/home/web_dev/WebMastersSolutionsLLC/FrontEnd/next-kennels-app/components/Cart/ColorPicker.js\",\n                                lineNumber: 28,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                style: {\n                                    backgroundColor: color.hex\n                                },\n                                className: (_ColorPicker_module_css__WEBPACK_IMPORTED_MODULE_2___default().colorBox),\n                                alt: color.name\n                            }, void 0, false, {\n                                fileName: \"/home/web_dev/WebMastersSolutionsLLC/FrontEnd/next-kennels-app/components/Cart/ColorPicker.js\",\n                                lineNumber: 35,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, index, true, {\n                        fileName: \"/home/web_dev/WebMastersSolutionsLLC/FrontEnd/next-kennels-app/components/Cart/ColorPicker.js\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/home/web_dev/WebMastersSolutionsLLC/FrontEnd/next-kennels-app/components/Cart/ColorPicker.js\",\n                lineNumber: 25,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/web_dev/WebMastersSolutionsLLC/FrontEnd/next-kennels-app/components/Cart/ColorPicker.js\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, undefined);\n};\n_c = ColorPicker;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ColorPicker);\nvar _c;\n$RefreshReg$(_c, \"ColorPicker\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NhcnQvQ29sb3JQaWNrZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBd0M7QUFDTSxDQUFDLG9CQUFvQjtBQUVuRSxNQUFNRyxjQUFjO1FBQUMsRUFBQ0MsaUJBQWlCLEVBQUVDLGFBQWEsRUFBRUMsRUFBRSxFQUFDO0lBRXpELE1BQU1DLFNBQVM7UUFDYjtZQUFFQyxNQUFNO1lBQWVDLEtBQUs7UUFBVTtRQUN0QztZQUFFRCxNQUFNO1lBQWdCQyxLQUFLO1FBQVU7UUFDdkM7WUFBRUQsTUFBTTtZQUFnQkMsS0FBSztRQUFVO1FBQ3ZDO1lBQUVELE1BQU07WUFBY0MsS0FBSztRQUFVO1FBQ3JDO1lBQUVELE1BQU07WUFBZUMsS0FBSztRQUFVO1FBQ3RDO1lBQUVELE1BQU07WUFBWUMsS0FBSztRQUFVO1FBQ25DO1lBQUVELE1BQU07WUFBY0MsS0FBSztRQUFVO1FBQ3JDO1lBQUVELE1BQU07WUFBaUJDLEtBQUs7UUFBVTtRQUN4QztZQUFFRCxNQUFNO1lBQVlDLEtBQUs7UUFBVTtRQUNuQztZQUFFRCxNQUFNO1lBQWVDLEtBQUs7UUFBVTtRQUN0QztZQUFFRCxNQUFNO1lBQWdCQyxLQUFLO1FBQVU7UUFDdkM7WUFBRUQsTUFBTTtZQUFTQyxLQUFLO1FBQVM7S0FDaEM7SUFHRCxRQUFRO0lBQ1IscUJBQ0UsOERBQUNDO1FBQUtDLFdBQVU7O1lBQVc7MEJBQzNCLDhEQUFDQztnQkFBSUQsV0FBV1QsNEVBQWtCOzBCQUMvQkssT0FBT08sR0FBRyxDQUFDLENBQUNDLE9BQU9DLHNCQUNsQiw4REFBQ0M7d0JBQWtCTixXQUFXVCw0RUFBa0I7OzBDQUM5Qyw4REFBQ2lCO2dDQUNDQyxNQUFLO2dDQUNMWixNQUFLO2dDQUNMYSxPQUFPTixNQUFNUCxJQUFJO2dDQUNqQmMsU0FBU2pCLGtCQUFrQlUsTUFBTVAsSUFBSTtnQ0FDckNlLFVBQVUsQ0FBQ0MsSUFBTXBCLGtCQUFrQjt3Q0FBQ3FCLE9BQU9EO3dDQUFHVCxPQUFPQSxNQUFNUCxJQUFJO3dDQUFFQyxLQUFLTSxNQUFNTixHQUFHO29DQUFBOzs7Ozs7MENBRWpGLDhEQUFDQztnQ0FDQ2dCLE9BQU87b0NBQUVDLGlCQUFpQlosTUFBTU4sR0FBRztnQ0FBQztnQ0FDcENFLFdBQVdULHlFQUFlO2dDQUMxQjJCLEtBQUtkLE1BQU1QLElBQUk7Ozs7Ozs7dUJBWFBROzs7Ozs7Ozs7Ozs7Ozs7O0FBa0JwQjtLQXpDTWI7QUEyQ04sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJ0L0NvbG9yUGlja2VyLmpzPzFiNmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0NvbG9yUGlja2VyLm1vZHVsZS5jc3MnOyAvLyBJbXBvcnQgQ1NTIG1vZHVsZVxuXG5jb25zdCBDb2xvclBpY2tlciA9ICh7aGFuZGxlQ29sb3JTZWxlY3QsIHNlbGVjdGVkQ29sb3IsIGhlfSkgPT4ge1xuXG4gIGNvbnN0IGNvbG9ycyA9IFtcbiAgICB7IG5hbWU6ICdQb2xhciBXaGl0ZScsIGhleDogJyNFOEU4RUYnIH0sXG4gICAgeyBuYW1lOiAnSGF3aWlhbiBCbHVlJywgaGV4OiAnIzAxMjE2OScgfSxcbiAgICB7IG5hbWU6ICdEZXNlcnQgQmVpZ2UnLCBoZXg6ICcjRTZEM0I3JyB9LFxuICAgIHsgbmFtZTogJ1NhaGFyYSBUYW4nLCBoZXg6ICcjQjY5RDg1JyB9LFxuICAgIHsgbmFtZTogJ0xpZ2h0IFN0b25lJywgaGV4OiAnI2RkZDhkNicgfSxcbiAgICB7IG5hbWU6ICdBc2ggR3JleScsIGhleDogJyNiMmJlYjUnIH0sXG4gICAgeyBuYW1lOiAnS29rbyBCcm93bicsIGhleDogJyM2NjUwNDknIH0sXG4gICAgeyBuYW1lOiAnRW1lcmFsZCBHcmVlbicsIGhleDogJyM1MEM4NzgnIH0sXG4gICAgeyBuYW1lOiAnQ2hhcmNvYWwnLCBoZXg6ICcjMzY0NTRmJyB9LFxuICAgIHsgbmFtZTogJ0NvdW50cnkgUmVkJywgaGV4OiAnI2ZmNDUwMCcgfSxcbiAgICB7IG5hbWU6ICdDb3BwZXIgUGVubnknLCBoZXg6ICcjYWQ2ZjY5JyB9LFxuICAgIHsgbmFtZTogJ0JsYWNrJywgaGV4OiAnIzAwMDAwMCd9XG4gIF07XG5cbiAgXG4gIGRlYnVnZ2VyXG4gIHJldHVybiAoXG4gICAgPHNwYW4gY2xhc3NOYW1lPSdmbGV4LWNvbCc+Y2hvb3NlIGNvbG9yXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb2xvclBpY2tlcn0+XG4gICAgICB7Y29sb3JzLm1hcCgoY29sb3IsIGluZGV4KSA9PiAoXG4gICAgICAgIDxsYWJlbCBrZXk9e2luZGV4fSBjbGFzc05hbWU9e3N0eWxlcy5jb2xvck9wdGlvbn0+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgbmFtZT1cImNvbG9yXCJcbiAgICAgICAgICAgIHZhbHVlPXtjb2xvci5uYW1lfVxuICAgICAgICAgICAgY2hlY2tlZD17c2VsZWN0ZWRDb2xvciA9PT0gY29sb3IubmFtZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ29sb3JTZWxlY3Qoe2V2ZW50OiBlLCBjb2xvcjogY29sb3IubmFtZSwgaGV4OiBjb2xvci5oZXh9KX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yLmhleCB9fVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY29sb3JCb3h9XG4gICAgICAgICAgICBhbHQ9e2NvbG9yLm5hbWV9IC8vIEFsdCB0YWcgYWRkZWQgd2l0aCBjb2xvciBuYW1lXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICAgIDwvc3Bhbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbG9yUGlja2VyO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJzdHlsZXMiLCJDb2xvclBpY2tlciIsImhhbmRsZUNvbG9yU2VsZWN0Iiwic2VsZWN0ZWRDb2xvciIsImhlIiwiY29sb3JzIiwibmFtZSIsImhleCIsInNwYW4iLCJjbGFzc05hbWUiLCJkaXYiLCJjb2xvclBpY2tlciIsIm1hcCIsImNvbG9yIiwiaW5kZXgiLCJsYWJlbCIsImNvbG9yT3B0aW9uIiwiaW5wdXQiLCJ0eXBlIiwidmFsdWUiLCJjaGVja2VkIiwib25DaGFuZ2UiLCJlIiwiZXZlbnQiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsImNvbG9yQm94IiwiYWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Cart/ColorPicker.js\n"));

/***/ })

});