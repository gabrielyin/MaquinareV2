import { prisma } from '@/src/lib/prisma'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const { name, password, email, cpf } = await request.json()

  try {
    const user = await prisma.user.create({
      data: {
        name,
        password,
        email,
        cpf,
      },
    })

    return NextResponse.json(user)
  } catch (error) {
    return NextResponse.error()
  }
}
