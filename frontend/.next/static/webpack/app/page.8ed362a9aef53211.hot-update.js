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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Dialog */ \"(app-pages-browser)/./node_modules/@mui/material/Dialog/Dialog.js\");\n/* harmony import */ var _mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/DialogTitle */ \"(app-pages-browser)/./node_modules/@mui/material/DialogTitle/DialogTitle.js\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Button */ \"(app-pages-browser)/./node_modules/@mui/material/Button/Button.js\");\n/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/IconButton */ \"(app-pages-browser)/./node_modules/@mui/material/IconButton/IconButton.js\");\n/* harmony import */ var _mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/Add */ \"(app-pages-browser)/./node_modules/@mui/icons-material/Add.js\");\n/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/icons-material/Close */ \"(app-pages-browser)/./node_modules/@mui/icons-material/Close.js\");\n/* harmony import */ var _TaskForm_TaskForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../TaskForm/TaskForm */ \"(app-pages-browser)/./src/app/components/TaskForm/TaskForm.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst TaskDialog = ()=>{\n    _s();\n    const [isDialogOpen, setIsDialogOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [successMessage, setSuccessMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const handleDialogClose = ()=>{\n        setIsDialogOpen(false);\n    };\n    const handleDialogOpen = ()=>{\n        setIsDialogOpen(true);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                variant: \"outlined\",\n                startIcon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, void 0, void 0),\n                onClick: handleDialogOpen,\n                children: \"Add Task\"\n            }, void 0, false, {\n                fileName: \"/app/src/app/components/TaskDialog/TaskDialog.tsx\",\n                lineNumber: 26,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                open: isDialogOpen,\n                onClose: handleDialogClose,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        children: \"Add a new task\"\n                    }, void 0, false, {\n                        fileName: \"/app/src/app/components/TaskDialog/TaskDialog.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        \"aria-label\": \"close\",\n                        onClick: handleDialogClose,\n                        sx: {\n                            position: \"absolute\",\n                            right: \"1rem\",\n                            top: \"1rem\",\n                            color: \"#bbb\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                            fileName: \"/app/src/app/components/TaskDialog/TaskDialog.tsx\",\n                            lineNumber: 48,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/app/src/app/components/TaskDialog/TaskDialog.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TaskForm_TaskForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        onSuccess: handleDialogClose\n                    }, void 0, false, {\n                        fileName: \"/app/src/app/components/TaskDialog/TaskDialog.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Snackbar, {\n                        open: !!successMessage,\n                        autoHideDuration: 2000,\n                        onClose: handleSuccessSnackbarClose,\n                        message: successMessage,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Alert, {\n                            onClose: handleSuccessSnackbarClose,\n                            severity: \"success\",\n                            sx: {\n                                width: \"100%\"\n                            },\n                            children: successMessage\n                        }, void 0, false, {\n                            fileName: \"/app/src/app/components/TaskDialog/TaskDialog.tsx\",\n                            lineNumber: 57,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/app/src/app/components/TaskDialog/TaskDialog.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/app/src/app/components/TaskDialog/TaskDialog.tsx\",\n                lineNumber: 33,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(TaskDialog, \"61P2OBboRBRo4I4aHolE0LSsRZ0=\");\n_c = TaskDialog;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TaskDialog);\nvar _c;\n$RefreshReg$(_c, \"TaskDialog\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9UYXNrRGlhbG9nL1Rhc2tEaWFsb2cudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDaUM7QUFFUztBQUNVO0FBQ1Y7QUFDUTtBQUNEO0FBQUE7QUFFTDtBQUU1QyxNQUFNUSxhQUFhOztJQUNmLE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdWLCtDQUFRQSxDQUFDO0lBQ2pELE1BQU0sQ0FBQ1csZ0JBQWdCQyxrQkFBa0IsR0FBR1osK0NBQVFBLENBQWdCO0lBRXBFLE1BQU1hLG9CQUFvQjtRQUN0QkgsZ0JBQWdCO0lBQ3BCO0lBRUEsTUFBTUksbUJBQW1CO1FBQ3JCSixnQkFBZ0I7SUFDcEI7SUFFQSxxQkFDSTs7MEJBQ0ksOERBQUNQLDREQUFNQTtnQkFDSFksU0FBUTtnQkFDUkMseUJBQVcsOERBQUNYLCtEQUFHQTtnQkFDZlksU0FBU0g7MEJBQ1o7Ozs7OzswQkFHRCw4REFBQ2IsNERBQU1BO2dCQUNIaUIsTUFBTVQ7Z0JBQ05VLFNBQVNOOztrQ0FFVCw4REFBQ1gsaUVBQVdBO2tDQUFDOzs7Ozs7a0NBQ2IsOERBQUNFLGdFQUFVQTt3QkFDUGdCLGNBQVc7d0JBQ1hILFNBQVNKO3dCQUNUUSxJQUFJOzRCQUNBQyxVQUFVOzRCQUNWQyxPQUFPOzRCQUNQQyxLQUFLOzRCQUNMQyxPQUFPO3dCQUNYO2tDQUVBLDRFQUFDbkIsaUVBQUtBOzs7Ozs7Ozs7O2tDQUVWLDhEQUFDQywwREFBUUE7d0JBQUNtQixXQUFXYjs7Ozs7O2tDQUNyQiw4REFBQ2M7d0JBQ0dULE1BQU0sQ0FBQyxDQUFDUDt3QkFDUmlCLGtCQUFrQjt3QkFDbEJULFNBQVNVO3dCQUNUQyxTQUFTbkI7a0NBRVQsNEVBQUNvQjs0QkFBTVosU0FBU1U7NEJBQTRCRyxVQUFTOzRCQUFVWCxJQUFJO2dDQUFFWSxPQUFPOzRCQUFPO3NDQUNsRnRCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXJCO0dBcERNSDtLQUFBQTtBQXNETiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvVGFza0RpYWxvZy9UYXNrRGlhbG9nLnRzeD9kMzYxIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBEaWFsb2cgZnJvbSAnQG11aS9tYXRlcmlhbC9EaWFsb2cnO1xuaW1wb3J0IERpYWxvZ1RpdGxlIGZyb20gJ0BtdWkvbWF0ZXJpYWwvRGlhbG9nVGl0bGUnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbXVpL21hdGVyaWFsL0J1dHRvbic7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbXVpL21hdGVyaWFsL0ljb25CdXR0b24nO1xuaW1wb3J0IHsgQWRkLCBDbG9zZSB9IGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwnO1xuXG5pbXBvcnQgVGFza0Zvcm0gZnJvbSAnLi4vVGFza0Zvcm0vVGFza0Zvcm0nO1xuXG5jb25zdCBUYXNrRGlhbG9nID0gKCkgPT4ge1xuICAgIGNvbnN0IFtpc0RpYWxvZ09wZW4sIHNldElzRGlhbG9nT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3N1Y2Nlc3NNZXNzYWdlLCBzZXRTdWNjZXNzTWVzc2FnZV0gPSB1c2VTdGF0ZTxTdHJpbmcgfCBudWxsPihudWxsKVxuXG4gICAgY29uc3QgaGFuZGxlRGlhbG9nQ2xvc2UgPSAoKSA9PiB7XG4gICAgICAgIHNldElzRGlhbG9nT3BlbihmYWxzZSk7XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlRGlhbG9nT3BlbiA9ICgpID0+IHtcbiAgICAgICAgc2V0SXNEaWFsb2dPcGVuKHRydWUpO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICBzdGFydEljb249ezxBZGQgLz59XG4gICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlRGlhbG9nT3Blbn1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBBZGQgVGFza1xuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8RGlhbG9nXG4gICAgICAgICAgICAgICAgb3Blbj17aXNEaWFsb2dPcGVufVxuICAgICAgICAgICAgICAgIG9uQ2xvc2U9e2hhbmRsZURpYWxvZ0Nsb3NlfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxEaWFsb2dUaXRsZT5BZGQgYSBuZXcgdGFzazwvRGlhbG9nVGl0bGU+XG4gICAgICAgICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cImNsb3NlXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlRGlhbG9nQ2xvc2V9XG4gICAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAnMXJlbScsXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6ICcxcmVtJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnI2JiYicsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8Q2xvc2UgLz5cbiAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICAgICAgICAgPFRhc2tGb3JtIG9uU3VjY2Vzcz17aGFuZGxlRGlhbG9nQ2xvc2V9IC8+XG4gICAgICAgICAgICAgICAgPFNuYWNrYmFyXG4gICAgICAgICAgICAgICAgICAgIG9wZW49eyEhc3VjY2Vzc01lc3NhZ2V9XG4gICAgICAgICAgICAgICAgICAgIGF1dG9IaWRlRHVyYXRpb249ezIwMDB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xvc2U9e2hhbmRsZVN1Y2Nlc3NTbmFja2JhckNsb3NlfVxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlPXtzdWNjZXNzTWVzc2FnZX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxBbGVydCBvbkNsb3NlPXtoYW5kbGVTdWNjZXNzU25hY2tiYXJDbG9zZX0gc2V2ZXJpdHk9XCJzdWNjZXNzXCIgc3g9e3sgd2lkdGg6ICcxMDAlJyB9fT5cbiAgICAgICAgICAgICAgICAgICAge3N1Y2Nlc3NNZXNzYWdlfVxuICAgICAgICAgICAgICAgICAgICA8L0FsZXJ0PlxuICAgICAgICAgICAgICAgIDwvU25hY2tiYXI+XG4gICAgICAgICAgICA8L0RpYWxvZz5cbiAgICAgICAgPC8+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFza0RpYWxvZzsiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJEaWFsb2ciLCJEaWFsb2dUaXRsZSIsIkJ1dHRvbiIsIkljb25CdXR0b24iLCJBZGQiLCJDbG9zZSIsIlRhc2tGb3JtIiwiVGFza0RpYWxvZyIsImlzRGlhbG9nT3BlbiIsInNldElzRGlhbG9nT3BlbiIsInN1Y2Nlc3NNZXNzYWdlIiwic2V0U3VjY2Vzc01lc3NhZ2UiLCJoYW5kbGVEaWFsb2dDbG9zZSIsImhhbmRsZURpYWxvZ09wZW4iLCJ2YXJpYW50Iiwic3RhcnRJY29uIiwib25DbGljayIsIm9wZW4iLCJvbkNsb3NlIiwiYXJpYS1sYWJlbCIsInN4IiwicG9zaXRpb24iLCJyaWdodCIsInRvcCIsImNvbG9yIiwib25TdWNjZXNzIiwiU25hY2tiYXIiLCJhdXRvSGlkZUR1cmF0aW9uIiwiaGFuZGxlU3VjY2Vzc1NuYWNrYmFyQ2xvc2UiLCJtZXNzYWdlIiwiQWxlcnQiLCJzZXZlcml0eSIsIndpZHRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/TaskDialog/TaskDialog.tsx\n"));

/***/ })

});