(() => {
var exports = {};
exports.id = 360;
exports.ids = [360];
exports.modules = {

/***/ 7948:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "EndSelect_container__8Juaj",
	"title": "EndSelect_title__fRkHX",
	"subtitle": "EndSelect_subtitle__UpSbS",
	"notselected": "EndSelect_notselected__r_r8_",
	"tree": "EndSelect_tree__tj_RF",
	"subtree": "EndSelect_subtree__zl3B_",
	"option": "EndSelect_option__RUtM7",
	"button": "EndSelect_button__3liiT",
	"selected": "EndSelect_selected__wGZ2C",
	"description": "EndSelect_description__ShAeF"
};


/***/ }),

/***/ 4539:
/***/ ((module) => {

// Exports
module.exports = {
	"page": "SelectPage_page__T_r4g",
	"label": "SelectPage_label__U1LZK",
	"downloadLink": "SelectPage_downloadLink__w_41U",
	"explanation": "SelectPage_explanation__cNDoI",
	"important": "SelectPage_important__oc_rs",
	"image": "SelectPage_image__mUtYv",
	"explanationP": "SelectPage_explanationP__B1W_2"
};


/***/ }),

/***/ 3373:
/***/ ((module) => {

// Exports
module.exports = {
	"arrows": "Arrows_arrows__Rnvrq",
	"arrow": "Arrows_arrow__kYnDk",
	"a1": "Arrows_a1__U6AE4",
	"a2": "Arrows_a2__lVLSi",
	"a3": "Arrows_a3__xsO5r",
	"a4": "Arrows_a4__QDpZM",
	"a5": "Arrows_a5__N20iB",
	"notselected": "Arrows_notselected__dkc4O"
};


/***/ }),

/***/ 7417:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Description_container__Mp_u5",
	"unwide": "Description_unwide__pfhX5",
	"showBorder": "Description_showBorder__ycn_W",
	"description": "Description_description___idYL",
	"list": "Description_list__qZaNA",
	"listEl": "Description_listEl__DYmnB",
	"link": "Description_link__wunsM"
};


/***/ }),

/***/ 987:
/***/ ((module) => {

// Exports
module.exports = {
	"scroll": "Scroll_scroll__csKJq",
	"wide": "Scroll_wide__HCkJA",
	"disclaimer": "Scroll_disclaimer__rTcrO"
};


/***/ }),

/***/ 9389:
/***/ ((module) => {

// Exports
module.exports = {
	"option": "ScrollOption_option__0V2I8",
	"unavailable": "ScrollOption_unavailable__mvb2N",
	"selected": "ScrollOption_selected__IZ4Kk"
};


/***/ }),

/***/ 2181:
/***/ ((module) => {

// Exports
module.exports = {
	"selection": "Selection_selection__D6f5c",
	"row": "Selection_row__nmGEj",
	"title": "Selection_title__0lSVp"
};


/***/ }),

/***/ 7252:
/***/ ((module) => {

// Exports
module.exports = {
	"end": "EndStyles_end__XIhh5",
	"title": "EndStyles_title__Ux9Oc"
};


/***/ }),

/***/ 6014:
/***/ ((module) => {

// Exports
module.exports = {
	"continer": "SelectTree_continer__T1NF4",
	"tree": "SelectTree_tree__SXspb"
};


/***/ }),

/***/ 6184:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_select),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: ./components/pages/select/context/select-context.js


