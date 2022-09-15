import clientPromise from "../lib/mongodb";

export const getFromMongo = async (_collection, selector, type) => {
    const client = await clientPromise;
    const db = client.db();
    const collection = await db.collection(_collection);
    if (type == "one") {
        const item = await collection.findOne(selector);
        return item;
    } else if (type == "multiple") {
        const items = await collection.find(selector).toArray();
        return items;
    } else if (type == "all") {
        const items = await collection.find().toArray();
        return items;
    } else return;
};

export const insertToMongo = async (_collection, data) => {
    const client = await clientPromise;
    const db = client.db();
    const collection = await db.collection(_collection);
    const item = await collection.insertOne(data);
    return item;
};

export const updateInMongo = async (_collection, selector, data) => {
    const client = await clientPromise;
    const db = client.db();
    const collection = await db.collection(_collection);
    const item = await collection.findOneAndUpdate(selector, { $set: data });
    return item;
};

export const countMongoCollection = async (_collection) => {
    const client = await clientPromise;
    const db = client.db();
    const collection = await db.collection(_collection);
    const collectionCount = await collection.countDocuments();
    return collectionCount;
};
