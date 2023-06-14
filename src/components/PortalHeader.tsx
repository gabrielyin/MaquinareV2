import Logo from '@/src/assets/images/logo.svg'
import Image from 'next/image'

export default function PortalHeader() {
  return (
    <header className="flex h-[70px] items-center justify-between bg-bright-sun-300 px-4">
      <Image src={Logo} alt="Maquinare logo" />

      <div className="h-[50px] w-[50px] overflow-hidden rounded-full">
        <Image
          src="https://avatars.githubusercontent.com/u/70323043?v=4"
          width={60}
          height={60}
          alt="Avatar"
        />
      </div>
    </header>
  )
}
