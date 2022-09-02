import styles from "./EndStyles.module.css";
import Selection from "../selection/Selection";
import { useState } from "react";

const BackEnd = (props) => {
    const [selectedLang, setSelectedLang] = useState(
        props.selectionData.languages[0]
    );
    const [selectedFw, setSelectedFw] = useState(
        props.selectionData.languages[0].frameworks[0]
    );
    const [selectedSpecs, setSelectedSpecs] = useState([
        props.selectionData.languages[0].frameworks[0].specifics[0],
    ]);
    const selectLangHandler = (newLang) => {
        deselectAllSpecs();
        deselectFwHandler();
        setSelectedLang(newLang);
    };
    const deselectLangHandler = () => {
        deselectAllSpecs();
        deselectFwHandler();
        setSelectedLang(null);
    };
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
    const checkHandler = () => {
        console.log("==========================");
        console.log("selected language");
        console.log(selectedLang);
        console.log("selected framework");
        console.log(selectedFw);
        console.log("selected soecifics");
        console.log(selectedSpecs);
    };
    return (
        <div className={styles.end}>
            <button onClick={checkHandler}>check</button>
            <button className={styles.button}>Back End Solutions</button>
            <Selection
                title={"Language"}
                options={props.selectionData.languages}
                singular={true}
                onSelect={selectLangHandler}
                onDeselect={deselectLangHandler}
                selectedOption={selectedLang}
            />
            <Selection
                title={"Framework"}
                options={
                    selectedLang != null
                        ? props.selectionData.languages.filter(
                              (lang) => lang.name == selectedLang.name
                          )[0].frameworks
                        : []
                }
                singular={true}
                onSelect={selectFwHandler}
                onDeselect={deselectFwHandler}
                selectedOption={selectedFw}
            />
            <Selection
                title={"Specifics"}
                options={
                    selectedLang != null && selectedFw != null
                        ? props.selectionData.languages
                              .filter(
                                  (lang) => lang.name == selectedLang.name
                              )[0]
                              .frameworks.filter(
                                  (fw) => fw.name == selectedFw.name
                              )[0].specifics
                        : []
                }
                singular={false}
                onSelect={selectSpecHandler}
                onDeselect={deselectSpecHandler}
                selectedOption={selectedSpecs}
            />
        </div>
    );
};

export default BackEnd;
