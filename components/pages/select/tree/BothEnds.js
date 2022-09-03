import styles from "./EndStyles.module.css";
import Selection from "../selection/Selection";
import { useContext } from "react";
import SelectContext from "../../context/select-context";

const BothEnds = () => {
    const ctx = useContext(SelectContext);
    return (
        <div className={styles.end}>
            <h3 className={styles.title}>Bothend:</h3>
            <Selection
                labels={["Framework", "fw", "", "both"]}
                options={ctx.bothFwOptions}
                isSingular={true}
                onSelect={ctx.dispatchSelect}
                selected={ctx.bothSelectedFw}
            />
            <Selection
                labels={["Specifics", "spec", "", "both"]}
                options={ctx.bothSpecOptions}
                isSingular={false}
                onSelect={ctx.dispatchSelect}
                selected={ctx.bothSelectedSpecs}
            />
        </div>
    );
};

export default BothEnds;
