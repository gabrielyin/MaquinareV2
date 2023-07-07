'use client'

import { useEffect, useState } from 'react'
import Card from './Card'
import { api } from '@/src/lib/axios'
import { useSession } from 'next-auth/react'
import CardSkeleton from './CardSkeleton'
import Button from '@/src/components/Button'
import Link from 'next/link'

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
  const [isLoading, setIsLoading] = useState(true)

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
    setIsLoading(false)
  }, [session.data?.user.id])

  return (
    <div className="grid gap-4">
      <div className="lg:justify flex h-fit flex-col gap-4 lg:flex-row">
        <div className="flex items-center justify-between lg:w-full">
          <h3 className="font-sec text-2xl font-semibold">
            {ads.length} Anúncio(s)
          </h3>

          <div className="flex w-fit cursor-pointer items-center gap-2 rounded-md border-[0.5px] px-2 py-1 font-sec font-semibold transition hover:bg-[#EBE9E4]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
              />
            </svg>
            Ordenar
          </div>
        </div>

        <Link href="/portal/anuncio">
          <Button
            className="w-full whitespace-nowrap lg:order-1"
            text="Criar anúncio"
          />
        </Link>
      </div>

      <div>
        {isLoading ? (
          <div className="grid gap-4">
            <CardSkeleton />
          </div>
        ) : (
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
        )}
      </div>
    </div>
  )
}
