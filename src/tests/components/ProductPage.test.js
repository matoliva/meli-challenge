import {BrowserRouter} from 'react-router-dom'
import {ProductPage} from '../../pages/ProductPage'
import {render, waitFor} from '@testing-library/react'
import {HomePage} from '../../pages/HomePage'

describe('Product Page', () => {
  beforeEach(() => {})

  it('renders correctly', () => {
    const {getByTestId} = render(
      <BrowserRouter>
        <ProductPage />
      </BrowserRouter>,
    )
    const productPage = getByTestId('product-page')
    expect(productPage).toMatchSnapshot()
  })

  it.skip('should called an async api when the component is rendering', async () => {
    const fakeResponse = {
      id: 1,
      title: 'test title',
      price: 1000,
      currency_id: 'ARS',
      address: {city_name: 'MDP'},
      thumbnail: 'http://image',
      condition: 'new',
      sold_quantity: 10,
      pictures: [
        {url: 'http://image'},
        {url: 'http://image'},
        {url: 'http://image'},
      ],
    }

    const fakeResponseDescription = {
      plain_text: 'lorem ipsum',
    }

    const mockFetch = Promise.resolve([
      {json: () => Promise.resolve(fakeResponse)},
      {json: () => Promise.resolve(fakeResponseDescription)},
    ])
    const mockedFetch = jest
      .spyOn(window, 'fetch')
      .mockImplementationOnce(() => mockFetch)
    await waitFor(async () => {
      render(
        <BrowserRouter>
          <HomePage />
        </BrowserRouter>,
      )
    })
    expect(mockedFetch).toHaveBeenCalledTimes(1)
  })
})
