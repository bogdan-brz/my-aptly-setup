import HomePage from "../components/pages/home/HomePage";
import Head from "next/head";
import { Fragment } from "react";

const Home = () => {
    return (
        <Fragment>
            <Head>
                <title>AptlySetup</title>
                <meta
                    name="description"
                    content="Simple and approachable web development project setups for learners and quick starters"
                />
            </Head>
            <HomePage />
        </Fragment>
    );
};

export default Home;
