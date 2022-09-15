import styles from "./Arrows.module.css";

const Arrows1 = (props) => {
    return (
        <div className={styles.arrows}>
            <div
                className={`${styles.arrow} ${styles.a1} ${
                    props.selected != "front" &&
                    props.selected != "" &&
                    styles.notselected
                }`}
            ></div>
            <div
                className={`${styles.arrow} ${styles.a2} ${
                    props.selected != "back" &&
                    props.selected != "" &&
                    styles.notselected
                }`}
            ></div>
            <div
                className={`${styles.arrow} ${styles.a3} ${
                    props.selected != "separate" &&
                    props.selected != "together" &&
                    props.selected != "" &&
                    styles.notselected
                }`}
            ></div>
        </div>
    );
};

export default Arrows1;
