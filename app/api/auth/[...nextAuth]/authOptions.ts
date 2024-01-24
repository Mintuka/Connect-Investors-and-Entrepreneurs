import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'
import { connectToDB } from '@/utils/database'
import User from '@/models/user'

export const authOptions = {
    pages: {
      signIn: '/login',
    },
    providers: [
        CredentialsProvider({
          name: "Credentials",
          credentials: {
            email: {
              label: "Email",
              type: "email",
              placeholder: "example@example.com",
            },
            password: { label: "Password", type: "password" },
          },
          async authorize(credentials, req) {
            await connectToDB()
            const user = await User.findOne({email: credentials?.email})
            console.log('user', user)
            if (user) {
              return user
            } else {
              // If you return null then an error will be displayed advising the user to check their details.
              return null
      
              // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
            }
          }
        }),
        GoogleProvider({
          clientId: process.env.GOOGLE_ID as string,
          clientSecret: process.env.GOOGLE_SECRET as string
        }),
      ],
    callbacks: {
        async session({ session, user, token }:any) {
            
            return session
        },
    }
}