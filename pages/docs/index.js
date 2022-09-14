import { Fragment } from "react";
import DocsPage from "../../components/pages/docs/DocsPage";
import Head from "next/head";

const Docs = () => {
    return (
        <Fragment>
            <Head>
                <title>Documentation</title>
                <meta
                    name="description"
                    content="Our docs contain descriptions, references, and guides for how to use the setups we provide"
                />
            </Head>
            <DocsPage />
        </Fragment>
    );
};

export default Docs;
