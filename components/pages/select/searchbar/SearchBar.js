import styles from "./SearchBar.module.css";

const SearchBar = () => {
    return (
        <div className={styles.container}>
            <input className={styles.searchbar} />
        </div>
    );
};

export default SearchBar;
