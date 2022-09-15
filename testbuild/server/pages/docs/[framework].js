(() => {
var exports = {};
exports.id = 677;
exports.ids = [677];
exports.modules = {

/***/ 1542:
/***/ ((module) => {

// Exports
module.exports = {
	"page": "FrameworkPage_page__MVaO0",
	"content": "FrameworkPage_content__ZZys2",
	"listItem": "FrameworkPage_listItem__xA0KP",
	"link": "FrameworkPage_link__wDkc0",
	"downloadLink": "FrameworkPage_downloadLink__GE98d"
};


/***/ }),

/***/ 9896:
/***/ ((module) => {

// Exports
module.exports = {
	"spec": "Spec_spec__arTRg",
	"title": "Spec_title__b9TIJ",
	"indent": "Spec_indent__xw4hA",
	"line": "Spec_line__ev_rH",
	"description": "Spec_description___mqRU",
	"dependencies": "Spec_dependencies__aIXwH",
	"link": "Spec_link__mg_4a"
};


/***/ }),

/***/ 605:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _framework_),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./components/pages/docs/FrameworkPage.module.css
var FrameworkPage_module = __webpack_require__(1542);
var FrameworkPage_module_default = /*#__PURE__*/__webpack_require__.n(FrameworkPage_module);
// EXTERNAL MODULE: ./components/pages/docs/SideBar.js
var SideBar = __webpack_require__(9092);
// EXTERNAL MODULE: ./components/pages/docs/Spec.module.css
var Spec_module = __webpack_require__(9896);
var Spec_module_default = /*#__PURE__*/__webpack_require__.n(Spec_module);
;// CONCATENATED MODULE: ./components/pages/docs/Spec.js
// import Link from "next/link";


const Spec = (props)=>{
    const spec = props.spec;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Spec_module_default()).spec,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                className: (Spec_module_default()).title,
                children: spec.fullName
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Spec_module_default()).indent,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: (Spec_module_default()).line,
                        children: "-"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: (Spec_module_default()).description,
                        children: spec.description.full
                    })
                ]
            }),
            spec.description.dependencies != "" && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: (Spec_module_default()).dependencies,
                children: spec.description.dependencies
            }),
            spec.description.links.length != 0 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Spec_module_default()).linkList,
                children: spec.description.links.map((link, i)=>/*#__PURE__*/ jsx_runtime_.jsx("a", {
                        className: (Spec_module_default()).link,
                        href: link.link,
                        children: link.title
                    }, i))
            })
        ]
    });
};
/* harmony default export */ const docs_Spec = (Spec);

;// CONCATENATED MODULE: ./components/pages/docs/FrameworkPage.js





const FrameworkPage = (props)=>{
    const framework = props.framework;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (FrameworkPage_module_default()).page,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(SideBar/* default */.Z, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (FrameworkPage_module_default()).content,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                        className: (FrameworkPage_module_default()).title,
                        children: [
                            "The ",
                            framework.fullName,
                            " Starter Project"
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: framework.description
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (FrameworkPage_module_default()).list,
                        children: framework.descriptionLinks.map((descLink, i)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (FrameworkPage_module_default()).listItem,
                                children: [
                                    "* ",
                                    descLink.title,
                                    " -",
                                    " ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: (FrameworkPage_module_default()).link,
                                        href: descLink.link,
                                        children: descLink.label
                                    })
                                ]
                            }, i))
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/select",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                            className: (FrameworkPage_module_default()).downloadLink,
                            children: [
                                "Choose your ",
                                framework.fullName,
                                " setup"
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                        children: [
                            framework.name,
                            " starter setups to choose from:"
                        ]
                    }),
                    framework.setups.map((spec, i)=>/*#__PURE__*/ jsx_runtime_.jsx(docs_Spec, {
                            end: framework.end,
                            fw: framework.shortName,
                            spec: spec
                        }, i))
                ]
            })
        ]
    });
};
/* harmony default export */ const docs_FrameworkPage = (FrameworkPage);

// EXTERNAL MODULE: ./data/frameworkData.js
var frameworkData = __webpack_require__(9100);
;// CONCATENATED MODULE: ./pages/docs/[framework].js



const Framework = (props)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(docs_FrameworkPage, {
        ...props
    });
};
const getStaticPaths = ()=>{
    const availableFws = frameworkData/* frameworkData.filter */.q.filter((fw)=>fw.available);
    const paths = availableFws.map((fw)=>({
            params: {
                framework: fw.shortName
            }
        }));
    return {
        paths,
        fallback: false
    };
};
const getStaticProps = async (context)=>{
    const { params  } = context;
    const framework = frameworkData/* frameworkData.filter */.q.filter((fw)=>fw.shortName == params.framework)[0];
    return {
        props: {
            framework
        }
    };
};
/* harmony default export */ const _framework_ = (Framework);


/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [952,664,100,92], () => (__webpack_exec__(605)));
module.exports = __webpack_exports__;

})();