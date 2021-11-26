import {useState} from 'react'
import {Layout} from './components/Layout'
import {SearchContext} from './contexts/SearchContext'

import {Router} from './routes/Router'

import './styles/styles.scss'

export const MeliApp = () => {
  const [search, setSearch] = useState<string>('iphone')

  return (
    <SearchContext.Provider value={{search, setSearch}}>
      <Layout>
        <Router />
      </Layout>
    </SearchContext.Provider>
  )
}
