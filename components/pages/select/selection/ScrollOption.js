import styles from "./ScrollOption.module.css";

const ScrollOption = (props) => {
    console.log(`${props.labels[3]}-select-${props.labels[2]}`);
    const clickHandler = () => {
        props.onSelect({
            type: `${props.labels[3]}-select-${props.labels[1]}`,
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
