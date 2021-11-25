import {Header} from './Header'
import {SearchBox} from './SearchBox'

interface IProps {
  children: React.ReactNode
}
export const Layout = ({children}: IProps) => {
  const onSearchChange = (searchText: string): void => {
    console.log(searchText)
  }
  return (
    <div className="main">
      <Header>
        <SearchBox onSearchChange={onSearchChange} />
      </Header>
      <main className="section">{children}</main>
    </div>
  )
}
