import clientPromise from "../../../lib/dbConnect";

export default async (req, res) => {
    try {
        const client = await clientPromise;
        const db = client.db("pandarium");
        const roomId = req.body.roomId;

        let data = await db.collection("messages").find({ roomId: roomId }).toArray();

        res.json({ status: 200, data: data });

    } catch (e) {
        console.error(e);
        throw new Error(e).message;
    }
}