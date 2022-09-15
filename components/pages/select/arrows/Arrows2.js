import styles from "./Arrows.module.css";

const Arrows2 = (props) => {
    return (
        <div className={styles.arrows}>
            <div
                className={`${styles.arrow} ${styles.a4} ${
                    props.selected != "separate" &&
                    props.selected != "" &&
                    styles.notselected
                }`}
            ></div>
            <div
                className={`${styles.arrow} ${styles.a5} ${
                    props.selected != "together" &&
                    props.selected != "" &&
                    styles.notselected
                }`}
            ></div>
        </div>
    );
};

export default Arrows2;
