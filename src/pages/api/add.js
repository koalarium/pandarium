import clientPromise from "../../../lib/dbConnect";

export default async (req, res) => {
    try {
        const client = await clientPromise;
        const db = client.db("pandarium");

        if (req.body.message != '') {

        const data = {
            "message": req.body.message,
            "time": req.body.time,
            "roomId": req.body.roomId,
            "author": req.body.author,
        };
        
        db.collection("messages").insertOne(data);
        res.json({ status: 200 });

        } else {
            res.json({status: 400});
        }


    } catch (e) {
        console.error(e);
        throw new Error(e).message;
    }
}