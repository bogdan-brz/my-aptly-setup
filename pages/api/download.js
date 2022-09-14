import {
    cleanupDir,
    copyDir,
    findFolderDir,
    findPackageDir,
    makeDir,
    sendFileForDownload,
    zipUp,
} from "../../utils/fsHelpers";

const handler = async (req, res) => {
    if (req.method == "POST") {
        const { setupid, separate, setupid1, setupid2 } = req.query;
        console.log(req.query);
        const rand = Math.floor(Math.random() * 1000);
        if (separate) {
            const frontPath = findFolderDir(setupid1);
            const backPath = findFolderDir(setupid2);
            console.log(frontPath, backPath);
            await makeDir(
                `./public/package_upload/prep_area/${rand}/YourSetup`
            );
            await copyDir(
                frontPath,
                `./public/package_upload/prep_area/${rand}/YourSetup/client`
            );
            await copyDir(
                backPath,
                `./public/package_upload/prep_area/${rand}/YourSetup/server`
            );
            await zipUp(
                `./public/package_upload/prep_area/${rand}/YourSetup`,
                `./public/package_upload/prep_area/${rand}/frontandback.zip`
            );
            await sendFileForDownload(
                `./public/package_upload/prep_area/${rand}/frontandback.zip`,
                res,
                async () => {
                    await cleanupDir(
                        `./public/package_upload/prep_area/${rand}`
                    );
                }
            );
        } else {
            const packagePath = findPackageDir(setupid);
            await sendFileForDownload(packagePath, res, () => {});
        }
    } else {
        res.redirect("/");
    }
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
