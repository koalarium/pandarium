import clientPromise from "../../../lib/dbConnect";

export default async (req, res) => {
    try {
        const client = await clientPromise;
        const db = client.db("pandarium");

        var data = { 
            name: "Matthew Krysiak", 
            address: "Highway to Hell 69"
        };

        db.collection("users").insertOne(data);
        res.json(data);

    } catch (e) {
        console.error(e);
    }
}