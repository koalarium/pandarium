import clientPromise from "../../../../lib/dbConnect";
import { hash } from "bcryptjs";

export default async (req, res) => {

    try {

        if (req.method == "POST") {

            const client = await clientPromise;
            const db = await client.db("pandarium");
            

        } else {

            res.status(422).json({ message: "Nie poprawne zapytanie!"});

        }
        
    } catch (e) {


        res.status(500).json({ message: console.error(e) });

    }

}