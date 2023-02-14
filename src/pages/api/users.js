import clientPromise from "../../../lib/dbConnect";

export default async (req, res) => {
    try {

        const client = await clientPromise;
        const db = client.db("pandarium");

        db.createCollection("customers", function(err, res) {
          if (err) console.log(err);
          console.log("Collection created!");
          db.close();
        });

        res.json("UDAŁO SIE!");

    } catch (e) {
        console.error(e);
    }
}