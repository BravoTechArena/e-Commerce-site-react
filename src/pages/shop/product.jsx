import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context'
import { useNavigate } from 'react-router-dom'


const Product = ({ data }) => {
    const {id, productName, price, productImage} = data
    const { addToCart, cartItems } = useContext(ShopContext)
    const cartItemAmount = cartItems[id]

    const navigate = useNavigate()

  return (
    <div className='product'>
        <img src={productImage} alt={productName} />
        <div className="description">
            <p><b>{productName}</b></p>
            <p>${price}</p>
        </div>
        <div className="cartBttn">
        <button className="addToCartBttn" onClick={() => addToCart(id)}>
          Add To Cart 
        </button>
        <button className='addToCartBttn' onClick={() => navigate('/cart')}>Go To Cart 
        {
          cartItemAmount > 0 && 
          <>
          ({cartItemAmount})
          </>
          
          }
        </button>
        </div>
    </div>
  )
}

export default Product
