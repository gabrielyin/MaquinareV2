import AnunciosList from '@/src/components/AnunciosList'
import PortalNav from '@/src/components/PortalNav'

export default function Anuncios() {
  return (
    <div className="mx-auto max-w-6xl p-8">
      <div className="grid gap-8 lg:grid-cols-[300px,auto]">
        <PortalNav />

        <AnunciosList />
      </div>
    </div>
  )
}
