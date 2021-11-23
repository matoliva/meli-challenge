import {SearchBox} from '../components/SearchBox'
import {Header} from '../components/Header'
import {products} from '../models/products'
import {ProductList} from '../components/ProductList'

export const HomePage = () => {
  const onSearchChange = (searchText: string): void => {
    console.log(searchText)
  }

  return (
    <main className="main">
      <Header>
        <SearchBox onSearchChange={onSearchChange} />
      </Header>
      <ProductList items={products[0].items} />
    </main>
  )
}
