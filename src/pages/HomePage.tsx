import {products} from '../models/products'
import {ProductList} from '../components/ProductList'

export const HomePage = () => {
  return <ProductList items={products[0].items} />
}
