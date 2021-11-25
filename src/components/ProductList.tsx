import {IItem} from '../models/products'
import {ProductCard} from './ProductCard'

interface IProp {
  items: IItem[]
}

export const ProductList = ({items}: IProp) => {
  return (
    <section data-testid="product-list">
      {items.map(item => (
        <ProductCard key={item.id} item={item} />
      ))}
    </section>
  )
}
