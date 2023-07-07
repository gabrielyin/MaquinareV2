import { prisma } from '@/src/lib/prisma'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const data = await request.json()

  try {
    const newContact = await prisma.contacts.create({
      data: { ...data },
    })

    return NextResponse.json(newContact.id)
  } catch (error) {
    return NextResponse.error()
  }
}
