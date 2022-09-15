import { Fragment } from "react";
import NotFoundPage from "../components/pages/notfound/NotFoundPage";
import Head from "next/head";

const NotFound = () => {
    return (
        <Fragment>
            <Head>
                <title>Page Not Found</title>
                <meta name="robots" content="noindex" />
            </Head>
            <NotFoundPage />
        </Fragment>
    );
};

export default NotFound;
