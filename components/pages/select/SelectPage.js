import EndSelect from "./EndSelect";
import SearchBar from "./searchbar/SearchBar";
import styles from "./SelectPage.module.css";
import SelectTree from "./tree/SelectTree";

const SelectPage = (props) => {
    return (
        <div className={styles.page}>
            <SearchBar />
            <label className={styles.label}>
                ... or use the following chart
            </label>
            <EndSelect />
            <SelectTree />
            {/* <a href={`/api/${download}?end=${""}`}></a> */}
        </div>
    );
};

export default SelectPage;
