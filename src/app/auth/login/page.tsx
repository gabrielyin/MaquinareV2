import Button from '@/src/components/Button'
import TextInput from '@/src/components/TextInput'

export default function Login() {
  return (
    <form className="mx-auto grid max-w-sm gap-2 py-4">
      <TextInput label="E-mail" type="email" />

      <TextInput label="Senha" type="password" />

      <Button text="Login" />

      <strong className="cursor-pointer text-center font-sec font-bold text-candlelight-500 transition hover:text-candlelight-600">
        Esqueci minha senha
      </strong>

      <strong className="text-center font-sec font-semibold">
        Não tem uma conta?{' '}
        <span className="cursor-pointer text-candlelight-500 transition hover:text-candlelight-600">
          Criar conta
        </span>
      </strong>
    </form>
  )
}
