import BackEnd from "./BackEnd";
import BothEnds from "./BothEnds";
import FrontEnd from "./FrontEnd";
import styles from "./SelectTree.module.css";

const SelectTree = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.tree}>
                {props.showFront && <FrontEnd {...props.frontEnd} />}
                {props.showBack && <BackEnd {...props.backEnd} />}
                {props.showBoth && <BothEnds {...props.bothEnds} />}
            </div>
        </div>
    );
};

export default SelectTree;
