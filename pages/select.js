import { SelectContextProvider } from "../components/pages/select/context/select-context";
import SelectPage from "../components/pages/select/SelectPage";
import { frameworkData } from "../data/frameworkData";
import Head from "next/head";

const Selector = (props) => {
    return (
        <SelectContextProvider {...props}>
            <Head>
                <title>Setup Select</title>
                <meta
                    name="description"
                    content="Use this interactive chart to find and download the setup you need"
                />
            </Head>
            <SelectPage />
        </SelectContextProvider>
    );
};

export const getStaticProps = () => {
    return {
        props: {
            frameworks: frameworkData,
        },
    };
};

export default Selector;
