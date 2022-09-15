import { useRef } from "react";
import styles from "./ContactPage.module.css";
import axios from "axios";

const ContactPage = () => {
    const nameRef = useRef("");
    const subjectRef = useRef("");
    const messageRef = useRef("");
    const emailRef = useRef("");
    const submitHandler = async (e) => {
        e.preventDefault();
        if (messageRef.current.value == "") {
            alert("you need to enter a message to send us a message...");
            return;
        }
        const data = {
            name: nameRef.current.value,
            subject: subjectRef.current.value,
            message: messageRef.current.value,
            email: emailRef.current.value,
        };
        const response = await axios({
            url: "/api/contact",
            method: "POST",
            data: data,
        });
        if (response.data == "success") {
            alert(
                "thank you for contacting us, we will review your message shortly"
            );
        } else {
            alert("error submitting form");
        }
    };
    return (
        <div className={styles.page}>
            <h3 className={styles.title}>
                Please let us know of any questions, concerns, or suggestions
                you might have through the form below:
            </h3>
            <form className={styles.form}>
                <label className={styles.label}>
                    Your name (and job title if neccesary)
                </label>
                <input
                    placeholder="ex. John Smith - frontend developer"
                    ref={nameRef}
                    className={styles.input}
                />
                <label className={styles.label}>Subject of your inquiry</label>
                <input ref={subjectRef} className={styles.input} />
                <label className={styles.label}>Your message</label>
                <textarea
                    ref={messageRef}
                    className={styles.input}
                    rows={5}></textarea>
                <label className={styles.label}>Your email</label>
                <input ref={emailRef} className={styles.input} />
                <button className={styles.submitBtn} onClick={submitHandler}>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default ContactPage;
