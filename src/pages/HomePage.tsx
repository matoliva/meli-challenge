import {ProductList} from '../components/ProductList'
import {useFetch} from '../hooks/useFetch'
import {useContext, useEffect, useState} from 'react'
import {SearchContext} from '../contexts/SearchContext'
import {Spinner} from '../components/Spinner'
import {baseurl} from '../config/urls'

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
  //TODO: analice the breadcrumb component
  const {search} = useContext(SearchContext)

  const {apiData, isLoading} = useFetch(
    `${baseurl}/sites/MLA/search?q=${search}&limit=4#json`,
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
        dataMaped = apiData.results.map((item: any) => {
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

  return (
    <div data-testid="home-page">
      {!isLoading ? <ProductList items={dataMapped} /> : <Spinner />}
    </div>
  )
}
