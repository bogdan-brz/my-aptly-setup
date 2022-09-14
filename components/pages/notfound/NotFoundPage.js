import styles from "./NotFoundPage.module.css";
import Link from "next/link";

const NotFoundPage = () => {
    return (
        <div className={styles.page}>
            <h3 className={styles.title}>
                Sorry, we couldn&apos;t find what you&apos;re looking for
            </h3>
            <Link href="/">
                <span className={styles.link}>Home</span>
            </Link>
        </div>
    );
};

export default NotFoundPage;
