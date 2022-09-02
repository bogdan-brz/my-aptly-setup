import Link from "next/link";
import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Link href="/help">Need Help?</Link>
        </footer>
    );
};

export default Footer;
