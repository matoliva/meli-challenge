import {Link} from 'react-router-dom'
import logo from '../assets/logo.png'

interface IProps {
  children?: React.ReactNode
}

export const Header = ({children}: IProps) => {
  return (
    <header className="header pointer" data-testid="header">
      <Link to="/">
        <img
          className="header__logo"
          src={logo}
          alt="logo"
          data-testid="logo"
        />
      </Link>
      {children}
    </header>
  )
}
