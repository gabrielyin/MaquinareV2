import ContactCard from '@/src/components/ContactCard'
import PortalNav from '@/src/components/PortalNav'
import ProtectedRoute from '@/src/components/ProtectedRoute'

export default function Contatos() {
  return (
    <ProtectedRoute className="mx-auto grid max-w-6xl gap-8 p-8 lg:grid-cols-[300px,auto]">
      <PortalNav />

      <div className="grid gap-7">
        <section>
          <h3 className="font-sec text-2xl font-semibold">Perfil</h3>
          <span>
            <p className="font-sec leading-tight">
              Essas são as informações usadas para acessar a sua conta no portal
              do Maquinare
            </p>
          </span>
        </section>

        <section className="grid gap-4 lg:gap-3">
          <ContactCard name="Michele Yin" email="michele@gmail.com" id="#2" />

          <ContactCard name="Gabriel Yin" email="gabriel@gmail.com" id="#3" />
        </section>
      </div>
    </ProtectedRoute>
  )
}
