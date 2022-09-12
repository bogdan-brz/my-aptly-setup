import { SelectContextProvider } from "../components/pages/select/context/select-context";
import SelectPage from "../components/pages/select/SelectPage";
import { frameworkData } from "../data/frameworkData";

const Selector = (props) => {
    return (
        <SelectContextProvider {...props}>
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
