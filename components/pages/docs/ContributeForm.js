import styles from "./ContributeForm.module.css";
import Link from "next/link";
import axios from "axios";
import { useRef } from "react";

const ContributeForm = () => {
    const titleRef = useRef("");
    const descriptionRef = useRef("");
    const linkRef = useRef("");
    const creditRef = useRef("");
    const submitHandler = async (e) => {
        e.preventDefault();
        if (linkRef.current.value == "") {
            alert("you need to enter your github repository link");
            return;
        }
        const data = {
            title: titleRef.current.value,
            description: descriptionRef.current.value,
            link: linkRef.current.value,
            credit: creditRef.current.value,
        };
        const response = await axios({
            url: "/api/contribute",
            method: "POST",
            data: data,
        });
        if (response.data == "success") {
            alert(
                "thank you for your contribution! we will review it and make it avaiable for others asap"
            );
        } else {
            alert("error submitting form");
        }
    };
    return (
        <form className={styles.form}>
            <label className={styles.label}>Title of your setup</label>
            <input ref={titleRef} className={styles.shortInput} />
            <label className={styles.label}>Description of your setup</label>
            <textarea
                ref={descriptionRef}
                rows={3}
                className={styles.longInput}></textarea>
            <label className={styles.label}>
                Link to a github repository with your setup
            </label>
            <input ref={linkRef} className={styles.shortInput} />
            <label className={styles.label}>
                Credit - give yourself a shoutout (optional)
            </label>
            <input ref={creditRef} className={styles.shortInput} />
            <button onClick={submitHandler} className={styles.submitBtn}>
                Submit
            </button>
            <div className={styles.contactText}>
                Having trouble?{" "}
                <Link href="/contact">
                    <span className={styles.link}>Contact us</span>
                </Link>
            </div>
        </form>
    );
};

export default ContributeForm;
