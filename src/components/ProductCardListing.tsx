import Image from 'next/image'
import Link from 'next/link'

interface ProductCardListingInterface {
  image: string
  isNew: boolean
  title: string
  category: string
  location: string
  price: string
  id: string
}

export default function ProductCardListing({
  image,
  isNew,
  title,
  category,
  location,
  price,
  id,
}: ProductCardListingInterface) {
  return (
    <Link
      href={`/rental?id=${id}`}
      className="flex h-[350px] w-full flex-col overflow-hidden rounded-lg border md:h-[200px] md:flex-row"
    >
      <div className="relative grid h-[200px] place-items-center md:w-[250px]">
        <Image
          src={image}
          alt="gerador"
          fill={true}
          style={{ objectFit: 'contain' }}
        />

        <div className="absolute left-3 top-3 w-fit rounded-full bg-slate-200 px-2">
          <h3 className="font-semibold">{category}</h3>
        </div>

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
