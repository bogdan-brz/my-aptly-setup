import { Fragment } from "react";
import SelectPage from "../components/pages/select/SelectPage";
import { SelectionData } from "../utils/selectionData";

const Selector = (props) => {
    return (
        <Fragment>
            <SelectPage selectionData={props.selectionData} />
        </Fragment>
    );
};

export const getStaticProps = () => {
    return {
        props: { selectionData: SelectionData },
    };
};

export default Selector;
