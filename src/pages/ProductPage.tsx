import {useEffect, useState} from 'react'
import {useParams} from 'react-router'
import {Spinner} from '../components/Spinner'
import {useFetchAll} from '../hooks/useFetchAll'
import {IItemMapped} from './HomePage'

interface IItemMappedExt extends IItemMapped {
  sold_quantity: number
  mobilePicture: string
  desktopPicture: string
  plain_text: string
}

export const ProductPage = () => {
  const {id: productId = ''} = useParams()

  const {apiData, isLoading, serverError} = useFetchAll(
    `https://api.mercadolibre.com/items/${productId}`,
    `https://api.mercadolibre.com/items/${productId}/description`,
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
      let dataMaped: any
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
    picture,
    condition,
    sold_quantity,
    mobilePicture,
    desktopPicture,
    plain_text,
  } = item

  const currencyMap = currency === 'ARS' ? '$' : 'uSd'
  //TODO: I have to code a hook that check if it's a desktop or mobile screen
  return !isLoading ? (
    <article className="product-page">
      <div className="product-page__product">
        <img src={desktopPicture} alt={title} />
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
  ) : (
    <Spinner />
  )
}
