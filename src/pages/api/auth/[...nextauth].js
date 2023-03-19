import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import clientPromise from "../../../../lib/dbConnect";
import { compare } from "bcryptjs";

export const authOptions = {

  providers: [
    CredentialsProvider({
        async authorize(credentials, req) {

          const client = await clientPromise;
          const db = await client.db("pandarium");

          const user = await db.collection('users').findOne({ email: credentials.login });

          if (user) {
            if (compare(credentials.password, user.password)) {

              const currentUser = {
                "id": user._id,
                "nick": user.nick,
                "email": user.email,
                "panda": user.panda,
              }

              console.log(currentUser);
              return Promise.resolve(currentUser);

            } else {

              throw new Error("Niepoprawny login lub hasło!");

            }
          } else {

            throw new Error("Email nie pasuje, do żadnego z rekordów!");

          }
          
          return null;

        }

      })
  ],

  pages: {
    signIn: '/rejestracja',
    signOut: '/panel',
    error: '/auth/error', // Error code passed in query string as ?error=
    verifyRequest: '/weryfikacja-mailowa', // (used for check email message)
    newUser: '/panel' // New users will be directed here on first sign in (leave the property out if not of interest)
  },

  session: {

    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 24 * 60 * 60, // 24 hours
    
    generateSessionToken: () => {
      return randomUUID?.() ?? randomBytes(32).toString("hex")
    }

  },

  callbacks: {

    async session({ session, token }) {

      session.user = token.user;
      session.panda = token.panda;
      return session;

    },

    async jwt({ token, user }) {

      const client = await clientPromise;
      const db = await client.db("pandarium");

      if (user) {

        token.user = user;
        const dbU = await db.collection('users').findOne({ email: user.email });
        if (dbU.panda) token.panda = await dbU.panda;
        else token.panda = "panda";

      }

      return token;
    },
    
  },

}

export default NextAuth(authOptions)