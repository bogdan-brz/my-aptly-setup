// import Link from "next/link";
import styles from "./Spec.module.css";

const Spec = (props) => {
    const spec = props.spec;
    return (
        <div className={styles.spec}>
            {/* <Link
                href={`/select?end=${props.end}&fw=${props.fw}&setup=${spec.id}`}> */}
            <h4 className={styles.title}>{spec.fullName}</h4>
            {/* </Link> */}
            <div className={styles.indent}>
                <span className={styles.line}>-</span>
                <p className={styles.description}>{spec.description.full}</p>
            </div>
            {spec.description.dependencies != "" && (
                <span className={styles.dependencies}>
                    {spec.description.dependencies}
                </span>
            )}
            {spec.description.links.length != 0 && (
                <div className={styles.linkList}>
                    {spec.description.links.map((link) => (
                        <a className={styles.link} href={link.link}>
                            {link.title}
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Spec;
