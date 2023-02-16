import clientPromise from "../../../lib/dbConnect";
import { ObjectId } from "mongodb";

export default async (req, res) => {
    try {
        const client = await clientPromise;
        const db = client.db("pandarium");

        db
            .collection("users")
            .deleteOne( { "_id": new ObjectId("63eba69701a14e6fb8e0d3d5") } );

        db.dropDatabase();
        
        res.json("usunięto!");

    } catch (e) {
        console.error(e);
    }
}