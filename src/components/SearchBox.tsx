import {useContext, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {SearchContext} from '../contexts/SearchContext'

export const SearchBox = () => {
  const [searchText, setFormValue] = useState('')

  const {setSearch} = useContext(SearchContext)

  const navigate = useNavigate()

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setFormValue(e.currentTarget.value)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.code === 'Enter') {
      handleSubmit(e)
    }
  }

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()

    if (!searchText) return

    if (setSearch) {
      setSearch(searchText.trim())
      navigate('/')
    }
    setFormValue('')
  }

  return (
    <div className="search-box">
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
