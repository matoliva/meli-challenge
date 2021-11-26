import logo from '../assets/logo.png'

interface IProps {
  children?: React.ReactNode
}
//TODO: add a Link on the logo to go to home page
export const Header = ({children}: IProps) => {
  return (
    <header className="header" data-testid="header">
      <img className="header__logo" src={logo} alt="logo" />
      {children}
    </header>
  )
}
