import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import clientPromise from "../../../../lib/dbConnect";
import { compare, hash, hashSync } from "bcryptjs";

export const authOptions = {

  providers: [
    CredentialsProvider({
        async authorize(credentials, req) {

          const client = await clientPromise;
          const db = await client.db("pandarium");

          const user = await db.collection('users').findOne({ email: credentials.login });
          console.log(credentials);

          if (user) {
            if (compare(credentials.password, user.password)) {
              return user;
            } else {
              throw new Error("Niepoprawny login lub hasło!");
            }
          } else {
            throw new Error("Email nie pasuje, do żadnego z rekordów!")
          }
          
          return null;

        }

      })
  ],

  session: {

    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 24 * 60 * 60, // 24 hours
    
    generateSessionToken: () => {
      return randomUUID?.() ?? randomBytes(32).toString("hex")
    }

  },

  // callbacks: {
  //   async session({ session, token }) {
  //     session.user = token.user;
  //     return session;
  //   },
  //   async jwt({ token, user }) {
  //     if (user) {
  //       token.user = user;
  //     }
  //     return token;
  //   },
  // },

}

export default NextAuth(authOptions)