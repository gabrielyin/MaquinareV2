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

  async function deleteAd(id: string) {
    await api.delete('/api/ads/delete', {
      params: {
        id,
      },
    })

    const filteredAds = ads.filter((ad: any) => ad.id !== id)

    setAds(filteredAds)
  }

  useEffect(() => {
    async function getAds() {
      const { data } = await api.get('/api/ads/get', {
        params: {
          userId: session.data?.user.id,
        },
      })

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
            id={info.id}
            imageUrl={info.imageUrl}
            salePrice={info.salePrice}
            rentPrice={info.rentPrice}
            type={info.type}
            location={`${info.city}, ${info.state.toUpperCase()}`}
            deleteAd={() => deleteAd(info.id)}
          />
        )
      })}
    </div>
  )
}
