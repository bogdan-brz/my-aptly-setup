import BackEnd from "./BackEnd";
import BothEnds from "./BothEnds";
import FrontEnd from "./FrontEnd";
import styles from "./SelectTree.module.css";

const SelectTree = (props) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                Create your <span className={styles.subtitle}>Setup</span>
            </h1>
            <div className={styles.tree}>
                <FrontEnd selectionData={props.selectionData[0]} />
                <BackEnd selectionData={props.selectionData[1]} />
                <BothEnds selectionData={props.selectionData[2]} />
            </div>
        </div>
    );
};

export default SelectTree;
