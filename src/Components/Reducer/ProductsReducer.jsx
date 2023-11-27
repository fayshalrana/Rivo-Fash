import React from 'react'

const ProductsReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return{
        ...state,
        isLoading: true
      }

      case "PRODUCT_DATA":
       return{
        ...state,
        isLoading : false,
        products:action.payload,
        isError: false
       }

      case "API_ERROR":
        return{
          ...state,
          isLoading:false,
          isError: true
        }
  
    default:
      return state;
  }
}

export default ProductsReducer
