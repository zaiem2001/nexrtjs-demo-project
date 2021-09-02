webpackHotUpdate_N_E("pages/[meetupid]",{

/***/ "./pages/[meetupid]/index.js":
/*!***********************************!*\
  !*** ./pages/[meetupid]/index.js ***!
  \***********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_meetups_SingleMeetup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/meetups/SingleMeetup */ "./components/meetups/SingleMeetup.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "D:\\full react course\\06-onwards-to-a-bigger-project-starting-project\\pages\\[meetupid]\\index.js",
    _this = undefined,
    _s = $RefreshSig$();






var MeetupPage = function MeetupPage(props) {
  _s();

  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])(),
      isFallback = _useRouter.isFallback;

  if (isFallback) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: "loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 12
    }, _this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: props.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: props.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_SingleMeetup__WEBPACK_IMPORTED_MODULE_3__["default"], {
      image: props.image,
      title: props.title,
      address: props.address,
      description: props.description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, _this);
}; // ############################ SERVER SIDE CODE I.E WILL NOT BE SHOWN IN CLIENT SIDE.


_s(MeetupPage, "Ch/bV+mPq0h+JIhwQrjzTmaO/YQ=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"]];
});

_c = MeetupPage;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (MeetupPage);

var _c;

$RefreshReg$(_c, "MeetupPage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW21lZXR1cGlkXS9pbmRleC5qcyJdLCJuYW1lcyI6WyJNZWV0dXBQYWdlIiwicHJvcHMiLCJ1c2VSb3V0ZXIiLCJpc0ZhbGxiYWNrIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImltYWdlIiwiYWRkcmVzcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsbUJBQ0xDLDZEQUFTLEVBREo7QUFBQSxNQUNwQkMsVUFEb0IsY0FDcEJBLFVBRG9COztBQUc1QixNQUFJQSxVQUFKLEVBQWdCO0FBQ2Qsd0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBUDtBQUNEOztBQUVELHNCQUNFLHFFQUFDLDhDQUFEO0FBQUEsNEJBQ0UscUVBQUMsZ0RBQUQ7QUFBQSw4QkFDRTtBQUFBLGtCQUFRRixLQUFLLENBQUNHO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUU7QUFBTSxZQUFJLEVBQUMsYUFBWDtBQUF5QixlQUFPLEVBQUVILEtBQUssQ0FBQ0k7QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBS0UscUVBQUMsd0VBQUQ7QUFDRSxXQUFLLEVBQUVKLEtBQUssQ0FBQ0ssS0FEZjtBQUVFLFdBQUssRUFBRUwsS0FBSyxDQUFDRyxLQUZmO0FBR0UsYUFBTyxFQUFFSCxLQUFLLENBQUNNLE9BSGpCO0FBSUUsaUJBQVcsRUFBRU4sS0FBSyxDQUFDSTtBQUpyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFjRCxDQXJCRCxDLENBdUJBOzs7R0F2Qk1MLFU7VUFDbUJFLHFEOzs7S0FEbkJGLFU7O0FBd0VTQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bbWVldHVwaWRdLmU3OGM4OTAzNmNhMzJlYzNlZGMzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb25nb0NsaWVudCwgT2JqZWN0SWQgfSBmcm9tIFwibW9uZ29kYlwiO1xyXG5pbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcblxyXG5pbXBvcnQgU2luZ2xlTWVldHVwIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL21lZXR1cHMvU2luZ2xlTWVldHVwXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuY29uc3QgTWVldHVwUGFnZSA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgaXNGYWxsYmFjayB9ID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGlmIChpc0ZhbGxiYWNrKSB7XHJcbiAgICByZXR1cm4gPGgxPmxvYWRpbmcuLi48L2gxPjtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8RnJhZ21lbnQ+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT57cHJvcHMudGl0bGV9PC90aXRsZT5cclxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXtwcm9wcy5kZXNjcmlwdGlvbn0gLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8U2luZ2xlTWVldHVwXHJcbiAgICAgICAgaW1hZ2U9e3Byb3BzLmltYWdlfVxyXG4gICAgICAgIHRpdGxlPXtwcm9wcy50aXRsZX1cclxuICAgICAgICBhZGRyZXNzPXtwcm9wcy5hZGRyZXNzfVxyXG4gICAgICAgIGRlc2NyaXB0aW9uPXtwcm9wcy5kZXNjcmlwdGlvbn1cclxuICAgICAgLz5cclxuICAgIDwvRnJhZ21lbnQ+XHJcbiAgKTtcclxufTtcclxuXHJcbi8vICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMgU0VSVkVSIFNJREUgQ09ERSBJLkUgV0lMTCBOT1QgQkUgU0hPV04gSU4gQ0xJRU5UIFNJREUuXHJcblxyXG5jb25zdCBjb25uZWN0VG9EQiA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCB1cmwgPSBgbW9uZ29kYitzcnY6Ly90ZXN0OnRlc3QxMjNAcmVhbG1jbHVzdGVyLjhqemE3Lm1vbmdvZGIubmV0L215Rmlyc3REYXRhYmFzZT9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHlgO1xyXG5cclxuICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KHVybCk7XHJcblxyXG4gIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XHJcbiAgY29uc3QgY29sbGVjdGlvbnMgPSBkYi5jb2xsZWN0aW9uKFwibWVldHVwc1wiKTtcclxuXHJcbiAgcmV0dXJuIGNvbGxlY3Rpb25zO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IGNvbGxlY3Rpb25zID0gYXdhaXQgY29ubmVjdFRvREIoKTtcclxuXHJcbiAgY29uc3QgY29sbGVjdGlvbnNJZCA9IGF3YWl0IGNvbGxlY3Rpb25zLmZpbmQoe30sIHsgX2lkOiAxIH0pLnRvQXJyYXkoKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGZhbGxiYWNrOiB0cnVlLFxyXG4gICAgcGF0aHM6IGNvbGxlY3Rpb25zSWQubWFwKChjb2xsZWN0aW9uSWQpID0+IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgIG1lZXR1cGlkOiBjb2xsZWN0aW9uSWQuX2lkLnRvU3RyaW5nKCksXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuICAgIH0pLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4ge1xyXG4gIGNvbnN0IG1lZXR1cElkID0gY29udGV4dC5wYXJhbXMubWVldHVwaWQ7IC8vIG1lZXR1cGlkIGlzIGZpbGUgbmFtZSBbaW5zaWRlIHRoaXNdXHJcblxyXG4gIGNvbnN0IGNvbGxlY3Rpb25zID0gYXdhaXQgY29ubmVjdFRvREIoKTtcclxuXHJcbiAgY29uc3Qgc2luZ2xlTWVldHVwID0gYXdhaXQgY29sbGVjdGlvbnMuZmluZE9uZSh7IF9pZDogT2JqZWN0SWQobWVldHVwSWQpIH0pO1xyXG4gIC8vIGNvbnNvbGUubG9nKG1lZXR1cElkKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIGlkOiBzaW5nbGVNZWV0dXAuX2lkLnRvU3RyaW5nKCksXHJcbiAgICAgIHRpdGxlOiBzaW5nbGVNZWV0dXAudGl0bGUsXHJcbiAgICAgIGltYWdlOiBzaW5nbGVNZWV0dXAuaW1hZ2UsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBzaW5nbGVNZWV0dXAuZGVzY3JpcHRpb24sXHJcbiAgICAgIGFkZHJlc3M6IHNpbmdsZU1lZXR1cC5hZGRyZXNzLFxyXG4gICAgfSxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVldHVwUGFnZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==