const selectReducer = (state, action)=>{
    let _state = {
        ...state
    };
    // if (action.type == "init-select") {
    //     console.log(action.payload);
    //     _state.selectedEnd =
    //         action.payload.end == "both" ? "together" : action.payload.end;
    //     _state[`${action.payload.end}SelectedFw`] = _state[
    //         `${action.payload.end}FwOptions`
    //     ].filter((_opt) => _opt.shortName == action.payload.fw)[0];
    //     _state[`${action.payload.end}SelectedSetup`] = _state[
    //         `${action.payload.end}FwOptions`
    //     ]
    //         .filter((_opt) => _opt.shortName == action.payload.fw)[0]
    //         .setups.filter((_stp) => _stp.id == action.payload.setup);
    //     _state[`${action.payload.end}FwOptions`] =
    //         _state[`${action.payload.end}SelectedFw`] != null
    //             ? _state[`${action.payload.end}FwOptions`].filter(
    //                   (fw) => fw.fullName == _state.frontSelectedFw.fullName
    //               )[0].setups
    //             : [];
    // }
    if (action.type == "end-select") {
        if (_state.selectedEnd != action.payload) _state.selectedEnd = action.payload;
        else _state.selectedEnd = "";
        if (_state.selectedEnd == "front") {
            _state.showFront = true;
            _state.showBack = false;
            _state.showBoth = false;
        } else if (_state.selectedEnd == "back") {
            _state.showFront = false;
            _state.showBack = true;
            _state.showBoth = false;
        } else if (_state.selectedEnd == "separate") {
            _state.showFront = true;
            _state.showBack = true;
            _state.showBoth = false;
        } else if (_state.selectedEnd == "together") {
            _state.showFront = false;
            _state.showBack = false;
            _state.showBoth = true;
        } else if (_state.selectedEnd == "") {
            _state.showFront = false;
            _state.showBack = false;
            _state.showBoth = false;
        }
        _state.frontSelectedFw = null;
        _state.frontSelectedSetup = null;
        _state.frontSetupOptions = [];
        _state.backSelectedFw = null;
        _state.backSelectedSetup = null;
        _state.backSetupOptions = [];
        _state.bothSelectedFw = null;
        _state.bothSelectedSetup = null;
        _state.bothSetupOptions = [];
    } else if (action.type == "front-select-fw") {
        if (!_state.frontSelectedFw || _state.frontSelectedFw.fullName != action.payload.fullName) {
            _state.frontSelectedFw = action.payload;
            _state.frontSetupOptions = _state.frontFwOptions.filter((fw)=>fw.fullName == _state.frontSelectedFw.fullName)[0].setups;
        } else {
            _state.frontSelectedFw = null;
            _state.frontSetupOptions = [];
        }
        _state.frontSelectedSetup = null;
    } else if (action.type == "front-select-setup") {
        if (!_state.frontSelectedSetup || _state.frontSelectedSetup.fullName != action.payload.fullName) {
            _state.frontSelectedSetup = action.payload;
        } else {
            _state.frontSelectedSetup = null;
        }
    } else if (action.type == "back-select-fw") {
        if (!_state.backSelectedFw || _state.backSelectedFw.fullName != action.payload.fullName) {
            _state.backSelectedFw = action.payload;
            _state.backSetupOptions = _state.backFwOptions.filter((fw)=>fw.fullName == _state.backSelectedFw.fullName)[0].setups;
        } else {
            _state.backSelectedFw = null;
            _state.backSetupOptions = [];
        }
        _state.backSelectedSetup = null;
    } else if (action.type == "back-select-setup") {
        if (!_state.backSelectedSetup || _state.backSelectedSetup.fullName != action.payload.fullName) {
            _state.backSelectedSetup = action.payload;
        } else {
            _state.backSelectedSetup = null;
        }
    } else if (action.type == "both-select-fw") {
        if (!_state.bothSelectedFw || _state.bothSelectedFw.fullName != action.payload.fullName) {
            _state.bothSelectedFw = action.payload;
            _state.bothSetupOptions = _state.bothFwOptions.filter((fw)=>fw.fullName == _state.bothSelectedFw.fullName)[0].setups;
        } else {
            _state.bothSelectedFw = null;
            _state.bothSetupOptions = [];
        }
        _state.bothSelectedSetup = null;
    } else if (action.type == "both-select-setup") {
        if (!_state.bothSelectedSetup || _state.bothSelectedSetup.fullName != action.payload.fullName) {
            _state.bothSelectedSetup = action.payload;
        } else {
            _state.bothSelectedSetup = null;
        }
    }
    return _state;
};
const SelectContext = /*#__PURE__*/ external_react_default().createContext({
    showFront: false,
    showBack: false,
    showBoth: false,
    selectedEnd: "",
    frontSelectedFw: null,
    frontSelectedSetup: null,
    frontFwOptions: [],
    frontSetupOptions: [],
    backSelectedFw: null,
    backSelectedSetup: null,
    backFwOptions: [],
    backSetupOptions: [],
    bothSelectedFw: null,
    bothSelectedSetup: null,
    bothFwOptions: [],
    bothSetupOptions: [],
    dispatchSelect: ()=>{}
});
const SelectContextProvider = (props)=>{
    const { 0: selectState , 1: dispatchSelect  } = (0,external_react_.useReducer)(selectReducer, {
        selectedEnd: "",
        showFront: false,
        showBack: false,
        showBoth: false,
        frontSelectedFw: null,
        frontSelectedSetup: null,
        frontFwOptions: props.frameworks.filter((_fw)=>_fw.end == "front"),
        frontSetupOptions: [],
        backSelectedFw: null,
        backSelectedSetup: null,
        backFwOptions: props.frameworks.filter((_fw)=>_fw.end == "back"),
        backSetupOptions: [],
        bothSelectedFw: null,
        bothSelectedSetup: null,
        bothFwOptions: props.frameworks.filter((_fw)=>_fw.end == "both"),
        bothSetupOptions: []
    });
    return /*#__PURE__*/ jsx_runtime_.jsx(SelectContext.Provider, {
        value: {
            showFront: selectState.showFront,
            showBack: selectState.showBack,
            showBoth: selectState.showBoth,
            selectedEnd: selectState.selectedEnd,
            frontSelectedFw: selectState.frontSelectedFw,
            frontSelectedSetup: selectState.frontSelectedSetup,
            frontFwOptions: selectState.frontFwOptions,
            frontSetupOptions: selectState.frontSetupOptions,
            backSelectedFw: selectState.backSelectedFw,
            backSelectedSetup: selectState.backSelectedSetup,
            backFwOptions: selectState.backFwOptions,
            backSetupOptions: selectState.backSetupOptions,
            bothSelectedFw: selectState.bothSelectedFw,
            bothSelectedSetup: selectState.bothSelectedSetup,
            bothFwOptions: selectState.bothFwOptions,
            bothSetupOptions: selectState.bothSetupOptions,
            dispatchSelect: dispatchSelect
        },
        children: props.children
    });
};

