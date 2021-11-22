import {useState} from 'react'

interface IProps {
  onSearchChange: (searchText: string) => void
}

export const SearchBox = ({onSearchChange}: IProps) => {
  const [searchText, setFormValue] = useState('')

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

    onSearchChange(searchText.trim())
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
