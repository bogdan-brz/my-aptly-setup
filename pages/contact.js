import { Fragment } from "react";
import ContactPage from "../components/pages/contact/ContactPage";
import Head from "next/head";

const Contact = () => {
    return (
        <Fragment>
            <Head>
                <title>Contact Us</title>
                <meta
                    name="description"
                    content="With any questions, concers, or suggestions, reach out to us through here"
                />
            </Head>
            <ContactPage />
        </Fragment>
    );
};

export default Contact;
