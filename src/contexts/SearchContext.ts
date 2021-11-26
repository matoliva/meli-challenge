import {createContext, Dispatch, SetStateAction} from 'react'

interface ISearchContext {
  search: string
  setSearch?: Dispatch<SetStateAction<string>>
}

const defaultValue = {
  search: '',
}

export const SearchContext = createContext<ISearchContext>(defaultValue)
