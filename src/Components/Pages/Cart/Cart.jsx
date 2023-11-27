import React, { useContext } from 'react'
import { addToCartContext } from '../../ProductContext/CartContext'
import CartItem from './CartItem';
import { NavLink } from 'react-router-dom';
import TotalPrice from './TotalPrice';

const Cart = () => {
  const { cart, total_price, shipping_fee, clearCart } = useContext(addToCartContext)
  return (
    <div style={{ maxWidth: "70rem" }} className='py-24 m-auto'>
      {cart.length > 0 ?
        <>

          <div className="cart_header grid grid-cols-6">
            <div className="cart_header_item col-span-2"><p className='text-md font-semibold'>Items</p></div>
            <div className="cart_header_item"><p className='text-md font-semibold'>Price</p></div>
            <div className="cart_header_item"><p className='text-md font-semibold'>Quantity</p></div>
            <div className="cart_header_item"><p className='text-md font-semibold'>SubTotal</p></div>
            <div className="cart_header_item"><p className='text-md font-semibold text-end'>Remove</p></div>
          </div>
          <hr />
          <div className='pb-3'>
            {
              cart.map((cartItem, idx) => <CartItem key={idx} cartItem={cartItem}></CartItem>)
            }
          </div>
        <hr />
        <div className="flex justify-between pt-2">
          <NavLink to='/products'>
          <button className='py-2 px-3 bg-purple-700 text-white text-md font-semibold'>Continue Shopping</button>
          </NavLink>
           <button onClick={clearCart} className='py-2 px-3 bg-rose-600 text-white text-md font-semibold'>Clear cart</button>
        </div>
        <div className="flex justify-end">
        <TotalPrice cart={cart} total_price={total_price} shipping_fee={shipping_fee}></TotalPrice>
        </div>

        </>

        :
        <div className="flex items-center gap-5 justify-center">
          <div className="">
            <img src="../83374-ecommerce.webp" alt="" />
          </div>
          <div className="">
          <h2 className='text-3xl font-bold'>Your cart is empty</h2>
          <p className='py-3 text-md'>Look like you have not added anything to your Cart. <br /> Go ahead & explore top category</p>
          <NavLink to="/products">
          <button className='py-2 px-4 bg-purple-600 text-white mt-2 rounded-md font-semibold'>Return to Shop</button>
          </NavLink>
          </div>
         
        </div>
   
          }
    </div>
  )
}

export default Cart
