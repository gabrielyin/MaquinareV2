import AnuncioForm from '@/src/components/AnuncioForm'
import Link from 'next/link'

export default function EditarOuAdicionarAnuncio() {
  return (
    <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[300px,auto]">
      <nav className="duration-400 hidden h-fit gap-2 font-sec font-medium lg:grid">
        <Link
          href="#"
          className="flex items-center gap-3 rounded p-2 text-lg transition hover:bg-[#EBE9E4]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
          Voltar
        </Link>
      </nav>

      <AnuncioForm />
    </div>
  )
}
