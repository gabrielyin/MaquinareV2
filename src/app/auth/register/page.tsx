'use client'

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import Button from '@/src/components/Button'
import TextInput from '@/src/components/TextInput'
import { api } from '@/src/lib/axios'
import Link from 'next/link'

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
  const { register, handleSubmit } = useForm<RegisterFormData>({
    resolver: zodResolver(registerFormSchema),
  })

  async function onFormSubmit(data: RegisterFormData) {
    const { confirmPassword, ...remainingData } = data

    await api.post('/api/users/register', remainingData)
  }

  return (
    <form
      className="mx-auto grid max-w-sm gap-2 py-4"
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
  )
}
