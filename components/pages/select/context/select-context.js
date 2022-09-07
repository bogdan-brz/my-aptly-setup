import React, { useReducer } from "react";

const selectReducer = (state, action) => {
    let _state = { ...state };
    if (action.type == "end-select") {
        if (_state.selectedEnd != action.payload)
            _state.selectedEnd = action.payload;
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
    } else if (action.type == "front-select-fw") {
        if (
            !_state.frontSelectedFw ||
            _state.frontSelectedFw.name != action.payload.name
        ) {
            _state.frontSelectedFw = action.payload;
            _state.frontSpecOptions = _state.frontFwOptions.filter(
                (fw) => fw.name == _state.frontSelectedFw.name
            )[0].specifics;
        } else {
            _state.frontSelectedFw = null;
            _state.frontSpecOptions = [];
        }
        _state.frontSelectedSpecs = [];
    } else if (action.type == "front-select-spec") {
        if (
            _state.frontSelectedSpecs.filter(
                (_spec) => _spec.name == action.payload.name
            ).length == 1
        ) {
            _state.frontSelectedSpecs = _state.frontSelectedSpecs.filter(
                (_spec) => _spec.name != action.payload.name
            );
        } else {
            _state.frontSelectedSpecs.push(action.payload);
            _state.frontSelectedSpecs = _state.frontSelectedSpecs.filter(
                (_spec) => {
                    console.log(_spec.short);
                    return (
                        action.payload.incompatibleWith.indexOf(_spec.short) ==
                        -1
                    );
                }
            );
        }
    } else if (action.type == "back-select-lang") {
        if (
            !_state.backSelectedLang ||
            _state.backSelectedLang.name != action.payload.name
        ) {
            _state.backSelectedLang = action.payload;
            _state.backFwOptions = _state.backLangOptions.filter(
                (lang) => lang.name == _state.backSelectedLang.name
            )[0].frameworks;
        } else {
            _state.backSelectedLang = null;
            _state.backFwOptions = [];
        }
        _state.backSelectedFw = null;
        _state.backSelectedSpecs = [];
        _state.backSpecOptions = [];
    } else if (action.type == "back-select-fw") {
        if (
            !_state.backSelectedFw ||
            _state.backSelectedFw.name != action.payload.name
        ) {
            _state.backSelectedFw = action.payload;
            _state.backSpecOptions = _state.backFwOptions.filter(
                (fw) => fw.name == _state.backSelectedFw.name
            )[0].specifics;
        } else {
            _state.backSelectedFw = null;
            _state.backSpecOptions = [];
        }
        _state.backSelectedSpecs = [];
    } else if (action.type == "back-select-spec") {
        if (
            _state.backSelectedSpecs.filter(
                (_spec) => _spec.name == action.payload.name
            ).length == 1
        ) {
            _state.backSelectedSpecs = _state.backSelectedSpecs.filter(
                (_spec) => _spec.name != action.payload.name
            );
        } else {
            _state.backSelectedSpecs.push(action.payload);
        }
    } else if (action.type == "both-select-fw") {
        if (
            !_state.bothSelectedFw ||
            _state.bothSelectedFw.name != action.payload.name
        ) {
            _state.bothSelectedFw = action.payload;
            _state.bothSpecOptions = _state.bothFwOptions.filter(
                (fw) => fw.name == _state.bothSelectedFw.name
            )[0].specifics;
        } else {
            _state.bothSelectedFw = null;
            _state.bothSpecOptions = [];
        }
        _state.bothSelectedSpecs = [];
    } else if (action.type == "both-select-spec") {
        if (
            _state.bothSelectedSpecs.filter(
                (_spec) => _spec.name == action.payload.name
            ).length == 1
        ) {
            _state.bothSelectedSpecs = _state.bothSelectedSpecs.filter(
                (_spec) => _spec.name != action.payload.name
            );
        } else {
            _state.bothSelectedSpecs.push(action.payload);
        }
    }
    return _state;
};

const SelectContext = React.createContext({
    showFront: false,
    showBack: false,
    showBoth: false,
    selectedEnd: "",
    frontSelectedFw: null,
    frontSelectedSpecs: [],
    frontFwOptions: [],
    frontSpecOptions: [],
    backSelectedLang: null,
    backSelectedFw: null,
    backSelectedSpecs: [],
    backLangOptions: [],
    backFwOptions: [],
    backSpecOptions: [],
    bothSelectedFw: null,
    bothSelectedSpecs: [],
    bothFwOptions: [],
    bothSpecOptions: [],
    dispatchSelect: () => {},
});

const SelectContextProvider = (props) => {
    const [selectState, dispatchSelect] = useReducer(selectReducer, {
        selectedEnd: "",
        showFront: false,
        showBack: false,
        showBoth: false,
        frontSelectedFw: null,
        frontSelectedSpecs: [],
        frontFwOptions: props.frontEnd.frameworks,
        frontSpecOptions: [],
        backSelectedLang: null,
        backSelectedFw: null,
        backSelectedSpecs: [],
        backLangOptions: props.backEnd.languages,
        backFwOptions: [],
        backSpecOptions: [],
        bothSelectedFw: null,
        bothSelectedSpecs: [],
        bothFwOptions: props.bothEnds.frameworks,
        bothSpecOptions: [],
    });
    return (
        <SelectContext.Provider
            value={{
                showFront: selectState.showFront,
                showBack: selectState.showBack,
                showBoth: selectState.showBoth,
                selectedEnd: selectState.selectedEnd,
                frontSelectedFw: selectState.frontSelectedFw,
                frontSelectedSpecs: selectState.frontSelectedSpecs,
                frontFwOptions: selectState.frontFwOptions,
                frontSpecOptions: selectState.frontSpecOptions,
                backSelectedLang: selectState.backSelectedLang,
                backSelectedFw: selectState.backSelectedFw,
                backSelectedSpecs: selectState.backSelectedSpecs,
                backLangOptions: selectState.backLangOptions,
                backFwOptions: selectState.backFwOptions,
                backSpecOptions: selectState.backSpecOptions,
                bothSelectedFw: selectState.bothSelectedFw,
                bothSelectedSpecs: selectState.bothSelectedSpecs,
                bothFwOptions: selectState.bothFwOptions,
                bothSpecOptions: selectState.bothSpecOptions,
                dispatchSelect: dispatchSelect,
            }}>
            {props.children}
        </SelectContext.Provider>
    );
};

export { SelectContextProvider };

export default SelectContext;
