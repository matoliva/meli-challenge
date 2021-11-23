import {IItems} from '../models/products'
import noImage from '../assets/no-image.png'

interface IProps {
  item: IItems
}
export const ProductCard = ({item}: IProps) => {
  const {title, price, picture, condition, location} = item

  const currency = price.currency === 'ARS' ? '$' : 'uSd'
  const image = picture ? picture : noImage

  return (
    <article className="product-card pointer" data-testid="product-card">
      <div className="product-card__image">
        <img src={image} alt="product" data-testid="product-card__image" />
      </div>
      <div className="product-card__description">
        <p
          className="product-card__description--price"
          data-testid="product-card__currency"
        >
          {currency} {price.amount}
        </p>
        <p data-testid="product-card__title">{title}</p>
        <p>{condition}</p>
      </div>
      <div className="product-card__location">
        <p data-testid="product-card__location">{location}</p>
      </div>
    </article>
  )
}
