import styles from "./ScrollOption.module.css";

const ScrollOption = (props) => {
    const clickHandler = () => {
        if (!props.option.available) return;
        props.onSelect({
            type: `${props.labels[3]}-select-${props.labels[1]}`,
            payload: props.option,
        });
    };
    return (
        <div
            className={`${styles.option} ${
                !props.option.available && styles.unavailable
            } ${props.selected && styles.selected}`}
            onClick={clickHandler}>
            {props.option.name}
            {!props.option.available && <span> - coming soon</span>}
        </div>
    );
};

export default ScrollOption;
