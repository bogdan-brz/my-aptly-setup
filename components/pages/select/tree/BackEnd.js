import styles from "./EndStyles.module.css";
import Selection from "../selection/Selection";
import { useReducer } from "react";

const selectionReducer = (state, action) => {
    let _state = { ...state };
    if (action.type == "select-lang") {
        if (
            !state.selectedLang ||
            _state.selectedLang.name != action.payload.name
        ) {
            _state.selectedLang = action.payload;
            _state.fwOptions = _state.langOptions.filter(
                (lang) => lang.name == _state.selectedLang.name
            )[0].frameworks;
        } else {
            _state.selectedLang = null;
            _state.fwOptions = [];
        }
        _state.selectedFw = null;
        _state.selectedSpecs = [];
        _state.specOptions = [];
    }
    if (action.type == "select-fw") {
        if (
            !_state.selectedFw ||
            _state.selectedFw.name != action.payload.name
        ) {
            _state.selectedFw = action.payload;
            _state.specOptions = _state.fwOptions.filter(
                (fw) => fw.name == _state.selectedFw.name
            )[0].specifics;
        } else {
            _state.selectedFw = null;
            _state.specOptions = [];
        }
        _state.selectedSpecs = [];
    } else if (action.type == "select-spec") {
        if (
            _state.selectedSpecs.filter(
                (_spec) => _spec.name == action.payload.name
            ).length == 1
        ) {
            _state.selectedSpecs = _state.selectedSpecs.filter(
                (_spec) => _spec.name != action.payload.name
            );
        } else {
            _state.selectedSpecs.push(action.payload);
        }
    }
    return _state;
};

const BackEnd = (props) => {
    const [selectionState, dispatchSelection] = useReducer(selectionReducer, {
        selectedLang: null,
        selectedFw: null,
        selectedSpecs: [],
        langOptions: props.languages,
        fwOptions: [],
        specOptions: [],
    });
    return (
        <div className={styles.end}>
            <h3 className={styles.title}>Backend:</h3>
            <Selection
                labels={["Language", "lang", ""]}
                options={selectionState.langOptions}
                isSingular={true}
                onSelect={dispatchSelection}
                selected={selectionState.selectedLang}
            />
            <Selection
                labels={["Framework", "fw", "a language"]}
                options={selectionState.fwOptions}
                isSingular={true}
                onSelect={dispatchSelection}
                selected={selectionState.selectedFw}
            />
            <Selection
                labels={["Specifics", "spec", "a framework"]}
                options={selectionState.specOptions}
                isSingular={false}
                onSelect={dispatchSelection}
                selected={selectionState.selectedSpecs}
            />
        </div>
    );
};

export default BackEnd;
