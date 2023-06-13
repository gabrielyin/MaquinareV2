import Button from '@/src/components/Button'
import TextInput from '@/src/components/TextInput'

export default function Register() {
  return (
    <form className="mx-auto grid max-w-sm gap-2 py-4">
      <TextInput label="E-mail" type="email" />

      <TextInput label="Senha" type="password" />

      <TextInput label="Confirmar senha" type="password" />

      <TextInput label="Telefone" type="text" />

      <TextInput label="CPF" type="text" />

      <Button text="Criar" />

      <strong className="text-center font-sec font-semibold">
        Já tem conta?{' '}
        <span className="cursor-pointer text-candlelight-500 transition hover:text-candlelight-600">
          Fazer login
        </span>
      </strong>
    </form>
  )
}
