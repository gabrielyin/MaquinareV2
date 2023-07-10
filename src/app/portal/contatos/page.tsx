import ContactList from '@/src/components/ContactList'
import PortalNav from '@/src/components/PortalNav'

export default function Contatos() {
  return (
    <div className="mx-auto grid max-w-6xl gap-8 p-8 lg:grid-cols-[300px,auto]">
      <PortalNav />

      <div className="grid gap-7">
        <section>
          <h3 className="font-sec text-2xl font-semibold">Contatos</h3>
          <span>
            <p className="font-sec leading-tight">
              Essas são os dados das pessoas que tiveram interesse em algum dos
              seus anúncios e mandaram uma mensagem
            </p>
          </span>
        </section>

        <ContactList />
      </div>
    </div>
  )
}
