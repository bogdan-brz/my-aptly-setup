import Arrows1 from "./arrows/Arrows1";
import Arrows2 from "./arrows/Arrows2";
import styles from "./EndSelect.module.css";

const EndSelect = (props) => {
    const frontClickHandler = () => {
        props.onSelect({ payload: "front" });
    };
    const backClickHandler = () => {
        props.onSelect({ payload: "back" });
    };
    const separateClickHandler = () => {
        props.onSelect({ payload: "separate" });
    };
    const togetherClickHandler = () => {
        props.onSelect({ payload: "together" });
    };
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>I need a setup that is...</h2>
            <Arrows1 selected={props.selected} />
            <div className={styles.tree}>
                <div className={styles.option}>
                    <button
                        onClick={frontClickHandler}
                        className={`${styles.button} ${
                            props.selected == "front"
                                ? styles.selected
                                : props.selected != "" && styles.notselected
                        }`}
                    >
                        frontend only
                    </button>
                    <span className={styles.description}>ex. ReactJs</span>
                </div>
                <div className={styles.option}>
                    <button
                        onClick={backClickHandler}
                        className={`${styles.button} ${
                            props.selected == "back"
                                ? styles.selected
                                : props.selected != "" && styles.notselected
                        }`}
                    >
                        backend only
                    </button>
                    <span className={styles.description}>ex. NodeJs</span>
                </div>
                <div className={styles.option}>
                    <h3
                        className={`${styles.subtitle} ${
                            props.selected != "separate" &&
                            props.selected != "together" &&
                            props.selected != "" &&
                            styles.notselected
                        }`}
                    >
                        both ends as...
                    </h3>
                    <Arrows2 selected={props.selected} />
                    <div className={styles.tree}>
                        <div className={styles.option}>
                            <button
                                onClick={separateClickHandler}
                                className={`${styles.button} ${
                                    props.selected == "separate"
                                        ? styles.selected
                                        : props.selected != "" &&
                                          styles.notselected
                                }`}
                            >
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
                                    props.selected == "together"
                                        ? styles.selected
                                        : props.selected != "" &&
                                          styles.notselected
                                }`}
                            >
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
