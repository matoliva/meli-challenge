import {render, screen} from '@testing-library/react'
import {BrowserRouter} from 'react-router-dom'
import {ProductList} from '../../components/ProductList'

let items

describe('Product List', () => {
  beforeEach(() => {
    items = [
      {
        id: '1',
        title: 'Zapa Nike',
        price: 1000,
        currency: 'ARS',
        picture:
          'http://http2.mlstatic.com/D_807023-MLA48100603525_112021-O.jpg',
        condition: 'Completo unico',
        free_shipping: true,
        address: 'Capital Federal',
      },
      {
        id: '2',
        title: 'Zapa Nike',
        price: 1000,
        currency: 'ARS',
        picture:
          'http://http2.mlstatic.com/D_807023-MLA48100603525_112021-O.jpg',
        condition: 'Completo unico',
        free_shipping: true,
        address: 'Capital Federal',
      },
      {
        id: '3',
        title: 'Zapa Nike',
        price: 1000,
        currency: 'ARS',
        picture:
          'http://http2.mlstatic.com/D_807023-MLA48100603525_112021-O.jpg',
        condition: 'Completo unico',
        free_shipping: true,
        address: 'Capital Federal',
      },
      {
        id: '4',
        title: 'Zapa Nike',
        price: 1000,
        currency: 'ARS',
        picture:
          'http://http2.mlstatic.com/D_807023-MLA48100603525_112021-O.jpg',
        condition: 'Completo unico',
        free_shipping: true,
        address: 'Capital Federal',
      },
    ]
  })

  it('renders correctly', () => {
    const {getByTestId} = render(
      <BrowserRouter>
        <ProductList items={items} />
      </BrowserRouter>,
    )
    const productList = getByTestId('product-list')
    expect(productList).toMatchSnapshot()
  })

  it('should render the list items', () => {
    render(
      <BrowserRouter>
        <ProductList items={items} />
      </BrowserRouter>,
    )

    const cards = screen.getAllByTestId('product-card')
    expect(cards.length).toBe(items.length)
  })
})
