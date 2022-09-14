import styles from "./ContributePage.module.css";
import ContributeForm from "../docs/ContributeForm";

const ContributePage = () => {
    return (
        <div className={styles.page}>
            <h3 className={styles.title}>
                If you have a setup that could be of help to others, share it
                with the community by filling out this form.
            </h3>
            <ContributeForm />
        </div>
    );
};

export default ContributePage;
