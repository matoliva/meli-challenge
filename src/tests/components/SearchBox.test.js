import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import {BrowserRouter} from 'react-router-dom'
import {SearchBox} from '../../components/SearchBox'
import {SearchContext} from '../../contexts/SearchContext'

describe('SearchBox', () => {
  let mockContext

  beforeEach(() => {
    mockContext = {
      search: '',
      setSearch: jest.fn(),
    }
  })

  afterEach(() => {
    //React.useContext = realUseContext
  })

  it('renders correctly', () => {
    const {getByTestId} = render(
      <BrowserRouter>
        <SearchBox />
      </BrowserRouter>,
    )
    const searchBox = getByTestId('search-box')
    expect(searchBox).toMatchSnapshot()
  })

  it('should change the value when the user types', () => {
    const {getByTestId} = render(
      <BrowserRouter>
        <SearchBox />
      </BrowserRouter>,
    )
    const searchBoxInput = getByTestId('search-box__input')
    const textValue = 'new value'

    fireEvent.change(searchBoxInput, {target: {value: textValue}})

    expect(searchBoxInput.value).toBe(textValue)
  })

  it('sould call setSearch when the user hit the button', () => {
    const {getByTestId} = render(
      <SearchContext.Provider value={mockContext}>
        <BrowserRouter>
          <SearchBox />
        </BrowserRouter>
      </SearchContext.Provider>,
    )
    const textValue = 'new value'
    const searchBoxButton = getByTestId('search-box__button')
    const searchBoxInput = getByTestId('search-box__input')

    fireEvent.change(searchBoxInput, {target: {value: textValue}})
    fireEvent.click(searchBoxButton)

    expect(mockContext.setSearch).toHaveBeenCalledTimes(1)
    expect(mockContext.setSearch).toHaveBeenCalledWith(textValue)
    expect(searchBoxInput.value).toBe('')
  })

  it('sould call setSearch when the user press enter key', () => {
    const {getByTestId} = render(
      <SearchContext.Provider value={mockContext}>
        <BrowserRouter>
          <SearchBox />
        </BrowserRouter>
      </SearchContext.Provider>,
    )
    const textValue = 'new value'
    const searchBoxInput = getByTestId('search-box__input')

    fireEvent.change(searchBoxInput, {target: {value: textValue}})
    fireEvent.keyDown(searchBoxInput, {
      key: 'Enter',
      code: 'Enter',
      charCode: 13,
    })

    expect(mockContext.setSearch).toHaveBeenCalledTimes(1)
    expect(mockContext.setSearch).toHaveBeenCalledWith(textValue)
    expect(searchBoxInput.value).toBe('')
  })

  it('should not call setSearchMock when the textValue is empty', () => {
    const {getByTestId} = render(
      <SearchContext.Provider value={mockContext}>
        <BrowserRouter>
          <SearchBox />
        </BrowserRouter>
      </SearchContext.Provider>,
    )
    const searchBoxButton = getByTestId('search-box__button')
    const searchBoxInput = getByTestId('search-box__input')

    fireEvent.click(searchBoxButton)
    expect(mockContext.setSearch).not.toHaveBeenCalled()

    fireEvent.keyDown(searchBoxInput, {
      key: 'Enter',
      code: 'Enter',
      charCode: 13,
    })
    expect(mockContext.setSearch).not.toHaveBeenCalled()
  })

  it('should redirect to home page when the user submit the data', () => {
    const {getByTestId} = render(
      <BrowserRouter>
        <SearchBox />
      </BrowserRouter>,
    )
    const textValue = 'new value'
    const searchBoxButton = getByTestId('search-box__button')
    const searchBoxInput = getByTestId('search-box__input')

    fireEvent.change(searchBoxInput, {target: {value: textValue}})
    fireEvent.click(searchBoxButton)

    expect(window.location.pathname).toBe('/')
  })
})
