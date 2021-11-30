import {Header} from './Header'
import {SearchBox} from './SearchBox'

interface IProps {
  children: React.ReactNode
}
export const Layout = ({children}: IProps) => {
  return (
    <div className="main">
      <Header>
        <SearchBox />
      </Header>
      <main className="section">{children}</main>
    </div>
  )
}
