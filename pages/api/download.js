import {
    cleanupDir,
    copyDir,
    findFolderDir,
    findPackageDir,
    makeDir,
    sendFileForDownload,
    zipUp,
} from "../../utils/fsHelpers";
import path from "path";

const handler = async (req, res) => {
    const { setupid, separate, setupid1, setupid2 } = req.query;
    const rand = Math.floor(Math.random() * 1000);
    console.log("herererere");
    if (separate) {
        if (setupid1 == null || setupid2 == null) return res.redirect("/");
        const frontPath = findFolderDir(setupid1);
        const backPath = findFolderDir(setupid2);
        console.log("here");
        console.log(
            path.join(
                process.cwd(),
                `package_upload/prep_area/${rand}/YourSetup`
            )
        );
        await makeDir(
            path.join(
                process.cwd(),
                `package_upload/prep_area/${rand}/YourSetup`
            )
        );
        await copyDir(
            frontPath,
            path.join(
                process.cwd()`package_upload/prep_area/${rand}/YourSetup/client`
            )
        );
        await copyDir(
            backPath,
            path.join(
                process.cwd()`package_upload/prep_area/${rand}/YourSetup/server`
            )
        );
        await zipUp(
            path.join(
                process.cwd()`package_upload/prep_area/${rand}/YourSetup`
            ),
            path.join(
                process.cwd()`package_upload/prep_area/${rand}/frontandback.zip`
            )
        );
        await sendFileForDownload(
            path.join(
                process.cwd()`package_upload/prep_area/${rand}/frontandback.zip`
            ),
            res,
            async () => {
                await cleanupDir(
                    path.join(process.cwd()`package_upload/prep_area/${rand}`)
                );
            }
        );
    } else {
        if (setupid == null) return res.redirect("/");
        const packagePath = findPackageDir(setupid);
        console.log(path.join(process.cwd(), packagePath));
        await sendFileForDownload(
            path.join(process.cwd(), packagePath),
            res,
            () => {}
        );
    }
};

export default handler;

// TO CREATE NEW ARCHIVE
// await copyDir(
//     "package_upload/constructs/front/react/blank_react",
//     "package_upload/prep_area/setup1"
// );
// await zipUp(
//     "package_upload/prep_area/setup1",
//     "package_upload/prep_area/setup1.zip"
// );
// await sendFileForDownload(
//     "package_upload/ready_packages/front/blank_react.zip",
//     res,
//     async () => {
//         await cleanupDir("package_upload/prep_area/setup1");
//         await cleanupFile(
//             "package_upload/prep_area/setup1.zip"
//         );
//     }
// );
