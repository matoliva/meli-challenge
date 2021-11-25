import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import {HomePage} from '../pages/HomePage'
import {ProductPage} from '../pages/ProductPage'

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="item/:id" element={<ProductPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}
