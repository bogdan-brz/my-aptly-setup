import styles from "./Navbar.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
    const router = useRouter();
    return (
        <div className={styles.navbar}>
            <Link href="/">
                <a className={styles.logoLink}>WebDevSet</a>
            </Link>
            <div className={styles.navGroup}>
                <Link href="/">
                    <a
                        className={`${styles.link} ${
                            router.pathname == "/" ? styles.active : ""
                        }`}
                    >
                        Home
                    </a>
                </Link>
                <Link href="/select">
                    <a
                        className={`${styles.link} ${
                            router.pathname.startsWith("/select")
                                ? styles.active
                                : ""
                        }`}
                    >
                        Select
                    </a>
                </Link>
                <Link href="/docs">
                    <a
                        className={`${styles.link} ${
                            router.pathname.startsWith("/docs")
                                ? styles.active
                                : ""
                        }`}
                    >
                        Docs
                    </a>
                </Link>
            </div>
            <div>
                <Link href="/signup">
                    <a
                        className={`${styles.link} ${
                            router.pathname.startsWith("/signup")
                                ? styles.active
                                : ""
                        }`}
                    >
                        Signup
                    </a>
                </Link>
                <Link href="/login">
                    <a
                        className={`${styles.link} ${
                            router.pathname.startsWith("/login")
                                ? styles.active
                                : ""
                        }`}
                    >
                        Login
                    </a>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
