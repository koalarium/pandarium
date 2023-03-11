import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
        async authorize(credentials, req) {

          const res = fetch('/api/login')

          const user = await checkUser();

          if (user) {
            return user
          }
          
          return null

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