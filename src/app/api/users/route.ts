import { prisma } from '@/src/lib/prisma'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const { name, password, email, cpf } = await request.json()

  const user = await prisma.user.create({
    data: {
      name,
      password,
      email,
      cpf,
    },
  })

  return NextResponse.json(user)
}

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')

  if (!id) {
    return NextResponse.json({ message: 'ID not found' }, { status: 404 })
  }

  try {
    const deletedUser = await prisma.user.delete({
      where: {
        id,
      },
    })

    if (deletedUser) {
      return NextResponse.json({ message: 'User deleted' })
    }
  } catch (error) {
    return NextResponse.json({ message: 'Unable to delete User' })
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const queryObject = Object.fromEntries(searchParams)

  const user = await prisma.user.findMany({
    where: queryObject,
  })

  return NextResponse.json(user)
}

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
