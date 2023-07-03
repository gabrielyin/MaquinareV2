import Image from 'next/image'

interface CardInterface {
  imageUrl: string
  id: string
  salePrice: string
  rentPrice: string
  type: string
  location: string
}

export default function Card({
  imageUrl,
  id,
  salePrice,
  rentPrice,
  type,
  location,
}: CardInterface) {
  return (
    <div className="flex cursor-pointer flex-col rounded shadow-md lg:flex-row">
      <div className="relative grid h-[300px] w-full place-items-center overflow-hidden lg:h-[200px] lg:w-[200px]">
        <Image
          src="https://avatars.githubusercontent.com/u/70323043?v=4"
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
    </div>
  )
}
