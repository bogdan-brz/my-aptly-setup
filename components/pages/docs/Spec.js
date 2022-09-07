import styles from "./Spec.module.css";

const Spec = (props) => {
    const spec = props.spec;
    return (
        <div className={styles.spec}>
            <h4 className={styles.title}>{spec.name}</h4>
            <div className={styles.indent}>
                <span className={styles.line}>-</span>
                <p className={styles.description}>{spec.description}</p>
            </div>
            <span className={styles.dependencies}>{spec.dependencies}</span>
        </div>
    );
};

export default Spec;
