import { useContext } from "react";
import SelectContext from "../context/select-context";
import BackEnd from "./BackEnd";
import BothEnds from "./BothEnds";
import FrontEnd from "./FrontEnd";
import styles from "./SelectTree.module.css";

const SelectTree = () => {
    const ctx = useContext(SelectContext);
    return (
        <div className={styles.container}>
            <div className={styles.tree}>
                {ctx.showFront && <FrontEnd />}
                {ctx.showBack && <BackEnd />}
                {ctx.showBoth && <BothEnds />}
            </div>
        </div>
    );
};

export default SelectTree;
