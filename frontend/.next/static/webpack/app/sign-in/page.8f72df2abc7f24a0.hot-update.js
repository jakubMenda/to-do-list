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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/Button */ \"(app-pages-browser)/./node_modules/@mui/material/Button/Button.js\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Box */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Avatar */ \"(app-pages-browser)/./node_modules/@mui/material/Avatar/Avatar.js\");\n/* harmony import */ var _mui_icons_material_LockOutlined__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/icons-material/LockOutlined */ \"(app-pages-browser)/./node_modules/@mui/icons-material/LockOutlined.js\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/Typography */ \"(app-pages-browser)/./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/TextField */ \"(app-pages-browser)/./node_modules/@mui/material/TextField/TextField.js\");\n/* harmony import */ var _mui_material_Snackbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/Snackbar */ \"(app-pages-browser)/./node_modules/@mui/material/Snackbar/Snackbar.js\");\n/* harmony import */ var _mui_material_Alert__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material/Alert */ \"(app-pages-browser)/./node_modules/@mui/material/Alert/Alert.js\");\n/* harmony import */ var _app_api_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/api/api */ \"(app-pages-browser)/./src/app/api/api.ts\");\n/* harmony import */ var _app_enums__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/app/enums */ \"(app-pages-browser)/./src/app/enums.ts\");\n/* harmony import */ var _app_utils_typeguards__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/app/utils/typeguards */ \"(app-pages-browser)/./src/app/utils/typeguards.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst SignInForm = ()=>{\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [errorMessage, setErrorMessage] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const handleSnackbarClose = ()=>{\n        setErrorMessage(null);\n    };\n    const handleSubmit = async (event)=>{\n        event.preventDefault();\n        const data = new FormData(event.currentTarget);\n        const body = {\n            name: String(data.get(\"name\")),\n            password: String(data.get(\"password\"))\n        };\n        try {\n            setIsLoading(true);\n            const response = await (0,_app_api_api__WEBPACK_IMPORTED_MODULE_4__.signIn)(body);\n            localStorage.setItem(_app_enums__WEBPACK_IMPORTED_MODULE_5__.LocalStorageKeys.AccessToken, response.access_token);\n            setIsLoading(false);\n            router.replace(_app_enums__WEBPACK_IMPORTED_MODULE_5__.Routes.Index);\n        } catch (error) {\n            setIsLoading(false);\n            if (!(0,_app_utils_typeguards__WEBPACK_IMPORTED_MODULE_6__.doesErrorHaveMessage)(error)) {\n                setErrorMessage(\"An error occured\");\n                return;\n            }\n            setErrorMessage(error.message);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                sx: {\n                    display: \"flex\",\n                    flexDirection: \"column\",\n                    alignItems: \"center\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                        sx: {\n                            m: 1,\n                            bgcolor: \"secondary.main\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_LockOutlined__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                            fileName: \"/app/src/app/components/SignInForm/SignInForm.tsx\",\n                            lineNumber: 71,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/app/src/app/components/SignInForm/SignInForm.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                        component: \"h1\",\n                        variant: \"h5\",\n                        children: \"Sign in\"\n                    }, void 0, false, {\n                        fileName: \"/app/src/app/components/SignInForm/SignInForm.tsx\",\n                        lineNumber: 73,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/app/src/app/components/SignInForm/SignInForm.tsx\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                component: \"form\",\n                onSubmit: handleSubmit,\n                noValidate: true,\n                sx: {\n                    mt: 1\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                        margin: \"normal\",\n                        required: true,\n                        fullWidth: true,\n                        id: \"name\",\n                        label: \"Username\",\n                        name: \"name\",\n                        autoComplete: \"username\",\n                        autoFocus: true\n                    }, void 0, false, {\n                        fileName: \"/app/src/app/components/SignInForm/SignInForm.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                        margin: \"normal\",\n                        required: true,\n                        fullWidth: true,\n                        name: \"password\",\n                        label: \"Password\",\n                        type: \"password\",\n                        id: \"password\",\n                        autoComplete: \"current-password\"\n                    }, void 0, false, {\n                        fileName: \"/app/src/app/components/SignInForm/SignInForm.tsx\",\n                        lineNumber: 88,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                        type: \"submit\",\n                        fullWidth: true,\n                        variant: \"contained\",\n                        sx: {\n                            mt: 3,\n                            mb: 2\n                        },\n                        children: \"Sign In\"\n                    }, void 0, false, {\n                        fileName: \"/app/src/app/components/SignInForm/SignInForm.tsx\",\n                        lineNumber: 98,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: _app_enums__WEBPACK_IMPORTED_MODULE_5__.Routes.SignUp,\n                        children: \"Don't have an account? Sign Up\"\n                    }, void 0, false, {\n                        fileName: \"/app/src/app/components/SignInForm/SignInForm.tsx\",\n                        lineNumber: 106,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/app/src/app/components/SignInForm/SignInForm.tsx\",\n                lineNumber: 77,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Snackbar__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n                open: !!errorMessage,\n                autoHideDuration: 2000,\n                onClose: handleSnackbarClose,\n                message: errorMessage,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Alert__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {\n                    onClose: handleSnackbarClose,\n                    severity: \"error\",\n                    sx: {\n                        width: \"100%\"\n                    },\n                    children: errorMessage\n                }, void 0, false, {\n                    fileName: \"/app/src/app/components/SignInForm/SignInForm.tsx\",\n                    lineNumber: 116,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/app/src/app/components/SignInForm/SignInForm.tsx\",\n                lineNumber: 110,\n                columnNumber: 11\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(SignInForm, \"tLz507V3+UW5hdYZQ2lU82tVLVc=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = SignInForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SignInForm);\nvar _c;\n$RefreshReg$(_c, \"SignInForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9TaWduSW5Gb3JtL1NpZ25JbkZvcm0udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU0QjtBQUNnQjtBQUNYO0FBRVM7QUFDTjtBQUNNO0FBQ1M7QUFDRDtBQUNGO0FBQ0Y7QUFDTjtBQUVEO0FBQ2dCO0FBQ007QUFFN0QsTUFBTWUsYUFBYTs7SUFDakIsTUFBTUMsU0FBU2YsMERBQVNBO0lBQ3hCLE1BQU0sQ0FBQ2dCLFdBQVdDLGFBQWEsR0FBR2hCLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ2lCLGNBQWNDLGdCQUFnQixHQUFHbEIsK0NBQVFBLENBQWdCO0lBRWhFLE1BQU1tQixzQkFBc0I7UUFDMUJELGdCQUFnQjtJQUNsQjtJQUVBLE1BQU1FLGVBQWUsT0FBT0M7UUFDMUJBLE1BQU1DLGNBQWM7UUFDcEIsTUFBTUMsT0FBTyxJQUFJQyxTQUFTSCxNQUFNSSxhQUFhO1FBRTdDLE1BQU1DLE9BQU87WUFDWEMsTUFBTUMsT0FBT0wsS0FBS00sR0FBRyxDQUFDO1lBQ3RCQyxVQUFVRixPQUFPTCxLQUFLTSxHQUFHLENBQUM7UUFDNUI7UUFFQSxJQUFJO1lBQ0ZiLGFBQWE7WUFFYixNQUFNZSxXQUFXLE1BQU10QixvREFBTUEsQ0FBQ2lCO1lBRTlCTSxhQUFhQyxPQUFPLENBQUN2Qix3REFBZ0JBLENBQUN3QixXQUFXLEVBQUVILFNBQVNJLFlBQVk7WUFFeEVuQixhQUFhO1lBRWJGLE9BQU9zQixPQUFPLENBQUN6Qiw4Q0FBTUEsQ0FBQzBCLEtBQUs7UUFFN0IsRUFBRSxPQUFPQyxPQUFnQjtZQUN2QnRCLGFBQWE7WUFFYixJQUFJLENBQUNKLDJFQUFvQkEsQ0FBQzBCLFFBQVE7Z0JBQ2hDcEIsZ0JBQWdCO2dCQUNoQjtZQUNGO1lBRUFBLGdCQUFnQm9CLE1BQU1DLE9BQU87UUFDL0I7SUFDRjtJQUVBLHFCQUNFOzswQkFDRSw4REFBQ3JDLHlEQUFHQTtnQkFDQXNDLElBQUk7b0JBQ0ZDLFNBQVM7b0JBQ1RDLGVBQWU7b0JBQ2ZDLFlBQVk7Z0JBQ2Q7O2tDQUVBLDhEQUFDeEMsNERBQU1BO3dCQUFDcUMsSUFBSTs0QkFBRUksR0FBRzs0QkFBR0MsU0FBUzt3QkFBaUI7a0NBQzVDLDRFQUFDekMsd0VBQVlBOzs7Ozs7Ozs7O2tDQUVmLDhEQUFDQyxpRUFBVUE7d0JBQUN5QyxXQUFVO3dCQUFLQyxTQUFRO2tDQUFLOzs7Ozs7Ozs7Ozs7MEJBSTFDLDhEQUFDN0MseURBQUdBO2dCQUFDNEMsV0FBVTtnQkFBT0UsVUFBVTVCO2dCQUFjNkIsVUFBVTtnQkFBQ1QsSUFBSTtvQkFBRVUsSUFBSTtnQkFBRTs7a0NBQ2pFLDhEQUFDNUMsZ0VBQVNBO3dCQUNSNkMsUUFBTzt3QkFDUEMsUUFBUTt3QkFDUkMsU0FBUzt3QkFDVEMsSUFBRzt3QkFDSEMsT0FBTTt3QkFDTjVCLE1BQUs7d0JBQ0w2QixjQUFhO3dCQUNiQyxTQUFTOzs7Ozs7a0NBRVgsOERBQUNuRCxnRUFBU0E7d0JBQ1I2QyxRQUFPO3dCQUNQQyxRQUFRO3dCQUNSQyxTQUFTO3dCQUNUMUIsTUFBSzt3QkFDTDRCLE9BQU07d0JBQ05HLE1BQUs7d0JBQ0xKLElBQUc7d0JBQ0hFLGNBQWE7Ozs7OztrQ0FFZiw4REFBQ3ZELDZEQUFNQTt3QkFDTHlELE1BQUs7d0JBQ0xMLFNBQVM7d0JBQ1ROLFNBQVE7d0JBQ1JQLElBQUk7NEJBQUVVLElBQUk7NEJBQUdTLElBQUk7d0JBQUU7a0NBQ3BCOzs7Ozs7a0NBR0QsOERBQUM3RCxrREFBSUE7d0JBQUM4RCxNQUFNakQsOENBQU1BLENBQUNrRCxNQUFNO2tDQUFFOzs7Ozs7Ozs7Ozs7MEJBSTdCLDhEQUFDdEQsK0RBQVFBO2dCQUNQdUQsTUFBTSxDQUFDLENBQUM3QztnQkFDUjhDLGtCQUFrQjtnQkFDbEJDLFNBQVM3QztnQkFDVG9CLFNBQVN0QjswQkFFVCw0RUFBQ1QsNERBQUtBO29CQUFDd0QsU0FBUzdDO29CQUFxQjhDLFVBQVM7b0JBQVF6QixJQUFJO3dCQUFFMEIsT0FBTztvQkFBTzs4QkFDdkVqRDs7Ozs7Ozs7Ozs7OztBQUtmO0dBdEdNSjs7UUFDV2Qsc0RBQVNBOzs7S0FEcEJjO0FBd0dOLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9TaWduSW5Gb3JtL1NpZ25JbkZvcm0udHN4PzVmNWQiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5cbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvbmF2aWdhdGlvbic7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbXVpL21hdGVyaWFsL0J1dHRvbic7XG5pbXBvcnQgQm94IGZyb20gJ0BtdWkvbWF0ZXJpYWwvQm94JztcbmltcG9ydCBBdmF0YXIgZnJvbSAnQG11aS9tYXRlcmlhbC9BdmF0YXInO1xuaW1wb3J0IHsgTG9ja091dGxpbmVkIH0gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbCc7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHknO1xuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbXVpL21hdGVyaWFsL1RleHRGaWVsZCc7XG5pbXBvcnQgU25hY2tiYXIgZnJvbSAnQG11aS9tYXRlcmlhbC9TbmFja2Jhcic7XG5pbXBvcnQgQWxlcnQgZnJvbSAnQG11aS9tYXRlcmlhbC9BbGVydCc7XG5cbmltcG9ydCB7IHNpZ25JbiB9IGZyb20gJ0AvYXBwL2FwaS9hcGknO1xuaW1wb3J0IHsgTG9jYWxTdG9yYWdlS2V5cywgUm91dGVzIH0gZnJvbSAnQC9hcHAvZW51bXMnO1xuaW1wb3J0IHsgZG9lc0Vycm9ySGF2ZU1lc3NhZ2UgfSBmcm9tICdAL2FwcC91dGlscy90eXBlZ3VhcmRzJ1xuXG5jb25zdCBTaWduSW5Gb3JtID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2Vycm9yTWVzc2FnZSwgc2V0RXJyb3JNZXNzYWdlXSA9IHVzZVN0YXRlPFN0cmluZyB8IG51bGw+KG51bGwpXG5cbiAgY29uc3QgaGFuZGxlU25hY2tiYXJDbG9zZSA9ICgpID0+IHtcbiAgICBzZXRFcnJvck1lc3NhZ2UobnVsbCk7XG4gIH1cblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZXZlbnQ6IFJlYWN0LkZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuXG4gICAgY29uc3QgYm9keSA9IHtcbiAgICAgIG5hbWU6IFN0cmluZyhkYXRhLmdldCgnbmFtZScpKSxcbiAgICAgIHBhc3N3b3JkOiBTdHJpbmcoZGF0YS5nZXQoJ3Bhc3N3b3JkJykpXG4gICAgfTtcblxuICAgIHRyeSB7XG4gICAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XG5cbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgc2lnbkluKGJvZHkpO1xuXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShMb2NhbFN0b3JhZ2VLZXlzLkFjY2Vzc1Rva2VuLCByZXNwb25zZS5hY2Nlc3NfdG9rZW4pO1xuXG4gICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuXG4gICAgICByb3V0ZXIucmVwbGFjZShSb3V0ZXMuSW5kZXgpO1xuXG4gICAgfSBjYXRjaCAoZXJyb3I6IHVua25vd24pIHtcbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgICBcbiAgICAgIGlmICghZG9lc0Vycm9ySGF2ZU1lc3NhZ2UoZXJyb3IpKSB7XG4gICAgICAgIHNldEVycm9yTWVzc2FnZSgnQW4gZXJyb3Igb2NjdXJlZCcpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHNldEVycm9yTWVzc2FnZShlcnJvci5tZXNzYWdlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Qm94XG4gICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxBdmF0YXIgc3g9e3sgbTogMSwgYmdjb2xvcjogJ3NlY29uZGFyeS5tYWluJyB9fT5cbiAgICAgICAgICAgIDxMb2NrT3V0bGluZWQgLz5cbiAgICAgICAgICA8L0F2YXRhcj5cbiAgICAgICAgICA8VHlwb2dyYXBoeSBjb21wb25lbnQ9XCJoMVwiIHZhcmlhbnQ9XCJoNVwiPlxuICAgICAgICAgICAgU2lnbiBpblxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIDxCb3ggY29tcG9uZW50PVwiZm9ybVwiIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IG5vVmFsaWRhdGUgc3g9e3sgbXQ6IDEgfX0+XG4gICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXG4gICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICBpZD1cIm5hbWVcIlxuICAgICAgICAgICAgICBsYWJlbD1cIlVzZXJuYW1lXCJcbiAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJ1c2VybmFtZVwiXG4gICAgICAgICAgICAgIGF1dG9Gb2N1c1xuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgIGxhYmVsPVwiUGFzc3dvcmRcIlxuICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiY3VycmVudC1wYXNzd29yZFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICAgICAgICBzeD17eyBtdDogMywgbWI6IDIgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgU2lnbiBJblxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8TGluayBocmVmPXtSb3V0ZXMuU2lnblVwfT5cbiAgICAgICAgICAgICAgICAgIERvbid0IGhhdmUgYW4gYWNjb3VudD8gU2lnbiBVcFxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDxTbmFja2JhclxuICAgICAgICAgICAgb3Blbj17ISFlcnJvck1lc3NhZ2V9XG4gICAgICAgICAgICBhdXRvSGlkZUR1cmF0aW9uPXsyMDAwfVxuICAgICAgICAgICAgb25DbG9zZT17aGFuZGxlU25hY2tiYXJDbG9zZX1cbiAgICAgICAgICAgIG1lc3NhZ2U9e2Vycm9yTWVzc2FnZX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8QWxlcnQgb25DbG9zZT17aGFuZGxlU25hY2tiYXJDbG9zZX0gc2V2ZXJpdHk9XCJlcnJvclwiIHN4PXt7IHdpZHRoOiAnMTAwJScgfX0+XG4gICAgICAgICAgICAgIHtlcnJvck1lc3NhZ2V9XG4gICAgICAgICAgICA8L0FsZXJ0PlxuICAgICAgICAgIDwvU25hY2tiYXI+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2lnbkluRm9ybTtcbiJdLCJuYW1lcyI6WyJMaW5rIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJCdXR0b24iLCJCb3giLCJBdmF0YXIiLCJMb2NrT3V0bGluZWQiLCJUeXBvZ3JhcGh5IiwiVGV4dEZpZWxkIiwiU25hY2tiYXIiLCJBbGVydCIsInNpZ25JbiIsIkxvY2FsU3RvcmFnZUtleXMiLCJSb3V0ZXMiLCJkb2VzRXJyb3JIYXZlTWVzc2FnZSIsIlNpZ25JbkZvcm0iLCJyb3V0ZXIiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJlcnJvck1lc3NhZ2UiLCJzZXRFcnJvck1lc3NhZ2UiLCJoYW5kbGVTbmFja2JhckNsb3NlIiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImRhdGEiLCJGb3JtRGF0YSIsImN1cnJlbnRUYXJnZXQiLCJib2R5IiwibmFtZSIsIlN0cmluZyIsImdldCIsInBhc3N3b3JkIiwicmVzcG9uc2UiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiQWNjZXNzVG9rZW4iLCJhY2Nlc3NfdG9rZW4iLCJyZXBsYWNlIiwiSW5kZXgiLCJlcnJvciIsIm1lc3NhZ2UiLCJzeCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsIm0iLCJiZ2NvbG9yIiwiY29tcG9uZW50IiwidmFyaWFudCIsIm9uU3VibWl0Iiwibm9WYWxpZGF0ZSIsIm10IiwibWFyZ2luIiwicmVxdWlyZWQiLCJmdWxsV2lkdGgiLCJpZCIsImxhYmVsIiwiYXV0b0NvbXBsZXRlIiwiYXV0b0ZvY3VzIiwidHlwZSIsIm1iIiwiaHJlZiIsIlNpZ25VcCIsIm9wZW4iLCJhdXRvSGlkZUR1cmF0aW9uIiwib25DbG9zZSIsInNldmVyaXR5Iiwid2lkdGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/SignInForm/SignInForm.tsx\n"));

/***/ })

});