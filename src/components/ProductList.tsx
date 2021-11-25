import {ProductCard} from './ProductCard'
import {IItemMapped} from '../pages/HomePage'

interface IProp {
  items: IItemMapped[]
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
