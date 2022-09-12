import styles from "./EndStyles.module.css";
import Selection from "../selection/Selection";
import { useContext } from "react";
import SelectContext from "../context/select-context";

const FrontEnd = () => {
    const ctx = useContext(SelectContext);
    return (
        <div className={styles.end}>
            <h3 className={styles.title}>Frontend:</h3>
            <Selection
                labels={["Framework", "fw", "", "front"]}
                options={ctx.frontFwOptions}
                isBranchEnd={false}
                widden={false}
                onSelect={ctx.dispatchSelect}
                selected={ctx.frontSelectedFw}
            />
            <Selection
                title={"Setups"}
                labels={["Setups", "setup", "a framework", "front"]}
                widden={true}
                options={ctx.frontSetupOptions}
                isBranchEnd={true}
                onSelect={ctx.dispatchSelect}
                selected={ctx.frontSelectedSetup}
            />
        </div>
    );
};

export default FrontEnd;
