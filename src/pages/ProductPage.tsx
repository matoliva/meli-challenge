import {useEffect, useState} from 'react'
import {useParams} from 'react-router'
import {useFetch} from '../hooks/useFetch'
import {IItemMapped} from './HomePage'

interface IItemMappedExt extends IItemMapped {
  sold_quantity: number
  mobilePicture: string
  desktopPicture: string
}

export const ProductPage = () => {
  const {id: productId = ''} = useParams()

  const [apiData, setApiData] = useState<any>()

  // const {apiData, isLoading, serverError} = useFetch(
  //   `https://api.mercadolibre.com/items/${productId}`,
  // )
  //TODO: why the useFetch hook didn't work?
  useEffect(() => {
    fetch(`https://api.mercadolibre.com/items/${productId}`)
      .then(resp => resp.json())
      .then(data => setApiData(data))
  }, [productId])

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
  })

  useEffect(() => {
    const mapDatafromServer = () => {
      debugger
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
        }
        setItem(dataMaped)
      }
      debugger
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
  } = item

  const currencyMap = currency === 'ARS' ? '$' : 'uSd'
  //TODO: I have to code a hook that check if it's a desktop or mobile screen
  return (
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
