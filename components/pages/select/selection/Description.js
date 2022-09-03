import styles from "./Description.module.css";

const Description = (props) => {
    return (
        <div
            className={`${styles.container} ${
                props.somethingSelected ? styles.showBorder : ""
            }`}
        >
            {props.isSingular && props.toDescribe != null && (
                <p className={styles.description}>
                    {props.toDescribe.description}
                </p>
            )}
            {!props.isSingular && props.toDescribe != [] && (
                <ul className={styles.list}>
                    {props.toDescribe.map((el, i) => (
                        <li className={styles.listEl} key={i}>
                            {el.name}: {el.description}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Description;
