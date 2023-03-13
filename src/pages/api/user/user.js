import clientPromise from "../../../../lib/dbConnect";
import { authOptions } from '../auth/[...nextauth]'
import { getServerSession } from "next-auth/next"
import { ObjectId } from "mongodb";

export default async (req, res) => {

    const session = await getServerSession(req, res, authOptions)

    try {

        if (req.method == "PUT") {

            if (session) {

                const { name, id } = req.body; 
                const client = await clientPromise;

                const db = await client.db("pandarium");
                const qr = await db.collection("users").updateOne({ _id: new ObjectId(id) }, { $set: { panda: name} });

                res.status(202).json({ message: "Pomyślnie zmieniono pande!"});
                return;

            } else {

                res.status(422).json({ message: "Nie poprawne zapytanie!"});
                return;

            }
           
        } else if (req.method == "POST") {

            if (session) {

                const id  = req.body.id; 
                const client = await clientPromise;

                const db = await client.db("pandarium");
                const user = await db.collection("users").findOne({ _id: new ObjectId(id) });
                const sendUser = {
                    id: user._id,
                    nick: user.nick,
                    email: user.email,
                    panda: user.panda,
                }
                
                res.status(200).json({ sendUser });

                return;

            } else {

                res.status(403).json({ message: "Nie masz uprawień aby zobaczyć tę treść!"});
                return;

            }



        } else {

            res.status(422).json({ message: "Nie poprawne zapytanie!"});
            return;

        }
        
    } catch (e) {

        console.log(e);
        res.status(500).json({ message: e });
        return;

    }

}