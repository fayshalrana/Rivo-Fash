import { createContext, useEffect, useReducer } from "react"
import CartReducer from '../Reducer/CartReducer';
import { useState } from "react";

export const addToCartContext = createContext();

const CartContext = ({ children }) => {
    //Get localStor Data
    const localStorData = () => {
        let newCartData = localStorage.getItem('ShoppingCart')
        if (newCartData == []) {
            return []
        }
        else {
            return JSON.parse(newCartData);
        }
    }
    const initialState = {
        // cart : [], 
        cart: localStorData(),
        total_item: '',
        total_price: '',
        shipping_fee: 50,

    }

    const [state, dispatch] = useReducer(CartReducer, initialState)
    //Add product on Cart
    const addToCart = (id, name, price, amount, product) => {
        dispatch({ type: 'ADD_TO_CART', payload: {id, name, price, amount, product} })
    }
    // remove single product form cart
    const handleRemove = (id) => {
        dispatch({ type: "REMOVE_CART_ITEM", payload: id })
    }
    /// Add data in localStor
    useEffect(() => {
        // get total cart item 
        dispatch({type:"TOTAL_CART_ITEM"})
        // get total price of item 
        dispatch({type:"TOTAL_PRICE_OF_ITEMS"})
        localStorage.setItem("ShoppingCart", JSON.stringify(state.cart))
    }, [state.cart])


    //Manage product quantity 
    const [amount, setAmount] = useState(1);
    const setIncrease = (stock) => {
        amount < stock ? setAmount(amount + 1) : setAmount(stock);
    }
    const setDecrease = () => {
        amount > 1 ? setAmount(amount - 1) : setAmount(1)
    }
    //Clear Cart product 
    const clearCart = () => {
       dispatch({type:"CLEAR_CART"})
    }

    return (
        <addToCartContext.Provider value={{ ...state, addToCart, handleRemove, amount, setDecrease, setIncrease, clearCart }}>
            {children}
        </addToCartContext.Provider>
    )
}

export default CartContext
