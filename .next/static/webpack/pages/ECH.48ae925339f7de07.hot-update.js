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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ColorPicker_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ColorPicker.module.css */ \"./components/Cart/ColorPicker.module.css\");\n/* harmony import */ var _ColorPicker_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ColorPicker_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n // Import CSS module\nconst ColorPicker = (param)=>{\n    let { handleColorSelect, selectedColor, hexColor } = param;\n    const colors = [\n        {\n            name: \"Polar White\",\n            hex: \"#E8E8EF\"\n        },\n        {\n            name: \"Hawiian Blue\",\n            hex: \"#012169\"\n        },\n        {\n            name: \"Desert Beige\",\n            hex: \"#E6D3B7\"\n        },\n        {\n            name: \"Sahara Tan\",\n            hex: \"#B69D85\"\n        },\n        {\n            name: \"Light Stone\",\n            hex: \"#ddd8d6\"\n        },\n        {\n            name: \"Ash Grey\",\n            hex: \"#b2beb5\"\n        },\n        {\n            name: \"Koko Brown\",\n            hex: \"#665049\"\n        },\n        {\n            name: \"Emerald Green\",\n            hex: \"#50C878\"\n        },\n        {\n            name: \"Charcoal\",\n            hex: \"#36454f\"\n        },\n        {\n            name: \"Country Red\",\n            hex: \"#ff4500\"\n        },\n        {\n            name: \"Copper Penny\",\n            hex: \"#ad6f69\"\n        },\n        {\n            name: \"Black\",\n            hex: \"#000000\"\n        }\n    ];\n    debugger;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        className: \"h-2/5 flex-col\",\n        children: [\n            \"choose color\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_ColorPicker_module_css__WEBPACK_IMPORTED_MODULE_2___default().colorPicker),\n                children: colors.map((color, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: (_ColorPicker_module_css__WEBPACK_IMPORTED_MODULE_2___default().colorOption),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"radio\",\n                                name: \"color\",\n                                value: color.name,\n                                checked: selectedColor === color.name,\n                                onChange: (e)=>handleColorSelect({\n                                        event: e,\n                                        color: color.name,\n                                        hex: color.hex\n                                    })\n                            }, void 0, false, {\n                                fileName: \"/home/web_dev/WebMastersSolutionsLLC/FrontEnd/next-kennels-app/components/Cart/ColorPicker.js\",\n                                lineNumber: 28,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                style: {\n                                    backgroundColor: color.hex\n                                },\n                                className: (_ColorPicker_module_css__WEBPACK_IMPORTED_MODULE_2___default().colorBox),\n                                alt: color.name\n                            }, void 0, false, {\n                                fileName: \"/home/web_dev/WebMastersSolutionsLLC/FrontEnd/next-kennels-app/components/Cart/ColorPicker.js\",\n                                lineNumber: 35,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, index, true, {\n                        fileName: \"/home/web_dev/WebMastersSolutionsLLC/FrontEnd/next-kennels-app/components/Cart/ColorPicker.js\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/home/web_dev/WebMastersSolutionsLLC/FrontEnd/next-kennels-app/components/Cart/ColorPicker.js\",\n                lineNumber: 25,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/web_dev/WebMastersSolutionsLLC/FrontEnd/next-kennels-app/components/Cart/ColorPicker.js\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, undefined);\n};\n_c = ColorPicker;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ColorPicker);\nvar _c;\n$RefreshReg$(_c, \"ColorPicker\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NhcnQvQ29sb3JQaWNrZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBd0M7QUFDTSxDQUFDLG9CQUFvQjtBQUVuRSxNQUFNRyxjQUFjO1FBQUMsRUFBQ0MsaUJBQWlCLEVBQUVDLGFBQWEsRUFBRUMsUUFBUSxFQUFDO0lBRS9ELE1BQU1DLFNBQVM7UUFDYjtZQUFFQyxNQUFNO1lBQWVDLEtBQUs7UUFBVTtRQUN0QztZQUFFRCxNQUFNO1lBQWdCQyxLQUFLO1FBQVU7UUFDdkM7WUFBRUQsTUFBTTtZQUFnQkMsS0FBSztRQUFVO1FBQ3ZDO1lBQUVELE1BQU07WUFBY0MsS0FBSztRQUFVO1FBQ3JDO1lBQUVELE1BQU07WUFBZUMsS0FBSztRQUFVO1FBQ3RDO1lBQUVELE1BQU07WUFBWUMsS0FBSztRQUFVO1FBQ25DO1lBQUVELE1BQU07WUFBY0MsS0FBSztRQUFVO1FBQ3JDO1lBQUVELE1BQU07WUFBaUJDLEtBQUs7UUFBVTtRQUN4QztZQUFFRCxNQUFNO1lBQVlDLEtBQUs7UUFBVTtRQUNuQztZQUFFRCxNQUFNO1lBQWVDLEtBQUs7UUFBVTtRQUN0QztZQUFFRCxNQUFNO1lBQWdCQyxLQUFLO1FBQVU7UUFDdkM7WUFBRUQsTUFBTTtZQUFTQyxLQUFLO1FBQVM7S0FDaEM7SUFHRCxRQUFRO0lBQ1IscUJBQ0UsOERBQUNDO1FBQUtDLFdBQVU7O1lBQWlCOzBCQUNqQyw4REFBQ0M7Z0JBQUlELFdBQVdULDRFQUFrQjswQkFDL0JLLE9BQU9PLEdBQUcsQ0FBQyxDQUFDQyxPQUFPQyxzQkFDbEIsOERBQUNDO3dCQUFrQk4sV0FBV1QsNEVBQWtCOzswQ0FDOUMsOERBQUNpQjtnQ0FDQ0MsTUFBSztnQ0FDTFosTUFBSztnQ0FDTGEsT0FBT04sTUFBTVAsSUFBSTtnQ0FDakJjLFNBQVNqQixrQkFBa0JVLE1BQU1QLElBQUk7Z0NBQ3JDZSxVQUFVLENBQUNDLElBQU1wQixrQkFBa0I7d0NBQUNxQixPQUFPRDt3Q0FBR1QsT0FBT0EsTUFBTVAsSUFBSTt3Q0FBRUMsS0FBS00sTUFBTU4sR0FBRztvQ0FBQTs7Ozs7OzBDQUVqRiw4REFBQ0M7Z0NBQ0NnQixPQUFPO29DQUFFQyxpQkFBaUJaLE1BQU1OLEdBQUc7Z0NBQUM7Z0NBQ3BDRSxXQUFXVCx5RUFBZTtnQ0FDMUIyQixLQUFLZCxNQUFNUCxJQUFJOzs7Ozs7O3VCQVhQUTs7Ozs7Ozs7Ozs7Ozs7OztBQWtCcEI7S0F6Q01iO0FBMkNOLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ2FydC9Db2xvclBpY2tlci5qcz8xYjZjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Db2xvclBpY2tlci5tb2R1bGUuY3NzJzsgLy8gSW1wb3J0IENTUyBtb2R1bGVcblxuY29uc3QgQ29sb3JQaWNrZXIgPSAoe2hhbmRsZUNvbG9yU2VsZWN0LCBzZWxlY3RlZENvbG9yLCBoZXhDb2xvcn0pID0+IHtcblxuICBjb25zdCBjb2xvcnMgPSBbXG4gICAgeyBuYW1lOiAnUG9sYXIgV2hpdGUnLCBoZXg6ICcjRThFOEVGJyB9LFxuICAgIHsgbmFtZTogJ0hhd2lpYW4gQmx1ZScsIGhleDogJyMwMTIxNjknIH0sXG4gICAgeyBuYW1lOiAnRGVzZXJ0IEJlaWdlJywgaGV4OiAnI0U2RDNCNycgfSxcbiAgICB7IG5hbWU6ICdTYWhhcmEgVGFuJywgaGV4OiAnI0I2OUQ4NScgfSxcbiAgICB7IG5hbWU6ICdMaWdodCBTdG9uZScsIGhleDogJyNkZGQ4ZDYnIH0sXG4gICAgeyBuYW1lOiAnQXNoIEdyZXknLCBoZXg6ICcjYjJiZWI1JyB9LFxuICAgIHsgbmFtZTogJ0tva28gQnJvd24nLCBoZXg6ICcjNjY1MDQ5JyB9LFxuICAgIHsgbmFtZTogJ0VtZXJhbGQgR3JlZW4nLCBoZXg6ICcjNTBDODc4JyB9LFxuICAgIHsgbmFtZTogJ0NoYXJjb2FsJywgaGV4OiAnIzM2NDU0ZicgfSxcbiAgICB7IG5hbWU6ICdDb3VudHJ5IFJlZCcsIGhleDogJyNmZjQ1MDAnIH0sXG4gICAgeyBuYW1lOiAnQ29wcGVyIFBlbm55JywgaGV4OiAnI2FkNmY2OScgfSxcbiAgICB7IG5hbWU6ICdCbGFjaycsIGhleDogJyMwMDAwMDAnfVxuICBdO1xuXG4gIFxuICBkZWJ1Z2dlclxuICByZXR1cm4gKFxuICAgIDxzcGFuIGNsYXNzTmFtZT0naC0yLzUgZmxleC1jb2wnPmNob29zZSBjb2xvclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29sb3JQaWNrZXJ9PlxuICAgICAge2NvbG9ycy5tYXAoKGNvbG9yLCBpbmRleCkgPT4gKFxuICAgICAgICA8bGFiZWwga2V5PXtpbmRleH0gY2xhc3NOYW1lPXtzdHlsZXMuY29sb3JPcHRpb259PlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgIG5hbWU9XCJjb2xvclwiXG4gICAgICAgICAgICB2YWx1ZT17Y29sb3IubmFtZX1cbiAgICAgICAgICAgIGNoZWNrZWQ9e3NlbGVjdGVkQ29sb3IgPT09IGNvbG9yLm5hbWV9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNvbG9yU2VsZWN0KHtldmVudDogZSwgY29sb3I6IGNvbG9yLm5hbWUsIGhleDogY29sb3IuaGV4fSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBjb2xvci5oZXggfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNvbG9yQm94fVxuICAgICAgICAgICAgYWx0PXtjb2xvci5uYW1lfSAvLyBBbHQgdGFnIGFkZGVkIHdpdGggY29sb3IgbmFtZVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgICA8L3NwYW4+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb2xvclBpY2tlcjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwic3R5bGVzIiwiQ29sb3JQaWNrZXIiLCJoYW5kbGVDb2xvclNlbGVjdCIsInNlbGVjdGVkQ29sb3IiLCJoZXhDb2xvciIsImNvbG9ycyIsIm5hbWUiLCJoZXgiLCJzcGFuIiwiY2xhc3NOYW1lIiwiZGl2IiwiY29sb3JQaWNrZXIiLCJtYXAiLCJjb2xvciIsImluZGV4IiwibGFiZWwiLCJjb2xvck9wdGlvbiIsImlucHV0IiwidHlwZSIsInZhbHVlIiwiY2hlY2tlZCIsIm9uQ2hhbmdlIiwiZSIsImV2ZW50Iiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvckJveCIsImFsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Cart/ColorPicker.js\n"));

/***/ })

});