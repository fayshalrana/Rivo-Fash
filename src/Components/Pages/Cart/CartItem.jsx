import React from 'react'
import PriceConverter from '../../CustomHock/PriceConverter'
import { useContext } from 'react'
import { addToCartContext } from '../../ProductContext/CartContext'

const CartItem = ({cartItem}) => {
    const {image,name, price, quantity, id} = cartItem
    const subtotal = price * quantity
    const {handleRemove} = useContext(addToCartContext);
  return (
    <div className='grid grid-cols-6 border mt-3 p-1'>
     <div className="item col-span-2">
     <div className="img_name flex gap-2">
        <img  style={{width:"5rem"}} src={image} alt="" />
        <p className='text-x font-semibold pr-10'>{name}</p>
      </div>
     </div>
     <div className="item flex items-center">
    
     <PriceConverter price={price}></PriceConverter>
    
     </div>
     <div className="item flex items-center">
     <p>{quantity}</p>
    
     </div>
     <div className="item flex items-center">
     <PriceConverter price={subtotal}></PriceConverter>
     </div>
     <div className="item flex items-center justify-end">
     <button onClick={()=> handleRemove(id)} className='p-2 bg-red-600 text-white rounded'>Delete</button>
     </div>
      
    </div>
  )
}

export default CartItem
