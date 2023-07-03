'use client'

import { useEffect, useState } from 'react'
import Card from './Card'
import { api } from '@/src/lib/axios'
import { useSession } from 'next-auth/react'

interface AdInterface {
  id: string
  title: string
  imageUrl: string
  type: string
  brand: string
  model: string
  description: string
  shippingPolicy: string
  salePrice: string
  rentPrice: string
  neighbourhood: string
  city: string
  state: string
}

export default function AnunciosList() {
  const [ads, setAds] = useState<any>([])
  const session = useSession()

  useEffect(() => {
    async function getAds() {
      const { data } = await api.get('/api/ads/get', {
        params: {
          userId: session.data?.user.id,
        },
      })
      console.log(data)

      setAds(data)
    }

    getAds()
  }, [session.data?.user.id])

  return (
    <div className="grid gap-4">
      {ads.map((info: AdInterface) => {
        return (
          <Card
            key={info.id}
            imageUrl={info.imageUrl}
            id={info.id}
            salePrice={info.salePrice}
            rentPrice={info.rentPrice}
            type={info.type}
            location={`${info.city}, ${info.state.toUpperCase()}`}
          />
        )
      })}
    </div>
  )
}
