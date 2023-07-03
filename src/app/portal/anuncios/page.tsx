import AnunciosList from '@/src/components/AnunciosList'
import Button from '@/src/components/Button'
import PortalNav from '@/src/components/PortalNav'
import Link from 'next/link'

export default function Anuncios() {
  return (
    <div className="mx-auto max-w-6xl p-8">
      <div className="grid gap-8 lg:grid-cols-[300px,auto]">
        <PortalNav />

        <div className="grid gap-4">
          <div className="lg:justify flex flex-col gap-4 lg:flex-row">
            <div className="flex items-center justify-between lg:w-full">
              <h3 className="font-sec text-2xl font-semibold">1 Anúncio(s)</h3>

              <div className="flex w-fit cursor-pointer items-center gap-2 rounded-md border-[0.5px] px-2 py-1 font-sec font-semibold transition hover:bg-[#EBE9E4]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
                  />
                </svg>
                Ordenar
              </div>
            </div>

            <Link href="/portal/anuncio">
              <Button
                className="w-full whitespace-nowrap lg:order-1"
                text="Criar anúncio"
              />
            </Link>
          </div>

          <AnunciosList />
        </div>
      </div>
    </div>
  )
}
