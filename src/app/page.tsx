'use client'

import CardCaroussel from '@/src/components/CardCaroussel'
import ProductCard from '@/src/components/ProductCard'
import SearchInput from '@/src/components/SearchInput'
import ServiceCard from '@/src/components/ServiceCard'
import { useEffect, useState } from 'react'
import { api } from '../lib/axios'
import { useRouter } from 'next/navigation'

export default function Home() {
  const [ads, setAds] = useState<any[]>([])
  const router = useRouter()

  function handleSubmit(e: any) {
    e.preventDefault()
    const newURL = encodeURIComponent(e.target.elements.input.value)
    router.push(`/search_query?query=${newURL}`)
  }

  useEffect(() => {
    async function getRecentAds() {
      const { data: recentAds } = await api.get('/api/ads/get-recent')

      setAds(recentAds)
    }

    getRecentAds()
  }, [])

  return (
    <div>
      <div className="grid gap-2 rounded-br-[60px] bg-bright-sun-300 px-6 py-12 md:gap-4 md:rounded-br-[120px] md:py-32">
        <h1 className="font-ter text-3xl font-bold leading-snug md:text-center md:text-6xl md:leading-snug">
          Máquinas e Equipamentos <br />
          de Construção Civil
        </h1>

        <p className="font-sec leading-tight md:mx-auto md:max-w-sm md:text-center">
          Encontre máquinas, ferramentas e equipamentos para a sua construção
        </p>

        <form onSubmit={handleSubmit}>
          <SearchInput
            // value={query}
            // onChange={(e: any) => setQuery(e.target.value)}
            name="input"
          />
        </form>
      </div>

      <div className="mx-auto max-w-6xl">
        <CardCaroussel title="Anúncios recentes">
          {ads.map((info) => {
            return (
              <ProductCard
                key={info.id}
                image={info.imageUrl}
                title={info.title}
                location={`${info.neighbourhood}, ${info.city} - ${info.state}`}
                price={info.salePrice}
                isNew={true}
              />
            )
          })}
        </CardCaroussel>

        <CardCaroussel title="Encontre a máquina ideal para a sua obra">
          <ServiceCard
            image="https://images.unsplash.com/photo-1630288214173-a119cf823388?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80"
            title="Obras pesadas"
            description="Encontre as melhores máquinas para construção pesada, como
              escavadeiras, retroescavadeiras e tratores. Amplie sua obra com
              equipamentos confiáveis e de alta qualidade."
          />

          <ServiceCard
            image="https://images.unsplash.com/photo-1426927308491-6380b6a9936f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
            title="Ferramentas para construção"
            description="Acesse uma ampla gama de ferramentas de construção de qualidade
            para concluir sua obra com eficiência. Encontre tudo o que precisa
            em nosso marketplace."
          />

          <ServiceCard
            image="https://images.unsplash.com/photo-1452860606245-08befc0ff44b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            title="Ferramentas domésticas"
            description="Realize reparos e projetos em casa com facilidade. Encontre
            ferramentas essenciais de qualidade em nosso marketplace."
          />

          <ServiceCard
            image="https://images.unsplash.com/photo-1603657289433-e4983d2114b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
            title="Equipamentos de jardinagem"
            description="Cuide do seu jardim com facilidade usando nossos equipamentos de
            jardinagem. Mantenha seu espaço verde sempre bonito e bem cuidado."
          />
        </CardCaroussel>
      </div>
    </div>
  )
}
