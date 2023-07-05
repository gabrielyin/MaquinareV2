import Image from 'next/image'
import Link from 'next/link'

interface CardInterface {
  imageUrl: string
  id: string
  salePrice: string
  rentPrice: string
  type: string
  location: string
  deleteAd: () => void
}

export default function Card({
  imageUrl,
  id,
  salePrice,
  rentPrice,
  type,
  location,
  deleteAd,
}: CardInterface) {
  return (
    <div className="relative">
      <Link
        href={`/rental?id=${id}`}
        className="flex cursor-pointer flex-col rounded shadow-md lg:flex-row"
      >
        <div className="relative grid h-[300px] w-full place-items-center overflow-hidden lg:h-[200px] lg:w-[200px]">
          <Image
            src={imageUrl}
            alt="product"
            fill={true}
            style={{ objectFit: 'contain' }}
          />
        </div>

        <div className="p-4 font-sec">
          <span>{id}</span>
          <h2 className="text-2xl font-bold">R$ {salePrice}</h2>
          <h5 className="text-slate-500">Aluguel R$ {rentPrice}/mês</h5>
          <h5 className="text-lg">
            <strong>{type}</strong>
          </h5>
          <h5 className="text-slate-500">{location}</h5>
        </div>
      </Link>
      <div
        className="absolute right-3 top-3 z-40 cursor-pointer rounded bg-red-400 p-1.5 transition hover:bg-red-500"
        onClick={() => deleteAd()}
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
            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
          />
        </svg>
      </div>
    </div>
  )
}
