// import { useRouter } from "next/router";
import { useContext } from "react"; // , useEffect
import SelectContext from "./context/select-context";
import EndSelect from "./EndSelect";
// import SearchBar from "./searchbar/SearchBar";
import styles from "./SelectPage.module.css";
import SelectTree from "./tree/SelectTree";

const SelectPage = () => {
    const ctx = useContext(SelectContext);
    // const router = useRouter();
    // console.log(router);
    // useEffect(() => {
    //     if (router.query.end != null) {
    //         ctx.dispatchSelect({
    //             type: "end-select",
    //             payload: router.query.end,
    //         });
    //     }
    //     if (router.query.fw != null && router.query.end != null) {
    //         ctx.dispatchSelect({
    //             type: `${router.query.end}-fw-select`,
    //             payload: router.query.fw,
    //         });
    //     }
    //     if (
    //         router.query.setup != null &&
    //         router.query.end != null &&
    //         router.query.fw != null
    //     ) {
    //         ctx.dispatchSelect({
    //             type: `${router.query.end}-setup-select`,
    //             payload: router.query.setup,
    //         });
    //     }
    // }, []);
    return (
        <div className={styles.page}>
            {/* <SearchBar />
            <label className={styles.label}>
                ... or use the following chart
            </label> */}
            <EndSelect />
            <SelectTree />
            {ctx.selectedEnd == "front" && ctx.frontSelectedSetup != null && (
                <a
                    href={`/api/download?setupid=${
                        ctx.frontSelectedSetup != null
                            ? ctx.frontSelectedSetup.id
                            : null
                    }`}>
                    <h3 className={styles.downloadLink}>download setup</h3>
                </a>
            )}
            {ctx.selectedEnd == "back" && ctx.backSelectedSetup != null && (
                <a
                    href={`/api/download?setupid=${
                        ctx.backSelectedSetup != null
                            ? ctx.backSelectedSetup.id
                            : null
                    }`}>
                    <h3 className={styles.downloadLink}>download setup</h3>
                </a>
            )}
            {ctx.selectedEnd == "together" && ctx.bothSelectedSetup != null && (
                <a
                    href={`/api/download?setupid=${
                        ctx.bothSelectedSetup != null
                            ? ctx.bothSelectedSetup.id
                            : null
                    }`}>
                    <h3 className={styles.downloadLink}>download setup</h3>
                </a>
            )}
            {ctx.selectedEnd == "separate" &&
                ctx.frontSelectedSetup != null &&
                ctx.backSelectedSetup != null && (
                    <a
                        href={`/api/download?separate=true&setupid1=${
                            ctx.frontSelectedSetup != null
                                ? ctx.frontSelectedSetup.id
                                : null
                        }&setupid2=${
                            ctx.backSelectedSetup != null
                                ? ctx.backSelectedSetup.id
                                : null
                        }`}>
                        <h3 className={styles.downloadLink}>download setup</h3>
                    </a>
                )}
            {ctx.selectedEnd == "separate" && (
                <div className={styles.explanation}>
                    <span className={styles.important}>
                        Important - after download:
                    </span>
                    <br />
                    In order to properly connect your selected frontend and
                    backend you need your backend to act as a proxy server. For
                    that you need to go into your front end folder, and in the
                    package.json file add a "proxy" value with the key of your
                    backend url, which is "http://localhost:8080"
                    <br />
                    <img
                        className={styles.image}
                        src="/proxy_setup_screenshot.png"
                        alt="image showing how to add proxy to package.json"
                    />
                </div>
            )}
        </div>
    );
};

export default SelectPage;
