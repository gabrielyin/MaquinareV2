'use client'

import Image from 'next/image'

import CardCaroussel from '@/src/components/CardCaroussel'
import ProductCard from '@/src/components/ProductCard'
import ContactForm from '@/src/components/ContactForm'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { api } from '@/src/lib/axios'

export default function Rental() {
  const [ad, setAd] = useState<any>({})
  const [ads, setAds] = useState<any[]>([])
  const searchParams = useSearchParams()
  const id = searchParams.get('id')

  useEffect(() => {
    async function getInfo() {
      const { data: ad } = await api.get('/api/ads/get-by-id', {
        params: {
          id,
        },
      })

      setAd(ad)
    }

    getInfo()

    async function getRecentAds() {
      const { data: recentAds } = await api.get('/api/ads/get-recent')

      setAds(recentAds)
    }

    getRecentAds()
  }, [id])

  return (
    <div className="mx-auto max-w-6xl">
      <div>
        <div className="relative h-[200px] md:h-[400px]">
          {ad.imageUrl && (
            <Image
              src={ad.imageUrl}
              alt="image"
              fill={true}
              style={{ objectFit: 'contain' }}
            />
          )}
        </div>

        <div className="grid gap-4 p-8 md:grid-cols-[auto,400px] md:gap-8">
          <div className="grid gap-4">
            <div>
              <p className="font-sec uppercase text-slate-400">
                {ad.type && ad.type}
              </p>

              <h2 className="font-sec text-2xl font-semibold">{ad.title}</h2>

              <p className="font-main leading-relaxed text-slate-500">
                {ad.neighbourhood}, {ad.city} - {ad.state}
              </p>
            </div>

            <div className="grid gap-1 font-sec text-xl font-bold">
              <div className="flex justify-between">
                <h3>Venda</h3>
                <h3>R$ {ad.salePrice}</h3>
              </div>

              <div className="flex justify-between">
                <h3>Aluguel</h3>
                <h3>R$ {ad.rentPrice}</h3>
              </div>
            </div>

            <div className="grid grid-cols-2 font-main">
              <div className="font-bold">
                <div className="bg-slate-100 p-2">
                  <h3>Marca</h3>
                </div>
                <div className="bg-slate-200 p-2">
                  <h3>Modelo</h3>
                </div>
                <div className="bg-slate-100 p-2">
                  <h3>Tipo</h3>
                </div>
              </div>

              <div>
                <div className="bg-slate-50 p-2">
                  <p>{ad.brand}</p>
                </div>
                <div className="bg-slate-100 p-2">
                  <p>{ad.model}</p>
                </div>
                <div className="bg-slate-50 p-2">
                  <p>{ad.type}</p>
                </div>
              </div>
            </div>

            <div className="rounded-lg font-main md:bg-slate-50 md:p-3">
              <div className="grid place-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-8 w-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                  />
                </svg>

                <h5 className="text-lg font-bold">Atenção</h5>
              </div>

              <p className="mx-auto max-w-sm text-center">
                Evite cair em golpes. Nunca faça depósitos, transferências ou
                quaisquer adiantamentos sem conferência ou vistoria do
                equipamento.
              </p>
            </div>
          </div>

          <ContactForm />
        </div>

        <div className="grid gap-4 px-8 pb-8">
          <div>
            <h2 className="font-sec text-2xl font-semibold leading-relaxed">
              Descrição
            </h2>

            <p className="font-main">{ad.description}</p>
          </div>

          <div>
            <h2 className="font-sec text-2xl font-semibold leading-relaxed">
              Política de entrega
            </h2>

            <p className="font-main">{ad.shippingPolicy}</p>
          </div>

          <CardCaroussel title="Anúncios recentes">
            {ads.map((info) => {
              return (
                <ProductCard
                  key={info.id}
                  id={info.id}
                  image={info.imageUrl}
                  title={info.title}
                  location={`${info.neighbourhood}, ${info.city} - ${info.state}`}
                  price={info.salePrice}
                  isNew={true}
                />
              )
            })}
          </CardCaroussel>
        </div>
      </div>
    </div>
  )
}
