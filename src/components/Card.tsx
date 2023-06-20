import Image from 'next/image'

export default function Card() {
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
        <span>#2</span>
        <h2 className="text-2xl font-bold">R$ 4.000,00</h2>
        <h5 className="text-slate-500">Aluguel R$ 400,00/mês</h5>
        <h5 className="text-lg">
          <strong>Betoneira</strong>
        </h5>
        <h5 className="text-slate-500">São Paulo, SP</h5>
      </div>
    </div>
  )
}
