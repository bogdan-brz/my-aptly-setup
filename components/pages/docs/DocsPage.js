import Link from "next/link";
import styles from "./DocsPage.module.css";

const DocsPage = () => {
    return (
        <div className={styles.page}>
            <p>
                In our Docs you can find detailed descriptions of the different
                setups we provide for each framework.
            </p>
            <h4>Front end frameworks:</h4>
            <ul>
                <li>
                    <Link href="/docs/react">Reactjs</Link>
                </li>
                <li>
                    <Link href="/docs/angular">Angularjs</Link>
                </li>
                <li>
                    <Link href="/docs/vue">Vuejs</Link>
                </li>
            </ul>
            <h4>Back end frameworks by language</h4>
            <ul>
                <li>
                    <h5>Nodejs</h5>
                    <ul>
                        <li>
                            <Link href="/docs/express">ExpressJs</Link>
                        </li>
                        <li>
                            <Link href="/docs/koa">Koa</Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <h5>Python</h5>
                    <ul>
                        <li>
                            <Link href="/docs/flask">Flask</Link>
                        </li>
                        <li>
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
                <li>
                    <Link href="/docs/next">Nextjs</Link>
                </li>
                <li>
                    <Link href="/docs/django">Django</Link>
                </li>
            </ul>
        </div>
    );
};

export default DocsPage;
