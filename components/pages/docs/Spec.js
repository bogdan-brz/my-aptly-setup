import styles from "./Spec.module.css";

const Spec = (props) => {
    const spec = props.spec;
    return (
        <div className={styles.spec}>
            <h4 className={styles.title}>{spec.name}</h4>
            <p className={styles.description}>{spec.description}</p>
        </div>
    );
};

export default Spec;
