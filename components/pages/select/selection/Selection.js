import Description from "./Description";
import Scroll from "./Scroll";
import styles from "./Selection.module.css";

const Selection = (props) => {
    return (
        <div className={styles.selection}>
            <h5 className={styles.title}>{props.labels[0]}</h5>
            <div className={styles.row}>
                <Scroll
                    isSingular={props.isSingular}
                    onSelect={props.onSelect}
                    options={props.options}
                    selected={props.selected}
                    labels={props.labels}
                />
                <Description
                    somethingSelected={
                        (props.isSingular && props.selected != null) ||
                        (!props.isSingular && props.selected.length != 0)
                    }
                    isSingular={props.isSingular}
                    toDescribe={props.selected}
                />
            </div>
        </div>
    );
};

export default Selection;
