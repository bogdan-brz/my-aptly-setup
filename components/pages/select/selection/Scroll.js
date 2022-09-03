import styles from "./Scroll.module.css";
import ScrollOption from "./ScrollOption";

const Scroll = (props) => {
    return (
        <div>
            <div className={styles.scroll}>
                {props.options.map((option, i) => (
                    <ScrollOption
                        label={props.labels[1]}
                        selected={
                            props.selected != null &&
                            props.selected != [] &&
                            (props.isSingular
                                ? props.selected.name == option.name
                                : props.selected.filter(
                                      (el) => el.name == option.name
                                  ).length == 1)
                        }
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
            <div className={styles.fadeBox}></div>
        </div>
    );
};

export default Scroll;
