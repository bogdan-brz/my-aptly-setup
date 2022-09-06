import { PackagesDirectory } from "../../utils/packagesDirectory";

const archiver = require("archiver");
const fs = require("fs");

const copyDir = async (src, dest) => {
    await new Promise((resolve, reject) => {
        fs.cp(src, dest, { recursive: true }, (err) => {
            if (err) console.log("error" + err);
            else resolve();
        });
    });
    return;
};

const zipUp = async (src, dest) => {
    await new Promise((resolve, reject) => {
        const archive = archiver("zip");
        const stream = fs.createWriteStream(dest);
        archive
            .directory(src, false)
            .on("error", (err) => {
                console.log("error" + err);
            })
            .pipe(stream);
        archive.finalize();
        stream.on("close", () => {
            resolve();
        });
    });
    return;
};

const cleanupDir = async (dir) => {
    await new Promise((resolve, reject) => {
        const stream = fs.rmdir(dir, { recursive: true, force: true }, () => {
            resolve();
        });
    });
};

const cleanupFile = async (file) => {
    await new Promise((resolve, reject) => {
        const stream = fs.rm(file, { recursive: true, force: true }, () => {
            resolve();
        });
    });
};

const sendFileForDownload = async (src, res, cleanup) => {
    res.setHeader("Content-Disposition", "attachment; filename=YourSetup.zip");
    await new Promise((resolve, reject) => {
        const stream = fs.createReadStream(src);
        stream.pipe(res);
        stream.on("end", async () => {
            await cleanup();
            resolve();
        });
    });
    return res.end();
};

const findPackageDir = (end, lang, fw, specs) => {
    let path = "";
    PackagesDirectory.forEach((options) => {
        let correct = true;
        if (
            options.end != end ||
            options.lang != lang ||
            options.fw != fw ||
            options.specs.length != specs.length
        )
            correct = false;
        let specsCorrect = true;
        options.specs.forEach((spec, i) => {
            if (spec != specs[i]) specsCorrect = false;
        });
        if (correct && specsCorrect) {
            path = options.path;
        }
    });
    return path;
};

const handler = async (req, res) => {
    const { end, lang, fw } = req.query;
    let specs = req.query.specs.split(",");
    if (specs[0] == "") specs = [];
    const packagePath = findPackageDir(end, lang, fw, specs);
    if (end == "front" && fw == "react" && specs.length == 0) {
        await sendFileForDownload(packagePath, res, () => {});
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
