'use client'

import Image from 'next/image'
import Modal from 'react-modal'

import Logo from '@/src/assets/images/logo.svg'
import { useState } from 'react'
import Link from 'next/link'
import { signOut, useSession } from 'next-auth/react'

export default function Header() {
  const session = useSession()

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="h-[70px] bg-bright-sun-300 px-4">
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between">
        <Link href="/">
          <Image src={Logo} alt="Maquinare logo" />
        </Link>

        {/* Avatar Mobile */}
        {session.status === 'authenticated' ? (
          <div
            className="h-[50px] w-[50px] overflow-hidden rounded-full md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="grid h-full w-full place-items-center bg-slate-100 text-xl capitalize text-slate-400">
              {session.data!.user!.name![0]}
            </div>
          </div>
        ) : (
          <Link
            href="/auth/login"
            className="rounded border border-neutral-800 bg-transparent px-6 py-1.5 transition hover:border-transparent hover:bg-slate-900 hover:bg-opacity-10 md:hidden"
          >
            <>Entrar</>
          </Link>
        )}

        <nav className="hidden items-center font-sec text-lg md:flex md:gap-6">
          <Link href="#">Anunciar</Link>

          <Link href="#">Sobre nós</Link>

          <Link
            href="/auth/login"
            className="rounded border border-neutral-800 bg-transparent px-6 py-1.5 transition hover:border-transparent hover:bg-slate-900 hover:bg-opacity-10"
          >
            {session.status === 'authenticated' ? (
              <div className="-mx-2 flex items-center gap-3">
                <div className="flex h-7 w-7 justify-center rounded-full bg-slate-100 capitalize text-slate-400">
                  {session.data!.user!.name![0]}
                </div>
                {session.data?.user?.name}
              </div>
            ) : (
              <>Entrar</>
            )}
          </Link>
        </nav>

        {/* Mobile Nav */}
        <Modal
          isOpen={isMenuOpen}
          className="fixed bottom-0 left-0 right-0 top-0 bg-white md:hidden"
        >
          <div className="flex items-center justify-between p-6">
            <Link
              href="/portal/anuncios"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Image src={Logo} alt="Maquinare logo" />
            </Link>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-8 w-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="flex items-center gap-3 border-b border-t bg-neutral-800 px-6 py-3 text-white">
            <div className="h-[40px] w-[40px] overflow-hidden rounded-full">
              <Image
                src="https://avatars.githubusercontent.com/u/70323043?v=4"
                width={60}
                height={60}
                alt="Avatar"
              />
            </div>

            <p className="font-sec">{session.data?.user?.email}</p>
          </div>

          <Link
            href="/portal/anuncios"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="border-b bg-neutral-800 p-6 font-sec text-white">
              Meus anúncios
            </div>
          </Link>

          <Link
            href="/portal/meus-dados"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="border-b bg-neutral-800 p-6 font-sec text-white">
              Meus dados
            </div>
          </Link>

          <Link
            href="/portal/contatos"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="border-b bg-neutral-800 p-6 font-sec text-white">
              Contatos
            </div>
          </Link>

          <button
            onClick={() => signOut()}
            className="w-full border-b bg-neutral-800 p-6 text-left font-sec text-white"
          >
            Sair
          </button>
        </Modal>
      </div>
    </header>
  )
}