/* harmony default export */ const select_context = (SelectContext);

// EXTERNAL MODULE: ./components/pages/select/arrows/Arrows.module.css
var Arrows_module = __webpack_require__(3373);
var Arrows_module_default = /*#__PURE__*/__webpack_require__.n(Arrows_module);
;// CONCATENATED MODULE: ./components/pages/select/arrows/Arrows1.js


const Arrows1 = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Arrows_module_default()).arrows,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `${(Arrows_module_default()).arrow} ${(Arrows_module_default()).a1} ${props.selected != "front" && props.selected != "" && (Arrows_module_default()).notselected}`
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `${(Arrows_module_default()).arrow} ${(Arrows_module_default()).a2} ${props.selected != "back" && props.selected != "" && (Arrows_module_default()).notselected}`
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `${(Arrows_module_default()).arrow} ${(Arrows_module_default()).a3} ${props.selected != "separate" && props.selected != "together" && props.selected != "" && (Arrows_module_default()).notselected}`
            })
        ]
    });
};
/* harmony default export */ const arrows_Arrows1 = (Arrows1);

;// CONCATENATED MODULE: ./components/pages/select/arrows/Arrows2.js


const Arrows2 = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Arrows_module_default()).arrows,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `${(Arrows_module_default()).arrow} ${(Arrows_module_default()).a4} ${props.selected != "separate" && props.selected != "" && (Arrows_module_default()).notselected}`
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `${(Arrows_module_default()).arrow} ${(Arrows_module_default()).a5} ${props.selected != "together" && props.selected != "" && (Arrows_module_default()).notselected}`
            })
        ]
    });
};
/* harmony default export */ const arrows_Arrows2 = (Arrows2);

