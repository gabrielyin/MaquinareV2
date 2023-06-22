'use client'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import Button from '@/src/components/Button'
import TextInput from '@/src/components/TextInput'
import { api } from '@/src/lib/axios'
import Link from 'next/link'

const loginFormSchema = z.object({
  email: z.string(),
  password: z.string(),
})

type LoginFormData = z.infer<typeof loginFormSchema>

export default function Login() {
  const { register, handleSubmit } = useForm<LoginFormData>({
    resolver: zodResolver(loginFormSchema),
  })

  async function onFormSubmit(data: LoginFormData) {
    await api.post('/api/users/login', data)
  }

  return (
    <div className="min-h-screen p-8">
      <div className="grid place-items-center">
        <header className="flex flex-col gap-4">
          <h1 className="text-center font-ter text-4xl font-bold">
            Bem-vindo ao Maquinare
          </h1>

          <p className="mx-auto max-w-sm text-center text-slate-400">
            Ao acessar, aceito os Termos de uso e Política de privacidade do
            Maquinare
          </p>

          <hr
            className="mx-auto w-16 border-2
          border-candlelight-400"
          />
        </header>

        <form
          className="grid w-full max-w-sm gap-2 py-4"
          onSubmit={handleSubmit(onFormSubmit)}
        >
          <TextInput register={register('email')} label="E-mail" type="email" />

          <TextInput
            register={register('password')}
            label="Senha"
            type="password"
          />

          <Button text="Login" type="submit" />

          <strong className="cursor-pointer text-center font-sec font-bold text-candlelight-500 transition hover:text-candlelight-600">
            Esqueci minha senha
          </strong>

          <strong className="text-center font-sec font-semibold">
            Não tem uma conta?{' '}
            <Link href="/auth/register">
              <span className="cursor-pointer text-candlelight-500 transition hover:text-candlelight-600">
                Criar conta
              </span>
            </Link>
          </strong>
        </form>
      </div>
    </div>
  )
}
