import Link from "next/link";
import { Fragment } from "react";
import styles from "./FrameworkPage.module.css";
import SideBar from "./SideBar";
import Spec from "./Spec";
// import MDXRemote from "next-mdx-remote";

const FrameworkPage = (props) => {
    const framework = props.framework;
    const downloadLinkText = <span></span>;
    return (
        <div className={styles.page}>
            <SideBar />
            <div className={styles.content}>
                <h1 className={styles.title}>
                    The {framework.name} Starter Project
                </h1>
                <p>{framework.description}</p>
                <ul>
                    {framework.descriptionLinks.map((descLink) => (
                        <li>
                            <a href={descLink.link}>
                                {descLink.title} - {descLink.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <Link href="/select">
                    <span>Download the {framework.name} setup</span>
                </Link>
                <h2>Specifics you can add to the above starter project</h2>
                {framework.specs.map((spec) => (
                    <Spec spec={spec} />
                ))}
            </div>
        </div>
    );
};

export default FrameworkPage;
