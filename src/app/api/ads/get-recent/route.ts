import { prisma } from '@/src/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET() {
  const recentAds = await prisma.ads.findMany({
    orderBy: {
      createdAt: 'desc',
    },
    take: 5,
  })

  return NextResponse.json(recentAds)
}
