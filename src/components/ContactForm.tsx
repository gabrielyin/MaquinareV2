import FormInput from './FormInput'

export default function ContactForm() {
  return (
    <form className="grid gap-3 rounded-lg border bg-white p-4 px-8 shadow-md">
      <h2 className="mb-4 font-sec text-2xl font-semibold">
        Envie uma mensagem
      </h2>

      <FormInput placeholder="Nome" type="text" />

      <FormInput placeholder="Email" type="email" />

      <textarea
        placeholder="Mensagem..."
        className="h-32 w-full resize-none rounded-lg border border-slate-300 bg-[#F9FAFB] px-2.5 py-2 font-main outline-none"
      ></textarea>

      <button className="rounded-lg bg-candlelight-400 p-2.5 font-main font-semibold text-black transition hover:bg-candlelight-500">
        Enviar
      </button>

      <p className="text-justify font-main font-semibold">
        Ao enviar a mensagem você concorda com os{' '}
        <strong className="underline">termos de uso</strong> e{' '}
        <strong className="underline">política de privacidade</strong> e
        confirma ter mais de 18 anos.
      </p>

      <hr className="border border-slate-300" />

      <button className="rounded-lg bg-green-500 px-2.5 py-2.5 font-main font-semibold text-white transition hover:bg-green-600 lg:px-8">
        Whatsapp
      </button>
    </form>
  )
}
