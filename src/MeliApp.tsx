import './styles/styles.scss'
import {HomePage} from './pages/HomePage'
import {ProductPage} from './pages/ProductPage'
import {Layout} from './components/Layout'

export const MeliApp = () => {
  return (
    <Layout>
      {/* <HomePage /> */}
      <ProductPage id="1" />
    </Layout>
  )
}