// EXTERNAL MODULE: ./components/pages/select/EndSelect.module.css
var EndSelect_module = __webpack_require__(7948);
var EndSelect_module_default = /*#__PURE__*/__webpack_require__.n(EndSelect_module);
;// CONCATENATED MODULE: ./components/pages/select/EndSelect.js






const EndSelect = ()=>{
    const ctx = (0,external_react_.useContext)(select_context);
    const frontClickHandler = ()=>{
        ctx.dispatchSelect({
            type: "end-select",
            payload: "front"
        });
    };
    const backClickHandler = ()=>{
        ctx.dispatchSelect({
            type: "end-select",
            payload: "back"
        });
    };
    const separateClickHandler = ()=>{
        ctx.dispatchSelect({
            type: "end-select",
            payload: "separate"
        });
    };
    const togetherClickHandler = ()=>{
        ctx.dispatchSelect({
            type: "end-select",
            payload: "together"
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (EndSelect_module_default()).container,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: (EndSelect_module_default()).title,
                children: "I need a setup that is..."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(arrows_Arrows1, {
                selected: ctx.selectedEnd
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (EndSelect_module_default()).tree,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (EndSelect_module_default()).option,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                onClick: frontClickHandler,
                                className: `${(EndSelect_module_default()).button} ${ctx.selectedEnd == "front" ? (EndSelect_module_default()).selected : ctx.selectedEnd != "" && (EndSelect_module_default()).notselected}`,
                                children: "frontend only"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: (EndSelect_module_default()).description,
                                children: "ex. ReactJs"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (EndSelect_module_default()).option,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                onClick: backClickHandler,
                                className: `${(EndSelect_module_default()).button} ${ctx.selectedEnd == "back" ? (EndSelect_module_default()).selected : ctx.selectedEnd != "" && (EndSelect_module_default()).notselected}`,
                                children: "backend only"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: (EndSelect_module_default()).description,
                                children: "ex. ExpressJs"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (EndSelect_module_default()).option,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                className: `${(EndSelect_module_default()).subtitle} ${ctx.selectedEnd != "separate" && ctx.selectedEnd != "together" && ctx.selectedEnd != "" && (EndSelect_module_default()).notselected}`,
                                children: "both ends as..."
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(arrows_Arrows2, {
                                selected: ctx.selectedEnd
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (EndSelect_module_default()).tree,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (EndSelect_module_default()).option,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                onClick: separateClickHandler,
                                                className: `${(EndSelect_module_default()).button} ${ctx.selectedEnd == "separate" ? (EndSelect_module_default()).selected : ctx.selectedEnd != "" && (EndSelect_module_default()).notselected}`,
                                                children: "separate frameworks"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: (EndSelect_module_default()).description,
                                                children: "ex. ReactJs front + ExpressJs back"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (EndSelect_module_default()).option,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                onClick: togetherClickHandler,
                                                className: `${(EndSelect_module_default()).button} ${ctx.selectedEnd == "together" ? (EndSelect_module_default()).selected : ctx.selectedEnd != "" && (EndSelect_module_default()).notselected}`,
                                                children: "one framework"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: (EndSelect_module_default()).description,
                                                children: "ex. NextJs"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const select_EndSelect = (EndSelect);

// EXTERNAL MODULE: ./components/pages/select/SelectPage.module.css
var SelectPage_module = __webpack_require__(4539);
var SelectPage_module_default = /*#__PURE__*/__webpack_require__.n(SelectPage_module);
// EXTERNAL MODULE: ./components/pages/select/tree/EndStyles.module.css
var EndStyles_module = __webpack_require__(7252);
var EndStyles_module_default = /*#__PURE__*/__webpack_require__.n(EndStyles_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./components/pages/select/selection/Description.module.css
var Description_module = __webpack_require__(7417);
var Description_module_default = /*#__PURE__*/__webpack_require__.n(Description_module);
;// CONCATENATED MODULE: ./components/pages/select/selection/Description.js



const Description = (props)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: `${(Description_module_default()).container} ${props.widden && (Description_module_default()).unwide} ${props.somethingSelected ? (Description_module_default()).showBorder : ""}`,
        children: props.toDescribe != null && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (Description_module_default()).descColumn,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: (Description_module_default()).description,
                    children: props.toDescribe.description.brief != null ? props.toDescribe.description.brief : props.toDescribe.description
                }),
                props.type == "setup" && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    children: [
                        "dependencies:",
                        " ",
                        props.toDescribe.description != null && props.toDescribe.description.dependencies
                    ]
                }),
                props.type == "fw" && /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: `/docs/${props.toDescribe.shortName}`,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                        className: (Description_module_default()).link,
                        children: [
                            "More details on the ",
                            props.toDescribe.fullName,
                            " ",
                            "setups"
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const selection_Description = (Description);

// EXTERNAL MODULE: ./components/pages/select/selection/Scroll.module.css
var Scroll_module = __webpack_require__(987);
var Scroll_module_default = /*#__PURE__*/__webpack_require__.n(Scroll_module);
// EXTERNAL MODULE: ./components/pages/select/selection/ScrollOption.module.css
var ScrollOption_module = __webpack_require__(9389);
var ScrollOption_module_default = /*#__PURE__*/__webpack_require__.n(ScrollOption_module);
;// CONCATENATED MODULE: ./components/pages/select/selection/ScrollOption.js


const ScrollOption = (props)=>{
    const clickHandler = ()=>{
        if (!props.option.available && !props.isBranchEnd) return;
        props.onSelect({
            type: `${props.labels[3]}-select-${props.labels[1]}`,
            payload: props.option
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: `${(ScrollOption_module_default()).option} ${!props.option.available && !props.isBranchEnd && (ScrollOption_module_default()).unavailable} ${props.selected && (ScrollOption_module_default()).selected}`,
        onClick: clickHandler,
        children: [
            props.option.fullName,
            props.option.language != null && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                children: [
                    " (",
                    props.option.language,
                    ")"
                ]
            }),
            !props.option.available && !props.isBranchEnd && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                children: " - coming soon"
            })
        ]
    });
};
/* harmony default export */ const selection_ScrollOption = (ScrollOption);

;// CONCATENATED MODULE: ./components/pages/select/selection/Scroll.js



const Scroll = (props)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (Scroll_module_default()).scroll + " " + (props.widden && (Scroll_module_default()).wide),
            children: [
                props.options.map((option, i)=>/*#__PURE__*/ jsx_runtime_.jsx(selection_ScrollOption, {
                        labels: props.labels,
                        selected: props.selected != null && props.selected.fullName == option.fullName,
                        isBranchEnd: props.isBranchEnd,
                        onSelect: props.onSelect,
                        option: option
                    }, i)),
                props.options.length == 0 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (Scroll_module_default()).disclaimer,
                    children: [
                        "select ",
                        props.labels[2]
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const selection_Scroll = (Scroll);

// EXTERNAL MODULE: ./components/pages/select/selection/Selection.module.css
var Selection_module = __webpack_require__(2181);
var Selection_module_default = /*#__PURE__*/__webpack_require__.n(Selection_module);
;// CONCATENATED MODULE: ./components/pages/select/selection/Selection.js




const Selection = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Selection_module_default()).selection,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                className: (Selection_module_default()).title,
                children: props.labels[0]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Selection_module_default()).row,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(selection_Scroll, {
                        isBranchEnd: props.isBranchEnd,
                        onSelect: props.onSelect,
                        options: props.options,
                        selected: props.selected,
                        labels: props.labels,
                        widden: props.widden
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(selection_Description, {
                        widden: props.widden,
                        type: props.labels[1],
                        somethingSelected: props.selected != null,
                        isBranchEnd: props.isBranchEnd,
                        toDescribe: props.selected
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const selection_Selection = (Selection);

;// CONCATENATED MODULE: ./components/pages/select/tree/BackEnd.js





const BackEnd = ()=>{
    const ctx = (0,external_react_.useContext)(select_context);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (EndStyles_module_default()).end,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                className: (EndStyles_module_default()).title,
                children: "Backend:"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(selection_Selection, {
                labels: [
                    "Framework",
                    "fw",
                    "",
                    "back"
                ],
                options: ctx.backFwOptions,
                isBranchEnd: false,
                widden: false,
                onSelect: ctx.dispatchSelect,
                selected: ctx.backSelectedFw
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(selection_Selection, {
                labels: [
                    "Setups",
                    "setup",
                    "a framework",
                    "back"
                ],
                options: ctx.backSetupOptions,
                isBranchEnd: true,
                widden: true,
                onSelect: ctx.dispatchSelect,
                selected: ctx.backSelectedSetup
            })
        ]
    });
};
/* harmony default export */ const tree_BackEnd = (BackEnd);

;// CONCATENATED MODULE: ./components/pages/select/tree/BothEnds.js





const BothEnds = ()=>{
    const ctx = (0,external_react_.useContext)(select_context);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (EndStyles_module_default()).end,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                className: (EndStyles_module_default()).title,
                children: "Bothend:"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(selection_Selection, {
                labels: [
                    "Framework",
                    "fw",
                    "",
                    "both"
                ],
                options: ctx.bothFwOptions,
                isBranchEnd: false,
                widden: false,
                onSelect: ctx.dispatchSelect,
                selected: ctx.bothSelectedFw
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(selection_Selection, {
                labels: [
                    "Setups",
                    "setup",
                    "a framework",
                    "both"
                ],
                options: ctx.bothSetupOptions,
                isBranchEnd: true,
                widden: true,
                onSelect: ctx.dispatchSelect,
                selected: ctx.bothSelectedSetup
            })
        ]
    });
};
/* harmony default export */ const tree_BothEnds = (BothEnds);

;// CONCATENATED MODULE: ./components/pages/select/tree/FrontEnd.js





const FrontEnd = ()=>{
    const ctx = (0,external_react_.useContext)(select_context);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (EndStyles_module_default()).end,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                className: (EndStyles_module_default()).title,
                children: "Frontend:"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(selection_Selection, {
                labels: [
                    "Framework",
                    "fw",
                    "",
                    "front"
                ],
                options: ctx.frontFwOptions,
                isBranchEnd: false,
                widden: false,
                onSelect: ctx.dispatchSelect,
                selected: ctx.frontSelectedFw
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(selection_Selection, {
                title: "Setups",
                labels: [
                    "Setups",
                    "setup",
                    "a framework",
                    "front"
                ],
                widden: true,
                options: ctx.frontSetupOptions,
                isBranchEnd: true,
                onSelect: ctx.dispatchSelect,
                selected: ctx.frontSelectedSetup
            })
        ]
    });
};
/* harmony default export */ const tree_FrontEnd = (FrontEnd);

// EXTERNAL MODULE: ./components/pages/select/tree/SelectTree.module.css
var SelectTree_module = __webpack_require__(6014);
var SelectTree_module_default = /*#__PURE__*/__webpack_require__.n(SelectTree_module);
;// CONCATENATED MODULE: ./components/pages/select/tree/SelectTree.js







const SelectTree = ()=>{
    const ctx = (0,external_react_.useContext)(select_context);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (SelectTree_module_default()).container,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (SelectTree_module_default()).tree,
            children: [
                ctx.showFront && /*#__PURE__*/ jsx_runtime_.jsx(tree_FrontEnd, {}),
                ctx.showBack && /*#__PURE__*/ jsx_runtime_.jsx(tree_BackEnd, {}),
                ctx.showBoth && /*#__PURE__*/ jsx_runtime_.jsx(tree_BothEnds, {})
            ]
        })
    });
};
/* harmony default export */ const tree_SelectTree = (SelectTree);

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./components/pages/select/SelectPage.js







