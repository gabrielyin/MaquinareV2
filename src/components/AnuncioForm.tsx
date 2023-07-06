'use client'

import TextInput from '@/src/components/TextInput'
import TextArea from '@/src/components/TextArea'
import Button from '@/src/components/Button'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { api } from '@/src/lib/axios'
import { useSession } from 'next-auth/react'
import { supabase } from '../lib/supabase'
import { useState } from 'react'
import Image from 'next/image'

const createFormSchema = z.object({
  title: z.string(),
  type: z.string(),
  brand: z.string(),
  model: z.string(),
  description: z.string(),
  shippingPolicy: z.string(),
  salePrice: z.string().transform((price) => parseFloat(price)),
  rentPrice: z.string().transform((price) => parseFloat(price)),
  neighbourhood: z.string(),
  city: z.string(),
  state: z.string(),
})

type CreateFormData = z.infer<typeof createFormSchema>

export default function AnuncioForm() {
  const session = useSession()
  const [filename, setFilename] = useState<any>('')

  const { register, handleSubmit } = useForm<CreateFormData>({
    resolver: zodResolver(createFormSchema),
  })

  function onChangeFile(e: any) {
    const file = e.target.files[0]

    setFilename(file)
  }

  async function uploadFile(file: any) {
    const newName = new Date().getTime()

    try {
      const { data } = await supabase.storage
        .from('maquinare')
        .upload(`users/${session.data?.user.id}/${newName}.png`, file, {
          cacheControl: '3600',
          upsert: false,
        })

      const { path } = data!

      const { data: publicUrlResponse } = supabase.storage
        .from('maquinare')
        .getPublicUrl(path)

      const { publicUrl } = publicUrlResponse

      return publicUrl
    } catch (error) {
      console.error(error)
    }
  }

  async function onFormSubmit(data: CreateFormData) {
    const imageUrl = await uploadFile(filename)

    console.log(imageUrl)

    await api.post('/api/ads/create', {
      ...data,
      imageUrl,
      userId: session.data?.user.id,
    })
  }

  return (
    <form
      className="mb-16 grid gap-5 lg:max-w-lg"
      onSubmit={handleSubmit(onFormSubmit)}
    >
      <section className="grid gap-3">
        <h3 className="font-sec text-2xl font-semibold">Criar anúncio</h3>

        <TextInput
          label="Título do anúncio"
          placeholder="Gerador de gasolina 3KVA"
          register={register('title')}
        />

        <div className="grid grid-cols-2 gap-3">
          <label className="grid h-36 place-items-center rounded border border-slate-300 bg-white shadow-sm">
            <div className="flex gap-2">
              <input type="file" className="hidden" onChange={onChangeFile} />
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

          {filename && (
            <div className="relative h-36 overflow-hidden rounded shadow-sm">
              <Image
                src={URL.createObjectURL(filename)}
                alt="image"
                fill={true}
                style={{ objectFit: 'contain' }}
              />
            </div>
          )}
        </div>

        <TextInput
          label="Tipo da máquina"
          placeholder="Gerador"
          register={register('type')}
        />

        <TextInput
          label="Marca"
          placeholder="Stemac"
          register={register('brand')}
        />

        <TextInput
          label="Modelo"
          placeholder="1104-44G"
          register={register('model')}
        />

        <TextArea
          label="Descrição"
          placeholder="Descrição"
          register={register('description')}
        />

        <TextArea
          label="Política de entrega"
          placeholder="Política de entrega"
          register={register('shippingPolicy')}
        />
      </section>

      <section className="grid gap-3">
        <h3 className="font-sec text-2xl font-semibold">Preços</h3>
        <span>
          <p className="leading-4 text-slate-400">
            *Deixar campo em branco caso não se aplique
          </p>
        </span>

        <TextInput
          label="Preço"
          placeholder="R$ 8.000,00"
          register={register('salePrice')}
        />

        <TextInput
          label="Aluguel"
          placeholder="R$ 400,00"
          register={register('rentPrice')}
        />
      </section>

      <section className="grid gap-3">
        <h3 className="font-sec text-2xl font-semibold">Local</h3>

        <TextInput
          label="Bairro"
          placeholder="Butantã"
          register={register('neighbourhood')}
        />

        <TextInput
          label="Cidade"
          placeholder="São Paulo"
          register={register('city')}
        />

        <TextInput
          label="Estado"
          placeholder="SP"
          register={register('state')}
        />
      </section>

      <Button text="Enviar" type="submit" />
    </form>
  )
}
