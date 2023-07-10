import { prisma } from '@/src/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('userId')

  if (!id) {
    return NextResponse.json({ message: 'User ID not found' })
  }

  const ads = await prisma.user.findUnique({
    where: {
      id,
    },
    select: {
      email: true,
      name: true,
      telephone: true,
    },
  })

  return NextResponse.json(ads)
}
