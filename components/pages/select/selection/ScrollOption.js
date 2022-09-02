import styles from "./ScrollOption.module.css";

const ScrollOption = (props) => {
    const clickHandler = () => {
        if (props.selected) props.onDeselect();
        else props.onSelect(props.option);
    };
    return (
        <div className={styles.option} onClick={clickHandler}>
            {props.option.name}
        </div>
    );
};

export default ScrollOption;
