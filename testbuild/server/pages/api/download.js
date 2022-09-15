"use strict";
(() => {
var exports = {};
exports.id = 51;
exports.ids = [51];
exports.modules = {

/***/ 5500:
/***/ ((module) => {

module.exports = require("archiver");

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 8434:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ download)
});

;// CONCATENATED MODULE: ./data/packagesDirectory.js
const PackagesDirectory = [
    {
        id: 0,
        path: "./public/package_upload/ready_packages/front/react_blank.zip",
        dir: "./public/package_upload/framework_setups/front/react_blank"
    },
    {
        id: 1,
        path: "./public/package_upload/ready_packages/front/react_with_react_dom_v6.zip",
        dir: "./public/package_upload/framework_setups/front/react_with_react_dom_v6"
    },
    {
        id: 2,
        path: "./public/package_upload/ready_packages/front/react_with_redux_toolkit.zip",
        dir: "./public/package_upload/framework_setups/front/react_with_redux_toolkit"
    },
    {
        id: 3,
        path: "./public/package_upload/ready_packages/back/express_blank.zip",
        dir: "./public/package_upload/framework_setups/back/express_blank"
    },
    {
        id: 4,
        path: "./public/package_upload/ready_packages/back/express_with_mongodb_mongoose.zip",
        dir: "./public/package_upload/framework_setups/back/express_with_mongodb_mongoose"
    },
    {
        id: 5,
        path: "./public/package_upload/ready_packages/back/express_with_jsonwebtoken.zip",
        dir: "./public/package_upload/framework_setups/back/express_with_jsonwebtoken"
    },
    {
        id: 6,
        path: "./public/package_upload/ready_packages/both/next_blank.zip",
        dir: "./public/package_upload/framework_setups/both/next_blank"
    },
    {
        id: 7,
        path: "./public/package_upload/ready_packages/both/next_with_mongodb.zip",
        dir: "./public/package_upload/framework_setups/both/next_with_mongodb"
    },
    {
        id: 8,
        path: "./public/package_upload/ready_packages/both/next_with_nextauth.zip",
        dir: "./public/package_upload/framework_setups/both/next_with_nextauth"
    }, 
];

;// CONCATENATED MODULE: ./utils/fsHelpers.js

const archiver = __webpack_require__(5500);
const fs = __webpack_require__(7147);
const makeDir = async (src)=>{
    await new Promise((resolve, reject)=>{
        fs.mkdir(src, {
            recursive: true
        }, (err)=>{
            if (err) console.log("error" + err);
            else resolve();
        });
    });
    return;
};
const renameDir = async (src, newSrc)=>{
    await new Promise((resolve, reject)=>{
        fs.rename(src, newSrc, (err)=>{
            if (err) console.log("error" + err);
            else resolve();
        });
    });
    return;
};
const copyDir = async (src, dest)=>{
    await new Promise((resolve, reject)=>{
        fs.cp(src, dest, {
            recursive: true
        }, (err)=>{
            if (err) console.log("error" + err);
            else resolve();
        });
    });
    return;
};
const zipUp = async (src, dest)=>{
    await new Promise((resolve, reject)=>{
        const archive = archiver("zip");
        const stream = fs.createWriteStream(dest);
        archive.directory(src, false).on("error", (err)=>{
            console.log("error" + err);
        }).pipe(stream);
        archive.finalize();
        stream.on("close", ()=>{
            resolve();
        });
    });
    return;
};
const cleanupDir = async (dir)=>{
    await new Promise((resolve, reject)=>{
        const stream = fs.rmdir(dir, {
            recursive: true,
            force: true
        }, ()=>{
            resolve();
        });
    });
};
const cleanupFile = async (file)=>{
    await new Promise((resolve, reject)=>{
        const stream = fs.rm(file, {
            recursive: true,
            force: true
        }, ()=>{
            resolve();
        });
    });
};
const sendFileForDownload = async (src, res, cleanup)=>{
    res.setHeader("Content-Disposition", "attachment; filename=YourSetup.zip");
    await new Promise((resolve, reject)=>{
        const stream = fs.createReadStream(src);
        stream.pipe(res);
        stream.on("end", async ()=>{
            await cleanup();
            resolve();
        });
    });
    return res.end();
};
const findPackageDir = (id)=>{
    const path = PackagesDirectory.filter((_package)=>_package.id == id)[0].path;
    return path;
};
const findFolderDir = (id)=>{
    const dir = PackagesDirectory.filter((_package)=>_package.id == id)[0].dir;
    return dir;
};

;// CONCATENATED MODULE: ./pages/api/download.js

const handler = async (req, res)=>{
    const { setupid , separate , setupid1 , setupid2  } = req.query;
    const rand = Math.floor(Math.random() * 1000);
    if (separate) {
        if (setupid1 == null || setupid2 == null) return res.redirect("/");
        const frontPath = findFolderDir(setupid1);
        const backPath = findFolderDir(setupid2);
        console.log(frontPath, backPath);
        await makeDir(`./public/package_upload/prep_area/${rand}/YourSetup`);
        await copyDir(frontPath, `./public/package_upload/prep_area/${rand}/YourSetup/client`);
        await copyDir(backPath, `./public/package_upload/prep_area/${rand}/YourSetup/server`);
        await zipUp(`./public/package_upload/prep_area/${rand}/YourSetup`, `./public/package_upload/prep_area/${rand}/frontandback.zip`);
        await sendFileForDownload(`./public/package_upload/prep_area/${rand}/frontandback.zip`, res, async ()=>{
            await cleanupDir(`./public/package_upload/prep_area/${rand}`);
        });
    } else {
        if (setupid == null) return res.redirect("/");
        const packagePath = findPackageDir(setupid);
        await sendFileForDownload(packagePath, res, ()=>{});
    }
};
/* harmony default export */ const download = (handler); // TO CREATE NEW ARCHIVE
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


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(8434));
module.exports = __webpack_exports__;

})();