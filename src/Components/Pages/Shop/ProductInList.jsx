import { Rating } from '@smastrom/react-rating';
import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import PriceConverter from '../../CustomHock/PriceConverter';
import { useContext } from 'react';
import {addToCartContext} from '../../ProductContext/CartContext'

const ProductInList = ({product}) => {

const {addToCart} = useContext(addToCartContext)

    const {id, name, seller, quantity, price, ratings, img, ratingsCount} = product;
    
        const navigation = useNavigate()
        const hanldeViewProduct = (id)=>{
            navigation(`/products/${id}`)
        }


  return (
    <div className='flex border p-2 gap-10 my-2'>
      <div className="">
        <img style={{width:"10rem"}} src={img} alt="" />
      </div>
      <div>
            <h2 className='text-2xl font-semibold'>{name}</h2>
            <div className=" flex gap-2 items-center py-2">
                        <Rating style={{ maxWidth: 120 }} value={ratings} readOnly />
                        <span>({ratingsCount} customer reviwes)</span>
                    </div>
            <h3 className='text-md text-purple-700 font-semibold pb-5'>Price:<PriceConverter price={price}></PriceConverter></h3>
          <button onClick={()=> hanldeViewProduct(id)} type='button'className='border bg-purple-700 text-white font-bold py-2 px-4 rounded-md'>Details</button>
         
          <button onClick={()=> addToCart(id, name, price, quantity, product)} type='button'className='border mx-4 bg-rose-500 text-white font-bold py-2 px-4 rounded-md'>Add to cart</button>
        </div>
    </div>
  )
}

export default ProductInList
