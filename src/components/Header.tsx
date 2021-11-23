import logo from '../assets/logo.png'

interface IProps {
  children?: React.ReactNode
}
export const Header = ({children}: IProps) => {
  return (
    <header className="header" data-testid="header">
      <img className="header__logo" src={logo} alt="logo" />
      {children}
    </header>
  )
}
