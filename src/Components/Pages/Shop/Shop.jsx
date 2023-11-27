import React, { useContext, useState } from 'react'
import { productsContext } from '../../ProductContext/ProductProvider';
import Product from './product';
import Sort from './Sort';
import ProductFilter from './ProductFilter';
const Shop = () => {
  const { isLoading, products } = useContext(productsContext);


  return (
    <div className="container pt-24">
      <div className='grid grid-cols-4'>
        <div className=''>
          <ProductFilter></ProductFilter>
        </div>
        <div className="col-span-3 pb-10">
            <Sort></Sort>
          <div className="product_container">
            <Product></Product>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop

