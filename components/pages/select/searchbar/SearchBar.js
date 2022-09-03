import styles from "./SearchBar.module.css";

const SearchBar = () => {
    return (
        <div className={styles.container}>
            <label className={styles.label}>Describe the setup you need:</label>
            <input
                className={styles.searchbar}
                placeholder="ex. reactjs frontend with a nodejs backend api connected to mongodb"
            />
        </div>
    );
};

export default SearchBar;
