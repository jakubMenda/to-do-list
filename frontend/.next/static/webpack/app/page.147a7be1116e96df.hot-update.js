"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Box */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Container */ \"(app-pages-browser)/./node_modules/@mui/material/Container/Container.js\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Typography */ \"(app-pages-browser)/./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var _components_ToDoList_ToDoList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/ToDoList/ToDoList */ \"(app-pages-browser)/./src/app/components/ToDoList/ToDoList.tsx\");\n/* harmony import */ var _components_TaskDialog_TaskDialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/TaskDialog/TaskDialog */ \"(app-pages-browser)/./src/app/components/TaskDialog/TaskDialog.tsx\");\n/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./enums */ \"(app-pages-browser)/./src/app/enums.ts\");\n/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./api/api */ \"(app-pages-browser)/./src/app/api/api.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nasync function Home() {\n    _s();\n    const [tasks, setTasks] = useState(null);\n    const [isLoading, setIsLoading] = useState(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const accessToken = localStorage.getItem(_enums__WEBPACK_IMPORTED_MODULE_5__.LocalStorageKeys.AccessToken);\n        if (!accessToken) {\n            return;\n        }\n        const populateTasks = async ()=>{\n            try {\n                const tasks = await (0,_api_api__WEBPACK_IMPORTED_MODULE_6__.getTasks)(accessToken);\n                setTasks(tasks);\n                setIsLoading(false);\n            } catch (error) {\n                router.replace(Routes.SignIn);\n            }\n        };\n        populateTasks();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Container__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        maxWidth: \"md\",\n        sx: {\n            mt: \"4rem\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n            sx: {\n                padding: \"2rem 4rem\",\n                background: \"#fff\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                    sx: {\n                        display: \"flex\",\n                        justifyContent: \"center\",\n                        marginTop: \"4rem\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        src: \"/todo_icon.png\",\n                        alt: \"To Do icon\",\n                        width: \"125\",\n                        height: \"102\"\n                    }, void 0, false, {\n                        fileName: \"/app/src/app/page.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/app/src/app/page.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                    variant: \"h3\",\n                    component: \"h1\",\n                    sx: {\n                        textTransform: \"uppercase\",\n                        marginBottom: \"2rem\",\n                        marginTop: \"2rem\",\n                        textAlign: \"center\"\n                    },\n                    children: \"Simple Tasks App\"\n                }, void 0, false, {\n                    fileName: \"/app/src/app/page.tsx\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                    sx: {\n                        marginBottom: \"2rem\",\n                        textAlign: \"center\"\n                    },\n                    children: \"Behold and rejoice!\"\n                }, void 0, false, {\n                    fileName: \"/app/src/app/page.tsx\",\n                    lineNumber: 59,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                    sx: {\n                        display: \"flex\",\n                        justifyContent: \"flex-end\",\n                        marginBottom: \"2rem\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TaskDialog_TaskDialog__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                        fileName: \"/app/src/app/page.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/app/src/app/page.tsx\",\n                    lineNumber: 64,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ToDoList_ToDoList__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"/app/src/app/page.tsx\",\n                    lineNumber: 71,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/app/src/app/page.tsx\",\n            lineNumber: 43,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/app/src/app/page.tsx\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"XFHY4YgaSlC2Dx7mYZsxskIUQAE=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRThCO0FBQ0k7QUFFRTtBQUNZO0FBQ0U7QUFFSTtBQUNNO0FBQ2pCO0FBQ047QUFFdEIsZUFBZVM7O0lBQzVCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHQyxTQUF3QjtJQUNsRCxNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR0YsU0FBUztJQUUzQ1gsZ0RBQVNBLENBQUM7UUFDUixNQUFNYyxjQUFjQyxhQUFhQyxPQUFPLENBQUNWLG9EQUFnQkEsQ0FBQ1csV0FBVztRQUVyRSxJQUFJLENBQUNILGFBQWE7WUFDZDtRQUNKO1FBRUEsTUFBTUksZ0JBQWdCO1lBQ2xCLElBQUk7Z0JBQ0EsTUFBTVQsUUFBUSxNQUFNRixrREFBUUEsQ0FBQ087Z0JBRTdCSixTQUFTRDtnQkFDVEksYUFBYTtZQUNqQixFQUFFLE9BQU9NLE9BQU87Z0JBQ1pDLE9BQU9DLE9BQU8sQ0FBQ0MsT0FBT0MsTUFBTTtZQUNoQztRQUNGO1FBR0ZMO0lBQ0osR0FBRyxFQUFFO0lBRUgscUJBQ0UsOERBQUNoQiwrREFBU0E7UUFBQ3NCLFVBQVM7UUFBS0MsSUFBSTtZQUFFQyxJQUFJO1FBQU87a0JBQ3hDLDRFQUFDekIseURBQUdBO1lBQUN3QixJQUFJO2dCQUFFRSxTQUFTO2dCQUFhQyxZQUFZO1lBQU87OzhCQUNsRCw4REFBQzNCLHlEQUFHQTtvQkFBQ3dCLElBQUk7d0JBQUVJLFNBQVM7d0JBQVFDLGdCQUFnQjt3QkFBVUMsV0FBVztvQkFBTzs4QkFDdEUsNEVBQUNoQyxtREFBS0E7d0JBQUNpQyxLQUFJO3dCQUFpQkMsS0FBSTt3QkFBYUMsT0FBTTt3QkFBTUMsUUFBTzs7Ozs7Ozs7Ozs7OEJBRWxFLDhEQUFDaEMsZ0VBQVVBO29CQUNUaUMsU0FBUTtvQkFDUkMsV0FBVTtvQkFDVlosSUFBSTt3QkFDRmEsZUFBZTt3QkFDZkMsY0FBYzt3QkFDZFIsV0FBVzt3QkFDWFMsV0FBVztvQkFDYjs4QkFDRDs7Ozs7OzhCQUdELDhEQUFDckMsZ0VBQVVBO29CQUNUc0IsSUFBSTt3QkFBRWMsY0FBYzt3QkFBUUMsV0FBVztvQkFBUzs4QkFDakQ7Ozs7Ozs4QkFHRCw4REFBQ3ZDLHlEQUFHQTtvQkFBQ3dCLElBQUk7d0JBQ1BJLFNBQVM7d0JBQ1RDLGdCQUFnQjt3QkFDaEJTLGNBQWM7b0JBQ2hCOzhCQUNFLDRFQUFDbEMseUVBQVVBOzs7Ozs7Ozs7OzhCQUViLDhEQUFDRCxxRUFBUUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJakI7R0E1RDhCSTtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2UudHN4P2Y2OGEiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5cbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgQm94IGZyb20gJ0BtdWkvbWF0ZXJpYWwvQm94JztcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9Db250YWluZXInO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG11aS9tYXRlcmlhbC9UeXBvZ3JhcGh5JztcblxuaW1wb3J0IFRvRG9MaXN0IGZyb20gJy4vY29tcG9uZW50cy9Ub0RvTGlzdC9Ub0RvTGlzdCc7XG5pbXBvcnQgVGFza0RpYWxvZyBmcm9tICcuL2NvbXBvbmVudHMvVGFza0RpYWxvZy9UYXNrRGlhbG9nJztcbmltcG9ydCB7IExvY2FsU3RvcmFnZUtleXMgfSBmcm9tICcuL2VudW1zJztcbmltcG9ydCB7IGdldFRhc2tzIH0gZnJvbSAnLi9hcGkvYXBpJztcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW3Rhc2tzLCBzZXRUYXNrc10gPSB1c2VTdGF0ZTxUYXNrW10gfCBudWxsPihudWxsKVxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBhY2Nlc3NUb2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKExvY2FsU3RvcmFnZUtleXMuQWNjZXNzVG9rZW4pO1xuXG4gICAgaWYgKCFhY2Nlc3NUb2tlbikge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcG9wdWxhdGVUYXNrcyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tzID0gYXdhaXQgZ2V0VGFza3MoYWNjZXNzVG9rZW4pO1xuXG4gICAgICAgICAgICBzZXRUYXNrcyh0YXNrcyk7XG4gICAgICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgcm91dGVyLnJlcGxhY2UoUm91dGVzLlNpZ25JbilcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgIFxuICAgIHBvcHVsYXRlVGFza3MoKTtcbn0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lciBtYXhXaWR0aD1cIm1kXCIgc3g9e3sgbXQ6ICc0cmVtJyB9fT5cbiAgICAgIDxCb3ggc3g9e3sgcGFkZGluZzogJzJyZW0gNHJlbScsIGJhY2tncm91bmQ6ICcjZmZmJyB9fT5cbiAgICAgICAgPEJveCBzeD17eyBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgbWFyZ2luVG9wOiAnNHJlbScgfX0+XG4gICAgICAgICAgPEltYWdlIHNyYz1cIi90b2RvX2ljb24ucG5nXCIgYWx0PVwiVG8gRG8gaWNvblwiIHdpZHRoPVwiMTI1XCIgaGVpZ2h0PVwiMTAyXCIgLz5cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgdmFyaWFudD1cImgzXCJcbiAgICAgICAgICBjb21wb25lbnQ9XCJoMVwiXG4gICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnLFxuICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnMnJlbScsXG4gICAgICAgICAgICBtYXJnaW5Ub3A6ICcycmVtJyxcbiAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcidcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgU2ltcGxlIFRhc2tzIEFwcFxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgc3g9e3sgbWFyZ2luQm90dG9tOiAnMnJlbScsIHRleHRBbGlnbjogJ2NlbnRlcicgfX1cbiAgICAgICAgPlxuICAgICAgICAgIEJlaG9sZCBhbmQgcmVqb2ljZSFcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8Qm94IHN4PXt7XG4gICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnZmxleC1lbmQnLFxuICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzJyZW0nXG4gICAgICAgIH19PlxuICAgICAgICAgIDxUYXNrRGlhbG9nIC8+XG4gICAgICAgIDwvQm94PlxuICAgICAgICA8VG9Eb0xpc3QgLz5cbiAgICAgIDwvQm94PlxuICAgIDwvQ29udGFpbmVyPlxuICApXG59XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJ1c2VFZmZlY3QiLCJCb3giLCJDb250YWluZXIiLCJUeXBvZ3JhcGh5IiwiVG9Eb0xpc3QiLCJUYXNrRGlhbG9nIiwiTG9jYWxTdG9yYWdlS2V5cyIsImdldFRhc2tzIiwiSG9tZSIsInRhc2tzIiwic2V0VGFza3MiLCJ1c2VTdGF0ZSIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImFjY2Vzc1Rva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkFjY2Vzc1Rva2VuIiwicG9wdWxhdGVUYXNrcyIsImVycm9yIiwicm91dGVyIiwicmVwbGFjZSIsIlJvdXRlcyIsIlNpZ25JbiIsIm1heFdpZHRoIiwic3giLCJtdCIsInBhZGRpbmciLCJiYWNrZ3JvdW5kIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwibWFyZ2luVG9wIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJ2YXJpYW50IiwiY29tcG9uZW50IiwidGV4dFRyYW5zZm9ybSIsIm1hcmdpbkJvdHRvbSIsInRleHRBbGlnbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});