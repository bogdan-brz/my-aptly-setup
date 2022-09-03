import styles from "./EndStyles.module.css";
import Selection from "../selection/Selection";
import { useReducer } from "react";

const selectionReducer = (state, action) => {
    let _state = { ...state };
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
const FrontEnd = (props) => {
    const [selectionState, dispatchSelection] = useReducer(selectionReducer, {
        selectedFw: null,
        selectedSpecs: [],
        fwOptions: props.frameworks,
        specOptions: [],
    });
    return (
        <div className={styles.end}>
            <h3 className={styles.title}>Frontend:</h3>
            <Selection
                labels={["Framework", "fw", ""]}
                options={selectionState.fwOptions}
                isSingular={true}
                onSelect={dispatchSelection}
                selected={selectionState.selectedFw}
            />
            <Selection
                title={"Specifics"}
                label={"spec"}
                labels={["Specifics", "spec", "a framework"]}
                options={selectionState.specOptions}
                isSingular={false}
                onSelect={dispatchSelection}
                selected={selectionState.selectedSpecs}
            />
        </div>
    );
};

export default FrontEnd;
