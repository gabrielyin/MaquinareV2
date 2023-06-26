import { prisma } from '@/src/lib/prisma'
import { NextResponse } from 'next/server'

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
