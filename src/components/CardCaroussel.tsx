'use client'

import { ReactNode, useState } from 'react'
import { useKeenSlider } from 'keen-slider/react'

interface CardCarousselInterface {
  title: string
  children: ReactNode
}

export default function CardCaroussel({
  title,
  children,
}: CardCarousselInterface) {
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    created() {
      setLoaded(true)
    },
    breakpoints: {
      '(min-width: 700px)': {
        slides: { perView: 2, spacing: 10 },
      },
      '(min-width: 1000px)': {
        slides: { perView: 3, spacing: 10 },
      },
      '(min-width: 1300px)': {
        slides: { perView: 4, spacing: 10 },
      },
    },
    slides: {
      perView: 1,
      spacing: 10,
    },
  })

  return (
    <div className="grid place-items-center gap-5 px-6 py-7">
      <h2 className="text-center font-sec text-2xl font-semibold">{title}</h2>

      <hr className="w-20 border-2 border-bright-sun-300" />

      <div
        ref={sliderRef}
        className="keen-slider flex w-full overflow-hidden rounded"
      >
        {children}
      </div>
      {loaded && instanceRef.current && (
        <div className="flex w-full justify-end gap-3">
          <button
            className="cursor pointer rounded-lg border border-gray-300 p-4"
            onClick={(e) => {
              e.stopPropagation()
              instanceRef.current?.prev()
            }}
          >
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
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>

          <button
            className="cursor pointer rounded-lg border border-gray-300 p-4"
            onClick={(e) => {
              e.stopPropagation()
              instanceRef.current?.next()
            }}
          >
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
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  )
}
