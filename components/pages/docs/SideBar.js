import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./SideBar.module.css";

const SideBar = () => {
    const router = useRouter();
    return (
        <div className={styles.sidebar}>
            <h4 className={styles.title}>Front end frameworks</h4>
            <div className={styles.list}>
                <div
                    className={`${styles.listItem} ${
                        router.query.framework == "react" && styles.active
                    }`}>
                    <span className={styles.innerListItem}>
                        - <Link href="/docs/react">Reactjs</Link>
                    </span>
                </div>
                <div
                    className={`${styles.listItem} ${
                        router.query.framework == "angular" && styles.active
                    }`}>
                    <span className={styles.innerListItem}>
                        - <Link href="/docs/angular">Angularjs</Link>
                    </span>
                </div>
                <div
                    className={`${styles.listItem} ${
                        router.query.framework == "vue" && styles.active
                    }`}>
                    <span className={styles.innerListItem}>
                        - <Link href="/docs/vue">Vuejs</Link>
                    </span>
                </div>
            </div>
            <h4 className={styles.title}>Back end frameworks</h4>
            <div className={styles.list}>
                <div className={styles.langList}>
                    <h5 className={styles.subTitle}>Nodejs</h5>
                    <div className={styles.list}>
                        <div
                            className={`${styles.listItem} ${
                                router.query.framework == "angular" &&
                                styles.active
                            }`}>
                            <span className={styles.innerListItem}>
                                - <Link href="/docs/express">ExpressJs</Link>
                            </span>
                        </div>
                        <div
                            className={`${styles.listItem} ${
                                router.query.framework == "angular" &&
                                styles.active
                            }`}>
                            <span className={styles.innerListItem}>
                                - <Link href="/docs/koa">Koa</Link>
                            </span>
                        </div>
                    </div>
                </div>
                <div className={styles.langList}>
                    <h5 className={styles.subTitle + " " + styles.comingSoon}>
                        Python
                    </h5>
                    <span className={styles.comingSoon}>coming soon</span>
                    {/* <div className={styles.list}>
                        <li
                            className={`${styles.listItem} ${
                                router.query.framework == "angular" &&
                                styles.active
                            }`}
                        >
                        <span className={styles.innerListItem}>    
                        - <Link href="/docs/flask">Flask</Link>
         </span>
                        </div>
                        <li
                            className={`${styles.listItem} ${
                                router.query.framework == "angular" &&
                                styles.active
                            }`}
                        >
                        <span className={styles.innerListItem}>    
                        - <Link href="/docs/cherrypy">CherryPy</Link>
         </span>
                        </div>
                    </div> */}
                </div>
                {/* <li>
                    <h5 className={styles.subTitle}>Ruby</h5>
                    <div className={styles.list}>
                        <li>
                        <span className={styles.innerListItem}>    
                        - <Link href="/docs/rubyonrails">Ruby on Rails</Link>
         </span>
                        </div>
                        <li>
                        <span className={styles.innerListItem}>    
                        - <Link href="/docs/sinatra">Sinatra</Link>
         </span>
                        </div>
                    </div>
                </div>
                <li>
                    <h5 className={styles.subTitle}>Java</h5>
                    <div className={styles.list}>
                        <li>
                        <span className={styles.innerListItem}>    
                        - <Link href="/docs/spring">Spring</Link>
         </span>
                        </div>
                        <li>
                        <span className={styles.innerListItem}>    
                        - <Link href="/docs/struts">Struts</Link>
         </span>
                        </div>
                    </div>
                </div> */}
            </div>
            <h4 className={styles.title}>Both end frameworks</h4>
            <div className={styles.list}>
                <div
                    className={`${styles.listItem} ${
                        router.query.framework == "next" && styles.active
                    }`}>
                    <span className={styles.innerListItem}>
                        - <Link href="/docs/next">Nextjs</Link>
                    </span>
                </div>
                <div
                    className={`${styles.listItem} ${
                        router.query.framework == "django" && styles.active
                    }`}>
                    <div>- Django</div>
                    <span className={styles.comingSoon}>coming soon</span>
                    <span className={styles.innerListItem}>
                        {/* - <Link href="/docs/django">Django</Link> */}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default SideBar;
