import {useParams} from 'react-router'
import {productById} from '../models/products'

export const ProductPage = () => {
  const {id = ''} = useParams()

  const product = productById(id)

  const {title, price, picture, condition} = product
  const currency = price.currency === 'ARS' ? '$' : 'uSd'

  return (
    <article className="product-page">
      <div className="product-page__product">
        <img src={picture} alt={title} />
        <div className="product-page__product--buy">
          <p>{`${condition} - 234 vendidos`}</p>
          <h3>{title}</h3>
          <h3>Sombrero Oxford</h3>
          <p className="product-page__product--price">
            {currency} {price.amount}
          </p>
          <button className="btn pointer">Comprar</button>
        </div>
      </div>
      <div className="product-page__description">
        <h2>Descripción del producto</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
          blanditiis, dolor eveniet modi nisi commodi nesciunt? Architecto
          reprehenderit quibusdam iusto vel in ratione voluptate placeat! Optio
          ullam saepe distinctio provident!
        </p>
      </div>
    </article>
  )
}
