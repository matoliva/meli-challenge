import {render} from '@testing-library/react'
import {Header} from '../../components/Header'
import {SearchBox} from '../../components/SearchBox'

describe('Header', () => {
  it('renders correctly', () => {
    const {getByTestId} = render(<Header />)
    const header = getByTestId('header')
    expect(header).toMatchSnapshot()
  })

  it('should render the SearchBox component passed by props', () => {
    const {getByTestId} = render(
      <Header>
        <SearchBox />
      </Header>,
    )
    const searchBox = getByTestId('search-box')

    expect(searchBox).toBeDefined()
  })
})
