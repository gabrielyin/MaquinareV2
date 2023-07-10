import { prisma } from '@/src/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const userId = searchParams.get('userId')

  const ads = await prisma.ads.findMany({
    where: {
      userId,
    },
    select: {
      contacts: true,
    },
  })

  return NextResponse.json(ads)
}
