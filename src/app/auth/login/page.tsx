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
    <form
      className="mx-auto grid max-w-sm gap-2 py-4"
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
  )
}
