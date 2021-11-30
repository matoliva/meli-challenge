import {useEffect, useState} from 'react'
import {useParams} from 'react-router'
import {baseurl} from '../config/urls'
import {useFetchAll} from '../hooks/useFetchAll'
import {useWindowSize} from '../hooks/useWindowSize'
import {IItemMapped} from './HomePage'
import {Size} from '../models/products'

interface IItemMappedExt extends IItemMapped {
  sold_quantity: number
  mobilePicture: string
  desktopPicture: string
  plain_text: string
}

export const ProductPage = () => {
  const {id: productId = ''} = useParams()

  const size: Size = useWindowSize()

  const {apiData, isLoading, serverError} = useFetchAll(
    `${baseurl}/items/${productId}`,
    `${baseurl}/items/${productId}/description`,
  )

  const [item, setItem] = useState<IItemMappedExt>({
    id: '',
    title: '',
    price: 0,
    currency: '',
    condition: '',
    address: '',
    sold_quantity: 0,
    picture: '',
    mobilePicture: '',
    desktopPicture: '',
    plain_text: '',
  })

  useEffect(() => {
    const mapDatafromServer = () => {
      let dataMaped
      if (apiData) {
        dataMaped = {
          id: apiData.id,
          title: apiData.title,
          price: apiData.price,
          currency: apiData.currency_id,
          address: apiData?.address?.city_name,
          picture: apiData.thumbnail,
          condition: apiData.condition,
          sold_quantity: apiData.sold_quantity,
          mobilePicture: apiData.pictures[0].url,
          desktopPicture: apiData.pictures[2].url,
          plain_text: apiData.plain_text,
        }
        setItem(dataMaped)
      }
    }
    mapDatafromServer()
  }, [apiData])

  const {
    title,
    price,
    currency,
    condition,
    sold_quantity,
    mobilePicture,
    desktopPicture,
    plain_text,
  } = item

  const currencyMap = currency === 'ARS' ? '$' : 'uSd'
  const isMobile = size && size.width && size.width < 768 ? true : false
  const image = isMobile ? mobilePicture : desktopPicture

  return (
    <article className="product-page" data-testid="product-page">
      <div className="product-page__product">
        <img src={image} alt={title} />
        <div className="product-page__product--buy">
          <p>{`${condition} - ${sold_quantity} vendidos`}</p>
          <h3>{title}</h3>
          <p className="product-page__product--price">
            {currencyMap} {price}
          </p>
          <button className="btn pointer">Comprar</button>
        </div>
      </div>
      <div className="product-page__description">
        <h2>Descripción del producto</h2>
        <p>{plain_text}</p>
      </div>
    </article>
  )
}
