/* eslint-disable no-unused-vars */
import NextAuth from 'next-auth/next'

declare module 'next-auth' {
  interface Session {
    user: {
      id: string
      name: string
      email: string
      avatarUrl: string
    }
  }
}
