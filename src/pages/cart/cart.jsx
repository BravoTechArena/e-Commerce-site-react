import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context'
import { PRODUCTS } from '../../products'
import CartItem from './cart-item'
import './cart.css'
import { useNavigate } from 'react-router-dom'


const Cart = () => {
const {cartItems, getTotalCartAmount} = useContext(ShopContext)
const totalAmount = getTotalCartAmount()

const navigate = useNavigate()

  return (
    <div className='cart'>
      <div className="cartItems">
         {PRODUCTS.map((product) => {
            if (cartItems[product.id] !== 0) {
              return <CartItem data={product} />
            }
         })} 
      </div>
      {totalAmount > 0 ? 
      <div className="checkout">
        <h1>Your Cart Items</h1>
        <p>Subtotal: ${totalAmount}</p>
        <button onClick={() => navigate('/')}>Continue Shopping</button>
        <button>Checkout</button>
      </div>
      : 
      <div className='checkout'>
      <h1>Your Cart is Empty</h1>
      <button className='cartItemBttn' onClick={() => navigate('/')}>Continue Shopping</button>
      </div>
      }
    </div>
  )
}

export default Cart
