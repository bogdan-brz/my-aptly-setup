import { findPackageDir, sendFileForDownload } from "../../utils/fsHelpers";

const handler = async (req, res) => {
    const { fwshort, setupid } = req.query;
    const packagePath = findPackageDir(fwshort, setupid);
    await sendFileForDownload(packagePath, res, () => {});
};

export default handler;

// TO CREATE NEW ARCHIVE
// await copyDir(
//     "./public/package_upload/constructs/front/react/blank_react",
//     "./public/package_upload/prep_area/setup1"
// );
// await zipUp(
//     "./public/package_upload/prep_area/setup1",
//     "./public/package_upload/prep_area/setup1.zip"
// );
// await sendFileForDownload(
//     "./public/package_upload/ready_packages/front/blank_react.zip",
//     res,
//     async () => {
//         await cleanupDir("./public/package_upload/prep_area/setup1");
//         await cleanupFile(
//             "./public/package_upload/prep_area/setup1.zip"
//         );
//     }
// );
