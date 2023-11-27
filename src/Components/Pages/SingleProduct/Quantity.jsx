import React from 'react'

const Quantity = ({amount, setIncrease, setDecrease, stock}) => {
  return (
    <div className='flex gap-3 items-center'>
        <button className='text-2xl font-bold' onClick={setDecrease}>-</button>
        <p className='text-md font-semibold' >{amount}</p>
        <button className='text-xl font-bold'  onClick={()=>setIncrease(stock)}>+</button>
      
    </div>
  )
}

export default Quantity
