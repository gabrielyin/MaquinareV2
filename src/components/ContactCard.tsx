interface ContactCardInterface {
  name: string
  email: string
  id: string
}

export default function ContactCard({ name, email, id }: ContactCardInterface) {
  return (
    <div className="flex h-[150px] flex-col justify-between rounded border border-slate-300 bg-white px-3 py-2 shadow-sm lg:h-fit lg:flex-row lg:items-center">
      <div className="font-sec font-bold leading-snug lg:flex lg:gap-3">
        <p>{name}</p>
        <span className="hidden lg:block">-</span>
        <p>{email}</p>
        <span className="hidden lg:block">-</span>
        <span>{id}</span>
      </div>

      <button className="rounded bg-green-500 px-2.5 py-2.5 font-sec font-semibold text-white lg:px-8">
        Whatsapp
      </button>
    </div>
  )
}
