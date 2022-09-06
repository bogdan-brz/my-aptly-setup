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
                isSingular={true}
                onSelect={ctx.dispatchSelect}
                selected={ctx.frontSelectedFw}
            />
            <Selection
                title={"Specifics"}
                labels={["Specifics", "spec", "a framework", "front"]}
                options={ctx.frontSpecOptions}
                isSingular={false}
                onSelect={ctx.dispatchSelect}
                selected={ctx.frontSelectedSpecs}
            />
        </div>
    );
};

export default FrontEnd;
