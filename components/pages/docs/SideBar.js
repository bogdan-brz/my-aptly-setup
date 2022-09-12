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
                <div
                    className={`${styles.listItem} ${
                        router.query.framework == "angular" && styles.active
                    }`}>
                    <div className={styles.comingSoon}>
                        {/* - <Link href="/docs/angular">Angularjs</Link> */}-
                        AngularJs
                    </div>
                    <div className={styles.csSign}>coming soon</div>
                </div>
                {/* <div
                    className={`${styles.listItem} ${
                        router.query.framework == "vue" && styles.active
                    }`}>
                    <div>
                        - <Link href="/docs/vue">Vuejs</Link>
                    </div>
                </div> */}
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
                    <div
                        className={`${styles.listItem} ${
                            router.query.framework == "koa" && styles.active
                        }`}>
                        <div className={styles.comingSoon}>
                            {/* - <Link href="/docs/koa">Koa</Link> */}- Koa
                        </div>
                        <div className={styles.csSign}>coming soon</div>
                    </div>
                </div>
                <h5 className={styles.subTitle + " " + styles.comingSoon}>
                    Python
                </h5>
                <div className={styles.csSign}>coming soon</div>
                {/* <div className={styles.listLvl2}>
                        <li
                            className={`${styles.listItem} ${
                                router.query.framework == "angular" &&
                                styles.active
                            }`}
                        >
                        <div>    
                        - <Link href="/docs/flask">Flask</Link>
         </div>
                        </div>
                        <li
                            className={`${styles.listItem} ${
                                router.query.framework == "angular" &&
                                styles.active
                            }`}
                        >
                        <div>    
                        - <Link href="/docs/cherrypy">CherryPy</Link>
         </div>
                        </div>
                    </div> */}
                {/* <li>
                    <h5 className={styles.subTitle}>Ruby</h5>
                    <div className={styles.list}>
                        <li>
                        <div>    
                        - <Link href="/docs/rubyonrails">Ruby on Rails</Link>
         </div>
                        </div>
                        <li>
                        <div>    
                        - <Link href="/docs/sinatra">Sinatra</Link>
         </div>
                        </div>
                    </div>
                </div>
                <li>
                    <h5 className={styles.subTitle}>Java</h5>
                    <div className={styles.list}>
                        <li>
                        <div>    
                        - <Link href="/docs/spring">Spring</Link>
         </div>
                        </div>
                        <li>
                        <div>    
                        - <Link href="/docs/struts">Struts</Link>
         </div>
                        </div>
                    </div>
                </div> */}
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
                <div
                    className={`${styles.listItem} ${
                        router.query.framework == "django" && styles.active
                    }`}>
                    <div className={styles.comingSoon}>- Django</div>
                    <div className={styles.csSign}>coming soon</div>
                    <div>{/* - <Link href="/docs/django">Django</Link> */}</div>
                </div>
            </div>
        </div>
    );
};

export default SideBar;
