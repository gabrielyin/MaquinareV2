import { prisma } from '@/src/lib/prisma'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const data = await request.json()

  try {
    const newAd = await prisma.ads.create({
      data: { ...data },
    })

    return NextResponse.json(newAd.id)
  } catch (error) {
    console.log(error)

    return NextResponse.error()
  }
}
