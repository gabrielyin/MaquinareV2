import { getServerSession } from 'next-auth'
import { ReactNode } from 'react'
import { authOptions } from '../app/api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'

export default async function ProtectedRoute({
  children,
  className,
}: {
  children: ReactNode
  className: string
}) {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect('/auth/login')
  }

  return <div className={className}>{children}</div>
}
