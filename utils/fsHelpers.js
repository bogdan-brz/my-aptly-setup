import { PackagesDirectory } from "../data/packagesDirectory";

const archiver = require("archiver");
const fs = require("fs");

export const makeDir = async (src) => {
    await new Promise((resolve, reject) => {
        fs.mkdir(src, { recursive: true }, (err) => {
            if (err) console.log("error" + err);
            else resolve();
        });
    });
    return;
};

export const renameDir = async (src, newSrc) => {
    await new Promise((resolve, reject) => {
        fs.rename(src, newSrc, (err) => {
            if (err) console.log("error" + err);
            else resolve();
        });
    });
    return;
};

export const copyDir = async (src, dest) => {
    await new Promise((resolve, reject) => {
        fs.cp(src, dest, { recursive: true }, (err) => {
            if (err) console.log("error" + err);
            else resolve();
        });
    });
    return;
};

export const zipUp = async (src, dest) => {
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

export const cleanupDir = async (dir) => {
    await new Promise((resolve, reject) => {
        const stream = fs.rmdir(dir, { recursive: true, force: true }, () => {
            resolve();
        });
    });
};

export const cleanupFile = async (file) => {
    await new Promise((resolve, reject) => {
        const stream = fs.rm(file, { recursive: true, force: true }, () => {
            resolve();
        });
    });
};

export const sendFileForDownload = async (src, res, cleanup) => {
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

export const findPackageDir = (id) => {
    const path = PackagesDirectory.filter((_package) => _package.id == id)[0]
        .path;
    return path;
};

export const findFolderDir = (id) => {
    const dir = PackagesDirectory.filter((_package) => _package.id == id)[0]
        .dir;
    return dir;
};
