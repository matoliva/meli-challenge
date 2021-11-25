import {Layout} from './components/Layout'
import {Router} from './routes/Router'

import './styles/styles.scss'

export const MeliApp = () => {
  return (
    <Layout>
      <Router />
    </Layout>
  )
}
