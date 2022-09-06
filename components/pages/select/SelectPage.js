import { useContext } from "react";
import SelectContext from "./context/select-context";
import EndSelect from "./EndSelect";
import SearchBar from "./searchbar/SearchBar";
import styles from "./SelectPage.module.css";
import SelectTree from "./tree/SelectTree";

const SelectPage = (props) => {
    const ctx = useContext(SelectContext);
    const testHandle = () => {
        console.log(ctx);
    };
    return (
        <div className={styles.page}>
            <SearchBar />
            <label className={styles.label}>
                ... or use the following chart
            </label>
            <EndSelect />
            <SelectTree />
            <button onClick={testHandle}>test context</button>
            {ctx.showFront && ctx.frontSelectedFw != null && (
                <a
                    href={`/api/download?end=front&fw=${
                        ctx.frontSelectedFw.short
                    }&specs=${ctx.frontSelectedSpecs.map(
                        (spec) => spec.short
                    )}`}
                >
                    download
                </a>
            )}
            {/* <a href={`/api/${download}?end=${""}`}></a> */}
        </div>
    );
};

export default SelectPage;
