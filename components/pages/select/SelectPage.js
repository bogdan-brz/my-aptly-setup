// import { useRouter } from "next/router";
import { useContext } from "react"; // , useEffect
import SelectContext from "./context/select-context";
import EndSelect from "./EndSelect";
import SearchBar from "./searchbar/SearchBar";
import styles from "./SelectPage.module.css";
import SelectTree from "./tree/SelectTree";

const SelectPage = (props) => {
    const ctx = useContext(SelectContext);
    // const router = useRouter();
    // useEffect(() => {
    //     console.log(router.query);
    //     const end = router.query.end;
    //     let fw = null;
    //     if (end == "front")
    //         fw = props.frontEnd.frameworks.filter(
    //             (_fw) => _fw.short == router.query.fw
    //         );
    //     if (end == "back") {
    //         if (router.query.fw == "express")
    //             fw = props.backEnd.languages[0].frameworks[0];
    //         if (router.query.fw == "koa")
    //             fw = props.backEnd.languages[0].frameworks[1];
    //     }
    //     if (end == "both")
    //         fw = props.bothEnd.frameworks.filter(
    //             (_fw) => _fw.short == router.query.fw
    //         );
    //     const setup = fw.setups.filter(
    //         (_set) => _set.id == router.query.setup
    //     )[0];
    //     ctx.dispatchSelect({
    //         type: "end-select",
    //         payload: end,
    //     });
    //     ctx.dispatchSelect({
    //         type: "end-select",
    //         payload: end,
    //     });
    // }, []);
    return (
        <div className={styles.page}>
            <SearchBar />
            <label className={styles.label}>
                ... or use the following chart
            </label>
            <EndSelect />
            <SelectTree />
            {ctx.showFront && ctx.frontSelectedFw != null && (
                <a
                    href={`/api/download?fwshort=${
                        ctx.frontSelectedFw.short
                    }&setupid=${
                        ctx.frontSelectedSetup != null
                            ? ctx.frontSelectedSetup.id
                            : null
                    }`}>
                    download
                </a>
            )}
            {/* <a href={`/api/${download}?end=${""}`}></a> */}
        </div>
    );
};

export default SelectPage;
