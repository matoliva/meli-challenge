import {useState} from 'react'
import logo from '../assets/logo.png'

interface IProps {
  onSearchChange: (searchText: string) => void
}

export const SearchBox = ({onSearchChange}: IProps) => {
  //TODO: change to string
  //TODO: split components
  const [{searchText}, setFormValue] = useState({searchText: ''})

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setFormValue({searchText: e.currentTarget.value})
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.code === 'Enter') {
      handleSubmit(e)
    }
  }

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()

    if (!searchText) return

    onSearchChange(searchText.trim())
    setFormValue({searchText: ''})
  }

  return (
    <div className="search-box">
      <img className="search-box__logo" src={logo} alt="logo" />

      <form className="search-box__form" data-testid="search-box">
        <input
          data-testid="search-box__input"
          type="text"
          className="input-text"
          placeholder=" Nunca dejes de buscar"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          value={searchText}
        />
        <button
          type="submit"
          data-testid="search-box__button"
          className="search-box__form__icon pointer"
          onClick={handleSubmit}
        />
      </form>
    </div>
  )
}
