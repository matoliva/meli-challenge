import {render} from '@testing-library/react'
import {BrowserRouter} from 'react-router-dom'
import {ProductCard} from '../../components/ProductCard'

let mockItem

describe('Product card', () => {
  beforeEach(() => {
    mockItem = {
      id: '1',
      title: 'Zapa Nike',
      currency: 'ARS',
      price: 1000,
      picture: 'http://http2.mlstatic.com/D_807023-MLA48100603525_112021-O.jpg',
      condition: 'Completo unico',
      free_shipping: true,
      address: 'Capital Federal',
    }
  })

  it('renders correctly', () => {
    const {getByTestId} = render(
      <BrowserRouter>
        <ProductCard item={mockItem} />
      </BrowserRouter>,
    )
    const productCard = getByTestId('product-card')
    expect(productCard).toMatchSnapshot()
  })

  it('should show the correct data from props', () => {
    const {getByTestId} = render(
      <BrowserRouter>
        <ProductCard item={mockItem} />
      </BrowserRouter>,
    )
    const productImage = getByTestId('product-card__image')
    const pCurrency = getByTestId('product-card__currency')
    const pTitle = getByTestId('product-card__title')
    const pLocation = getByTestId('product-card__location')

    expect(productImage.src).toContain(mockItem.picture)
    expect(pCurrency.textContent).toBe(`$ ${mockItem.price}`)
    expect(pTitle.textContent).toBe(mockItem.title)
    expect(pLocation.textContent).toBe(mockItem.address)
  })

  it('should show a $ symbol when the currency is ARS', () => {
    const {getByTestId} = render(
      <BrowserRouter>
        <ProductCard item={mockItem} />
      </BrowserRouter>,
    )
    const pCurrency = getByTestId('product-card__currency')

    expect(pCurrency.textContent).toContain('$')
  })

  it('should show a uSd symbol when the currency is Dollar', () => {
    const {getByTestId} = render(
      <BrowserRouter>
        <ProductCard
          item={{
            ...mockItem,
            currency: 'uSd',
            price: 1000,
          }}
        />
      </BrowserRouter>,
    )
    const pCurrency = getByTestId('product-card__currency')

    expect(pCurrency.textContent).toContain('uSd')
  })

  it('should show a default image when there is not image in props', () => {
    const {getByTestId} = render(
      <BrowserRouter>
        <ProductCard
          item={{
            ...mockItem,
            picture: null,
          }}
        />
      </BrowserRouter>,
    )
    const productImage = getByTestId('product-card__image')
    expect(productImage.src).toContain('http://localhost/no-image.png')
  })
})
