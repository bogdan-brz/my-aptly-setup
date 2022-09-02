import Description from "./Description";
import Scroll from "./Scroll";
import styles from "./Selection.module.css";

const Selection = (props) => {
    return (
        <div className={styles.selection}>
            <div className={styles.column}>
                <h5 className={styles.title}>{props.title}</h5>
                <Scroll
                    singular={props.singular}
                    onSelect={props.onSelect}
                    onDeselect={props.onDeselect}
                    options={props.options}
                    selectedOption={props.selectedOption}
                />
            </div>
            <div className={styles.column}>
                <Description
                    singular={props.singular}
                    description={props.descriptionList}
                />
            </div>
        </div>
    );
};

export default Selection;
