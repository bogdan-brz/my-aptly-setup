import Description from "./Description";
import Scroll from "./Scroll";
import styles from "./Selection.module.css";

const Selection = (props) => {
    return (
        <div className={styles.selection}>
            <h5 className={styles.title}>{props.labels[0]}</h5>
            <div className={styles.row}>
                <Scroll
                    isBranchEnd={props.isBranchEnd}
                    onSelect={props.onSelect}
                    options={props.options}
                    selected={props.selected}
                    labels={props.labels}
                />
                <Description
                    type={props.labels[1]}
                    somethingSelected={
                        props.isBranchEnd && props.selected != null
                    }
                    isBranchEnd={props.isBranchEnd}
                    toDescribe={props.selected}
                />
            </div>
        </div>
    );
};

export default Selection;
