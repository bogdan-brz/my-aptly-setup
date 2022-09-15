import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./SideBar.module.css";

const SideBar = () => {
    const router = useRouter();
    return (
        <div className={styles.sidebar}>
            <h4 className={styles.title}>Front end frameworks</h4>
            <div className={styles.listLvl1}>
                <div
                    className={`${styles.listItem} ${
                        router.query.framework == "react" && styles.active
                    }`}>
                    <div>
                        - <Link href="/docs/react">Reactjs</Link>
                    </div>
                </div>
                <div className={`${styles.listItem}`}>
                    <div className={styles.comingSoon}>- AngularJs</div>
                    <div className={styles.csSign}>coming soon</div>
                </div>
            </div>
            <h4 className={styles.title}>Back end frameworks</h4>
            <div className={styles.listLvl1}>
                <h5 className={styles.subTitle}>Nodejs</h5>
                <div className={styles.listLvl2}>
                    <div
                        className={`${styles.listItem} ${
                            router.query.framework == "express" && styles.active
                        }`}>
                        <div>
                            - <Link href="/docs/express">ExpressJs</Link>
                        </div>
                    </div>
                    <div className={`${styles.listItem}`}>
                        <div className={styles.comingSoon}>- Koa</div>
                        <div className={styles.csSign}>coming soon</div>
                    </div>
                </div>
                <h5 className={styles.subTitle + " " + styles.comingSoon}>
                    Python
                </h5>
                <div className={styles.csSign}>coming soon</div>
            </div>
            <h4 className={styles.title}>Both end frameworks</h4>
            <div className={styles.listLvl1}>
                <div
                    className={`${styles.listItem} ${
                        router.query.framework == "next" && styles.active
                    }`}>
                    <div>
                        - <Link href="/docs/next">Nextjs</Link>
                    </div>
                </div>
                <div className={`${styles.listItem}`}>
                    <div className={styles.comingSoon}>- Django</div>
                    <div className={styles.csSign}>coming soon</div>
                </div>
            </div>
            <h4 className={styles.title}>Stacks</h4>
            <div className={styles.listLvl1}>
                <div
                    className={`${styles.listItem} ${
                        router.query.framework == "mern" && styles.active
                    }`}>
                    <div>
                        - <Link href="/docs/mern">MERN</Link>
                    </div>
                </div>
                <div className={`${styles.listItem}`}>
                    <div className={styles.comingSoon}>- MEAN</div>
                    <div className={styles.csSign}>coming soon</div>
                </div>
            </div>
        </div>
    );
};

export default SideBar;
