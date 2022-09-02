const archiver = require("archiver");
const fs = require("fs");

const handler = async (req, res) => {
    // const archive = archiver("zip");
    // const stream = fs.createWriteStream("./zipped_packages/firstzip.zip");
    // archive
    //     .directory("./generated_packages/package", false)
    //     .on("error", (err) => {
    //         console.log("error" + err);
    //     })
    //     .pipe(stream);
    // archive.finalize();
    // stream.on("close", () => {
    //     res.download("./zipped_packages/firstzip.zip");
    // });
    //console.log(res);
    const filePath = "./public/uploads/test.txt";
    const stream = fs.createReadStream(filePath);
    // res.download("../../uploads/ready_packages/test.txt", "test.txt");

    // set response header: Content-Disposition
    res.setHeader("Content-Disposition", "attachment; test.txt");

    await new Promise(function (resolve) {
        stream.pipe(res);
        stream.on("end", resolve);
    });

    // pipe the read stream to the Response object
    // let file = null;
    // await stream.pipe(file);
    // console.log(file);
    // res.send(file);
    // stream.pipe(res);
    // console.log(res);
    // res.send();
};

export default handler;
