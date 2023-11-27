import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import PriceConverter from '../../../CustomHock/PriceConverter';
import { useContext } from 'react';
import { addToCartContext } from '../../../ProductContext/CartContext';

const ProductItem = ({product}) => {
  const{addToCart} = useContext(addToCartContext)
   const {id, name, price, img, quantity} = product;

  const navigate = useNavigate();
  const showSingleProduct = id =>{
    navigate(`/products/${id}`)
  }
  return (
    <div className='border p-5 bg-purple-300 rounded-md'>
        <div className="">
            <img src={img} alt="" />
        </div>
        <div className="py-4">
            <h2 className='text-x font-semibold'>{name.length > 20? name.slice(0, 20) + "..." : name}</h2>
            <h3 className='text-md text-purple-700 font-semibold'>Price: <PriceConverter price={price}></PriceConverter></h3>
           
        </div>
          <button onClick={()=> addToCart(id, name, price, quantity, product)} type='button'className='bg-rose-500 text-white font-semibold text-sm py-2 px-4 rounded-md'>Add to cart</button>
          <button onClick={()=> showSingleProduct(id)} type='button'className='mx-3 bg-purple-700 text-white font-semibold text-sm py-2 px-4 rounded-md'>Details</button>
        
    </div>
  )
}

export default ProductItem
