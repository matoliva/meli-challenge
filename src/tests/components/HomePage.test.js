import {render, waitFor} from '@testing-library/react'
import {BrowserRouter} from 'react-router-dom'
import {SearchContext} from '../../contexts/SearchContext'
import {HomePage} from '../../pages/HomePage'

describe('Home Page', () => {
  it('renders correctly', () => {
    const {getByTestId} = render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>,
    )
    const homePage = getByTestId('home-page')
    expect(homePage).toMatchSnapshot()
  })

  it('should render productList with ProductCards', async () => {
    const mockContext = {
      search: 'iphone',
      setSearch: jest.fn(),
    }

    const {getByTestId, getAllByTestId} = render(
      <SearchContext.Provider value={mockContext}>
        <BrowserRouter>
          <HomePage />
        </BrowserRouter>
      </SearchContext.Provider>,
    )
    const productList = await waitFor(() => getByTestId('product-list'))
    const productCards = await waitFor(() => getAllByTestId('product-card'))

    expect(productList).toBeDefined()
    expect(productCards).toBeDefined()
    expect(productCards).toHaveLength(4)
  })
})
