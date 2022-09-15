import React, { useReducer } from "react";

const selectReducer = (state, action) => {
    let _state = { ...state };
    if (action.type == "end-select") {
        if (_state.selectedEnd != action.payload) {
            _state.selectedEnd = action.payload;
            _state.fwOptions = _state.allFws.filter(
                (_fw) => _fw.end == action.payload
            );
        } else {
            _state.selectedEnd = null;
            _state.fwOptions = [];
        }
        _state.setupOptions = [];
        _state.selectedFw = null;
        _state.selectedSetup = null;
    } else if (action.type == "fw-select") {
        if (
            !_state.selectedFw ||
            _state.selectedFw.fullName != action.payload.fullName
        ) {
            _state.selectedFw = action.payload;
            _state.setupOptions = _state.selectedFw.setups;
        } else {
            _state.selectedFw = null;
            _state.setupOptions = [];
        }
        _state.selectedSetup = null;
    } else if (action.type == "setup-select") {
        console.log("here2");
        if (
            !_state.selectedSetup ||
            _state.selectedSetup.fullName != action.payload.fullName
        ) {
            _state.selectedSetup = action.payload;
        } else {
            _state.selectedSetup = null;
        }
    }
    return _state;
};

const SelectContext = React.createContext({
    selectedEnd: "",
    selectedFw: null,
    selectedSetup: null,
    fwOptions: [],
    setupOptions: [],
    downloadLinkUrl: "",
    allFws: [],
    dispatchSelect: () => {},
});

const SelectContextProvider = (props) => {
    const [selectState, dispatchSelect] = useReducer(selectReducer, {
        selectedEnd: "",
        selectedFw: null,
        selectedSetup: null,
        fwOptions: [],
        setupOptions: [],
        downloadLinkUrl: "",
        allFws: props.frameworks,
    });
    return (
        <SelectContext.Provider
            value={{
                selectedEnd: selectState.selectedEnd,
                selectedFw: selectState.selectedFw,
                selectedSetup: selectState.selectedSetup,
                fwOptions: selectState.fwOptions,
                setupOptions: selectState.setupOptions,
                downloadLinkUrl: selectState.downloadLinkUrl,
                dispatchSelect: dispatchSelect,
            }}>
            {props.children}
        </SelectContext.Provider>
    );
};

export { SelectContextProvider };

export default SelectContext;
