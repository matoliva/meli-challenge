import {render, waitFor} from '@testing-library/react'
import {BrowserRouter} from 'react-router-dom'
import {HomePage} from '../../pages/HomePage'

describe('Home Page', () => {
  beforeEach(() => {})

  it('renders correctly', () => {
    const {getByTestId} = render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>,
    )
    const homePage = getByTestId('home-page')
    expect(homePage).toMatchSnapshot()
  })

  it('should called an async api when the component is rendering', async () => {
    const fakeResponse = {
      id: 1,
      title: 'test title',
      price: 1000,
      currency_id: 'ARS',
      address: {city_name: 'Mar del Plata'},
      thumbnail: 'http://image',
      condition: 'new',
    }

    const mockFetch = Promise.resolve({
      json: () => Promise.resolve(fakeResponse),
    })
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
