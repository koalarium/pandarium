import clientPromise from "../../../../lib/dbConnect";
import { hash } from "bcryptjs";

export default async (req, res) => {

    try {

        if (req.method == "POST") {

            const client = await clientPromise;
            const db = await client.db("pandarium");

            const { login, email, password, repeatPassword, birthday, acceptTerms } = req.body;

            if ( !login || !email || !password || !repeatPassword || !birthday || !email.includes('@') || !email.includes('.') ){
                res.status(422).json({ message: "Niepełne lub błędne dane!" });
                return;
            }

            else if (password != repeatPassword){
                res.status(422).json({ message: "Hasła nie zgadzają się!" });
                return;
            }

            else if (!acceptTerms){
                res.status(422).json({ message: "Nie zaakceptowano warunków korzystania z serwisu!" });
                return;
            }

            else if (password.length < 8) {
                res.status(422).json({ message: "Hasło zawiera mniej niż 8 znaków." });
                return;
            }

            const today = new Date();
            const brhd = birthday.split("-");
            const birthdayTimestamp = new Date( brhd[0], brhd[1]-1, brhd[2] );

            if (parseInt(today - birthdayTimestamp) < 504921600000) {
                res.status(422).json({ message: "Osoby poniżej 16 roku życia nie moga korzystać z tej strony."})
                return;
            }

            const existsEmail = await db.collection("users").findOne({ email: email.toLowerCase() });

            if (existsEmail) {

                res.status(422).json({ message: "Podany email jest już w użyciu!"});
                return;

            } else {
    
                const status = await db.collection("users").insertOne({
                    nick: login,
                    email: email.toLowerCase(),
                    password: await hash(password, 12),
                    email_verified_at: null,
                    birthday: birthday,
                    panda: "panda",
                    playedGames: 0,
                    wonGames: 0,
                    experience: 0,
                });
                
                await res.status(201).json({ message: "Użytkownik został stworzony!"});
                return;

            }

           
        } else {

            res.status(422).json({ message: "Nie poprawne zapytanie!"});

        }
        
    } catch (e) {


        res.status(500).json({ message: console.error(e) });

    }

}