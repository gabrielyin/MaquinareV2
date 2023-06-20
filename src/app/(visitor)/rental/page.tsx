import Image from 'next/image'

import CardCaroussel from '@/src/components/CardCaroussel'
import ProductCard from '@/src/components/ProductCard'
import ContactForm from '@/src/components/ContactForm'

export default function Rental() {
  return (
    <div className="mx-auto max-w-6xl">
      <div>
        <div className="relative h-[200px] md:h-[400px]">
          <Image
            src="https://img.lojadomecanico.com.br/IMAGENS/33/326/85851/1597953410549.JPG"
            alt="image"
            fill={true}
            style={{ objectFit: 'contain' }}
          />
        </div>

        <div className="grid gap-4 p-8 md:grid-cols-[auto,400px] md:gap-8">
          <div className="grid gap-4">
            <div>
              <p className="font-sec uppercase text-slate-400">Gerador</p>

              <h2 className="font-sec text-2xl font-semibold">
                Gerador gasolina stemac 120Kva
              </h2>

              <p className="font-main leading-relaxed text-slate-500">
                Butantã, São Paulo - SP
              </p>
            </div>

            <div className="grid gap-1 font-sec text-xl font-bold">
              <div className="flex justify-between">
                <h3>Venda</h3>
                <h3>R$ 7.000,00</h3>
              </div>

              <div className="flex justify-between">
                <h3>Aluguel</h3>
                <h3>R$ 600,00</h3>
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
                  <p>Stemac</p>
                </div>
                <div className="bg-slate-100 p-2">
                  <p>114</p>
                </div>
                <div className="bg-slate-50 p-2">
                  <p>Gerador</p>
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

            <p className="font-main">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel
              justo vitae velit aliquam egestas at ac metus. Maecenas fringilla
              sem id ligula tincidunt, eu accumsan quam lacinia. Integer
              faucibus, tortor id convallis dapibus, nisl nunc finibus est, in
              scelerisque leo tellus a massa. Sed nec posuere nulla. In gravida
              lectus ut nulla sollicitudin, eget tristique mauris viverra. Morbi
              eu finibus magna. Maecenas ullamcorper, ligula at mattis
              dignissim, purus arcu dapibus augue, ut bibendum dolor augue sit
              amet lacus. Donec malesuada felis ut erat ultrices, ut molestie
              ligula cursus. Curabitur sit amet tincidunt nisi. Phasellus eu mi
              ac dui pellentesque ullamcorper in at purus.
            </p>
          </div>

          <div>
            <h2 className="font-sec text-2xl font-semibold leading-relaxed">
              Política de entrega
            </h2>

            <p className="font-main">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel
              justo vitae velit aliquam egestas at ac metus. Maecenas fringilla
              sem id ligula tincidunt, eu accumsan quam lacinia. Integer
              faucibus, tortor id convallis dapibus, nisl nunc finibus est, in
              scelerisque leo tellus a massa. Sed nec posuere nulla. In gravida
              lectus ut nulla sollicitudin, eget tristique mauris viverra. Morbi
              eu finibus magna. Maecenas ullamcorper, ligula at mattis
              dignissim, purus arcu dapibus augue, ut bibendum dolor augue sit
              amet lacus. Donec malesuada felis ut erat ultrices, ut molestie
              ligula cursus. Curabitur sit amet tincidunt nisi. Phasellus eu mi
              ac dui pellentesque ullamcorper in at purus.
            </p>
          </div>

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
        </div>
      </div>
    </div>
  )
}
