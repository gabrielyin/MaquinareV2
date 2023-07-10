import { prisma } from '@/src/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')

  if (!id) {
    return NextResponse.json({ message: 'ID not found' })
  }

  const ad = await prisma.ads.findUnique({
    where: {
      id,
    },
  })

  return NextResponse.json(ad)
}
