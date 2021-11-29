import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import {BrowserRouter} from 'react-router-dom'
import {SearchBox} from '../../components/SearchBox'

describe('SearchBox', () => {
  beforeEach(() => {})

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
    const setSearchMock = jest.fn()
    const useStateMock = useState => [useState, setSearchMock]

    jest.spyOn(React, 'useState').mockImplementation(useStateMock)

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

    expect(setSearchMock).toHaveBeenCalledTimes(1)
    expect(setSearchMock).toHaveBeenCalledWith(textValue)
    expect(searchBoxInput.value).toBe('')
  })

  it('sould call onSearchChange when the user press enter key', () => {
    const setSearchMock = jest.fn()
    const useStateMock = useState => [useState, setSearchMock]

    jest.spyOn(React, 'useState').mockImplementation(useStateMock)

    const {getByTestId} = render(
      <BrowserRouter>
        <SearchBox />
      </BrowserRouter>,
    )
    const textValue = 'new value'
    const searchBoxInput = getByTestId('search-box__input')

    fireEvent.change(searchBoxInput, {target: {value: textValue}})
    fireEvent.keyDown(searchBoxInput, {
      key: 'Enter',
      code: 'Enter',
      charCode: 13,
    })

    expect(setSearchMock).toHaveBeenCalledTimes(1)
    expect(setSearchMock).toHaveBeenCalledWith(textValue)
    expect(searchBoxInput.value).toBe('')
  })

  it('should not call onSearchChange when the textValue is empty', () => {
    const setSearchMock = jest.fn()
    const useStateMock = useState => [useState, setSearchMock]

    jest.spyOn(React, 'useState').mockImplementation(useStateMock)

    const {getByTestId} = render(
      <BrowserRouter>
        <SearchBox />
      </BrowserRouter>,
    )
    const searchBoxButton = getByTestId('search-box__button')
    const searchBoxInput = getByTestId('search-box__input')

    fireEvent.click(searchBoxButton)
    expect(setSearchMock).not.toHaveBeenCalled()

    fireEvent.keyDown(searchBoxInput, {
      key: 'Enter',
      code: 'Enter',
      charCode: 13,
    })
    expect(setSearchMock).not.toHaveBeenCalled()
  })
})
