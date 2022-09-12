import { useContext } from "react";
import SelectContext from "./context/select-context";
import Arrows1 from "./arrows/Arrows1";
import Arrows2 from "./arrows/Arrows2";
import styles from "./EndSelect.module.css";

const EndSelect = () => {
    const ctx = useContext(SelectContext);
    const frontClickHandler = () => {
        ctx.dispatchSelect({ type: "end-select", payload: "front" });
    };
    const backClickHandler = () => {
        ctx.dispatchSelect({ type: "end-select", payload: "back" });
    };
    const separateClickHandler = () => {
        ctx.dispatchSelect({ type: "end-select", payload: "separate" });
    };
    const togetherClickHandler = () => {
        ctx.dispatchSelect({ type: "end-select", payload: "together" });
    };
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>I need a setup that is...</h2>
            <Arrows1 selected={ctx.selectedEnd} />
            <div className={styles.tree}>
                <div className={styles.option}>
                    <button
                        onClick={frontClickHandler}
                        className={`${styles.button} ${
                            ctx.selectedEnd == "front"
                                ? styles.selected
                                : ctx.selectedEnd != "" && styles.notselected
                        }`}>
                        frontend only
                    </button>
                    <span className={styles.description}>ex. ReactJs</span>
                </div>
                <div className={styles.option}>
                    <button
                        onClick={backClickHandler}
                        className={`${styles.button} ${
                            ctx.selectedEnd == "back"
                                ? styles.selected
                                : ctx.selectedEnd != "" && styles.notselected
                        }`}>
                        backend only
                    </button>
                    <span className={styles.description}>ex. ExpressJs</span>
                </div>
                <div className={styles.option}>
                    <h3
                        className={`${styles.subtitle} ${
                            ctx.selectedEnd != "separate" &&
                            ctx.selectedEnd != "together" &&
                            ctx.selectedEnd != "" &&
                            styles.notselected
                        }`}>
                        both ends as...
                    </h3>
                    <Arrows2 selected={ctx.selectedEnd} />
                    <div className={styles.tree}>
                        <div className={styles.option}>
                            <button
                                onClick={separateClickHandler}
                                className={`${styles.button} ${
                                    ctx.selectedEnd == "separate"
                                        ? styles.selected
                                        : ctx.selectedEnd != "" &&
                                          styles.notselected
                                }`}>
                                separate frameworks
                            </button>
                            <span className={styles.description}>
                                ex. ReactJs front + NodeJs back
                            </span>
                        </div>
                        <div className={styles.option}>
                            <button
                                onClick={togetherClickHandler}
                                className={`${styles.button} ${
                                    ctx.selectedEnd == "together"
                                        ? styles.selected
                                        : ctx.selectedEnd != "" &&
                                          styles.notselected
                                }`}>
                                one framework
                            </button>
                            <span className={styles.description}>
                                ex. NextJs
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EndSelect;
