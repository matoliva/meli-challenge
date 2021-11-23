import {render} from '@testing-library/react'
import {Header} from '../../components/Header'

describe('Header', () => {
  it('renders correctly', () => {
    const {getByTestId} = render(<Header />)
    const header = getByTestId('header')
    expect(header).toMatchSnapshot()
  })
})
