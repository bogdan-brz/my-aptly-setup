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
            _state.frontSetupOptions = _state.frontFwOptions.filter(
                (fw) => fw.name == _state.frontSelectedFw.name
            )[0].setups;
        } else {
            _state.frontSelectedFw = null;
            _state.frontSetupOptions = [];
        }
        _state.frontSelectedSet = [];
    } else if (action.type == "front-select-setup") {
        if (
            !_state.frontSelectedSetup ||
            _state.frontSelectedSetup.name != action.payload.name
        ) {
            _state.frontSelectedSetup = action.payload;
        } else {
            _state.frontSelectedSetup = null;
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
        _state.backSelectedSetup = [];
        _state.backSetupOptions = [];
    } else if (action.type == "back-select-fw") {
        if (
            !_state.backSelectedFw ||
            _state.backSelectedFw.name != action.payload.name
        ) {
            _state.backSelectedFw = action.payload;
            _state.backSetupOptions = _state.backFwOptions.filter(
                (fw) => fw.name == _state.backSelectedFw.name
            )[0].setups;
        } else {
            _state.backSelectedFw = null;
            _state.backSetupOptions = [];
        }
        _state.backSelectedSetup = [];
    } else if (action.type == "back-select-setup") {
        if (
            !_state.backSelectedSetup ||
            _state.backSelectedSetup.name != action.payload.name
        ) {
            _state.backSelectedSetup = action.payload;
        } else {
            _state.backSelectedSetup = null;
        }
    } else if (action.type == "both-select-fw") {
        if (
            !_state.bothSelectedFw ||
            _state.bothSelectedFw.name != action.payload.name
        ) {
            _state.bothSelectedFw = action.payload;
            _state.bothSetupOptions = _state.bothFwOptions.filter(
                (fw) => fw.name == _state.bothSelectedFw.name
            )[0].setups;
        } else {
            _state.bothSelectedFw = null;
            _state.bothSetupOptions = [];
        }
        _state.bothSelectedSetup = [];
    } else if (action.type == "both-select-setup") {
        if (
            !_state.bothSelectedSetup ||
            _state.bothSelectedSetup.name != action.payload.name
        ) {
            _state.bothSelectedSetup = action.payload;
        } else {
            _state.bothSelectedSetup = null;
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
    frontSelectedSetup: null,
    frontFwOptions: [],
    frontSetupOptions: [],
    backSelectedLang: null,
    backSelectedFw: null,
    backSelectedSetup: null,
    backLangOptions: [],
    backFwOptions: [],
    backSetupOptions: [],
    bothSelectedFw: null,
    bothSelectedSetup: null,
    bothFwOptions: [],
    bothSetupOptions: [],
    dispatchSelect: () => {},
});

const SelectContextProvider = (props) => {
    const [selectState, dispatchSelect] = useReducer(selectReducer, {
        selectedEnd: "",
        showFront: false,
        showBack: false,
        showBoth: false,
        frontSelectedFw: null,
        frontSelectedSetup: null,
        frontFwOptions: props.frontEnd.frameworks,
        frontSetupOptions: [],
        backSelectedLang: null,
        backSelectedFw: null,
        backSelectedSetup: null,
        backLangOptions: props.backEnd.languages,
        backFwOptions: [],
        backSetupOptions: [],
        bothSelectedFw: null,
        bothSelectedSetup: null,
        bothFwOptions: props.bothEnds.frameworks,
        bothSetupOptions: [],
    });
    return (
        <SelectContext.Provider
            value={{
                showFront: selectState.showFront,
                showBack: selectState.showBack,
                showBoth: selectState.showBoth,
                selectedEnd: selectState.selectedEnd,
                frontSelectedFw: selectState.frontSelectedFw,
                frontSelectedSetup: selectState.frontSelectedSetup,
                frontFwOptions: selectState.frontFwOptions,
                frontSetupOptions: selectState.frontSetupOptions,
                backSelectedLang: selectState.backSelectedLang,
                backSelectedFw: selectState.backSelectedFw,
                backSelectedSetup: selectState.backSelectedSetup,
                backLangOptions: selectState.backLangOptions,
                backFwOptions: selectState.backFwOptions,
                backSetupOptions: selectState.backSetupOptions,
                bothSelectedFw: selectState.bothSelectedFw,
                bothSelectedSetup: selectState.bothSelectedSetup,
                bothFwOptions: selectState.bothFwOptions,
                bothSetupOptions: selectState.bothSetupOptions,
                dispatchSelect: dispatchSelect,
            }}>
            {props.children}
        </SelectContext.Provider>
    );
};

export { SelectContextProvider };

export default SelectContext;
