import styles from "./EndStyles.module.css";
import Selection from "../selection/Selection";
import { useState } from "react";

const BothEnds = (props) => {
    const [selectedFw, setSelectedFw] = useState(props.frameworks[0]);
    const [selectedSpecs, setSelectedSpecs] = useState([
        props.frameworks[0].specifics[0],
    ]);
    const selectFwHandler = (newFw) => {
        deselectAllSpecs();
        setSelectedFw(newFw);
    };
    const deselectFwHandler = () => {
        deselectAllSpecs();
        setSelectedFw(null);
    };
    const selectSpecHandler = (newSpec) => {
        setSelectedSpecs((specs) => {
            let _specs = specs;
            _specs.push(newSpec);
            return _specs;
        });
    };
    const deselectSpecHandler = (specToRmv) => {
        setSelectedSpecs((specs) => {
            let _specs = specs.filter((_spec) => _spec.name != specToRmv.name);
            return _specs;
        });
    };
    const deselectAllSpecs = () => {
        setSelectedSpecs([]);
    };
    return (
        <div className={styles.end}>
            <Selection
                title={"Framework"}
                options={props.frameworks}
                singular={true}
                onSelect={selectFwHandler}
                onDeselect={deselectFwHandler}
                selectedOption={selectedFw}
            />
            <Selection
                title={"Specifics"}
                options={
                    (selectedFw != null
                        ? props.frameworks.filter(
                              (fw) => fw.name == selectedFw.name
                          )[0].specifics
                        : []) || []
                }
                singular={false}
                onSelect={selectSpecHandler}
                onDeselect={deselectSpecHandler}
                selectedOption={selectedSpecs}
            />
        </div>
    );
};

export default BothEnds;
