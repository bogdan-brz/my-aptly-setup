import styles from "./ScrollOption.module.css";

const ScrollOption = (props) => {
    const clickHandler = () => {
        if (!props.option.available && !props.isBranchEnd) return;
        props.onSelect({
            type: `${props.labels[3]}-select-${props.labels[1]}`,
            payload: props.option,
        });
    };
    return (
        <div
            className={`${styles.option} ${
                !props.option.available &&
                !props.isBranchEnd &&
                styles.unavailable
            } ${props.selected && styles.selected}`}
            onClick={clickHandler}>
            {props.option.fullName}
            {props.option.language != null && (
                <span> ({props.option.language})</span>
            )}
            {!props.option.available && !props.isBranchEnd && (
                <span> - coming soon</span>
            )}
        </div>
    );
};

export default ScrollOption;
