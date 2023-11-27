import React, { useContext } from 'react'
import { productFilterContext } from '../../ProductContext/FilterContext'
import PriceConverter from '../../CustomHock/PriceConverter';

const ProductFilter = () => {
  const {
    filter: { text, minPrice, maxPrice, price },
    all_products,
    clearFilter,
    updateFilterValue
  } = useContext(productFilterContext);
  const getUniqueData = (data, attr) => {
    let newVal = data.map((curElem) => {
      return curElem[attr];
    });

    return (newVal = ["all", ...new Set(newVal)]);
  };
  const categoryData = getUniqueData(all_products, "category");
  return (
    <div className='px-3'>
      <div className="">
        <form onSubmit={(event) => event.preventDefault()}>
          <input type="text" placeholder='Search here' name='text' value={text} onChange={updateFilterValue} />
        </form>
      </div>
      <div className="">
        <h3 className='text-xl font-semibold pb-1'>Category</h3>
        <ul className='flex flex-col' >
          {categoryData.map((curElem, index) => {
            return (
              <button
                key={index}
                type="button"
                name="category"
                value={curElem}
                className='text-left py-1 capitalize'
                onClick={updateFilterValue}>
                {curElem}
              </button>
            );
          })}
        </ul>
      </div>
      <div className="flex flex-col">
        <h2 className='text-xl font-semibold'>Price Range</h2>
        <PriceConverter price={price}></PriceConverter>
        <input onChange={updateFilterValue} type="range" id="cowbell" name="price" min={minPrice} max={maxPrice} value={price} step="10" />
      </div>
      <div className="pt-4">
        <button
        type='button'
        className='p-2 bg-red-600 text-white'
        onClick={clearFilter}
        >Clear Filter</button>
      </div>
    </div>
  )
}

export default ProductFilter
