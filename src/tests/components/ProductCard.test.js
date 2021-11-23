import {render} from '@testing-library/react'
import {ProductCard} from '../../components/ProductCard'

let mockItem

describe('Product card', () => {
  beforeEach(() => {
    mockItem = {
      id: '1',
      title: 'Zapa Nike',
      price: {
        currency: 'ARS',
        amount: 1000,
        decimals: 2,
      },
      picture: 'http://http2.mlstatic.com/D_807023-MLA48100603525_112021-O.jpg',
      condition: 'Completo unico',
      free_shipping: true,
      location: 'Capital Federal',
    }
  })

  it('renders correctly', () => {
    const {getByTestId} = render(<ProductCard item={mockItem} />)
    const productCard = getByTestId('product-card')
    expect(productCard).toMatchSnapshot()
  })

  it('should show the correct data from props', () => {
    const {getByTestId} = render(<ProductCard item={mockItem} />)
    const productImage = getByTestId('product-card__image')
    const pCurrency = getByTestId('product-card__currency')
    const pTitle = getByTestId('product-card__title')
    const pLocation = getByTestId('product-card__location')

    expect(productImage.src).toContain(mockItem.picture)
    expect(pCurrency.textContent).toBe(`$ ${mockItem.price.amount}`)
    expect(pTitle.textContent).toBe(mockItem.title)
    expect(pLocation.textContent).toBe(mockItem.location)
  })

  it('should show a $ symbol when the currency is ARS', () => {
    const {getByTestId} = render(<ProductCard item={mockItem} />)
    const pCurrency = getByTestId('product-card__currency')

    expect(pCurrency.textContent).toContain('$')
  })

  it('should show a uSd symbol when the currency is Dollar', () => {
    const {getByTestId} = render(
      <ProductCard
        item={{
          ...mockItem,
          price: {currency: 'uSd', amount: 1000, decimals: 2},
        }}
      />,
    )
    const pCurrency = getByTestId('product-card__currency')

    expect(pCurrency.textContent).toContain('uSd')
  })

  it('should show a default image when there is not image in props', () => {
    const {getByTestId} = render(
      <ProductCard
        item={{
          ...mockItem,
          picture: null,
        }}
      />,
    )
    const productImage = getByTestId('product-card__image')
    expect(productImage.src).toContain('http://localhost/no-image.png')
  })
})
