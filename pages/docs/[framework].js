import FrameworkPage from "../../components/pages/docs/FrameworkPage";
// import { serialize } from "next-mdx-remote/serialize";
import { FrameworkDetails } from "../../utils/detailedFrameworkData";

const Framework = (props) => {
    return <FrameworkPage {...props} />;
};

export const getStaticPaths = () => {
    const paths = FrameworkDetails.map((fw) => ({
        params: {
            framework: fw.short,
        },
    }));
    return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
    const { params } = context;
    const framework = FrameworkDetails.filter(
        (fw) => fw.short == params.framework
    )[0];
    // const description = await serialize(framework.description);
    return { props: { framework } };
};

export default Framework;
