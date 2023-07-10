import MeusDadosForm from '@/src/components/MeusDadosForm'
import PortalNav from '@/src/components/PortalNav'

export default function MeusDados() {
  return (
    <div className="mx-auto grid max-w-6xl gap-8 p-8 lg:grid-cols-[300px,auto]">
      <PortalNav />

      <div className="grid gap-5 lg:max-w-lg">
        <section>
          <h3 className="font-sec text-2xl font-semibold">Perfil</h3>
          <span>
            <p className="font-sec leading-tight">
              Essas são as informações usadas para acessar a sua conta no portal
              do Maquinare
            </p>
          </span>
        </section>

        <MeusDadosForm />
      </div>
    </div>
  )
}
