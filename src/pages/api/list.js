import clientPromise from "../../../lib/dbConnect";

export default async (req, res) => {
    try {
        const client = await clientPromise;
        const db = client.db("pandarium");
        
        let data = await db.collection("users").find({}).toArray();

        res.json({ status: 200, data: data });

    } catch (e) {
        console.error(e);
        throw new Error(e).message;
    }
}