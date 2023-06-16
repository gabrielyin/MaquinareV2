import TextInput from '@/src/components/TextInput'
import TextArea from '@/src/components/TextArea'
import Button from '@/src/components/Button'

export default function AnuncioForm() {
  return (
    <form className="mb-16 grid gap-5 lg:max-w-lg">
      <section className="grid gap-3">
        <h3 className="font-sec text-2xl font-semibold">Criar anúncio</h3>

        <TextInput label="Título do anúncio" placeholder="email@gmail.com" />

        <div className="grid grid-cols-2 gap-3">
          <label className="grid h-36 place-items-center rounded border border-slate-300 bg-white shadow-sm">
            <div className="flex gap-2">
              <input type="file" className="hidden" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.7}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                />
              </svg>
              <span className="font-sec font-semibold">Upload</span>
            </div>
          </label>
        </div>

        <TextInput label="Tipo da máquina" placeholder="Gerador" />

        <TextInput label="Marca" placeholder="Stemac" />

        <TextInput label="Modelo" placeholder="1104-44G" />

        <TextArea label="Descrição" placeholder="Descrição" />

        <TextArea
          label="Política de entrega"
          placeholder="Política de entrega"
        />
      </section>

      <section className="grid gap-3">
        <h3 className="font-sec text-2xl font-semibold">Preços</h3>
        <span>
          <p className="leading-4 text-slate-400">
            *Deixar campo em branco caso não se aplique
          </p>
        </span>

        <TextInput label="Preço" placeholder="R$ 8.000,00" />

        <TextInput label="Aluguel" placeholder="R$ 400,00" />
      </section>

      <section className="grid gap-3">
        <h3 className="font-sec text-2xl font-semibold">Local</h3>

        <TextInput label="Bairro" placeholder="Butantã" />

        <TextInput label="Cidade" placeholder="São Paulo" />

        <TextInput label="Estado" placeholder="SP" />
      </section>

      <Button text="Enviar" />
    </form>
  )
}
