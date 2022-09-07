import Link from "next/link";
import styles from "./Description.module.css";

const Description = (props) => {
    return (
        <div
            className={`${styles.container} ${
                props.somethingSelected ? styles.showBorder : ""
            }`}>
            {props.toDescribe != null && (
                <div className={styles.descColumn}>
                    <p className={styles.description}>
                        {props.toDescribe.description}
                    </p>
                    {props.type == "setup" && (
                        <div>dependencies: {props.toDescribe.dependencies}</div>
                    )}
                    {props.type == "fw" && (
                        <Link href={`/docs/${props.toDescribe.short}`}>
                            <span>
                                More details on the {props.toDescribe.name}{" "}
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
