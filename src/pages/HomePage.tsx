import {SearchBox} from '../components/SearchBox'
import {Header} from '../components/Header'
import {ProductCard} from '../components/ProductCard'
import {products} from '../models/products'

export const HomePage = () => {
  const onSearchChange = (searchText: string): void => {
    console.log(searchText)
  }

  return (
    <main className="main">
      <Header>
        <SearchBox onSearchChange={onSearchChange} />
      </Header>
      <section className="section">
        <ProductCard item={products[0].items[0]} />
        <ProductCard item={products[0].items[0]} />
        <ProductCard item={products[0].items[0]} />
        <ProductCard item={products[0].items[0]} />
      </section>
    </main>
  )
}
