"use strict";
(() => {
var exports = {};
exports.id = 339;
exports.ids = [339];
exports.modules = {

/***/ 7357:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ mongodb)
});

;// CONCATENATED MODULE: external "mongodb"
const external_mongodb_namespaceObject = require("mongodb");
;// CONCATENATED MODULE: ./lib/mongodb.js

const uri = process.env.MONGODB_URI;
const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};
let client;
let clientPromise;
if (false) {} else {
    client = new external_mongodb_namespaceObject.MongoClient(uri, options);
    clientPromise = client.connect();
}
/* harmony default export */ const mongodb = (clientPromise);


/***/ }),

/***/ 5287:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7357);

const handler = async (req, res)=>{
    if (req.method == "POST") {
        try {
            let client = await _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z;
            const db = client.db("test");
            const docCount = await db.collection("contributions").countDocuments();
            await db.collection("contributions").insertOne({
                ...req.body,
                id: docCount
            });
            res.send("success");
        } catch (e) {
            console.log(e);
            res.send("error");
        }
    } else {
        res.redirect("/");
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(5287));
module.exports = __webpack_exports__;

})();