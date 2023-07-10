import { prisma } from '@/src/lib/prisma'
import { NextResponse } from 'next/server'

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')

  if (!id) {
    return NextResponse.json({ message: 'ID not found' })
  }

  await prisma.ads.delete({
    where: {
      id,
    },
  })

  return NextResponse.json(true)
}
