import React, { useReducer } from "react";

const selectReducer = (state, action) => {
    let _state = { ...state };
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
        if (
            !_state.frontSelectedFw ||
            _state.frontSelectedFw.fullName != action.payload.fullName
        ) {
            _state.frontSelectedFw = action.payload;
            _state.frontSetupOptions = _state.frontFwOptions.filter(
                (fw) => fw.fullName == _state.frontSelectedFw.fullName
            )[0].setups;
        } else {
            _state.frontSelectedFw = null;
            _state.frontSetupOptions = [];
        }
        _state.frontSelectedSetup = null;
    } else if (action.type == "front-select-setup") {
        if (
            !_state.frontSelectedSetup ||
            _state.frontSelectedSetup.fullName != action.payload.fullName
        ) {
            _state.frontSelectedSetup = action.payload;
        } else {
            _state.frontSelectedSetup = null;
        }
    } else if (action.type == "back-select-fw") {
        if (
            !_state.backSelectedFw ||
            _state.backSelectedFw.fullName != action.payload.fullName
        ) {
            _state.backSelectedFw = action.payload;
            _state.backSetupOptions = _state.backFwOptions.filter(
                (fw) => fw.fullName == _state.backSelectedFw.fullName
            )[0].setups;
        } else {
            _state.backSelectedFw = null;
            _state.backSetupOptions = [];
        }
        _state.backSelectedSetup = null;
    } else if (action.type == "back-select-setup") {
        if (
            !_state.backSelectedSetup ||
            _state.backSelectedSetup.fullName != action.payload.fullName
        ) {
            _state.backSelectedSetup = action.payload;
        } else {
            _state.backSelectedSetup = null;
        }
    } else if (action.type == "both-select-fw") {
        if (
            !_state.bothSelectedFw ||
            _state.bothSelectedFw.fullName != action.payload.fullName
        ) {
            _state.bothSelectedFw = action.payload;
            _state.bothSetupOptions = _state.bothFwOptions.filter(
                (fw) => fw.fullName == _state.bothSelectedFw.fullName
            )[0].setups;
        } else {
            _state.bothSelectedFw = null;
            _state.bothSetupOptions = [];
        }
        _state.bothSelectedSetup = null;
    } else if (action.type == "both-select-setup") {
        if (
            !_state.bothSelectedSetup ||
            _state.bothSelectedSetup.fullName != action.payload.fullName
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
    backSelectedFw: null,
    backSelectedSetup: null,
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
        frontFwOptions: props.frameworks.filter((_fw) => _fw.end == "front"),
        frontSetupOptions: [],
        backSelectedFw: null,
        backSelectedSetup: null,
        backFwOptions: props.frameworks.filter((_fw) => _fw.end == "back"),
        backSetupOptions: [],
        bothSelectedFw: null,
        bothSelectedSetup: null,
        bothFwOptions: props.frameworks.filter((_fw) => _fw.end == "both"),
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
                backSelectedFw: selectState.backSelectedFw,
                backSelectedSetup: selectState.backSelectedSetup,
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
