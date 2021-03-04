import React from 'react'
import './product.css'

const Product = ({product, handleAddToCart }) => {
  return (
    <div className="Products-item">
      <img src={product.imageCover} alt={product.title}/>
        <div className="Product-item-info">
          <h2>{product.name} $
            <span>{product.price}</span>
          </h2>
            <p>{product.description}</p>
          </div>
          <button type="button" onClick={handleAddToCart(product)} >Comprar</button>
    </div>
  )
}

export default Product
