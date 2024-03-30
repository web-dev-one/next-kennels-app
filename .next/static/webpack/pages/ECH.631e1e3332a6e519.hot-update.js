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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ColorPicker_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ColorPicker.module.css */ \"./components/Cart/ColorPicker.module.css\");\n/* harmony import */ var _ColorPicker_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ColorPicker_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n // Import CSS module\nconst ColorPicker = (param)=>{\n    let { handleColorSelect, selectedColor } = param;\n    const colors = [\n        {\n            name: \"Polar White\",\n            hex: \"#E8E8EF\"\n        },\n        {\n            name: \"Hawiian Blue\",\n            hex: \"#012169\"\n        },\n        {\n            name: \"Desert Beige\",\n            hex: \"#E6D3B7\"\n        },\n        {\n            name: \"Sahara Tan\",\n            hex: \"#B69D85\"\n        },\n        {\n            name: \"Light Stone\",\n            hex: \"#ddd8d6\"\n        },\n        {\n            name: \"Ash Grey\",\n            hex: \"#b2beb5\"\n        },\n        {\n            name: \"Koko Brown\",\n            hex: \"#665049\"\n        },\n        {\n            name: \"Emerald Green\",\n            hex: \"#50C878\"\n        },\n        {\n            name: \"Charcoal\",\n            hex: \"#36454f\"\n        },\n        {\n            name: \"Country Red\",\n            hex: \"#ff4500\"\n        },\n        {\n            name: \"Copper Penny\",\n            hex: \"#ad6f69\"\n        },\n        {\n            name: \"Black\",\n            hex: \"#000000\"\n        }\n    ];\n    debugger;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        className: \"flex-col\",\n        children: [\n            \"choose color \",\n            selectedColor != \"\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-xs text-${}\",\n                    children: selectedColor\n                }, void 0, false, {\n                    fileName: \"/home/web_dev/WebMastersSolutionsLLC/FrontEnd/next-kennels-app/components/Cart/ColorPicker.js\",\n                    lineNumber: 24,\n                    columnNumber: 70\n                }, undefined)\n            }, void 0, false) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_ColorPicker_module_css__WEBPACK_IMPORTED_MODULE_2___default().colorPicker),\n                children: colors.map((color, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: (_ColorPicker_module_css__WEBPACK_IMPORTED_MODULE_2___default().colorOption),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"radio\",\n                                name: \"color\",\n                                value: color.name,\n                                checked: selectedColor === color.name,\n                                onChange: ()=>handleColorSelect({\n                                        color: color.name,\n                                        hex: color.hex\n                                    })\n                            }, void 0, false, {\n                                fileName: \"/home/web_dev/WebMastersSolutionsLLC/FrontEnd/next-kennels-app/components/Cart/ColorPicker.js\",\n                                lineNumber: 28,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                style: {\n                                    backgroundColor: color.hex\n                                },\n                                className: (_ColorPicker_module_css__WEBPACK_IMPORTED_MODULE_2___default().colorBox),\n                                alt: color.name\n                            }, void 0, false, {\n                                fileName: \"/home/web_dev/WebMastersSolutionsLLC/FrontEnd/next-kennels-app/components/Cart/ColorPicker.js\",\n                                lineNumber: 35,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, index, true, {\n                        fileName: \"/home/web_dev/WebMastersSolutionsLLC/FrontEnd/next-kennels-app/components/Cart/ColorPicker.js\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/home/web_dev/WebMastersSolutionsLLC/FrontEnd/next-kennels-app/components/Cart/ColorPicker.js\",\n                lineNumber: 25,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/web_dev/WebMastersSolutionsLLC/FrontEnd/next-kennels-app/components/Cart/ColorPicker.js\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, undefined);\n};\n_c = ColorPicker;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ColorPicker);\nvar _c;\n$RefreshReg$(_c, \"ColorPicker\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NhcnQvQ29sb3JQaWNrZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBd0M7QUFDTSxDQUFDLG9CQUFvQjtBQUVuRSxNQUFNRyxjQUFjO1FBQUMsRUFBQ0MsaUJBQWlCLEVBQUVDLGFBQWEsRUFBQztJQUVyRCxNQUFNQyxTQUFTO1FBQ2I7WUFBRUMsTUFBTTtZQUFlQyxLQUFLO1FBQVU7UUFDdEM7WUFBRUQsTUFBTTtZQUFnQkMsS0FBSztRQUFVO1FBQ3ZDO1lBQUVELE1BQU07WUFBZ0JDLEtBQUs7UUFBVTtRQUN2QztZQUFFRCxNQUFNO1lBQWNDLEtBQUs7UUFBVTtRQUNyQztZQUFFRCxNQUFNO1lBQWVDLEtBQUs7UUFBVTtRQUN0QztZQUFFRCxNQUFNO1lBQVlDLEtBQUs7UUFBVTtRQUNuQztZQUFFRCxNQUFNO1lBQWNDLEtBQUs7UUFBVTtRQUNyQztZQUFFRCxNQUFNO1lBQWlCQyxLQUFLO1FBQVU7UUFDeEM7WUFBRUQsTUFBTTtZQUFZQyxLQUFLO1FBQVU7UUFDbkM7WUFBRUQsTUFBTTtZQUFlQyxLQUFLO1FBQVU7UUFDdEM7WUFBRUQsTUFBTTtZQUFnQkMsS0FBSztRQUFVO1FBQ3ZDO1lBQUVELE1BQU07WUFBU0MsS0FBSztRQUFTO0tBQ2hDO0lBR0QsUUFBUTtJQUNSLHFCQUNFLDhEQUFDQztRQUFLQyxXQUFVOztZQUFXO1lBQWNMLGlCQUFpQixtQkFBSzswQkFBRSw0RUFBQ007b0JBQUVELFdBQVU7OEJBQW9CTDs7Ozs7OzhDQUF3QjswQkFDMUgsOERBQUNPO2dCQUFJRixXQUFXUiw0RUFBa0I7MEJBQy9CSSxPQUFPUSxHQUFHLENBQUMsQ0FBQ0MsT0FBT0Msc0JBQ2xCLDhEQUFDQzt3QkFBa0JQLFdBQVdSLDRFQUFrQjs7MENBQzlDLDhEQUFDaUI7Z0NBQ0NDLE1BQUs7Z0NBQ0xiLE1BQUs7Z0NBQ0xjLE9BQU9OLE1BQU1SLElBQUk7Z0NBQ2pCZSxTQUFTakIsa0JBQWtCVSxNQUFNUixJQUFJO2dDQUNyQ2dCLFVBQVUsSUFBTW5CLGtCQUFrQjt3Q0FBQ1csT0FBT0EsTUFBTVIsSUFBSTt3Q0FBRUMsS0FBS08sTUFBTVAsR0FBRztvQ0FBQTs7Ozs7OzBDQUV0RSw4REFBQ0M7Z0NBQ0NlLE9BQU87b0NBQUVDLGlCQUFpQlYsTUFBTVAsR0FBRztnQ0FBQztnQ0FDcENFLFdBQVdSLHlFQUFlO2dDQUMxQnlCLEtBQUtaLE1BQU1SLElBQUk7Ozs7Ozs7dUJBWFBTOzs7Ozs7Ozs7Ozs7Ozs7O0FBa0JwQjtLQXpDTWI7QUEyQ04sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJ0L0NvbG9yUGlja2VyLmpzPzFiNmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0NvbG9yUGlja2VyLm1vZHVsZS5jc3MnOyAvLyBJbXBvcnQgQ1NTIG1vZHVsZVxuXG5jb25zdCBDb2xvclBpY2tlciA9ICh7aGFuZGxlQ29sb3JTZWxlY3QsIHNlbGVjdGVkQ29sb3J9KSA9PiB7XG5cbiAgY29uc3QgY29sb3JzID0gW1xuICAgIHsgbmFtZTogJ1BvbGFyIFdoaXRlJywgaGV4OiAnI0U4RThFRicgfSxcbiAgICB7IG5hbWU6ICdIYXdpaWFuIEJsdWUnLCBoZXg6ICcjMDEyMTY5JyB9LFxuICAgIHsgbmFtZTogJ0Rlc2VydCBCZWlnZScsIGhleDogJyNFNkQzQjcnIH0sXG4gICAgeyBuYW1lOiAnU2FoYXJhIFRhbicsIGhleDogJyNCNjlEODUnIH0sXG4gICAgeyBuYW1lOiAnTGlnaHQgU3RvbmUnLCBoZXg6ICcjZGRkOGQ2JyB9LFxuICAgIHsgbmFtZTogJ0FzaCBHcmV5JywgaGV4OiAnI2IyYmViNScgfSxcbiAgICB7IG5hbWU6ICdLb2tvIEJyb3duJywgaGV4OiAnIzY2NTA0OScgfSxcbiAgICB7IG5hbWU6ICdFbWVyYWxkIEdyZWVuJywgaGV4OiAnIzUwQzg3OCcgfSxcbiAgICB7IG5hbWU6ICdDaGFyY29hbCcsIGhleDogJyMzNjQ1NGYnIH0sXG4gICAgeyBuYW1lOiAnQ291bnRyeSBSZWQnLCBoZXg6ICcjZmY0NTAwJyB9LFxuICAgIHsgbmFtZTogJ0NvcHBlciBQZW5ueScsIGhleDogJyNhZDZmNjknIH0sXG4gICAgeyBuYW1lOiAnQmxhY2snLCBoZXg6ICcjMDAwMDAwJ31cbiAgXTtcblxuICBcbiAgZGVidWdnZXJcbiAgcmV0dXJuIChcbiAgICA8c3BhbiBjbGFzc05hbWU9J2ZsZXgtY29sJz5jaG9vc2UgY29sb3Ige3NlbGVjdGVkQ29sb3IgIT0gJycgPyA8PjxwIGNsYXNzTmFtZT0ndGV4dC14cyB0ZXh0LSR7fSc+e3NlbGVjdGVkQ29sb3J9PC9wPjwvPiA6IDw+PC8+fVxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29sb3JQaWNrZXJ9PlxuICAgICAge2NvbG9ycy5tYXAoKGNvbG9yLCBpbmRleCkgPT4gKFxuICAgICAgICA8bGFiZWwga2V5PXtpbmRleH0gY2xhc3NOYW1lPXtzdHlsZXMuY29sb3JPcHRpb259PlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgIG5hbWU9XCJjb2xvclwiXG4gICAgICAgICAgICB2YWx1ZT17Y29sb3IubmFtZX1cbiAgICAgICAgICAgIGNoZWNrZWQ9e3NlbGVjdGVkQ29sb3IgPT09IGNvbG9yLm5hbWV9XG4gICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gaGFuZGxlQ29sb3JTZWxlY3Qoe2NvbG9yOiBjb2xvci5uYW1lLCBoZXg6IGNvbG9yLmhleH0pfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogY29sb3IuaGV4IH19XG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jb2xvckJveH1cbiAgICAgICAgICAgIGFsdD17Y29sb3IubmFtZX0gLy8gQWx0IHRhZyBhZGRlZCB3aXRoIGNvbG9yIG5hbWVcbiAgICAgICAgICAvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICAgPC9zcGFuPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29sb3JQaWNrZXI7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsIkNvbG9yUGlja2VyIiwiaGFuZGxlQ29sb3JTZWxlY3QiLCJzZWxlY3RlZENvbG9yIiwiY29sb3JzIiwibmFtZSIsImhleCIsInNwYW4iLCJjbGFzc05hbWUiLCJwIiwiZGl2IiwiY29sb3JQaWNrZXIiLCJtYXAiLCJjb2xvciIsImluZGV4IiwibGFiZWwiLCJjb2xvck9wdGlvbiIsImlucHV0IiwidHlwZSIsInZhbHVlIiwiY2hlY2tlZCIsIm9uQ2hhbmdlIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvckJveCIsImFsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Cart/ColorPicker.js\n"));

/***/ })

});