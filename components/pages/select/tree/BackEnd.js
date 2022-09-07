import styles from "./EndStyles.module.css";
import Selection from "../selection/Selection";
import { useContext } from "react";
import SelectContext from "../context/select-context";

const BackEnd = () => {
    const ctx = useContext(SelectContext);
    return (
        <div className={styles.end}>
            <h3 className={styles.title}>Backend:</h3>
            <Selection
                labels={["Language", "lang", "", "back"]}
                options={ctx.backLangOptions}
                isBranchEnd={false}
                onSelect={ctx.dispatchSelect}
                selected={ctx.backSelectedLang}
            />
            <Selection
                labels={["Framework", "fw", "a language", "back"]}
                options={ctx.backFwOptions}
                isBranchEnd={false}
                onSelect={ctx.dispatchSelect}
                selected={ctx.backSelectedFw}
            />
            <Selection
                labels={["Setups", "setup", "a framework", "back"]}
                options={ctx.backSetupOptions}
                isBranchEnd={true}
                onSelect={ctx.dispatchSelect}
                selected={ctx.backSelectedSetup}
            />
        </div>
    );
};

export default BackEnd;
