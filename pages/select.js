import { SelectContextProvider } from "../components/pages/select/context/select-context";
import SelectPage from "../components/pages/select/SelectPage";
import { SelectionTreeData } from "../data/selectionData";

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
            ...SelectionTreeData,
        },
    };
};

export default Selector;
