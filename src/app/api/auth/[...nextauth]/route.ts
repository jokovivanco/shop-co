import NextAuth from 'next-auth'
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from '@/lib/prisma'

const handler = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    // Add your providers here
    // For now, we'll leave this empty - you can add GitHub, Google, etc. later
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signout",
  },
})

export { handler as GET, handler as POST }