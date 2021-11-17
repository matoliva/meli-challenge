import {useState} from 'react'
import logo from '../assets/logo.png'

interface IArgs {
  onSearchChange: (searchText: string) => void
}

export const SearchBox = ({onSearchChange}: IArgs) => {
  const [{searchText}, setFormValue] = useState({searchText: ''})

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setFormValue({searchText: e.currentTarget.value})
  }

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()

    if (!searchText) return

    onSearchChange(searchText)
    setFormValue({searchText: ''})
  }

  return (
    <div className="search-box">
      <img className="search-box__logo" src={logo} alt="logo" />

      <form className="search-box__form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="input-text"
          placeholder=" Nunca dejes de buscar"
          onChange={handleChange}
          value={searchText}
        />
        <div
          className="search-box__form__icon pointer"
          onClick={handleSubmit}
        ></div>
      </form>
    </div>
  )
}
