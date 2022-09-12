import styles from "./Scroll.module.css";
import ScrollOption from "./ScrollOption";

const Scroll = (props) => {
    return (
        <div>
            <div
                className={styles.scroll + " " + (props.widden && styles.wide)}>
                {props.options.map((option, i) => (
                    <ScrollOption
                        labels={props.labels}
                        selected={
                            props.selected != null &&
                            props.selected.fullName == option.fullName
                        }
                        isBranchEnd={props.isBranchEnd}
                        onSelect={props.onSelect}
                        key={i}
                        option={option}
                    />
                ))}
                {props.options.length == 0 && (
                    <div className={styles.disclaimer}>
                        select {props.labels[2]}
                    </div>
                )}
            </div>
            {/* <div className={styles.fadeBox}></div> */}
        </div>
    );
};

export default Scroll;
