import React, { useContext } from 'react'
import { productsContext } from '../../../ProductContext/ProductProvider'
import ProductItem from './ProductItem';

const FeatureItem = () => {
  const { products, isLoading } = useContext(productsContext);

  return (
   <div className="py-10">
     <div className='container'>
      <div className='py-5'>
        <h3 className='text-md font-semibold text-purple-600'>Check Now!</h3>
        <h2 className='text-3xl font-bold'>Our Feature Service</h2>
      </div>
      <div className="grid gap-5 grid-cols-4">
        {isLoading? "Loading......." :
          products.slice(0, 4).map(product => <ProductItem key={product.id} product={product}></ProductItem>)
        }
      </div>
    </div>
   </div>
  )
}

export default FeatureItem
