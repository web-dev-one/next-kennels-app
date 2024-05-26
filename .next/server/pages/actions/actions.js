"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/actions/actions";
exports.ids = ["pages/actions/actions"];
exports.modules = {

/***/ "./pages/actions/actions.js":
/*!**********************************!*\
  !*** ./pages/actions/actions.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ submitPayment)\n/* harmony export */ });\n/* harmony import */ var square__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! square */ \"square\");\n/* harmony import */ var square__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(square__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! crypto */ \"crypto\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var uuidv4__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuidv4 */ \"uuidv4\");\n/* harmony import */ var uuidv4__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(uuidv4__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\"use server\";\nfunction getRandomUUID() {\n    if (true) {\n        return crypto__WEBPACK_IMPORTED_MODULE_1__.randomBytes(16).toString('hex');\n    }\n    return crypto.randomUUID();\n}\nBigInt.prototype.toJSON = function() {\n    return this.toString();\n};\nconst PUBLIC_TOKEN = \"EAAAl68gWaBDS1j_A2cgwCwITFpdkRPh01rVLS57c81tmO3G_ZPfzF9Yy_8K-MQD\";\nconst { paymentsApi  } = new square__WEBPACK_IMPORTED_MODULE_0__.Client({\n    accessToken: PUBLIC_TOKEN,\n    environment: \"sandbox\"\n});\nasync function submitPayment(req, res) {\n    console.log(\"REQ\", req);\n    if (req.method === \"POST\") {\n        const { result  } = await paymentsApi.createPayment({\n            idempotencyKey: getRandomUUID(),\n            sourceId,\n            amountMoney: {\n                currency: \"USD\",\n                amount: 100\n            }\n        });\n        console.log(result);\n        res.status(200).json(result);\n    } else {\n        return res.status(500).send();\n    }\n}; // export async function submitPayment(sourceId) {\n //     try {\n //       const { result } = await paymentsApi.createPayment({\n //         mode: 'no-cors',\n //         idempotencyKey: getRandomUUID(),\n //         sourceId,\n //         amountMoney: {\n //           currency: \"USD\",\n //           amount: 100,\n //         },\n //       });\n //       console.log(result);\n //       return result;\n //     } catch (error) {\n //       console.log(error);\n //     }\n //   }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hY3Rpb25zL2FjdGlvbnMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUUrQjtBQUNPO0FBVVg7QUFiM0IsQ0FBWTtTQUlIRyxhQUFhLEdBQUUsQ0FBQztJQUVyQixFQUFFLEVBQUUsSUFBNkIsRUFBQyxDQUFDO1FBQy9CLE1BQU0sQ0FBQ0YsK0NBQXdCLENBQUMsRUFBRSxFQUFFSSxRQUFRLENBQUMsQ0FBSztJQUN0RCxDQUFDO0lBQ0QsTUFBTSxDQUFDQyxNQUFNLENBQUNDLFVBQVU7QUFDNUIsQ0FBQztBQUlEQyxNQUFNLENBQUNDLFNBQVMsQ0FBQ0MsTUFBTSxHQUFHLFFBQVEsR0FBSSxDQUFDO0lBQ25DLE1BQU0sQ0FBQyxJQUFJLENBQUNMLFFBQVE7QUFDdEIsQ0FBQztBQUVILEtBQUssQ0FBQ00sWUFBWSxHQUFHQyxrRUFBb0M7QUFHekQsS0FBSyxDQUFDLENBQUNHLENBQUFBLFdBQVcsR0FBQyxHQUFHLEdBQUcsQ0FBQ2YsMENBQU0sQ0FBQyxDQUFDO0lBQzlCZ0IsV0FBVyxFQUFFTCxZQUFZO0lBQ3pCTSxXQUFXLEVBQUUsQ0FBUztBQUUxQixDQUFDO0FBRWMsZUFBZUMsYUFBYSxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRSxDQUFDO0lBQ25EQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFLLE1BQUVILEdBQUc7SUFDdEIsRUFBRSxFQUFFQSxHQUFHLENBQUNJLE1BQU0sS0FBSyxDQUFNLE9BQUMsQ0FBQztRQUN6QixLQUFLLENBQUMsQ0FBQ0MsQ0FBQUEsTUFBTSxHQUFDLEdBQUcsS0FBSyxDQUFDVCxXQUFXLENBQUNVLGFBQWEsQ0FBQyxDQUFDO1lBQ2hEQyxjQUFjLEVBQUV2QixhQUFhO1lBQzdCd0IsUUFBUTtZQUNSQyxXQUFXLEVBQUUsQ0FBQztnQkFDWkMsUUFBUSxFQUFFLENBQUs7Z0JBQ2ZDLE1BQU0sRUFBRSxHQUFHO1lBQUMsQ0FBQztRQUVqQixDQUFDO1FBQ0RULE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRSxNQUFNO1FBQ2xCSixHQUFHLENBQUNXLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQ1IsTUFBTTtJQUU3QixDQUFDLE1BQU0sQ0FBQztRQUNOLE1BQU0sQ0FBQ0osR0FBRyxDQUFDVyxNQUFNLENBQUMsR0FBRyxFQUFFRSxJQUFJO0lBQzdCLENBQUM7QUFDSCxDQUFDLENBR0gsQ0FBa0Q7QUFDbEQsQ0FBWTtBQUNaLENBQTZEO0FBQzdELENBQTJCO0FBQzNCLENBQTJDO0FBQzNDLENBQW9CO0FBQ3BCLENBQXlCO0FBQ3pCLENBQTZCO0FBQzdCLENBQXlCO0FBQ3pCLENBQWE7QUFDYixDQUFZO0FBQ1osQ0FBNkI7QUFDN0IsQ0FBdUI7QUFDdkIsQ0FBd0I7QUFDeEIsQ0FBNEI7QUFDNUIsQ0FBUTtBQUNSLENBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFybi1zdGFydGVyLy4vcGFnZXMvYWN0aW9ucy9hY3Rpb25zLmpzPzJiNWQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCI7IFxuXG5pbXBvcnQgeyBDbGllbnQgfSBmcm9tIFwic3F1YXJlXCI7XG5pbXBvcnQgKiBhcyBjcnlwdG9TZXJ2ZXIgZnJvbSBcImNyeXB0b1wiO1xuZnVuY3Rpb24gZ2V0UmFuZG9tVVVJRCgpe1xuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIpe1xuICAgICAgICByZXR1cm4gY3J5cHRvU2VydmVyLnJhbmRvbUJ5dGVzKDE2KS50b1N0cmluZygnaGV4JylcbiAgICB9XG4gICAgcmV0dXJuIGNyeXB0by5yYW5kb21VVUlEKCk7XG59XG5cblxuaW1wb3J0IHt1dWlkfSBmcm9tICd1dWlkdjQnXG5CaWdJbnQucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy50b1N0cmluZygpO1xuICB9O1xuXG5jb25zdCBQVUJMSUNfVE9LRU4gPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BY2Nlc3NfdG9rZW5cblxuXG5jb25zdCB7cGF5bWVudHNBcGl9ID0gbmV3IENsaWVudCh7XG4gICAgYWNjZXNzVG9rZW46IFBVQkxJQ19UT0tFTixcbiAgICBlbnZpcm9ubWVudDogXCJzYW5kYm94XCIsXG5cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBzdWJtaXRQYXltZW50KHJlcSwgcmVzKSB7XG4gICAgY29uc29sZS5sb2coXCJSRVFcIiwgcmVxKVxuICAgIGlmIChyZXEubWV0aG9kID09PSBcIlBPU1RcIil7XG4gICAgICBjb25zdCB7cmVzdWx0fSA9IGF3YWl0IHBheW1lbnRzQXBpLmNyZWF0ZVBheW1lbnQoe1xuICAgICAgICBpZGVtcG90ZW5jeUtleTogZ2V0UmFuZG9tVVVJRCgpLFxuICAgICAgICBzb3VyY2VJZCxcbiAgICAgICAgYW1vdW50TW9uZXk6IHtcbiAgICAgICAgICBjdXJyZW5jeTogXCJVU0RcIixcbiAgICAgICAgICBhbW91bnQ6IDEwMCx9LFxuXG4gICAgICB9KTtcbiAgICAgIGNvbnNvbGUubG9nKHJlc3VsdClcbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHJlc3VsdCk7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5zZW5kKCk7XG4gICAgfVxuICB9XG5cblxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHN1Ym1pdFBheW1lbnQoc291cmNlSWQpIHtcbi8vICAgICB0cnkge1xuLy8gICAgICAgY29uc3QgeyByZXN1bHQgfSA9IGF3YWl0IHBheW1lbnRzQXBpLmNyZWF0ZVBheW1lbnQoe1xuLy8gICAgICAgICBtb2RlOiAnbm8tY29ycycsXG4vLyAgICAgICAgIGlkZW1wb3RlbmN5S2V5OiBnZXRSYW5kb21VVUlEKCksXG4vLyAgICAgICAgIHNvdXJjZUlkLFxuLy8gICAgICAgICBhbW91bnRNb25leToge1xuLy8gICAgICAgICAgIGN1cnJlbmN5OiBcIlVTRFwiLFxuLy8gICAgICAgICAgIGFtb3VudDogMTAwLFxuLy8gICAgICAgICB9LFxuLy8gICAgICAgfSk7XG4vLyAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuLy8gICAgICAgcmV0dXJuIHJlc3VsdDtcbi8vICAgICB9IGNhdGNoIChlcnJvcikge1xuLy8gICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuLy8gICAgIH1cbi8vICAgfSJdLCJuYW1lcyI6WyJDbGllbnQiLCJjcnlwdG9TZXJ2ZXIiLCJ1dWlkIiwiZ2V0UmFuZG9tVVVJRCIsInJhbmRvbUJ5dGVzIiwidG9TdHJpbmciLCJjcnlwdG8iLCJyYW5kb21VVUlEIiwiQmlnSW50IiwicHJvdG90eXBlIiwidG9KU09OIiwiUFVCTElDX1RPS0VOIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FjY2Vzc190b2tlbiIsInBheW1lbnRzQXBpIiwiYWNjZXNzVG9rZW4iLCJlbnZpcm9ubWVudCIsInN1Ym1pdFBheW1lbnQiLCJyZXEiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwibWV0aG9kIiwicmVzdWx0IiwiY3JlYXRlUGF5bWVudCIsImlkZW1wb3RlbmN5S2V5Iiwic291cmNlSWQiLCJhbW91bnRNb25leSIsImN1cnJlbmN5IiwiYW1vdW50Iiwic3RhdHVzIiwianNvbiIsInNlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/actions/actions.js\n");

/***/ }),

/***/ "square":
/*!*************************!*\
  !*** external "square" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("square");

/***/ }),

/***/ "uuidv4":
/*!*************************!*\
  !*** external "uuidv4" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("uuidv4");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/actions/actions.js"));
module.exports = __webpack_exports__;

})();