"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/sign-in/page",{

/***/ "(app-pages-browser)/./src/app/components/SignInForm/SignInForm.tsx":
/*!******************************************************!*\
  !*** ./src/app/components/SignInForm/SignInForm.tsx ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/Button */ \"(app-pages-browser)/./node_modules/@mui/material/Button/Button.js\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Box */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Avatar */ \"(app-pages-browser)/./node_modules/@mui/material/Avatar/Avatar.js\");\n/* harmony import */ var _mui_icons_material_LockOutlined__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/icons-material/LockOutlined */ \"(app-pages-browser)/./node_modules/@mui/icons-material/LockOutlined.js\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/Typography */ \"(app-pages-browser)/./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/TextField */ \"(app-pages-browser)/./node_modules/@mui/material/TextField/TextField.js\");\n/* harmony import */ var _mui_material_Snackbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/Snackbar */ \"(app-pages-browser)/./node_modules/@mui/material/Snackbar/Snackbar.js\");\n/* harmony import */ var _mui_material_Alert__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material/Alert */ \"(app-pages-browser)/./node_modules/@mui/material/Alert/Alert.js\");\n/* harmony import */ var _app_api_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/api/api */ \"(app-pages-browser)/./src/app/api/api.ts\");\n/* harmony import */ var _app_enums__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/app/enums */ \"(app-pages-browser)/./src/app/enums.ts\");\n/* harmony import */ var _app_utils_typeguards__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/app/utils/typeguards */ \"(app-pages-browser)/./src/app/utils/typeguards.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst SignInForm = ()=>{\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [errorMessage, setErrorMessage] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const handleSnackbarClose = ()=>{\n        setErrorMessage(null);\n    };\n    const handleSubmit = async (event)=>{\n        event.preventDefault();\n        const data = new FormData(event.currentTarget);\n        const body = {\n            name: String(data.get(\"name\")),\n            password: String(data.get(\"password\"))\n        };\n        try {\n            setIsLoading(true);\n            const response = await (0,_app_api_api__WEBPACK_IMPORTED_MODULE_4__.signIn)(body);\n            localStorage.setItem(_app_enums__WEBPACK_IMPORTED_MODULE_5__.LocalStorageKeys.AccessToken, response.access_token);\n            setIsLoading(false);\n            router.replace(_app_enums__WEBPACK_IMPORTED_MODULE_5__.Routes.Index);\n        } catch (error) {\n            setIsLoading(false);\n            if (!(0,_app_utils_typeguards__WEBPACK_IMPORTED_MODULE_6__.doesErrorHaveMessage)(error)) {\n                setErrorMessage(\"An error occured\");\n                return;\n            }\n            setErrorMessage(error.message);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                sx: {\n                    display: \"flex\",\n                    flexDirection: \"column\",\n                    alignItems: \"center\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                        sx: {\n                            m: 1,\n                            bgcolor: \"secondary.main\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_LockOutlined__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                            fileName: \"/app/src/app/components/SignInForm/SignInForm.tsx\",\n                            lineNumber: 71,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/app/src/app/components/SignInForm/SignInForm.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                        component: \"h1\",\n                        variant: \"h5\",\n                        children: \"Sign in\"\n                    }, void 0, false, {\n                        fileName: \"/app/src/app/components/SignInForm/SignInForm.tsx\",\n                        lineNumber: 73,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/app/src/app/components/SignInForm/SignInForm.tsx\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                component: \"form\",\n                onSubmit: handleSubmit,\n                noValidate: true,\n                sx: {\n                    mt: 1\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                        margin: \"normal\",\n                        required: true,\n                        fullWidth: true,\n                        id: \"name\",\n                        label: \"Username\",\n                        name: \"name\",\n                        autoComplete: \"username\",\n                        autoFocus: true\n                    }, void 0, false, {\n                        fileName: \"/app/src/app/components/SignInForm/SignInForm.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                        margin: \"normal\",\n                        required: true,\n                        fullWidth: true,\n                        name: \"password\",\n                        label: \"Password\",\n                        type: \"password\",\n                        id: \"password\",\n                        autoComplete: \"current-password\"\n                    }, void 0, false, {\n                        fileName: \"/app/src/app/components/SignInForm/SignInForm.tsx\",\n                        lineNumber: 88,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                        type: \"submit\",\n                        fullWidth: true,\n                        variant: \"contained\",\n                        sx: {\n                            mt: 3,\n                            mb: 2\n                        },\n                        disabled: isLoading,\n                        children: \"Sign In\"\n                    }, void 0, false, {\n                        fileName: \"/app/src/app/components/SignInForm/SignInForm.tsx\",\n                        lineNumber: 98,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: _app_enums__WEBPACK_IMPORTED_MODULE_5__.Routes.SignUp,\n                        children: \"Don't have an account? Sign Up\"\n                    }, void 0, false, {\n                        fileName: \"/app/src/app/components/SignInForm/SignInForm.tsx\",\n                        lineNumber: 107,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/app/src/app/components/SignInForm/SignInForm.tsx\",\n                lineNumber: 77,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Snackbar__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n                open: !!errorMessage,\n                autoHideDuration: 2000,\n                onClose: handleSnackbarClose,\n                message: errorMessage,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Alert__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {\n                    onClose: handleSnackbarClose,\n                    severity: \"error\",\n                    sx: {\n                        width: \"100%\"\n                    },\n                    children: errorMessage\n                }, void 0, false, {\n                    fileName: \"/app/src/app/components/SignInForm/SignInForm.tsx\",\n                    lineNumber: 117,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/app/src/app/components/SignInForm/SignInForm.tsx\",\n                lineNumber: 111,\n                columnNumber: 11\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(SignInForm, \"tLz507V3+UW5hdYZQ2lU82tVLVc=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = SignInForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SignInForm);\nvar _c;\n$RefreshReg$(_c, \"SignInForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9TaWduSW5Gb3JtL1NpZ25JbkZvcm0udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU0QjtBQUNnQjtBQUNYO0FBRVM7QUFDTjtBQUNNO0FBQ1M7QUFDRDtBQUNGO0FBQ0Y7QUFDTjtBQUVEO0FBQ2dCO0FBQ007QUFFN0QsTUFBTWUsYUFBYTs7SUFDakIsTUFBTUMsU0FBU2YsMERBQVNBO0lBQ3hCLE1BQU0sQ0FBQ2dCLFdBQVdDLGFBQWEsR0FBR2hCLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ2lCLGNBQWNDLGdCQUFnQixHQUFHbEIsK0NBQVFBLENBQWdCO0lBRWhFLE1BQU1tQixzQkFBc0I7UUFDMUJELGdCQUFnQjtJQUNsQjtJQUVBLE1BQU1FLGVBQWUsT0FBT0M7UUFDMUJBLE1BQU1DLGNBQWM7UUFDcEIsTUFBTUMsT0FBTyxJQUFJQyxTQUFTSCxNQUFNSSxhQUFhO1FBRTdDLE1BQU1DLE9BQU87WUFDWEMsTUFBTUMsT0FBT0wsS0FBS00sR0FBRyxDQUFDO1lBQ3RCQyxVQUFVRixPQUFPTCxLQUFLTSxHQUFHLENBQUM7UUFDNUI7UUFFQSxJQUFJO1lBQ0ZiLGFBQWE7WUFFYixNQUFNZSxXQUFXLE1BQU10QixvREFBTUEsQ0FBQ2lCO1lBRTlCTSxhQUFhQyxPQUFPLENBQUN2Qix3REFBZ0JBLENBQUN3QixXQUFXLEVBQUVILFNBQVNJLFlBQVk7WUFFeEVuQixhQUFhO1lBRWJGLE9BQU9zQixPQUFPLENBQUN6Qiw4Q0FBTUEsQ0FBQzBCLEtBQUs7UUFFN0IsRUFBRSxPQUFPQyxPQUFnQjtZQUN2QnRCLGFBQWE7WUFFYixJQUFJLENBQUNKLDJFQUFvQkEsQ0FBQzBCLFFBQVE7Z0JBQ2hDcEIsZ0JBQWdCO2dCQUNoQjtZQUNGO1lBRUFBLGdCQUFnQm9CLE1BQU1DLE9BQU87UUFDL0I7SUFDRjtJQUVBLHFCQUNFOzswQkFDRSw4REFBQ3JDLHlEQUFHQTtnQkFDQXNDLElBQUk7b0JBQ0ZDLFNBQVM7b0JBQ1RDLGVBQWU7b0JBQ2ZDLFlBQVk7Z0JBQ2Q7O2tDQUVBLDhEQUFDeEMsNERBQU1BO3dCQUFDcUMsSUFBSTs0QkFBRUksR0FBRzs0QkFBR0MsU0FBUzt3QkFBaUI7a0NBQzVDLDRFQUFDekMsd0VBQVlBOzs7Ozs7Ozs7O2tDQUVmLDhEQUFDQyxpRUFBVUE7d0JBQUN5QyxXQUFVO3dCQUFLQyxTQUFRO2tDQUFLOzs7Ozs7Ozs7Ozs7MEJBSTFDLDhEQUFDN0MseURBQUdBO2dCQUFDNEMsV0FBVTtnQkFBT0UsVUFBVTVCO2dCQUFjNkIsVUFBVTtnQkFBQ1QsSUFBSTtvQkFBRVUsSUFBSTtnQkFBRTs7a0NBQ2pFLDhEQUFDNUMsZ0VBQVNBO3dCQUNSNkMsUUFBTzt3QkFDUEMsUUFBUTt3QkFDUkMsU0FBUzt3QkFDVEMsSUFBRzt3QkFDSEMsT0FBTTt3QkFDTjVCLE1BQUs7d0JBQ0w2QixjQUFhO3dCQUNiQyxTQUFTOzs7Ozs7a0NBRVgsOERBQUNuRCxnRUFBU0E7d0JBQ1I2QyxRQUFPO3dCQUNQQyxRQUFRO3dCQUNSQyxTQUFTO3dCQUNUMUIsTUFBSzt3QkFDTDRCLE9BQU07d0JBQ05HLE1BQUs7d0JBQ0xKLElBQUc7d0JBQ0hFLGNBQWE7Ozs7OztrQ0FFZiw4REFBQ3ZELDZEQUFNQTt3QkFDTHlELE1BQUs7d0JBQ0xMLFNBQVM7d0JBQ1ROLFNBQVE7d0JBQ1JQLElBQUk7NEJBQUVVLElBQUk7NEJBQUdTLElBQUk7d0JBQUU7d0JBQ25CQyxVQUFVN0M7a0NBQ1g7Ozs7OztrQ0FHRCw4REFBQ2pCLGtEQUFJQTt3QkFBQytELE1BQU1sRCw4Q0FBTUEsQ0FBQ21ELE1BQU07a0NBQUU7Ozs7Ozs7Ozs7OzswQkFJN0IsOERBQUN2RCwrREFBUUE7Z0JBQ1B3RCxNQUFNLENBQUMsQ0FBQzlDO2dCQUNSK0Msa0JBQWtCO2dCQUNsQkMsU0FBUzlDO2dCQUNUb0IsU0FBU3RCOzBCQUVULDRFQUFDVCw0REFBS0E7b0JBQUN5RCxTQUFTOUM7b0JBQXFCK0MsVUFBUztvQkFBUTFCLElBQUk7d0JBQUUyQixPQUFPO29CQUFPOzhCQUN2RWxEOzs7Ozs7Ozs7Ozs7O0FBS2Y7R0F2R01KOztRQUNXZCxzREFBU0E7OztLQURwQmM7QUF5R04sK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL1NpZ25JbkZvcm0vU2lnbkluRm9ybS50c3g/NWY1ZCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcblxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQnV0dG9uJztcbmltcG9ydCBCb3ggZnJvbSAnQG11aS9tYXRlcmlhbC9Cb3gnO1xuaW1wb3J0IEF2YXRhciBmcm9tICdAbXVpL21hdGVyaWFsL0F2YXRhcic7XG5pbXBvcnQgeyBMb2NrT3V0bGluZWQgfSBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtdWkvbWF0ZXJpYWwvVHlwb2dyYXBoeSc7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtdWkvbWF0ZXJpYWwvVGV4dEZpZWxkJztcbmltcG9ydCBTbmFja2JhciBmcm9tICdAbXVpL21hdGVyaWFsL1NuYWNrYmFyJztcbmltcG9ydCBBbGVydCBmcm9tICdAbXVpL21hdGVyaWFsL0FsZXJ0JztcblxuaW1wb3J0IHsgc2lnbkluIH0gZnJvbSAnQC9hcHAvYXBpL2FwaSc7XG5pbXBvcnQgeyBMb2NhbFN0b3JhZ2VLZXlzLCBSb3V0ZXMgfSBmcm9tICdAL2FwcC9lbnVtcyc7XG5pbXBvcnQgeyBkb2VzRXJyb3JIYXZlTWVzc2FnZSB9IGZyb20gJ0AvYXBwL3V0aWxzL3R5cGVndWFyZHMnXG5cbmNvbnN0IFNpZ25JbkZvcm0gPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZXJyb3JNZXNzYWdlLCBzZXRFcnJvck1lc3NhZ2VdID0gdXNlU3RhdGU8U3RyaW5nIHwgbnVsbD4obnVsbClcblxuICBjb25zdCBoYW5kbGVTbmFja2JhckNsb3NlID0gKCkgPT4ge1xuICAgIHNldEVycm9yTWVzc2FnZShudWxsKTtcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChldmVudDogUmVhY3QuRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGRhdGEgPSBuZXcgRm9ybURhdGEoZXZlbnQuY3VycmVudFRhcmdldCk7XG5cbiAgICBjb25zdCBib2R5ID0ge1xuICAgICAgbmFtZTogU3RyaW5nKGRhdGEuZ2V0KCduYW1lJykpLFxuICAgICAgcGFzc3dvcmQ6IFN0cmluZyhkYXRhLmdldCgncGFzc3dvcmQnKSlcbiAgICB9O1xuXG4gICAgdHJ5IHtcbiAgICAgIHNldElzTG9hZGluZyh0cnVlKTtcblxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBzaWduSW4oYm9keSk7XG5cbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKExvY2FsU3RvcmFnZUtleXMuQWNjZXNzVG9rZW4sIHJlc3BvbnNlLmFjY2Vzc190b2tlbik7XG5cbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG5cbiAgICAgIHJvdXRlci5yZXBsYWNlKFJvdXRlcy5JbmRleCk7XG5cbiAgICB9IGNhdGNoIChlcnJvcjogdW5rbm93bikge1xuICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcblxuICAgICAgaWYgKCFkb2VzRXJyb3JIYXZlTWVzc2FnZShlcnJvcikpIHtcbiAgICAgICAgc2V0RXJyb3JNZXNzYWdlKCdBbiBlcnJvciBvY2N1cmVkJyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgc2V0RXJyb3JNZXNzYWdlKGVycm9yLm1lc3NhZ2UpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxCb3hcbiAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPEF2YXRhciBzeD17eyBtOiAxLCBiZ2NvbG9yOiAnc2Vjb25kYXJ5Lm1haW4nIH19PlxuICAgICAgICAgICAgPExvY2tPdXRsaW5lZCAvPlxuICAgICAgICAgIDwvQXZhdGFyPlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD1cImgxXCIgdmFyaWFudD1cImg1XCI+XG4gICAgICAgICAgICBTaWduIGluXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8L0JveD5cbiAgICAgICAgPEJveCBjb21wb25lbnQ9XCJmb3JtXCIgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gbm9WYWxpZGF0ZSBzeD17eyBtdDogMSB9fT5cbiAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgIGlkPVwibmFtZVwiXG4gICAgICAgICAgICAgIGxhYmVsPVwiVXNlcm5hbWVcIlxuICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cInVzZXJuYW1lXCJcbiAgICAgICAgICAgICAgYXV0b0ZvY3VzXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxuICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJQYXNzd29yZFwiXG4gICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJjdXJyZW50LXBhc3N3b3JkXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgICAgIHN4PXt7IG10OiAzLCBtYjogMiB9fVxuICAgICAgICAgICAgICBkaXNhYmxlZD17aXNMb2FkaW5nfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBTaWduIEluXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e1JvdXRlcy5TaWduVXB9PlxuICAgICAgICAgICAgICAgICAgRG9uJ3QgaGF2ZSBhbiBhY2NvdW50PyBTaWduIFVwXG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPFNuYWNrYmFyXG4gICAgICAgICAgICBvcGVuPXshIWVycm9yTWVzc2FnZX1cbiAgICAgICAgICAgIGF1dG9IaWRlRHVyYXRpb249ezIwMDB9XG4gICAgICAgICAgICBvbkNsb3NlPXtoYW5kbGVTbmFja2JhckNsb3NlfVxuICAgICAgICAgICAgbWVzc2FnZT17ZXJyb3JNZXNzYWdlfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxBbGVydCBvbkNsb3NlPXtoYW5kbGVTbmFja2JhckNsb3NlfSBzZXZlcml0eT1cImVycm9yXCIgc3g9e3sgd2lkdGg6ICcxMDAlJyB9fT5cbiAgICAgICAgICAgICAge2Vycm9yTWVzc2FnZX1cbiAgICAgICAgICAgIDwvQWxlcnQ+XG4gICAgICAgICAgPC9TbmFja2Jhcj5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaWduSW5Gb3JtO1xuIl0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsIkJ1dHRvbiIsIkJveCIsIkF2YXRhciIsIkxvY2tPdXRsaW5lZCIsIlR5cG9ncmFwaHkiLCJUZXh0RmllbGQiLCJTbmFja2JhciIsIkFsZXJ0Iiwic2lnbkluIiwiTG9jYWxTdG9yYWdlS2V5cyIsIlJvdXRlcyIsImRvZXNFcnJvckhhdmVNZXNzYWdlIiwiU2lnbkluRm9ybSIsInJvdXRlciIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImVycm9yTWVzc2FnZSIsInNldEVycm9yTWVzc2FnZSIsImhhbmRsZVNuYWNrYmFyQ2xvc2UiLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZGF0YSIsIkZvcm1EYXRhIiwiY3VycmVudFRhcmdldCIsImJvZHkiLCJuYW1lIiwiU3RyaW5nIiwiZ2V0IiwicGFzc3dvcmQiLCJyZXNwb25zZSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJBY2Nlc3NUb2tlbiIsImFjY2Vzc190b2tlbiIsInJlcGxhY2UiLCJJbmRleCIsImVycm9yIiwibWVzc2FnZSIsInN4IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwibSIsImJnY29sb3IiLCJjb21wb25lbnQiLCJ2YXJpYW50Iiwib25TdWJtaXQiLCJub1ZhbGlkYXRlIiwibXQiLCJtYXJnaW4iLCJyZXF1aXJlZCIsImZ1bGxXaWR0aCIsImlkIiwibGFiZWwiLCJhdXRvQ29tcGxldGUiLCJhdXRvRm9jdXMiLCJ0eXBlIiwibWIiLCJkaXNhYmxlZCIsImhyZWYiLCJTaWduVXAiLCJvcGVuIiwiYXV0b0hpZGVEdXJhdGlvbiIsIm9uQ2xvc2UiLCJzZXZlcml0eSIsIndpZHRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/SignInForm/SignInForm.tsx\n"));

/***/ })

});