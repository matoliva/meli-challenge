import {IItem} from '../models/products'
import noImage from '../assets/no-image.png'
import {Link} from 'react-router-dom'

interface IProps {
  item: IItem
}
export const ProductCard = ({item}: IProps) => {
  const {id, title, price, picture, condition, location} = item

  const currency = price.currency === 'ARS' ? '$' : 'uSd'
  const image = picture ? picture : noImage

  //TODO: check the way that I'm using the Link component
  return (
    <Link to={`/item/${id}`} style={{textDecoration: 'none', color: 'black'}}>
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
    </Link>
  )
}
