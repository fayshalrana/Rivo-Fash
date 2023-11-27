import React from 'react'
import PriceConverter from '../../CustomHock/PriceConverter';

const TotalPrice = ({cart, shipping_fee, total_price}) => {

  return (
    <div className='border mt-3 p-4 bg-rose-200 flex flex-col gap-2'>
      <p>Sub-total: <span className="text-md font-semibold"><PriceConverter price={total_price}></PriceConverter></span></p>
      <p>Shipping: <span className="text-md font-semibold"><PriceConverter price={shipping_fee}></PriceConverter></span></p>
      <hr />
      <p>Total: <span className="text-md font-semibold"><PriceConverter price={total_price + shipping_fee}></PriceConverter></span></p>
    </div>
  )
}

export default TotalPrice
