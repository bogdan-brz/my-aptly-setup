import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./SideBar.module.css";

const SideBar = () => {
    const router = useRouter();
    console.log(router.query);
    return (
        <div className={styles.sidebar}>
            <h4>Front end frameworks:</h4>
            <ul>
                <li
                    className={`${styles.listItem} ${
                        router.query.framework == "react" && styles.active
                    }`}
                >
                    <Link href="/docs/react">Reactjs</Link>
                </li>
                <li
                    className={`${styles.listItem} ${
                        router.query.framework == "angular" && styles.active
                    }`}
                >
                    <Link href="/docs/angular">Angularjs</Link>
                </li>
                <li
                    className={`${styles.listItem} ${
                        router.query.framework == "vue" && styles.active
                    }`}
                >
                    <Link href="/docs/vue">Vuejs</Link>
                </li>
            </ul>
            <h4>Back end frameworks by language</h4>
            <ul>
                <li>
                    <h5>Nodejs</h5>
                    <ul>
                        <li
                            className={`${styles.listItem} ${
                                router.query.framework == "angular" &&
                                styles.active
                            }`}
                        >
                            <Link href="/docs/express">ExpressJs</Link>
                        </li>
                        <li
                            className={`${styles.listItem} ${
                                router.query.framework == "angular" &&
                                styles.active
                            }`}
                        >
                            <Link href="/docs/koa">Koa</Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <h5>Python</h5>
                    <ul>
                        <li
                            className={`${styles.listItem} ${
                                router.query.framework == "angular" &&
                                styles.active
                            }`}
                        >
                            <Link href="/docs/flask">Flask</Link>
                        </li>
                        <li
                            className={`${styles.listItem} ${
                                router.query.framework == "angular" &&
                                styles.active
                            }`}
                        >
                            <Link href="/docs/cherrypy">CherryPy</Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <h5>Ruby</h5>
                    <ul>
                        <li>
                            <Link href="/docs/rubyonrails">Ruby on Rails</Link>
                        </li>
                        <li>
                            <Link href="/docs/sinatra">Sinatra</Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <h5>Java</h5>
                    <ul>
                        <li>
                            <Link href="/docs/spring">Spring</Link>
                        </li>
                        <li>
                            <Link href="/docs/struts">Struts</Link>
                        </li>
                    </ul>
                </li>
            </ul>
            <h4>Both end frameworks:</h4>
            <ul>
                <li
                    className={`${styles.listItem} ${
                        router.query.framework == "next" && styles.active
                    }`}
                >
                    <Link href="/docs/next">Nextjs</Link>
                </li>
                <li
                    className={`${styles.listItem} ${
                        router.query.framework == "django" && styles.active
                    }`}
                >
                    <Link href="/docs/django">Django</Link>
                </li>
            </ul>
        </div>
    );
};

export default SideBar;
