import React from 'react'
import ProductItem from '../Home/FeatureItem/ProductItem'

const GridView = ({products}) => {

  return (
    <div className='grid grid-cols-3 gap-3'>
        {products.map((product, idx) => <ProductItem key={idx} product={product}></ProductItem>)}
    </div>
  )
}

export default GridView
