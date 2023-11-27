import React, { createContext, useCallback, useContext, useEffect, useReducer } from 'react'
import FilterReduceer from '../Reducer/FilterReduceer';
import { productsContext } from './ProductProvider';

export const productFilterContext = createContext();

const initialState = {
  filter_products: [],
  all_products:[],
  gird_view: true,
  sort_value: "Low",
  filter:{
    text: "",
    category: "all",
    maxPrice:0,
    price:0,
    minPrice:0
  }
}

const FilterContext = ({ children }) => {
  const { products } = useContext(productsContext);

  const [state, dispatch] = useReducer(FilterReduceer, initialState);
  const setGridView = () => {
    dispatch({ type: "SET_GRIDVIEW" })
  }

// sort product 
useEffect(()=>{
  dispatch({type:"SHORTING_PRODUCT", payload: products})
},[ state.sort_value])

  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_DATA", payload: products })
  }, [products]);

  const listView =()=>{
    dispatch({type:"PRODUCT_LIST_VIEW"})
  }

  // sorting function 
  const sorting =()=>{
    dispatch({type:"GET_SORT_VALUE"})
  }

  // search filter function
  const updateFilterValue =(event) =>{
    let name = event.target.name;
    let value = event.target.value;

    return dispatch({type: "UPDATE_SEARCH_VALUE", payload: {name, value}})
  }
  useEffect(()=>{
    dispatch({type: "SEARCH_PRODUCT_UPDATE"})
  },[products, state.filter])

  //Clear Filter 
  const clearFilter = ()=>{
    dispatch({type: "CLEAR_FILTER"})
  
  }


  return (
    <productFilterContext.Provider value={{ ...state, setGridView, listView, clearFilter, sorting, updateFilterValue }}>
      {children}
    </productFilterContext.Provider>
  )
}

export default FilterContext
