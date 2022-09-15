import FrameworkPage from "../../components/pages/docs/FrameworkPage";
import { frameworkData } from "../../data/frameworkData";

const Framework = (props) => {
    return <FrameworkPage {...props} />;
};

export const getStaticPaths = () => {
    const availableFws = frameworkData.filter((fw) => fw.available);
    const paths = availableFws.map((fw) => ({
        params: {
            framework: fw.shortName,
        },
    }));
    return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
    const { params } = context;
    const framework = frameworkData.filter(
        (fw) => fw.shortName == params.framework
    )[0];
    return { props: { framework } };
};

export default Framework;
