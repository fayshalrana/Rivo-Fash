import axios from 'axios';
import React, { createContext, useEffect, useReducer, useState } from 'react'
import ProductsReducer from '../Reducer/ProductsReducer';

export const productsContext = createContext(null);

//product API
const product_API = import.meta.env.VITE_APP_PRODUCT_API;

//Customer reviews
const reviews_Api = import.meta.env.VITE_APP_REVIEWS_API;

const initialState = {
  isLoading: false,
  isError: false,
  products: []
}

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProductsReducer, initialState)

  const getProduct = async (url) => {
    dispatch({ type: "SET_LOADING" })
    try {
      const res = await axios.get(url);
      const products = await res.data;
      dispatch({ type: "PRODUCT_DATA", payload: products })
    } catch (error) {
      dispatch({ type: "API_ERROR" })
    }
  }

  useEffect(() => {
    getProduct(product_API);
  }, [])

  const [reviews, setReviews] = useState([])

 useEffect(()=>{
(async ()=>{
  try {
    const reviewsData = await axios.get(reviews_Api)
    setReviews(reviewsData.data)
  } catch (error) {
    console.log(error.message);
  }
})();
 },[])



  return (
    <productsContext.Provider value={{ ...state, reviews}}>
      {children}
    </productsContext.Provider>
  )
}


export default ProductProvider;