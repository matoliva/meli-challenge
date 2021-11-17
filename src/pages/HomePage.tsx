import {SearchBox} from '../components/SearchBox'

export const HomePage = () => {
  const onSearchChange = (searchText: string): void => {
    console.log(searchText)
  }

  return (
    <>
      <SearchBox onSearchChange={onSearchChange} />
    </>
  )
}
