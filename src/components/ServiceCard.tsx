import Image from 'next/image'

interface ServiceCardInterface {
  image: string
  title: string
  description: string
}

export default function ServiceCard({
  image,
  title,
  description,
}: ServiceCardInterface) {
  return (
    <div className="keen-slider__slide font grid h-fit gap-3">
      <div className="relative h-[250px] overflow-hidden rounded">
        <Image
          src={image}
          alt="escavadeira"
          fill={true}
          style={{ objectFit: 'cover' }}
        />
      </div>

      <h5 className="font-sec text-lg font-semibold">{title}</h5>

      <p className="font-ter font-light">{description}</p>
    </div>
  )
}
