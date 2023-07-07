'use client'

import { useEffect, useState } from 'react'
import * as Realm from 'realm-web'
import ProductCardListing from './ProductCardListing'
import { useSearchParams } from 'next/navigation'

export default function QueryResult() {
  const [result, setResult] = useState<any>([])
  const searchParams = useSearchParams()
  const query = searchParams.get('query')

  useEffect(() => {
    async function getResults() {
      const REALM_APP_ID = 'application-0-yoprp'
      const app = new Realm.App({ id: REALM_APP_ID })

      const credentials = Realm.Credentials.anonymous()

      try {
        const user = await app.logIn(credentials)
        const allAds = await user.functions.searchAds(query)

        setResult(allAds)
      } catch (error) {
        console.log(error)
      }
    }

    getResults()
  }, [query])

  return (
    <div className="grid h-fit gap-4">
      <div className="h-fit">
        <h3 className="font-sec text-2xl font-semibold">
          {result.length} Anúncio(s)
        </h3>
      </div>

      <div className="grid gap-2">
        {result.map((info: any) => {
          return (
            <ProductCardListing
              key={info._id.toString()}
              id={info._id}
              image={info.imageUrl}
              isNew={true}
              title={info.title}
              category={info.type}
              location={`${info.neighbourhood}, ${info.city} - ${info.state}`}
              price={info.salePrice}
            />
          )
        })}
      </div>
    </div>
  )
}
