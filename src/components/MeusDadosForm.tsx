'use client'

import { useEffect, useState } from 'react'
import TextInput from './TextInput'
import { getSession, useSession } from 'next-auth/react'
import { api } from '../lib/axios'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import Button from '@/src/components/Button'
import { toast } from 'react-hot-toast'

interface UserInfoInterface {
  name: string
  email: string
  telephone: string
}

const updateUserFormSchema = z.object({
  name: z.string().optional(),
  telephone: z.string().optional(),
})

type UpdateFormData = z.infer<typeof updateUserFormSchema>

export default function MeusDadosForm() {
  const { update } = useSession()
  const [userInfo, setUserInfo] = useState<UserInfoInterface>()

  const { register, handleSubmit, setValue } = useForm<UpdateFormData>({
    resolver: zodResolver(updateUserFormSchema),
  })

  async function updateUser(data: UpdateFormData) {
    const session = await getSession()

    const { data: response } = await api.patch('/api/users/update', {
      params: { id: session?.user.id },
      data,
    })

    if (response) {
      toast.success('Dados atualizados com sucesso')
      setUserInfo(response)
      await update({
        ...session,
        user: { ...session?.user, name: response.name },
      })
    }
  }

  useEffect(() => {
    async function getUserInfo() {
      const session = await getSession()

      const { data: userInfo } = await api.get('/api/users/get', {
        params: { userId: session?.user.id },
      })

      setUserInfo(userInfo)

      setValue('name', userInfo?.name || '')
      setValue('telephone', userInfo?.telephone || '')
    }

    getUserInfo()
  }, [setValue])

  return (
    <form onSubmit={handleSubmit(updateUser)} className="grid gap-3">
      <TextInput
        label="E-mail"
        placeholder={userInfo?.email || ''}
        disabled={true}
      />

      <TextInput
        label="Nome"
        placeholder="Nome completo"
        defaultValue={userInfo?.name || ''}
        register={register('name')}
      />

      <TextInput
        label="Telefone"
        placeholder="(00) 00000-0000"
        defaultValue={userInfo?.telephone || ''}
        register={register('telephone')}
      />

      <Button text="Atualizar" type="submit" className="w-36" />
    </form>
  )
}
