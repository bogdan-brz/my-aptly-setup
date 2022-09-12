import styles from "./DocsPage.module.css";
import SideBar from "./SideBar";

const DocsPage = () => {
    return (
        <div className={styles.page}>
            <SideBar />
            <div className={styles.content}>
                <h1 className={styles.title}>Documentation</h1>
                <p className={styles.firstParagraph}>
                    In this documentation you will find descriptions of the
                    different setups we provide for each framework.
                </p>
                <h3 className={styles.subTitle}>Get Started</h3>
                <div className={styles.secondParagraph}>
                    <h5 className={styles.listItem}>1.</h5>
                    <div className={styles.itemText}>
                        {" "}
                        Visit the <span>Select</span> tab and choose the setup
                        you need.{" "}
                    </div>
                    <h5 className={styles.listItem}>2.</h5>
                    <div className={styles.itemText}>
                        Click the download link at the bottom. Once download
                        finished unpack the zip file
                    </div>
                    <h5 className={styles.listItem}>3.</h5>
                    <div className={styles.itemText}>
                        To change the name of your project from the default{" "}
                        <span>YourSetup</span> to something else, simply rename
                        the folder, and then go to the <span>package.json</span>{" "}
                        file and change the <span>name</span> field.
                    </div>
                    <h5 className={styles.listItem}>4.</h5>
                    <div className={styles.itemText}>
                        Run <span>npm install</span> or{" "}
                        <span>yarn install</span> in the root directory of the
                        project to create a node-modules folder and install all
                        dependencies into it. (for a both front and back end
                        setup do so in both the server folder and client folder)
                    </div>
                    <h5 className={styles.listItem}>5.</h5>
                    <div className={styles.itemText}>
                        Run the development server and start developing (if
                        unsure how to start it, go to the{" "}
                        <span>package.json</span> file and look for{" "}
                        <span>dev</span> or <span>start</span> under{" "}
                        <span>scripts</span>)
                    </div>
                </div>
                {/* <h3>Contribute</h3> */}
            </div>
        </div>
    );
};

export default DocsPage;
