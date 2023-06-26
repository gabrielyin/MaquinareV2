'use client'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'react-hot-toast'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { signIn, useSession } from 'next-auth/react'

import Button from '@/src/components/Button'
import TextInput from '@/src/components/TextInput'

const loginFormSchema = z.object({
  email: z.string(),
  password: z.string(),
})

type LoginFormData = z.infer<typeof loginFormSchema>

export default function Login() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const session = useSession()

  const callbackUrl = searchParams.get('callbackUrl') ?? '/portal/anuncios'

  if (session.status === 'authenticated') router.push(callbackUrl)

  const { register, handleSubmit } = useForm<LoginFormData>({
    resolver: zodResolver(loginFormSchema),
  })

  async function onFormSubmit(data: LoginFormData) {
    try {
      const response = await signIn('credentials', { ...data, redirect: false })

      if (response?.error) {
        toast.error('Usuário não encontrado')
      } else {
        toast.success('Login feito com successo')

        router.push(callbackUrl)
      }
    } catch (error) {
      toast.error('Não foi possível fazer o login')
    }
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
