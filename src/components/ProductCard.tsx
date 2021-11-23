import {IItems} from '../models/products'

interface IProps {
  item: IItems
}
export const ProductCard = ({item}: IProps) => {
  const {title, price, picture, condition, location} = item
  const currency = price.currency === 'ARS' ? '$' : 'uSd'

  return (
    <article className="product-card">
      <div className="product-card__image">
        <img src={picture} alt="product" />
      </div>
      <div className="product-card__description">
        <p className="product-card__description--price">
          {currency} {price.amount}
        </p>
        <p>{title}</p>
        <p>{condition}</p>
      </div>
      <div className="product-card__location">
        <p>{location}</p>
      </div>
    </article>
  )
}