const SelectPage = ()=>{
    const ctx = (0,external_react_.useContext)(select_context);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (SelectPage_module_default()).page,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(select_EndSelect, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(tree_SelectTree, {}),
            ctx.selectedEnd == "front" && ctx.frontSelectedSetup != null && /*#__PURE__*/ jsx_runtime_.jsx("a", {
                href: `/api/download?setupid=${ctx.frontSelectedSetup != null ? ctx.frontSelectedSetup.id : null}`,
                children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                    className: (SelectPage_module_default()).downloadLink,
                    children: "download setup"
                })
            }),
            ctx.selectedEnd == "back" && ctx.backSelectedSetup != null && /*#__PURE__*/ jsx_runtime_.jsx("a", {
                href: `/api/download?setupid=${ctx.backSelectedSetup != null ? ctx.backSelectedSetup.id : null}`,
                children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                    className: (SelectPage_module_default()).downloadLink,
                    children: "download setup"
                })
            }),
            ctx.selectedEnd == "together" && ctx.bothSelectedSetup != null && /*#__PURE__*/ jsx_runtime_.jsx("a", {
                href: `/api/download?setupid=${ctx.bothSelectedSetup != null ? ctx.bothSelectedSetup.id : null}`,
                children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                    className: (SelectPage_module_default()).downloadLink,
                    children: "download setup"
                })
            }),
            ctx.selectedEnd == "separate" && ctx.frontSelectedSetup != null && ctx.backSelectedSetup != null && /*#__PURE__*/ jsx_runtime_.jsx("a", {
                href: `/api/download?separate=true&setupid1=${ctx.frontSelectedSetup != null ? ctx.frontSelectedSetup.id : null}&setupid2=${ctx.backSelectedSetup != null ? ctx.backSelectedSetup.id : null}`,
                children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                    className: (SelectPage_module_default()).downloadLink,
                    children: "download setup"
                })
            }),
            ctx.selectedEnd == "separate" && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (SelectPage_module_default()).explanation,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: (SelectPage_module_default()).important,
                        children: "Important - after download:"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (SelectPage_module_default()).explanationP,
                        children: 'In order to properly connect your selected frontend and backend you need your backend to act as a proxy server. For that you need to go into your front end folder, and in the package.json file add a "proxy" value with the key of your backend url, which is "http://localhost:8080"'
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: "/proxy_setup_screenshot.png",
                        alt: "image showing how to add proxy to package.json",
                        width: 320,
                        height: 44,
                        layout: "fixed"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const select_SelectPage = (SelectPage);

// EXTERNAL MODULE: ./data/frameworkData.js
var frameworkData = __webpack_require__(9100);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./pages/select.js





const Selector = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(SelectContextProvider, {
        ...props,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Setup Select"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Use this interactive chart to find and download the setup you need"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(select_SelectPage, {})
        ]
    });
};
const getStaticProps = ()=>{
    return {
        props: {
            frameworks: frameworkData/* frameworkData */.q
        }
    };
};
/* harmony default export */ const pages_select = (Selector);


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

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

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

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [952,664,675,100], () => (__webpack_exec__(6184)));
module.exports = __webpack_exports__;

})();