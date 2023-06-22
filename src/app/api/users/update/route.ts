import { prisma } from '@/src/lib/prisma'
import { NextResponse } from 'next/server'

export async function PATCH(request: Request) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')
  const body = await request.json()

  if (!id) {
    return NextResponse.json({ message: 'ID not found' }, { status: 404 })
  }

  const updatedUser = await prisma.user.update({
    where: { id },
    data: body,
  })

  return NextResponse.json(updatedUser)
}
