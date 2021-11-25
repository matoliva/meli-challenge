import productImage from '../assets/iphone.webp'

export const ProductPage = () => {
  return (
    <article className="product-page">
      <div className="product-page__product">
        <img src={productImage} alt="producto" />
        <div className="product-page__product--buy">
          <p>Nuevo - 234 vendidos</p>
          <h3>Deco Reverse</h3>
          <h3>Sombrero Oxford</h3>
          <p className="product-page__product--price">$ 1.980</p>
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
