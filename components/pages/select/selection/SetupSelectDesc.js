import styles from "./SetupSelectDesc.module.css";

const SetupSelectDesc = (props) => {
    return (
        <div className={styles.container}>
            {props.toDescribe && (
                <div>
                    <p className={styles.description}>
                        {props.toDescribe.description.brief}
                    </p>
                    <div>
                        dependencies:{" "}
                        {props.toDescribe.description != null &&
                            props.toDescribe.description.dependencies}
                    </div>
                </div>
            )}
        </div>
    );
};

export default SetupSelectDesc;
