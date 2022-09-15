import { useContext } from "react";
import SelectContext from "../context/select-context";
import styles from "./SetupSelect.module.css";
import SetupSelectDesc from "./SetupSelectDesc";
import SetupSelectOption from "./SetupSelectOption";

const SetupSelect = () => {
    const ctx = useContext(SelectContext);
    console.log(ctx.selectedSetup);
    return (
        <div className={styles.select}>
            <h3 className={styles.title}>Select a Setup</h3>
            <div className={styles.row}>
                <div className={styles.scroll}>
                    {ctx.setupOptions.map((option, i) => (
                        <SetupSelectOption
                            option={option}
                            selected={
                                ctx.selectedSetup &&
                                option.fullName == ctx.selectedSetup.fullName
                            }
                            key={i}
                            onSelect={ctx.dispatchSelect}
                        />
                    ))}
                </div>
                <SetupSelectDesc toDescribe={ctx.selectedSetup} />
            </div>
        </div>
    );
};

export default SetupSelect;
