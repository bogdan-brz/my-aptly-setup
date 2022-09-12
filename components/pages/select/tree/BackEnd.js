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
                labels={["Framework", "fw", "", "back"]}
                options={ctx.backFwOptions}
                isBranchEnd={false}
                widden={false}
                onSelect={ctx.dispatchSelect}
                selected={ctx.backSelectedFw}
            />
            <Selection
                labels={["Setups", "setup", "a framework", "back"]}
                options={ctx.backSetupOptions}
                isBranchEnd={true}
                widden={true}
                onSelect={ctx.dispatchSelect}
                selected={ctx.backSelectedSetup}
            />
        </div>
    );
};

export default BackEnd;
