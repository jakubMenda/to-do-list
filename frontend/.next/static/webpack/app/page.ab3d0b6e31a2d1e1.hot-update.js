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

/***/ "(app-pages-browser)/./src/app/components/TaskDialog/TaskDialog.tsx":
/*!******************************************************!*\
  !*** ./src/app/components/TaskDialog/TaskDialog.tsx ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Dialog */ \"(app-pages-browser)/./node_modules/@mui/material/Dialog/Dialog.js\");\n/* harmony import */ var _mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/DialogTitle */ \"(app-pages-browser)/./node_modules/@mui/material/DialogTitle/DialogTitle.js\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Button */ \"(app-pages-browser)/./node_modules/@mui/material/Button/Button.js\");\n/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/IconButton */ \"(app-pages-browser)/./node_modules/@mui/material/IconButton/IconButton.js\");\n/* harmony import */ var _mui_material_Snackbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Snackbar */ \"(app-pages-browser)/./node_modules/@mui/material/Snackbar/Snackbar.js\");\n/* harmony import */ var _mui_material_Alert__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/Alert */ \"(app-pages-browser)/./node_modules/@mui/material/Alert/Alert.js\");\n/* harmony import */ var _mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/Add */ \"(app-pages-browser)/./node_modules/@mui/icons-material/Add.js\");\n/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/icons-material/Close */ \"(app-pages-browser)/./node_modules/@mui/icons-material/Close.js\");\n/* harmony import */ var _TaskForm_TaskForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../TaskForm/TaskForm */ \"(app-pages-browser)/./src/app/components/TaskForm/TaskForm.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst TaskDialog = ()=>{\n    _s();\n    const [isDialogOpen, setIsDialogOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [successMessage, setSuccessMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const handleDialogClose = ()=>{\n        setIsDialogOpen(false);\n    };\n    const handleDialogOpen = ()=>{\n        setIsDialogOpen(true);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                variant: \"outlined\",\n                startIcon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, void 0, void 0),\n                onClick: handleDialogOpen,\n                children: \"Add Task\"\n            }, void 0, false, {\n                fileName: \"/app/src/app/components/TaskDialog/TaskDialog.tsx\",\n                lineNumber: 28,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                open: isDialogOpen,\n                onClose: handleDialogClose,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        children: \"Add a new task\"\n                    }, void 0, false, {\n                        fileName: \"/app/src/app/components/TaskDialog/TaskDialog.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        \"aria-label\": \"close\",\n                        onClick: handleDialogClose,\n                        sx: {\n                            position: \"absolute\",\n                            right: \"1rem\",\n                            top: \"1rem\",\n                            color: \"#bbb\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                            fileName: \"/app/src/app/components/TaskDialog/TaskDialog.tsx\",\n                            lineNumber: 50,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/app/src/app/components/TaskDialog/TaskDialog.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TaskForm_TaskForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        onSuccess: handleDialogClose\n                    }, void 0, false, {\n                        fileName: \"/app/src/app/components/TaskDialog/TaskDialog.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Snackbar__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                        open: !!successMessage,\n                        autoHideDuration: 2000,\n                        onClose: handleSuccessSnackbarClose,\n                        message: successMessage,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Alert__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                            onClose: handleSuccessSnackbarClose,\n                            severity: \"success\",\n                            sx: {\n                                width: \"100%\"\n                            },\n                            children: successMessage\n                        }, void 0, false, {\n                            fileName: \"/app/src/app/components/TaskDialog/TaskDialog.tsx\",\n                            lineNumber: 59,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/app/src/app/components/TaskDialog/TaskDialog.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/app/src/app/components/TaskDialog/TaskDialog.tsx\",\n                lineNumber: 35,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(TaskDialog, \"61P2OBboRBRo4I4aHolE0LSsRZ0=\");\n_c = TaskDialog;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TaskDialog);\nvar _c;\n$RefreshReg$(_c, \"TaskDialog\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9UYXNrRGlhbG9nL1Rhc2tEaWFsb2cudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNpQztBQUVTO0FBQ1U7QUFDVjtBQUNRO0FBQ0o7QUFDTjtBQUNTO0FBQUE7QUFFTDtBQUU1QyxNQUFNVSxhQUFhOztJQUNmLE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdaLCtDQUFRQSxDQUFDO0lBQ2pELE1BQU0sQ0FBQ2EsZ0JBQWdCQyxrQkFBa0IsR0FBR2QsK0NBQVFBLENBQWdCO0lBRXBFLE1BQU1lLG9CQUFvQjtRQUN0QkgsZ0JBQWdCO0lBQ3BCO0lBRUEsTUFBTUksbUJBQW1CO1FBQ3JCSixnQkFBZ0I7SUFDcEI7SUFFQSxxQkFDSTs7MEJBQ0ksOERBQUNULDREQUFNQTtnQkFDSGMsU0FBUTtnQkFDUkMseUJBQVcsOERBQUNYLCtEQUFHQTtnQkFDZlksU0FBU0g7MEJBQ1o7Ozs7OzswQkFHRCw4REFBQ2YsNERBQU1BO2dCQUNIbUIsTUFBTVQ7Z0JBQ05VLFNBQVNOOztrQ0FFVCw4REFBQ2IsaUVBQVdBO2tDQUFDOzs7Ozs7a0NBQ2IsOERBQUNFLGdFQUFVQTt3QkFDUGtCLGNBQVc7d0JBQ1hILFNBQVNKO3dCQUNUUSxJQUFJOzRCQUNBQyxVQUFVOzRCQUNWQyxPQUFPOzRCQUNQQyxLQUFLOzRCQUNMQyxPQUFPO3dCQUNYO2tDQUVBLDRFQUFDbkIsaUVBQUtBOzs7Ozs7Ozs7O2tDQUVWLDhEQUFDQywwREFBUUE7d0JBQUNtQixXQUFXYjs7Ozs7O2tDQUNyQiw4REFBQ1YsOERBQVFBO3dCQUNMZSxNQUFNLENBQUMsQ0FBQ1A7d0JBQ1JnQixrQkFBa0I7d0JBQ2xCUixTQUFTUzt3QkFDVEMsU0FBU2xCO2tDQUVULDRFQUFDUCw0REFBS0E7NEJBQUNlLFNBQVNTOzRCQUE0QkUsVUFBUzs0QkFBVVQsSUFBSTtnQ0FBRVUsT0FBTzs0QkFBTztzQ0FDbEZwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1yQjtHQXBETUg7S0FBQUE7QUFzRE4sK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL1Rhc2tEaWFsb2cvVGFza0RpYWxvZy50c3g/ZDM2MSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgRGlhbG9nIGZyb20gJ0BtdWkvbWF0ZXJpYWwvRGlhbG9nJztcbmltcG9ydCBEaWFsb2dUaXRsZSBmcm9tICdAbXVpL21hdGVyaWFsL0RpYWxvZ1RpdGxlJztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG11aS9tYXRlcmlhbC9CdXR0b24nO1xuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG11aS9tYXRlcmlhbC9JY29uQnV0dG9uJztcbmltcG9ydCBTbmFja2JhciBmcm9tIFwiQG11aS9tYXRlcmlhbC9TbmFja2JhclwiO1xuaW1wb3J0IEFsZXJ0IGZyb20gXCJAbXVpL21hdGVyaWFsL0FsZXJ0XCI7XG5pbXBvcnQgeyBBZGQsIENsb3NlIH0gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbCc7XG5cbmltcG9ydCBUYXNrRm9ybSBmcm9tICcuLi9UYXNrRm9ybS9UYXNrRm9ybSc7XG5cbmNvbnN0IFRhc2tEaWFsb2cgPSAoKSA9PiB7XG4gICAgY29uc3QgW2lzRGlhbG9nT3Blbiwgc2V0SXNEaWFsb2dPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbc3VjY2Vzc01lc3NhZ2UsIHNldFN1Y2Nlc3NNZXNzYWdlXSA9IHVzZVN0YXRlPFN0cmluZyB8IG51bGw+KG51bGwpXG5cbiAgICBjb25zdCBoYW5kbGVEaWFsb2dDbG9zZSA9ICgpID0+IHtcbiAgICAgICAgc2V0SXNEaWFsb2dPcGVuKGZhbHNlKTtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVEaWFsb2dPcGVuID0gKCkgPT4ge1xuICAgICAgICBzZXRJc0RpYWxvZ09wZW4odHJ1ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgIHN0YXJ0SWNvbj17PEFkZCAvPn1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVEaWFsb2dPcGVufVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIEFkZCBUYXNrXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDxEaWFsb2dcbiAgICAgICAgICAgICAgICBvcGVuPXtpc0RpYWxvZ09wZW59XG4gICAgICAgICAgICAgICAgb25DbG9zZT17aGFuZGxlRGlhbG9nQ2xvc2V9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPERpYWxvZ1RpdGxlPkFkZCBhIG5ldyB0YXNrPC9EaWFsb2dUaXRsZT5cbiAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiY2xvc2VcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVEaWFsb2dDbG9zZX1cbiAgICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6ICcxcmVtJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogJzFyZW0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjYmJiJyxcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxDbG9zZSAvPlxuICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8VGFza0Zvcm0gb25TdWNjZXNzPXtoYW5kbGVEaWFsb2dDbG9zZX0gLz5cbiAgICAgICAgICAgICAgICA8U25hY2tiYXJcbiAgICAgICAgICAgICAgICAgICAgb3Blbj17ISFzdWNjZXNzTWVzc2FnZX1cbiAgICAgICAgICAgICAgICAgICAgYXV0b0hpZGVEdXJhdGlvbj17MjAwMH1cbiAgICAgICAgICAgICAgICAgICAgb25DbG9zZT17aGFuZGxlU3VjY2Vzc1NuYWNrYmFyQ2xvc2V9XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U9e3N1Y2Nlc3NNZXNzYWdlfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPEFsZXJ0IG9uQ2xvc2U9e2hhbmRsZVN1Y2Nlc3NTbmFja2JhckNsb3NlfSBzZXZlcml0eT1cInN1Y2Nlc3NcIiBzeD17eyB3aWR0aDogJzEwMCUnIH19PlxuICAgICAgICAgICAgICAgICAgICB7c3VjY2Vzc01lc3NhZ2V9XG4gICAgICAgICAgICAgICAgICAgIDwvQWxlcnQ+XG4gICAgICAgICAgICAgICAgPC9TbmFja2Jhcj5cbiAgICAgICAgICAgIDwvRGlhbG9nPlxuICAgICAgICA8Lz5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBUYXNrRGlhbG9nOyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkRpYWxvZyIsIkRpYWxvZ1RpdGxlIiwiQnV0dG9uIiwiSWNvbkJ1dHRvbiIsIlNuYWNrYmFyIiwiQWxlcnQiLCJBZGQiLCJDbG9zZSIsIlRhc2tGb3JtIiwiVGFza0RpYWxvZyIsImlzRGlhbG9nT3BlbiIsInNldElzRGlhbG9nT3BlbiIsInN1Y2Nlc3NNZXNzYWdlIiwic2V0U3VjY2Vzc01lc3NhZ2UiLCJoYW5kbGVEaWFsb2dDbG9zZSIsImhhbmRsZURpYWxvZ09wZW4iLCJ2YXJpYW50Iiwic3RhcnRJY29uIiwib25DbGljayIsIm9wZW4iLCJvbkNsb3NlIiwiYXJpYS1sYWJlbCIsInN4IiwicG9zaXRpb24iLCJyaWdodCIsInRvcCIsImNvbG9yIiwib25TdWNjZXNzIiwiYXV0b0hpZGVEdXJhdGlvbiIsImhhbmRsZVN1Y2Nlc3NTbmFja2JhckNsb3NlIiwibWVzc2FnZSIsInNldmVyaXR5Iiwid2lkdGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/TaskDialog/TaskDialog.tsx\n"));

/***/ })

});