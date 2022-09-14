import { useContext } from "react";
import SelectContext from "./context/select-context";
import EndSelect from "./EndSelect";
import styles from "./SelectPage.module.css";
import SelectTree from "./tree/SelectTree";
import Image from "next/image";

const SelectPage = () => {
    const ctx = useContext(SelectContext);
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
                    <div className={styles.explanationP}>
                        In order to properly connect your selected frontend and
                        backend you need your backend to act as a proxy server.
                        For that you need to go into your front end folder, and
                        in the package.json file add a &quot;proxy&quot; value
                        with the key of your backend url, which is
                        &quot;http://localhost:8080&quot;
                    </div>
                    <Image
                        src="/proxy_setup_screenshot.png"
                        alt="image showing how to add proxy to package.json"
                        width={320}
                        height={44}
                        layout="fixed"
                    />
                </div>
            )}
        </div>
    );
};

export default SelectPage;
