import {SearchBox} from '../components/SearchBox'
import {Header} from '../components/Header'

export const HomePage = () => {
  const onSearchChange = (searchText: string): void => {
    console.log(searchText)
  }

  return (
    <main>
      <Header>
        <SearchBox onSearchChange={onSearchChange} />
      </Header>
    </main>
  )
}
