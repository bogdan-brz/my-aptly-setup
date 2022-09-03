import { SelectContextProvider } from "../components/pages/context/select-context";
import SelectPage from "../components/pages/select/SelectPage";
import { SelectionData } from "../utils/selectionData";

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
            frontEnd: SelectionData[0],
            backEnd: SelectionData[1],
            bothEnds: SelectionData[2],
        },
    };
};

export default Selector;
