exports.id = 92;
exports.ids = [92];
exports.modules = {

/***/ 9216:
/***/ ((module) => {

// Exports
module.exports = {
	"sidebar": "SideBar_sidebar__904V_",
	"listLvl1": "SideBar_listLvl1__HC5eJ",
	"listLvl2": "SideBar_listLvl2__u_bX9",
	"title": "SideBar_title__Hojoa",
	"subTitle": "SideBar_subTitle__r41gd",
	"listItem": "SideBar_listItem__BOjxb",
	"active": "SideBar_active__X8AdW",
	"comingSoon": "SideBar_comingSoon__iIRT_",
	"csSign": "SideBar_csSign__yElEB"
};


/***/ }),

/***/ 9092:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _SideBar_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9216);
/* harmony import */ var _SideBar_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_SideBar_module_css__WEBPACK_IMPORTED_MODULE_3__);




const SideBar = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_SideBar_module_css__WEBPACK_IMPORTED_MODULE_3___default().sidebar),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                className: (_SideBar_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),
                children: "Front end frameworks"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_SideBar_module_css__WEBPACK_IMPORTED_MODULE_3___default().listLvl1),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: `${(_SideBar_module_css__WEBPACK_IMPORTED_MODULE_3___default().listItem)} ${router.query.framework == "react" && (_SideBar_module_css__WEBPACK_IMPORTED_MODULE_3___default().active)}`,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                "- ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    href: "/docs/react",
                                    children: "Reactjs"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: `${(_SideBar_module_css__WEBPACK_IMPORTED_MODULE_3___default().listItem)} ${router.query.framework == "angular" && (_SideBar_module_css__WEBPACK_IMPORTED_MODULE_3___default().active)}`,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_SideBar_module_css__WEBPACK_IMPORTED_MODULE_3___default().comingSoon),
                                children: "- AngularJs"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_SideBar_module_css__WEBPACK_IMPORTED_MODULE_3___default().csSign),
                                children: "coming soon"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                className: (_SideBar_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),
                children: "Back end frameworks"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_SideBar_module_css__WEBPACK_IMPORTED_MODULE_3___default().listLvl1),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                        className: (_SideBar_module_css__WEBPACK_IMPORTED_MODULE_3___default().subTitle),
                        children: "Nodejs"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_SideBar_module_css__WEBPACK_IMPORTED_MODULE_3___default().listLvl2),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: `${(_SideBar_module_css__WEBPACK_IMPORTED_MODULE_3___default().listItem)} ${router.query.framework == "express" && (_SideBar_module_css__WEBPACK_IMPORTED_MODULE_3___default().active)}`,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    children: [
                                        "- ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                            href: "/docs/express",
                                            children: "ExpressJs"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: `${(_SideBar_module_css__WEBPACK_IMPORTED_MODULE_3___default().listItem)} ${router.query.framework == "koa" && (_SideBar_module_css__WEBPACK_IMPORTED_MODULE_3___default().active)}`,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_SideBar_module_css__WEBPACK_IMPORTED_MODULE_3___default().comingSoon),
                                        children: "- Koa"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_SideBar_module_css__WEBPACK_IMPORTED_MODULE_3___default().csSign),
                                        children: "coming soon"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                        className: (_SideBar_module_css__WEBPACK_IMPORTED_MODULE_3___default().subTitle) + " " + (_SideBar_module_css__WEBPACK_IMPORTED_MODULE_3___default().comingSoon),
                        children: "Python"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_SideBar_module_css__WEBPACK_IMPORTED_MODULE_3___default().csSign),
                        children: "coming soon"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                className: (_SideBar_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),
                children: "Both end frameworks"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_SideBar_module_css__WEBPACK_IMPORTED_MODULE_3___default().listLvl1),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: `${(_SideBar_module_css__WEBPACK_IMPORTED_MODULE_3___default().listItem)} ${router.query.framework == "next" && (_SideBar_module_css__WEBPACK_IMPORTED_MODULE_3___default().active)}`,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                "- ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    href: "/docs/next",
                                    children: "Nextjs"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: `${(_SideBar_module_css__WEBPACK_IMPORTED_MODULE_3___default().listItem)} ${router.query.framework == "django" && (_SideBar_module_css__WEBPACK_IMPORTED_MODULE_3___default().active)}`,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_SideBar_module_css__WEBPACK_IMPORTED_MODULE_3___default().comingSoon),
                                children: "- Django"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_SideBar_module_css__WEBPACK_IMPORTED_MODULE_3___default().csSign),
                                children: "coming soon"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {})
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SideBar);


/***/ })

};
;