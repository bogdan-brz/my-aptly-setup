import { Fragment } from "react";
import SelectPage from "../components/pages/select/SelectPage";
import { SelectionData } from "../utils/selectionData";

const Selector = (props) => {
    return (
        <Fragment>
            <SelectPage {...props} />
        </Fragment>
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
