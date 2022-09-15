import EndSelect from "./EndSelect";
import styles from "./SelectPage.module.css";
import FwSelect from "./selection/FwSelect";
import SetupSelect from "./selection/SetupSelect";
import { useContext } from "react";
import SelectContext from "./context/select-context";

const SelectPage = () => {
    const ctx = useContext(SelectContext);
    return (
        <div className={styles.page}>
            {/* <SearchBar />
            <label className={styles.label}>
                ... or use the following chart
            </label> */}
            <EndSelect />
            {ctx.selectedEnd && <FwSelect />}
            {ctx.selectedFw && <SetupSelect />}
        </div>
    );
};

export default SelectPage;
