import styles from "./FwSelectDesc.module.css";
import Link from "next/link";
import { Fragment } from "react";

const FwSelectDesc = (props) => {
    return (
        <div className={styles.container}>
            {props.toDescribe && (
                <div>
                    <p className={styles.description}>
                        {props.toDescribe.description}
                    </p>
                    <Link href={`/docs/${props.toDescribe.shortName}`}>
                        <span className={styles.link}>
                            More details on the {props.toDescribe.fullName}{" "}
                            setups
                        </span>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default FwSelectDesc;
