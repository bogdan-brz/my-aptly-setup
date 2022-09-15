import { useContext } from "react";
import SelectContext from "../context/select-context";
import styles from "./FwSelect.module.css";
import FwSelectDesc from "./FwSelectDesc";
import FwSelectOption from "./FwSelectOption";

const FwSelect = () => {
    const ctx = useContext(SelectContext);
    return (
        <div className={styles.select}>
            <h3 className={styles.title}>
                Select a {ctx.selectedEnd == "both-s" ? "Stack" : "Framework"}
            </h3>
            <div className={styles.row}>
                <div className={styles.scroll}>
                    {ctx.fwOptions.map((option, i) => (
                        <FwSelectOption
                            option={option}
                            selected={
                                ctx.selectedFw &&
                                option.fullName == ctx.selectedFw.fullName
                            }
                            key={i}
                            onSelect={ctx.dispatchSelect}
                        />
                    ))}
                </div>
                <FwSelectDesc toDescribe={ctx.selectedFw} />
            </div>
        </div>
    );
};

export default FwSelect;
