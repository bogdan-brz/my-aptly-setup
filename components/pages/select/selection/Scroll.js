import styles from "./Scroll.module.css";
import ScrollOption from "./ScrollOption";

const Scroll = (props) => {
    return (
        <div className={styles.scroll}>
            {props.options.map((option, i) => (
                <ScrollOption
                    selected={
                        props.selectedOption != null &&
                        ((props.singular &&
                            props.selectedOption.name == option.name) ||
                            (!props.singular &&
                                props.selectedOption.filter(
                                    (el) => el.name == option.name
                                ).length == 1))
                    }
                    onSelect={props.onSelect}
                    onDeselect={props.onDeselect}
                    key={i}
                    option={option}
                />
            ))}
        </div>
    );
};

export default Scroll;
