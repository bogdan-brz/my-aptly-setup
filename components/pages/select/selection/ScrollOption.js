import styles from "./ScrollOption.module.css";

const ScrollOption = (props) => {
    const clickHandler = () => {
        props.onSelect({
            type: `select-${props.label}`,
            payload: props.option,
        });
    };
    return (
        <div
            className={`${styles.option} ${props.selected && styles.selected}`}
            onClick={clickHandler}
        >
            {props.option.name}
        </div>
    );
};

export default ScrollOption;
