'use client'

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import FormInput from './FormInput'
import { useSession } from 'next-auth/react'
import { useSearchParams } from 'next/navigation'
import { api } from '../lib/axios'
import { toast } from 'react-hot-toast'

const createFormSchema = z.object({
  name: z.string(),
  email: z.string(),
  message: z.string(),
})

type CreateFormData = z.infer<typeof createFormSchema>

export default function ContactForm() {
  const session = useSession()
  const searchParams = useSearchParams()
  const id = searchParams.get('id')

  const { register, handleSubmit, reset } = useForm<CreateFormData>({
    resolver: zodResolver(createFormSchema),
  })

  async function handleContact(data: CreateFormData) {
    const formData = {
      ...data,
      userId: session?.data?.user.id,
      adsId: id,
    }

    const response = await api.post('/api/ads/contact', formData)

    if (response) {
      toast.success('Mensagem enviada com sucesso')
      reset()
    }
  }

  return (
    <form
      onSubmit={handleSubmit(handleContact)}
      className="grid gap-3 rounded-lg border bg-white p-4 px-8 shadow-md"
    >
      <h2 className="mb-4 font-sec text-2xl font-semibold">
        Envie uma mensagem
      </h2>

      <FormInput placeholder="Nome" type="text" register={register('name')} />

      <FormInput
        placeholder="Email"
        type="email"
        register={register('email')}
      />

      <textarea
        placeholder="Mensagem..."
        className="h-32 w-full resize-none rounded-lg border border-slate-300 bg-[#F9FAFB] px-2.5 py-2 font-main outline-none"
        {...register('message')}
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
