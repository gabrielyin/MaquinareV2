import Logo from '@/src/assets/images/logo.svg'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-footer text-white">
      <main className="mx-auto grid max-w-7xl gap-4 px-6 py-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Image src={Logo} alt="Maquinare Logo" />
          <p className="mt-2 font-ter text-sm font-light">
            Um marketplace para locação e vendas de máquinas e equipamentos de
            construção civil
          </p>
        </div>

        {/* Insitucional */}
        <div>
          <h4 className="font-sec font-bold">Institucional</h4>
          <hr className="mb-2 mt-0.5 w-10 border border-candlelight-400" />
          <ul className="grid gap-1 font-ter text-sm font-light">
            <li>
              <Link href="#">Quer trabalhar conosco</Link>
            </li>
            <li>
              <Link href="#">Blog</Link>
            </li>
            <li>
              <Link href="#">Contato</Link>
            </li>
            <li>
              <Link href="#">Perguntas frequentes</Link>
            </li>
            <li>
              <Link href="#">Ajuda</Link>
            </li>
          </ul>
        </div>

        {/* Anunciante */}
        <div>
          <h4 className="font-sec font-bold">Anunciante</h4>
          <hr className="mb-2 mt-0.5 w-10 border border-candlelight-400" />
          <ul className="grid gap-1 font-ter text-sm font-light">
            <li>
              <Link href="#">Anunciar máquina</Link>
            </li>
            <li>
              <Link href="#">Política de Qualidade</Link>
            </li>
          </ul>
        </div>

        {/* Transparência */}
        <div>
          <h4 className="font-sec font-bold">Transparência</h4>
          <hr className="mb-2 mt-0.5 w-10 border border-candlelight-400" />
          <ul className="grid gap-1 font-ter text-sm font-light">
            <li>
              <Link href="#">Política de privacidade</Link>
            </li>
            <li>
              <Link href="#">Política de cookies</Link>
            </li>
            <li>
              <Link href="#">Termos de uso</Link>
            </li>
          </ul>
        </div>
      </main>

      {/* Copyright */}
      <div className="border-t border-slate-500">
        <p className="p-1.5 text-center font-ter text-sm font-thin">
          Copyright 2023 Maquinare. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
