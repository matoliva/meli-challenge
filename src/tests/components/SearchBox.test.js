import {render, fireEvent} from '@testing-library/react'
import {SearchBox} from '../../components/SearchBox'

const baseProps = {
  onSearchChange: () => {},
}

describe('SearchBox', () => {
  beforeEach(() => {})

  it('renders correctly', () => {
    const {getByTestId} = render(<SearchBox {...baseProps} />)
    const searchBox = getByTestId('search-box')
    expect(searchBox).toMatchSnapshot()
  })

  it('should change the value when the user types', () => {
    const {getByTestId} = render(<SearchBox {...baseProps} />)
    const searchBoxInput = getByTestId('search-box__input')
    const textValue = 'new value'

    fireEvent.change(searchBoxInput, {target: {value: textValue}})

    expect(searchBoxInput.value).toBe(textValue)
  })

  it('sould call onSearchChange when the user hit the button', () => {
    const props = {
      ...baseProps,
      onSearchChange: jest.fn(),
    }

    const {getByTestId} = render(<SearchBox {...props} />)
    const textValue = 'new value'
    const searchBoxButton = getByTestId('search-box__button')
    const searchBoxInput = getByTestId('search-box__input')

    fireEvent.change(searchBoxInput, {target: {value: textValue}})
    fireEvent.click(searchBoxButton)

    expect(props.onSearchChange).toHaveBeenCalledTimes(1)
    expect(props.onSearchChange).toHaveBeenCalledWith(textValue)
    expect(searchBoxInput.value).toBe('')
  })

  it('sould call onSearchChange when the user press enter key', () => {
    const props = {
      ...baseProps,
      onSearchChange: jest.fn(),
    }

    const {getByTestId} = render(<SearchBox {...props} />)
    const textValue = 'new value'
    const searchBoxInput = getByTestId('search-box__input')

    fireEvent.change(searchBoxInput, {target: {value: textValue}})
    fireEvent.keyDown(searchBoxInput, {
      key: 'Enter',
      code: 'Enter',
      charCode: 13,
    })

    expect(props.onSearchChange).toHaveBeenCalledTimes(1)
    expect(props.onSearchChange).toHaveBeenCalledWith(textValue)
    expect(searchBoxInput.value).toBe('')
  })

  it('should not call onSearchChange when the textValue is empty', () => {
    const props = {
      ...baseProps,
      onSearchChange: jest.fn(),
    }

    const {getByTestId} = render(<SearchBox {...props} />)
    const searchBoxButton = getByTestId('search-box__button')
    const searchBoxInput = getByTestId('search-box__input')

    fireEvent.click(searchBoxButton)
    expect(props.onSearchChange).not.toHaveBeenCalled()

    fireEvent.keyDown(searchBoxInput, {
      key: 'Enter',
      code: 'Enter',
      charCode: 13,
    })
    expect(props.onSearchChange).not.toHaveBeenCalled()
  })
})
