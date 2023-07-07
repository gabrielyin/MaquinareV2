import { prisma } from '@/src/lib/prisma'
import { NextResponse } from 'next/server'

export async function PATCH(request: Request) {
  const body = await request.json()

  const { id } = body.params
  const { data } = body

  if (!id) {
    return NextResponse.json({ message: 'ID not found' }, { status: 404 })
  }

  const updatedUser = await prisma.user.update({
    where: { id },
    data,
    select: {
      email: true,
      name: true,
      telephone: true,
    },
  })

  return NextResponse.json(updatedUser)
}
