import logo from '../assets/logo.png'

export const SearchBox = () => {
  return (
    <div className="search-box">
      <img className="search-box__logo" src={logo} alt="logo" />

      <form className="search-box__form">
        <input
          type="text"
          className="input-text"
          placeholder=" Nunca dejes de buscar"
        />
        <div className="search-box__form__icon pointer"></div>
      </form>
    </div>
  )
}
