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
                isSingular={true}
                onSelect={ctx.dispatchSelect}
                selected={ctx.backSelectedLang}
            />
            <Selection
                labels={["Framework", "fw", "a language", "back"]}
                options={ctx.backFwOptions}
                isSingular={true}
                onSelect={ctx.dispatchSelect}
                selected={ctx.backSelectedFw}
            />
            <Selection
                labels={["Specifics", "spec", "a framework", "back"]}
                options={ctx.backSpecOptions}
                isSingular={false}
                onSelect={ctx.dispatchSelect}
                selected={ctx.backSelectedSpecs}
            />
        </div>
    );
};

export default BackEnd;
