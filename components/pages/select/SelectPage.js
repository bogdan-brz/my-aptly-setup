import { useReducer } from "react";
import EndSelect from "./EndSelect";
import SearchBar from "./searchbar/SearchBar";
import styles from "./SelectPage.module.css";
import SelectTree from "./tree/SelectTree";

const endReducer = (state, action) => {
    let _state = { ...state };
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
    console.log(_state);
    return _state;
    return { ..._state };
};
const SelectPage = (props) => {
    const [endState, dispatch] = useReducer(endReducer, {
        selectedEnd: "",
        showFront: false,
        showBack: false,
        showBoth: false,
    });
    return (
        <div className={styles.page}>
            <SearchBar />
            <EndSelect selected={endState.selectedEnd} onSelect={dispatch} />
            <SelectTree
                showFront={endState.showFront}
                showBack={endState.showBack}
                showBoth={endState.showBoth}
                {...props}
            />
        </div>
    );
};

export default SelectPage;
