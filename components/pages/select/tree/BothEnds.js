import styles from "./EndStyles.module.css";
import Selection from "../selection/Selection";
import { useContext } from "react";
import SelectContext from "../context/select-context";

const BothEnds = () => {
    const ctx = useContext(SelectContext);
    return (
        <div className={styles.end}>
            <h3 className={styles.title}>Bothend:</h3>
            <Selection
                labels={["Framework", "fw", "", "both"]}
                options={ctx.bothFwOptions}
                isBranchEnd={false}
                onSelect={ctx.dispatchSelect}
                selected={ctx.bothSelectedFw}
            />
            <Selection
                labels={["Setups", "setup", "", "both"]}
                options={ctx.bothSetupOptions}
                isBranchEnd={true}
                onSelect={ctx.dispatchSelect}
                selected={ctx.bothSelectedSetup}
            />
        </div>
    );
};

export default BothEnds;
