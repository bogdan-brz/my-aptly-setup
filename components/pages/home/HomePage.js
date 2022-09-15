import styles from "./HomePage.module.css";
import Link from "next/link";
import Image from "next/image";

const HomePage = () => {
    return (
        <div className={styles.page}>
            <h1 className={styles.title}>AptlySetup</h1>
            <h3 className={styles.subTitle}>
                Simple and approachable web development project setups
            </h3>
            <div className={styles.p1}>
                A huge wall of dependencies isn&apos;t a friendly sight for
                someone trying to learn a web development framework from a
                starter project. It too isn&apos;t great for someone who wants
                to get going with a project quickly without visiting countless
                documentation pages on alien dependencies.
            </div>
            <div className={styles.comparisonBlock}>
                <div>
                    <Image
                        src="/too_many_dependencies.png"
                        alt="too many dependencies exmaple"
                        width={320}
                        height={192}
                        layout="fixed"
                    />
                    <span className={styles.cross1}></span>
                    <span className={styles.cross2}></span>
                </div>
                <p className={styles.p2}>
                    AptlySetup aims to provide very lightweight setups that are
                    simple and approachable, and connect people learning web
                    development to create a community of learners.
                </p>
                <div>
                    <Image
                        className={styles.image}
                        src="/right_dependencies.png"
                        alt="right amount of dependencies example"
                        width={320}
                        height={192}
                        layout="fixed"
                    />
                    <span className={styles.check1}></span>
                    <span className={styles.check2}></span>
                </div>
            </div>
            <div className={styles.linkBlock}>
                <h4 className={styles.sectionTitle}>Choose your Setup</h4>
                <p className={styles.sectionP}>
                    Go to the{" "}
                    <Link href="/select">
                        <span className={styles.link}>Select</span>
                    </Link>{" "}
                    tab, and follow the interactive chart to find the setup you
                    need.
                </p>
                <h4 className={styles.sectionTitle}>Contribute</h4>
                <p className={styles.sectionP}>
                    This project will only be successfull if a community comes
                    together to support it. If you have a setup or starter
                    project that you think could be of use to others, share it
                    with us{" "}
                    <Link href="/contribute">
                        <span className={styles.link}>here</span>
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default HomePage;
