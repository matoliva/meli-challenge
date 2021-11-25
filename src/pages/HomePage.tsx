import {ProductList} from '../components/ProductList'
import {useFetch} from '../hooks/useFetch'
import {useEffect, useState} from 'react'

export interface IItemMapped {
  id: string
  title: string
  price: number
  currency: string
  condition: string
  address: string
  picture: string
}

export const HomePage = () => {
  const {apiData, isLoading, serverError} = useFetch(
    'https://api.mercadolibre.com/sites/MLA/search?q=iphone&limit=4#json',
  )

  const [dataMapped, setDataMapped] = useState<IItemMapped[]>([
    {
      id: '',
      title: '',
      price: 0,
      currency: '',
      condition: '',
      address: '',
      picture: '',
    },
  ])

  useEffect(() => {
    const mapDatafromServer = () => {
      let dataMaped
      if (apiData) {
        dataMaped = apiData.map((item: any) => {
          return {
            id: item.id,
            title: item.title,
            price: item.price,
            currency: item.currency_id,
            address: item?.address?.city_name,
            picture: item.thumbnail,
            condition: item.condition,
          }
        })
        setDataMapped(dataMaped)
      }
    }

    mapDatafromServer()
  }, [apiData])

  return <ProductList items={dataMapped} />
}
