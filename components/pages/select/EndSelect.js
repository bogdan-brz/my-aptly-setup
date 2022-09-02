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
            <div className={styles.arrows}>
                <div className={`${styles.arrow} ${styles.a1}`}></div>
                <div className={`${styles.arrow} ${styles.a2}`}></div>
                <div className={`${styles.arrow} ${styles.a3}`}></div>
            </div>
            <div className={styles.tree}>
                <div className={styles.option}>
                    <button
                        onClick={frontClickHandler}
                        className={`${styles.button} ${
                            props.selected == "front" && styles.selected
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
                            props.selected == "back" && styles.selected
                        }`}
                    >
                        backend only
                    </button>
                    <span className={styles.description}>ex. NodeJs</span>
                </div>
                <div className={styles.option}>
                    <h3 className={styles.subtitle}>both ends as...</h3>
                    <div className={styles.arrows}>
                        <div className={`${styles.arrow} ${styles.a4}`}></div>
                        <div className={`${styles.arrow} ${styles.a5}`}></div>
                    </div>
                    <div className={styles.tree}>
                        <div className={styles.option}>
                            <button
                                onClick={separateClickHandler}
                                className={`${styles.button} ${
                                    props.selected == "separate" &&
                                    styles.selected
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
                                    props.selected == "together" &&
                                    styles.selected
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
