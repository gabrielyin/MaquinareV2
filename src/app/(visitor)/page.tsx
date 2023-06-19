import CardCaroussel from '@/src/components/CardCaroussel'
import ProductCard from '@/src/components/ProductCard'
import ServiceCard from '@/src/components/ServiceCard'

export default function Home() {
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

        {/* Pesquisar Input */}
        <label className="mx-auto flex w-full gap-2 rounded border border-slate-300 bg-[#F9FAFB] p-2.5 font-ter md:mt-6 md:max-w-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>

          <input
            className="flex-1 bg-transparent outline-none"
            placeholder="Pesquisar..."
          />
        </label>
      </div>

      <div className="mx-auto max-w-6xl">
        <CardCaroussel title="Anúncios recentes">
          <ProductCard
            image="https://img.lojadomecanico.com.br/IMAGENS/33/326/85851/1597953410549.JPG"
            isNew={true}
            title={'Gerador gasolina 3Kva'}
            location={'Butantã, São Paulo - SP'}
            price={'1.900,00'}
          />

          <ProductCard
            image="https://img.lojadomecanico.com.br/IMAGENS/31/284/448816/1675766483776.JPG"
            isNew={true}
            title={'Betoneira CSM'}
            location={'Butantã, São Paulo - SP'}
            price={'4.000,00'}
          />

          <ProductCard
            image="https://img.lojadomecanico.com.br/IMAGENS/21/159/140731/1645727097468.JPG"
            isNew={true}
            title={'Compressor'}
            location={'Butantã, São Paulo - SP'}
            price={'3.700,00'}
          />

          <ProductCard
            image="https://img.lojadomecanico.com.br/IMAGENS/33/326/131669/1573221415650.JPG"
            isNew={true}
            title={'Gerador gasolina 6.8Kva'}
            location={'Butantã, São Paulo - SP'}
            price={'3.499,90'}
          />
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
