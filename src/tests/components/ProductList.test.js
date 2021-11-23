import {render, screen} from '@testing-library/react'
import {ProductList} from '../../components/ProductList'

let items

describe('Product List', () => {
  beforeEach(() => {
    items = [
      {
        id: '1',
        title: 'Zapa Nike',
        price: {
          currency: 'ARS',
          amount: 1000,
          decimals: 2,
        },
        picture:
          'http://http2.mlstatic.com/D_807023-MLA48100603525_112021-O.jpg',
        condition: 'Completo unico',
        free_shipping: true,
        location: 'Capital Federal',
      },
      {
        id: '2',
        title: 'Zapa Nike',
        price: {
          currency: 'ARS',
          amount: 1000,
          decimals: 2,
        },
        picture:
          'http://http2.mlstatic.com/D_807023-MLA48100603525_112021-O.jpg',
        condition: 'Completo unico',
        free_shipping: true,
        location: 'Capital Federal',
      },
      {
        id: '3',
        title: 'Zapa Nike',
        price: {
          currency: 'ARS',
          amount: 1000,
          decimals: 2,
        },
        picture:
          'http://http2.mlstatic.com/D_807023-MLA48100603525_112021-O.jpg',
        condition: 'Completo unico',
        free_shipping: true,
        location: 'Capital Federal',
      },
      {
        id: '4',
        title: 'Zapa Nike',
        price: {
          currency: 'ARS',
          amount: 1000,
          decimals: 2,
        },
        picture:
          'http://http2.mlstatic.com/D_807023-MLA48100603525_112021-O.jpg',
        condition: 'Completo unico',
        free_shipping: true,
        location: 'Capital Federal',
      },
    ]
  })

  it('renders correctly', () => {
    const {getByTestId} = render(<ProductList items={items} />)
    const productList = getByTestId('product-list')
    expect(productList).toMatchSnapshot()
  })

  it('should render the list items', () => {
    render(<ProductList items={items} />)

    const cards = screen.getAllByTestId('product-card')
    expect(cards.length).toBe(items.length)
  })
})
