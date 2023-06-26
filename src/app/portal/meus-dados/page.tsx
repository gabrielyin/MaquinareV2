import Button from '@/src/components/Button'
import PortalNav from '@/src/components/PortalNav'
import ProtectedRoute from '@/src/components/ProtectedRoute'
import TextInput from '@/src/components/TextInput'

export default function MeusDados() {
  return (
    <ProtectedRoute className="mx-auto grid max-w-6xl gap-8 p-8 lg:grid-cols-[300px,auto]">
      <PortalNav />

      <form className="grid gap-5 lg:max-w-lg">
        <section>
          <h3 className="font-sec text-2xl font-semibold">Perfil</h3>
          <span>
            <p className="font-sec leading-tight">
              Essas são as informações usadas para acessar a sua conta no portal
              do Maquinare
            </p>
          </span>
        </section>

        <section className="grid gap-3">
          <TextInput label="E-mail" placeholder="email@gmail.com" />

          <TextInput label="Nome" placeholder="Gabriel Yin" />

          <TextInput label="Telefone" placeholder="(21) 98372-8281" />
        </section>

        <Button text="Atualizar" className="w-36" />
      </form>
    </ProtectedRoute>
  )
}
