'use client'

import QueryResult from '@/src/components/QueryResult'
import SearchInput from '@/src/components/SearchInput'
import { useRouter } from 'next/navigation'

export default function SearchQuery() {
  const router = useRouter()

  function handleSubmit(e: any) {
    e.preventDefault()
    const newURL = encodeURIComponent(e.target.elements.input.value)
    router.push(`/search_query?query=${newURL}`)
    e.target.elements.input.value = ''
  }

  return (
    <div className="mx-auto max-w-6xl gap-8 p-8 lg:grid lg:grid-cols-[300px,auto]">
      <div className="grid h-fit gap-4 lg:rounded-lg lg:border lg:p-4">
        <form onSubmit={handleSubmit}>
          <SearchInput classname="!max-w-none" name="input" />
        </form>

        <div className="flex gap-3">
          <button className="flex-1 rounded-lg bg-candlelight-400 p-2.5 font-sec font-semibold text-black transition hover:bg-candlelight-500">
            Comprar
          </button>

          <button className="flex-1 rounded-lg bg-slate-100 p-2.5 font-sec font-semibold text-black transition hover:bg-slate-200">
            Alugar
          </button>
        </div>
      </div>

      <div className="mt-4 grid gap-2 lg:mt-0">
        <div className="flex gap-3 lg:rounded-lg lg:border lg:p-3">
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

          <div className="flex w-fit cursor-pointer items-center gap-2 rounded-md border-[0.5px] px-2 py-1 font-sec font-semibold transition hover:bg-[#EBE9E4]">
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
                d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
              />
            </svg>
            Filtrar
          </div>
        </div>

        <h3 className="font-sec text-2xl font-semibold">1 Anúncio(s)</h3>

        <QueryResult />
      </div>
    </div>
  )
}
