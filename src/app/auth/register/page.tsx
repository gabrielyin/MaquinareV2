'use client'

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'react-hot-toast'

import Button from '@/src/components/Button'
import TextInput from '@/src/components/TextInput'
import { api } from '@/src/lib/axios'
import Link from 'next/link'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const registerFormSchema = z
  .object({
    name: z.string(),
    email: z.string().email(),
    password: z.string(),
    confirmPassword: z.string(),
    telephone: z.string(),
    cpf: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
  })

type RegisterFormData = z.infer<typeof registerFormSchema>

export default function Register() {
  const router = useRouter()
  const session = useSession()

  const { register, handleSubmit } = useForm<RegisterFormData>({
    resolver: zodResolver(registerFormSchema),
  })

  async function onFormSubmit(data: RegisterFormData) {
    try {
      const { confirmPassword, ...remainingData } = data

      const response = await api.post('/api/users/register', remainingData)

      if (response.data) {
        toast.success('Usuário criado com successo')

        await signIn('credentials', {
          email: data.email,
          password: data.password,
          redirect: false,
        })
      }

      if (session.status === 'authenticated') {
        router.push('/portal/anuncios')
      }
    } catch (error) {
      toast.error('Não foi possível criar o usuário')
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
          className="mx-auto grid w-full max-w-sm gap-2 py-4"
          onSubmit={handleSubmit(onFormSubmit)}
        >
          <TextInput register={register('email')} label="E-mail" type="email" />

          <TextInput
            register={register('name')}
            label="Nome completo"
            type="text"
          />

          <TextInput
            register={register('password')}
            label="Senha"
            type="password"
          />

          <TextInput
            register={register('confirmPassword')}
            label="Confirmar senha"
            type="password"
          />

          <TextInput
            register={register('telephone')}
            label="Telefone"
            type="text"
          />

          <TextInput register={register('cpf')} label="CPF" type="text" />

          <Button text="Criar" type="submit" />

          <strong className="text-center font-sec font-semibold">
            Já tem conta?{' '}
            <Link href="/auth/login">
              <span className="cursor-pointer text-candlelight-500 transition hover:text-candlelight-600">
                Fazer login
              </span>
            </Link>
          </strong>
        </form>
      </div>
    </div>
  )
}
