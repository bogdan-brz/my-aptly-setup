import clientPromise from "../../lib/mongodb";

const handler = async (req, res) => {
    if (req.method == "POST") {
        try {
            let client = await clientPromise;
            const db = client.db("test");
            const docCount = await db
                .collection("contributions")
                .countDocuments();
            await db
                .collection("contributions")
                .insertOne({ ...req.body, id: docCount });
            res.send("success");
        } catch (e) {
            console.log(e);
            res.send("error");
        }
    } else {
        res.redirect("/");
    }
};

export default handler;
