import SearchBar from "./searchbar/SearchBar";
import styles from "./SelectPage.module.css";
import SelectTree from "./tree/SelectTree";

const SelectPage = (props) => {
    return (
        <div className={styles.page}>
            <SearchBar />
            <SelectTree selectionData={props.selectionData} />
        </div>
    );
};

export default SelectPage;
