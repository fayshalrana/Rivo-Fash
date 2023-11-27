import React from 'react'
import ProductInList from './ProductInList'

const ListView = ({products}) => {
  return (
    <div className='grid gird-col-1'>
      {
        products.map((product, idx)=> <ProductInList key={idx} product={product}></ProductInList>)
      }
    </div>
  )
}

export default ListView
