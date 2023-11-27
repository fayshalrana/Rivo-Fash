import React, { useContext } from 'react'

import { HiListBullet, HiRectangleGroup } from "react-icons/hi2";
import { productFilterContext } from '../../ProductContext/FilterContext';
const Sort = () => {
    const {filter_products, setGridView, listView, gird_view, sorting} = useContext(productFilterContext)
  return (
    <div className=' top-24 flex justify-between pb-3 items-center'>
      <div className="flex gap-3">
                <span onClick={setGridView} className={`${gird_view? "bg-black":"bg-gray-100"} rounded cursor-pointer  p-2 `}>
                    <HiRectangleGroup className={` ${gird_view? "text-white":"text-black"} text-2xl`}></HiRectangleGroup>
                    </span>
                <span onClick={listView} className={`${!gird_view? "bg-black":"bg-gray-100"} rounded cursor-pointer  p-2 `}>
                    <HiListBullet className={` ${!gird_view? "text-white":"text-black"} text-2xl`}></HiListBullet>
                    </span>
              </div>
              <p>{filter_products.length} Total products</p>
              <div className="">
                <form>
                <select onClick={sorting} id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                 
                  <option value="Low">Price(Low to High)</option>
                  <option value="High">Price(High to Low)</option>
                  <option value="a-z">Price(A to Z)</option>
                  <option value="z-a">Price(Z to A)</option>
                </select>
                </form>
              </div>
    </div>
  )
}

export default Sort
