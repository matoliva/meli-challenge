import {products} from '../models/products'
import {ProductList} from '../components/ProductList'
import {useFetch} from '../hooks/useFetch'

export const HomePage = () => {
  const {apiData, isLoading, serverError} = useFetch(
    'https://api.mercadolibre.com/sites/MLA/search?q=iphone&limit=4#json',
  )

  console.log(apiData, isLoading)
  return <ProductList items={products[0].items} />
}
