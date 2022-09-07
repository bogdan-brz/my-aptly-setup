import Link from "next/link";
import styles from "./FrameworkPage.module.css";
import SideBar from "./SideBar";
import Spec from "./Spec";

const FrameworkPage = (props) => {
    const framework = props.framework;
    return (
        <div className={styles.page}>
            <SideBar />
            <div className={styles.content}>
                <h1 className={styles.title}>
                    The {framework.name} Starter Project
                </h1>
                <p>{framework.description}</p>
                <div className={styles.list}>
                    {framework.descriptionLinks.map((descLink, i) => (
                        <div className={styles.listItem} key={i}>
                            {descLink.title} -{" "}
                            <a className={styles.link} href={descLink.link}>
                                {descLink.label}
                            </a>
                        </div>
                    ))}
                </div>
                {/* <Link
                    href={`/select?end=${
                        framework.end == "both" ? "together" : framework.end
                    }fw=${framework.short}`}>
                    <span className={styles.downloadLink}>
                        Download the {framework.name} setup
                    </span>
                </Link> */}
                <Link href={"/select"}>
                    <span className={styles.downloadLink}>
                        Download the {framework.name} setup
                    </span>
                </Link>
                <h2>{framework.name} starter setups to choose from:</h2>
                {framework.setups.map((spec, i) => (
                    <Spec spec={spec} key={i} />
                ))}
            </div>
        </div>
    );
};

export default FrameworkPage;
