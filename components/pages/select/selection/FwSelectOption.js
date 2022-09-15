import styles from "./FwSelectOption.module.css";

const FwSelectOption = (props) => {
    const clickHandler = () => {
        if (!props.option.available) return;
        props.onSelect({ type: "fw-select", payload: props.option });
    };
    return (
        <div
            className={`${styles.option} ${
                !props.option.available && styles.unavailable
            } ${props.selected && styles.selected}`}
            onClick={clickHandler}>
            {props.option.fullName}
            {props.option.language != null && (
                <span> ({props.option.language})</span>
            )}
            {!props.option.available && <span> - coming soon</span>}
        </div>
    );
};

export default FwSelectOption;
