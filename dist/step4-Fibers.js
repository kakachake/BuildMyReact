"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["step4-Fibers"],{"./src/4-Fibers/App.jsx":
/*!******************************!*\
  !*** ./src/4-Fibers/App.jsx ***!
  \******************************/(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var _Karo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Karo */ "./src/Karo/index.js");\n\nfunction Counter() {\n  const [state, setState] = _Karo__WEBPACK_IMPORTED_MODULE_0__["default"].useState(1);\n  return _Karo__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", null, _Karo__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h1", null, "Count: ", state), _Karo__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("button", {\n    onClick: () => setState(c => c + 1)\n  }, "add"), _Karo__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("button", {\n    onClick: () => setState(c => c - 1)\n  }, "cut"));\n}\nfunction App(props) {\n  const element = _Karo__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {\n    id: "foo"\n  }, _Karo__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h1", null, "Hello World"), _Karo__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("b", null), _Karo__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h2", null, "\\u54C8\\u54C8\\u54C8\\u54C8\\u54C8\\u54C8"), _Karo__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h1", null, "Hi ", props.name), _Karo__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(Counter, null));\n  console.log(element);\n  return element;\n}\n\n//# sourceURL=webpack:///./src/4-Fibers/App.jsx?')},"./src/4-Fibers/index.js":
/*!*******************************!*\
  !*** ./src/4-Fibers/index.js ***!
  \*******************************/(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Karo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Karo */ "./src/Karo/index.js");\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App */ "./src/4-Fibers/App.jsx");\n\n\nconst container = document.getElementById("root");\nconsole.log(111);\n_Karo__WEBPACK_IMPORTED_MODULE_0__["default"].render(_Karo__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_App__WEBPACK_IMPORTED_MODULE_1__["default"], {\n  name: "foo"\n}), container);\n\n//# sourceURL=webpack:///./src/4-Fibers/index.js?')}},_=>{var e;e="./src/4-Fibers/index.js",_(_.s=e)}]);