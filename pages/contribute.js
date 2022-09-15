import { Fragment } from "react";
import ContributePage from "../components/pages/contribute/ContributePage";
import Head from "next/head";

const Contribute = () => {
    return (
        <Fragment>
            <Head>
                <title>Contribute</title>
                <meta
                    name="description"
                    content="If you have a setup you think could be of use to others share it with the community here"
                />
            </Head>
            <ContributePage />
        </Fragment>
    );
};

export default Contribute;
