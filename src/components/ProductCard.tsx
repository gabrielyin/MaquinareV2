import Image from 'next/image'
import Link from 'next/link'

interface ProductCardInterface {
  image: string
  isNew: boolean
  title: string
  location: string
  price: string
  id: string
}

export default function ProductCard({
  image,
  isNew,
  title,
  location,
  price,
  id,
}: ProductCardInterface) {
  return (
    <Link
      href={`/rental?id=${id}`}
      className="keen-slider__slide flex h-[350px] w-full flex-col rounded-lg border"
    >
      <div className="relative grid h-[200px] place-items-center">
        <Image
          src={image}
          alt="gerador"
          fill={true}
          style={{ objectFit: 'contain' }}
        />

        {isNew && (
          <div className="absolute bottom-0 w-full bg-bright-sun-300 text-center font-sec text-bright-sun-900">
            Novo
          </div>
        )}
      </div>

      <section className="flex flex-1 flex-col justify-between px-3 py-3 font-sec">
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <h3 className="text-slate-500">{location}</h3>
        </div>

        <h2 className="text-3xl font-bold">R$ {price}</h2>
      </section>
    </Link>
  )
}
