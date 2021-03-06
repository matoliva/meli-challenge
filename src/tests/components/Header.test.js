import {render} from '@testing-library/react'
import {BrowserRouter} from 'react-router-dom'
import {Header} from '../../components/Header'
import {SearchBox} from '../../components/SearchBox'

describe('Header', () => {
  it('renders correctly', () => {
    const {getByTestId} = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    )
    const header = getByTestId('header')
    expect(header).toMatchSnapshot()
  })

  it('should render the SearchBox component passed by props', () => {
    const {getByTestId} = render(
      <BrowserRouter>
        <Header>
          <SearchBox />
        </Header>
      </BrowserRouter>,
    )
    const searchBox = getByTestId('search-box')

    expect(searchBox).toBeDefined()
  })

  it('should redirect to home page when the user hit the logo', () => {
    const {getByTestId} = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    )
    const logo = getByTestId('logo')

    logo.click()

    expect(window.location.pathname).toBe('/')
  })
})
