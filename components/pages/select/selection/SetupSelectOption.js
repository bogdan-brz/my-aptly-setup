import styles from "./SetupSelectOption.module.css";

const SetupSelectOption = (props) => {
    const clickHandler = () => {
        props.onSelect({ type: "setup-select", payload: props.option });
    };
    return (
        <div
            className={`${styles.option} ${props.selected && styles.selected}`}
            onClick={clickHandler}>
            {props.option.fullName}
        </div>
    );
};

export default SetupSelectOption;
