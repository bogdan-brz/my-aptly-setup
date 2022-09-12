import Link from "next/link";
import styles from "./Description.module.css";

const Description = (props) => {
    return (
        <div
            className={`${styles.container} ${props.widden && styles.unwide} ${
                props.somethingSelected ? styles.showBorder : ""
            }`}>
            {props.toDescribe != null && (
                <div className={styles.descColumn}>
                    <p className={styles.description}>
                        {props.toDescribe.description.brief != null
                            ? props.toDescribe.description.brief
                            : props.toDescribe.description}
                    </p>
                    {props.type == "setup" && (
                        <div>
                            dependencies:{" "}
                            {props.toDescribe.description != null &&
                                props.toDescribe.description.dependencies}
                        </div>
                    )}
                    {props.type == "fw" && (
                        <Link href={`/docs/${props.toDescribe.shortName}`}>
                            <span className={styles.link}>
                                More details on the {props.toDescribe.fullName}{" "}
                                setups
                            </span>
                        </Link>
                    )}
                </div>
            )}
        </div>
    );
};

export default Description;
