import React, { useContext } from 'react'
import { productFilterContext } from '../../ProductContext/FilterContext'
import GridView from './GridView'
import ListView from './ListView'

const Product = () => {
    const { gird_view, filter_products } = useContext(productFilterContext);
    if (gird_view === true) {
        return <GridView products={filter_products}></GridView>
    }
    if (gird_view == false) {
        return <ListView products={filter_products}></ListView>
    }
}

export default Product
