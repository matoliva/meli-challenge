import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import {HomePage} from '../pages/HomePage'
import {ProductPage} from '../pages/ProductPage'
import {Layout} from '../components/Layout'

export const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="item/:id" element={<ProductPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
