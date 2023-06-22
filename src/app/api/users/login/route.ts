import { prisma } from '@/src/lib/prisma'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const { email, password } = await request.json()

  try {
    const user = await prisma.user.findFirst({
      where: { email },
    })

    if (user) {
      if (password === user.password) return NextResponse.json(user)
    } else {
      return NextResponse.json({ message: 'User not found' })
    }
  } catch (error) {
    return NextResponse.json({ message: 'Unauthorized' })
  }
}
