const CartReducer = (state, action) => {

    if (action.type === "ADD_TO_CART") {
        let {id, name, price, amount, product } = action.payload;
        let quantity = product.quantity;
        if (quantity == 0) {
            quantity = amount || 1;
        } else {
            quantity += amount
        }

        //handle existing product on cart
        let existingProduct = state.cart.find(curElm => curElm.id == id)
        if (existingProduct) {
            const updatedProduct = state.cart.map(curElm => {
                if(curElm.id == id){
                    let newQuantity = curElm.quantity + amount
                    return {
                        ...curElm,
                        quantity: newQuantity
                    }
                }
                else{
                    return curElm;
                }
            });
            return {
                ...state,
                cart: updatedProduct
            }

        } else {
            let cartProduct;
            cartProduct = {
                id,
                name,
                price,
                quantity,
                shipping_fee: product.shipping,
                image: product.img,
                max: product.stock
            }
            return {
                ...state,
                cart: [...state.cart, cartProduct],
                
            }
        }



    }
    //Remove single item form cart
    if (action.type === "REMOVE_CART_ITEM") {
        let updatedCart = state.cart.filter(curElm => curElm.id != action.payload)

        return {
            ...state,
            cart: updatedCart,
        }

    }
    // Clear all product form cart
    if (action.type === "CLEAR_CART") {
        return {
            ...state,
            cart: []
        }
    }
    if(action.type === "TOTAL_CART_ITEM"){
        let updatedCartItem = state.cart.reduce((initialValue, curElm) =>{
            let {quantity} = curElm;
            initialValue += quantity;
            return initialValue
        },0)
        return{
            ...state,
            total_item: updatedCartItem
        }
    }

    if(action.type ==="TOTAL_PRICE_OF_ITEMS"){
        let totalPrice = state.cart.reduce((initialValue, cerElm)=>{
            let {price, quantity} = cerElm;
            initialValue += price * quantity 
            return initialValue
        },0)
        return{
            ...state,
            total_price:totalPrice
        }
    }

    return state;
}

export default CartReducer
